export type LabelPosition = "top" | "side";
export type RightIconAppearance = "clean" | "visibilityOn" | "visibilityOff";
// export type RightIconAppearance = "close" | "visibility-show" | "visibility-hide";
export type RequiredAppearance = "required" | "requiredIconOnly" | "optional";
export type AssistiveAppearance = "description" | "error" | "success" | "link";

export interface TextInputProps {
  showLabel?: boolean;
  label?: string;
  labelPosition?: LabelPosition;
  required_optional?: boolean;
  showCounter?: boolean;
  value?: string;
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
  rightIconAppearance?: RightIconAppearance;
  requiredAppearance?: RequiredAppearance;
  showAssistiveText?: boolean;
  assistiveAppearance?: AssistiveAppearance;
  showAssistiveIcon?: boolean;
  assistiveLabel?: string;
  disabled?: boolean;
  error?: boolean;
  readOnly?: boolean;
  onChange?: (value: string) => void;
  onRightIconClick?: () => void;
}
