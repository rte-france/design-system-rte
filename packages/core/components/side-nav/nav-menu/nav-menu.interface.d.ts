import { NavItemProps } from "../nav-item/nav-item.interface";

export interface NavMenuProps extends NavItemProps {
  // TODO - Beware. Maybe you need another type for nested subitems
  // that can't have icon by definition
  items: NavItemProps[];
  open?: boolean;
  showMenuIcon?: boolean;
}
