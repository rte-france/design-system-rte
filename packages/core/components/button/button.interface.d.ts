export type ButtonIconPosition = "left" | "right";
export type ButtonType = "button" | "submit" | "reset";

export interface ButtonProps {
  label: string;
  variant?: import("./common/common-button").ButtonVariant;
  size?: import("./common/common-button").ButtonSize;
  disabled?: boolean;
  iconPosition?: ButtonIconPosition;
  badgeContent?: import("../../badge/badge.interface").BadgeContent;
  badgeCount?: import("../../badge/badge.interface").BadgeCount;
  badgeType?: import("../../badge/badge.interface").BadgeType;
  badgeIcon?: import("../../badge/badge.interface").BadgeProps["icon"];
}
