import {
  AfterContentInit,
  ComponentRef,
  contentChild,
  DestroyRef,
  Directive,
  ElementRef,
  inject,
  OnDestroy,
  output,
  Renderer2,
  ViewContainerRef,
} from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { getCoordinates } from "@design-system-rte/core/components/utils/auto-placement";
import { SPACE_KEY, TAB_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";
import { Subject } from "rxjs";

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

  readonly trigger = contentChild(DropdownTriggerDirective);
  readonly menu = contentChild(DropdownMenuComponent);

  readonly dropdownId = `dropdown_${++DropdownDirective.idCounter}`;
  readonly menuEvent = output<{ event: Event; id: string }>();

  private readonly destroy$ = new Subject<void>();
  readonly overlayService = inject(OverlayService);
  readonly dropdownService = inject(DropdownService);
  readonly viewContainerRef = inject(ViewContainerRef);
  readonly elementRef = inject(ElementRef);
  readonly renderer = inject(Renderer2);
  readonly hostElement: HTMLElement;
  readonly destroyRef = inject(DestroyRef);

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

    this.dropdownMenuRef.instance.onKeyDown.bind(this.dropdownMenuRef.instance);

    this.positionDropdownMenu();
    this.assignItems();

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

  ngOnDestroy(): void {
    this.removeClickOutsideListener();
    if (this.dropdownMenuRef) {
      this.dropdownMenuRef.destroy();
    }
    this.destroy$.next();
    this.destroy$.complete();
  }

  private handleClickOutside = (event: MouseEvent): void => {
    const target = event.target as Element;

    const isMenuItemClick = target.closest(".rte-dropdown-item") !== null;
    if (isMenuItemClick) {
      return;
    }

    const clickedInTrigger = this.hostElement.contains(target);

    const clickedInMenus = false;

    if (!clickedInTrigger && !clickedInMenus) {
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
