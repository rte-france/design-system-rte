import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, effect, input, output, signal } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { switchHeight, switchWidth } from "@design-system-rte/core/components/switch/switch.constants";
import { SwitchProps } from "@design-system-rte/core/components/switch/switch.interface";

import { IconComponent } from "../icon/icon.component";
import { BaseValueAccessor } from "../input/base-value-accessor";

@Component({
  selector: "rte-switch",
  imports: [CommonModule, IconComponent],
  templateUrl: "./switch.component.html",
  styleUrl: "./switch.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SwitchComponent,
      multi: true,
    },
  ],
})
export class SwitchComponent extends BaseValueAccessor<boolean> {
  readonly label = input("");
  readonly appearance = input<SwitchProps["appearance"]>("brand");
  readonly showLabel = input(true);
  readonly showIcon = input(true);
  readonly disabled = input(false);
  readonly readOnly = input(false);
  readonly checked = input(false);

  readonly stateChange = output<Event>();

  switchHeight = switchHeight;
  switchWidth = switchWidth;

  readonly isChecked = signal(false);

  readonly isDisabled = computed(() => this.disabled() || this.formDisabled());

  private lastParentChecked = this.checked();

  constructor() {
    super();
    effect(() => {
      const parentChecked = this.checked();
      if (parentChecked !== this.lastParentChecked) {
        this.lastParentChecked = parentChecked;
        this.isChecked.set(parentChecked);
      }
    });
  }

  writeValue(value: boolean): void {
    this.isChecked.set(!!value);
  }

  handleChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.isChecked.set(target.checked);
    this.onChange(target.checked);
    this.onTouched();
    this.stateChange.emit(event);
  }

  handleClick(event: MouseEvent): void {
    if (this.readOnly() || this.isDisabled()) {
      event.stopPropagation();
      return;
    }
    if ((event.target as HTMLElement).matches('input[type="checkbox"]')) {
      return;
    }
    const inputElement = (event.currentTarget as HTMLElement).querySelector<HTMLInputElement>('input[type="checkbox"]');
    if (inputElement) {
      inputElement.checked = !this.isChecked();
      const changeEvent = new Event("change", { bubbles: true });
      Object.defineProperty(changeEvent, "target", {
        value: inputElement,
        writable: false,
      });
      this.handleChange(changeEvent);
    }
  }
}
