export type TextareaLabelPosition = "top" | "side";
export type TextareaAssistiveTextAppearance = "description" | "error" | "success" | "link";
export type TextareaRequirementIndicator = "required" | "requiredIcon" | "optional";

export interface TextareaProps {
  label?: string;
  labelId?: string;
  labelPosition?: TextareaLabelPosition;
  required?: boolean;
  showLabelRequirement?: boolean;
  resizeable?: boolean;
  showCounter?: boolean;
  value?: string;
  defaultValue?: string;
  assistiveTextLabel?: string;
  assistiveTextAppearance?: TextareaAssistiveTextAppearance;
  assistiveTextLink?: string;
  showHandleIcon?: boolean;
  showScrollBar?: boolean;
}
