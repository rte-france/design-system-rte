import type { TreeviewBorderType, TreeviewItemProps, TreeviewNodePath } from "./treeview-item.interface";
import { TREEVIEW_FOCUSABLE_ATTRIBUTE, TREEVIEW_FOCUSABLE_ORDER } from "./treeview.constants";

export interface TreeviewVisibleRow {
  rowElement: HTMLElement;
  focusables: HTMLElement[];
}

export interface TreeviewFocusPosition {
  rowIndex: number;
  focusableIndex: number;
}

export function getVisibleFocusableRows(treeElement: HTMLElement): TreeviewVisibleRow[] {
  const treeitems = Array.from(treeElement.querySelectorAll<HTMLElement>("li.treeview-item[role='treeitem']"));

  return treeitems
    .filter(isTreeitemVisible)
    .map((treeitem) => ({ rowElement: treeitem, focusables: getFocusablesForRow(treeitem) }));
}

export function isTreeitemVisible(treeitem: HTMLElement): boolean {
  let current: HTMLElement | null = treeitem;

  while (current) {
    const parentElement = current.parentElement as HTMLElement | null;
    if (!parentElement) {
      break;
    }

    if (
      parentElement.classList.contains("treeview-item-children") &&
      !parentElement.classList.contains("treeview-item-children-open")
    ) {
      return false;
    }

    current = parentElement;
  }

  return true;
}

export function getFocusablesForRow(treeitem: HTMLElement): HTMLElement[] {
  return TREEVIEW_FOCUSABLE_ORDER.map((type) =>
    treeitem.querySelector<HTMLElement>(`[${TREEVIEW_FOCUSABLE_ATTRIBUTE}="${type}"]`),
  ).filter((element): element is HTMLElement => element !== null);
}

export function isTreeviewFocusable(element: HTMLElement): boolean {
  return element.hasAttribute(TREEVIEW_FOCUSABLE_ATTRIBUTE);
}

export function isTreeitemDisabled(element: HTMLElement): boolean {
  const treeitem = element.closest("li.treeview-item");
  return !!treeitem?.classList.contains("disabled");
}

export function findFocusedPosition(rows: TreeviewVisibleRow[], target: HTMLElement): TreeviewFocusPosition {
  const defaultPosition: TreeviewFocusPosition = { rowIndex: -1, focusableIndex: -1 };
  const found = rows
    .map((row, rowIndex) => ({
      rowIndex,
      focusableIndex: row.focusables.indexOf(target),
    }))
    .find((result) => result.focusableIndex !== -1);

  return found ?? defaultPosition;
}

export function getContentOrFirstFocusable(row: TreeviewVisibleRow): HTMLElement | null {
  const content = row.focusables.find((element) => element.getAttribute(TREEVIEW_FOCUSABLE_ATTRIBUTE) === "content");
  if (content && !isTreeitemDisabled(content)) {
    return content;
  }
  const firstEnabled = row.focusables.find((element) => !isTreeitemDisabled(element));
  return firstEnabled ?? null;
}

export function getNextFocusTarget(
  rows: TreeviewVisibleRow[],
  current: TreeviewFocusPosition,
  direction: -1 | 1,
  isVertical: boolean,
): TreeviewFocusPosition | null {
  if (isVertical) {
    let targetRowIndex = current.rowIndex + direction;

    while (targetRowIndex >= 0 && targetRowIndex < rows.length) {
      const targetRow = rows[targetRowIndex];
      const isTargetDisabled = targetRow.rowElement.classList.contains("disabled");

      if (!isTargetDisabled) {
        const contentOrFirst = getContentOrFirstFocusable(targetRow);
        return contentOrFirst
          ? {
              rowIndex: targetRowIndex,
              focusableIndex: targetRow.focusables.indexOf(contentOrFirst),
            }
          : null;
      }

      targetRowIndex += direction;
    }

    return null;
  }

  const row = rows[current.rowIndex];
  if (!row) return null;

  let targetFocusableIndex = current.focusableIndex + direction;

  while (targetFocusableIndex >= 0 && targetFocusableIndex < row.focusables.length) {
    const candidate = row.focusables[targetFocusableIndex];

    if (!isTreeitemDisabled(candidate)) {
      return { rowIndex: current.rowIndex, focusableIndex: targetFocusableIndex };
    }

    targetFocusableIndex += direction;
  }

  return null;
}

export function getFocusableElementsFromTreeview(treeElement: HTMLElement): HTMLElement[] {
  return Array.from(treeElement.querySelectorAll<HTMLElement>(`[${TREEVIEW_FOCUSABLE_ATTRIBUTE}]`));
}

export function setMovingTabindex(treeElement: HTMLElement, focusedElement: HTMLElement): void {
  getFocusableElementsFromTreeview(treeElement).forEach((element) =>
    element.setAttribute("tabindex", element === focusedElement ? "0" : "-1"),
  );
}

