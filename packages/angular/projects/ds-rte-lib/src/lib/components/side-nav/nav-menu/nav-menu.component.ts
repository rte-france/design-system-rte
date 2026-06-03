import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, effect, input, output } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { BadgeProps } from "@design-system-rte/core/components/badge/badge.interface";
import {
  isNavAction,
  isNavGroup,
  isNavLink,
} from "@design-system-rte/core/components/side-nav/nav-item/nav-item.guards";
import type { NavItem } from "@design-system-rte/core/components/side-nav/nav-item/nav-item.interface";
import {
  getNavItemLabelIconSize,
  setNavMenuOpenById,
} from "@design-system-rte/core/components/side-nav/nav-item/nav-item.utils";
import { getDividerAppearanceBySideNavTheme } from "@design-system-rte/core/components/side-nav/side-nav.constants";
import { SideNavAppearance, SideNavContrast } from "@design-system-rte/core/components/side-nav/side-nav.interface";
import { ENTER_KEY, ESCAPE_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { BadgeComponent } from "../../badge/badge.component";
import { DividerComponent } from "../../divider/divider.component";
import { IconComponent } from "../../icon/icon.component";
import { TooltipDirective } from "../../tooltip/tooltip.directive";
import { NavItemComponent } from "../nav-item/nav-item.component";

function getNavTabIndex(parentMenuOpen?: boolean): number {
  return parentMenuOpen === false ? -1 : 0;
}

export interface NavMenuOpenChangeEvent {
  id: string;
  open: boolean;
}

@Component({
  selector: "rte-nav-menu",
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    IconComponent,
    BadgeComponent,
    DividerComponent,
    NavItemComponent,
    TooltipDirective,
  ],
  standalone: true,
  templateUrl: "./nav-menu.component.html",
  styleUrl: "./nav-menu.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavMenuComponent {
  readonly id = input<string | undefined>();
  readonly icon = input<string | undefined>();
  readonly hasLeadingIcon = input<boolean>(true);
  readonly label = input.required<string>();
  readonly isCollapsed = input<boolean>(false);
  readonly route = input<string | undefined>();
  readonly external = input<boolean>(false);
  readonly items = input.required<NavItem[]>();
  readonly open = input<boolean | undefined>(false);
  readonly hasMenuIcon = input<boolean>(true);
  readonly isNested = input<boolean>(false);
  readonly parentMenuOpen = input<boolean | undefined>();
  readonly appearance = input<SideNavAppearance>("brand");
  readonly contrast = input<SideNavContrast>("high");
  readonly badge = input<BadgeProps | undefined>();
  readonly hasDivider = input<boolean>(false);
  readonly active = input<boolean>(false);

  readonly itemClick = output<string>();
  readonly openChange = output<NavMenuOpenChangeEvent>();

  readonly isNavLink = isNavLink;
  readonly isNavGroup = isNavGroup;
  readonly isNavAction = isNavAction;

  constructor() {
    effect(
      () => {
        if (this.parentMenuOpen() === false && this.open()) {
          this.closeMenu();
        }
      },
      { allowSignalWrites: true },
    );
  }

  readonly menuId = computed<string>(() => this.id() || this.label());
  readonly nestedMenuId = computed<string>(() => `nested-menu-${this.menuId()}`);
  readonly hasRoute = computed<boolean>(() => !!this.route());
  readonly isInternalRoute = computed<boolean>(() => this.hasRoute() && !this.external());
  readonly hasNestedItems = computed<boolean>(() => !!this.items().length);
  readonly shouldShowMenu = computed<boolean>(() => !this.isCollapsed() && this.hasNestedItems());
  readonly tabIndex = computed<number>(() => getNavTabIndex(this.parentMenuOpen()));
  readonly dividerAppearance = computed(() => getDividerAppearanceBySideNavTheme(this.appearance(), this.contrast()));

  readonly iconSize = computed<number>(() => {
    return getNavItemLabelIconSize(this.isNested(), this.isCollapsed());
  });

  toggleMenu(): void {
    const menuId = this.menuId();
    this.itemClick.emit(menuId);
    this.openChange.emit({ id: menuId, open: !this.open() });
  }

  openMenu(): void {
    const menuId = this.menuId();
    if (!this.open()) {
      this.openChange.emit({ id: menuId, open: true });
    }
  }

  handleLabelNavigateClick(): void {
    this.itemClick.emit(this.menuId());
    this.openMenu();
  }

  handleChevronClick(event: Event): void {
    event.stopPropagation();
    this.toggleMenu();
  }

  handleChevronKeyDown(event: KeyboardEvent): void {
    if ([SPACE_KEY, ENTER_KEY].includes(event.key)) {
      event.preventDefault();
      event.stopPropagation();
      this.toggleMenu();
    }
    if (event.key === ESCAPE_KEY) {
      event.preventDefault();
      this.handleEscape();
    }
  }

  handleDisclosureKeyDown(event: KeyboardEvent): void {
    if ([SPACE_KEY, ENTER_KEY].includes(event.key)) {
      event.preventDefault();
      this.toggleMenu();
    }
    if (event.key === ESCAPE_KEY) {
      event.preventDefault();
      this.handleEscape();
    }
  }

  handleEscape(): void {
    if (this.open()) {
      this.closeMenu();
    }
  }

  handleMenuOpenChange(event: NavMenuOpenChangeEvent): void {
    setNavMenuOpenById(this.items(), event.id, event.open);
  }

  handleNestedItemClick(itemId: string): void {
    const item = this.items().find((navItem) => navItem.id === itemId || navItem.label === itemId);
    if (item && isNavAction(item)) {
      item.onClick();
    }
    this.itemClick.emit(itemId);
  }

  private closeMenu(): void {
    this.openChange.emit({ id: this.menuId(), open: false });
  }
}
