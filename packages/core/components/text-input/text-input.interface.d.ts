export type LabelPosition = "top" | "side";
export type RightIconAppearance = "clear" | "visibilityOn" | "visibilityOff";
export type RequiredAppearance = "required" | "requiredIconOnly";
export type AssistiveAppearance = "description" | "error" | "succes" | "link";

export interface TextInputProps {
  showLabel?: boolean;
  label?: string;
  labelPosition?: LabelPosition;
  required?: boolean;
  optional?: boolean;
  showCounter?: boolean;
  value?: string;
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
  RightIconAppearance?: RightIconAppearance;
  RequiredAppearance?: RequiredAppearance;
  showAssistiveText?: boolean;
  assistiveText?: string;
  showAssistiveIcon?: boolean;
  assistiveLabel?: string;
  disabled?: boolean;
  readOnly?: boolean;
  onChange?: (value: string) => void;
  onRightIconClick?: () => void;
}
