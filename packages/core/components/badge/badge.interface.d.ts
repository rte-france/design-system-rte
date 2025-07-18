export type BadgeType = "brand" | "neutral" | "indicator";
export type BadgeSize = "XS" | "S" | "M" | "L";
export type BadgeAppearance = "text" | "icon";

export interface BadgeProps {
  badgeType?: BadgeType;
  size?: BadgeSize;
  appearance?: BadgeAppearance;
  count: number;
}
