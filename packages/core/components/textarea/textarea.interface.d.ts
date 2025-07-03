export type TextareaLabelPosition = "top" | "side";
export type TextareaAssistiveTextAppearance = "description" | "error" | "success" | "link";
export type TextareaRequiredAppearance = "required" | "icon" | "optional";

export interface TextareaProps {
  label?: string;
  labelId?: string;
  labelPosition?: TextareaLabelPosition;
  required?: boolean;
  requiredAppearance?: TextareaRequiredAppearance;
  resizeable?: boolean;
  showCounter?: boolean;
  value?: string;
  defaultValue?: string;
  assistiveTextLabel?: string;
  assistiveTextAppearance?: TextareaAssistiveTextAppearance;
  assistiveTextLink?: string;
  showAssistiveTextIcon?: boolean;
  showHandleIcon?: boolean;
  showScrollBar?: boolean;
}
