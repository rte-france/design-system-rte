import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, effect, input, output } from "@angular/core";
import { BadgeProps } from "@design-system-rte/core/components/badge/badge.interface";
import { NavItemProps } from "@design-system-rte/core/components/side-nav/nav-item/nav-item.interface";
import { getNavItemLabelIconSize } from "@design-system-rte/core/components/side-nav/nav-item/nav-item.utils";
import { NavMenuProps } from "@design-system-rte/core/components/side-nav/nav-menu/nav-menu.interface";
import { dividerAppearanceBySideNavAppearance } from "@design-system-rte/core/components/side-nav/side-nav.constants";
import { SideNavAppearance } from "@design-system-rte/core/components/side-nav/side-nav.interface";
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
  imports: [CommonModule, IconComponent, BadgeComponent, DividerComponent, NavItemComponent, TooltipDirective],
  standalone: true,
  templateUrl: "./nav-menu.component.html",
  styleUrl: "./nav-menu.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavMenuComponent {
  readonly id = input<string | undefined>();
  readonly icon = input<string | undefined>();
  readonly showIcon = input<boolean>(true);
  readonly label = input.required<string>();
  readonly collapsed = input<boolean>(false);
  readonly link = input<string | undefined>();
  readonly items = input.required<NavItemProps[]>();
  readonly open = input<boolean | undefined>(false);
  readonly showMenuIcon = input<boolean>(true);
  readonly isNested = input<boolean>(false);
  readonly parentMenuOpen = input<boolean | undefined>();
  readonly appearance = input<SideNavAppearance>("brand");
  readonly badge = input<BadgeProps | undefined>();
  readonly showDivider = input<boolean>(false);

  readonly itemClick = output<string>();
  readonly openChange = output<NavMenuOpenChangeEvent>();

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

  readonly hasNestedItems = computed<boolean>(() => !!this.items().length);
  readonly shouldShowMenu = computed<boolean>(() => !this.collapsed() && this.hasNestedItems());
  readonly tabIndex = computed<number>(() => getNavTabIndex(this.parentMenuOpen()));

  readonly dividerAppearance = computed(() => dividerAppearanceBySideNavAppearance[this.appearance()]);

  readonly iconSize = computed<number>(() => {
    return getNavItemLabelIconSize(this.isNested(), this.collapsed());
  });

  toggleMenu(): void {
    this.openChange.emit({ id: this.id() || this.label(), open: !this.open() });
  }

  handleEscape(): void {
    if (this.open()) {
      this.closeMenu();
    }
  }

  handleKeyDown(event: KeyboardEvent): void {
    if ([SPACE_KEY, ENTER_KEY].includes(event.key)) {
      event.preventDefault();
      this.toggleMenu();
    }
    if (event.key === ESCAPE_KEY) {
      event.preventDefault();
      this.handleEscape();
    }
  }

  hasNestedItemsForItem(item: NavItemProps): item is NavMenuProps {
    return !!item.items?.length;
  }

  handleMenuOpenChange(event: NavMenuOpenChangeEvent): void {
    const targetMenu = this.items().find((item) => item.id === event.id);
    if (targetMenu) {
      (targetMenu as NavMenuProps).open = event.open;
    }
  }

  handleMenuClick(itemId: string): void {
    const item = this.items().find((i) => i.id === itemId || i.label === itemId);
    if (item?.onClick) {
      item.onClick();
    }
  }

  private closeMenu(): void {
    this.openChange.emit({ id: this.id() || this.label(), open: false });
  }
}
