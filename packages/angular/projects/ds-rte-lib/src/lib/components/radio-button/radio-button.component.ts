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
  label = input("");
  groupName = input("");
  showLabel = input(true);
  disabled = input(false);
  error = input(false);
  readOnly = input(false);
  labelSize = labelSize;

  isDisplayed = computed(() => !(this.disabled() && this.error()));
}
