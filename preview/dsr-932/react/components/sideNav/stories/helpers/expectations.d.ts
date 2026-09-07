import { within } from '@storybook/test';
declare function isActiveItem(element: HTMLElement): boolean;
declare function expectElementToHaveFocus(element: HTMLElement | null): void;
declare function expectElementNotToHaveFocus(sideNav: HTMLElement, text: string): void;
declare function expectElementToBeSkipped(sideNav: HTMLElement, text: string): void;
declare function expectElementToBeAccessible(sideNav: HTMLElement, text: string): void;
declare function expectNavItemToBeActive(canvas: ReturnType<typeof within>, itemId: string): Promise<void>;
declare function expectNavItemNotToBeActive(canvas: ReturnType<typeof within>, itemId: string): Promise<void>;
export { expectElementToHaveFocus, expectElementNotToHaveFocus, expectElementToBeSkipped, expectElementToBeAccessible, expectNavItemToBeActive, expectNavItemNotToBeActive, isActiveItem, };
