import { BadgeSize } from "../../badge/badge.interface";

import { ButtonSize } from "./common-button";

export const ButtonIconSize: Record<ButtonSize, number> = {
  s: 16,
  m: 20,
  l: 24,
};

export const ButtonBadgeSizeMapping: Record<ButtonSize, BadgeSize> = {
  s: "m",
  m: "m",
  l: "l",
};
