import type {
  NumberInputAppearance,
  NumberInputIncrementPosition,
  NumberInputRangeErrorMessages,
} from "./number-input.interface";

export const NUMBER_INPUT_DEFAULT_MIN = 0;
export const NUMBER_INPUT_DEFAULT_STEP = 1;
export const NUMBER_INPUT_DEFAULT_DECIMAL_PRECISION = 0;
export const NUMBER_INPUT_DEFAULT_LOCALE = "fr-FR";
export const NUMBER_INPUT_DEFAULT_APPEARANCE: NumberInputAppearance = "brand";
export const NUMBER_INPUT_DEFAULT_INCREMENT_POSITION: NumberInputIncrementPosition = "right";
export const NUMBER_INPUT_DEFAULT_WIDTH = "184px";
export const NUMBER_INPUT_STEPPER_DECREMENT_ARIA_PREFIX = "Diminuer";
export const NUMBER_INPUT_STEPPER_INCREMENT_ARIA_PREFIX = "Augmenter";

export const NUMBER_INPUT_MISSING_ACCESSIBLE_NAME_ERROR =
  "Number Input requires a non-empty label or an ariaLabel when the label is omitted.";

export const DEFAULT_NUMBER_INPUT_RANGE_ERROR_MESSAGES: NumberInputRangeErrorMessages = {
  between: (min, max) => `La valeur doit être comprise entre ${min} et ${max}.`,
  greaterThan: (min) => `La valeur doit être supérieure ou égale à ${min}.`,
  lessThan: (max) => `La valeur doit être inférieure ou égale à ${max}.`,
};
