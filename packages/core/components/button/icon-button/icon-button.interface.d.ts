export interface IconButtonProps {
  variant?: import("../common/common-button").ButtonVariant;
  size?: import("../common/common-button").ButtonSize;
  compactSpacing?: boolean;
  disabled?: boolean;
  name: string;
  appearance?: "outlined" | "filled";
  badgeContent?: import("../../badge/badge.interface").BadgeContent;
  badgeCount?: import("../../badge/badge.interface").BadgeCount;
  badgeType?: import("../../badge/badge.interface").BadgeType;
  badgeIcon?: import("../../badge/badge.interface").BadgeProps["icon"];
}

export interface IconButtonToggleProps extends Omit<IconButtonProps, "appearance"> {
  selected?: boolean;
  defaultSelected?: boolean;
}
