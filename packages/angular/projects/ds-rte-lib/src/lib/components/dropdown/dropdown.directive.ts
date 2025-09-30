import {
  AfterContentInit,
  ComponentRef,
  contentChild,
  Directive,
  ElementRef,
  inject,
  Renderer2,
  ViewContainerRef,
} from "@angular/core";
import { getCoordinates } from "@design-system-rte/core/components/utils/auto-placement";
import {
  ARROW_DOWN_KEY,
  ARROW_UP_KEY,
  SPACE_KEY,
  TAB_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { OverlayService } from "../../services/overlay.service";

import { DropdownMenuComponent } from "./dropdown-menu/dropdown-menu.component";
import { DropdownTriggerDirective } from "./dropdown-trigger/dropdown-trigger.directive";
import { focusNextElement, focusPreviousElement } from "./dropdown.utils";

@Directive({
  selector: "[rteDropdown]",
  host: {
    "[class.dropdown]": "true",
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
    this.hostElement = this.elementRef.nativeElement;
  }

  dropdownMenuRef: ComponentRef<DropdownMenuComponent> | null = null;

  onTrigger(): void {
    this.showDropdownMenu();
  }

  //   onTriggerKeyEvent(event: KeyboardEvent): void {}

  //   onMenuKeyEvent(event: KeyboardEvent): void {}

  onKeyDown(event: KeyboardEvent): void {
    console.log("onKeyDown", event);
    if (event.key === TAB_KEY) {
      if (this.dropdownMenuRef !== null) {
        // event.preventDefault();
        // focusNextElement(this.dropdownMenuRef.location.nativeElement);
      }
    }
    if (event.key === SPACE_KEY) {
      event.preventDefault();
      this.showDropdownMenu();
    }

    if ([ARROW_DOWN_KEY, ARROW_UP_KEY].includes(event.key)) {
      event.preventDefault();

      if (event.key === ARROW_DOWN_KEY) {
        console.log("focusNextElement", this.dropdownMenuRef?.location.nativeElement);
        focusNextElement(this.dropdownMenuRef?.location.nativeElement);
      } else {
        focusPreviousElement(this.dropdownMenuRef?.location.nativeElement);
      }
    }
  }

  ngAfterContentInit(): void {
    if (this.trigger()) {
      this.trigger()?.dropdownTriggered.subscribe((event) => {
        this.onTrigger(event);
      });
      this.trigger()?.dropdownKeyDown.subscribe((event) => {
        event.preventDefault();
        this.onKeyDown(event);
      });
      this.menu()?.keydown.subscribe((event) => {
        event.preventDefault();
        this.onKeyDown(event);
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
      this.dropdownMenuRef.setInput("items", this.menu()?.items());
    }
  }

  private positionDropdownMenu(): void {
    if (this.dropdownMenuRef) {
      const dropdownMenuElement = this.dropdownMenuRef.location.nativeElement;

      const positions = getCoordinates("right", this.hostElement, dropdownMenuElement);

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
