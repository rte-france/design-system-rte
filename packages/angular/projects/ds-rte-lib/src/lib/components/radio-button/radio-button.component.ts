import { CommonModule } from "@angular/common";
import { Component, computed, input } from "@angular/core";
import { labelSize } from "@design-system-rte/core/components/radio-button/radio-button.constants";

@Component({
  selector: "rte-radio-button",
  imports: [CommonModule],
  standalone: true,
  templateUrl: "./radio-button.component.html",
  styleUrl: "./radio-button.component.scss",
})
export class RadioButtonComponent {
  readonly label = input("");
  readonly groupName = input("");
  readonly showLabel = input(true);
  readonly disabled = input(false);
  readonly error = input(false);
  readonly readOnly = input(false);
  labelSize = labelSize;

  readonly isDisplayed = computed(() => !(this.disabled() && this.error()));
}
