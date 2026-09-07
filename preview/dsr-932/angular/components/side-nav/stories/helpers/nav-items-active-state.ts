import { NavItemProps } from "@design-system-rte/core/components/side-nav/nav-item/nav-item.interface";
import { NavMenuProps } from "@design-system-rte/core/components/side-nav/nav-menu/nav-menu.interface";

function hasActiveDescendant(items: NavItemProps[], activeId: string): boolean {
  return items.some((item) => {
    if (item.id === activeId) {
      return true;
    }
    if (item.items?.length) {
      return hasActiveDescendant(item.items, activeId);
    }
    return false;
  });
}

function mapNavItemsWithActiveState(items: NavItemProps[], activeId: string): NavItemProps[] {
  return items.map((item) => {
    const childItems = item.items?.length ? mapNavItemsWithActiveState(item.items, activeId) : undefined;
    const hasChildren = !!childItems?.length;
    const isLeafActive = !hasChildren && item.id === activeId;
    const isMenuActive = hasChildren && item.id === activeId;
    const menuItem = item as NavMenuProps;
    const shouldOpenMenu = hasChildren && (item.id === activeId || hasActiveDescendant(item.items!, activeId));

    return {
      ...item,
      active: isLeafActive || isMenuActive,
      open: shouldOpenMenu ? true : menuItem.open,
      items: childItems,
    };
  });
}

export { mapNavItemsWithActiveState, hasActiveDescendant };
