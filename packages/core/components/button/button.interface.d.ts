export type ButtonIconPosition = "left" | "right";
export type ButtonType = "button" | "submit" | "reset";

export interface ButtonProps {
  label: string;
  variant?: import("./common/common-button").ButtonVariant;
  size?: import("./common/common-button").ButtonSize;
  disabled?: boolean;
  iconPosition?: ButtonIconPosition;
}
