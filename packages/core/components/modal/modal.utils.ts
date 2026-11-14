import { logError, logWarn } from "../../utils/log-handlers";

import type { ModalPrimaryActionType } from "./modal.interface";

export interface ModalFooterValidationInput {
  hasLegacyPrimaryTemplate: boolean;
  hasPrimaryActionLabel: boolean;
  primaryActionType: ModalPrimaryActionType;
  splitButtonOptionsCount: number;
  hasSplitButtonAriaLabelRight: boolean;
}

const CONFIGURATION_ISSUES = {
  MISSING_PRIMARY:
    "Modal: You must provide either rteModalPrimaryActionLabel or a #primaryButton template before opening.",
  SPLIT_MISSING_ARIA:
    "Modal: rteModalPrimarySplitButtonAriaLabelRight is required when rteModalPrimaryActionType is split-button.",
  SPLIT_MISSING_OPTIONS:
    "Modal: rteModalPrimarySplitButtonOptions must contain at least one item when rteModalPrimaryActionType is split-button.",
} as const;

const LEGACY_AND_CONFIGURED_WARN =
  "Modal: Both configured footer inputs and legacy #primaryButton / #secondaryButton templates are present. The configured footer inputs are used.";

interface ValidationRule {
  condition: (input: ModalFooterValidationInput) => boolean;
  issue: string;
}

const VALIDATION_RULES: ValidationRule[] = [
  {
    condition: (input) => !input.hasLegacyPrimaryTemplate && !input.hasPrimaryActionLabel,
    issue: CONFIGURATION_ISSUES.MISSING_PRIMARY,
  },
  {
    condition: (input) =>
      input.hasPrimaryActionLabel && input.primaryActionType === "split-button" && !input.hasSplitButtonAriaLabelRight,
    issue: CONFIGURATION_ISSUES.SPLIT_MISSING_ARIA,
  },
  {
    condition: (input) =>
      input.hasPrimaryActionLabel && input.primaryActionType === "split-button" && input.splitButtonOptionsCount < 1,
    issue: CONFIGURATION_ISSUES.SPLIT_MISSING_OPTIONS,
  },
];

function normalizeModalConfigurationIssue(issue?: string): string | undefined {
  return issue?.startsWith("Modal: ") ? issue?.slice("Modal: ".length) : issue;
}

export function getModalConfigurationIssues(input: ModalFooterValidationInput): string | undefined {
  const issue = VALIDATION_RULES.find(({ condition }) => condition(input))?.issue;
  return normalizeModalConfigurationIssue(issue);
}

export function validateModalBeforeOpen(input: ModalFooterValidationInput): boolean {
  const issue = getModalConfigurationIssues(input);
  if (!issue) {
    return true;
  }
  logError("Modal", issue);
  return false;
}

export function shouldUseModalConfiguredFooter(primaryActionLabel?: string): boolean {
  return !!primaryActionLabel?.trim();
}

export function warnModalLegacyAndConfiguredFooter(
  legacyPrimaryTemplate: unknown | null | undefined,
  primaryActionLabel?: string,
): void {
  if (legacyPrimaryTemplate && primaryActionLabel?.trim()) {
    logWarn("Modal", LEGACY_AND_CONFIGURED_WARN);
  }
}

export function hasConfiguredSplitPrimary(
  primaryActionType: ModalPrimaryActionType,
  primaryActionLabel?: string,
): boolean {
  return !!primaryActionLabel?.trim() && primaryActionType === "split-button";
}
