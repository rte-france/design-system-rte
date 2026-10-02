export type SvgElementConfig =
  | { kind: "path"; d: string }
  | { kind: "line"; x1: number; y1: number; x2: number; y2: number };

export interface SvgConfig {
  viewBox: string;
  width: number;
  height: number;
  elements: SvgElementConfig[];
}
