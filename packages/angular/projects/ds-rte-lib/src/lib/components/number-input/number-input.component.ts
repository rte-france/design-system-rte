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
  NUMBER_INPUT_DEFAULT_APPEARANCE,
  NUMBER_INPUT_DEFAULT_DECIMAL_PRECISION,
  NUMBER_INPUT_DEFAULT_INCREMENT_POSITION,
  NUMBER_INPUT_DEFAULT_LOCALE,
  NUMBER_INPUT_DEFAULT_MIN,
  NUMBER_INPUT_DEFAULT_STEP,
} from "@design-system-rte/core/components/number-input/number-input.constants";
import type {
  NumberInputAppearance,
  NumberInputIncrementPosition,
  NumberInputRangeErrorMessages,
} from "@design-system-rte/core/components/number-input/number-input.interface";
import {
  assertNumberInputAccessibleName,
  formatNumberInputDisplayValue,
  getDecimalSeparator,
  getInitialNumberInputDisplayText,
  getNumberInputAriaValueNow,
  getNumberInputAriaValueText,
  getNumberInputDisplayText,
  getNumberInputMode,
  getNumberInputFieldA11y,
  getStepperCapabilities,
  getNumberInputStepperFallbackValue,
  getNumberInputValidationView,
  getRangeErrorMessage,
  normalizeDecimalPrecision,
  parseNumericText,
  resolveNumberInputBlurAction,
  resolveNumberInputStep,
  resolveNumberInputWidth,
  sanitizeNumberInputText,
  stepValue,
} from "@design-system-rte/core/components/number-input/number-input.utils";
import { fromEvent } from "rxjs";

import { IconButtonComponent } from "../icon-button/icon-button.component";
import { BaseInputComponent } from "../input/base-input/base-input.component";
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
export class NumberInputComponent extends BaseInputComponent implements ControlValueAccessor, AfterViewInit, OnInit {
  override readonly id = input<string>();
  override readonly label = input<string>("Label");
  override readonly width = input<string>("184px");

  readonly appearance = input<NumberInputAppearance>(NUMBER_INPUT_DEFAULT_APPEARANCE);
  readonly incrementPosition = input<NumberInputIncrementPosition>(NUMBER_INPUT_DEFAULT_INCREMENT_POSITION);

  readonly unit = input<string>("");
  readonly assistiveText = input<string>("");

  readonly min = input<number>(NUMBER_INPUT_DEFAULT_MIN);
  readonly max = input<number | undefined>(undefined);
  readonly step = input(NUMBER_INPUT_DEFAULT_STEP, {
    transform: (value: number | null | undefined) => resolveNumberInputStep(value),
  });
  readonly decimalPrecision = input(NUMBER_INPUT_DEFAULT_DECIMAL_PRECISION, {
    transform: (value: number | undefined | null) => normalizeDecimalPrecision(value ?? undefined),
  });
  readonly locale = input<string>(NUMBER_INPUT_DEFAULT_LOCALE);
  readonly defaultValue = input<number | undefined>(undefined);
  readonly name = input<string>("");
  readonly rangeErrorMessages = input<NumberInputRangeErrorMessages | undefined>(undefined);

  readonly displayText = signal("");
  readonly inputFocused = signal(false);

  private readonly destroyRef = inject(DestroyRef);
  private readonly inputFieldRef = viewChild<ElementRef<HTMLInputElement>>("inputFieldRef");

  private onChange: (value: number | null) => void = () => {};
  private onTouched: () => void = () => {};
  private readonly formDisabled = signal(false);

  override readonly valueChange = output<number | null>();

  readonly isEffectivelyDisabled = computed(() => this.disabled() || this.formDisabled());

  readonly fieldDisplayText = computed(() =>
    getNumberInputDisplayText(this.isEffectivelyDisabled(), this.displayText()),
  );

  readonly decimalSeparator = computed(() => getDecimalSeparator(this.locale()));

  readonly inputMode = computed(() => getNumberInputMode(this.decimalPrecision()));

  readonly parsedValue = computed(() => parseNumericText(this.displayText(), this.decimalSeparator()));

  readonly rangeErrorMessage = computed(() =>
    getRangeErrorMessage({
      value: this.parsedValue(),
      min: this.min(),
      max: this.max(),
      messages: this.rangeErrorMessages(),
    }),
  );

  readonly validationView = computed(() =>
    getNumberInputValidationView({
      hasCustomError: this.error(),
      errorMessage: this.errorMessage(),
      rangeErrorMessage: this.rangeErrorMessage(),
      assistiveText: this.assistiveText(),
    }),
  );

  readonly showErrorState = computed(() => this.validationView().showErrorState);

  override readonly computedAssistiveAppearance = computed(() =>
    this.showErrorState() ? "error" : this.assistiveAppearance(),
  );

  readonly resolvedErrorMessage = computed(() => this.validationView().resolvedErrorMessage);

  readonly displayedLabel = computed(() => this.label().trim());
  readonly hasVisibleLabel = computed(() => this.displayedLabel().length > 0);

