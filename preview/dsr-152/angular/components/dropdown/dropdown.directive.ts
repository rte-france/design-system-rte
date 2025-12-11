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
  signal,
  ViewContainerRef,
} from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { Alignment } from "@design-system-rte/core/common/common-types";
import { Position } from "@design-system-rte/core/components/common/common-types";
import { DROPDOWN_ANIMATION_DURATION } from "@design-system-rte/core/components/dropdown/dropdown.constants";
import {
  getAutoAlignment,
  getAutoPlacementDropdown,
  getCoordinates,
} from "@design-system-rte/core/components/utils/auto-placement";
import { ARROW_DOWN_KEY, ENTER_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { DropdownService } from "../../services/dropdown.service";
import { OverlayService } from "../../services/overlay.service";

import { DropdownMenuComponent } from "./dropdown-menu/dropdown-menu.component";
import { DropdownTriggerDirective } from "./dropdown-trigger/dropdown-trigger.directive";
import { focusDropdownFirstElement } from "./dropdown.utils";

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

  readonly rteDropdownId = input<string | undefined>(undefined);
  readonly rteDropdownPosition = input<Position>("bottom");
  readonly rteDropdownAlignment = input<Alignment>("start");
  readonly rteDropdownIsOpen = input<boolean>(false);
  readonly rteDropdownOffset = input<number>(0);
  readonly rteDroprownTriggerToggle = input<boolean>(false);
  readonly rteDropdownWidth = input<number | null>(null);

  readonly menuEvent = output<{ event: Event; id: string }>();
  readonly dropdownId = `dropdown_${++DropdownDirective.idCounter}`;

  readonly overlayService = inject(OverlayService);
  readonly dropdownService = inject(DropdownService);
  readonly viewContainerRef = inject(ViewContainerRef);
  readonly elementRef = inject(ElementRef);
  readonly renderer = inject(Renderer2);
  readonly hostElement: HTMLElement;
  readonly destroyRef = inject(DestroyRef);
  readonly cdr = inject(ChangeDetectorRef);

  readonly clickedOutside = output<void>();
  readonly closedDropdown = output<void>();

  readonly isActive = signal(false);

  constructor() {
    this.hostElement = this.elementRef.nativeElement;
  }

  dropdownMenuRef: ComponentRef<DropdownMenuComponent> | null = null;

  async onTrigger(): Promise<void> {
    if (!this.rteDroprownTriggerToggle()) {
      this.showDropdownMenu();
    }
  }

  onTriggerKeyEvent(event: KeyboardEvent): void {
    if (
      event.key === SPACE_KEY ||
      event.key === ENTER_KEY ||
      (event.key === ARROW_DOWN_KEY && this.trigger()?.rteDropdownTriggerActivateWithArrowDown())
    ) {
      if (this.trigger()?.elementRef.nativeElement === event.target) {
        this.onTrigger();
        focusDropdownFirstElement(this.rteDropdownId() || this.dropdownId);
      }
    }
  }

  onMenuEvent(event: { event: Event; id: string }): void {
    this.menuEvent.emit(event);
    this.isActive.set(false);
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

      this.trigger()?.dropdownTriggerClearContent.subscribe(() => {
        this.closeDropdown();
      });
      this.trigger()?.dropdownTriggerOpenDropdown.subscribe(() => {
        this.showDropdownMenu();
      });
      this.trigger()?.dropdownTriggerCloseDropdown.subscribe(() => {
        this.closeDropdown();
      });
    }
  }

  showDropdownMenu(): void {
    if (this.dropdownMenuRef) {
      this.dropdownMenuRef.destroy();
    }

    this.dropdownMenuRef = this.overlayService.create(DropdownMenuComponent, this.viewContainerRef);

    const menuId = this.rteDropdownId() || this.dropdownId;

    this.dropdownMenuRef.setInput("menuId", menuId);

    this.dropdownService.openMenu(menuId);

    this.assignItems();
    this.positionDropdownMenu(this.rteDropdownPosition());
    this.addClickOutsideListener();

    this.dropdownMenuRef.instance.itemEvent.subscribe((event: { event: Event; id: string }) => {
      this.onMenuEvent(event);
    });

    this.dropdownMenuRef.instance.closingMenu.subscribe(() => {
      this.closeDropdown();
      this.closedDropdown.emit();
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

    focusDropdownFirstElement(this.rteDropdownId() || this.dropdownId);
  }

  private assignItems(): void {
    if (this.dropdownMenuRef) {
      this.dropdownMenuRef.setInput("items", this.menu()?.items());
      this.dropdownMenuRef.setInput("width", this.rteDropdownWidth());

      requestAnimationFrame(() => {
        requestAnimationFrame(() => this.dropdownMenuRef?.setInput("isOpen", true));
      });
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
        const autoAlignment =
          this.rteDropdownAlignment() ?? getAutoAlignment(triggerElement, dropdownMenuElement, computedPosition);
        const computedCoordinates = getCoordinates(
          computedPosition,
          triggerElement,
          dropdownMenuElement.children[0],
          this.rteDropdownOffset(),
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
      this.clickedOutside.emit();
    }
  };

  private addClickOutsideListener(): void {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  private removeClickOutsideListener(): void {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  private closeDropdown(): void {
    this.dropdownMenuRef?.setInput("isOpen", false);
    this.isActive.set(false);

    setTimeout(() => {
      this.dropdownService.closeAllMenus();
    }, DROPDOWN_ANIMATION_DURATION);
  }
}
