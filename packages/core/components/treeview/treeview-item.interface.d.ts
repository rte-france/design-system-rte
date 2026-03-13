import { BadgeProps } from "../badge/badge.interface";

export type TreeviewBorderType = "vertical" | "branch" | "corner" | "horizontal" | "spacer";

export type TreeviewNodePath = number[];

export interface TreeviewItemProps {
  id?: string;
  labelText: string;
  icon?: string;
  disabled?: boolean;
  isCompact?: boolean;
  hasCheckbox?: boolean;
  isChecked?: boolean;
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
  id: string;
  open: boolean;
}

export interface TreeviewSelectionChangeEvent {
  id?: string;
  selected: boolean;
}
