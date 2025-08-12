export type DividerOrientation = "horizontal" | "vertical";
export type DividerThickness = "light" | "medium" | "bold";
export type DividerAppearance = "default" | "inverse";
export type DividerEndPoint = "square" | "round";

export interface DividerProps {
  orientation?: DividerOrientation;
  thickness?: DividerThickness;
  appearance?: DividerAppearance;
  endPoint?: DividerEndPoint;
}
