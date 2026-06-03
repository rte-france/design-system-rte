import { ReactNode } from '../../../../../../node_modules/react';
interface NavLabelProps {
    icon?: string;
    hasLeadingIcon?: boolean;
    label: string;
    isCollapsed?: boolean;
    isNested?: boolean;
    styleType?: "item" | "menu";
}
declare function NavLabel({ icon, hasLeadingIcon, label, isCollapsed, isNested, styleType, }: NavLabelProps): ReactNode;
export default NavLabel;
