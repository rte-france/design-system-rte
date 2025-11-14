import { BadgeProps } from "../../badge/badge.interface";
import { SideNavAppearance } from "../side-nav.interface";

export interface NavItemProps {
  id?: string;
  appearance?: SideNavAppearance;
  label: string;
  icon?: string;
  showIcon?: boolean;
  showBadge?: boolean;
  collapsed?: boolean;
  link?: string;
  onClick?: () => void;
  items?: NavItemProps[];
  active?: boolean;
  isNested?: boolean;
  parentMenuOpen?: boolean;
  badge?: BadgeProps;
  showDivider?: boolean;
}
