import {
  AfterContentInit,
  ChangeDetectorRef,
  ComponentRef,
  contentChild,
  DestroyRef,
  Directive,
  ElementRef,
  inject,
  input,
  OnDestroy,
  output,
  Renderer2,
  ViewContainerRef,
} from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { Position } from "@design-system-rte/core/components/common/common-types";
import {
  getAutoAlignment,
  getAutoPlacementDropdown,
  getCoordinates,
} from "@design-system-rte/core/components/utils/auto-placement";
import { SPACE_KEY, TAB_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { DropdownService } from "../../services/dropdown.service";
import { OverlayService } from "../../services/overlay.service";

import { DropdownMenuComponent } from "./dropdown-menu/dropdown-menu.component";
import { DropdownTriggerDirective } from "./dropdown-trigger/dropdown-trigger.directive";

@Directive({
  selector: "[rteDropdown]",
  host: {
    "[class.dropdown]": "true",
    "[attr.data-dropdown-id]": "dropdownId",
  },
  standalone: true,
})
export class DropdownDirective implements AfterContentInit, OnDestroy {
  private static idCounter = 0;

  readonly rteDropdownPosition = input<Position>("bottom");

  readonly trigger = contentChild(DropdownTriggerDirective);
  readonly menu = contentChild(DropdownMenuComponent);

  readonly dropdownId = `dropdown_${++DropdownDirective.idCounter}`;
  readonly menuEvent = output<{ event: Event; id: string }>();

  readonly overlayService = inject(OverlayService);
  readonly dropdownService = inject(DropdownService);
  readonly viewContainerRef = inject(ViewContainerRef);
  readonly elementRef = inject(ElementRef);
  readonly renderer = inject(Renderer2);
  readonly hostElement: HTMLElement;
  readonly destroyRef = inject(DestroyRef);
  readonly cdr = inject(ChangeDetectorRef);

  constructor() {
    this.hostElement = this.elementRef.nativeElement;
  }

  dropdownMenuRef: ComponentRef<DropdownMenuComponent> | null = null;

  onTrigger(): void {
    this.showDropdownMenu();
  }

  onTriggerKeyEvent(event: KeyboardEvent): void {
    if (event.key === SPACE_KEY) {
      this.showDropdownMenu();
    }

    if (event.key === TAB_KEY && this.dropdownMenuRef) {
      event.preventDefault();
      const menuElement = this.dropdownMenuRef.location.nativeElement;
      const focusableElements = menuElement.querySelectorAll(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled])',
      );
      if (focusableElements.length) {
        focusableElements[0].focus();
      }
    }
  }

  onMenuEvent(event: { event: Event; id: string }): void {
    this.menuEvent.emit(event);
    this.dropdownService.closeAllMenus();
  }

  ngAfterContentInit(): void {
    if (this.trigger()) {
      this.trigger()?.dropdownTriggered.subscribe(() => {
        this.onTrigger();
      });

      this.trigger()?.dropdownKeyDown.subscribe((event: KeyboardEvent) => {
        this.onTriggerKeyEvent(event);
      });
    }
  }

  showDropdownMenu(): void {
    if (this.dropdownMenuRef) {
      this.dropdownMenuRef.destroy();
    }

    this.dropdownMenuRef = this.overlayService.create(DropdownMenuComponent, this.viewContainerRef);

    const menuId = this.dropdownId;

    this.dropdownMenuRef.setInput("menuId", menuId);

    this.dropdownService.openMenu(menuId);

    this.assignItems();
    this.positionDropdownMenu(this.rteDropdownPosition());
    this.addClickOutsideListener();

    this.dropdownMenuRef.instance.itemEvent.subscribe((event: { event: Event; id: string }) => {
      this.onMenuEvent(event);
    });

    const dropdownStateSubscription = this.dropdownService.state$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((state) => {
        if (state === null) {
          if (this.dropdownMenuRef) {
            this.dropdownMenuRef.destroy();
            this.dropdownMenuRef = null;

            this.removeClickOutsideListener();
            dropdownStateSubscription.unsubscribe();
          }
        }
      });
  }

  private assignItems(): void {
    if (this.dropdownMenuRef) {
      this.dropdownMenuRef.setInput("items", this.menu()?.items());
    }
  }

  private positionDropdownMenu(position: Position = "bottom"): void {
    if (this.dropdownMenuRef && this.trigger()) {
      const dropdownMenuElement = this.dropdownMenuRef.location.nativeElement;
      const triggerElement = this.trigger()?.elementRef.nativeElement;

      if (triggerElement) {
        this.renderer.setStyle(dropdownMenuElement, "display", "block");
        this.cdr.detectChanges();
        const computedPosition: Exclude<Position, "auto"> =
          position === "auto" ? getAutoPlacementDropdown(triggerElement, dropdownMenuElement, "bottom") : position;
        const autoAlignment = getAutoAlignment(triggerElement, dropdownMenuElement, computedPosition);
        const computedCoordinates = getCoordinates(
          computedPosition,
          triggerElement,
          dropdownMenuElement.children[0],
          0,
          autoAlignment,
        );

        this.renderer.setStyle(dropdownMenuElement, "top", `${computedCoordinates.top}px`);
        this.renderer.setStyle(dropdownMenuElement, "left", `${computedCoordinates.left}px`);

        this.renderer.setStyle(dropdownMenuElement, "opacity", "1");
      }
    }
  }

  ngOnDestroy(): void {
    this.removeClickOutsideListener();
    if (this.dropdownMenuRef) {
      this.dropdownMenuRef.destroy();
    }
  }

  private readonly handleClickOutside = (event: MouseEvent): void => {
    const target = event.target as Element;

    const isMenuItemClick = target.closest(".rte-dropdown-item") !== null;
    if (isMenuItemClick) {
      return;
    }

    const clickedInTrigger = this.hostElement.contains(target);

    if (!clickedInTrigger) {
      this.closeDropdown();
    }
  };

  private addClickOutsideListener(): void {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  private removeClickOutsideListener(): void {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  private closeDropdown(): void {
    this.dropdownService.closeAllMenus();
  }
}
