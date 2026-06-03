import { isNavGroup } from "@design-system-rte/core/components/side-nav/nav-item/nav-item.guards";
import type { NavItem } from "@design-system-rte/core/components/side-nav/nav-item/nav-item.interface";

function hasActiveDescendant(items: NavItem[], activeId: string): boolean {
  return items.some((item) => {
    if (item.id === activeId) {
      return true;
    }
    if (isNavGroup(item)) {
      return hasActiveDescendant(item.items, activeId);
    }
    return false;
  });
}

function mapNavItemsWithActiveState(items: NavItem[], activeId: string): NavItem[] {
  return items.map((item) => {
    if (isNavGroup(item)) {
      const childItems = mapNavItemsWithActiveState(item.items, activeId);
      const isMenuActive = item.id === activeId;
      const shouldOpenMenu = item.id === activeId || hasActiveDescendant(item.items, activeId);

      return {
        ...item,
        active: isMenuActive,
        open: shouldOpenMenu ? true : item.open,
        items: childItems,
      };
    }

    return {
      ...item,
      active: item.id === activeId,
    };
  });
}

export { mapNavItemsWithActiveState, hasActiveDescendant };
