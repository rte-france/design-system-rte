export type BadgeType = "brand" | "neutral" | "indicator";
export type Size = "XS" | "S" | "M" | "L";
export type Appearance = "text" | "icon";

export interface BadgeProps {
  badgeType?: BadgeType;
  size?: Size;
  appearance?: Appearance;
  count: number;
}
