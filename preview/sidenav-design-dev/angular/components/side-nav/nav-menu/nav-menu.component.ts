import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, input, signal } from "@angular/core";
import { BadgeProps } from "@design-system-rte/core/components/badge/badge.interface";
import { NavItemProps } from "@design-system-rte/core/components/side-nav/nav-item/nav-item.interface";
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

@Component({
  selector: "rte-nav-menu",
  imports: [CommonModule, IconComponent, BadgeComponent, DividerComponent, NavItemComponent, TooltipDirective],
  standalone: true,
  templateUrl: "./nav-menu.component.html",
  styleUrl: "./nav-menu.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavMenuComponent {
  readonly icon = input<string | undefined>();
  readonly showIcon = input<boolean>(true);
  readonly label = input.required<string>();
  readonly collapsed = input<boolean>(false);
  readonly link = input<string | undefined>();
  readonly onClick = input<(() => void) | undefined>();
  readonly items = input.required<NavItemProps[]>();
  readonly open = input<boolean | undefined>();
  readonly showMenuIcon = input<boolean>(true);
  readonly isNested = input<boolean>(false);
  readonly parentMenuOpen = input<boolean | undefined>();
  readonly appearance = input<SideNavAppearance>("brand");
  readonly badge = input<BadgeProps | undefined>();
  readonly showDivider = input<boolean>(false);

  readonly internalOpen = signal<boolean>(false);

  readonly isOpen = computed<boolean>(() => {
    const controlledOpen = this.open();
    return controlledOpen !== undefined ? controlledOpen : this.internalOpen();
  });

  readonly isControlled = computed<boolean>(() => this.open() !== undefined);

  readonly hasNestedItems = computed<boolean>(() => this.items().length > 0);
  readonly shouldShowMenu = computed<boolean>(() => !this.collapsed() && this.hasNestedItems());
  readonly nestedItemsParentMenuOpen = computed<boolean>(() => this.isOpen());
  readonly tabIndex = computed<number>(() => getNavTabIndex(this.parentMenuOpen()));

  readonly dividerAppearance = computed(() => dividerAppearanceBySideNavAppearance[this.appearance()]);

  readonly iconSize = computed<number>(() => {
    return this.isNested() ? 16 : this.collapsed() ? 24 : 20;
  });

  readonly containerClasses = computed<string>(() => {
    const classes: string[] = ["nav-menu-container", this.appearance()];
    if (this.collapsed()) {
      classes.push("collapsed");
    }
    if (this.isOpen()) {
      classes.push("open");
    }
    if (this.isNested()) {
      classes.push("nested");
    }
    return classes.join(" ");
  });

  readonly menuIconClasses = computed<string>(() => {
    const classes: string[] = ["menu-icon"];
    if (this.isOpen()) {
      classes.push("menu-icon-open");
    }
    return classes.join(" ");
  });

  readonly nestedMenuClasses = computed<string>(() => {
    const classes: string[] = ["nested-menu"];
    if (this.isOpen()) {
      classes.push("nested-menu-open");
    }
    return classes.join(" ");
  });

  toggleMenu(): void {
    if (!this.isControlled()) {
      this.internalOpen.set(!this.internalOpen());
    }
    const onClickFn = this.onClick();
    if (onClickFn) {
      onClickFn();
    }
  }

  handleEscape(): void {
    if (this.isOpen() && !this.isControlled()) {
      this.internalOpen.set(false);
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

  hasNestedItemsForItem(item: NavItemProps): boolean {
    return !!(item.items && item.items.length > 0);
  }
}
