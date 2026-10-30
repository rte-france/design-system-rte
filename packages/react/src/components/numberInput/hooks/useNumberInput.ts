import {
  DEFAULT_NUMBER_INPUT_RANGE_ERROR_MESSAGES,
  NUMBER_INPUT_DEFAULT_APPEARANCE,
  NUMBER_INPUT_DEFAULT_DECIMAL_PRECISION,
  NUMBER_INPUT_DEFAULT_INCREMENT_POSITION,
  NUMBER_INPUT_DEFAULT_LOCALE,
  NUMBER_INPUT_DEFAULT_MIN,
  NUMBER_INPUT_DEFAULT_STEP,
  NUMBER_INPUT_DEFAULT_WIDTH,
  NUMBER_INPUT_MISSING_ACCESSIBLE_NAME_ERROR,
} from "@design-system-rte/core/components/number-input/number-input.constants";
import type { NumberInputRangeErrorMessages } from "@design-system-rte/core/components/number-input/number-input.interface";
import {
  formatNumericValueOrEmpty,
  getDecimalSeparator,
  getRangeErrorMessage,
  isAtMax,
  isAtMin,
  normalizeDecimalPrecision,
  parseNumericText,
  sanitizeNumericText,
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

function resolveStep(step: number | undefined): number {
  if (typeof step === "number" && Number.isFinite(step) && step > 0) {
    return step;
  }
  return NUMBER_INPUT_DEFAULT_STEP;
}

function resolveDecimalPrecision(decimalPrecision: number | undefined): number {
  return normalizeDecimalPrecision(decimalPrecision ?? NUMBER_INPUT_DEFAULT_DECIMAL_PRECISION);
}

function resolveComputedWidth(width: string | undefined): string {
  if (width === undefined || width === "") {
    return NUMBER_INPUT_DEFAULT_WIDTH;
  }
  const widthValue = width.toString();
  if (
    widthValue.includes("px") ||
    widthValue.includes("%") ||
    widthValue.includes("em") ||
    widthValue.includes("rem")
  ) {
    return widthValue;
  }
  return `${widthValue}px`;
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
  const step = resolveStep(stepProp);
  const decimalPrecision = resolveDecimalPrecision(decimalPrecisionProp);
  const computedWidth = resolveComputedWidth(width);
  const decimalSeparatorInitial = getDecimalSeparator(locale);

  const [displayText, setDisplayText] = useState(() => {
    const initialNumeric =
      controlledValue !== undefined ? controlledValue : defaultValue !== undefined ? defaultValue : null;
    if (initialNumeric === null || initialNumeric === undefined) {
      return "";
    }
    if (!Number.isFinite(initialNumeric)) {
      return "";
    }
    return formatNumericValueOrEmpty(initialNumeric, decimalPrecision, decimalSeparatorInitial);
  });
  const [inputFocused, setInputFocused] = useState(false);
  const initializedRef = useRef(false);
  const spinbuttonRef = useRef<HTMLInputElement | null>(null);

  const decimalSeparator = useMemo(() => getDecimalSeparator(locale), [locale]);
  const inputMode = decimalPrecision > 0 ? "decimal" : "numeric";
  const parsedValue = useMemo(() => parseNumericText(displayText, decimalSeparator), [displayText, decimalSeparator]);

  const rangeErrorMessage = useMemo(
    () =>
      getRangeErrorMessage({
        value: parsedValue,
        min,
        max,
        messages: rangeErrorMessages ?? DEFAULT_NUMBER_INPUT_RANGE_ERROR_MESSAGES,
      }),
    [parsedValue, min, max, rangeErrorMessages],
  );

  const showErrorState = isError || rangeErrorMessage !== null;

  const resolvedErrorMessage = useMemo(() => {
    if (isError) {
      return errorMessage || rangeErrorMessage || "";
    }
    return rangeErrorMessage || "";
  }, [isError, errorMessage, rangeErrorMessage]);

  const hasVisibleLabel = label.trim().length > 0;
  const displayedLabel = hasVisibleLabel ? label : "";

  const spinbuttonAriaLabelledby = useMemo(() => {
    const explicitLabelledBy = ariaLabelledby.trim();
    if (explicitLabelledBy) {
      return explicitLabelledBy;
    }
    if (hasVisibleLabel && id) {
      return `input-label-${id}`;
    }
    return undefined;
  }, [ariaLabelledby, hasVisibleLabel, id]);

  const spinbuttonAriaLabel = useMemo(() => {
    if (spinbuttonAriaLabelledby) {
      return undefined;
    }
    const name = ariaLabel.trim();
    return name || undefined;
  }, [spinbuttonAriaLabelledby, ariaLabel]);

  const visibleAssistiveText = showErrorState ? resolvedErrorMessage || assistiveTextLabel : assistiveTextLabel;

  const spinbuttonAriaDescribedBy = visibleAssistiveText && id ? `${id}-assistive-text` : undefined;

  const stepperFallbackValue = defaultValue ?? min;

  const canDecrement = useMemo(() => {
    if (disabled || readOnly) {
      return false;
    }
    const current = parsedValue ?? stepperFallbackValue;
    return !isAtMin(current, min);
  }, [disabled, readOnly, parsedValue, stepperFallbackValue, min]);

  const canIncrement = useMemo(() => {
    if (disabled || readOnly) {
      return false;
    }
    const current = parsedValue ?? stepperFallbackValue;
    return !isAtMax(current, max);
  }, [disabled, readOnly, parsedValue, stepperFallbackValue, max]);

  const fieldDisplayText = disabled ? "" : displayText;

  const ariaValueNow = disabled ? undefined : (parsedValue ?? undefined);
  const ariaValueText = useMemo(() => {
    if (disabled) {
      return undefined;
    }
    if (!displayText) {
      return undefined;
    }
    if (unit) {
      return `${displayText} ${unit}`;
    }
    return displayText;
  }, [disabled, displayText, unit]);

  const applyNumericValue = useCallback(
    (numericValue: number | null, options: { emitChange: boolean }) => {
      const display =
        numericValue === null ? "" : formatNumericValueOrEmpty(numericValue, decimalPrecision, decimalSeparator);
      setDisplayText(display);
      if (options.emitChange) {
        onChange?.(numericValue);
      }
    },
    [decimalPrecision, decimalSeparator, onChange],
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
    if (!hasVisibleLabel && !ariaLabel.trim() && !ariaLabelledby.trim()) {
      console.error(NUMBER_INPUT_MISSING_ACCESSIBLE_NAME_ERROR);
    }
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
    if (defaultValue !== undefined && defaultValue !== null) {
      applyNumericValue(defaultValue, { emitChange: false });
    }
    initializedRef.current = true;
  }, [controlledValue, defaultValue, displayText, applyNumericValue]);

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
    const sanitized = sanitizeNumericText({
      text: inputElement.value,
      decimalSeparator,
      decimalPrecision,
      allowNegative: min < 0,
    });
    if (inputElement.value !== sanitized) {
      inputElement.value = sanitized;
    }
    setDisplayText(sanitized);
    const numeric = parseNumericText(sanitized, decimalSeparator);
    onChange?.(numeric);
  };

  const handleBlur = () => {
    if (displayText.trim() === "") {
      if (defaultValue !== undefined && defaultValue !== null) {
        applyNumericValue(defaultValue, { emitChange: true });
      } else {
        emitValueChange();
      }
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
