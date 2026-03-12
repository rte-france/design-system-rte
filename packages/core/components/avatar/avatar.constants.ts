import available from "./assets/available.svg";
import away from "./assets/away.svg";
import busy from "./assets/busy.svg";
import offline from "./assets/offline.svg";
import unknown from "./assets/unknown.svg";
import { AvatarSize, AvatarStatus } from "./avatar.interface";

export const IconSizeMap: Record<AvatarSize, number> = {
  24: 16,
  28: 16,
  32: 20,
  36: 20,
  40: 24,
  48: 28,
  56: 32,
  64: 40,
  72: 48,
  96: 56,
  120: 64,
};

export const StatusIndicatorSizeMap: Record<AvatarSize, number> = {
  24: 6,
  28: 10,
  32: 10,
  36: 10,
  40: 12,
  48: 16,
  56: 16,
  64: 20,
  72: 20,
  96: 28,
  120: 28,
};

export const PaddingMap: Record<AvatarSize, number> = {
  24: 1,
  28: 1,
  32: 1,
  36: 1,
  40: 1,
  48: 2,
  56: 2,
  64: 2,
  72: 2,
  96: 2,
  120: 2,
};

export const StatusIndicatorIconMap: Record<AvatarStatus, string> = {
  available: available,
  away: away,
  busy: busy,
  offline: offline,
  unknown: unknown,
};
