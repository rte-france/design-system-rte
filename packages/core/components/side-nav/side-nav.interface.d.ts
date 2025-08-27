export interface SideNavItem {
  navigationLevel?: "primary" | "secondary" | "tertiary";
  showLeadingIcon?: boolean;
  showMenuIcon?: boolean;
  openMenu?: boolean;
  showDivider?: boolean;

  // Check for relevancy of these props
  appearance?: "neutral" | "brand";
  size?: "s" | "m" | "l";
  collapsible?: boolean;
  collapsed?: boolean;
  showHeader?: boolean;
  showFooter?: boolean;
  showScrollbar?: boolean;
  autoCollapse?: boolean;
  scrollable?: boolean;
}

export interface SideNavProps {
  size?: SideNavSize;
  collapsible?: boolean;
  collapsed?: boolean;
  showHeader?: boolean;
  showFooter?: boolean;
  showScrollbar?: boolean;
  autoCollapse?: boolean;
  scrollable?: boolean;
  items: SideNavItem[];
}
