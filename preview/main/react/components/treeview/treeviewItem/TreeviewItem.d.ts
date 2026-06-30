import { TreeviewItemProps as coreTreeviewItem } from '../../../../../core/components/treeview/treeview-item.interface';
interface TreeviewItemProps extends coreTreeviewItem, Omit<React.HTMLAttributes<HTMLLIElement>, "onChange" | "onClick"> {
    onOpenChange?: (id: string, isOpen: boolean) => void;
    onChange?: (id: string) => void;
    isSelected?: boolean;
    selectedId?: string;
    onActionIconClick?: (id: string) => void;
    itemIndex?: number;
    onCheckedIdsChange?: (node: TreeviewItemProps) => void;
    checkedIds?: string[];
    isChecked?: boolean;
    onClick?: (id: string) => void;
}
declare const TreeviewItem: ({ id, treeId, itemIndex, labelText, icon, disabled, isCompact, hasCheckbox, isOpen, hasIcon, hasBadge, items, borderTypes, actionIcon, actionMenuItems, depth, onOpenChange, onChange, onActionIconClick, onCheckedIdsChange, selectedId, checkedIds, }: TreeviewItemProps) => import("react").JSX.Element;
export default TreeviewItem;
