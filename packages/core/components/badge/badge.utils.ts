import { BadgeAppearance, BadgeSize } from "./badge.interface";

const COUNT_THRESHOLD = 100;
const COUNT_THRESHOLD_LABEL = "99+";

interface ShowIconProps {
  size: BadgeSize;
  appearance: BadgeAppearance;
  iconSize?: number;
}

interface ShowTextProps {
  size: BadgeSize;
  appearance: BadgeAppearance;
  count?: number;
}

type ShowBadgeProps = ShowIconProps & ShowTextProps;

const badgeIconSize: Record<BadgeSize, number | null> = {
  xs: null,
  s: null,
  m: 12,
  l: 20,
};

export function getBadgeIconSize(size: BadgeSize): number | undefined {
  return badgeIconSize[size] ?? undefined;
}

export function getShowIcon({ size, appearance, iconSize }: ShowIconProps): boolean {
  return !["xs", "s"].includes(size) && appearance === "icon" && !!iconSize;
}

export function getShowText({ size, appearance, count }: ShowTextProps): boolean {
  return !["xs", "s"].includes(size) && appearance === "text" && typeof count === "number" && count > 0;
}

export function getShowBadge({ size, appearance, count, iconSize }: ShowBadgeProps): boolean {
  switch (appearance) {
    case "icon":
      return getShowIcon({ size, appearance, iconSize });
    case "text":
      return getShowText({ size, appearance, count });
    default:
      return true;
  }
}

export function getDisplayCount(count?: number): string {
  if (typeof count !== "number") {
    return "";
  }

  return count < COUNT_THRESHOLD ? count.toString() : COUNT_THRESHOLD_LABEL;
}
