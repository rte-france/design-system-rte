declare function getInteractiveElementFromListItem(listItem: HTMLElement | null): HTMLElement | null;
declare function getNavElement(container: HTMLElement, text: string, containerSelector?: string): HTMLElement | null;
declare function getNavElementInCollapsedState(sideNav: HTMLElement, itemIndex: number): HTMLElement | null;
declare function getFooterNavElement(sideNav: HTMLElement, label: string): HTMLElement | null;
declare function getHeaderTitleContainer(sideNav: HTMLElement, identifierText?: string): HTMLElement | null;
declare function getNavItemContainer(sideNav: HTMLElement, itemId: string): HTMLElement | null;
export { getNavElement, getNavElementInCollapsedState, getFooterNavElement, getHeaderTitleContainer, getNavItemContainer, getInteractiveElementFromListItem, };
