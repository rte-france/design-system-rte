import {
  DEFAULT_NUMBER_INPUT_RANGE_ERROR_MESSAGES,
  NUMBER_INPUT_DEFAULT_DECIMAL_PRECISION,
  NUMBER_INPUT_DEFAULT_MIN,
  NUMBER_INPUT_DEFAULT_STEP,
  NUMBER_INPUT_DEFAULT_WIDTH,
  NUMBER_INPUT_MISSING_ACCESSIBLE_NAME_ERROR,
} from "./number-input.constants";
import type { NumberInputRangeErrorMessages } from "./number-input.interface";

export type DecimalSeparator = "," | ".";

export interface SanitizeNumericTextOptions {
  text: string;
  decimalSeparator: DecimalSeparator;
  decimalPrecision: number;
  allowNegative: boolean;
}

export interface FormatNumericValueOptions {
  value: number;
  decimalPrecision: number;
  decimalSeparator: DecimalSeparator;
}

export interface NumericBounds {
  min?: number;
  max?: number;
}

export type StepDirection = "up" | "down";

export interface StepValueOptions {
  value: number | null;
  step: number;
  direction: StepDirection;
  bounds: NumericBounds;
  decimalPrecision: number;
  fallbackValue: number;
}

export interface GetRangeErrorMessageOptions {
  value: number | null;
  min?: number;
  max?: number;
  messages?: NumberInputRangeErrorMessages;
}

export function getDecimalSeparator(locale: string): DecimalSeparator {
  const parts = new Intl.NumberFormat(locale).formatToParts(1.1);
  const decimalPart = parts.find((part) => part.type === "decimal");
  return decimalPart?.value === "," ? "," : ".";
}

export function getAlternateDecimalSeparator(separator: DecimalSeparator): DecimalSeparator {
  return separator === "," ? "." : ",";
}

export function normalizeDecimalSeparators(text: string, decimalSeparator: DecimalSeparator): string {
  const alternate = getAlternateDecimalSeparator(decimalSeparator);
  return text.split(alternate).join(decimalSeparator);
}

function limitDecimalPrecision(value: string, decimalSeparator: DecimalSeparator, decimalPrecision: number): string {
  if (decimalPrecision === 0) {
    const separatorIndex = value.indexOf(decimalSeparator);
    if (separatorIndex === -1) {
      return value;
    }
    return value.slice(0, separatorIndex);
  }

  const separatorIndex = value.indexOf(decimalSeparator);
  if (separatorIndex === -1) {
    return value;
  }

  const integerPart = value.slice(0, separatorIndex + 1);
  const fractionalPart = value.slice(separatorIndex + 1).slice(0, decimalPrecision);
  return integerPart + fractionalPart;
}

function isDigit(character: string): boolean {
  return character >= "0" && character <= "9";
}

function isDecimalSeparatorCharacter(character: string, decimalSeparator: DecimalSeparator): boolean {
  return [decimalSeparator, ".", ","].includes(character);
}

export function sanitizeNumericText(options: SanitizeNumericTextOptions): string {
  const { text, decimalSeparator, allowNegative } = options;
  const decimalPrecision = Math.max(0, options.decimalPrecision ?? 0);
  const normalized = normalizeDecimalSeparators(text, decimalSeparator);

  const buildState = {
    characters: "",
    decimalSeparatorUsed: false,
    leadingMinusUsed: false,
    ignoreCharactersAfterSeparator: false,
  };

  [...normalized].forEach((character) => {
    if (buildState.ignoreCharactersAfterSeparator) {
      return;
    }

    if (isDigit(character)) {
      buildState.characters += character;
      return;
    }

    const canStartWithMinus =
      allowNegative && character === "-" && buildState.characters.length === 0 && !buildState.leadingMinusUsed;

    if (canStartWithMinus) {
      buildState.leadingMinusUsed = true;
      buildState.characters = "-";
      return;
    }

    if (!isDecimalSeparatorCharacter(character, decimalSeparator)) {
      return;
    }

    if (decimalPrecision === 0) {
      buildState.ignoreCharactersAfterSeparator = true;
      return;
    }

    if (buildState.decimalSeparatorUsed) {
      return;
    }

    buildState.decimalSeparatorUsed = true;
    buildState.characters += decimalSeparator;
  });

  return limitDecimalPrecision(buildState.characters, decimalSeparator, decimalPrecision);
}

