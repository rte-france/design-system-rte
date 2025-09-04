export type PopoverPosition = "auto" | "top" | "bottom" | "left" | "right";
export type PopoverAlignment = "start" | "center" | "end";

export interface PopoverProps {
  position?: PopoverPosition;
  alignment?: PopoverAlignment;
  content?: string;
  arrow?: boolean;
  title?: string;
  showTitle?: boolean;
  buttonLabel?: string;
  button2?: boolean;
  button2Label?: string;
}
