import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, effect, input, output } from "@angular/core";
import { labelSize } from "@design-system-rte/core/components/radio-button/radio-button.constants";
import {
  getRadioButtonAccessibleName,
  RADIO_BUTTON_MISSING_ACCESSIBLE_NAME_ERROR,
} from "@design-system-rte/core/components/radio-button/radio-button.utils";

@Component({
  selector: "rte-radio-button",
  imports: [CommonModule],
  templateUrl: "./radio-button.component.html",
  styleUrl: "./radio-button.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioButtonComponent {
  readonly label = input("");
  readonly ariaLabel = input("");
  readonly value = input("");
  readonly groupName = input("");
  readonly showLabel = input(true);
  readonly disabled = input(false);
  readonly error = input(false);
  readonly readOnly = input(false);
  labelSize = labelSize;
  readonly isChecked = input(false);

  readonly accessibleLabel = computed(() => getRadioButtonAccessibleName(this.label(), this.ariaLabel()));

  readonly isDisplayed = computed(() => {
    if (this.disabled() && this.error()) {
      console.warn("RadioButton cannot be both disabled and in an error state. Please choose one state or the other.");
      return false;
    }
    return this.accessibleLabel() !== null;
  });

  readonly changeEvent = output<string>();

  constructor() {
    effect(() => {
      if (!this.accessibleLabel()) {
        console.error(RADIO_BUTTON_MISSING_ACCESSIBLE_NAME_ERROR);
      }
    });
  }

  onChange() {
    if (this.disabled() || this.readOnly()) {
      return;
    }
    this.changeEvent.emit(this.value());
  }
}
