import { signal } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";

export abstract class BaseValueAccessor<T> implements ControlValueAccessor {
  protected onChange: (value: T) => void = () => {};
  protected onTouched: () => void = () => {};
  protected readonly formDisabled = signal(false);

  abstract writeValue(value: T): void;

  registerOnChange(fn: (value: T) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.formDisabled.set(isDisabled);
  }
}
