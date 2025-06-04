import { CommonModule } from "@angular/common";
import { Component, computed, input } from "@angular/core";

import { RadioButtonComponent } from "../radio-button/radio-button.component";

@Component({
  selector: "rte-radio-button-group",
  imports: [CommonModule, RadioButtonComponent],
  standalone: true,
  templateUrl: "./radio-button-group.component.html",
  styleUrl: "./radio-button-group.component.scss",
})
export class RadioButtonGroupComponent {
  groupName = input("");
  items = input<string[]>([]);
  direction = input("horizontal");
  showItemsLabel = input(true);
  groupTitle = input("");
  showGroupTitle = input(false);
  groupHelpText = input("");
  showHelpText = input(false);
  errorMessage = input("");
  error = input(false);
  disabled = input(false);
  readOnly = input(false);

  isDisplayed = computed(() => !(this.disabled() && this.error()));
}
