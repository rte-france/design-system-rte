import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, input, output } from "@angular/core";
import { ENTER_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard.constants";

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
  readonly id = input<string | undefined>(undefined);
  readonly label = input<string>("");
  readonly selected = input<boolean>(false);
  readonly disabled = input<boolean>(false);
  readonly type = input<"single" | "multi" | "input">("single");
  readonly compactSpacing = input<boolean>(false);
  readonly click = output<Event>();
  readonly close = output<Event>();

  readonly isCheckable = computed(() => this.type() === "single" || this.type() === "multi");
  readonly role = computed(() => {
    if (this.type() === "single") return "radio";
    if (this.type() === "multi") return "checkbox";
    if (this.type() === "input") return "option";
    return null;
  });

  onClick(event: Event) {
    event.stopPropagation();
    if (!this.disabled()) {
      this.click.emit(event);
    }
  }
  onKeyDown(event: KeyboardEvent) {
    event.stopPropagation();
  }
  onKeyUp(event: KeyboardEvent) {
    event.stopPropagation();
    if (!this.disabled()) {
      if (event.key === SPACE_KEY || event.key === ENTER_KEY) {
        const target = event.target as HTMLElement;
        if (!target.classList.contains("chip-close-button")) {
          this.onClick(event);
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
