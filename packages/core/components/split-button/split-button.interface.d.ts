export type SplitButtonAppearance = "primary" | "secondary";
export type SplitButtonSize = "s" | "m" | "l";
export type SplitButtonPosition = "bottom-start" | "bottom-end" | "top-start" | "top-end";
export type SplitButtonAppearance = "primary" | "secondary";
export type SplitButtonSize = "s" | "m" | "l";
export type SplitButtonPosition = "bottom-start" | "bottom-end" | "top-start" | "top-end";

export interface SplitButtonProps {
  appearance?: SplitButtonAppearance;
  ariaLabelRight?: string;
  size?: SplitButtonSize;
  label: string;
  compactSpacing?: boolean;
  position?: SplitButtonPosition;
  icon?: string;
  showIcon?: boolean;
  Disabled?: boolean;
  options?: SplitButtonItemProps[];
}

export interface SplitButtonItemProps {
  id: string;
  label: string;
  icon?: string;
  badgeCount?: number;
  badgeContent?: import("../badge/badge.interface").BadgeContent;
  badgeIcon?: string;
  badgeType?: import("../badge/badge.interface").BadgeType;
  showBadge?: boolean;
  compactSpacing?: boolean;
  direction?: import("../common/common-types").Direction;
  disabled?: boolean;
  inverted?: boolean;
}
