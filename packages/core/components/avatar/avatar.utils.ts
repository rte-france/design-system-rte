import { DecorativeColor } from "../common/common-types";

import { PaddingMap, StatusIndicatorSizeMap } from "./avatar.constants";
import { AvatarColorType, AvatarSize } from "./avatar.interface";

export const computeMaskImage = (avatarSize: AvatarSize, hasStatusIndicator: boolean) => {
  if (!hasStatusIndicator) {
    return "none";
  }
  const statusSize = StatusIndicatorSizeMap[avatarSize];
  const padding = PaddingMap[avatarSize];
  return `radial-gradient(circle at ${avatarSize - statusSize / 2}px ${
    avatarSize - statusSize / 2
  }px, transparent ${statusSize / 2 + padding}px, black 0px)`;
};

export const computeIconColor = (colorType: AvatarColorType, decorativeColor?: DecorativeColor) => {
  return colorType === "decorative" && decorativeColor
    ? `var(--content-secondary)`
    : colorType === "brand"
      ? `var(--content-primary-inverse)`
      : `var(--content-tertiary)`;
};

export const computeBackgroundColor = (
  layout: string,
  colorType: AvatarColorType,
  decorativeColor?: DecorativeColor,
) => {
  return layout === "image"
    ? "var(--background-neutral-regular-default)"
    : colorType === "decorative" && decorativeColor
      ? `var(--decorative-${decorativeColor})`
      : colorType === "brand"
        ? "var(--background-brand-default)"
        : "var(--background-neutral-regular-default)";
};
