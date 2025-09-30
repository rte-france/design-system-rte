import { AfterViewInit, AfterContentInit, ComponentRef, computed, ContentChild, contentChild, Directive, ElementRef, inject, Renderer2, ViewContainerRef } from "@angular/core";
import { DropdownTriggerDirective } from "./dropdown-trigger/dropdown-trigger.directive";
import { OverlayService } from "../../services/overlay.service";
import { DropdownMenuComponent } from "./dropdown-menu/dropdown-menu.component";
import { TooltipComponent } from "../tooltip/tooltip.component";
import { getAutoPlacement, getCoordinates } from "@design-system-rte/core/components/utils/auto-placement";
import { TOOLTIP_GAP, TOOLTIP_GAP_ARROW } from "@design-system-rte/core/components/tooltip/tooltip.constants";

@Directive({
    selector: '[rteDropdown]',
    host: {
        '[class.dropdown]': 'true',
    },
    standalone: true,
})
export class DropdownDirective implements AfterContentInit {    

    readonly trigger = contentChild(DropdownTriggerDirective);
    readonly menu = contentChild(DropdownMenuComponent);
    
    readonly overlayService = inject(OverlayService);
    readonly viewContainerRef = inject(ViewContainerRef);
    readonly elementRef = inject(ElementRef);
    readonly renderer = inject(Renderer2);
    readonly hostElement: HTMLElement;

    constructor() {
        console.log('DropdownDirective');
        this.hostElement = this.elementRef.nativeElement;
    }

    dropdownMenuRef: ComponentRef<DropdownMenuComponent> | null = null;

    onTrigger(event: unknown): void {
        console.log('onTrigger', event);
        this.showDropdownMenu();
    }

    ngAfterContentInit(): void {
        console.log('ngAfterContentInit', this.trigger());
        if (this.trigger()) {
            this.trigger()?.dropdownTriggered.subscribe((event) => {
                this.onTrigger(event);
            });
        }
    }

    showDropdownMenu(): void {
        if (this.dropdownMenuRef) {
          this.dropdownMenuRef.destroy();
        }
    
        this.dropdownMenuRef = this.overlayService.create(DropdownMenuComponent, this.viewContainerRef);
        this.positionDropdownMenu();
        this.assignItems();
    }

    private assignItems(): void {
        if (this.dropdownMenuRef) {
            this.dropdownMenuRef.setInput('items', this.menu()?.items());
        }
    }

    private positionDropdownMenu(): void {
        if (this.dropdownMenuRef) {
        const dropdownMenuElement = this.dropdownMenuRef.location.nativeElement;

        const positions = getCoordinates(
            "right",
            this.hostElement,
            dropdownMenuElement,
        );

        this.renderer.setStyle(dropdownMenuElement, "opacity", "1");
        this.renderer.setStyle(dropdownMenuElement, "display", "block");

        this.renderer.setStyle(dropdownMenuElement, "top", `${positions.top}px`);
        this.renderer.setStyle(dropdownMenuElement, "left", `${positions.left}px`);
        }
    }
    
/*     ngAfterViewInit() {
        document.addEventListener("click", this.handleClickOutside.bind(this));
    }
    
    ngOnDestroy() {
        document.removeEventListener("click", this.handleClickOutside.bind(this));
    } */

    /* private handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Element;
        const allDropdowns = document.querySelectorAll("[data-dropdown-id]");
        const clickedInside =
            Array.from(allDropdowns).some((dropdown) => dropdown.contains(target)) ||
            // this.triggerRef()?.nativeElement.contains(target);

        if (!clickedInside) {
            this.close();
        }
    }; */
    
    
   

}