export type PopoverPosition = "auto" | "top" | "bottom" | "left" | "right";
export type PopoverAlignment = "start" | "center" | "end";

export interface PopoverProps {
  primaryButtonLabel: string;
  position?: PopoverPosition;
  alignment?: PopoverAlignment;
  content?: string;
  arrow?: boolean;
  title?: string;
  secondaryButtonLabel?: string;
  onClickPrimaryButton?: () => void;
  onClickSecondaryButton?: () => void;
}
