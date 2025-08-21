export interface BreadcrumbsProps {
  items: BreadcrumbProps[];
}

export interface BreadcrumbProps {
  label: string;
  link: string;
  role?: string;
}

export interface BreadcrumbsTruncatedItems {
  root: BreadcrumbProps;
  truncated: BreadcrumbProps[];
  remaining: BreadcrumbProps[];
}
