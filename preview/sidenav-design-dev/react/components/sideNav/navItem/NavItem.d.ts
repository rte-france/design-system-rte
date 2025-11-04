import { NavItemProps as CoreNavItemProps } from '../../../../../core/components/side-nav/nav-item/nav-item.interface';
import { HTMLAttributes, ReactNode } from '../../../../../../node_modules/react';
interface NavItemProps extends CoreNavItemProps, Omit<HTMLAttributes<HTMLLIElement>, "onClick"> {
    children?: ReactNode;
    parentMenuOpen?: boolean;
}
declare const NavItem: import('../../../../../../node_modules/react').ForwardRefExoticComponent<NavItemProps & import('../../../../../../node_modules/react').RefAttributes<HTMLElement | HTMLLIElement>>;
export default NavItem;
