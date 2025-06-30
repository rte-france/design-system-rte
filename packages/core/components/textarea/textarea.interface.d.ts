type TextareaLabelPosition = "top" | "side";
type TextareaAssistiveTextAppearance = "description" | "error" | "success" | "link";
type TextareaRequiredAppearance = "required" | "icon" | "text";
type RequiredIndicator = "required" | "icon" | "optional";

export interface TextareaProps {
  label?: string;
  labelId?: string;
  labelPosition?: TextareaLabelPosition;
  required?: boolean;
  requiredAppearance?: RequiredIndicator;
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
