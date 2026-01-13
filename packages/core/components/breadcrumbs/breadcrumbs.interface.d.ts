import { BadgeHolderProps } from "../badge/badge.interface";

export interface BreadcrumbsProps extends BadgeHolderProps {
  items: BreadcrumbItemProps[];
  ariaLabel?: string;
  breadcrumbItemMaxWidth?: number;
}

export interface BreadcrumbItemProps extends BadgeHolderProps {
  label: string;
  link: string;
}

export interface BreadcrumbsTruncatedItems {
  root: BreadcrumbItemProps;
  truncated: BreadcrumbItemProps[];
  remaining: BreadcrumbItemProps[];
}

export interface BreadcrumbProps extends BadgeHolderProps {
  item: BreadcrumbItemProps;
  isLast: boolean;
  breadcrumbItemMaxWidth?: number;
}
