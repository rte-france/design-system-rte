import type { TreeviewBorderType, TreeviewItemProps } from "./treeview-item.interface";
import { TREEVIEW_INDENTATION_COMPACT_PX, TREEVIEW_INDENTATION_STEP_PX } from "./treeview.constants";

export function hasChildren(items: TreeviewItemProps[] | undefined): boolean {
  return (items?.length ?? 0) > 0;
}

export function computeIndentationPx(depth: number, isCompact: boolean): number {
  const step = isCompact ? TREEVIEW_INDENTATION_COMPACT_PX : TREEVIEW_INDENTATION_STEP_PX;
  return depth * step;
}

export interface ComputeBorderTypesConfig {
  depth?: number;
  isCompact?: boolean;
  resolvedBorderTypes?: TreeviewBorderType[];
  hasChildren?: boolean;
}

export function computeConnectorBorderTypes(config: ComputeBorderTypesConfig): TreeviewBorderType[] {
  const { depth, isCompact, resolvedBorderTypes = [], hasChildren } = config;
  if (isCompact) {
    return Array(depth).fill("spacer");
  }
  const outputBorders: TreeviewBorderType[] = [];
  for (let index = 0; index < resolvedBorderTypes.length; index++) {
    const isLastBorder = index === resolvedBorderTypes.length - 1;
    outputBorders.push(
      isLastBorder ? resolvedBorderTypes[index] : updateBorderTypeForAncestor(resolvedBorderTypes[index]),
    );
  }
  if (depth && outputBorders.length && !hasChildren) {
    outputBorders.push("horizontal");
  }
  return outputBorders;
}

export function updateBorderTypeForAncestor(type: TreeviewBorderType): TreeviewBorderType {
  return type === "corner" ? "spacer" : "vertical";
}

export function getChildBorderTypes(
  resolvedBorderTypes: TreeviewBorderType[],
  isLastChild: boolean,
): TreeviewBorderType[] {
  const nextType: TreeviewBorderType = isLastChild ? "corner" : "branch";
  return [...resolvedBorderTypes, nextType];
}

export function computeCheckboxId(id: string | undefined, labelText: string, depth: number): string {
  return `treeview-checkbox-${id ?? labelText}-${depth}`;
}

export function isItemSelected(itemId: string | undefined, selectedId: string | undefined): boolean {
  return itemId !== undefined && selectedId === itemId;
}

export function canToggleOpen(hasChildren: boolean, disabled: boolean): boolean {
  return hasChildren && !disabled;
}

export function getTreeviewItemKey(item: TreeviewItemProps): string {
  return item.id ?? item.labelText;
}

export function mergeChildItemWithParent(
  child: TreeviewItemProps,
  parent: Partial<Pick<TreeviewItemProps, "isCompact" | "dottedLine">>,
): TreeviewItemProps {
  return {
    ...child,
    isCompact: child.isCompact ?? parent.isCompact,
    dottedLine: child.dottedLine ?? parent.dottedLine,
  };
}
