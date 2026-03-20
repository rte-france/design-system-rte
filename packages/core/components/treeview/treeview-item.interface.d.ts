export type TreeviewBorderType = "vertical" | "branch" | "corner" | "horizontal" | "spacer";

export type TreeviewNodePath = number[];

export interface TreeviewItemProps {
  id?: string;
  labelText: string;
  icon?: string;
  disabled?: boolean;
  isCompact?: boolean;
  hasCheckbox?: boolean;
  isOpen?: boolean;
  hasIcon?: boolean;
  hasBadge?: boolean;
  items?: TreeviewItemProps[];
  borderType?: TreeviewBorderType;
  actionIcon?: string;
  actionMenuItems?: TreeviewActionMenuItem[];
}

export interface TreeviewActionMenuItem {
  id?: string;
  label: string;
  leftIcon?: string;
  disabled?: boolean;
  hasSeparator?: boolean;
  children?: TreeviewActionMenuItem[];
}

export interface TreeviewOpenChangeEvent {
  id: string;
  open: boolean;
}

export interface TreeviewSelectionChangeEvent {
  id?: string;
  selected: boolean;
}
