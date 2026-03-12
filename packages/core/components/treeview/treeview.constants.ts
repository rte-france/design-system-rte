import type { SvgConfig } from "../../common/svg";

import type { TreeviewBorderType } from "./treeview-item.interface";

export const TREEVIEW_EXPAND_COLLAPSE_DURATION_MS = 140;

export const TREEVIEW_BORDER_WIDTH_PX = 16;

export const TREEVIEW_ROW_HEIGHT_PX = 32;

export const TREEVIEW_ROW_HEIGHT_COMPACT_PX = 24;

const baseBorderSvgConfig: Pick<SvgConfig, "viewBox" | "width" | "height"> = {
  viewBox: "0 0 16 32",
  width: TREEVIEW_BORDER_WIDTH_PX,
  height: TREEVIEW_ROW_HEIGHT_PX,
};

export const TREEVIEW_BORDER_SVG_MAP: Record<TreeviewBorderType, SvgConfig> = {
  vertical: {
    ...baseBorderSvgConfig,
    elements: [{ kind: "path", d: "M8 32L8 0" }],
  },
  branch: {
    ...baseBorderSvgConfig,
    elements: [
      { kind: "path", d: "M8 32L8 0" },
      { kind: "line", x1: 8, y1: 15.5, x2: 16, y2: 15.5 },
    ],
  },
  corner: {
    ...baseBorderSvgConfig,
    elements: [
      { kind: "path", d: "M8 16L8 0" },
      { kind: "line", x1: 8, y1: 15.5, x2: 16, y2: 15.5 },
    ],
  },
  horizontal: {
    ...baseBorderSvgConfig,
    elements: [{ kind: "line", x1: 0, y1: 15.5, x2: 16, y2: 15.5 }],
  },
  spacer: {
    ...baseBorderSvgConfig,
    elements: [],
  },
};
