import { AfterViewInit, ComponentRef, Directive, ElementRef, Host, HostListener, inject, input, OnInit, Optional, ViewContainerRef } from "@angular/core";
import { DropdownComponent } from "./dropdown.component";
import { OverlayService } from "../../services/overlay.service";
import { DropdownMenuComponent } from "./dropdownMenu/dropdown-menu.component";

@Directive({
  selector: "[rteDropdownTriggerFor]",
  standalone: true,
  host: {
    "(keydown)": "handleKeyDown($event)"
  }
})
export class DropdownDirective implements OnInit {

  readonly nativeElement: HTMLElement = inject(ElementRef).nativeElement;

  readonly rteDropdownTriggerFor = input.required<ComponentRef<DropdownMenuComponent>>();


  private overlayService: OverlayService;
  private viewContainerRef = inject(ViewContainerRef);


  private menuRef: ComponentRef<DropdownMenuComponent> | null = null;

  constructor(
  ) {
    this.overlayService = inject(OverlayService);
  }

  @HostListener("mouseenter")
  onHover() {
      if (this.menuRef) {
        this.menuRef
      }
    }

  @HostListener("mouseleave")
  onMouseLeave(): void {
    
  }

  @HostListener("click")
  onClick() {
    if (this.menuRef) {
      this.overlayService.attach(this.menuRef, this.viewContainerRef);
    }
  }

  ngOnInit() {
    this.menuRef = this.rteDropdownTriggerFor();
    if (this.menuRef) {
      this.overlayService.attach(this.menuRef, this.viewContainerRef);
    }
  }
  
}

  

/* import {
    AfterViewInit,
    ChangeDetectorRef,
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
  import { TOOLTIP_GAP, TOOLTIP_GAP_ARROW } from "@design-system-rte/core/components/tooltip/tooltip.constants";
  import { getAutoPlacement, getCoordinates } from "@design-system-rte/core/components/utils/auto-placement";
  
  import { OverlayService } from "../../services/overlay.service";
  
  import { TooltipComponent } from "./tooltip.component";
  
  @Directive({
    selector: "[rteTooltip]",
    standalone: true,
  })
  export class TooltipDirective implements AfterViewInit, OnDestroy {
    readonly rteTooltip = input.required<string>();
    readonly rteTooltipPosition = input("auto");
    readonly rteTooltipAlignment = input("center");
    readonly rteTooltipArrow = input(true);
  
    private tooltipRef: ComponentRef<TooltipComponent> | null = null;
    private hostElement: HTMLElement;
    private overlayService: OverlayService;
  
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
      this.overlayService = inject(OverlayService);
      this.hostElement = this.elementRef.nativeElement;
      this.hostElement.setAttribute("tabindex", "0");
    }
  
    ngAfterViewInit() {
      window.addEventListener("scroll", this.positionTooltip.bind(this));
    }
  
    ngOnDestroy() {
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
  
        const position =
          this.rteTooltipPosition() === "auto"
            ? getAutoPlacement(
                this.hostElement,
                tooltipElement,
                "top",
                this.rteTooltipArrow() ? TOOLTIP_GAP_ARROW : TOOLTIP_GAP,
              )
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
  
        const positions = getCoordinates(
          this.tooltipRef.instance.position(),
          this.hostElement,
          tooltipElement,
          this.rteTooltipArrow() ? TOOLTIP_GAP_ARROW : TOOLTIP_GAP,
        );
  
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
        }, 200);
      }
    }
  }
   */