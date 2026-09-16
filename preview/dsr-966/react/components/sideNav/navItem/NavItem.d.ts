import { NavItemProps as CoreNavItemProps } from '../../../../../core/components/side-nav/nav-item/nav-item.interface';
import { HTMLAttributes, ReactNode } from '../../../../../../node_modules/react';
interface NavItemProps extends CoreNavItemProps, Omit<HTMLAttributes<HTMLDivElement>, "onClick" | "id"> {
    children?: ReactNode;
    onActiveItemChange?: (id: string | undefined) => void;
}
declare const NavItem: import('../../../../../../node_modules/react').ForwardRefExoticComponent<NavItemProps & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default NavItem;
