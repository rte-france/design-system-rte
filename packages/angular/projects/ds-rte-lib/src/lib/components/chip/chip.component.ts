import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, input, output } from "@angular/core";

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
  readonly chipClick = output<Event>();
  readonly chipClose = output<Event>();

  readonly isCheckable = computed(() => this.type() === "single" || this.type() === "multi");
  readonly role = computed(() => {
    if (this.type() === "single") return "radio";
    if (this.type() === "multi") return "checkbox";
    if (this.type() === "input") return "option";
    return null;
  });

  onClick(event: Event) {
    if (!this.disabled()) {
      this.chipClick.emit(event);
    }
  }
  // onKeyDown(event: KeyboardEvent) {}
  // onKeyUp(event: KeyboardEvent) {}
  // onBlur(event: FocusEvent) {}
  onCloseClick(event: Event) {
    event.stopPropagation();
    if (!this.disabled()) {
      this.chipClose.emit(event);
    }
  }
}
