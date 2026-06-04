import {
  AfterContentInit,
  afterNextRender,
  ComponentRef,
  contentChild,
  Directive,
  effect,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  Injector,
  input,
  output,
  OnDestroy,
  signal,
  TemplateRef,
  untracked,
  ViewContainerRef,
} from "@angular/core";
import { DRAWER_TRANSITION_DURATION, getDrawerConfigurationIssues, waitForNextFrame } from "@design-system-rte/core";
import type { DrawerPosition } from "@design-system-rte/core/components/drawer/drawer.interface";
import { ESCAPE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { OverlayService } from "../../services/overlay.service";

import { DrawerComponent } from "./drawer.component";

@Directive({
  selector: "[rteDrawer]",
  exportAs: "rteDrawer",
  standalone: true,
})
export class DrawerDirective implements AfterContentInit, OnDestroy {
  private drawerCompRef: ComponentRef<DrawerComponent> | null = null;
  private drawerPanelElement: HTMLElement | null = null;
  private usedOverlay = false;
  private isOpenProvided = false;
  private subPrimaryButton?: { unsubscribe(): void };
  private subSecondaryButton?: { unsubscribe(): void };

  private readonly elementRef = inject(ElementRef);
  private readonly viewContainerRef = inject(ViewContainerRef);
  private readonly overlayService = inject(OverlayService);
  private readonly injector = inject(Injector);

  readonly drawerContent = contentChild.required<TemplateRef<unknown>>("drawerContent");
  readonly drawerHeader = contentChild<TemplateRef<unknown>>("drawerHeader");
  readonly drawerFooter = contentChild<TemplateRef<unknown>>("drawerFooter");
  readonly drawerContextContent = contentChild<TemplateRef<unknown>>("drawerContextContent");

  readonly rteDrawerId = input.required<string>();
  readonly rteDrawerIsOpen = input<boolean>(false);
  readonly rteDrawerTitle = input<string>();
  readonly rteDrawerIcon = input<string>();
  readonly rteDrawerIconAppearance = input<"outlined" | "filled">("outlined");
  readonly rteDrawerPosition = input<DrawerPosition>("modal");
  readonly rteDrawerWidth = input<string | undefined>();
  readonly rteDrawerCloseOnOverlayClick = input<boolean>(false);
  readonly rteDrawerPrimaryButtonLabel = input<string>();
  readonly rteDrawerSecondaryButtonLabel = input<string>();
  readonly rteDrawerIsCollapsible = input<boolean>(false);
  readonly rteDrawerFixedHeader = input<boolean>(false);
  readonly rteDrawerCloseOnEscape = input<boolean>(false);
  readonly rteDrawerIsClosable = input<boolean>(true);

  readonly rteDrawerOnPrimary = output<void>();
  readonly rteDrawerOnSecondary = output<void>();

  private readonly effectiveOpen = signal(false);

  private readonly onMouseDown = (mouseEvent: MouseEvent) => this.handleClickAway(mouseEvent);
  private readonly onKeyDown = (keyboardEvent: KeyboardEvent) => this.handleKeydown(keyboardEvent);

  @HostBinding("class.rte-drawer-host--responsive-layout")
  protected get isResponsiveLayoutHost(): boolean {
    return this.rteDrawerPosition() === "responsive";
  }

  @HostBinding("style.display")
  protected get responsiveHostDisplay(): string | undefined {
    return this.rteDrawerPosition() === "responsive" ? "flex" : undefined;
  }

  @HostBinding("style.flex-direction")
  protected get responsiveHostFlexDirection(): string | undefined {
    return this.rteDrawerPosition() === "responsive" ? "column" : undefined;
  }

  @HostBinding("style.min-height")
  protected get responsiveHostMinHeight(): string | undefined {
    return this.rteDrawerPosition() === "responsive" ? "0" : undefined;
  }

  @HostBinding("style.box-sizing")
  protected get responsiveHostBoxSizing(): string | undefined {
    return this.rteDrawerPosition() === "responsive" ? "border-box" : undefined;
  }

  private static readonly responsiveShellMountMaxAttempts = 12;

  constructor() {
    this.scheduleResponsiveShellMount(DrawerDirective.responsiveShellMountMaxAttempts);

    effect(() => {
      this.rteDrawerIsOpen();
      untracked(() => {
        if (this.isOpenProvided) {
          return;
        }
        this.effectiveOpen.set(this.rteDrawerIsOpen());
        this.isOpenProvided = true;
      });
    });

    effect(
      () => {
        const open = this.effectiveOpen();
        untracked(() => {
          if (open) {
            this.runOpenTransition();
          } else {
            this.runCloseTransition();
          }
        });
      },
      { allowSignalWrites: true },
    );
  }

  open(): void {
    if (!this.validateForOpen()) {
      return;
    }
    this.effectiveOpen.set(true);
  }

  close(): void {
    this.effectiveOpen.set(false);
  }

  private scheduleResponsiveShellMount(attemptsRemaining: number): void {
    afterNextRender(
      () => {
        if (this.rteDrawerPosition() !== "responsive" || this.drawerCompRef) {
          return;
        }
        if (this.validateForOpen()) {
          this.mountDrawer();
          const mountedRef = this.drawerCompRef as ComponentRef<DrawerComponent> | null;
          if (mountedRef === null) {
            return;
          }
          this.syncInputsToDrawer();
          mountedRef.setInput("isOpen", false);
          return;
        }
        if (attemptsRemaining > 1) {
          this.scheduleResponsiveShellMount(attemptsRemaining - 1);
        } else {
          console.warn(
            "Drawer: responsive shell could not mount after multiple attempts (content queries may still be empty).",
          );
        }
      },
      { injector: this.injector },
    );
  }

  ngAfterContentInit(): void {
    document.addEventListener("mousedown", this.onMouseDown);
    document.addEventListener("keydown", this.onKeyDown);
  }

  @HostListener("click", ["$event"])
  onHostClick(clickEvent: MouseEvent): void {
    const target = clickEvent.target;
    if (!(target instanceof Node)) {
      return;
    }
    const triggerElement = target instanceof Element ? target.closest("[data-rte-drawer-trigger]") : null;
    if (!triggerElement || !this.elementRef.nativeElement.contains(triggerElement)) {
      return;
    }
    this.open();
  }

  ngOnDestroy(): void {
    document.removeEventListener("mousedown", this.onMouseDown);
    document.removeEventListener("keydown", this.onKeyDown);
    this.teardownDrawer();
  }

  private runOpenTransition(): void {
    if (!this.validateForOpen()) {
      this.close();
      return;
    }

    if (!this.drawerCompRef) {
      this.mountDrawer();
    }

    if (!this.drawerCompRef) {
      return;
    }

    this.syncInputsToDrawer();
    this.refreshDrawerPanelElement();

    waitForNextFrame(() => {
      this.drawerCompRef?.setInput("isOpen", true);
      this.refreshDrawerPanelElement();
    });

    if (this.rteDrawerPosition() === "modal" && this.rteDrawerIsCollapsible()) {
      document.body.style.overflow = "hidden";
    }
  }

  private runCloseTransition(): void {
    if (!this.drawerCompRef) {
      return;
    }

    this.drawerCompRef.setInput("isOpen", false);

    const keepMounted = this.rteDrawerIsCollapsible() || this.rteDrawerPosition() === "responsive";
    if (!keepMounted) {
      setTimeout(() => this.teardownDrawer(), DRAWER_TRANSITION_DURATION);
    } else if (this.rteDrawerPosition() === "modal" && this.rteDrawerIsCollapsible()) {
      document.body.style.overflow = "";
    }
  }

  private handleClosed(): void {
    this.close();
  }

  private handleToggle(): void {
    this.effectiveOpen.update((current) => !current);
  }

  private mountDrawer(): void {
    const position = this.rteDrawerPosition();
    const collapsible = this.rteDrawerIsCollapsible();
    const useOverlay = position === "modal" && !collapsible;

    if (useOverlay) {
      this.drawerCompRef = this.overlayService.create(DrawerComponent, this.viewContainerRef);
      this.usedOverlay = true;
    } else {
      this.drawerCompRef = this.viewContainerRef.createComponent(DrawerComponent);
      this.usedOverlay = false;
      this.elementRef.nativeElement.appendChild(this.drawerCompRef.location.nativeElement);
    }

    this.subPrimaryButton?.unsubscribe();
    this.subSecondaryButton?.unsubscribe();
    this.subPrimaryButton = this.drawerCompRef.instance.clickPrimaryButton.subscribe(() => {
      this.rteDrawerOnPrimary.emit();
    });
    this.subSecondaryButton = this.drawerCompRef.instance.clickSecondaryButton.subscribe(() => {
      this.rteDrawerOnSecondary.emit();
    });
    this.drawerCompRef.instance.closed.subscribe(() => {
      this.handleClosed();
    });
    this.drawerCompRef.instance.clickToggle.subscribe(() => {
      this.handleToggle();
    });
  }

  private teardownDrawer(): void {
    this.subPrimaryButton?.unsubscribe();
    this.subSecondaryButton?.unsubscribe();
    this.subPrimaryButton = undefined;
    this.subSecondaryButton = undefined;
    if (this.drawerCompRef) {
      this.drawerCompRef.destroy();
      this.drawerCompRef = null;
    }
    if (this.usedOverlay) {
      this.overlayService.destroy();
      this.usedOverlay = false;
    }
    document.body.style.overflow = "";
    this.drawerPanelElement = null;
  }

  private syncInputsToDrawer(): void {
    const componentRef = this.drawerCompRef;
    if (!componentRef) {
      return;
    }

    componentRef.setInput("id", this.rteDrawerId());
    componentRef.setInput("title", this.rteDrawerTitle());
    componentRef.setInput("icon", this.rteDrawerIcon());
    componentRef.setInput("iconAppearance", this.rteDrawerIconAppearance());
    componentRef.setInput("position", this.rteDrawerPosition());
    componentRef.setInput("width", this.rteDrawerWidth());
    componentRef.setInput("closeOnOverlayClick", this.rteDrawerCloseOnOverlayClick());
    componentRef.setInput("primaryButtonLabel", this.rteDrawerPrimaryButtonLabel());
    componentRef.setInput("secondaryButtonLabel", this.rteDrawerSecondaryButtonLabel());
    componentRef.setInput("isCollapsible", this.rteDrawerIsCollapsible());
    componentRef.setInput("fixedHeader", this.rteDrawerFixedHeader());
    componentRef.setInput("closeOnEscape", this.rteDrawerCloseOnEscape());
    componentRef.setInput("isClosable", this.rteDrawerIsClosable());
    componentRef.setInput("modalHostMode", this.rteDrawerPosition() === "modal" && this.rteDrawerIsCollapsible());
    componentRef.setInput("drawerContent", this.drawerContent());
    componentRef.setInput("drawerHeader", this.drawerHeader() ?? null);
    componentRef.setInput("drawerFooter", this.drawerFooter() ?? null);
    componentRef.setInput("drawerContextContent", this.drawerContextContent() ?? null);
  }

  private refreshDrawerPanelElement(): void {
    const root = this.drawerCompRef?.location.nativeElement as HTMLElement | undefined;
    this.drawerPanelElement = (root?.querySelector("[data-drawer-panel]") as HTMLElement | null) ?? null;
  }

  private validateForOpen(): boolean {
    const issues = getDrawerConfigurationIssues({
      hasCustomHeader: !!this.drawerHeader(),
      hasTitle: !!this.rteDrawerTitle(),
      hasCustomFooter: !!this.drawerFooter(),
      hasPrimaryButtonLabel: !!this.rteDrawerPrimaryButtonLabel(),
      position: this.rteDrawerPosition(),
      hasMainContent: !!this.drawerContextContent(),
    });
    if (issues) {
      console.warn(issues);
      return false;
    }
    return true;
  }

  private handleKeydown(keyboardEvent: KeyboardEvent): void {
    if (!this.effectiveOpen()) {
      return;
    }
    if (keyboardEvent.key === ESCAPE_KEY && this.rteDrawerCloseOnEscape()) {
      keyboardEvent.preventDefault();
      this.close();
    }
  }

  private handleClickAway(mouseEvent: MouseEvent): void {
    if (!this.effectiveOpen()) {
      return;
    }
    if (this.rteDrawerPosition() !== "modal") {
      return;
    }
    if (!this.rteDrawerCloseOnOverlayClick()) {
      return;
    }

    const hostElement = this.elementRef.nativeElement as HTMLElement;
    const target = mouseEvent.target as Node;
    if (hostElement.contains(target)) {
      return;
    }
    if (this.drawerPanelElement?.contains(target)) {
      return;
    }

    this.close();
  }
}
