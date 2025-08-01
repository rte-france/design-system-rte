export type DividerOrientation = "horizontal" | "vertical";
export type DividerThickness = "light" | "medium" | "bold";

export interface DividerProps {
  orientation?: DividerOrientation;
  thickness?: DividerThickness;
}