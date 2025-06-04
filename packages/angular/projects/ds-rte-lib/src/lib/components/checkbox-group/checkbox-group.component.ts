import { CommonModule } from "@angular/common";
import { Component, computed, input } from "@angular/core";

import { CheckboxComponent } from "../checkbox/checkbox.component";

@Component({
  selector: "rte-checkbox-group",
  imports: [CommonModule, CheckboxComponent],
  standalone: true,
  templateUrl: "./checkbox-group.component.html",
  styleUrl: "./checkbox-group.component.scss",
})
export class CheckboxGroupComponent {
  groupName = input.required<string>();
  items = input.required<string[]>();
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
