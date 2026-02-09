export type TabAlignment = "start" | "center";

export interface TabProps {
  options: TabItemProps[];
  direction?: import("../common/common-types").Direction;
  alignment?: TabAlignment;
  selectedTabId?: string;
  compactSpacing?: boolean;
  disabled?: boolean;
  overflowType?: "dropdown" | "scrollable";
  inverted?: boolean;
}

export interface TabItemProps {
  id: string;
  panelId: string;
  label?: string;
  isSelected?: boolean;
  icon?: string;
  badgeCount?: number;
  badgeContent?: import("../badge/badge.interface").BadgeContent;
  badgeIcon?: string;
  badgeType?: import("../badge/badge.interface").BadgeType;
  showBadge?: boolean;
  compactSpacing?: boolean;
  direction?: import("../common/common-types").Direction;
  disabled?: boolean;
  inverted?: boolean;
}
