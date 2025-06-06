import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";

import { IconComponent } from "../icon/icon.component";

@Component({
  selector: "rte-checkbox",
  imports: [CommonModule, IconComponent],
  standalone: true,
  templateUrl: "./checkbox.component.html",
  styleUrl: "./checkbox.component.scss",
})
export class CheckboxComponent {
  readonly id = input.required<string>();
  readonly label = input.required<string>();
  readonly value = input("");
  readonly indeterminate = input(false);
  readonly description = input("");
  readonly showLabel = input(true);
  readonly disabled = input(false);
  readonly error = input(false);
  readonly errorMessage = input("");
  readonly readOnly = input(false);
  readonly checked = input(false);
  readonly groupName = input("");

  onKeydown(event: KeyboardEvent) {
    if (event.code === "Space") {
      if (this.readOnly()) {
        event.preventDefault();
      }
    }
  }
}
