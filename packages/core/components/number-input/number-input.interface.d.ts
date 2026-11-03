import type { InputProps } from "../common/input/input.interface";

export type NumberInputAppearance = "brand" | "neutral";
export type NumberInputIncrementPosition = "right" | "sides";

export interface NumberInputRangeErrorMessages {
  between: (min: number, max: number) => string;
  greaterThan: (min: number) => string;
  lessThan: (max: number) => string;
}

export interface NumberInputProps extends InputProps<number | null> {
  appearance?: NumberInputAppearance;
  incrementPosition?: NumberInputIncrementPosition;
  compactSpacing?: boolean;
  hasLabel?: boolean;
  hasUnit?: boolean;
  unit?: string;
  hasAssistiveText?: boolean;
  min?: number;
  max?: number;
  step?: number;
  decimalPrecision?: number;
  locale?: string;
  placeholder?: string;
  width?: string;
  name?: string;
  rangeErrorMessages?: NumberInputRangeErrorMessages;
}
