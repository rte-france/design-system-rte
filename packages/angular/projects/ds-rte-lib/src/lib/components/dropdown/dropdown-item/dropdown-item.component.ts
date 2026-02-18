import { CommonModule } from "@angular/common";
import {
  ChangeDetectorRef,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  OnDestroy,
  output,
  signal,
} from "@angular/core";
import { shouldDisplayBadge } from "@design-system-rte/core/components/badge/badge.utils";
import { DropdownManager } from "@design-system-rte/core/components/dropdown/DropdownManager";
import { ENTER_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { BadgeComponent } from "../../badge/badge.component";
import { CheckboxComponent } from "../../checkbox/checkbox.component";
import { DividerComponent } from "../../divider/divider.component";
import { IconComponent } from "../../icon/icon.component";
import { DropdownItemConfig, SubmenuCreatedResult, SubmenuRequestEvent } from "../dropdown.types";
import { focusDropdownFirstElement } from "../dropdown.utils";

export type { DropdownItemConfig };

const SUB_MENU_CLOSE_DELAY_MS = 300;

@Component({
  selector: "rte-dropdown-item",
  imports: [CommonModule, IconComponent, DividerComponent, BadgeComponent, CheckboxComponent],
  standalone: true,
  templateUrl: "./dropdown-item.component.html",
  styleUrl: "./dropdown-item.component.scss",
})
export class DropdownItemComponent implements OnDestroy {
  readonly elementRef = inject(ElementRef);
  private readonly cdr = inject(ChangeDetectorRef);

  readonly item = input<DropdownItemConfig>();
  readonly menuId = input<string>();
  readonly itemEvent = output<{ event: Event; id: string; item?: DropdownItemConfig }>();
  readonly submenuRequest = output<SubmenuRequestEvent>();

  readonly subMenuOpen = signal<boolean>(false);

  private subMenuRef: import("@angular/core").ComponentRef<unknown> | null = null;
  private closeSubMenuTimeout: ReturnType<typeof setTimeout> | null = null;
  private subMenuSubscriptions: (() => void)[] = [];
  private dropdownManagerUnsubscribe: (() => void) | null = null;

  readonly hasChildren = computed(() => (this.item()?.children?.length ?? 0) > 0);
  readonly childDropdownId = computed(() => {
    const menuId = this.menuId();
    const label = this.item()?.label ?? "";
    return menuId && label ? `${menuId}-${label.replace(/\s+/g, "")}` : "";
  });

  readonly itemChangeEvent = output<{ event: Event; id: string }>();

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
    if (this.item()?.hasCheckbox) {
      this.itemChangeEvent.emit({
        event,
        id: this.item()?.id || this.item()?.label || "",
      });
      return;
    } else {
      this.itemEvent.emit({
        event,
        id: this.item()?.id || this.item()?.label || "",
      });
    }
  }

  handleChange(event: Event): void {
    event.stopPropagation();
    this.itemChangeEvent.emit({
      event,
      id: this.item()?.id || this.item()?.label || "",
      item: this.item(),
    });
  }

  handleKeyDown(event: KeyboardEvent): void {
    event.preventDefault();

    if (this.item()?.link && [SPACE_KEY, ENTER_KEY].includes(event.key)) {
      const link = (event.target as HTMLElement).closest("li")?.querySelector("a");
      link?.click();
      return;
    }

    if (this.hasChildren()) {
      if (event.key === SPACE_KEY) {
        this.openSubMenu();
        const childId = this.childDropdownId();
        if (childId) {
          setTimeout(() => focusDropdownFirstElement(childId), 0);
        }
      }
      return;
    }

    if ([SPACE_KEY, ENTER_KEY].includes(event.key)) {
      this.itemEvent.emit({
        event,
        id: this.item()?.id || this.item()?.label || "",
        item: this.item(),
      });
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
    }
  }

  handleMouseLeave(): void {
    if (!this.hasChildren()) return;
    this.scheduleCloseSubMenu();
  }

  handleSubMenuMouseEnter(): void {
    this.cancelCloseSubMenu();
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

    const triggerElement = this.elementRef.nativeElement.querySelector("li.rte-dropdown-item") as HTMLElement | null;
    if (!triggerElement) return;

    DropdownManager.open(childId);

    this.submenuRequest.emit({
      children,
      childId,
      triggerElement,
      onCreated: (result) => this.wireSubmenu(result),
    });
  }

  private wireSubmenu(result: SubmenuCreatedResult): void {
    if (this.subMenuRef) return;
    this.subMenuRef = result.componentRef;
    const hostElement = result.hostElement;
    const childId = this.childDropdownId();

    this.dropdownManagerUnsubscribe = DropdownManager.subscribe(childId ?? "", () => this.destroySubMenu());

    const menuInstance = this.subMenuRef.instance as {
      itemEvent: {
        subscribe: (callback: (event: { event: Event; id: string; item?: DropdownItemConfig }) => void) => {
          unsubscribe: () => void;
        };
      };
      closingMenu: { subscribe: (callback: () => void) => { unsubscribe: () => void } };
    };
    const itemSub = menuInstance.itemEvent.subscribe(
      (emittedItemEvent: { event: Event; id: string; item?: DropdownItemConfig }) => {
        this.itemEvent.emit({ ...emittedItemEvent, item: emittedItemEvent.item });
      },
    );
    const closeSub = menuInstance.closingMenu.subscribe(() => {
      this.destroySubMenu();
    });
    this.subMenuSubscriptions.push(() => {
      itemSub.unsubscribe();
      closeSub.unsubscribe();
    });

    hostElement.addEventListener("mouseenter", this.boundHandleSubMenuMouseEnter);

    this.subMenuOpen.set(true);
    this.cdr.markForCheck();
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

  private readonly boundHandleSubMenuMouseEnter = (): void => this.handleSubMenuMouseEnter();

  private destroySubMenu(): void {
    this.cancelCloseSubMenu();
    this.subMenuSubscriptions.forEach((unsubscribe) => unsubscribe());
    this.subMenuSubscriptions = [];
    if (this.subMenuRef) {
      const hostElement = this.subMenuRef.location.nativeElement as HTMLElement;
      hostElement.removeEventListener("mouseenter", this.boundHandleSubMenuMouseEnter);
      const childId = this.childDropdownId();
      this.dropdownManagerUnsubscribe?.();
      this.dropdownManagerUnsubscribe = null;
      if (childId) DropdownManager.close(childId);
      this.subMenuRef.destroy();
      this.subMenuRef = null;
    }
    this.subMenuOpen.set(false);
    this.cdr.markForCheck();
  }

  ngOnDestroy(): void {
    this.destroySubMenu();
  }
}
