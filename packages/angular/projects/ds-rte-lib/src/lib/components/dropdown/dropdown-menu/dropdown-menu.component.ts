import { CommonModule } from "@angular/common";
import { Component, forwardRef, input, output } from "@angular/core";

import { DropdownItemComponent, DropdownItemConfig } from "../dropdown-item/dropdown-item.component";
import { DropdownTriggerDirective } from "../dropdown-trigger/dropdown-trigger.directive";
import { DropdownDirective } from "../dropdown.directive";

@Component({
  selector: "rte-dropdown-menu",
  imports: [CommonModule, DropdownItemComponent, DropdownTriggerDirective, forwardRef(() => DropdownDirective)],
  standalone: true,
  templateUrl: "./dropdown-menu.component.html",
  styleUrl: "./dropdown-menu.component.scss",
})
export class DropdownMenuComponent {
  constructor() {}

  readonly items = input<DropdownItemConfig[]>([]);

  readonly keydown = output<KeyboardEvent>();

  onKeyDown(event: KeyboardEvent): void {
    this.keydown.emit(event);
  }
}
