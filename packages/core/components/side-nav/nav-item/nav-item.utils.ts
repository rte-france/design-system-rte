import { IconSize } from "@design-system-rte/core/components/icon/icon.constants";

import { isNavGroup } from "./nav-item.guards";
import type { NavItem } from "./nav-item.interface";

export function setNavMenuOpenById(items: NavItem[], menuId: string, open: boolean): boolean {
  for (const item of items) {
    if (item.id === menuId || item.label === menuId) {
      if (isNavGroup(item)) {
        item.open = open;
        return true;
      }
    }
    if (isNavGroup(item) && item.items.length && setNavMenuOpenById(item.items, menuId, open)) {
      return true;
    }
  }
  return false;
}

export function getNavItemLabelIconSize(isNested = false, isCollapsed = false): number {
  if (isNested) {
    return IconSize.s;
  }
  return isCollapsed ? IconSize.l : IconSize.m;
}
