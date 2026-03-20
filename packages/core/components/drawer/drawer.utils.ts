import type { DrawerPosition } from "./drawer.interface";

export interface DrawerValidationInput {
  hasCustomHeader: boolean;
  hasTitle: boolean;
  hasCustomFooter: boolean;
  hasPrimaryButtonLabel: boolean;
  position: DrawerPosition | undefined;
  hasMainContent: boolean;
}

const CONFIGURATION_ISSUES = {
  MISSING_HEADER_OR_TITLE: "Drawer: You must provide either a title or a custom header.",
  MISSING_FOOTER_OR_PRIMARY: "Drawer: You must provide either a primaryButtonLabel or a custom footer.",
  RESPONSIVE_NEEDS_MAIN_CONTENT:
    "Drawer: You should provide your content as children when using responsive position to avoid empty space next to the drawer.",
  MODAL_MUST_NOT_HAVE_MAIN_CONTENT: "Drawer: You should not provide children when using modal position.",
} as const;

export function getDrawerConfigurationIssues(input: DrawerValidationInput): string | undefined {
  if (!input.hasCustomHeader && !input.hasTitle) {
    return CONFIGURATION_ISSUES.MISSING_HEADER_OR_TITLE;
  }
  if (!input.hasCustomFooter && !input.hasPrimaryButtonLabel) {
    return CONFIGURATION_ISSUES.MISSING_FOOTER_OR_PRIMARY;
  }
  if (input.position === "responsive" && !input.hasMainContent) {
    return CONFIGURATION_ISSUES.RESPONSIVE_NEEDS_MAIN_CONTENT;
  }
  if (input.position === "modal" && input.hasMainContent) {
    return CONFIGURATION_ISSUES.MODAL_MUST_NOT_HAVE_MAIN_CONTENT;
  }
}

export function shouldUseDrawerDefaultHeader(header: unknown | null, title?: string): boolean {
  return !header && !!title;
}

export function shouldUseDrawerDefaultFooter(footer: unknown | null, primaryButtonLabel?: string): boolean {
  return !footer && !!primaryButtonLabel;
}
export const computeTransform = (isAnimating: boolean, drawerLeftPosition: number, padding: number = 0) => {
  return isAnimating ? `translateX(-${drawerLeftPosition + padding}px)` : "none";
};
