type ChipType = "single" | "multi" | "input";

export interface ChipProps {
  id: string;
  label: string;
  selected?: boolean;
  onClick?: (event: MouseEvent | KeyboardEvent) => void;
  onClose?: (event: MouseEvent | KeyboardEvent) => void;
  disabled?: boolean;
  type?: ChipType;
  compactSpacing?: boolean;
}
