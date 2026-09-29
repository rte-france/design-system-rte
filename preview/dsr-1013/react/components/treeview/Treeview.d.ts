import { TreeviewProps as CoreTreeViewProps } from '../../../../core';
interface TreeviewProps extends CoreTreeViewProps, Omit<React.HTMLAttributes<HTMLUListElement>, "onChange"> {
}
declare const Treeview: ({ items, isCompact, selectedId, onChange, onSelectionChange, selectedPath, hasCheckbox, id, }: TreeviewProps) => import("react").JSX.Element;
export default Treeview;
