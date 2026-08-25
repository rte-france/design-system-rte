import { NavItemProps } from "./nav-item/nav-item.interface";
import { SideNavHeaderConfig } from "./side-nav.interface";

export interface SideNavValidationInput {
  hasCustomHeader: boolean;
  hasHeaderConfig: boolean;
  hasCustomFooter: boolean;
  hasFooterItems: boolean;
  collapsible?: boolean;
}

const CONFIGURATION_ISSUES = {
  HEADER_CONFIG_AND_CUSTOM:
    "SideNav: Both headerConfig and a custom header were provided. The custom header takes precedence.",
  FOOTER_ITEMS_AND_CUSTOM:
    "SideNav: Both footerItems (or collapsible default footer) and a custom footer were provided. The custom footer takes precedence.",
} as const;

interface ValidationRule {
  condition: (input: SideNavValidationInput) => boolean;
  issue: string;
}

const VALIDATION_RULES: ValidationRule[] = [
  {
    condition: (input) => input.hasCustomHeader && input.hasHeaderConfig,
    issue: CONFIGURATION_ISSUES.HEADER_CONFIG_AND_CUSTOM,
  },
  {
    condition: (input) => input.hasCustomFooter && (input.hasFooterItems || !!input.collapsible),
    issue: CONFIGURATION_ISSUES.FOOTER_ITEMS_AND_CUSTOM,
  },
];

export function getSideNavConfigurationIssues(input: SideNavValidationInput): string | null {
  const issue = VALIDATION_RULES.find(({ condition }) => condition(input))?.issue;
  return issue ?? null;
}

export function shouldUseSideNavDefaultHeader(customHeader: unknown, headerConfig?: SideNavHeaderConfig): boolean {
  return !customHeader && !!headerConfig;
}

export function shouldUseSideNavDefaultFooter(
  customFooter: unknown,
  footerItems?: NavItemProps[],
  collapsible?: boolean,
): boolean {
  return !customFooter && !!(footerItems?.length || collapsible);
}

export function shouldShowSideNavHeader(customHeader: unknown, headerConfig?: SideNavHeaderConfig): boolean {
  return !!(customHeader || headerConfig);
}

export function shouldShowSideNavFooter(
  customFooter: unknown,
  footerItems?: NavItemProps[],
  collapsible?: boolean,
): boolean {
  return !!(customFooter || footerItems?.length || collapsible);
}
