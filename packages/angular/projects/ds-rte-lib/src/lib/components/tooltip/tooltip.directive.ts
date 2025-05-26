import { ChangeDetectorRef, ComponentRef, Directive, ElementRef, HostListener, inject, input, Renderer2, ViewContainerRef } from '@angular/core';
import { TooltipComponent } from './tooltip.component';
import { getAutoPlacement } from '@design-system-rte/core/components/utils/auto-placement';

interface TooltipXBound {
  position: 'left' | 'right';
  offset: number;
}

interface TooltipYBound {
  position: 'top' | 'bottom';
  offset: number;
}

interface TooltipBounds {
  x: TooltipXBound;
  y: TooltipYBound;
}

const TOOLTIP_GAP = 8;

@Directive({
  selector: '[rteTooltip]',
  standalone: true,
})
export class TooltipDirective {

  rteTooltip = input.required<string>();
  rteTooltipPosition = input('auto');
  rteTooltipAlignment = input('center');
  rteTooltipArrow = input(true);

  private tooltipRef: ComponentRef<TooltipComponent> | null = null;

  private elementRef = inject(ElementRef);
  private viewContainerRef = inject(ViewContainerRef)
  private renderer = inject(Renderer2);

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.showTooltip();
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.hideTooltip();
  }

  private createTooltip(): ElementRef {
    const componentRef = this.viewContainerRef.createComponent(TooltipComponent);
    return componentRef.location.nativeElement;
  }

  constructor(private cdr: ChangeDetectorRef) {}

  showTooltip(): void {
    const componentRef = this.viewContainerRef.createComponent(TooltipComponent);
    this.tooltipRef = componentRef;

    const hostElement = this.elementRef.nativeElement;
    const tooltipElement = componentRef.location.nativeElement;

    componentRef.instance.label = this.rteTooltip;
    componentRef.instance.position.set(this.rteTooltipPosition() === 'auto' ? getAutoPlacement(hostElement, 'top') : this.rteTooltipPosition());
    componentRef.instance.alignment = this.rteTooltipAlignment;
    componentRef.instance.arrow = this.rteTooltipArrow;

    this.renderer.appendChild(hostElement, tooltipElement);

    this.cdr.detectChanges();
    this.positionTooltip();
  }

  private positionTooltip(): void {
    if (!this.tooltipRef) {
      return;
    }

    const hostElement = this.elementRef.nativeElement;
    const tooltipElement = this.tooltipRef.location.nativeElement;

    this.renderer.setStyle(tooltipElement, 'position', 'absolute');
    const bounds = this.getTooltipPosition(hostElement, this.tooltipRef);

    this.renderer.setStyle(hostElement, 'position', 'relative');

    this.renderer.setStyle(tooltipElement, bounds.x.position, `${bounds.x.offset}px`);
    this.renderer.setStyle(tooltipElement, bounds.y.position, `${bounds.y.offset}px`);
  }

  private getTooltipPosition(host: HTMLElement, tooltip: ComponentRef<TooltipComponent>): TooltipBounds {
    return {
      x: this.getTooltipXBound(host, tooltip),
      y: this.getTooltipYBound(host, tooltip)
    }
  }

  private getTooltipXBound(host: HTMLElement, tooltip: ComponentRef<TooltipComponent>): TooltipXBound {
    return {
      position: tooltip.instance.position() === 'right' ? 'right' : 'left',
      offset: this.getTooltipXOffset(host, tooltip)
    }
  }
  private getTooltipXOffset(host: HTMLElement, tooltip: ComponentRef<TooltipComponent>): number {
    const hostRect = host.getBoundingClientRect();
    if (tooltip.instance.position() === 'left') {
      return - tooltip.location.nativeElement.firstElementChild.offsetWidth - TOOLTIP_GAP;
    }
    if (tooltip.instance.position() === 'right') {
      return - TOOLTIP_GAP;
    }
    return hostRect.width / 2;
  }

  private getTooltipYBound(host: HTMLElement, tooltip: ComponentRef<TooltipComponent>): TooltipYBound {
    return {
      position: tooltip.instance.position() === 'bottom' ? 'bottom' : 'top',
      offset: this.getTooltipYOffset(host, tooltip)
    }
  }

  private getTooltipYOffset(host: HTMLElement, tooltip: ComponentRef<TooltipComponent>): number {
    const hostRect = host.getBoundingClientRect();

    if (tooltip.instance.position() === 'top') {
      return - tooltip.location.nativeElement.firstElementChild.offsetHeight - TOOLTIP_GAP;
    }
    if (tooltip.instance.position() === 'bottom') {
      return - TOOLTIP_GAP;
    }
    return hostRect.height / 2;
  }
  
  private hideTooltip(): void {
    if (this.tooltipRef) {
      this.tooltipRef.destroy();
    }
  }

}
