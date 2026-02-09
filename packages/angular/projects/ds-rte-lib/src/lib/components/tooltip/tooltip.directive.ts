import {
  AfterViewInit,
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  inject,
  input,
  OnDestroy,
  Renderer2,
  ViewContainerRef,
} from "@angular/core";
import { Position } from "@design-system-rte/core/components/common/common-types";
import { TOOLTIP_FADE_OUT_DURATION, TOOLTIP_GAP } from "@design-system-rte/core/components/tooltip/tooltip.constants";
import { getTooltipGap } from "@design-system-rte/core/components/tooltip/tooltip.utils";
import { getAutoPlacement, getCoordinates } from "@design-system-rte/core/components/utils/auto-placement";
import { FOCUSABLE_ELEMENTS_QUERY } from "@design-system-rte/core/constants/dom/dom.constants";

import { OverlayService } from "../../services/overlay.service";

import { TooltipComponent } from "./tooltip.component";

@Directive({
  selector: "[rteTooltip]",
  standalone: true,
})
export class TooltipDirective implements AfterViewInit, OnDestroy {
  readonly rteTooltip = input.required<string>();
  readonly rteTooltipPosition = input<Position>("auto");
  readonly rteTooltipAlignment = input("center");
  readonly rteTooltipArrow = input(true);
  readonly rteTooltipShouldFocusTrigger = input(true);
  readonly rteTooltipGap = input<number>(TOOLTIP_GAP);

  private tooltipRef: ComponentRef<TooltipComponent> | null = null;
  private hostElement: HTMLElement;
  private overlayService: OverlayService;

  private elementRef = inject(ElementRef);
  private viewContainerRef = inject(ViewContainerRef);
  private renderer = inject(Renderer2);

  @HostListener("mouseenter")
  onMouseEnter(): void {
    this.showTooltip();
  }

  @HostListener("mouseleave")
  onMouseLeave(): void {
    this.hideTooltip();
  }

  @HostListener("focus")
  onFocus(): void {
    this.showTooltip();
  }

  @HostListener("blur")
  onBlur(): void {
    this.hideTooltip();
  }

  constructor() {
    this.overlayService = inject(OverlayService);
    this.hostElement = this.elementRef.nativeElement;
  }

  ngAfterViewInit() {
    if (!this.rteTooltipShouldFocusTrigger()) {
      this.renderer.setAttribute(this.hostElement, "tabindex", "-1");
      const focusableTrigger = this.hostElement.querySelectorAll(FOCUSABLE_ELEMENTS_QUERY)[0];
      focusableTrigger.addEventListener("focus", () => this.onFocus());
      focusableTrigger.addEventListener("blur", () => this.onBlur());
    } else {
      this.renderer.setAttribute(this.hostElement, "tabindex", "0");
    }
    window.addEventListener("scroll", this.positionTooltip.bind(this));
  }

  ngOnDestroy() {
    if (!this.rteTooltipShouldFocusTrigger()) {
      const focusableTrigger = this.hostElement.querySelectorAll(FOCUSABLE_ELEMENTS_QUERY)[0];
      focusableTrigger.removeEventListener("focus", () => this.onFocus());
      focusableTrigger.removeEventListener("blur", () => this.onBlur());
    }
    window.removeEventListener("scroll", this.positionTooltip.bind(this));
  }

  showTooltip(): void {
    if (this.tooltipRef) {
      this.tooltipRef.destroy();
    }

    this.tooltipRef = this.overlayService.create(TooltipComponent, this.viewContainerRef);
    this.assignDirectiveToComponent();
    this.positionTooltip();
  }

  private assignDirectiveToComponent(): void {
    if (this.tooltipRef) {
      const tooltipElement = this.tooltipRef.location.nativeElement;
      const gap = getTooltipGap(this.rteTooltipArrow(), this.rteTooltipGap());
      const position =
        this.rteTooltipPosition() === "auto"
          ? getAutoPlacement(this.hostElement, tooltipElement, "top", gap, true)
          : this.rteTooltipPosition();

      this.tooltipRef.setInput("label", this.rteTooltip());
      this.tooltipRef.setInput("position", position);
      this.tooltipRef.setInput("alignment", this.rteTooltipAlignment());
      this.tooltipRef.setInput("arrow", this.rteTooltipArrow());
    }
  }

  private positionTooltip(): void {
    if (this.tooltipRef) {
      const tooltipElement = this.tooltipRef.location.nativeElement;
      const gap = getTooltipGap(this.rteTooltipArrow(), this.rteTooltipGap());
      const positions = getCoordinates(this.tooltipRef.instance.position(), this.hostElement, tooltipElement, gap);

      this.renderer.setStyle(this.hostElement, "position", "relative");
      this.renderer.setStyle(tooltipElement, "top", `${positions.top}px`);
      this.renderer.setStyle(tooltipElement, "left", `${positions.left}px`);
    }
  }

  private hideTooltip(): void {
    if (this.tooltipRef) {
      const tooltipElement = this.tooltipRef.location.nativeElement;

      this.renderer.setStyle(tooltipElement, "opacity", "0");

      setTimeout(() => {
        if (this.tooltipRef) {
          this.tooltipRef.destroy();
          this.tooltipRef = null;
          this.overlayService.destroy();
        }
      }, TOOLTIP_FADE_OUT_DURATION);
    }
  }
}
