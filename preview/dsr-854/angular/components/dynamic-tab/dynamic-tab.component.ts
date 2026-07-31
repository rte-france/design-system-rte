import { CdkDragDrop, DragDropModule } from "@angular/cdk/drag-drop";
import { CommonModule } from "@angular/common";
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  Injector,
  input,
  OnDestroy,
  output,
  afterNextRender,
  signal,
  viewChild,
  viewChildren,
} from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import {
  buildNewTab,
  captureTabPositions,
  computeVisibleTabCount,
  ensureSelectedTabVisible,
  formatHiddenTabsLabel,
  getSelectedTabIdAfterClose,
  playFlipReorderAnimation,
  prefersReducedMotion,
  removeTab,
  reorderOptionsSlice,
  updateTabTitle,
} from "@design-system-rte/core/components/dynamic-tab";
import {
  DynamicTabAppearance,
  DynamicTabItemOption,
} from "@design-system-rte/core/components/dynamic-tab/dynamic-tab.interface";
import { fromEvent } from "rxjs";

import { DropdownModule } from "../dropdown";
import { DropdownItemConfig } from "../dropdown/dropdown.types";
import { IconComponent } from "../icon/icon.component";

import { DynamicTabItemComponent } from "./dynamic-tab-item/dynamic-tab-item.component";
import { DynamicTabKeyboardService } from "./dynamic-tab-keyboard.service";

@Component({
  selector: "rte-dynamic-tab",
  imports: [CommonModule, DragDropModule, DropdownModule, IconComponent, DynamicTabItemComponent],
  providers: [DynamicTabKeyboardService],
  templateUrl: "./dynamic-tab.component.html",
  styleUrl: "./dynamic-tab.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: "rte-dynamic-tab",
    "[attr.data-appearance]": "appearance()",
    "(focusin.capture)": "onContainerFocusCapture($event)",
  },
})
export class DynamicTabComponent implements AfterViewInit, OnDestroy {
  private readonly destroyRef = inject(DestroyRef);
  private readonly injector = inject(Injector);
  private readonly keyboardService = inject(DynamicTabKeyboardService);

  readonly id = input("dynamic-tab");
  readonly appearance = input<DynamicTabAppearance>("neutral");
  readonly options = input<DynamicTabItemOption[]>([]);
  readonly selectedTabId = input<string | undefined>(undefined);
  readonly compactSpacing = input(false);
  readonly isClosable = input(true);
  readonly isEditable = input(true);
  readonly newTabConfig = input<DynamicTabItemOption | undefined>(undefined);
  readonly iconName = input<string | undefined>(undefined);
  readonly hiddenTabsLabel = input<string | undefined>(undefined);

  readonly changeActiveTab = output<string>();
  readonly updateTabs = output<DynamicTabItemOption[]>();

  readonly containerRef = viewChild<ElementRef<HTMLDivElement>>("container");
  readonly tabListRef = viewChild<ElementRef<HTMLUListElement>>("tabList");
  readonly tabItemRefs = viewChildren(DynamicTabItemComponent);

  readonly containerWidth = signal(0);
  readonly isMoving = signal(false);
  readonly sliderLeft = signal(0);
  readonly sliderWidth = signal(0);

  readonly overflowState = computed(() => {
    const width = this.containerWidth();
    const totalTabs = this.options().length;

    if (width === 0) {
      return { maxVisibleTabs: totalTabs, hasOverflow: false, tabWidth: 44 };
    }

    return computeVisibleTabCount(width, totalTabs);
  });

  readonly maxVisibleTabs = computed(() => this.overflowState().maxVisibleTabs);
  readonly hasOverflow = computed(() => this.overflowState().hasOverflow);
  readonly tabWidth = computed(() => this.overflowState().tabWidth);
  readonly hiddenCount = computed(() => Math.max(0, this.options().length - this.maxVisibleTabs()));

  readonly visibleOptions = computed(() => this.options().slice(0, this.maxVisibleTabs()));

  readonly hiddenDropdownItems = computed((): DropdownItemConfig[] =>
    this.options()
      .slice(this.maxVisibleTabs())
      .map((option) => ({
        id: option.id,
        label: option.title,
      })),
  );

