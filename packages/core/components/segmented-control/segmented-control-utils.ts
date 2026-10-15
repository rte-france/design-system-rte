import { getDisplayCount, shouldDisplayBadge } from "../badge/badge.utils";

import { FocusAdjacentOutsideSegmentOptions, SegmentOptions, SegmentProps } from "./segmented-control.interface";

function isSegmentInRadiogroup(
  element: HTMLElement | undefined,
  segmentClass: string,
  radiogroupElement: HTMLElement,
): boolean {
  return !!element && element.classList.contains(segmentClass) && radiogroupElement.contains(element);
}

const ICON_ONLY_NUMBER_BADGE_NOTIFICATIONS_LABEL = "Notifications";
const NON_NUMBER_BADGE_ARIA_LABEL = "Notification";

function isBadgeDisplayed(segment: SegmentOptions): boolean {
  const { showBadge, badgeContent, badgeCount, badgeIcon } = segment;
  return shouldDisplayBadge({ showBadge: !!showBadge, badgeContent, badgeCount, badgeIcon });
}

function getIconOnlySegmentAriaLabelWithBadge(segment: SegmentOptions): string | undefined {
  const { icon, badgeContent, badgeCount } = segment;
  if (!icon || !isBadgeDisplayed(segment)) {
    return;
  }

  if (badgeContent === "number") {
    const countLabel = getDisplayCount(badgeCount);
    if (!countLabel) {
      return;
    }

    return `${icon}. ${ICON_ONLY_NUMBER_BADGE_NOTIFICATIONS_LABEL}, ${countLabel}`;
  }

  if (badgeContent === "icon" || badgeContent === "empty") {
    return `${icon}. ${NON_NUMBER_BADGE_ARIA_LABEL}`;
  }
}

function getLabelWithBadgeAriaLabel(segment: SegmentOptions): string | undefined {
  const { labelText, badgeContent, badgeCount } = segment;
  if (!labelText || !isBadgeDisplayed(segment)) {
    return;
  }

  if (badgeContent === "number") {
    const countLabel = getDisplayCount(badgeCount);
    return countLabel ? `${labelText}, ${countLabel}` : labelText;
  }

  if (badgeContent === "icon" || badgeContent === "empty") {
    return `${labelText}. ${NON_NUMBER_BADGE_ARIA_LABEL}`;
  }
}

export function getSegmentAriaLabel(segment: SegmentOptions): string {
  const { ariaLabel, labelText, icon } = segment;
  if (ariaLabel) {
    return ariaLabel;
  }

  if (!labelText && icon) {
    const iconOnlyWithBadgeLabel = getIconOnlySegmentAriaLabelWithBadge(segment);
    if (iconOnlyWithBadgeLabel) {
      return iconOnlyWithBadgeLabel;
    }

    return icon;
  }

  if (labelText) {
    return getLabelWithBadgeAriaLabel(segment) || labelText;
  }

  return icon || "";
}

export function getSegmentPosition(optionIndex: number, numberOfOptions: number): SegmentProps["position"] {
  if (numberOfOptions === 2) {
    return optionIndex === 0 ? "left" : "right";
  }
  if (optionIndex === 0) {
    return "left";
  }
  if (optionIndex === numberOfOptions - 1) {
    return "right";
  }
  return "middle";
}

export function focusNextNotSegmentElement({
  focusedIndex,
  focusableElements,
  segmentClass,
  radiogroupElement,
}: FocusAdjacentOutsideSegmentOptions) {
  if (!focusableElements.length) {
    return;
  }

  let nextIndex = focusedIndex + 1;
  if (nextIndex >= focusableElements.length) {
    nextIndex = 0;
  }

  const startIndex = nextIndex;

  do {
    const candidate = focusableElements[nextIndex];
    if (!isSegmentInRadiogroup(candidate, segmentClass, radiogroupElement)) {
      candidate.focus();
      return;
    }

    nextIndex = nextIndex + 1 < focusableElements.length ? nextIndex + 1 : 0;
  } while (nextIndex !== startIndex);
}

export function focusPreviousNotSegmentElement({
  focusedIndex,
  focusableElements,
  segmentClass,
  radiogroupElement,
}: FocusAdjacentOutsideSegmentOptions) {
  if (!focusableElements.length) {
    return;
  }

  let previousIndex = focusedIndex - 1;
  if (previousIndex < 0) {
    previousIndex = focusableElements.length - 1;
  }

  const startIndex = previousIndex;

  do {
    const candidate = focusableElements[previousIndex];
    if (!isSegmentInRadiogroup(candidate, segmentClass, radiogroupElement)) {
      candidate.focus();
      return;
    }

    previousIndex = previousIndex > 0 ? previousIndex - 1 : focusableElements.length - 1;
  } while (previousIndex !== startIndex);
}

export function focusNextSegmentElement(currentSegmentIndex: number, allSegmentElements: HTMLElement[]): void {
  const nextIndex = currentSegmentIndex < allSegmentElements.length - 1 ? currentSegmentIndex + 1 : 0;
  allSegmentElements[nextIndex].focus();
}

export function focusPreviousSegmentElement(currentSegmentIndex: number, allSegmentElements: HTMLElement[]): void {
  const previousIndex = currentSegmentIndex > 0 ? currentSegmentIndex - 1 : allSegmentElements.length - 1;

  allSegmentElements[previousIndex].focus();
}

export function isValidSegmentedControlOptions(options: SegmentOptions[]): boolean {
  if (options.length <= 1 || options.length > 3) {
    console.warn("SegmentedControl: 'options' should have 2 or 3 items.");
    return false;
  }

  const iconCount = options.filter((option) => option.icon).length;
  if (iconCount > 0 && iconCount < options.length) {
    console.warn("SegmentedControl: All options must either have an icon or none.");
    return false;
  }

  const optionMissingLabel = options.find((option) => !option.labelText && !option.icon);
  if (optionMissingLabel) {
    console.warn(`SegmentedControl: segment "${optionMissingLabel.id}" must define labelText or icon.`);
    return false;
  }

  return true;
}
