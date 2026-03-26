import { SideNavProps as CoreSideNavProps } from '../../../../core/components/side-nav/side-nav.interface';
import { ReactNode } from '../../../../../node_modules/react';
interface SideNavProps extends Partial<CoreSideNavProps>, Omit<React.HTMLAttributes<HTMLDivElement>, "content"> {
    children?: ReactNode;
    defaultCollapsed?: boolean;
    onCollapsedChange?: (collapsed: boolean) => void;
}
declare const SideNav: import('../../../../../node_modules/react').ForwardRefExoticComponent<SideNavProps & import('../../../../../node_modules/react').RefAttributes<HTMLDivElement | HTMLElement>>;
export default SideNav;
