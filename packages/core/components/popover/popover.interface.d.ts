export type PopoverPosition = "auto" | "top" | "bottom" | "left" | "right";
export type PopoverAlignment = "start" | "center" | "end";

export interface PopoverProps {
  primaryButtonLabel: string;
  content: string;
  position?: PopoverPosition;
  alignment?: PopoverAlignment;
  arrow?: boolean;
  title?: string;
  secondaryButtonLabel?: string;
  closeOnClickOutside?: boolean;
  closeOnEscape?: boolean;
  onClickPrimaryButton?: () => void;
  onClickSecondaryButton?: () => void;
}
