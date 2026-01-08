import { BreadcrumbItemProps, BreadcrumbsTruncatedItems } from "./breadcrumbs.interface";

const BREADCRUMBS_LIMIT = 3;
const BREADCRUMBS_REMAINING = 2;

export function getBreadcrumbsTruncatedItems(
  items: BreadcrumbItemProps[],
  limit = BREADCRUMBS_LIMIT,
  rest = BREADCRUMBS_REMAINING,
): BreadcrumbsTruncatedItems {
  if (shouldTruncateBreadcrumbs(items, limit)) {
    return {
      root: items[0],
      truncated: items.slice(1, items.length - rest),
      remaining: items.slice(items.length - rest),
    };
  } else {
    throw new Error(`Breadcrumbs: 'items' should have at least ${limit} items.`);
  }
}

export function shouldTruncateBreadcrumbs(items: BreadcrumbItemProps[], limit = BREADCRUMBS_LIMIT): boolean {
  return items.length > limit;
}
