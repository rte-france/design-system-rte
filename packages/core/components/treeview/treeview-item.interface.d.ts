import { BadgeProps } from "../badge/badge.interface";

export type TreeviewBorderType = "vertical" | "branch" | "corner" | "horizontal" | "spacer";

export interface TreeviewItemProps {
  id?: string;
  labelText: string;
  icon?: string;
  link?: string;
  disabled?: boolean;
  isCompact?: boolean;
  hasCheckbox?: boolean;
  isChecked?: boolean;
  isSelected?: boolean;
  isOpen?: boolean;
  hasIcon?: boolean;
  hasBadge?: boolean;
  newLine?: boolean;
  items?: TreeviewItemProps[];
  badge?: BadgeProps;
  borderType?: TreeviewBorderType;
  dottedLine?: boolean;
}

export interface TreeviewOpenChangeEvent {
  id: string | undefined;
  open: boolean;
}

export interface TreeviewSelectionChangeEvent {
  id: string | undefined;
  selected: boolean;
}
