import type { AvatarProps, AvatarSize } from "../avatar/avatar.interface";
import type { BadgeProps } from "../badge/badge.interface";
import type { BreadcrumbItemProps } from "../breadcrumbs/breadcrumbs.interface";
import { IconButtonProps } from "../button";
import type { DropdownItemProps } from "../dropdown/dropdown.interface";
import type { SearchBarProps } from "../searchbar/searchbar.interface";
export type HeaderAppearance = "brand" | "neutral";

export interface HeaderProps {
  logoSrc?: string;
  applicationName?: string;
  compactSpacing?: boolean;
  hasLeftSection?: boolean;
  appearance?: HeaderAppearance;
  hasRightSection?: boolean;
  hasDivider?: boolean;
  subHeaderConfig?: HeaderSubHeaderConfig;
  hasSearchbar?: boolean;
  searchbarProps?: SearchBarProps;
  actionButton?: HeaderActionButtonConfig;
  iconButtons?: HeaderIconButtonConfig[];
  navigationAriaLabel?: string;
  navigationItems?: HeaderNavigationItem[];
  hasAvatar?: boolean;
  avatarProps?: AvatarProps;
  isSticky?: boolean;
  showAtScrollUp?: boolean;
  homeLink?: string;
  mobileSearchButtonAriaLabel?: string;
  onActionButtonClick?: () => void;
  onIconButtonClick?: (iconName: string) => void;
  onSearchActiveChange?: (isActive: boolean) => void;
  onMobileMenuClick?: () => void;
  isMobileMenuOpen?: boolean;
  mobileMenuItems?: DropdownItemProps[];
  onMobileMenuClose?: () => void;
  mobileMenuIconProps?: HeaderIconButtonConfig;
}
export interface HeaderSubHeaderConfig {
  ariaLabel?: string;
  items?: BreadcrumbItemProps[];
}

export interface HeaderLeftSectionConfig {
  hasLogo?: boolean;
  applicationName?: string;
  logoSrc?: string;
  homeLink?: string;
  homeAriaLabel?: string;
}

export interface HeaderRightSectionConfig {
  hasSearchbar?: boolean;
  hasActionButton?: boolean;
  hasIconButtons?: boolean;
  iconButtons?: IconButtonProps[];
  hasAvatar?: boolean;
}

export interface HeaderNavigationItem {
  id?: string;
  label: string;
  href: string;
  ariaLabel?: string;
  disabled?: boolean;
  active?: boolean;
}

export interface HeaderActionButtonConfig {
  label: string;
  iconName?: string;
  disabled?: boolean;
}

export interface HeaderIconButtonConfig<TIconName = string> {
  id?: string;
  iconName: TIconName;
  ariaLabel: string;
  disabled?: boolean;
  badge?: BadgeProps;
}

export interface HeaderAvatarConfig {
  imgSrc?: string;
  alt?: string;
  initials?: string;
  size?: AvatarSize;
  isInteractive?: boolean;
  colorType?: "color" | "surface";
}
