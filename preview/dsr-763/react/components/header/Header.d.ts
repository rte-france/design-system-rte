import { HeaderIconButtonConfig, HeaderProps as CoreHeaderProps } from '../../../../core';
import { default as Searchbar } from '../searchbar/Searchbar';
interface HeaderProps extends CoreHeaderProps, Omit<React.HTMLAttributes<HTMLElement>, "children"> {
    leftSectionContent?: React.ReactNode;
    rightSectionContent?: React.ReactNode;
    mobileMenuContent?: React.ReactNode;
    mobileMenuIconProps?: HeaderIconButtonConfig;
    searchbarProps?: React.ComponentProps<typeof Searchbar>;
}
declare const Header: import('../../../../../node_modules/react').ForwardRefExoticComponent<HeaderProps & import('../../../../../node_modules/react').RefAttributes<HTMLElement>>;
export default Header;
