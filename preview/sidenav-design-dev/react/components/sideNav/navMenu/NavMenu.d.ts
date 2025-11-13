import { NavMenuProps as CoreNavMenuProps } from '../../../../../core/components/side-nav/nav-menu/nav-menu.interface';
import { HTMLAttributes, ReactNode } from '../../../../../../node_modules/react';
interface NavMenuProps extends CoreNavMenuProps, Omit<HTMLAttributes<HTMLLIElement>, "onClick"> {
    children?: ReactNode;
    isNested?: boolean;
    parentMenuOpen?: boolean;
}
declare const NavMenu: import('../../../../../../node_modules/react').ForwardRefExoticComponent<NavMenuProps & import('../../../../../../node_modules/react').RefAttributes<HTMLLIElement>>;
export default NavMenu;
