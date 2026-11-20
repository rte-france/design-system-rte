import { NavItemProps } from '../../../../../../core/components/side-nav/nav-item/nav-item.interface';
declare function hasActiveDescendant(items: NavItemProps[], activeId: string): boolean;
declare function mapNavItemsWithActiveState(items: NavItemProps[], activeId: string, onItemActivate?: (itemId: string) => void): NavItemProps[];
export { mapNavItemsWithActiveState, hasActiveDescendant };
