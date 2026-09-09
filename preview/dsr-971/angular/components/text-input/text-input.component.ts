import { ChangeDetectionStrategy, Component, computed, effect, input, output, signal } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { ButtonSize } from "@design-system-rte/core";

import { RegularIconIdKey, TogglableIconIdKey } from "../icon/icon-registry.service";

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
export class TextInputComponent implements ControlValueAccessor {
  readonly id = input<string>();
  readonly label = input<string>("");
  readonly labelPosition = input<"top" | "side">("top");
  readonly required = input<boolean>(false);
  readonly showCounter = input<boolean>(false);
  readonly value = input<string>("");
  readonly leftIcon = input<RegularIconIdKey | TogglableIconIdKey | null>(null);
  readonly showRightIcon = input<boolean>(true);
  readonly rightIconAction = input<"clean" | "visibilityOn" | "visibilityOff">("clean");
  readonly rightIcon = input<RegularIconIdKey | TogglableIconIdKey | null>(null);
  readonly rightIconAriaLabel = input<string>("");
  readonly rightIconSize = input<Exclude<ButtonSize, "l">>("s");
  readonly showLabelRequirement = input<boolean>(false);
  readonly assistiveAppearance = input<"description" | "error" | "success" | "link">("description");
  readonly showAssistiveIcon = input<boolean>(false);
  readonly assistiveTextLabel = input<string>("");
  readonly assistiveTextId = input<string | null>(null);
  readonly error = input<boolean>(false);
  readonly maxLength = input<number>(150);
  readonly disabled = input<boolean>(false);
  readonly readOnly = input<boolean>(false);
  readonly width = input<string>("300px");
  readonly ariaLabel = input<string>("");
  readonly ariaRequired = input<boolean>(false);
  readonly ariaLabelledby = input<string>("");
  readonly compactSpacing = input<boolean>(false);
  readonly customStyle = input<Record<string, string>>();
  readonly autocomplete = input<string>("");
  readonly highlighted = input<boolean>(false);
  readonly inputType = input<"text" | "password">("text");
  readonly useLabelForAttribute = input<boolean>(true);

  readonly valueChange = output<string>();
  readonly enterKeyDown = output<string>();
  readonly inputBlur = output<void>();
  readonly rightIconClick = output<MouseEvent | KeyboardEvent>();
  readonly rightIconKeydown = output<KeyboardEvent>();

  readonly internalValue = signal<string>(this.value());
  readonly computedWidth = computed(() => {
    const width = this.width().toString();
    return /px|%|em|rem/.test(width) ? width : `${width}px`;
  });

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};
  private readonly formDisabled = signal(false);
  private lastParentValue = this.value();

  readonly isDisabled = computed(() => this.disabled() || this.formDisabled());

  constructor() {
    effect(() => {
      const parentValue = this.value();
      if (parentValue !== this.lastParentValue) {
        this.lastParentValue = parentValue;
        this.internalValue.set(parentValue);
      }
    });
  }

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
