import { CommonModule } from "@angular/common";
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  input,
  OnInit,
  output,
  signal,
  viewChild,
} from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { ButtonSize } from "@design-system-rte/core/components/button/common/common-button";
import {
  DEFAULT_NUMBER_INPUT_RANGE_ERROR_MESSAGES,
  NUMBER_INPUT_DEFAULT_APPEARANCE,
  NUMBER_INPUT_DEFAULT_DECIMAL_PRECISION,
  NUMBER_INPUT_DEFAULT_INCREMENT_POSITION,
  NUMBER_INPUT_DEFAULT_LOCALE,
  NUMBER_INPUT_DEFAULT_MIN,
  NUMBER_INPUT_DEFAULT_STEP,
  NUMBER_INPUT_DEFAULT_WIDTH,
  NUMBER_INPUT_STEPPER_DECREMENT_ARIA_PREFIX,
  NUMBER_INPUT_STEPPER_INCREMENT_ARIA_PREFIX,
} from "@design-system-rte/core/components/number-input/number-input.constants";
import type {
  NumberInputAppearance,
  NumberInputIncrementPosition,
  NumberInputRangeErrorMessages,
} from "@design-system-rte/core/components/number-input/number-input.interface";
import {
  formatNumericValueOrEmpty,
  getDecimalSeparator,
  normalizeDecimalPrecision,
  getRangeErrorMessage,
  isAtMax,
  isAtMin,
  parseNumericText,
  sanitizeNumericText,
  stepValue,
} from "@design-system-rte/core/components/number-input/number-input.utils";
import { fromEvent } from "rxjs";

import { IconButtonComponent } from "../icon-button/icon-button.component";
import { BaseInputComponent } from "../input/base-input/base-input.component";
import { BaseValueAccessor } from "../input/base-value-accessor";
import { RteBaseInputControlDirective } from "../input/rte-base-input-control.directive";

