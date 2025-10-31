export type BadgeType = "brand" | "neutral" | "indicator";
export type BadgeSize = "xs" | "s" | "m" | "l";
export type BadgeContent = "number" | "icon" | "empty";

export interface BadgeProps {
  badgeType?: BadgeType;
  size?: BadgeSize;
  content?: BadgeContent;
  count?: number;
  icon?: string;
}
