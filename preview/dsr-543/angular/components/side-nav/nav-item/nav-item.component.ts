import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, input, output, signal } from "@angular/core";
import { BadgeProps } from "@design-system-rte/core/components/badge/badge.interface";
import { getNavItemLabelIconSize } from "@design-system-rte/core/components/side-nav/nav-item/nav-item.utils";
import { SideNavAppearance } from "@design-system-rte/core/components/side-nav/side-nav.interface";
import { ENTER_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { BadgeComponent } from "../../badge/badge.component";
import { IconComponent } from "../../icon/icon.component";
import { TooltipDirective } from "../../tooltip/tooltip.directive";

function getNavTabIndex(parentMenuOpen?: boolean): number {
  return parentMenuOpen === false ? -1 : 0;
}

@Component({
  selector: "rte-nav-item",
  imports: [CommonModule, IconComponent, BadgeComponent, TooltipDirective],
  standalone: true,
  templateUrl: "./nav-item.component.html",
  styleUrl: "./nav-item.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavItemComponent {
  readonly id = input<string | undefined>();
  readonly icon = input<string | undefined>();
  readonly showIcon = input<boolean>(true);
  readonly label = input.required<string>();
  readonly collapsed = input<boolean>(false);
  readonly link = input<string | undefined>();
  readonly appearance = input<SideNavAppearance>("brand");
  readonly active = input<boolean>(false);
  readonly badge = input<BadgeProps | undefined>();
  readonly isNested = input<boolean>(false);
  readonly parentMenuOpen = input<boolean | undefined>();
  readonly role = input<string | undefined>();
  readonly showDivider = input<boolean>(false);

  readonly focused = signal<boolean>(false);
  readonly tabIndex = computed<number>(() => getNavTabIndex(this.parentMenuOpen()));

  readonly itemClick = output<string>();

  readonly iconSize = computed<number>(() => {
    return getNavItemLabelIconSize(this.isNested(), this.collapsed());
  });

  handleClick(event: Event): void {
    event.stopPropagation();
    this.itemClick.emit(this.id() || this.label());
  }

  handleKeyDown(event: KeyboardEvent): void {
    if ([SPACE_KEY, ENTER_KEY].includes(event.key)) {
      event.preventDefault();
      this.itemClick.emit(this.id() || this.label());
    }
  }

  handleFocus(): void {
    this.focused.set(true);
  }

  handleBlur(): void {
    this.focused.set(false);
  }
}
