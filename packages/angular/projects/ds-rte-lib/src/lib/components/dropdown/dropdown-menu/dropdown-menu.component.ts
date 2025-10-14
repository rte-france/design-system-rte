import { CommonModule } from "@angular/common";
import { Component, ElementRef, HostListener, inject, input, output } from "@angular/core";
import {
  ARROW_DOWN_KEY,
  ARROW_LEFT_KEY,
  ARROW_RIGHT_KEY,
  ARROW_UP_KEY,
  TAB_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { DropdownService } from "../../../services/dropdown.service";
import { DropdownItemComponent, DropdownItemConfig } from "../dropdown-item/dropdown-item.component";

@Component({
  selector: "rte-dropdown-menu",
  imports: [CommonModule, DropdownItemComponent],
  standalone: true,
  templateUrl: "./dropdown-menu.component.html",
  styleUrl: "./dropdown-menu.component.scss",
  host: { "[attr.data-menu-id]": "menuId()" },
})
export class DropdownMenuComponent {
  private readonly elementRef = inject(ElementRef);
  private readonly dropdownService = inject(DropdownService);

  readonly items = input<DropdownItemConfig[]>([]);
  readonly menuId = input<string>();

  readonly itemEvent = output<{ event: Event; id: string }>();

  getChildMenuId(itemIndex: number): string {
    return `${this.menuId()}:${itemIndex + 1}`;
  }

  handleItemEvent(itemEvent: { event: Event; id: string }): void {
    this.itemEvent.emit(itemEvent);
  }

  @HostListener("keydown", ["$event"])
  onKeyDown(event: KeyboardEvent): void {
    if (!event.target || !this.menuId()) {
      return;
    }

    if ([ARROW_UP_KEY, ARROW_DOWN_KEY, ARROW_LEFT_KEY, ARROW_RIGHT_KEY, TAB_KEY].includes(event.key)) {
      event.preventDefault();
    }

    const menuId = this.menuId() as string;

    this.dropdownService.handleKeyboardInput(event.key, {
      menuElement: this.elementRef,
      menuId,
    });
  }
}
