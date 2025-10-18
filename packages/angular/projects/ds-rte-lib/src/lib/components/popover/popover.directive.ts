import {
  AfterViewInit,
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  inject,
  input,
  OnDestroy,
  output,
  Renderer2,
  ViewContainerRef,
} from "@angular/core";
import { POPOVER_GAP, POPOVER_GAP_ARROW } from "@design-system-rte/core/components/popover/popover.constants";
import {
  getAutoAlignment,
  getAutoPlacement,
  getCoordinates,
} from "@design-system-rte/core/components/utils/auto-placement";
import { ESCAPE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { OverlayService } from "../../services/overlay.service";

import { PopoverComponent } from "./popover.component";

@Directive({
  selector: "[rtePopover]",
  standalone: true,
})
export class PopoverDirective implements AfterViewInit, OnDestroy {
  readonly rtePopoverContent = input.required<string>();
  readonly rtePopoverTitle = input<string>();
  readonly rtePopoverPosition = input("auto");
  readonly rtePopoverAlignment = input("center");
  readonly rtePopoverArrow = input(true);
  readonly rtePopoverPrimaryButtonLabel = input<string>();
  readonly rtePopoverSecondaryButtonLabel = input<string>();
  readonly clickPrimaryButton = output<void>();
  readonly clickSecondaryButton = output<void>();
  readonly rtePopoverCloseOnClickOutside = input<boolean>(true);
  readonly rtePopoverCloseOnEscape = input<boolean>(true);

  private popoverRef: ComponentRef<PopoverComponent> | null = null;
  private hostElement: HTMLElement;
  private overlayService: OverlayService;

  private elementRef = inject(ElementRef);
  private viewContainerRef = inject(ViewContainerRef);
  private renderer = inject(Renderer2);

  private subPrimary?: { unsubscribe(): void };
  private subSecondary?: { unsubscribe(): void };

  private onScroll = () => this.positionPopover();
  private onMouseDown = (e: MouseEvent) => this.handleClickAway(e);
  private onKeyDown = (e: KeyboardEvent) => this.handleKeydown(e);

  @HostListener("click")
  onClick(): void {
    if (!this.popoverRef) {
      this.showPopover();
    }
  }

  constructor() {
    this.overlayService = inject(OverlayService);
    this.hostElement = this.elementRef.nativeElement;
    this.hostElement.setAttribute("tabindex", "0");
  }

  ngAfterViewInit() {
    window.addEventListener("scroll", this.onScroll);
    document.addEventListener("mousedown", this.onMouseDown);
    document.addEventListener("keydown", this.onKeyDown);
  }

  ngOnDestroy() {
    window.removeEventListener("scroll", this.onScroll);
    document.removeEventListener("mousedown", this.onMouseDown);
    document.removeEventListener("keydown", this.onKeyDown);
    this.destroyPopover();
  }

  showPopover(): void {
    if (this.popoverRef) {
      this.popoverRef.destroy();
    }
    this.popoverRef = this.overlayService.create(PopoverComponent, this.viewContainerRef);

    this.subPrimary?.unsubscribe();
    this.subSecondary?.unsubscribe();
    this.subPrimary = this.popoverRef.instance.clickPrimaryButton.subscribe(() => this.handleClickPrimaryButton());
    this.subSecondary = this.popoverRef.instance.clickSecondaryButton.subscribe(() =>
      this.handleClickSecondaryButton(),
    );

    this.assignDirectiveToComponent();
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.positionPopover();
      });
    });
  }

  private handleClickAway(event: MouseEvent) {
    const elements = [this.hostElement, this.popoverRef?.location.nativeElement] as HTMLElement[];
    if (elements.some((element) => !element)) return;
    const shouldIgnore = elements.some((element) => element.contains(event.target as Node));
    if (!shouldIgnore && this.rtePopoverCloseOnClickOutside()) {
      this.hidePopover();
    }
  }

  private handleKeydown(event: KeyboardEvent) {
    if (event.key === ESCAPE_KEY && this.rtePopoverCloseOnEscape()) {
      event.preventDefault();
      this.hidePopover();
    }
  }

  private assignDirectiveToComponent(): void {
    if (this.popoverRef) {
      const popoverElement = this.popoverRef.location.nativeElement.children[0];

      const position =
        this.rtePopoverPosition() === "auto"
          ? getAutoPlacement(
              this.hostElement,
              popoverElement,
              "top",
              this.rtePopoverArrow() ? POPOVER_GAP_ARROW : POPOVER_GAP,
            )
          : this.rtePopoverPosition();

      this.popoverRef.setInput("title", this.rtePopoverTitle());
      this.popoverRef.setInput("content", this.rtePopoverContent());
      this.popoverRef.setInput("position", position);
      this.popoverRef.setInput("alignment", this.rtePopoverAlignment());
      this.popoverRef.setInput("arrow", this.rtePopoverArrow());
      this.popoverRef.setInput("primaryButtonLabel", this.rtePopoverPrimaryButtonLabel());
      this.popoverRef.setInput("secondaryButtonLabel", this.rtePopoverSecondaryButtonLabel());
    }
  }

  private handleClickPrimaryButton() {
    if (!this.popoverRef) return;
    this.clickPrimaryButton.emit();
    this.hidePopover();
  }

  private handleClickSecondaryButton() {
    this.clickSecondaryButton?.emit();
    this.hidePopover();
  }

  private positionPopover(): void {
    if (this.popoverRef) {
      const popoverElement = this.popoverRef.location.nativeElement.children[0];

      const autoAlignment = getAutoAlignment(this.hostElement, popoverElement, this.popoverRef.instance.position());
      this.popoverRef.setInput("alignment", autoAlignment);

      const positions = getCoordinates(
        this.popoverRef.instance.position(),
        this.hostElement,
        popoverElement,
        this.rtePopoverArrow() ? POPOVER_GAP_ARROW : POPOVER_GAP,
        autoAlignment,
      );

      this.renderer.setStyle(this.hostElement, "position", "relative");

      this.renderer.setStyle(popoverElement, "position", "absolute");

      this.renderer.setStyle(popoverElement, "top", `${positions.top}px`);
      this.renderer.setStyle(popoverElement, "left", `${positions.left}px`);
      this.popoverRef.setInput("isOpen", true);
    }
  }

  private hidePopover(): void {
    if (this.popoverRef) {
      this.popoverRef.setInput("isOpen", false);

      setTimeout(() => this.destroyPopover(), 200);
    }
  }

  private destroyPopover(): void {
    if (this.popoverRef) {
      this.subPrimary?.unsubscribe();
      this.subSecondary?.unsubscribe();
      this.subPrimary = undefined;
      this.subSecondary = undefined;
      this.popoverRef.destroy();
      this.popoverRef = null;
      this.overlayService.destroy();
    }
  }
}
