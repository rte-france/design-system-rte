export type TagType = "status" | "decorative";
export type Status = "success" | "information" | "warning" | "alert";
export type Color =
  | "brand"
  | "neutral"
  | "azur"
  | "jade"
  | "lavande"
  | "ciel"
  | "nuage"
  | "givre"
  | "brume"
  | "glacier"
  | "turquoise"
  | "anis"
  | "menthe"
  | "citronnelle"
  | "sable"
  | "abricot"
  | "coral"
  | "rose"
  | "petale"
  | "quartz"
  | "cendre";

export interface TagProps {
  tagType?: TagType;
  status?: Status;
  color?: Color;
  CompactSpacing?: boolean;
  label?: string;
  showLeftIcon?: boolean;
  iconName?: string;
}
