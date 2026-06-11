import {
  AfterContentInit,
  ChangeDetectorRef,
  ComponentRef,
  computed,
  contentChild,
  DestroyRef,
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  output,
  Renderer2,
  signal,
  ViewContainerRef,
} from "@angular/core";
import { Alignment, Position } from "@design-system-rte/core";
import { waitForNextFrame } from "@design-system-rte/core/common/animation";
import { DROPDOWN_ANIMATION_DURATION } from "@design-system-rte/core/components/dropdown/dropdown.constants";
import {
  getAutoAlignment,
  getAutoPlacementDropdown,
  getCoordinates,
} from "@design-system-rte/core/components/utils/auto-placement";
import { FOCUSABLE_BUTTONS_QUERY } from "@design-system-rte/core/constants/dom/dom.constants";
import { ARROW_DOWN_KEY, ENTER_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { DropdownService } from "../../services/dropdown.service";
import { OverlayService } from "../../services/overlay.service";
import { isElementInParentWithOverlay } from "../../utils";

import { DropdownMenuComponent } from "./dropdown-menu/dropdown-menu.component";
import { DropdownTriggerDirective } from "./dropdown-trigger/dropdown-trigger.directive";
import { DropdownItemConfig } from "./dropdown.types";
import { focusDropdownFirstElement } from "./dropdown.utils";

@Directive({
  selector: "[rteDropdown]",
  host: {
    "[class.dropdown]": "true",
    "[attr.data-dropdown-id]": "dropdownId",
  },
  standalone: true,
})
export class DropdownDirective implements AfterContentInit {
  private static idCounter = 0;

  readonly trigger = contentChild(DropdownTriggerDirective);
  readonly menu = contentChild(DropdownMenuComponent);

  readonly rteDropdownId = input<string | undefined>(undefined);
  readonly rteDropdownPosition = input<Position>("bottom");
  readonly rteDropdownAlignment = input<Alignment>("start");
  readonly rteDropdownIsOpen = input<boolean>(false);
  readonly rteDropdownOffset = input<number>(0);
  readonly rteDropdownAutofocus = input<boolean>(true);
  readonly rteDropdownAutoOpen = input<boolean>(true);
  readonly rteDropdownWidth = input<number | null>(null);
  readonly rteCloseOnItemClick = input<boolean>(true);

  readonly menuEvent = output<{ event: Event; id: string; item?: DropdownItemConfig }>();
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

  readonly menuChangeEvent = output<{ event: Event; id: string }>();

  readonly isActive = signal(false);

  readonly menuInputs = computed(() => {
    const menu = this.menu();
    if (!menu) {
      return null;
    }
    return {
      items: menu.items(),
      bodyTemplate: menu.bodyDirective()?.templateRef,
      headerTemplate: menu.headerDirective()?.templateRef,
      footerTemplate: menu.footerDirective()?.templateRef,
      width: menu.width(),
    };
  });

  dropdownMenuRef: ComponentRef<DropdownMenuComponent> | null = null;
  private itemEventSubscription: { unsubscribe: () => void } | null = null;
  private viewportResizeFrameId: number | null = null;

  private readonly onViewportOrWindowResize = (): void => {
    if (this.viewportResizeFrameId !== null) {
      cancelAnimationFrame(this.viewportResizeFrameId);
    }
    this.viewportResizeFrameId = requestAnimationFrame(() => {
      this.viewportResizeFrameId = null;
      this.scheduleOverlayLayoutSync();
    });
  };

  constructor() {
    this.hostElement = this.elementRef.nativeElement;

    this.destroyRef.onDestroy(() => {
      this.unsubscribeItemEvent();
      this.removeClickOutsideListener();
      this.dropdownMenuRef?.destroy();
      this.dropdownMenuRef = null;
    });

    effect(() => {
      const isOpen = this.rteDropdownIsOpen();
      if (isOpen) {
        if (!this.dropdownMenuRef) {
          this.showDropdownMenu();
          if (this.rteDropdownAutofocus()) {
            waitForNextFrame(() => focusDropdownFirstElement(this.dropdownId));
          }
        }
      } else if (this.dropdownMenuRef) {
        this.dropdownService.closeAllMenus();
      }
    });

    effect(() => {
      const inputs = this.menuInputs();
      const isOpen = this.rteDropdownIsOpen();
      if (this.dropdownMenuRef && inputs) {
        this.assignInputs();
        if (isOpen) {
          waitForNextFrame(() => {
            if (!this.dropdownMenuRef || !this.rteDropdownIsOpen()) {
              return;
            }
            this.positionDropdownMenu(this.rteDropdownPosition());
          });
        }
      }
    });

    effect(
      (onCleanup) => {
        const teardown = this.setupScrollBehavior();
        onCleanup(teardown);
      },
      { allowSignalWrites: true },
    );

    this.registerViewportResizeRepositionHandling();
  }

  private registerViewportResizeRepositionHandling(): void {
    if (typeof window === "undefined") {
      return;
    }
    window.addEventListener("resize", this.onViewportOrWindowResize);
    window.visualViewport?.addEventListener("resize", this.onViewportOrWindowResize);
    this.destroyRef.onDestroy(() => {
      window.removeEventListener("resize", this.onViewportOrWindowResize);
      window.visualViewport?.removeEventListener("resize", this.onViewportOrWindowResize);
      if (this.viewportResizeFrameId !== null) {
        cancelAnimationFrame(this.viewportResizeFrameId);
        this.viewportResizeFrameId = null;
      }
    });
  }

  private scheduleOverlayLayoutSync(): void {
    if (!this.dropdownMenuRef || !this.rteDropdownIsOpen()) {
      return;
    }
    this.assignInputs();
    waitForNextFrame(() => {
      if (!this.dropdownMenuRef || !this.rteDropdownIsOpen()) {
        return;
      }
      this.positionDropdownMenu(this.rteDropdownPosition());
    });
  }

  onTrigger(): void {
    if (this.rteDropdownAutoOpen()) {
      this.showDropdownMenu();
      if (this.rteDropdownAutofocus()) {
        waitForNextFrame(() => {
          if (!this.dropdownMenuRef) {
            return;
          }
          focusDropdownFirstElement(this.dropdownId);
        });
      }
    }
  }

  onTriggerKeyEvent(event: KeyboardEvent): void {
    if (!this.rteDropdownAutoOpen()) {
      return;
    }

    const shouldOpen =
      event.key === SPACE_KEY ||
      event.key === ENTER_KEY ||
      (event.key === ARROW_DOWN_KEY && this.trigger()?.rteDropdownTriggerActivateWithArrowDown());

    if (shouldOpen) {
      event.preventDefault();
      event.stopPropagation();
      this.showDropdownMenu();
      if (this.rteDropdownAutofocus()) {
        waitForNextFrame(() => focusDropdownFirstElement(this.dropdownId));
      }
    }
  }

  onMenuEvent(event: { event: Event; id: string; item?: DropdownItemConfig }): void {
    this.menuEvent.emit(event);
    if (!event.item?.children?.length && this.rteCloseOnItemClick()) {
      this.isActive.set(false);
      this.dropdownService.closeAllMenus();
    }
  }

  onMenuChangeEvent(event: { event: Event; id: string }): void {
    this.menuEvent.emit(event);
  }

  private setupScrollBehavior(): () => void {
    const onScroll = (): void => {
      waitForNextFrame(() => this.positionDropdownMenu(this.rteDropdownPosition()));
    };

    window.addEventListener("scroll", onScroll, true);
    return () => window.removeEventListener("scroll", onScroll, true);
  }

  ngAfterContentInit(): void {
    const trigger = this.trigger();
    if (!trigger) return;

    const triggerSubscriptions = [
      trigger.dropdownTriggered.subscribe(() => this.onTrigger()),
      trigger.dropdownKeyDown.subscribe((event: KeyboardEvent) => this.onTriggerKeyEvent(event)),
      trigger.dropdownTriggerClearContent.subscribe(() => this.closeDropdown()),
      trigger.dropdownTriggerOpenDropdown.subscribe(() => this.showDropdownMenu()),
      trigger.dropdownTriggerCloseDropdown.subscribe(() => this.closeDropdown()),
    ];
    this.destroyRef.onDestroy(() => triggerSubscriptions.forEach((subscription) => subscription.unsubscribe()));
  }

  showDropdownMenu(): void {
    this.unsubscribeItemEvent();
    if (this.dropdownMenuRef) {
      this.dropdownMenuRef.destroy();
      this.dropdownMenuRef = null;
    }

    this.dropdownMenuRef = this.overlayService.create(DropdownMenuComponent, this.viewContainerRef);

    const menuId = this.rteDropdownId() || this.dropdownId;

    this.dropdownMenuRef.setInput("menuId", menuId);

    this.dropdownService.openMenu(menuId);

    this.assignInputs();
    this.positionDropdownMenu(this.rteDropdownPosition());
    this.addClickOutsideListener();

    this.itemEventSubscription = this.dropdownMenuRef.instance.itemEvent.subscribe(
      (event: { event: Event; id: string; item?: DropdownItemConfig }) => this.onMenuEvent(event),
    );

    const dropdownStateSubscription = this.dropdownService.state$.subscribe((state) => {
      if (state === null) {
        if (this.dropdownMenuRef) {
          this.unsubscribeItemEvent();
          this.dropdownMenuRef.destroy();
          this.dropdownMenuRef = null;

          this.removeClickOutsideListener();
          dropdownStateSubscription.unsubscribe();
          this.focusTriggerElementAfterMenuClosed();
        }
      }
    });

    this.destroyRef.onDestroy(() => dropdownStateSubscription.unsubscribe());
  }

  private assignInputs(): void {
    if (this.dropdownMenuRef) {
      const items = this.menu()?.items() ?? [];
      this.dropdownMenuRef.setInput(
        "isInParentWithOverlay",
        isElementInParentWithOverlay(this.trigger()?.elementRef.nativeElement),
      );
      this.dropdownMenuRef.setInput("items", items);
      this.dropdownMenuRef.setInput("bodyTemplate", this.menu()?.bodyDirective()?.templateRef);
      this.dropdownMenuRef.setInput("headerTemplate", this.menu()?.headerDirective()?.templateRef);
      this.dropdownMenuRef.setInput("footerTemplate", this.menu()?.footerDirective()?.templateRef);
      this.dropdownMenuRef.setInput("bodyTemplate", this.menu()?.bodyDirective()?.templateRef);
    }

    this.assignWidth();
  }

  private assignWidth(): void {
    if (!this.dropdownMenuRef) {
      return;
    }

    const width = this.menuInputs()?.width ?? this.rteDropdownWidth();
    if (width !== undefined && width !== null) {
      this.dropdownMenuRef.setInput("width", width);
      waitForNextFrame(() => this.dropdownMenuRef?.setInput("isOpen", true));
    } else {
      this.dropdownMenuRef.setInput("isOpen", true);
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
          position === "auto"
            ? getAutoPlacementDropdown({
                hostElement: triggerElement,
                castedElement: dropdownMenuElement,
                defaultPosition: "bottom",
              })
            : position;
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

  private focusTriggerElementAfterMenuClosed(): void {
    const triggerElement = this.trigger()?.elementRef.nativeElement as HTMLElement | undefined;
    if (!triggerElement) {
      return;
    }
    const focusable = Array.from(triggerElement.querySelectorAll<HTMLElement>(FOCUSABLE_BUTTONS_QUERY));
    if (focusable.length === 0) {
      triggerElement.focus();
      return;
    }
    const explicitButtons = focusable.filter((element) => {
      return element.tagName === "BUTTON" || element.getAttribute("role") === "button";
    });
    const target =
      explicitButtons.length > 0 ? explicitButtons[explicitButtons.length - 1] : focusable[focusable.length - 1];
    target.focus();
  }

  private unsubscribeItemEvent(): void {
    this.itemEventSubscription?.unsubscribe();
    this.itemEventSubscription = null;
  }

  private readonly handleClickOutside = (event: MouseEvent): void => {
    const target = event.target as Element;

    const clickedInTrigger = this.hostElement.contains(target);
    const dropdownMenuElement = this.dropdownMenuRef?.location.nativeElement as HTMLElement | undefined;
    const clickedInThisMenu = dropdownMenuElement ? dropdownMenuElement.contains(target) : false;
    if (clickedInTrigger || clickedInThisMenu) {
      return;
    }

    this.closeDropdown();
    this.clickedOutside.emit();
  };

  private addClickOutsideListener(): void {
    document.addEventListener("mousedown", this.handleClickOutside, { passive: true });
  }

  private removeClickOutsideListener(): void {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  private closeDropdown(): void {
    this.dropdownMenuRef?.setInput("isOpen", false);
    this.isActive.set(false);
    setTimeout(() => {
      this.trigger()?.elementRef.nativeElement.focus({ preventScroll: true });
      this.dropdownService.closeAllMenus();
    }, DROPDOWN_ANIMATION_DURATION);
  }
}
