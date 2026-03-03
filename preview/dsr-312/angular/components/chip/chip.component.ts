import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, input, output } from "@angular/core";
import { CHIP_TYPE_TO_ARIA_ROLE_MAP } from "@design-system-rte/core/components/chip/chip.constants";
import {
  BACKSPACE_KEY,
  DELETE_KEY,
  ENTER_KEY,
  SPACE_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { IconComponent } from "../icon/icon.component";

@Component({
  selector: "rte-chip",
  imports: [CommonModule, IconComponent],
  standalone: true,
  templateUrl: "./chip.component.html",
  styleUrl: "./chip.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipComponent {
  readonly id = input<string | undefined>();
  readonly label = input<string>("");
  readonly selected = input<boolean>(false);
  readonly disabled = input<boolean>(false);
  readonly type = input<"single" | "multi" | "input">("single");
  readonly compactSpacing = input<boolean>(false);
  readonly click = output<Event>();
  readonly close = output<Event>();

  readonly isCheckable = computed(() => this.type() === "single" || this.type() === "multi");
  readonly role = computed(() => CHIP_TYPE_TO_ARIA_ROLE_MAP[this.type()] || null);

  onClick(event: Event) {
    event.stopPropagation();
    if (!this.disabled()) {
      this.click.emit(event);
    }
  }

  onKeyUp(event: KeyboardEvent) {
    event.preventDefault();
    if (!this.disabled()) {
      if (event.key === SPACE_KEY || event.key === ENTER_KEY) {
        const target = event.target as HTMLElement;
        const isCloseButton = target.classList.contains("chip-close-button");
        if (isCloseButton) {
          target.click();
        } else {
          this.onClick(event);
        }
      } else if ((event.key === BACKSPACE_KEY || event.key === DELETE_KEY) && this.type() === "input") {
        const closeButton = (event.target as HTMLElement).querySelector(
          ".chip-close-button",
        ) as HTMLButtonElement | null;
        if (closeButton) {
          closeButton.click();
        }
      }
    }
  }
  onBlur(event: FocusEvent) {
    event.stopPropagation();
  }
  onCloseClick(event: Event) {
    event.stopPropagation();
    if (!this.disabled()) {
      this.close.emit(event);
    }
  }
}
