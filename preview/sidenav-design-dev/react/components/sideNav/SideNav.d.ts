import { SideNavProps as CoreSideNavProps } from '../../../../core/components/side-nav/side-nav.interface';
import { default as React } from '../../../../../node_modules/react';
interface SideNavProps extends CoreSideNavProps, Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
}
declare const SideNav: React.ForwardRefExoticComponent<SideNavProps & React.RefAttributes<HTMLDivElement | HTMLElement>>;
export default SideNav;
