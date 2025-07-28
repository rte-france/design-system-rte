export interface IconButtonProps {
  variant?: import("../common/common-button").ButtonVariant;
  size?: import("../common/common-button").ButtonSize;
  compactSpacing?: boolean;
  disabled?: boolean;
  name: string;
  appearance?: "outlined" | "filled";
}

export interface IconButtonToggleProps extends Omit<IconButtonProps, "appearance"> {
  selected?: boolean;
  defaultSelected?: boolean;
}
