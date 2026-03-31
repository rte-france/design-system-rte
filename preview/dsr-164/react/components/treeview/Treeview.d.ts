import { TreeviewItemProps } from '../../../../core/components/treeview/treeview-item.interface';
interface TreeviewProps extends Omit<React.HTMLAttributes<HTMLUListElement>, "onChange"> {
    items: TreeviewItemProps[];
    isCompact?: boolean;
    selectedId?: string;
    onChange?: (id: string) => void;
    onCheckedIdsChange?: (checkedIds: string[]) => void;
    selectedPath?: string;
    hasCheckbox?: boolean;
    id?: string;
}
declare const Treeview: ({ items, isCompact, selectedId, onChange, selectedPath, hasCheckbox, id, }: TreeviewProps) => import("react/jsx-runtime").JSX.Element;
export default Treeview;
