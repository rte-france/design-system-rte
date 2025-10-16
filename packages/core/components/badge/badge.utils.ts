import { BadgeContent, BadgeSize } from "./badge.interface";

const COUNT_THRESHOLD = 100;
const COUNT_THRESHOLD_LABEL = "99+";

interface ShowIconProps {
  size: BadgeSize;
  content: BadgeContent;
  iconSize?: number;
}

interface ShowTextProps {
  size: BadgeSize;
  content: BadgeContent;
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

export function getShowIcon({ size, content, iconSize }: ShowIconProps): boolean {
  return !["xs", "s"].includes(size) && content === "icon" && !!iconSize;
}

export function getShowText({ size, content, count }: ShowTextProps): boolean {
  return !["xs", "s"].includes(size) && content === "number" && typeof count === "number" && count > 0;
}

export function getShowBadge({ size, content, count, iconSize }: ShowBadgeProps): boolean {
  console.log(size, content, count);
  switch (content) {
    case "icon":
      return getShowIcon({ size, content, iconSize });
    case "number":
      return getShowText({ size, content, count });
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
