import { allDescendantsChecked, hasChildren, TreeviewItemProps } from "@design-system-rte/core";

export const computeIsChecked = (
  itemId: string,
  labelText: string,
  items: TreeviewItemProps[],
  checkedIds?: string[],
) => {
  const checkedIdsSet = checkedIds ? new Set(checkedIds) : new Set<string>();
  const node = { id: itemId, labelText: labelText, items: items };
  const hasChildrenFlag = hasChildren(items);
  return allDescendantsChecked(node, checkedIdsSet) || (checkedIdsSet.has(node.id) && !hasChildrenFlag);
};
