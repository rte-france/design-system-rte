import { ChangeDetectionStrategy, Component, computed, signal } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

import { BaseTextInputComponent } from "./base-text-input/base-text-input.component";

@Component({
  selector: "rte-text-input",
  imports: [BaseTextInputComponent],
  templateUrl: "./text-input.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextInputComponent,
      multi: true,
    },
  ],
})
export class TextInputComponent extends BaseTextInputComponent implements ControlValueAccessor {
  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};
  private readonly formDisabled = signal(false);

  readonly isDisabled = computed(() => this.disabled() || this.formDisabled());

  writeValue(value: string): void {
    this.internalValue.set(value ?? "");
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.formDisabled.set(isDisabled);
  }

  handleValueChange(value: string): void {
    this.internalValue.set(value);
    this.onChange(value);
    this.valueChange.emit(value);
  }

  handleInputBlur(): void {
    this.onTouched();
    this.inputBlur.emit();
  }
}
