import { NavItemProps } from "./nav-item/nav-item.interface";

export type SideNavAppearance = "neutral" | "brand";

export interface SideNavHeaderConfig {
  icon?: string;
  title: string;
  version?: string;
}

export interface SideNavProps extends BaseSideNavProps {
  collapsible?: boolean;
  items: NavItemProps[];
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
