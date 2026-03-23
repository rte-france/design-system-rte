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
  borderTypes?: TreeviewBorderType[];
  actionIcon?: string;
  actionMenuItems?: TreeviewActionMenuItem[];
  depth?: number;
  treeId?: string;
  onActionIconClick?: (itemId: string) => void;
}
export interface TreeviewActionMenuItem {
  id?: string;
  label: string;
  leftIcon?: string;
  disabled?: boolean;
  hasSeparator?: boolean;
  children?: TreeviewActionMenuItem[];
  onClick?: () => void;
}

export interface TreeviewOpenChangeEvent {
  id: string;
  open: boolean;
}

export interface TreeviewSelectionChangeEvent {
  id?: string;
  selected: boolean;
}
