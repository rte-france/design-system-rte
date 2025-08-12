export type DividerOrientation = "horizontal" | "vertical";
export type DividerThickness = "light" | "medium" | "bold";
export type DividerColor = "default" | "inverse";

export interface DividerProps {
  orientation?: DividerOrientation;
  thickness?: DividerThickness;
  color?: DividerColor;
}
