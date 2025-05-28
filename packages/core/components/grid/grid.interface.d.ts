export type GridType = "fluid" | "fixed-narrow" | "fixed-wide";

export interface GridProps {
  gridType?: GridType;
}

export interface ColProps {
  xxs?: number;
  xs?: number;
  s?: number;
  m?: number;
  l?: number;
  xl?: number;
}
