import { IconSize } from "@design-system-rte/core/components/icon/icon.constants";

import type { NavMenuProps } from "../nav-menu/nav-menu.interface";

import type { NavItemProps } from "./nav-item.interface";

export function setNavMenuOpenById(items: NavItemProps[], menuId: string, open: boolean): boolean {
  for (const item of items) {
    if (item.id === menuId || item.label === menuId) {
      (item as NavMenuProps).open = open;
      return true;
    }
    if (item.items?.length && setNavMenuOpenById(item.items, menuId, open)) {
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
