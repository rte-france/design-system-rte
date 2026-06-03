import { BadgeProps } from "../../badge/badge.interface";
import { SideNavAppearance } from "../side-nav.interface";

export interface NavItemBase {
  id?: string;
  appearance?: SideNavAppearance;
  label: string;
  icon?: string;
  hasLeadingIcon?: boolean;
  active?: boolean;
  badge?: BadgeProps;
  hasDivider?: boolean;
}

export interface NavLinkItem extends NavItemBase {
  kind: "link";
  route: string;
  external?: boolean;
}

export interface NavGroupItem extends NavItemBase {
  kind: "group";
  items: NavItem[];
  open?: boolean;
  hasMenuIcon?: boolean;
  route?: string;
  external?: boolean;
}

export interface NavActionItem extends NavItemBase {
  kind: "action";
  onClick: () => void;
}

export type NavItem = NavLinkItem | NavGroupItem | NavActionItem;
