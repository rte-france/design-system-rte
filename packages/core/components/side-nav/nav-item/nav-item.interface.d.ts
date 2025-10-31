import { SideNavAppearance } from "../side-nav.interface";

export interface NavItemProps {
  appearance?: SideNavAppearance;
  label: string;
  icon?: string;
  showIcon?: boolean;
  showBadgeOrTag?: boolean;
  collapsed?: boolean;
  onClick?: () => void;
}
