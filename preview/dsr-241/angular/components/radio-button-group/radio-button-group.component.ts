import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, input } from "@angular/core";

import { RadioButtonComponent } from "../radio-button/radio-button.component";

@Component({
  selector: "rte-radio-button-group",
  imports: [CommonModule, RadioButtonComponent],
  standalone: true,
  templateUrl: "./radio-button-group.component.html",
  styleUrl: "./radio-button-group.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioButtonGroupComponent {
  readonly groupName = input("");
  readonly items = input<string[]>([]);
  readonly direction = input("horizontal");
  readonly showItemsLabel = input(true);
  readonly groupTitle = input("");
  readonly showGroupTitle = input(false);
  readonly groupHelpText = input("");
  readonly showHelpText = input(false);
  readonly errorMessage = input("");
  readonly error = input(false);
  readonly disabled = input(false);
  readonly readOnly = input(false);

  readonly isDisplayed = computed(() => !(this.disabled() && this.error()));
}