@Component({
  selector: "rte-number-input",
  imports: [CommonModule, BaseInputComponent, IconButtonComponent, RteBaseInputControlDirective],
  templateUrl: "./number-input.component.html",
  styleUrl: "./number-input.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.data-compact-spacing]": "compactSpacing()",
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: NumberInputComponent,
      multi: true,
    },
  ],
})
export class NumberInputComponent
  extends BaseValueAccessor<number | null>
  implements ControlValueAccessor, AfterViewInit, OnInit
{
  readonly id = input.required<string>();
  readonly label = input<string>("Label");
  readonly labelPosition = input<"top" | "side">("top");
  readonly required = input<boolean>(false);
  readonly showLabelRequirement = input<boolean>(false);

  readonly appearance = input<NumberInputAppearance>(NUMBER_INPUT_DEFAULT_APPEARANCE);
  readonly incrementPosition = input<NumberInputIncrementPosition>(NUMBER_INPUT_DEFAULT_INCREMENT_POSITION);
  readonly compactSpacing = input<boolean>(false);

  readonly unit = input<string>("");
  readonly assistiveText = input<string>("");

  readonly error = input<boolean>(false);
  readonly errorMessage = input<string>("");

  readonly disabled = input<boolean>(false);
  readonly readOnly = input<boolean>(false);

  readonly min = input<number>(NUMBER_INPUT_DEFAULT_MIN);
  readonly max = input<number | undefined>(undefined);
  readonly step = input(NUMBER_INPUT_DEFAULT_STEP, {
    transform: (value: number | null | undefined) =>
      typeof value === "number" && Number.isFinite(value) && value > 0 ? value : NUMBER_INPUT_DEFAULT_STEP,
  });
  readonly decimalPrecision = input(NUMBER_INPUT_DEFAULT_DECIMAL_PRECISION, {
    transform: (value: number | undefined | null) =>
      normalizeDecimalPrecision(value ?? NUMBER_INPUT_DEFAULT_DECIMAL_PRECISION),
  });
  readonly locale = input<string>(NUMBER_INPUT_DEFAULT_LOCALE);
  readonly defaultValue = input<number | undefined>(undefined);
  readonly placeholder = input<string>("");
  readonly width = input<string | undefined>(undefined);
  readonly name = input<string>("");
  readonly rangeErrorMessages = input<NumberInputRangeErrorMessages | undefined>(undefined);

  readonly value = input<number | null | undefined>(undefined);

  readonly valueChange = output<number | null>();
  readonly inputBlur = output<void>();

  readonly displayText = signal("");
  readonly inputFocused = signal(false);

  private readonly destroyRef = inject(DestroyRef);
  private readonly spinbuttonRef = viewChild<ElementRef<HTMLInputElement>>("spinbuttonRef");

  readonly isEffectivelyDisabled = computed(() => this.disabled() || this.formDisabled());

  readonly fieldDisplayText = computed(() => (this.isEffectivelyDisabled() ? "" : this.displayText()));

  readonly decimalSeparator = computed(() => getDecimalSeparator(this.locale()));

  readonly inputMode = computed(() => (this.decimalPrecision() > 0 ? "decimal" : "numeric"));

  readonly parsedValue = computed(() => parseNumericText(this.displayText(), this.decimalSeparator()));

  readonly rangeErrorMessage = computed(() =>
    getRangeErrorMessage({
      value: this.parsedValue(),
      min: this.min(),
      max: this.max(),
      messages: this.rangeErrorMessages() ?? DEFAULT_NUMBER_INPUT_RANGE_ERROR_MESSAGES,
    }),
  );

  readonly showErrorState = computed(() => this.error() || this.rangeErrorMessage() !== null);

  readonly computedAssistiveAppearance = computed(() => (this.showErrorState() ? "error" : "description"));

  readonly resolvedErrorMessage = computed(() => {
    if (this.error()) {
      return this.errorMessage() || this.rangeErrorMessage() || "";
    }
    return this.rangeErrorMessage() || "";
  });

  readonly assistiveLabelForField = computed(() => {
    if (this.showErrorState()) {
      return this.resolvedErrorMessage();
    }
    if (this.assistiveText()) {
      return this.assistiveText();
    }
    return "";
  });

  readonly stepperVariant = computed(() => (this.appearance() === "brand" ? "primary" : "neutral"));

  readonly stepperAppearance = computed(() => (this.appearance() === "brand" ? "filled" : "outlined"));

  readonly stepperSize = computed((): Exclude<ButtonSize, "l"> => (this.compactSpacing() ? "s" : "m"));

  readonly decrementAriaLabel = computed(() => `${NUMBER_INPUT_STEPPER_DECREMENT_ARIA_PREFIX} ${this.label()}`);

  readonly incrementAriaLabel = computed(() => `${NUMBER_INPUT_STEPPER_INCREMENT_ARIA_PREFIX} ${this.label()}`);

  readonly stepperFallbackValue = computed(() => this.defaultValue() ?? this.min());

  readonly canDecrement = computed(() => {
    if (this.isEffectivelyDisabled() || this.readOnly()) {
      return false;
    }
    const current = this.parsedValue() ?? this.stepperFallbackValue();
    return !isAtMin(current, this.min());
  });

  readonly canIncrement = computed(() => {
    if (this.isEffectivelyDisabled() || this.readOnly()) {
      return false;
    }
    const current = this.parsedValue() ?? this.stepperFallbackValue();
    return !isAtMax(current, this.max());
  });

  readonly ariaValueNow = computed(() => (this.isEffectivelyDisabled() ? null : this.parsedValue()));

  readonly ariaValueText = computed(() => {
    if (this.isEffectivelyDisabled()) {
      return null;
    }
    const valueText = this.displayText();
    if (!valueText) {
      return null;
    }
    if (this.unit()) {
      return `${valueText} ${this.unit()}`;
    }
    return valueText;
  });

  readonly computedWidth = computed(() => {
    const raw = this.width();
    if (raw === undefined || raw === "") {
      return NUMBER_INPUT_DEFAULT_WIDTH;
    }
    const widthValue = raw.toString();
    if (
      widthValue.includes("px") ||
      widthValue.includes("%") ||
      widthValue.includes("em") ||
      widthValue.includes("rem")
    ) {
      return widthValue;
    }
    return `${widthValue}px`;
  });

  constructor() {
    super();

    effect(() => {
      const externalValue = this.value();
      this.locale();
      this.decimalPrecision();
      if (externalValue === undefined) {
        return;
      }
      this.applyNumericValue(externalValue, { emitChange: false });
    });
  }

  ngOnInit(): void {
    if (this.value() === undefined) {
      this.initializeDisplayFromDefault();
    }
  }

  ngAfterViewInit(): void {
    const inputElement = this.spinbuttonRef()?.nativeElement;
    if (!inputElement) {
      return;
    }

    fromEvent<WheelEvent>(inputElement, "wheel", { passive: false })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((event) => {
        if (document.activeElement !== inputElement || this.isEffectivelyDisabled() || this.readOnly()) {
          return;
        }
        event.preventDefault();
        if (event.deltaY < 0) {
          this.increment();
        } else if (event.deltaY > 0) {
          this.decrement();
        }
      });
  }

  writeValue(value: number | null): void {
    this.applyNumericValue(value, { emitChange: false });
  }

  handleInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const sanitized = sanitizeNumericText({
      text: inputElement.value,
      decimalSeparator: this.decimalSeparator(),
      decimalPrecision: this.decimalPrecision(),
      allowNegative: this.min() < 0,
    });
    if (inputElement.value !== sanitized) {
      inputElement.value = sanitized;
    }
    this.displayText.set(sanitized);
    this.emitValueChange();
  }

  handleBlur(): void {
    if (this.displayText().trim() === "") {
      const fallback = this.defaultValue();
      if (fallback !== undefined) {
        this.applyNumericValue(fallback, { emitChange: true });
      } else {
        this.emitValueChange();
      }
    }
    this.inputFocused.set(false);
    this.onTouched();
    this.inputBlur.emit();
  }

  handleFocus(): void {
    this.inputFocused.set(true);
  }

  handleKeyDown(event: KeyboardEvent): void {
    if (this.isEffectivelyDisabled() || this.readOnly()) {
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      this.increment();
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      this.decrement();
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      this.spinbuttonRef()?.nativeElement.blur();
    }
  }

  handleDecrementClick(event: MouseEvent | KeyboardEvent): void {
    event.preventDefault();
    if (!this.canDecrement()) {
      return;
    }
    this.decrement();
    this.spinbuttonRef()?.nativeElement.focus();
  }

  handleIncrementClick(event: MouseEvent | KeyboardEvent): void {
    event.preventDefault();
    if (!this.canIncrement()) {
      return;
    }
    this.increment();
    this.spinbuttonRef()?.nativeElement.focus();
  }

  private increment(): void {
    const nextValue = stepValue({
      value: this.parsedValue(),
      step: this.step(),
      direction: "up",
      bounds: { min: this.min(), max: this.max() },
      decimalPrecision: this.decimalPrecision(),
      fallbackValue: this.stepperFallbackValue(),
    });
    this.applyNumericValue(nextValue, { emitChange: true });
  }

  private decrement(): void {
    const nextValue = stepValue({
      value: this.parsedValue(),
      step: this.step(),
      direction: "down",
      bounds: { min: this.min(), max: this.max() },
      decimalPrecision: this.decimalPrecision(),
      fallbackValue: this.stepperFallbackValue(),
    });
    this.applyNumericValue(nextValue, { emitChange: true });
  }

  private applyNumericValue(value: number | null, options: { emitChange: boolean }): void {
    const display =
      value === null ? "" : formatNumericValueOrEmpty(value, this.decimalPrecision(), this.decimalSeparator());
    this.displayText.set(display);
    if (options.emitChange) {
      this.emitValueChange();
    }
  }

  private emitValueChange(): void {
    const numeric = this.parsedValue();
    this.onChange(numeric);
    this.valueChange.emit(numeric);
  }

  private initializeDisplayFromDefault(): void {
    const initial = this.defaultValue();
    if (initial !== undefined) {
      this.applyNumericValue(initial, { emitChange: false });
      return;
    }
    this.displayText.set("");
  }
}
