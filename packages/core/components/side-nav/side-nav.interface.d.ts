import { NavItemProps } from "./nav-item/nav-item.interface";

export type SideNavSize = "s" | "m" | "l";

export type SideNavAppearance = "neutral" | "brand";

export interface SideNavHeaderConfig {
  icon?: string;
  title: string;
  version?: string;
  identifier?: string;
  link?: string | null;
  onClick?: () => void;
  ariaLabel?: string;
}

export interface SideNavProps extends BaseSideNavProps {
  collapsible?: boolean;
  items: NavItemProps[];
  footerItems?: NavItemProps[];
  activeItem?: string;
  headerConfig: SideNavHeaderConfig;
}

export interface BaseSideNavProps {
  appearance?: SideNavAppearance;
  size?: SideNavSize;
  collapsed?: boolean;
  showHeader?: boolean;
  showFooter?: boolean;
  showScrollbar?: boolean;
  autoCollapse?: boolean;
  scrollable?: boolean;
}
