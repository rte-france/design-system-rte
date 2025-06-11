export type SplitButtonAppearance = "primary" | "secondary";
export type SplitButtonSize = "s" | "m" | "l";
export type SplitButtonPosition = "bottom-start" | "bottom-end" | "top-start" | "top-end";
export type SplitButtonAppearance = "primary" | "secondary";
export type SplitButtonSize = "s" | "m" | "l";
export type SplitButtonPosition = "bottom-start" | "bottom-end" | "top-start" | "top-end";

export interface SplitButtonProps {
  appearance?: SplitButtonAppearance;
  ariaLabelRight?: string;
  size?: SplitButtonSize;
  label: string;
  compactSpacing?: boolean;
  selected?: boolean;
  position?: SplitButtonPosition;
  icon?: string;
  showIcon?: boolean;
  Disabled?: boolean;
}

