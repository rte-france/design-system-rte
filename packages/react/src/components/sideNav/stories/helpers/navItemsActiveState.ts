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

function resolveItemActivateHandler(
  item: NavItemProps,
  onItemActivate?: (itemId: string) => void,
): (() => void) | undefined {
  if (!item.id || !onItemActivate) {
    return item.onClick;
  }

  const activateHandler = () => {
    onItemActivate(item.id!);
  };

  if (!item.onClick) {
    return activateHandler;
  }

  return () => {
    activateHandler();
    item.onClick!();
  };
}

function mapNavItemsWithActiveState(
  items: NavItemProps[],
  activeId: string,
  onItemActivate?: (itemId: string) => void,
): NavItemProps[] {
  return items.map((item) => {
    const childItems = item.items?.length
      ? mapNavItemsWithActiveState(item.items, activeId, onItemActivate)
      : undefined;
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
      onClick: resolveItemActivateHandler(item, onItemActivate),
    };
  });
}

export { mapNavItemsWithActiveState, hasActiveDescendant };
