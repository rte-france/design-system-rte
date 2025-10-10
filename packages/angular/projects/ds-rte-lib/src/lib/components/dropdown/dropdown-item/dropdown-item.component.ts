import { CommonModule } from "@angular/common";
import { Component, DestroyRef, EventEmitter, inject, input, output } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { DropdownService } from "../../../services/dropdown.service";

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
  private readonly dropdownService = inject(DropdownService);
  private readonly destroyRef = inject(DestroyRef);
  readonly label = input.required<string>();
  readonly leftIcon = input<string>();
  readonly trailingText = input<string>();
  readonly disabled = input<boolean>(false);
  readonly hasSeparator = input<boolean>(false);
  readonly hasIndent = input<boolean>(false);

  readonly subMenuItems = input<DropdownItemConfig[]>([]);

  readonly menuId = input<string>();
  readonly itemIndex = input<number>();
  readonly click = output<Event>();

  isActive(): boolean {
    let active = false;
    if (this.menuId() && this.subMenuItems().length) {
      const submenuId = `${this.menuId()}:${this.itemIndex() ?? 0 + 1}`;
      this.dropdownService.isMenuActive(submenuId)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(isActive => active = isActive);
    }
    return active;
  }

  handleClick(event: Event) {
    if (this.disabled()) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    this.click.emit(event);
  }

  handleKeyDown(event: KeyboardEvent) {
    // Prevent scrolling when space is pressed
    if (event.code === 'Space' || event.key === ' ') {
      event.preventDefault();
      
      // If not disabled, trigger the click event as expected for accessibility
      if (!this.disabled()) {
        this.click.emit(event);
      }
    }
  }
}
