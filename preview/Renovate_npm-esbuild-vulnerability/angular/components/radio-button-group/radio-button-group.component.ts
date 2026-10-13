import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, effect, input, output, signal } from "@angular/core";
import { generateId } from "@design-system-rte/core";

import { RequiredIndicatorComponent } from "../input/required-indicator/required-indicator.component";
import { RadioButtonComponent } from "../radio-button/radio-button.component";

@Component({
  selector: "rte-radio-button-group",
  imports: [CommonModule, RadioButtonComponent, RequiredIndicatorComponent],
  templateUrl: "./radio-button-group.component.html",
  styleUrl: "./radio-button-group.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioButtonGroupComponent {
  readonly groupName = input("");
  readonly items = input<{ label: string; value: string; ariaLabel?: string; ariaLabelledBy?: string }[]>([]);
  readonly direction = input("horizontal");
  readonly showItemsLabel = input(true);
  readonly groupTitleText = input("");
  readonly groupHelpText = input("");
  readonly errorText = input("");
  readonly isError = input(false);
  readonly disabled = input(false);
  readonly isReadOnly = input(false);
  readonly required = input(false);
  readonly showLabelRequirement = input(false);
  readonly selectedValue = input("");
  readonly changeEvent = output<string>();
  readonly errorMessageId = generateId();

  readonly internalSelectedValue = signal(this.selectedValue());

  readonly isDisplayed = computed(() => !(this.disabled() && this.isError()));

  constructor() {
    effect(() => this.internalSelectedValue.set(this.selectedValue()));
  }

  onChange(value: string) {
    if (this.disabled() || this.isReadOnly()) {
      return;
    }
    this.internalSelectedValue.set(value);
    this.changeEvent.emit(value);
  }
}
