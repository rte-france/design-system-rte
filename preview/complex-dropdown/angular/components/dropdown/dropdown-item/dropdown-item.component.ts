import { CommonModule } from "@angular/common";
import { Component, EventEmitter, input, output } from "@angular/core";
import { ENTER_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { DividerComponent } from "../../divider/divider.component";
import { IconComponent } from "../../icon/icon.component";

export interface DropdownItemConfig {
  label: string;
  leftIcon?: string;
  trailingText?: string;
  disabled?: boolean;
  hasSeparator?: boolean;
  hasIndent?: boolean;
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
  readonly label = input.required<string>();
  readonly leftIcon = input<string>();
  readonly trailingText = input<string>();
  readonly disabled = input<boolean>(false);
  readonly hasSeparator = input<boolean>(false);
  readonly hasIndent = input<boolean>(false);

  readonly menuId = input<string>();
  readonly itemEvent = output<{ event: Event; id: string }>();

  handleClick(event: Event): void {
    if (this.disabled()) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    this.itemEvent.emit({ event, id: this.menuId() || this.label() });
  }

  handleKeyDown(event: KeyboardEvent): void {
    if ([SPACE_KEY, ENTER_KEY].includes(event.key)) {
      event.preventDefault();

      if (!this.disabled()) {
        this.itemEvent.emit({ event, id: this.menuId() || this.label() });
      }
    }
  }
}
