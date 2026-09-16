import { HeaderIconButtonConfig, HeaderProps as CoreHeaderProps } from '../../../../core';
import { RegularIconIdKey, TogglableIconIdKey } from '../icon/Icon';
import { default as Searchbar } from '../searchbar/Searchbar';
interface HeaderProps extends CoreHeaderProps, Omit<React.HTMLAttributes<HTMLElement>, "children"> {
    iconButtons?: HeaderIconButtonConfig<RegularIconIdKey | TogglableIconIdKey>[];
    leftSectionContent?: React.ReactNode;
    rightSectionContent?: React.ReactNode;
    mobileMenuContent?: React.ReactNode;
    mobileMenuIconProps?: HeaderIconButtonConfig<RegularIconIdKey | TogglableIconIdKey>;
    searchbarProps?: React.ComponentProps<typeof Searchbar>;
}
declare const Header: import('../../../../../node_modules/react').ForwardRefExoticComponent<HeaderProps & import('../../../../../node_modules/react').RefAttributes<HTMLElement>>;
export default Header;
