import {
  NUMBER_INPUT_DEFAULT_APPEARANCE,
  NUMBER_INPUT_DEFAULT_INCREMENT_POSITION,
  NUMBER_INPUT_DEFAULT_LOCALE,
  NUMBER_INPUT_DEFAULT_MIN,
} from "@design-system-rte/core/components/number-input/number-input.constants";
import type { NumberInputRangeErrorMessages } from "@design-system-rte/core/components/number-input/number-input.interface";
import {
  assertNumberInputAccessibleName,
  formatNumberInputDisplayValue,
  getDecimalSeparator,
  getInitialNumberInputDisplayText,
  getNumberInputAriaValueNow as getNumberInputAriaValueNow,
  getNumberInputAriaValueText,
  getNumberInputDisplayText,
  getNumberInputInputMode,
  getNumberInputSpinbuttonA11y,
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
import { ChangeEvent, KeyboardEvent, MouseEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";

export interface UseNumberInputOptions {
  id: string;
  label: string;
  value?: number | null;
  defaultValue?: number | null;
  onChange?: (value: number | null) => void;
  onBlur?: () => void;
  min?: number;
  max?: number;
  step?: number;
  decimalPrecision?: number;
  locale?: string;
  unit?: string;
  isError?: boolean;
  errorMessage?: string;
  assistiveTextLabel?: string;
  disabled?: boolean;
  readOnly?: boolean;
  rangeErrorMessages?: NumberInputRangeErrorMessages;
  ariaLabel?: string;
  ariaLabelledby?: string;
}

export function useNumberInput({
  id,
  label,
  value: controlledValue,
  defaultValue,
  onChange,
  onBlur,
  min = NUMBER_INPUT_DEFAULT_MIN,
  max,
  step: stepProp,
  decimalPrecision: decimalPrecisionProp,
  locale = NUMBER_INPUT_DEFAULT_LOCALE,
  unit = "",
  isError = false,
  errorMessage = "",
  assistiveTextLabel = "",
  disabled = false,
  readOnly = false,
  rangeErrorMessages,
  ariaLabel = "",
  ariaLabelledby = "",
  width,
}: UseNumberInputOptions & { width?: string }) {
  const step = resolveNumberInputStep(stepProp);
  const decimalPrecision = normalizeDecimalPrecision(decimalPrecisionProp);
  const computedWidth = resolveNumberInputWidth(width);

  const [displayText, setDisplayText] = useState(() =>
    getInitialNumberInputDisplayText({
      value: controlledValue,
      defaultValue,
      decimalPrecision,
      locale,
    }),
  );
  const [inputFocused, setInputFocused] = useState(false);
  const initializedRef = useRef(false);
  const spinbuttonRef = useRef<HTMLInputElement | null>(null);

  const decimalSeparator = useMemo(() => getDecimalSeparator(locale), [locale]);
  const inputMode = getNumberInputInputMode(decimalPrecision);
  const parsedValue = useMemo(() => parseNumericText(displayText, decimalSeparator), [displayText, decimalSeparator]);

  const rangeErrorMessage = useMemo(
    () =>
      getRangeErrorMessage({
        value: parsedValue,
        min,
        max,
        messages: rangeErrorMessages,
      }),
    [parsedValue, min, max, rangeErrorMessages],
  );

  const { showErrorState, resolvedErrorMessage, visibleAssistiveText } = useMemo(
    () =>
      getNumberInputValidationView({
        hasCustomError: isError,
        errorMessage,
        rangeErrorMessage,
        assistiveText: assistiveTextLabel,
      }),
    [isError, errorMessage, rangeErrorMessage, assistiveTextLabel],
  );

  const displayedLabel = label.trim();
  const hasVisibleLabel = displayedLabel.length > 0;

  const spinbuttonA11y = useMemo(
    () =>
      getNumberInputSpinbuttonA11y({
        id,
        hasVisibleLabel,
        ariaLabel,
        ariaLabelledby,
        visibleAssistiveText,
      }),
    [id, hasVisibleLabel, ariaLabel, ariaLabelledby, visibleAssistiveText],
  );

  const spinbuttonAriaLabelledby = spinbuttonA11y.ariaLabelledby ?? undefined;
  const spinbuttonAriaLabel = spinbuttonA11y.ariaLabel ?? undefined;
  const spinbuttonAriaDescribedBy = spinbuttonA11y.ariaDescribedby ?? undefined;

  const stepperFallbackValue = getNumberInputStepperFallbackValue(defaultValue ?? undefined, min);

  const { canDecrement, canIncrement } = useMemo(
    () =>
      getStepperCapabilities({
        isDisabled: disabled,
        readOnly,
        parsedValue,
        fallbackValue: stepperFallbackValue,
        min,
        max,
      }),
    [disabled, readOnly, parsedValue, stepperFallbackValue, min, max],
  );

  const fieldDisplayText = getNumberInputDisplayText(disabled, displayText);
  const ariaValueNow = getNumberInputAriaValueNow(disabled, parsedValue) ?? undefined;
  const ariaValueText = getNumberInputAriaValueText({ isDisabled: disabled, displayText, unit }) ?? undefined;

  const applyNumericValue = useCallback(
    (numericValue: number | null, options: { emitChange: boolean }) => {
      const display = formatNumberInputDisplayValue(numericValue, decimalPrecision, locale);
      setDisplayText(display);
      if (options.emitChange) {
        onChange?.(numericValue);
      }
    },
    [decimalPrecision, locale, onChange],
  );

  const emitValueChange = useCallback(() => {
    onChange?.(parsedValue);
  }, [onChange, parsedValue]);

  const increment = useCallback(() => {
    const nextValue = stepValue({
      value: parsedValue,
      step,
      direction: "up",
      bounds: { min, max },
      decimalPrecision,
      fallbackValue: stepperFallbackValue,
    });
    applyNumericValue(nextValue, { emitChange: true });
  }, [parsedValue, step, min, max, decimalPrecision, stepperFallbackValue, applyNumericValue]);

  const decrement = useCallback(() => {
    const nextValue = stepValue({
      value: parsedValue,
      step,
      direction: "down",
      bounds: { min, max },
      decimalPrecision,
      fallbackValue: stepperFallbackValue,
    });
    applyNumericValue(nextValue, { emitChange: true });
  }, [parsedValue, step, min, max, decimalPrecision, stepperFallbackValue, applyNumericValue]);

  useEffect(() => {
    assertNumberInputAccessibleName({ hasVisibleLabel, ariaLabel, ariaLabelledby });
  }, [hasVisibleLabel, ariaLabel, ariaLabelledby]);

  useEffect(() => {
    if (controlledValue === undefined) {
      return;
    }
    if (controlledValue === null) {
      applyNumericValue(null, { emitChange: false });
      return;
    }
    if (!Number.isFinite(controlledValue)) {
      return;
    }
    applyNumericValue(controlledValue, { emitChange: false });
  }, [controlledValue, locale, decimalPrecision, applyNumericValue]);

  useEffect(() => {
    if (initializedRef.current) {
      return;
    }
    if (controlledValue !== undefined) {
      initializedRef.current = true;
      return;
    }
    if (displayText !== "") {
      initializedRef.current = true;
      return;
    }
    setDisplayText(
      getInitialNumberInputDisplayText({
        defaultValue,
        decimalPrecision,
        locale,
      }),
    );
    initializedRef.current = true;
  }, [controlledValue, defaultValue, displayText, decimalPrecision, locale]);

  useEffect(() => {
    const inputElement = spinbuttonRef.current;
    if (!inputElement) {
      return;
    }

    const handleWheel = (event: WheelEvent) => {
      if (document.activeElement !== inputElement || disabled || readOnly) {
        return;
      }
      event.preventDefault();
      if (event.deltaY < 0) {
        increment();
      } else if (event.deltaY > 0) {
        decrement();
      }
    };

    inputElement.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      inputElement.removeEventListener("wheel", handleWheel);
    };
  }, [disabled, readOnly, increment, decrement]);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const inputElement = event.target;
    const { displayedValue, parsedValue: numeric } = sanitizeNumberInputText({
      text: inputElement.value,
      locale,
      decimalPrecision,
      min,
    });
    if (inputElement.value !== displayedValue) {
      inputElement.value = displayedValue;
    }
    setDisplayText(displayedValue);
    onChange?.(numeric);
  };

  const handleBlur = () => {
    const blurAction = resolveNumberInputBlurAction({
      displayText,
      defaultValue: defaultValue ?? undefined,
    });
    if (blurAction === "restoreDefault" && defaultValue !== undefined) {
      applyNumericValue(defaultValue, { emitChange: true });
    } else if (blurAction === "emitParsed") {
      emitValueChange();
    }
    setInputFocused(false);
    onBlur?.();
  };

  const handleFocus = () => {
    setInputFocused(true);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (disabled || readOnly) {
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      increment();
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      decrement();
      return;
    }

    if (event.key === "Enter") {
      spinbuttonRef.current?.blur();
    }
  };

  const handleDecrementClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!canDecrement) {
      return;
    }
    decrement();
    spinbuttonRef.current?.focus();
  };

  const handleIncrementClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!canIncrement) {
      return;
    }
    increment();
    spinbuttonRef.current?.focus();
  };

  return {
    spinbuttonRef,
    computedWidth,
    fieldDisplayText,
    inputFocused,
    inputMode,
    showErrorState,
    resolvedErrorMessage,
    visibleAssistiveText,
    displayedLabel,
    hasVisibleLabel,
    spinbuttonAriaLabelledby,
    spinbuttonAriaLabel,
    spinbuttonAriaDescribedBy,
    canDecrement,
    canIncrement,
    ariaValueNow,
    ariaValueText,
    handleInput,
    handleBlur,
    handleFocus,
    handleKeyDown,
    handleDecrementClick,
    handleIncrementClick,
  };
}

export { NUMBER_INPUT_DEFAULT_APPEARANCE, NUMBER_INPUT_DEFAULT_INCREMENT_POSITION };
