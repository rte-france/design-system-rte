import { BadgeHolderProps } from "../badge/badge.interface";

export type ButtonIconPosition = "left" | "right";
export type ButtonType = "button" | "submit" | "reset";

export interface ButtonProps extends BadgeHolderProps {
  label: string;
  variant?: import("./common/common-button").ButtonVariant;
  size?: import("./common/common-button").ButtonSize;
  disabled?: boolean;
  iconPosition?: ButtonIconPosition;
}
