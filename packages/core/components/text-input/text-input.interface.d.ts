export type LabelPosition = "top" | "side";
export type RightIconAction = "clean" | "visibilityOn" | "visibilityOff";
export type RightIconName = "cancel" | "visibility-show" | "visibility-hide";
export type AssistiveAppearance = "description" | "error" | "success" | "link";

export interface TextInputProps {
  id: string;
  label?: string;
  labelPosition?: LabelPosition;
  showCounter?: boolean;
  value?: string;
  defaultValue?: string;
  leftIcon?: RegularIconIdKey | TogglableIconIdKey;
  showRightIcon?: boolean;
  rightIconAction?: RightIconAction;
  rightIconSize?: import("../button/common/common-button").ButtonSize;
  showLabelRequirement?: boolean;
  assistiveAppearance?: AssistiveAppearance;
  showAssistiveIcon?: boolean;
  assistiveTextLabel?: string;
  error?: boolean;
  compactSpacing?: boolean;
  onRightIconClick?: () => void;
}
