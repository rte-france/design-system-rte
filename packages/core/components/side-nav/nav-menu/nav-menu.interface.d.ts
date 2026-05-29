import { NavItemProps } from "../nav-item/nav-item.interface";
import { SideNavContrast } from "../side-nav.interface";

export interface NavMenuProps extends NavItemProps {
  contrast?: SideNavContrast;
  items: NavItemProps[];
  open?: boolean;
  hasMenuIcon?: boolean;
}
