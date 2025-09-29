import { AfterViewInit, ComponentRef, ContentChild, Directive, ElementRef, inject, Renderer2, ViewContainerRef } from "@angular/core";
import { DropdownTriggerDirective } from "./dropdown-trigger/dropdown-trigger.directive";
import { OverlayService } from "../../services/overlay.service";
import { DropdownMenuComponent } from "./dropdown-menu/dropdown-menu.component";
import { TooltipComponent } from "../tooltip/tooltip.component";
import { getCoordinates } from "@design-system-rte/core/components/utils/auto-placement";

@Directive({
    selector: '[rteDropdown]',
    host: {
        '[class.dropdown]': 'true',
    },
    standalone: true,
})
export class DropdownDirective implements AfterViewInit {
    @ContentChild(DropdownTriggerDirective) trigger!: DropdownTriggerDirective;
    
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
        this.dropdownMenuRef = this.overlayService.create(DropdownMenuComponent, this.viewContainerRef);
        this.positionDropdownMenu();
    }

    ngAfterViewInit(): void {
        console.log('ngAfterViewInit', this.trigger);
        if (this.trigger) {
            this.trigger.dropdownTriggered.subscribe((event) => this.onTrigger(event));
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

        this.renderer.setStyle(this.hostElement, "position", "relative");

        this.renderer.setStyle(dropdownMenuElement, "top", `${positions.top}px`);
        this.renderer.setStyle(dropdownMenuElement, "left", `${positions.left}px`);
        }
    }
    
    
    
   

}