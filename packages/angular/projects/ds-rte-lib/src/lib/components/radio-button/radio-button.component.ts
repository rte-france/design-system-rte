import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, input, output } from "@angular/core";
import { labelSize } from "@design-system-rte/core/components/radio-button/radio-button.constants";

@Component({
  selector: "rte-radio-button",
  imports: [CommonModule],
  templateUrl: "./radio-button.component.html",
  styleUrl: "./radio-button.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioButtonComponent {
  readonly label = input("");
  readonly value = input("");
  readonly groupName = input("");
  readonly showLabel = input(true);
  readonly disabled = input(false);
  readonly error = input(false);
  readonly readOnly = input(false);
  labelSize = labelSize;
  readonly isChecked = input(false);

  readonly isDisplayed = computed(() => {
    if (this.disabled() && this.error()) {
      console.warn("RadioButton cannot be both disabled and in an error state. Please choose one state or the other.");
      return false;
    }
    return true;
  });

  readonly changeEvent = output<string>();

  onChange() {
    if (this.disabled() || this.readOnly()) {
      return;
    }
    this.changeEvent.emit(this.value());
  }
}
