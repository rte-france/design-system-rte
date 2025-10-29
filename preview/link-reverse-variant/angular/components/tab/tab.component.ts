import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  input,
  computed,
  signal,
  viewChildren,
  ElementRef,
  SimpleChanges,
  output,
  AfterViewInit,
  OnChanges,
  viewChild,
  OnDestroy,
} from "@angular/core";
import { Direction } from "@design-system-rte/core/components/common/common-types";
import { TabAlignment, TabItemProps, TabProps } from "@design-system-rte/core/components/tab/tab.interface";
import { scrollToSelectedTab } from "@design-system-rte/core/components/tab/tab.utils";
import {
  ARROW_DOWN_KEY,
  ARROW_LEFT_KEY,
  ARROW_RIGHT_KEY,
  ARROW_UP_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { BadgeComponent } from "../badge/badge.component";
import { DropdownModule } from "../dropdown";
import { DropdownItemConfig } from "../dropdown/dropdown-item/dropdown-item.component";
import { IconComponent } from "../icon/icon.component";
import { IconButtonComponent } from "../icon-button/icon-button.component";

import { TabItemComponent } from "./tab-item/tab-item.component";

@Component({
  selector: "rte-tab",
  imports: [CommonModule, TabItemComponent, IconButtonComponent, DropdownModule, IconComponent, BadgeComponent],
  standalone: true,
  templateUrl: "./tab.component.html",
  styleUrl: "./tab.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent implements AfterViewInit, OnChanges, OnDestroy {
  readonly alignment = input<TabAlignment>("start");
  readonly direction = input<Direction>("horizontal");
  readonly options = input<TabProps["options"]>([]);
  readonly selectedTabId = input<TabProps["selectedTabId"]>();
  readonly compactSpacing = input<TabProps["compactSpacing"]>(false);
  readonly overflowType = input<TabProps["overflowType"]>("scrollable");
  readonly inverted = input<boolean>(false);

  readonly sliderLeft = signal(0);
  readonly sliderWidth = signal(0);
  readonly sliderTop = signal(0);
  readonly sliderHeight = signal(0);

  readonly tabItemRefs = viewChildren<TabItemComponent>("tabItem");
  readonly containerRef = viewChild<ElementRef<HTMLDivElement>>("tabList");
  readonly hoverIndicatorRefs = viewChildren<ElementRef<HTMLDivElement>>("hoverIndicator");

  readonly selectedTabRef = computed(() => {
    const idx = this.options().findIndex((opt) => opt.id === this.selectedTabId());
    const tabItem = this.tabItemRefs()[idx];
    return tabItem;
  });

  readonly hoverIndicatorStyle = signal<{
    width?: number;
    left?: number;
    top?: number;
    height?: number;
    opacity?: number;
  } | null>(null);

  readonly change = output<string>();

  readonly isScrollable = signal(false);
  private readonly isOverflowingLeft = signal(false);
  private readonly isOverflowingRight = signal(false);
  private readonly isOverflowingTop = signal(false);
  private readonly isOverflowingBottom = signal(false);

  readonly canScrollBackward = computed(() => {
    return this.isOverflowingLeft() || this.isOverflowingTop();
  });

  readonly canScrollForward = computed(() => {
    return this.isOverflowingRight() || this.isOverflowingBottom();
  });

  readonly isHorizontal = computed(
    () => this.direction() === "horizontal" && (this.isOverflowingRight() || this.isOverflowingLeft()),
  );

  readonly shouldDisplayDropdown = computed(() => this.overflowType() === "dropdown" && this.isHorizontal());

  readonly selectedTab = computed(() => {
    return this.options().find((option) => option.id === this.selectedTabId());
  });
  readonly dropdownFilteredOptions = computed(() => {
    return this.options().filter((option) => option.id !== this.selectedTabId()) as DropdownItemConfig[];
  });

  displayBadge = (option: TabItemProps): boolean => {
    return (
      !!option.showBadge ||
      (option.badgeCount !== undefined && option.badgeCount > 0 && option.badgeContent === "number") ||
      (option.badgeContent === "icon" && !!option.badgeIcon)
    );
  };

  isSelected(id: string): boolean {
    return this.selectedTabId() === id;
  }

  readonly tabItemSelectedIndicatorStyle = computed(() => ({
    left: `${this.shouldDisplayDropdown() ? 0 : this.sliderLeft()}px`,
    top: `${this.sliderTop()}px`,
    width: `${this.sliderWidth() + (this.shouldDisplayDropdown() ? 32 : 0)}px`,
    height: `${this.sliderHeight()}px`,
  }));

  ngAfterViewInit() {
    this.updateSelectedTabItemIndicator();
    this.computeScrollableSignals();
    window.addEventListener("resize", this.updateSelectedTabItemIndicator.bind(this));
    window.addEventListener("resize", this.computeScrollableSignals.bind(this));
    if (this.containerRef()) {
      this.containerRef()?.nativeElement.addEventListener("scroll", this.computeScrollableSignals.bind(this));
    }
    this.hoverIndicatorRefs().forEach((hoverIndicator) => {
      hoverIndicator.nativeElement.style.opacity = "0";
    });
  }

  ngOnDestroy() {
    window.removeEventListener("resize", this.updateSelectedTabItemIndicator.bind(this));
    window.removeEventListener("resize", this.computeScrollableSignals.bind(this));
    if (this.containerRef()) {
      this.containerRef()?.nativeElement.removeEventListener("scroll", this.computeScrollableSignals.bind(this));
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["selectedTabId"]) {
      this.updateSelectedTabItemIndicator();
    }
  }

  onKeydownTabItem = (event: KeyboardEvent) => {
    const isVertical = this.direction() === "vertical";

    const isDownKeyPressed = isVertical && event.key === ARROW_DOWN_KEY;
    const isUpKeyPressed = isVertical && event.key === ARROW_UP_KEY;
    const isRightKeyPressed = !isVertical && event.key === ARROW_RIGHT_KEY;
    const isLeftKeyPressed = !isVertical && event.key === ARROW_LEFT_KEY;

    const isArrowNext = isDownKeyPressed || isRightKeyPressed;
    const isArrowPrev = isUpKeyPressed || isLeftKeyPressed;

    if (isArrowNext || isArrowPrev) {
      event.preventDefault();
      this.focusItem(isArrowNext ? "next" : "previous");
    }
  };

  onClickTabItem = (id: string) => {
    if (id !== this.selectedTabId()) {
      this.change.emit(id);
      if (!this.shouldDisplayDropdown()) {
        const newTab = this.getTabItem(id)?.tabItemRef()?.nativeElement;
        if (newTab) {
          const container = this.containerRef()?.nativeElement;
          if (container) {
            scrollToSelectedTab(newTab, container, this.direction());
          }
        }
      }
    }
  };

  scrollBackward() {
    if (this.containerRef()?.nativeElement) {
      const scrollObject = this.direction() === "horizontal" ? { left: -300 } : { top: -300 };
      this.containerRef()?.nativeElement.scrollBy({ ...scrollObject, behavior: "smooth" });
    }
  }

  scrollForward() {
    if (this.containerRef() && this.containerRef()?.nativeElement) {
      const scrollObject = this.direction() === "horizontal" ? { left: 300 } : { top: 300 };
      this.containerRef()?.nativeElement.scrollBy({ ...scrollObject, behavior: "smooth" });
    }
  }

  private getTabItem = (id: string) => {
    return this.tabItemRefs().find((tab) => tab.option()?.id === id);
  };

  private focusItem = (direction: "next" | "previous") => {
    const currentIndex = this.tabItemRefs().findIndex((tab) => tab === this.selectedTabRef());
    const maxIterations = this.tabItemRefs().length;
    let newIndex = this.computeNextItemIndex(currentIndex, maxIterations, direction);
    let counter = 0;
    while (
      this.tabItemRefs()[newIndex].tabItemRef()?.nativeElement.getAttribute("data-disabled") === "true" &&
      counter < maxIterations
    ) {
      newIndex = this.computeNextItemIndex(newIndex, maxIterations, direction);
      counter++;
    }
    this.tabItemRefs()[newIndex].tabItemRef()?.nativeElement.focus();
    this.tabItemRefs()[newIndex].tabItemRef()?.nativeElement.click();
  };

  private computeNextItemIndex(currentIndex: number, totalItems: number, direction: "next" | "previous") {
    return direction === "next" ? (currentIndex + 1) % totalItems : (currentIndex - 1 + totalItems) % totalItems;
  }

  private computeIndicatorStyle(tabItem: HTMLElement) {
    if (this.direction() === "horizontal") {
      return {
        width: tabItem.offsetWidth,
        left: tabItem.offsetLeft,
        top: tabItem.offsetTop + tabItem.offsetHeight,
      };
    } else {
      return {
        left: 0,
        top: tabItem.offsetTop,
        height: tabItem.offsetHeight,
        width: 2,
      };
    }
  }

  private updateSelectedTabItemIndicator() {
    const idx = this.options().findIndex((opt) => opt.id === this.selectedTabId());
    const tabItem = this.tabItemRefs()[idx];
    if (tabItem?.tabItemRef) {
      if (tabItem.option()?.disabled) {
        return;
      }
      const tabItemRef = tabItem.tabItemRef?.();
      if (tabItemRef && tabItemRef.nativeElement) {
        const tabItemElement = tabItemRef.nativeElement;
        const indicatorStyle = this.computeIndicatorStyle(tabItemElement);
        this.sliderHeight.set(indicatorStyle.height ?? 2);
        this.sliderTop.set(indicatorStyle.top);
        this.sliderWidth.set(indicatorStyle.width ?? 2);
        this.sliderLeft.set(indicatorStyle.left);
      }
    }
  }

  private computeScrollableSignals = () => {
    this.computeIsScrollable();
    this.computeIsOverflowingLeft();
    this.computeIsOverflowingRight();
    this.computeIsOverflowingTop();
    this.computeIsOverflowingBottom();
  };

  private computeIsScrollable() {
    if (this.containerRef()?.nativeElement) {
      const containerNativeElement = this.containerRef()?.nativeElement;
      if (containerNativeElement) {
        this.isScrollable.set(
          containerNativeElement.offsetWidth < containerNativeElement.scrollWidth ||
            containerNativeElement.offsetHeight < containerNativeElement.scrollHeight,
        );
      }
    }
    return false;
  }

  private computeIsOverflowingLeft() {
    const containerNativeElement = this.containerRef()?.nativeElement;
    if (containerNativeElement) {
      const isOverFlowingLeft = containerNativeElement.scrollLeft > 0;
      this.isOverflowingLeft.set(this.isScrollable() && isOverFlowingLeft);
    }
  }

  private computeIsOverflowingRight() {
    const containerNativeElement = this.containerRef()?.nativeElement;
    if (containerNativeElement) {
      const isOverflowingRight =
        containerNativeElement.scrollWidth - containerNativeElement.clientWidth - containerNativeElement.scrollLeft > 0;
      this.isOverflowingRight.set(this.isScrollable() && isOverflowingRight);
    }
  }

  private computeIsOverflowingTop() {
    const containerNativeElement = this.containerRef()?.nativeElement;
    if (containerNativeElement) {
      const isOverFlowingTop = containerNativeElement.scrollTop > 0;
      this.isOverflowingTop.set(this.isScrollable() && isOverFlowingTop);
    }
  }
  private computeIsOverflowingBottom() {
    const containerNativeElement = this.containerRef()?.nativeElement;
    if (containerNativeElement) {
      const isOverflowingBottom =
        containerNativeElement.scrollHeight - containerNativeElement.clientHeight - containerNativeElement.scrollTop >
        0;
      this.isOverflowingBottom.set(this.isScrollable() && isOverflowingBottom);
    }
  }
}
