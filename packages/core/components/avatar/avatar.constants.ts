import available from "./assets/available.svg";
import away from "./assets/away.svg";
import busy from "./assets/busy.svg";
import offline from "./assets/offline.svg";
import unknown from "./assets/unknown.svg";
import { AvatarStatus } from "./avatar.interface";
export { IconSizeMap, PaddingMap, StatusIndicatorSizeMap } from "./avatar.size.constants";

export const StatusIndicatorIconMap: Record<AvatarStatus, string> = {
  available: available,
  away: away,
  busy: busy,
  offline: offline,
  unknown: unknown,
};
