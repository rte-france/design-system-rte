import { SideNavProps as CoreSideNavProps } from '../../../../core/components/side-nav/side-nav.interface';
import { default as React, ReactNode } from '../../../../../node_modules/react';
interface SideNavProps extends Partial<CoreSideNavProps>, Omit<React.HTMLAttributes<HTMLDivElement>, "content"> {
    children?: ReactNode;
}
declare const SideNav: React.ForwardRefExoticComponent<SideNavProps & React.RefAttributes<HTMLDivElement | HTMLElement>>;
export default SideNav;
