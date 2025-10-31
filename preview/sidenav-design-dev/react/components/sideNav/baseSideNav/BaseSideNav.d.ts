import { SideNavProps as CoreSideNavProps } from '../../../../../core/components/side-nav/side-nav.interface';
import { default as React, ReactNode } from '../../../../../../node_modules/react';
interface BaseSideNavProps extends Partial<Omit<CoreSideNavProps, "items">>, Omit<React.HTMLAttributes<HTMLDivElement>, "content"> {
    header?: ReactNode;
    body?: ReactNode;
    footer?: ReactNode;
    children?: ReactNode;
}
declare const BaseSideNav: React.ForwardRefExoticComponent<BaseSideNavProps & React.RefAttributes<HTMLDivElement | HTMLElement>>;
export default BaseSideNav;