  readonly hiddenTabsText = computed(() => {
    const customLabel = this.hiddenTabsLabel();

    if (customLabel) {
      return customLabel;
    }

    return formatHiddenTabsLabel(this.hiddenCount());
  });

  readonly indicatorStyle = computed(() => ({
    visibility: this.isMoving() || this.visibleOptions().length === 0 ? ("hidden" as const) : ("visible" as const),
    left: `${this.sliderLeft()}px`,
    width: `${this.sliderWidth()}px`,
  }));

  private resizeObserver: ResizeObserver | null = null;
  private indicatorFrameId: number | null = null;

  constructor() {
    effect(() => {
      const options = this.options();
      const selectedTabId = this.selectedTabId();
      const { maxVisibleTabs, hasOverflow } = this.overflowState();

      if (!hasOverflow || !selectedTabId) {
        return;
      }

      const updatedOptions = ensureSelectedTabVisible(options, selectedTabId, maxVisibleTabs);

      if (updatedOptions !== options) {
        this.updateTabs.emit(updatedOptions);
      }
    });

    effect(() => {
      this.selectedTabId();
      this.visibleOptions();
      this.scheduleIndicatorUpdate();
    });
  }

  ngAfterViewInit(): void {
    this.setupResizeObserver();
    this.setupKeyboardTracking();
    this.scheduleIndicatorUpdate();
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();

    if (this.indicatorFrameId !== null) {
      cancelAnimationFrame(this.indicatorFrameId);
    }
  }

  onContainerFocusCapture(event: FocusEvent): void {
    const container = this.containerRef()?.nativeElement;

    if (!container || this.options().length === 0) {
      return;
    }

    this.keyboardService.handleContainerFocusCapture(event, container, this.selectedTabId(), (tabId) =>
      this.selectTab(tabId),
    );
  }

  onTabClick(tabId: string): void {
    this.selectTab(tabId);
  }

  onTabKeydown(event: KeyboardEvent): void {
    const listElement = this.tabListRef()?.nativeElement;

    if (!listElement) {
      return;
    }

    const visibleTabIds = this.visibleOptions().map((option) => option.id);

    this.keyboardService.handleTabKeydown(event, {
      listElement,
      visibleTabIds,
      selectedTabId: this.selectedTabId(),
      isMoving: this.isMoving(),
      selectTab: (id) => this.selectTab(id),
      reorderTabs: (fromIndex, toIndex) => this.reorderVisibleTabs(fromIndex, toIndex),
      getTabIndex: (id) => visibleTabIds.indexOf(id),
      onExitMoveMode: () => this.isMoving.set(false),
    });

    if (event.key === "Escape" && this.isMoving()) {
      this.isMoving.set(false);
    }
  }

  onEnterMoveMode(): void {
    if (!this.keyboardService.shouldEnterMoveModeOnSpaceKeyup()) {
      return;
    }

    this.isMoving.set(true);
  }

  onCloseTab(tabId: string): void {
    const currentOptions = this.options();

    if (currentOptions.length <= 1) {
      return;
    }

    const isClosingActiveTab = this.selectedTabId() === tabId;
    const nextSelectedTabId = isClosingActiveTab
      ? getSelectedTabIdAfterClose(currentOptions, tabId)
      : this.selectedTabId();
    const updatedOptions = removeTab(currentOptions, tabId);

    if (isClosingActiveTab && nextSelectedTabId) {
      this.changeActiveTab.emit(nextSelectedTabId);
    }

    this.updateTabs.emit(updatedOptions);
    this.scheduleIndicatorUpdate();
    this.focusTab(nextSelectedTabId);
  }

  onChangeTabTitle(event: { id: string; title: string }): void {
    this.updateTabs.emit(updateTabTitle(this.options(), event.id, event.title));
    this.scheduleIndicatorUpdate();
  }

  onAddTab(): void {
    const newTab = buildNewTab(this.newTabConfig(), this.options());

    if (!newTab) {
      return;
    }

    const updatedOptions = [...this.options(), newTab];
    this.updateTabs.emit(updatedOptions);
    this.changeActiveTab.emit(newTab.id);
    this.scheduleIndicatorUpdate();
  }

