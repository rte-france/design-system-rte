import { ReactNode } from '../../../../../../node_modules/react';
interface NavLabelProps {
    icon?: string;
    showIcon?: boolean;
    label: string;
    collapsed?: boolean;
    isNested?: boolean;
    styleType?: "item" | "menu";
}
declare function NavLabel({ icon, showIcon, label, collapsed, isNested, styleType }: NavLabelProps): ReactNode;
export default NavLabel;
