import { SideNavAppearance } from "../side-nav.interface";

export interface NavItemProps {
  id?: string;
  appearance?: SideNavAppearance;
  label: string;
  icon?: string;
  showIcon?: boolean;
  showBadgeOrTag?: boolean;
  collapsed?: boolean;
  link?: string;
  onClick?: () => void;
  items?: NavItemProps[];
  active?: boolean;
}