export function parseNumericText(text: string, decimalSeparator: DecimalSeparator): number | null {
  const trimmed = text.trim();
  if (trimmed === "" || trimmed === "-") {
    return null;
  }

  const normalized = normalizeDecimalSeparators(trimmed, decimalSeparator);
  const forParsing = normalized.replace(decimalSeparator, ".");
  const parsed = Number(forParsing);
  return Number.isFinite(parsed) ? parsed : null;
}

export function normalizeDecimalPrecision(decimalPrecision = NUMBER_INPUT_DEFAULT_DECIMAL_PRECISION): number {
  if (typeof decimalPrecision !== "number" || !Number.isFinite(decimalPrecision)) {
    return 0;
  }
  return Math.min(100, Math.max(0, Math.trunc(decimalPrecision)));
}

export function formatNumericValue(
  value: number | null,
  decimalPrecision: number,
  decimalSeparator: DecimalSeparator,
): string {
  if (value === null) {
    return "";
  }
  const normalizedPrecision = normalizeDecimalPrecision(decimalPrecision);
  const fixed = value.toFixed(normalizedPrecision);
  if (decimalSeparator === ",") {
    return fixed.replace(".", ",");
  }
  return fixed;
}

function roundToDecimalPrecision(value: number, decimalPrecision: number): number {
  const factor = 10 ** decimalPrecision;
  return Math.round(value * factor) / factor;
}

function quantizeMaxInward(value: number, decimalPrecision: number): number {
  const factor = 10 ** decimalPrecision;
  return Math.floor(value * factor) / factor;
}

function quantizeMinInward(value: number, decimalPrecision: number): number {
  const factor = 10 ** decimalPrecision;
  return Math.ceil(value * factor) / factor;
}

export function clampToBounds(value: number, bounds: NumericBounds, decimalPrecision?: number): number {
  let result = value;
  const { min, max } = bounds;
  const hasPrecision = decimalPrecision !== undefined;

  if (min !== undefined && result < min) {
    result = hasPrecision ? quantizeMinInward(min, decimalPrecision) : min;
  }
  if (max !== undefined && result > max) {
    result = hasPrecision ? quantizeMaxInward(max, decimalPrecision) : max;
  }
  return result;
}

export function stepValue(options: StepValueOptions): number {
  const { value, step, direction, bounds, decimalPrecision, fallbackValue } = options;
  const base = value ?? fallbackValue;
  const delta = direction === "up" ? step : -step;
  const stepped = roundToDecimalPrecision(base + delta, decimalPrecision);
  return clampToBounds(stepped, bounds, decimalPrecision);
}

export function getRangeErrorMessage(options: GetRangeErrorMessageOptions): string | null {
  const { value, min, max, messages = DEFAULT_NUMBER_INPUT_RANGE_ERROR_MESSAGES } = options;

  if (value === null) {
    return null;
  }

  const hasMin = min !== undefined;
  const hasMax = max !== undefined;

  if (hasMin && hasMax && (value < min || value > max)) {
    return messages.between(min, max);
  }

  if (hasMin && !hasMax && value < min) {
    return messages.greaterThan(min);
  }

  if (hasMax && !hasMin && value > max) {
    return messages.lessThan(max);
  }

  return null;
}

export function isAtMin(value: number | null, min?: number): boolean {
  if (value === null || min === undefined) {
    return false;
  }
  return value <= min;
}

export function isAtMax(value: number | null, max?: number): boolean {
  if (value === null || max === undefined) {
    return false;
  }
  return value >= max;
}

