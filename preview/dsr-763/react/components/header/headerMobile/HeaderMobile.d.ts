import { DropdownItemProps, HeaderIconButtonConfig } from '../../../../../core';
interface HeaderMobileProps {
    homeLink?: string;
    logoSrc?: string;
    applicationName?: string;
    compactSpacing?: boolean;
    hasLeftSection?: boolean;
    appearance?: "brand" | "neutral";
    hasMiddleSection?: boolean;
    hasRightSection?: boolean;
    leftSectionContent?: React.ReactNode;
    middleSectionContent?: React.ReactNode;
    rightSectionContent?: React.ReactNode;
    mobileSearchButtonAriaLabel?: string;
    onSearchActiveChange?: (isActive: boolean) => void;
    mobileMenuContent?: React.ReactNode;
    onMobileMenuClick?: () => void;
    isMobileMenuOpen?: boolean;
    mobileMenuItems?: DropdownItemProps[];
    onMobileMenuClose?: () => void;
    mobileMenuIconProps?: HeaderIconButtonConfig;
    hasSearchbar?: boolean;
}
declare const HeaderMobile: ({ homeLink, hasLeftSection, leftSectionContent, logoSrc, applicationName, compactSpacing, appearance, mobileSearchButtonAriaLabel, onSearchActiveChange, mobileMenuContent, onMobileMenuClick, isMobileMenuOpen, mobileMenuItems, onMobileMenuClose, mobileMenuIconProps, hasSearchbar, }: HeaderMobileProps) => import("react/jsx-runtime").JSX.Element;
export default HeaderMobile;
