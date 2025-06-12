export interface IconButtonProps {
  variant?: import("../common/common-button").ButtonVariant;
  size?: import("../common/common-button").ButtonSize;
  compactSpacing?: boolean;
  disabled?: boolean;
  icon: string;
  iconAppearance?: "outlined" | "filled";
}