export function formatValueFromBackend(
  rawValue: number | string | null | undefined,
  decimalPrecision: number,
  decimalSeparator: DecimalSeparator,
): string {
  if (rawValue === null || rawValue === undefined || rawValue === "") {
    return "";
  }

  const numeric = typeof rawValue === "number" ? rawValue : parseNumericText(String(rawValue), decimalSeparator);
  if (numeric === null) {
    const alternateSeparator = getAlternateDecimalSeparator(decimalSeparator);
    const reparsed = parseNumericText(String(rawValue), alternateSeparator);
    if (reparsed === null) {
      return "";
    }
    return formatNumericValue(reparsed, decimalPrecision, decimalSeparator);
  }

  return formatNumericValue(numeric, decimalPrecision, decimalSeparator);
}

export type NumberInputMode = "decimal" | "numeric";

export type NumberInputBlurAction = "noop" | "restoreDefault" | "emitParsed";

export interface NumberInputValidationViewInput {
  hasCustomError: boolean;
  errorMessage: string;
  rangeErrorMessage: string | null;
  assistiveText: string;
}

export interface NumberInputValidationView {
  showErrorState: boolean;
  resolvedErrorMessage: string;
  visibleAssistiveText: string;
}

export interface NumberInputFieldA11yInput {
  id: string;
  hasVisibleLabel: boolean;
  ariaLabel: string;
  ariaLabelledby: string;
  visibleAssistiveText: string;
}

export interface NumberInputFieldA11y {
  ariaLabelledby: string | null;
  ariaLabel: string | null;
  ariaDescribedby: string | null;
}

export interface NumberInputAriaValueTextInput {
  isDisabled: boolean;
  displayText: string;
  unit: string;
}

export interface StepperCapabilities {
  isDisabled: boolean;
  readOnly: boolean;
  parsedValue: number | null;
  fallbackValue: number;
  min?: number;
  max?: number;
}

export interface SanitizedNumberInput {
  text: string;
  locale: string;
  decimalPrecision: number;
  min?: number;
}

export interface ResolveNumberInputBlurActionInput {
  displayText: string;
  defaultValue?: number;
}

export interface GetInitialNumberInputDisplayTextInput {
  value?: number | null;
  defaultValue?: number | null;
  decimalPrecision: number;
  locale: string;
}

export interface AssertNumberInputAccessibleNameInput {
  hasVisibleLabel: boolean;
  ariaLabel: string;
  ariaLabelledby: string;
}

export function resolveNumberInputStep(step?: number | null): number {
  if (typeof step === "number" && Number.isFinite(step) && step > 0) {
    return step;
  }
  return NUMBER_INPUT_DEFAULT_STEP;
}

export function resolveNumberInputWidth(raw?: string): string {
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
}

export function getNumberInputDisplayText(isDisabled: boolean, displayText: string): string {
  return isDisabled ? "" : displayText;
}

export function getNumberInputMode(decimalPrecision: number): NumberInputMode {
  return decimalPrecision > 0 ? "decimal" : "numeric";
}

export function formatNumberInputDisplayValue(value: number | null, decimalPrecision: number, locale: string): string {
  if (value === null) {
    return "";
  }
  const decimalSeparator = getDecimalSeparator(locale);
  return formatNumericValue(value, decimalPrecision, decimalSeparator);
}

export function getInitialNumberInputDisplayText(options: GetInitialNumberInputDisplayTextInput): string {
  const { value, defaultValue, decimalPrecision, locale } = options;
  const initialNumeric = value !== undefined ? value : defaultValue !== undefined ? defaultValue : null;

  if (initialNumeric === null) {
    return "";
  }
  if (!Number.isFinite(initialNumeric)) {
    return "";
  }
  return formatNumberInputDisplayValue(initialNumeric, decimalPrecision, locale);
}

