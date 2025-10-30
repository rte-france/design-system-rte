import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, input } from "@angular/core";

import { CheckboxComponent } from "../checkbox/checkbox.component";

@Component({
  selector: "rte-checkbox-group",
  imports: [CommonModule, CheckboxComponent],
  standalone: true,
  templateUrl: "./checkbox-group.component.html",
  styleUrl: "./checkbox-group.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxGroupComponent {
  readonly items = input.required<string[]>();
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
