import DecorativeColor from "../common/common-types";

export type AvatarSize = 24 | 28 | 32 | 36 | 40 | 48 | 56 | 64 | 72 | 96 | 120;
export type AvatarColorType = "neutral" | "brand" | "decorative";
export type AvatarType = "user" | "entity";
export type AvatarLayout = "image" | "icon" | "initials";
export type AvatarColor = "neutral" | "brand" | "decorative";
export type AvatarStatus = "available" | "away" | "busy" | "offline" | "unknown";

export interface AvatarProps {
  id?: string;
  type?: AvatarType;
  size?: AvatarSize;
  status?: AvatarStatus;
  layout?: AvatarLayout;
  initials?: string;
  imgSrc?: string;
  alt?: string;
  colorType?: AvatarColorType;
  decorativeColor?: DecorativeColor;
  onClick?: () => void;
  ["aria-label"]?: string;
}
