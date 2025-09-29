export type DividerThickness = "light" | "medium" | "bold";
export type DividerAppearance = "default" | "inverse";
export type DividerEndPoint = "square" | "round";

export interface DividerProps {
  orientation?: import("../common/common-types").Direction;
  thickness?: DividerThickness;
  appearance?: DividerAppearance;
  endPoint?: DividerEndPoint;
}
