import { DEFAULT_NUMBER_INPUT_RANGE_ERROR_MESSAGES } from "./number-input.constants";
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

export function normalizeDecimalPrecision(decimalPrecision: number): number {
  if (!Number.isFinite(decimalPrecision)) {
    return 0;
  }
  return Math.min(100, Math.max(0, Math.trunc(decimalPrecision)));
}

export function formatNumericValue(options: FormatNumericValueOptions): string {
  const { value, decimalSeparator } = options;
  const normalizedPrecision = normalizeDecimalPrecision(options.decimalPrecision);
  const fixed = value.toFixed(normalizedPrecision);
  if (decimalSeparator === ",") {
    return fixed.replace(".", ",");
  }
  return fixed;
}

export function formatNumericValueOrEmpty(
  value: number | null,
  decimalPrecision: number,
  decimalSeparator: DecimalSeparator,
): string {
  if (value === null) {
    return "";
  }
  return formatNumericValue({ value, decimalPrecision, decimalSeparator });
}

function roundToDecimalPrecision(value: number, decimalPrecision: number): number {
  const factor = 10 ** decimalPrecision;
  return Math.round(value * factor) / factor;
}

export function clampToBounds(value: number, bounds: NumericBounds): number {
  let result = value;
  if (bounds.min !== undefined && result < bounds.min) {
    result = bounds.min;
  }
  if (bounds.max !== undefined && result > bounds.max) {
    result = bounds.max;
  }
  return result;
}

export function stepValue(options: StepValueOptions): number {
  const { value, step, direction, bounds, decimalPrecision, fallbackValue } = options;
  const base = value ?? fallbackValue;
  const delta = direction === "up" ? step : -step;
  const stepped = roundToDecimalPrecision(base + delta, decimalPrecision);
  return clampToBounds(stepped, bounds);
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
    return formatNumericValue({ value: reparsed, decimalPrecision, decimalSeparator });
  }

  return formatNumericValue({ value: numeric, decimalPrecision, decimalSeparator });
}
