export type LabelPosition = "top" | "side";
export type RightIconAction = "clean" | "visibilityOn" | "visibilityOff";
export type RightIconName = "close" | "visibility-show" | "visibility-hide";
export type AssistiveAppearance = "description" | "error" | "success" | "link";

export interface TextInputProps {
  label?: string;
  labelPosition?: LabelPosition;
  showCounter?: boolean;
  value?: string;
  defaultValue?: string;
  leftIcon?: RegularIconIdKey | TogglableIconIdKey | "";
  showRightIcon?: boolean;
  rightIconAction?: RightIconAction;
  required?: boolean;
  showLabelRequirement?: boolean;
  assistiveAppearance?: AssistiveAppearance;
  showAssistiveIcon?: boolean;
  assistiveTextLabel?: string;
  disabled?: boolean;
  error?: boolean;
  readOnly?: boolean;
  onRightIconClick?: () => void;
}
