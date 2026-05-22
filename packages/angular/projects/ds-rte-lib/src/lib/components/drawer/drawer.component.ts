import { CommonModule } from "@angular/common";
import {
  afterNextRender,
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
  signal,
  TemplateRef,
  untracked,
  viewChild,
} from "@angular/core";
import {
  DRAWER_PADDING,
  DRAWER_TRANSITION_DURATION,
  shouldUseDrawerDefaultFooter,
  shouldUseDrawerDefaultHeader,
  waitForNextFrame,
  DrawerPosition,
} from "@design-system-rte/core";
import { IconSize } from "@design-system-rte/core/components/icon/icon.constants";

import { FocusTrapService } from "../../services/focus-trap.service";
import { ButtonComponent } from "../button/button.component";
import { DividerComponent } from "../divider/divider.component";
import { IconComponent } from "../icon/icon.component";
import { IconButtonComponent } from "../icon-button/icon-button.component";

@Component({
  selector: "rte-drawer",
  imports: [CommonModule, ButtonComponent, DividerComponent, IconComponent, IconButtonComponent],
  standalone: true,
  templateUrl: "./drawer.component.html",
  styleUrl: "./drawer.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerComponent implements OnDestroy {
  readonly id = input.required<string>();
  readonly title = input<string>();
  readonly icon = input<string>();
  readonly iconAppearance = input<"outlined" | "filled">("outlined");
  readonly isOpen = input<boolean>(false);
  readonly position = input<DrawerPosition>("modal");
  readonly width = input<string | undefined>();
  readonly closeOnOverlayClick = input<boolean>(false);
  readonly primaryButtonLabel = input<string>();
  readonly secondaryButtonLabel = input<string>();
  readonly isCollapsible = input<boolean>(false);
  readonly fixedHeader = input<boolean>(false);
  readonly closeOnEscape = input<boolean>(false);
  readonly isClosable = input<boolean>(true);
  readonly modalHostMode = input<boolean>(false);

  readonly drawerContent = input<TemplateRef<unknown> | null>(null);
  readonly drawerHeader = input<TemplateRef<unknown> | null>(null);
  readonly drawerFooter = input<TemplateRef<unknown> | null>(null);
  readonly drawerContextContent = input<TemplateRef<unknown> | null>(null);

  readonly closed = output<void>();
  readonly clickToggle = output<void>();
  readonly clickPrimaryButton = output<void>();
  readonly clickSecondaryButton = output<void>();

  readonly iconSize = signal(IconSize["xl"]);

  readonly drawerPanelModal = viewChild<ElementRef<HTMLElement>>("drawerPanelModal");
  readonly drawerPanelResponsive = viewChild<ElementRef<HTMLElement>>("drawerPanelResponsive");

  readonly isAnimating = signal(false);
  readonly shouldRenderModalLayer = signal(false);

  readonly shouldDisplayDefaultHeader = computed(() =>
    shouldUseDrawerDefaultHeader(!!this.drawerHeader(), this.title()),
  );
  readonly shouldDisplayDefaultFooter = computed(() =>
    shouldUseDrawerDefaultFooter(!!this.drawerFooter(), this.primaryButtonLabel()),
  );

  readonly panelWidthPx = signal(0);

  readonly collapsibleToggleTransform = computed(() => {
    const widthPx = this.panelWidthPx();
    return this.isAnimating() ? `translateX(-${widthPx + DRAWER_PADDING}px)` : "none";
  });

  readonly responsiveDividerTransform = computed(() => {
    const widthPx = this.panelWidthPx();
    return this.isAnimating() ? `translateX(-${widthPx}px)` : "none";
  });

  readonly floatingToggleOpacity = computed(() => (this.isAnimating() ? 0 : 1));

  readonly collapsibleToggleIconName = computed(() =>
    this.isOpen() ? ("right-panel-close" as const) : ("right-panel-open" as const),
  );

  readonly collapsibleToggleAriaLabel = computed(() => {
    const verb = this.isOpen() ? "Close" : "Open";
    return `${verb} drawer ${this.id()}`;
  });

  readonly responsiveMainMarginRight = computed(() => (this.isAnimating() ? (this.width() ?? "0") : "0"));

  private readonly focusTrap = inject(FocusTrapService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly injector = inject(Injector);
  private resizeObserver: ResizeObserver | null = null;
  private focusTrapActive = false;

  constructor() {
    effect(
      () => {
        const open = this.isOpen();
        const usesModalLayer = this.position() === "modal";

        if (open) {
          this.handleDrawerOpen(usesModalLayer);
        } else {
          this.handleDrawerClose(usesModalLayer);
        }
      },
      { allowSignalWrites: true },
    );

    effect(
      () => {
        const modalPanel = this.drawerPanelModal()?.nativeElement;
        const responsivePanel = this.drawerPanelResponsive()?.nativeElement;
        const panel = modalPanel ?? responsivePanel;
        if (!panel) {
          untracked(() => {
            this.resizeObserver?.disconnect();
            this.resizeObserver = null;
          });
          return;
        }
        untracked(() => {
          this.resizeObserver?.disconnect();
          this.resizeObserver = new ResizeObserver(() => {
            this.panelWidthPx.set(panel.clientWidth);
          });
          this.resizeObserver.observe(panel);
          this.panelWidthPx.set(panel.clientWidth);
        });
      },
      { allowSignalWrites: true },
    );

    this.destroyRef.onDestroy(() => {
      this.resizeObserver?.disconnect();
      if (this.focusTrapActive) {
        this.focusTrap.deactivate();
        this.focusTrapActive = false;
      }
    });
  }

  private activateFocusTrapForPanel(resolvePanel: () => HTMLElement | undefined): void {
    afterNextRender(
      () => {
        const panelElement = resolvePanel();
        if (panelElement && !this.focusTrapActive) {
          this.focusTrap.activate(panelElement);
          this.focusTrapActive = true;
        }
      },
      { injector: this.injector },
    );
  }

  private handleDrawerOpen(usesModalLayer: boolean): void {
    if (usesModalLayer) {
      this.shouldRenderModalLayer.set(true);
    }
    this.isAnimating.set(false);
    const resolvePanel = () => {
      if (usesModalLayer) {
        return this.drawerPanelModal()?.nativeElement ?? this.drawerPanelResponsive()?.nativeElement;
      }
      return this.drawerPanelResponsive()?.nativeElement;
    };
    untracked(() => {
      waitForNextFrame(() => {
        this.isAnimating.set(true);
        this.activateFocusTrapForPanel(resolvePanel);
      });
    });
  }

  private handleDrawerClose(usesModalLayer: boolean): void {
    this.isAnimating.set(false);
    if (this.focusTrapActive) {
      this.focusTrap.deactivate();
      this.focusTrapActive = false;
    }
    if (usesModalLayer && this.shouldRenderModalLayer()) {
      setTimeout(() => {
        this.shouldRenderModalLayer.set(false);
      }, DRAWER_TRANSITION_DURATION);
    }
  }

  onClose(): void {
    this.closed.emit();
  }

  onClickToggle(): void {
    this.clickToggle.emit();
  }

  handleClickPrimaryButton(): void {
    this.clickPrimaryButton.emit();
  }

  handleClickSecondaryButton(): void {
    this.clickSecondaryButton.emit();
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
    if (this.focusTrapActive) {
      this.focusTrap.deactivate();
      this.focusTrapActive = false;
    }
  }
}
