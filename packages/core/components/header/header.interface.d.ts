import type { AvatarSize } from "../avatar/avatar.interface";
import type { BreadcrumbItemProps } from "../breadcrumbs/breadcrumbs.interface";
import type { RegularIconIdKey, TogglableIconIdKey } from "../icon/icon.interface";

export type HeaderAppearance = "brand" | "neutral";

export type HeaderLeftSectionType = "default" | "placeholder";
export type HeaderMidSectionType = "navigation" | "empty";

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

export interface HeaderLeftSectionProps {
  type?: HeaderLeftSectionType;
  hasLogo?: boolean;
  applicationName?: string;
  logoSrc?: string;
  homeLink?: string;
  homeAriaLabel?: string;
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
  iconName?: RegularIconIdKey | TogglableIconIdKey;
  disabled?: boolean;
}

export interface HeaderIconButtonBadgeConfig {
  count?: number;
  type?: "indicator" | "brand" | "neutral";
  size?: "m" | "l";
}

export interface HeaderIconButtonConfig {
  id?: string;
  iconName: RegularIconIdKey | TogglableIconIdKey;
  ariaLabel: string;
  disabled?: boolean;
  badge?: HeaderIconButtonBadgeConfig;
}

export interface HeaderAvatarConfig {
  imgSrc?: string;
  alt?: string;
  initials?: string;
  size?: AvatarSize;
  isInteractive?: boolean;
}

export interface HeaderSearchbarConfig {
  id?: string;
  label?: string;
  disabled?: boolean;
  showResetButton?: boolean;
  value?: string;
  assistiveText?: string;
}