export function getNumberInputValidationView(input: NumberInputValidationViewInput): NumberInputValidationView {
  const { hasCustomError, errorMessage, rangeErrorMessage, assistiveText } = input;
  const showErrorState = hasCustomError || rangeErrorMessage !== null;

  let resolvedErrorMessage = "";
  if (hasCustomError) {
    resolvedErrorMessage = errorMessage || rangeErrorMessage || "";
  } else {
    resolvedErrorMessage = rangeErrorMessage || "";
  }

  const visibleAssistiveText = showErrorState ? resolvedErrorMessage || assistiveText : assistiveText;

  return {
    showErrorState,
    resolvedErrorMessage,
    visibleAssistiveText,
  };
}

export function getNumberInputFieldA11y(input: NumberInputFieldA11yInput): NumberInputFieldA11y {
  const { id, hasVisibleLabel, ariaLabel, ariaLabelledby, visibleAssistiveText } = input;

  const explicitLabelledBy = ariaLabelledby.trim();
  let resolvedLabelledby: string | null = null;
  if (explicitLabelledBy) {
    resolvedLabelledby = explicitLabelledBy;
  } else if (hasVisibleLabel && id) {
    resolvedLabelledby = `input-label-${id}`;
  }

  let resolvedLabel: string | null = null;
  if (!resolvedLabelledby) {
    const name = ariaLabel.trim();
    resolvedLabel = name || null;
  }

  const ariaDescribedby = visibleAssistiveText && id ? `${id}-assistive-text` : null;

  return {
    ariaLabelledby: resolvedLabelledby,
    ariaLabel: resolvedLabel,
    ariaDescribedby,
  };
}

export function getNumberInputAriaValueNow(isDisabled: boolean, parsedValue: number | null): number | null {
  if (isDisabled) {
    return null;
  }
  return parsedValue;
}

export function getNumberInputAriaValueText(input: NumberInputAriaValueTextInput): string | null {
  const { isDisabled, displayText, unit } = input;
  if (isDisabled || !displayText) {
    return null;
  }
  if (unit) {
    return `${displayText} ${unit}`;
  }
  return displayText;
}

export function getNumberInputStepperFallbackValue(
  defaultValue?: number,
  min: number = NUMBER_INPUT_DEFAULT_MIN,
): number {
  return defaultValue ?? min;
}

export function getStepperCapabilities(input: StepperCapabilities): {
  canIncrement: boolean;
  canDecrement: boolean;
} {
  const { isDisabled, readOnly, parsedValue, fallbackValue, min, max } = input;

  if (isDisabled || readOnly) {
    return { canIncrement: false, canDecrement: false };
  }

  const current = parsedValue ?? fallbackValue;
  return {
    canDecrement: !isAtMin(current, min),
    canIncrement: !isAtMax(current, max),
  };
}

export function sanitizeNumberInputText(input: SanitizedNumberInput): {
  displayedValue: string;
  parsedValue: number | null;
} {
  const { text, locale, decimalPrecision, min = NUMBER_INPUT_DEFAULT_MIN } = input;
  const decimalSeparator = getDecimalSeparator(locale);
  const displayedValue = sanitizeNumericText({
    text,
    decimalSeparator,
    decimalPrecision,
    allowNegative: min < 0,
  });
  const parsedValue = parseNumericText(displayedValue, decimalSeparator);
  return { displayedValue, parsedValue };
}

export function resolveNumberInputBlurAction(input: ResolveNumberInputBlurActionInput): NumberInputBlurAction {
  const { displayText, defaultValue } = input;
  if (displayText.trim() !== "") {
    return "noop";
  }
  if (defaultValue !== undefined) {
    return "restoreDefault";
  }
  return "emitParsed";
}

export function assertNumberInputAccessibleName(input: AssertNumberInputAccessibleNameInput): void {
  const { hasVisibleLabel, ariaLabel, ariaLabelledby } = input;
  if (!hasVisibleLabel && !ariaLabel.trim() && !ariaLabelledby.trim()) {
    console.error(NUMBER_INPUT_MISSING_ACCESSIBLE_NAME_ERROR);
  }
}
