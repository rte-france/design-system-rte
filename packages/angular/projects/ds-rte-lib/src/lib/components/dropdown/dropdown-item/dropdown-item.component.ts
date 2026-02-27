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
    if (menuId) {
      DropdownManager.closeSubMenus(menuId);
      this.openSubMenu();
    }
  }

  handleFocus(): void {
    if (this.item()?.disabled || !this.hasChildren()) return;
    const menuId = this.menuId();
    if (menuId) {
      DropdownManager.closeSubMenus(menuId);
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

  handleSubMenuMouseLeave(): void {
    this.scheduleCloseSubMenu();
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
      (ev: { event: Event; id: string; item?: DropdownItemConfig }) => {
        this.itemEvent.emit({ ...ev, item: ev.item });
      },
    );
    const closeSub = this.subMenuRef.instance.closingMenu.subscribe(() => {
      this.destroySubMenu();
    });
    this.subMenuSubscriptions.push(() => {
      itemSub.unsubscribe();
      closeSub.unsubscribe();
    });

    const hostEl = this.subMenuRef.location.nativeElement as HTMLElement;
    hostEl.addEventListener("mouseenter", this.boundHandleSubMenuMouseEnter);
    hostEl.addEventListener("mouseleave", this.boundHandleSubMenuMouseLeave);

    waitForLayoutAndPosition();
    this.subMenuOpen = true;
    this.cdr.markForCheck();

    const self = this;
    function waitForLayoutAndPosition() {
      requestAnimationFrame(() => {
        if (!self.subMenuRef) return;
        const triggerEl = self.elementRef.nativeElement.querySelector("li.rte-dropdown-item") as HTMLElement;
        const menuEl = self.subMenuRef.location.nativeElement.querySelector(".rte-dropdown-menu") as HTMLElement;
        if (!triggerEl || !menuEl) return;

        const position = getAutoPlacementDropdown(triggerEl, menuEl, "right", SUB_MENU_OFFSET, true);
        const alignment = getAutoAlignment(triggerEl, menuEl, position);
        const coords = getCoordinates(position, triggerEl, menuEl, SUB_MENU_OFFSET, alignment);

        const hostEl = self.subMenuRef.location.nativeElement as HTMLElement;
        self.renderer.setStyle(hostEl, "display", "block");
        self.renderer.setStyle(hostEl, "position", "absolute");
        self.renderer.setStyle(hostEl, "top", `${coords.top}px`);
        self.renderer.setStyle(hostEl, "left", `${coords.left}px`);
        self.renderer.setStyle(hostEl, "opacity", "1");
      });
    }
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
  private boundHandleSubMenuMouseLeave = (): void => this.handleSubMenuMouseLeave();

  private destroySubMenu(): void {
    this.cancelCloseSubMenu();
    this.subMenuSubscriptions.forEach((unsub) => unsub());
    this.subMenuSubscriptions = [];
    if (this.subMenuRef) {
      const hostEl = this.subMenuRef.location.nativeElement as HTMLElement;
      hostEl.removeEventListener("mouseenter", this.boundHandleSubMenuMouseEnter);
      hostEl.removeEventListener("mouseleave", this.boundHandleSubMenuMouseLeave);
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
