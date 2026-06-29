import { ReactNode } from '../../../../node_modules/react';
interface NavTooltipWrapperProps {
    label: string;
    isCollapsed?: boolean;
    children: ReactNode;
}
declare function NavTooltipWrapper({ label, isCollapsed, children }: NavTooltipWrapperProps): ReactNode;
export default NavTooltipWrapper;
