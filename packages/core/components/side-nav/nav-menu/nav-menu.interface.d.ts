import { NavItemProps } from "../nav-item/nav-item.interface";

export interface NavMenuProps extends NavItemProps {
  items: NavItemProps[];
  open?: boolean;
  showMenuIcon?: boolean;
}
