declare function getSideNavShell(sideNav: HTMLElement): HTMLElement;
declare function getSideNavFocusStyleTarget(interactiveElement: HTMLElement): HTMLElement;
declare function focusWithVisibleRing(element: HTMLElement): void;
declare function expectElementToHaveSideNavFocusStyles(focusedElement: HTMLElement, sideNav: HTMLElement): void;
export { focusWithVisibleRing, expectElementToHaveSideNavFocusStyles, getSideNavFocusStyleTarget, getSideNavShell };
