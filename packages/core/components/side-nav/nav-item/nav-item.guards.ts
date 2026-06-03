import type { NavActionItem, NavGroupItem, NavItem, NavLinkItem } from "./nav-item.interface";

export function isNavLink(item: NavItem): item is NavLinkItem {
  return item.kind === "link";
}

export function isNavGroup(item: NavItem): item is NavGroupItem {
  return item.kind === "group";
}

export function isNavAction(item: NavItem): item is NavActionItem {
  return item.kind === "action";
}
