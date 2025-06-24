import {
  ChangeDetectorRef,
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  inject,
  input,
  Renderer2,
  ViewContainerRef,
} from "@angular/core";
import { getAutoPlacement } from "@design-system-rte/core/components/utils/auto-placement";

import { TooltipComponent } from "./tooltip.component";

interface TooltipXBound {
  position: "left" | "right";
  offset: number;
}

interface TooltipYBound {
  position: "top" | "bottom";
  offset: number;
}

interface TooltipBounds {
  x: TooltipXBound;
  y: TooltipYBound;
}

const TOOLTIP_GAP = 8;

@Directive({
  selector: "[rteTooltip]",
  standalone: true,
})
export class TooltipDirective {
  readonly rteTooltip = input.required<string>();
  readonly rteTooltipPosition = input("auto");
  readonly rteTooltipAlignment = input("center");
  readonly rteTooltipArrow = input(true);

  private tooltipRef: ComponentRef<TooltipComponent> | null = null;
  private hostElement: HTMLElement;

  private elementRef = inject(ElementRef);
  private viewContainerRef = inject(ViewContainerRef);
  private renderer = inject(Renderer2);
  private cdr = inject(ChangeDetectorRef);

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
    this.hostElement = this.elementRef.nativeElement;
    this.hostElement.setAttribute("tabindex", "0");
  }

  showTooltip(): void {
    if (this.tooltipRef) {
      this.tooltipRef.destroy();
    }

    this.tooltipRef = this.viewContainerRef.createComponent(TooltipComponent);
    this.assignDirectiveToComponent();
    this.appendComponentToHost();
    this.cdr.detectChanges();

    if (this.tooltipRef) {
      const tooltipElement = this.tooltipRef.location.nativeElement;
      this.renderer.setStyle(tooltipElement, "opacity", "0");
      this.positionTooltip();

      this.renderer.setStyle(tooltipElement, "opacity", "1");
    }
  }

  private assignDirectiveToComponent(): void {
    if (this.tooltipRef) {
      const tooltipElement = this.tooltipRef.location.nativeElement;
      const position =
        this.rteTooltipPosition() === "auto"
          ? getAutoPlacement(this.hostElement, tooltipElement, "top")
          : this.rteTooltipPosition();

      this.tooltipRef.setInput("label", this.rteTooltip());
      this.tooltipRef.setInput("position", position);
      this.tooltipRef.setInput("alignment", this.rteTooltipAlignment());
      this.tooltipRef.setInput("arrow", this.rteTooltipArrow());
    }
  }

  private appendComponentToHost(): void {
    if (this.tooltipRef) {
      this.renderer.appendChild(this.elementRef.nativeElement, this.tooltipRef.location.nativeElement);
    }
  }

  private positionTooltip(): void {
    if (this.tooltipRef) {
      const tooltipElement = this.tooltipRef.location.nativeElement;

      const bounds = this.getTooltipPosition(this.hostElement, this.tooltipRef);

      this.renderer.setStyle(this.hostElement, "position", "relative");

      this.renderer.setStyle(tooltipElement, bounds.x.position, `${bounds.x.offset}px`);
      this.renderer.setStyle(tooltipElement, bounds.y.position, `${bounds.y.offset}px`);
    }
  }

  private getTooltipPosition(host: HTMLElement, tooltip: ComponentRef<TooltipComponent>): TooltipBounds {
    return {
      x: this.getTooltipXBound(host, tooltip),
      y: this.getTooltipYBound(host, tooltip),
    };
  }

  private getTooltipXBound(host: HTMLElement, tooltip: ComponentRef<TooltipComponent>): TooltipXBound {
    return {
      position: tooltip.instance.position() === "right" ? "right" : "left",
      offset: this.getTooltipXOffset(host, tooltip),
    };
  }

  private getTooltipXOffset(host: HTMLElement, tooltip: ComponentRef<TooltipComponent>): number {
    const hostRect = host.getBoundingClientRect();
    if (tooltip.instance.position() === "left") {
      return -tooltip.location.nativeElement.querySelector(".tooltip").offsetWidth - TOOLTIP_GAP;
    }
    if (tooltip.instance.position() === "right") {
      return -TOOLTIP_GAP;
    }
    return hostRect.width / 2;
  }

  private getTooltipYBound(host: HTMLElement, tooltip: ComponentRef<TooltipComponent>): TooltipYBound {
    return {
      position: tooltip.instance.position() === "bottom" ? "bottom" : "top",
      offset: this.getTooltipYOffset(host, tooltip),
    };
  }

  private getTooltipYOffset(host: HTMLElement, tooltip: ComponentRef<TooltipComponent>): number {
    const hostRect = host.getBoundingClientRect();

    if (tooltip.instance.position() === "top") {
      return -tooltip.location.nativeElement.querySelector(".tooltip").offsetHeight - TOOLTIP_GAP;
    }
    if (tooltip.instance.position() === "bottom") {
      return -TOOLTIP_GAP;
    }
    return hostRect.height / 2;
  }

  private hideTooltip(): void {
    if (this.tooltipRef) {
      const tooltipElement = this.tooltipRef.location.nativeElement;

      this.renderer.setStyle(tooltipElement, "opacity", "0");

      setTimeout(() => {
        if (this.tooltipRef) {
          this.tooltipRef.destroy();
          this.tooltipRef = null;
        }
      }, 200);
    }
  }
}
