import { BadgeProps } from "../../badge/badge.interface";
import { SideNavAppearance } from "../side-nav.interface";

export interface NavItemProps {
  id?: string;
  appearance?: SideNavAppearance;
  label: string;
  icon?: string;
  hasLeadingIcon?: boolean;
  hasBadge?: boolean;
  isCollapsed?: boolean;
  link?: string;
  onClick?: () => void;
  items?: NavItemProps[];
  active?: boolean;
  isNested?: boolean;
  parentMenuOpen?: boolean;
  badge?: BadgeProps;
  hasDivider?: boolean;
}
