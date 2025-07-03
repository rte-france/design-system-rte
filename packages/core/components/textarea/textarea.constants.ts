import { TextareaRequiredAppearance } from "./textarea.interface";

export const TEXTAREA_ICON_SIZE = 16;

export const TEXTAREA_REQUIRED_LABEL: Record<TextareaRequiredAppearance, string> = {
  required: "(obligatoire)",
  icon: "*",
  optional: "(facultatif)",
};
