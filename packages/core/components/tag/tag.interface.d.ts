export type TagType = "status" | "decorative";
export type TagStatus = "success" | "information" | "warning" | "alert";
export type TagColor =
  | "brand"
  | "neutral"
  | "neutral-bold"
  | "bleu-iceberg"
  | "bleu-iceberg-bold"
  | "vert-foret"
  | "vert-foret-bold"
  | "violet"
  | "violet-bold"
  | "bleu-rte"
  | "bleu-rte-bold"
  | "bleu-digital"
  | "bleu-digital-bold"
  | "marine"
  | "marine-bold"
  | "bleu-petrole"
  | "bleu-petrole-bold"
  | "bleu-cyan"
  | "bleu-cyan-bold"
  | "vert"
  | "vert-bold"
  | "vert-indications"
  | "vert-indications-bold"
  | "vert-digital"
  | "vert-digital-bold"
  | "jaune"
  | "jaune-bold"
  | "jaune-ocre"
  | "jaune-ocre-bold"
  | "jaune-indications"
  | "jaune-indications-bold"
  | "saumon"
  | "saumon-bold"
  | "rose"
  | "rose-bold"
  | "fuschia"
  | "fuschia-bold"
  | "rouge-indication"
  | "rouge-indication-bold"
  | "taupe"
  | "taupe-bold";

export interface TagProps {
  tagType?: TagType;
  status?: TagStatus;
  color?: TagColor;
  compactSpacing?: boolean;
  label?: string;
  showLeftIcon?: boolean;
  iconName?: string;
}
