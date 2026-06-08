type ChipType = "single" | "multi" | "input";
export type ChipAppearance = "brand" | "neutral";

export interface ChipProps {
  id: string;
  label: string;
  appearance?: ChipAppearance;
  selected?: boolean;
  onClick?: (event: MouseEvent | KeyboardEvent) => void;
  onClose?: (event: MouseEvent | KeyboardEvent) => void;
  disabled?: boolean;
  type?: ChipType;
  compactSpacing?: boolean;
}
