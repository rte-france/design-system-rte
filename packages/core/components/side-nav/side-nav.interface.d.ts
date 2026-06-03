import { NavItem } from "./nav-item/nav-item.interface";

export type SideNavSize = "s" | "m" | "l";

export type SideNavAppearance = "neutral" | "brand";

export type SideNavContrast = "low" | "high";

export interface SideNavHeaderConfig {
  icon?: string;
  title: string;
  version?: string;
  identifier?: string;
  route?: string | null;
  external?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
  isCompact?: boolean;
}

export interface SideNavProps extends BaseSideNavProps {
  collapsible?: boolean;
  items: NavItem[];
  footerItems?: NavItem[];
  activeItem?: string;
  headerConfig: SideNavHeaderConfig;
}

export interface BaseSideNavProps {
  appearance?: SideNavAppearance;
  contrast?: SideNavContrast;
  size?: SideNavSize;
  isCollapsed?: boolean;
  showHeader?: boolean;
  showFooter?: boolean;
  showScrollbar?: boolean;
  autoCollapse?: boolean;
  scrollable?: boolean;
}
