import { effectiveRouterLink, RouterLinkConfig, RouterLinkValue } from "./router-link-inputs";

export interface NavigationElement {
  routerLink?: RouterLinkValue;
  routerLinkConfig?: RouterLinkConfig;
  href?: string;
  externalLink?: boolean;
  /** @deprecated Use `routerLink` instead. */
  link?: RouterLinkValue;
}

export function resolveNavigationHref(element: NavigationElement): string | undefined {
  return element.href?.trim();
}

export function resolveNavigationRouterLink(element: NavigationElement): RouterLinkValue | undefined {
  if (!resolveNavigationHref(element)) {
    return effectiveRouterLink(element.routerLink, element.link);
  }
}
