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
} from "@design-system-rte/core";
import type { DrawerPosition } from "@design-system-rte/core/components/drawer/drawer.interface";
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
        const modal = this.position() === "modal";

        if (!modal) {
          if (open) {
            this.isAnimating.set(false);
            untracked(() => {
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  this.isAnimating.set(true);
                  afterNextRender(
                    () => {
                      const native = this.drawerPanelResponsive()?.nativeElement;
                      if (native && !this.focusTrapActive) {
                        this.focusTrap.activate(native);
                        this.focusTrapActive = true;
                      }
                    },
                    { injector: this.injector },
                  );
                });
              });
            });
          } else {
            this.isAnimating.set(false);
            if (this.focusTrapActive) {
              this.focusTrap.deactivate();
              this.focusTrapActive = false;
            }
          }
          return;
        }

        if (open) {
          this.shouldRenderModalLayer.set(true);
          this.isAnimating.set(false);
          untracked(() => {
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                this.isAnimating.set(true);
                afterNextRender(
                  () => {
                    const native =
                      this.drawerPanelModal()?.nativeElement ?? this.drawerPanelResponsive()?.nativeElement;
                    if (native && !this.focusTrapActive) {
                      this.focusTrap.activate(native);
                      this.focusTrapActive = true;
                    }
                  },
                  { injector: this.injector },
                );
              });
            });
          });
        } else {
          this.isAnimating.set(false);
          if (this.focusTrapActive) {
            this.focusTrap.deactivate();
            this.focusTrapActive = false;
          }
          if (this.shouldRenderModalLayer()) {
            setTimeout(() => {
              this.shouldRenderModalLayer.set(false);
            }, DRAWER_TRANSITION_DURATION);
          }
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

  onClose(): void {
    this.closed.emit();
  }

  onClickToggle(): void {
    this.clickToggle.emit();
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
    if (this.focusTrapActive) {
      this.focusTrap.deactivate();
      this.focusTrapActive = false;
    }
  }
}
