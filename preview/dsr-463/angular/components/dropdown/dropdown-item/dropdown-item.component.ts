import { CommonModule } from "@angular/common";
import { Component, EventEmitter, input, output } from "@angular/core";
import { ENTER_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { DividerComponent } from "../../divider/divider.component";
import { IconComponent } from "../../icon/icon.component";

export interface DropdownItemConfig {
  id?: string;
  label: string;
  leftIcon?: string;
  trailingText?: string;
  disabled?: boolean;
  hasSeparator?: boolean;
  hasIndent?: boolean;
  link?: string;
  click?: EventEmitter<Event>;
}

@Component({
  selector: "rte-dropdown-item",
  imports: [CommonModule, IconComponent, DividerComponent],
  standalone: true,
  templateUrl: "./dropdown-item.component.html",
  styleUrl: "./dropdown-item.component.scss",
})
export class DropdownItemComponent {
  readonly item = input<DropdownItemConfig>();
  readonly menuId = input<string>();
  readonly itemEvent = output<{ event: Event; id: string }>();

  handleClick(event: Event): void {
    if (this.item()?.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    this.itemEvent.emit({ event, id: this.item()?.id || this.item()?.label || "" });
  }

  handleKeyDown(event: KeyboardEvent): void {
    event.preventDefault();

    if ([SPACE_KEY, ENTER_KEY].includes(event.key)) {
      if (this.item()?.link) {
        const link = (event.target as HTMLElement).closest("li")?.querySelector("a");
        link?.click();
      } else {
        this.itemEvent.emit({ event, id: this.item()?.id || this.item()?.label || "" });
      }
    }
  }
}
