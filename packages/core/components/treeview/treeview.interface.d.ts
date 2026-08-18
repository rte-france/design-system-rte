import { TreeviewItemProps } from "./treeviewItem/treeviewItem.interface";

export interface TreeviewProps {
  items: TreeviewItemProps[];
  isCompact?: boolean;
  selectedId?: string;
  onChange?: (id: string) => void; // deprecated, use onSelectionChange instead
  onSelectionChange?: (id: string) => void;
  onCheckedIdsChange?: (checkedIds: string[]) => void;
  selectedPath?: string;
  hasCheckbox?: boolean;
  id?: string;
}
