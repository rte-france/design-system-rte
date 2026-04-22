import type { AvatarSize } from "../avatar/avatar.interface";
import type { BreadcrumbItemProps } from "../breadcrumbs/breadcrumbs.interface";
import type { RegularIconIdKey, TogglableIconIdKey } from "../icon/icon.interface";

export type HeaderAppearance = "brand" | "neutral";

export type HeaderLeftSectionType = "default" | "placeholder";
export type HeaderMidSectionType = "navigation" | "empty";

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

export interface HeaderBreadcrumbsConfig {
  ariaLabel?: string;
  items?: BreadcrumbItemProps[];
  numberOfPages?: 1 | 2 | 3 | "3+";
}
