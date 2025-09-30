import { CommonModule } from "@angular/common";
import { Component, EventEmitter, input, output } from "@angular/core";

import { DividerComponent } from "../../divider/divider.component";
import { IconComponent } from "../../icon/icon.component";

export interface DropdownItemConfig {
  label: string;
  leftIcon?: string;
  trailingText?: string;
  disabled?: boolean;
  hasSeparator?: boolean;
  hasIndent?: boolean;
  subMenuItems?: DropdownItemConfig[];
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

  readonly subMenuItems = input<DropdownItemConfig[]>([]);

  readonly click = output<Event>();

  handleClick(event: Event) {
    this.click.emit(event);
  }
}
