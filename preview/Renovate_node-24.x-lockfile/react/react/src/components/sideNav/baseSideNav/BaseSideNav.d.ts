import { BaseSideNavProps as CoreSideNavProps } from '../../../../../core/components/side-nav/side-nav.interface';
import { ReactNode } from '../../../../../../node_modules/react';
interface BaseSideNavProps extends Partial<Omit<CoreSideNavProps, "items">>, Omit<React.HTMLAttributes<HTMLDivElement>, "content"> {
    header?: ReactNode;
    body?: ReactNode;
    footer?: ReactNode;
    children?: ReactNode;
}
declare const BaseSideNav: import('../../../../../../node_modules/react').ForwardRefExoticComponent<BaseSideNavProps & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement | HTMLElement>>;
export default BaseSideNav;
