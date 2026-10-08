import { BadgeHolderProps } from "../badge/badge.interface";

export type ButtonIconPosition = "left" | "right";
export type ButtonType = "button" | "submit" | "reset";
export type ButtonIconAppearance = "filled" | "outlined";

export interface ButtonProps extends BadgeHolderProps {
  label: string;
  /** @deprecated Prefer `appearance`, `hierarchy`, `isCritical`, and `isReversed`. */
  variant?: import("./common/common-button").ButtonVariant;
  appearance?: import("./common/common-button").ButtonAppearance;
  hierarchy?: import("./common/common-button").ButtonHierarchy;
  isCritical?: boolean;
  isReversed?: boolean;
  size?: import("./common/common-button").ButtonSize;
  disabled?: boolean;
  iconPosition?: ButtonIconPosition;
  icon?: string;
  iconAppearance?: ButtonIconAppearance;
}