export function resetMovingTabIndex(treeElement: HTMLElement): void {
  getFocusableElementsFromTreeview(treeElement).forEach((element) => element.setAttribute("tabindex", "-1"));

  const rows = getVisibleFocusableRows(treeElement);
  if (rows.length) {
    const firstContent = getContentOrFirstFocusable(rows[0]);
    if (firstContent) {
      firstContent.setAttribute("tabindex", "0");
    }
  }
}

export function hasChildren(items: TreeviewItemProps[] | undefined): boolean {
  return (items?.length ?? 0) > 0;
}

export function hasNestedItemsInTree(items: TreeviewItemProps[] | undefined): boolean {
  if (!items?.length) return false;
  return items.some((item) => {
    if (hasChildren(item.items)) return true;
    return hasNestedItemsInTree(item.items);
  });
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

export function getItemId(item: TreeviewItemProps): string {
  return item.id ?? item.labelText;
}

export function getDescendantIds(item: TreeviewItemProps): string[] {
  const ids: string[] = [getItemId(item)];
  const children = item.items ?? [];
  for (const child of children) {
    ids.push(...getDescendantIds(child));
  }
  return ids;
}

function isNodeChecked(node: TreeviewItemProps, checkedIds: ReadonlySet<string>): boolean {
  const nodeHasChildren = hasChildren(node.items);
  return allDescendantsChecked(node, checkedIds) || (checkedIds.has(getItemId(node)) && !nodeHasChildren);
}

function addFullyCheckedAncestors(next: Set<string>, items: TreeviewItemProps[]): void {
  for (const item of items) {
    if (hasChildren(item.items)) {
      addFullyCheckedAncestors(next, item.items!);
    }
    const itemId = getItemId(item);
    if (!hasChildren(item.items)) continue;
    const childDescendantIds = getDescendantIds(item).slice(1);
    const allChildrenInSet = childDescendantIds.every((id) => next.has(id));
    if (allChildrenInSet) {
      next.add(itemId);
    }
  }
}

function removeOrphanedRecursive(next: Set<string>, items: TreeviewItemProps[]): void {
  for (const item of items) {
    if (hasChildren(item.items)) {
      removeOrphanedRecursive(next, item.items!);
    }
    const itemId = getItemId(item);
    if (!next.has(itemId) || !hasChildren(item.items)) continue;
    const childDescendantIds = getDescendantIds(item).slice(1);
    const anyChildInSet = childDescendantIds.some((id) => next.has(id));
    if (!anyChildInSet) {
      next.delete(itemId);
    }
  }
}

export function removeOrphanedParentIds(checkedIds: ReadonlySet<string>, items: TreeviewItemProps[]): Set<string> {
  const next = new Set(checkedIds);
  removeOrphanedRecursive(next, items);
  return next;
}

export function computeCheckedIdsAfterToggle(
  currentChecked: ReadonlySet<string>,
  node: TreeviewItemProps,
  rootItems?: TreeviewItemProps[],
): Set<string> {
  const descendantIds = getDescendantIds(node);
  const next = new Set(currentChecked);
  const nodeId = getItemId(node);
  if (descendantIds.length > 0) {
    if (isNodeChecked(node, currentChecked)) {
      descendantIds.forEach((id) => next.delete(id));
    } else {
      descendantIds.forEach((id) => next.add(id));
      if (rootItems && rootItems.length > 0) {
        addFullyCheckedAncestors(next, rootItems);
      }
    }
  } else {
    if (currentChecked.has(nodeId)) {
      next.delete(nodeId);
    } else {
      next.add(nodeId);
      if (rootItems && rootItems.length > 0) {
        addFullyCheckedAncestors(next, rootItems);
      }
    }
  }
  if (rootItems && rootItems.length > 0) {
    return removeOrphanedParentIds(next, rootItems);
  }
  return next;
}

export function isNodeIndeterminate(node: TreeviewItemProps, checkedIds: ReadonlySet<string>): boolean {
  const descendantIds = getDescendantIds(node);
  const childDescendantIds = descendantIds.slice(1);
  if (childDescendantIds.length === 0) return false;
  const checkedCount = childDescendantIds.filter((id) => checkedIds.has(id)).length;
  return checkedCount > 0 && checkedCount < childDescendantIds.length;
}

export function allDescendantsChecked(node: TreeviewItemProps, checkedIds: ReadonlySet<string>): boolean {
  const descendantIds = getDescendantIds(node);
  const childDescendantIds = descendantIds.slice(1);
  return childDescendantIds.length > 0 && childDescendantIds.every((id) => checkedIds.has(id));
}

export function findNodeById(items: TreeviewItemProps[], itemId: string): TreeviewItemProps | undefined {
  for (const item of items) {
    if (getItemId(item) === itemId) {
      return item;
    }
    const found = findNodeById(item.items ?? [], itemId);
    if (found) {
      return found;
    }
  }
  return undefined;
}

export function mergeChildItemWithParent(
  child: TreeviewItemProps,
  parent: Partial<Pick<TreeviewItemProps, "isCompact">>,
): TreeviewItemProps {
  return {
    ...child,
    isCompact: child.isCompact ?? parent.isCompact,
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
