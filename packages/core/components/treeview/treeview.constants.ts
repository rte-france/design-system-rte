import type { TreeviewBorderType } from "./treeview-item.interface";

export const TREEVIEW_EXPAND_COLLAPSE_DURATION_MS = 140;

export const TREEVIEW_INDENTATION_STEP_PX = 16;

export const TREEVIEW_INDENTATION_COMPACT_PX = 12;

export const TREEVIEW_BORDER_WIDTH_PX = 16;

export const TREEVIEW_ROW_HEIGHT_PX = 32;

export const TREEVIEW_ROW_HEIGHT_COMPACT_PX = 24;

export function updateSpacerForAncestor(type: TreeviewBorderType): TreeviewBorderType {
  return type === "corner" ? "spacer" : "vertical";
}
