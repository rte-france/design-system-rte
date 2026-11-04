import { shouldDisplayBadge } from "../badge/badge.utils";
import { getDisplayCount } from "../badge/badge.utils";

type ItemOption = {
  id: string;
  ariaLabel?: string;
  labelText?: string;
  icon?: string;
  showBadge?: boolean;
  badgeCount?: number;
  badgeContent?: "number" | "icon" | "empty";
  badgeIcon?: string;
};

const ICON_ONLY_NUMBER_BADGE_NOTIFICATIONS_LABEL = "Notifications";
const NON_NUMBER_BADGE_ARIA_LABEL = "Notification";

function isBadgeDisplayed(segment: ItemOption): boolean {
  const { showBadge, badgeContent, badgeCount, badgeIcon } = segment;
  return shouldDisplayBadge({ showBadge: !!showBadge, badgeContent, badgeCount, badgeIcon });
}

function getIconOnlySegmentAriaLabelWithBadge(segment: ItemOption): string | undefined {
  const { icon, badgeContent = "empty", badgeCount, ariaLabel } = segment;
  if (!icon || !isBadgeDisplayed(segment)) {
    return;
  }

  if (badgeContent === "number") {
    const countLabel = getDisplayCount(badgeCount);
    if (!countLabel) {
      return;
    }

    return `${ariaLabel}. ${ICON_ONLY_NUMBER_BADGE_NOTIFICATIONS_LABEL}, ${countLabel}`;
  }

  if (badgeContent === "icon" || badgeContent === "empty") {
    return `${ariaLabel}. ${NON_NUMBER_BADGE_ARIA_LABEL}`;
  }
}

function getLabelWithBadgeAriaLabel(segment: ItemOption): string | undefined {
  const { labelText, ariaLabel, badgeContent = "empty", badgeCount } = segment;
  if ((!labelText && !ariaLabel) || !isBadgeDisplayed(segment)) {
    return;
  }

  if (badgeContent === "number") {
    const countLabel = getDisplayCount(badgeCount);

    const accessibleLabel = ariaLabel || labelText;

    return countLabel ? `${accessibleLabel}, ${countLabel}` : accessibleLabel;
  }

  if (badgeContent === "icon" || badgeContent === "empty") {
    return `${ariaLabel || labelText}. ${NON_NUMBER_BADGE_ARIA_LABEL}`;
  }
}

export function getSegmentAriaLabel(item: ItemOption): string {
  const { ariaLabel, labelText, icon } = item;

  if (ariaLabel && labelText) {
    return ariaLabel;
  }

  if (!labelText && icon) {
    const iconOnlyWithBadgeLabel = getIconOnlySegmentAriaLabelWithBadge(item);
    if (iconOnlyWithBadgeLabel) {
      return iconOnlyWithBadgeLabel;
    }

    return ariaLabel || icon;
  }

  if (ariaLabel) {
    return getLabelWithBadgeAriaLabel(item) || ariaLabel;
  }

  if (labelText) {
    return getLabelWithBadgeAriaLabel(item) || labelText;
  }

  return icon || "";
}
