import { DecorativeColor } from "../common/common-types";

import { AvatarColorType, AvatarSize } from "./avatar.interface";
import { PaddingMap, StatusIndicatorSizeMap } from "./avatar.size.constants";

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

export const computeIconColor = (colorType: AvatarColorType) => {
  switch (colorType) {
    case "decorative":
      return "var(--content-secondary)";
    case "brand":
      return "var(--content-primary-inverse)";
    default:
      return "var(--content-tertiary)";
  }
};

export const computeBackgroundColor = (
  layout: string,
  colorType: AvatarColorType,
  decorativeColor?: DecorativeColor,
) => {
  return layout === "image"
    ? "var(--background-neutral-regular-default)"
    : getBackgroundColorForNonImageLayout(colorType, decorativeColor);
};

const getBackgroundColorForNonImageLayout = (colorType: AvatarColorType, decorativeColor?: DecorativeColor) => {
  switch (colorType) {
    case "decorative":
      return decorativeColor ? `var(--decorative-${decorativeColor})` : "var(--background-neutral-regular-default)";
    case "brand":
      return "var(--background-brand-default)";
    default:
      return "var(--background-neutral-regular-default)";
  }
};
