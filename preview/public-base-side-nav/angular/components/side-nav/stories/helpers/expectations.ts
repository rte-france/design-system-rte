import { expect, waitFor } from "@storybook/test";
import { within } from "@storybook/test";

import { getNavElement, getNavItemContainer } from "./elementFinders";

function isActiveItem(element: HTMLElement): boolean {
  return element.dataset["active"] === "true" || element.classList.contains("active");
}

function expectElementToHaveFocus(element: HTMLElement | null): void {
  expect(element).not.toBeNull();
  expect(element).toHaveFocus();
}

function expectElementNotToHaveFocus(sideNav: HTMLElement, text: string): void {
  const element = getNavElement(sideNav, text);
  if (element) {
    expect(element).not.toHaveFocus();
  }
}

function expectElementToBeSkipped(sideNav: HTMLElement, text: string): void {
  const element = getNavElement(sideNav, text);
  if (element) {
    expect(element).toHaveAttribute("tabindex", "-1");
  }
}

function expectElementToBeAccessible(sideNav: HTMLElement, text: string): void {
  const element = getNavElement(sideNav, text);
  if (element) {
    expect(element).toHaveAttribute("tabindex", "0");
  }
}

async function expectNavItemActiveState(
  canvas: ReturnType<typeof within>,
  itemId: string,
  shouldBeActive: boolean,
): Promise<void> {
  await waitFor(() => {
    const sideNav = canvas.getByRole("navigation");
    const navItemContainer = getNavItemContainer(sideNav, itemId);
    expect(navItemContainer).not.toBeNull();
    expect(isActiveItem(navItemContainer!)).toBe(shouldBeActive);
  });
}

function expectNavItemToBeActive(canvas: ReturnType<typeof within>, itemId: string): Promise<void> {
  return expectNavItemActiveState(canvas, itemId, true);
}

function expectNavItemNotToBeActive(canvas: ReturnType<typeof within>, itemId: string): Promise<void> {
  return expectNavItemActiveState(canvas, itemId, false);
}

export {
  expectElementToHaveFocus,
  expectElementNotToHaveFocus,
  expectElementToBeSkipped,
  expectElementToBeAccessible,
  expectNavItemToBeActive,
  expectNavItemNotToBeActive,
  isActiveItem,
};
