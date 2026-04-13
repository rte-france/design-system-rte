import { ReactNode } from '../../../../../../node_modules/react';
interface NavTooltipWrapperProps {
    label: string;
    collapsed?: boolean;
    children: ReactNode;
}
declare function NavTooltipWrapper({ label, collapsed, children }: NavTooltipWrapperProps): ReactNode;
export default NavTooltipWrapper;