  onHiddenTabSelect(event: { id: string }): void {
    if (!event.id) {
      return;
    }

    const updatedOptions = ensureSelectedTabVisible(this.options(), event.id, this.maxVisibleTabs());

    if (updatedOptions !== this.options()) {
      this.updateTabs.emit(updatedOptions);
    }

    this.changeActiveTab.emit(event.id);
    this.scheduleIndicatorUpdate();
    this.focusTab(event.id);
  }

  onDrop(event: CdkDragDrop<DynamicTabItemOption[]>): void {
    if (event.previousIndex === event.currentIndex) {
      this.isMoving.set(false);
      return;
    }

    this.updateTabs.emit(
      reorderOptionsSlice(this.options(), event.previousIndex, event.currentIndex, this.maxVisibleTabs()),
    );
    this.isMoving.set(false);
    this.scheduleIndicatorUpdate();
  }

  onDragStarted(): void {
    this.isMoving.set(true);
  }

  onDragEnded(): void {
    this.isMoving.set(false);
    this.scheduleIndicatorUpdate();
  }

  isTabActive(tabId: string): boolean {
    return this.selectedTabId() === tabId;
  }

  private selectTab(tabId: string): void {
    if (tabId !== this.selectedTabId()) {
      this.changeActiveTab.emit(tabId);
    }

    this.scheduleIndicatorUpdate();
  }

  private reorderVisibleTabs(fromIndex: number, toIndex: number): void {
    const listElement = this.tabListRef()?.nativeElement;

    if (this.isMoving() && listElement && !prefersReducedMotion()) {
      this.animateKeyboardReorder(listElement, () => this.applyVisibleTabReorder(fromIndex, toIndex));
      return;
    }

    this.applyVisibleTabReorder(fromIndex, toIndex);
  }

  private applyVisibleTabReorder(fromIndex: number, toIndex: number): void {
    this.updateTabs.emit(reorderOptionsSlice(this.options(), fromIndex, toIndex, this.maxVisibleTabs()));
    this.scheduleIndicatorUpdate();
    this.focusTab(this.selectedTabId());
  }

  private animateKeyboardReorder(listElement: HTMLElement, applyReorder: () => void): void {
    const firstPositions = captureTabPositions(listElement);

    applyReorder();

    afterNextRender(
      () => {
        playFlipReorderAnimation(listElement, firstPositions);
      },
      { injector: this.injector },
    );
  }

  private focusTab(tabId: string | undefined): void {
    requestAnimationFrame(() => {
      const container = this.containerRef()?.nativeElement;

      if (!tabId || !container) {
        return;
      }

      const selectedElement = container.querySelector(`[data-tab-id="${tabId}"]`) as HTMLElement | null;
      selectedElement?.focus();
    });
  }

  private setupResizeObserver(): void {
    const container = this.containerRef()?.nativeElement;

    if (!container) {
      return;
    }

    this.containerWidth.set(container.offsetWidth);
    this.resizeObserver = new ResizeObserver(() => {
      this.containerWidth.set(container.offsetWidth);
      this.scheduleIndicatorUpdate();
    });
    this.resizeObserver.observe(container);
  }

  private setupKeyboardTracking(): void {
    fromEvent<KeyboardEvent>(document, "keydown")
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((event) => {
        this.keyboardService.trackDocumentKeydown(event);
        this.keyboardService.handleGlobalKeydownWhileMoving(event, this.isMoving(), () => this.isMoving.set(false));
      });
  }

  private scheduleIndicatorUpdate(): void {
    if (this.indicatorFrameId !== null) {
      cancelAnimationFrame(this.indicatorFrameId);
    }

    this.indicatorFrameId = requestAnimationFrame(() => {
      this.indicatorFrameId = null;
      this.updateSelectedIndicator();
    });
  }

  private updateSelectedIndicator(): void {
    const selectedTabId = this.selectedTabId();
    const selectedItem = this.tabItemRefs().find((item) => item.option().id === selectedTabId);
    const tabElement = selectedItem?.hostElement.nativeElement;

    if (!tabElement) {
      return;
    }

    this.sliderLeft.set(tabElement.offsetLeft);
    this.sliderWidth.set(tabElement.offsetWidth);
  }
}
