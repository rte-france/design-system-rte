export interface BreadcrumbsProps {
  items: BreadcrumbProps[];
  ariaLabel?: string;
  breadcrumbItemMaxWidth?: number;
}

export interface BreadcrumbProps {
  label: string;
  link: string;
}

export interface BreadcrumbsTruncatedItems {
  root: BreadcrumbProps;
  truncated: BreadcrumbProps[];
  remaining: BreadcrumbProps[];
}
