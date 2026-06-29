import { BadgeProps } from '../../../../../core/components/badge/badge.interface';
import { ReactNode } from '../../../../node_modules/react';
interface NavLabelProps {
    icon?: string;
    hasLeadingIcon?: boolean;
    label: string;
    isCollapsed?: boolean;
    isNested?: boolean;
    styleType?: "item" | "menu";
    badge?: BadgeProps;
}
declare function NavLabel({ icon, hasLeadingIcon, label, isCollapsed, isNested, styleType, badge, }: NavLabelProps): ReactNode;
export default NavLabel;
