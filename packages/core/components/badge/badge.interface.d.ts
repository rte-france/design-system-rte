export type BadgeType = "brand" | "neutral" | "indicator";
export type BadgeSize = "xs" | "s" | "m" | "l";
export type BadgeAppearance = "text" | "icon" | "empty";

export interface BadgeProps {
  badgeType?: BadgeType;
  size?: BadgeSize;
  appearance?: BadgeAppearance;
  count?: number;
}
