export type TagType = "status" | "decorative";
export type TagStatus = "success" | "information" | "warning" | "alert";
export type TagColor =
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
  status?: TagStatus;
  color?: TagColor;
  compactSpacing?: boolean;
  label?: string;
  showLeftIcon?: boolean;
  iconName?: string;
}
