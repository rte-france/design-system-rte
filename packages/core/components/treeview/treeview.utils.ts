import type { TreeviewBorderType, TreeviewItemProps, TreeviewNodePath } from "./treeview-item.interface";

export function hasChildren(items: TreeviewItemProps[] | undefined): boolean {
  return (items?.length ?? 0) > 0;
}

export interface ComputeBorderTypesConfig {
  depth?: number;
  isCompact?: boolean;
  resolvedBorderTypes?: TreeviewBorderType[];
  hasChildren?: boolean;
}

export function computeConnectorBorderTypes(config: ComputeBorderTypesConfig): TreeviewBorderType[] {
  const { depth = 0, isCompact, resolvedBorderTypes = [], hasChildren } = config;
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

export function getChildBorderTypes(
  resolvedBorderTypes: TreeviewBorderType[],
  isLastChild: boolean,
): TreeviewBorderType[] {
  const nextType: TreeviewBorderType = isLastChild ? "corner" : "branch";
  return [...resolvedBorderTypes, nextType];
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

export function computeCheckboxId(baseId: string): string {
  return `treeview-checkbox-${baseId}`;
}

export function updateBorderTypeForAncestor(type: TreeviewBorderType): TreeviewBorderType {
  return type === "corner" ? "spacer" : "vertical";
}

export interface BuildTreeviewNodeIdParams {
  treeId: string;
  path: TreeviewNodePath;
  itemId?: string;
}

export function buildTreeviewNodeId({ treeId, path, itemId }: BuildTreeviewNodeIdParams): string {
  const pathPart = path.join("-");
  const base = `${treeId}__${pathPart}`;
  return itemId ? `${base}__${itemId}` : base;
}

export function parsePathString(pathString: string): number[] {
  if (!pathString.trim()) {
    return [];
  }
  return pathString
    .split("-")
    .map((segment) => parseInt(segment.trim(), 10))
    .filter((index) => !Number.isNaN(index) && index >= 0);
}

export function getNodeAtPath(
  items: TreeviewItemProps[],
  pathIndices: TreeviewNodePath,
): TreeviewItemProps | undefined {
  if (pathIndices.length === 0 || items.length === 0) {
    return undefined;
  }
  const [headIndex, ...restIndices] = pathIndices;
  const node = items[headIndex];
  if (node === undefined) {
    return undefined;
  }
  if (restIndices.length === 0) {
    return node;
  }
  const children = node.items ?? [];
  return getNodeAtPath(children, restIndices);
}
