import { TextareaRequirementIndicator } from "./textarea.interface";

export const TEXTAREA_ICON_SIZE = 16;

export const TEXTAREA_REQUIREMENT_INDICATOR_VALUE: Record<TextareaRequirementIndicator, string> = {
  required: "(obligatoire)",
  requiredIcon: "*",
  optional: "(facultatif)",
};
