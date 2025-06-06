export type Position = "auto" | "top" | "bottom" | "left" | "right";
export type Alignment = "start" | "center" | "end";

export interface TooltipProps {
  position?: Position;
  alignment?: Alignment;
  label?: string;
  arrow?: boolean;
}
