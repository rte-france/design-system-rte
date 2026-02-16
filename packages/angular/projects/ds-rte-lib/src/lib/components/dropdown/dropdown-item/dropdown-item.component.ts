import { CommonModule } from "@angular/common";
import {
  Component,
  computed,
  ElementRef,
  EventEmitter,
  forwardRef,
  inject,
  input,
  output,
  ViewContainerRef,
  ɵgetDirectives,
} from "@angular/core";
import { shouldDisplayBadge } from "@design-system-rte/core/components/badge/badge.utils";
import { DropdownItemProps } from "@design-system-rte/core/components/dropdown/dropdown.interface";
import { ENTER_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { BadgeComponent } from "../../badge/badge.component";
import { DividerComponent } from "../../divider/divider.component";
import { IconComponent } from "../../icon/icon.component";
import { DropdownMenuComponent } from "../dropdown-menu/dropdown-menu.component";
import { DropdownTriggerDirective } from "../dropdown-trigger/dropdown-trigger.directive";
import { DropdownDirective } from "../dropdown.directive";

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
  sub?: DropdownItemConfig[];
}

@Component({
  selector: "rte-dropdown-item",
  imports: [
    CommonModule,
    IconComponent,
    DividerComponent,
    BadgeComponent,
    forwardRef(() => DropdownDirective),
    forwardRef(() => DropdownTriggerDirective),
    forwardRef(() => DropdownMenuComponent),
  ],
  standalone: true,
  templateUrl: "./dropdown-item.component.html",
  styleUrl: "./dropdown-item.component.scss",
})
export class DropdownItemComponent {
  readonly item = input<DropdownItemConfig>();
  readonly menuId = input<string>();
  readonly itemEvent = output<{ event: Event; id: string }>();
  readonly closeSubmenu = output<void>();
  private readonly elementRef = inject(ElementRef);
  private readonly viewContainer = inject(ViewContainerRef);

  readonly shouldDisplayBadge = computed(() => {
    const item = this.item();
    return shouldDisplayBadge({
      showBadge: !!item?.showBadge,
      badgeContent: item?.badgeContent,
      badgeCount: item?.badgeCount,
      badgeIcon: item?.badgeIcon,
    });
  });

  readonly hasSubItems = computed(() => {
    const item = this.item();
    return item?.sub && item.sub.length > 0;
  });

  handleClick(event: Event): void {
    if (this.item()?.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    this.itemEvent.emit({
      event,
      id: this.item()?.id || this.item()?.label || "",
    });
  }

  handleKeyDown(event: KeyboardEvent): void {
    event.preventDefault();

    if ([SPACE_KEY, ENTER_KEY].includes(event.key)) {
      if (this.item()?.link) {
        const link = (event.target as HTMLElement).closest("li")?.querySelector("a");
        link?.click();
      } else {
        this.itemEvent.emit({
          event,
          id: this.item()?.id || this.item()?.label || "",
        });
      }
    }
  }

  handleMouseOut(): void {
    // console.log(this.elementRef.nativeElement.children);
    // console.log(menuId);
    // console.log(this.menuId());
    if (this.menuId()) {
      const menu = document.querySelector(`[data-menu-id="${this.menuId()}"]`) as HTMLElement;

      console.log(menu);
      const directives = ɵgetDirectives(this.elementRef.nativeElement.children[0]);
      const dropdownInstance = directives.find((dir) => dir instanceof DropdownDirective) as
        | DropdownDirective
        | undefined;

      // console.log("Found dropdown directive instance:", dropdownInstance);
      dropdownInstance?.closeDropdown();
    }
    // console.log(this.subDropdown);
  }
}
