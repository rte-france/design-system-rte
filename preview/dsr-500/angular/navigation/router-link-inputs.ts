import { Params, QueryParamsHandling, UrlTree } from "@angular/router";

export type RouterLinkValue =
  string | UrlTree | Array<string | number | boolean | null | undefined | Record<string, unknown>>;

export interface RouterLinkConfig {
  queryParams?: Params;
  fragment?: string;
  queryParamsHandling?: QueryParamsHandling;
  preserveFragment?: boolean;
  replaceUrl?: boolean;
  state?: { [k: string]: unknown };
}

export function effectiveRouterLink(
  routerLink?: RouterLinkValue,
  deprecatedLink?: RouterLinkValue,
): RouterLinkValue | undefined {
  return routerLink ?? deprecatedLink;
}

export function hasNavigation(routerLink?: RouterLinkValue, deprecatedLink?: RouterLinkValue, href?: string): boolean {
  return effectiveRouterLink(routerLink, deprecatedLink) !== undefined || href !== undefined;
}
