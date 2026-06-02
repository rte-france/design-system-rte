import type { AvatarSize } from "../avatar/avatar.interface";
import type { BadgeProps } from "../badge/badge.interface";
import type { BreadcrumbItemProps } from "../breadcrumbs/breadcrumbs.interface";
import { IconButtonProps } from "../button";

export type HeaderAppearance = "brand" | "neutral";

export interface HeaderProps {
  appearance?: HeaderAppearance;
  isCompact?: boolean;
  isSearchActive?: boolean;
  hasLeftSection?: boolean;
  hasRightSection?: boolean;
  subHeaderConfig?: HeaderSubHeaderConfig;
  hasSubHeader?: boolean;
  isSticky?: boolean;
  showAtScrollUp?: boolean;
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
}
