import { CommonModule } from "@angular/common";
import {
  ChangeDetectorRef,
  Component,
  computed,
  DestroyRef,
  ElementRef,
  EventEmitter,
  inject,
  input,
  OnDestroy,
  output,
  Renderer2,
  ViewContainerRef,
} from "@angular/core";
import { shouldDisplayBadge } from "@design-system-rte/core/components/badge/badge.utils";
import { DropdownItemProps } from "@design-system-rte/core/components/dropdown/dropdown.interface";
import { DropdownManager } from "@design-system-rte/core/components/dropdown/DropdownManager";
import {
  getAutoAlignment,
  getAutoPlacementDropdown,
  getCoordinates,
} from "@design-system-rte/core/components/utils/auto-placement";
import { ENTER_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { OverlayService } from "../../../services/overlay.service";
import { BadgeComponent } from "../../badge/badge.component";
import { DividerComponent } from "../../divider/divider.component";
import { IconComponent } from "../../icon/icon.component";
import { DropdownMenuComponent } from "../dropdown-menu/dropdown-menu.component";
import { focusDropdownFirstElement } from "../dropdown.utils";

export interface DropdownItemConfig extends Omit<DropdownItemProps, "onClick"> {
  id?: string;
  selected?: boolean;
  label: string;
  leftIcon?: string;
  trailingText?: string;
  disabled?: boolean;
  hasSeparator?: boolean;
  hasIndent?: boolean;
  link?: string;
  click?: EventEmitter<Event>;
  children?: DropdownItemConfig[];
}

const SUB_MENU_CLOSE_DELAY_MS = 300;
const SUB_MENU_OFFSET = 4;

@Component({
  selector: "rte-dropdown-item",
  imports: [CommonModule, IconComponent, DividerComponent, BadgeComponent],
  standalone: true,
  templateUrl: "./dropdown-item.component.html",
  styleUrl: "./dropdown-item.component.scss",
})
export class DropdownItemComponent implements OnDestroy {
  private readonly overlayService = inject(OverlayService);
  private readonly viewContainerRef = inject(ViewContainerRef);
  readonly elementRef = inject(ElementRef);
  private readonly renderer = inject(Renderer2);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly destroyRef = inject(DestroyRef);

  readonly item = input<DropdownItemConfig>();
  readonly menuId = input<string>();
  readonly itemEvent = output<{ event: Event; id: string; item?: DropdownItemConfig }>();

  subMenuOpen = false;
  private subMenuRef: import("@angular/core").ComponentRef<DropdownMenuComponent> | null = null;
  private closeSubMenuTimeout: ReturnType<typeof setTimeout> | null = null;
  private subMenuSubscriptions: (() => void)[] = [];
  private dropdownManagerUnsubscribe: (() => void) | null = null;

  readonly hasChildren = computed(() => (this.item()?.children?.length ?? 0) > 0);
  readonly childDropdownId = computed(() => {
    const menuId = this.menuId();
    const label = this.item()?.label ?? "";
    return menuId && label ? `${menuId}-${label.replace(/\s+/g, "")}` : "";
  });

  readonly shouldDisplayBadge = computed(() => {
    const item = this.item();
    return shouldDisplayBadge({
      showBadge: !!item?.showBadge,
      badgeContent: item?.badgeContent,
      badgeCount: item?.badgeCount,
      badgeIcon: item?.badgeIcon,
    });
  });

  handleClick(event: Event): void {
    if (this.item()?.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    if (this.hasChildren()) {
      event.preventDefault();
      event.stopPropagation();
      this.openSubMenu();
      return;
    }
    this.itemEvent.emit({
      event,
      id: this.item()?.id || this.item()?.label || "",
      item: this.item(),
    });
  }

  handleKeyDown(event: KeyboardEvent): void {
    event.preventDefault();

    if ([SPACE_KEY, ENTER_KEY].includes(event.key)) {
      if (this.item()?.link) {
        const link = (event.target as HTMLElement).closest("li")?.querySelector("a");
        link?.click();
      } else if (this.hasChildren()) {
        this.openSubMenu();
        const childId = this.childDropdownId();
        if (childId) {
          setTimeout(() => focusDropdownFirstElement(childId), 0);
        }
      } else {
        this.itemEvent.emit({
          event,
          id: this.item()?.id || this.item()?.label || "",
          item: this.item(),
        });
      }
    }
  }

  handleMouseEnter(): void {
    if (this.item()?.disabled || !this.hasChildren()) return;
    const menuId = this.menuId();
    const childId = this.childDropdownId();
    if (menuId) {
      DropdownManager.closeSubMenus(menuId, childId);
      this.openSubMenu();
    }
  }

  handleFocus(): void {
    if (this.item()?.disabled || !this.hasChildren()) return;
    const menuId = this.menuId();
    const childId = this.childDropdownId();
    if (menuId) {
      DropdownManager.closeSubMenus(menuId, childId);
      this.openSubMenu();
    }
  }

  handleMouseLeave(): void {
    if (!this.hasChildren()) return;
    this.scheduleCloseSubMenu();
  }

  handleSubMenuMouseEnter(): void {
    this.cancelCloseSubMenu();
  }

  handleSubMenuMouseLeave(mouseEvent: MouseEvent): void {
    if (this.isPointerOverDescendantSubMenu(mouseEvent.relatedTarget)) return;
    this.scheduleCloseSubMenu();
  }

  private isPointerOverDescendantSubMenu(target: EventTarget | null): boolean {
    if (!(target instanceof Node)) return false;
    const childId = this.childDropdownId();
    if (!childId) return false;
    const descendantMenuPrefix = `${childId}-`;
    const closestMenu =
      (target as Node).nodeType === Node.ELEMENT_NODE
        ? (target as Element).closest("[data-menu-id]")
        : (target as Node).parentElement?.closest("[data-menu-id]");
    const menuId = closestMenu?.getAttribute("data-menu-id");
    return !!menuId?.startsWith(descendantMenuPrefix);
  }

  openSubMenuForKeyboard(): void {
    this.openSubMenu();
    const childId = this.childDropdownId();
    if (childId) {
      setTimeout(() => focusDropdownFirstElement(childId), 0);
    }
  }

  private openSubMenu(): void {
    if (this.subMenuRef) return;
    const children = this.item()?.children;
    const childId = this.childDropdownId();
    if (!children?.length || !childId) return;

    DropdownManager.open(childId);

    this.subMenuRef = this.overlayService.create(DropdownMenuComponent, this.viewContainerRef);
    this.subMenuRef.setInput("items", children);
    this.subMenuRef.setInput("menuId", childId);
    this.subMenuRef.setInput("isOpen", true);

    this.dropdownManagerUnsubscribe = DropdownManager.subscribe(childId, () => this.destroySubMenu());
    this.destroyRef.onDestroy(() => this.dropdownManagerUnsubscribe?.());

    const itemSub = this.subMenuRef.instance.itemEvent.subscribe(
      (emittedItemEvent: { event: Event; id: string; item?: DropdownItemConfig }) => {
        this.itemEvent.emit({ ...emittedItemEvent, item: emittedItemEvent.item });
      },
    );
    const closeSub = this.subMenuRef.instance.closingMenu.subscribe(() => {
      this.destroySubMenu();
    });
    this.subMenuSubscriptions.push(() => {
      itemSub.unsubscribe();
      closeSub.unsubscribe();
    });

    const hostElement = this.subMenuRef.location.nativeElement as HTMLElement;
    hostElement.addEventListener("mouseenter", this.boundHandleSubMenuMouseEnter);
    hostElement.addEventListener("mouseleave", this.boundHandleSubMenuMouseLeave);

    this.positionSubMenuAfterLayout();
    this.subMenuOpen = true;
    this.cdr.markForCheck();
  }

  private positionSubMenuAfterLayout(): void {
    requestAnimationFrame(() => {
      try {
        if (!this.subMenuRef || !this.elementRef || !this.elementRef.nativeElement) {
          return;
        }

        const triggerElement = this.elementRef.nativeElement.querySelector(
          "li.rte-dropdown-item",
        ) as HTMLElement | null;

        const subMenuHost = this.subMenuRef.location?.nativeElement as HTMLElement | null;
        const menuElement = subMenuHost?.querySelector(
          ".rte-dropdown-menu",
        ) as HTMLElement | null;

        if (!triggerElement || !menuElement) {
          if (typeof console !== "undefined" && typeof console.warn === "function") {
            console.warn(
              "[DropdownItemComponent] Unable to position submenu: required DOM elements not found.",
            );
          }
          return;
        }

        const position = getAutoPlacementDropdown(
          triggerElement,
          menuElement,
          "right",
          SUB_MENU_OFFSET,
          true,
        );
        const alignment = getAutoAlignment(triggerElement, menuElement, position);
        const coords = getCoordinates(
          position,
          triggerElement,
          menuElement,
          SUB_MENU_OFFSET,
          alignment,
        );

        const hostElement = subMenuHost;
        if (!hostElement) {
          return;
        }

        this.renderer.setStyle(hostElement, "display", "block");
        this.renderer.setStyle(hostElement, "position", "absolute");
        this.renderer.setStyle(hostElement, "top", `${coords.top}px`);
        this.renderer.setStyle(hostElement, "left", `${coords.left}px`);
        this.renderer.setStyle(hostElement, "opacity", "1");
      } catch (error) {
        if (typeof console !== "undefined" && typeof console.error === "function") {
          console.error("[DropdownItemComponent] Error while positioning submenu:", error);
        }
      }
    });
  }

  private scheduleCloseSubMenu(): void {
    this.cancelCloseSubMenu();
    this.closeSubMenuTimeout = setTimeout(() => {
      this.closeSubMenuTimeout = null;
      this.destroySubMenu();
    }, SUB_MENU_CLOSE_DELAY_MS);
  }

  private cancelCloseSubMenu(): void {
    if (this.closeSubMenuTimeout) {
      clearTimeout(this.closeSubMenuTimeout);
      this.closeSubMenuTimeout = null;
    }
  }

  private boundHandleSubMenuMouseEnter = (): void => this.handleSubMenuMouseEnter();
  private boundHandleSubMenuMouseLeave = (mouseEvent: MouseEvent): void => this.handleSubMenuMouseLeave(mouseEvent);

  private destroySubMenu(): void {
    this.cancelCloseSubMenu();
    this.subMenuSubscriptions.forEach((unsubscribe) => unsubscribe());
    this.subMenuSubscriptions = [];
    if (this.subMenuRef) {
      const hostElement = this.subMenuRef.location.nativeElement as HTMLElement;
      hostElement.removeEventListener("mouseenter", this.boundHandleSubMenuMouseEnter);
      hostElement.removeEventListener("mouseleave", this.boundHandleSubMenuMouseLeave);
      const childId = this.childDropdownId();
      this.dropdownManagerUnsubscribe?.();
      this.dropdownManagerUnsubscribe = null;
      if (childId) DropdownManager.close(childId);
      this.subMenuRef.destroy();
      this.subMenuRef = null;
    }
    this.subMenuOpen = false;
    this.cdr.markForCheck();
  }

  ngOnDestroy(): void {
    this.destroySubMenu();
  }
}
