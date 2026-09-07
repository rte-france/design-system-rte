import { within } from "@storybook/test";

function getInteractiveElementFromListItem(listItem: HTMLElement | null): HTMLElement | null {
  if (!listItem) return null;

  const directChildren = Array.from(listItem.children) as HTMLElement[];
  const anchorChild = directChildren.find((child) => child.tagName === "A");
  if (anchorChild) return anchorChild;

  const spanChild = directChildren.find((child) => child.tagName === "SPAN" && child.hasAttribute("tabindex"));
  if (spanChild) return spanChild;

  const anchor = listItem.querySelector("a");
  if (anchor) return anchor;
  const spans = Array.from(listItem.querySelectorAll("span"));
  const interactiveSpan = spans.find((span) => span.hasAttribute("tabindex"));
  return interactiveSpan as HTMLElement | null;
}

function getNavElement(container: HTMLElement, text: string, containerSelector?: string): HTMLElement | null {
  const containerElement = containerSelector
    ? (container.querySelector(containerSelector) as HTMLElement | null)
    : container;

  if (!containerElement) return null;

  const navContainer = containerSelector ? within(containerElement) : within(container);
  const link = navContainer.queryByRole("link", { name: text });
  if (link) return link;

  const textElement = navContainer.queryByText(text);
  if (textElement) {
    const listItem = textElement.closest("li") as HTMLElement | null;
    return getInteractiveElementFromListItem(listItem);
  }

  return null;
}

function getNavElementInCollapsedState(sideNav: HTMLElement, itemIndex: number): HTMLElement | null {
  const body = sideNav.querySelector('[class*="side-nav-body"]');
  if (!body) return null;

  const bodyListItems = Array.from(body.querySelectorAll("li")) as HTMLElement[];
  const listItem = bodyListItems[itemIndex];

  return getInteractiveElementFromListItem(listItem);
}

function getFooterNavElement(sideNav: HTMLElement, label: string): HTMLElement | null {
  return getNavElement(sideNav, label, '[class*="side-nav-footer"]');
}

function getHeaderTitleContainer(sideNav: HTMLElement, identifierText: string = "MA"): HTMLElement | null {
  const navContainer = within(sideNav);
  const identifier = navContainer.getByText(identifierText);
  const headerTitleContainer = identifier.parentElement?.parentElement;
  return headerTitleContainer as HTMLElement | null;
}

function getNavItemContainer(sideNav: HTMLElement, itemId: string): HTMLElement | null {
  const navItem = sideNav.querySelector(`#${itemId}`);
  return navItem as HTMLElement | null;
}

export {
  getNavElement,
  getNavElementInCollapsedState,
  getFooterNavElement,
  getHeaderTitleContainer,
  getNavItemContainer,
  getInteractiveElementFromListItem,
};