  readonly inputFieldA11y = computed(() =>
    getNumberInputFieldA11y({
      id: this.id() ?? "",
      hasVisibleLabel: this.hasVisibleLabel(),
      ariaLabel: this.ariaLabel(),
      ariaLabelledby: this.ariaLabelledby(),
      visibleAssistiveText: this.validationView().visibleAssistiveText,
    }),
  );

  readonly inputFieldAriaLabelledby = computed(() => this.inputFieldA11y().ariaLabelledby);

  readonly inputFieldAriaLabel = computed(() => this.inputFieldA11y().ariaLabel);

  readonly inputFieldAriaDescribedBy = computed(() => this.inputFieldA11y().ariaDescribedby);

  readonly stepperVariant = computed(() => (this.appearance() === "brand" ? "primary" : "neutral"));

  readonly stepperSize = computed((): Exclude<ButtonSize, "l"> => (this.compactSpacing() ? "s" : "m"));

  readonly stepperFallbackValue = computed(() => getNumberInputStepperFallbackValue(this.defaultValue(), this.min()));

  readonly stepperCapabilities = computed(() =>
    getStepperCapabilities({
      isDisabled: this.isEffectivelyDisabled(),
      readOnly: this.readOnly(),
      parsedValue: this.parsedValue(),
      fallbackValue: this.stepperFallbackValue(),
      min: this.min(),
      max: this.max(),
    }),
  );

  readonly canDecrement = computed(() => this.stepperCapabilities().canDecrement);

  readonly canIncrement = computed(() => this.stepperCapabilities().canIncrement);

  readonly ariaValueNow = computed(() => getNumberInputAriaValueNow(this.isEffectivelyDisabled(), this.parsedValue()));

  readonly ariaValueText = computed(() =>
    getNumberInputAriaValueText({
      isDisabled: this.isEffectivelyDisabled(),
      displayText: this.displayText(),
      unit: this.unit(),
    }),
  );

  override readonly computedWidth = computed(() => resolveNumberInputWidth(this.width()));

  constructor() {
    super();

    effect(() => {
      assertNumberInputAccessibleName({
        hasVisibleLabel: this.hasVisibleLabel(),
        ariaLabel: this.ariaLabel(),
        ariaLabelledby: this.ariaLabelledby(),
      });
    });

    effect(() => {
      const rawValue = this.value();
      if (rawValue === "") {
        return;
      }
      this.locale();
      this.decimalPrecision();
      const externalValue = Number(rawValue);
      if (!Number.isFinite(externalValue)) {
        return;
      }
      this.applyNumericValue(externalValue, { emitChange: false });
    });
  }

  ngOnInit(): void {
    if (this.value() !== undefined && this.value() !== "") {
      return;
    }

    if (this.displayText() !== "") {
      return;
    }
    this.initializeDisplayFromDefault();
  }

  ngAfterViewInit(): void {
    const inputElement = this.inputFieldRef()?.nativeElement;
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

  registerOnChange(fn: (value: number | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.formDisabled.set(isDisabled);
  }

  handleInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const { displayedValue } = sanitizeNumberInputText({
      text: inputElement.value,
      locale: this.locale(),
      decimalPrecision: this.decimalPrecision(),
      min: this.min(),
    });
    if (inputElement.value !== displayedValue) {
      inputElement.value = displayedValue;
    }
    this.displayText.set(displayedValue);
    this.emitValueChange();
  }

  handleBlur(): void {
    const blurAction = resolveNumberInputBlurAction({
      displayText: this.displayText(),
      defaultValue: this.defaultValue(),
    });
    const fallback = this.defaultValue();
    if (blurAction === "restoreDefault" && fallback !== undefined) {
      this.applyNumericValue(fallback, { emitChange: true });
    } else if (blurAction === "emitParsed") {
      this.emitValueChange();
    }
    this.inputFocused.set(false);
    this.onTouched();
    this.inputBlur.emit();
  }

  handleFocus(): void {
    this.inputFocused.set(true);
  }

  override handleKeyDown(event: KeyboardEvent): void {
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
      this.inputFieldRef()?.nativeElement.blur();
    }
  }

  handleDecrementClick(event: MouseEvent | KeyboardEvent): void {
    event.preventDefault();
    if (!this.canDecrement()) {
      return;
    }
    this.decrement();
    this.inputFieldRef()?.nativeElement.focus();
  }

  handleIncrementClick(event: MouseEvent | KeyboardEvent): void {
    event.preventDefault();
    if (!this.canIncrement()) {
      return;
    }
    this.increment();
    this.inputFieldRef()?.nativeElement.focus();
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
    const display = formatNumberInputDisplayValue(value, this.decimalPrecision(), this.locale());
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
    this.displayText.set(
      getInitialNumberInputDisplayText({
        defaultValue: this.defaultValue(),
        decimalPrecision: this.decimalPrecision(),
        locale: this.locale(),
      }),
    );
  }
}
