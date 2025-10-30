export type NavItemAppearance = "neutral" | "brand";

export interface NavItemProps {
  appearance?: NavItemAppearance;
  icon?: string;
  showIcon?: boolean;
  showBadgeOrTag?: boolean;
  collapsed?: boolean;
  onClick?: () => void;
}
