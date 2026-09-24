import { FOCUSABLE_ELEMENTS_QUERY } from "../constants/dom/dom.constants";

const SKIPPED_SIBLING_NODE_NAMES = new Set(["SCRIPT", "STYLE"]);

type HiddenEntry = {
  element: HTMLElement;
  previousAriaHidden: string | null;
  hadAriaHidden: boolean;
  hadInert: boolean;
};

let hideRequestCount = 0;
let hiddenEntries: HiddenEntry[] = [];

const ensureIsFocusable = (overlayRoot: HTMLElement): void => {
  if (!overlayRoot.hasAttribute("tabindex")) {
    overlayRoot.tabIndex = -1;
  }
};

export const focusFirstElement = (overlayRoot: HTMLElement): void => {
  ensureIsFocusable(overlayRoot);

  const dialog = overlayRoot.querySelector('[role="dialog"]') ?? overlayRoot.querySelector("dialog") ?? overlayRoot;
  const focusable = dialog.querySelector(FOCUSABLE_ELEMENTS_QUERY);
  if (focusable instanceof HTMLElement) {
    focusable.focus({ preventScroll: true });
    return;
  }

  if (dialog instanceof HTMLElement) {
    if (!dialog.hasAttribute("tabindex")) {
      dialog.tabIndex = -1;
    }
    dialog.focus({ preventScroll: true });
    return;
  }

  overlayRoot.focus({ preventScroll: true });
};

export const isFocusInside = (overlayRoot: HTMLElement): boolean => {
  const activeElement = document.activeElement;
  return activeElement instanceof HTMLElement && overlayRoot.contains(activeElement);
};

export const moveFocusBeforeBackdropRender = (overlayRoot: HTMLElement): void => {
  if (isFocusInside(overlayRoot)) {
    return;
  }

  focusFirstElement(overlayRoot);

  if (!isFocusInside(overlayRoot)) {
    ensureIsFocusable(overlayRoot);
    overlayRoot.focus({ preventScroll: true });
  }
};

const shouldSkipSibling = (element: Element): boolean => {
  if (SKIPPED_SIBLING_NODE_NAMES.has(element.nodeName)) {
    return true;
  }

  return element.hasAttribute("aria-live") || element.hasAttribute("popover");
};

const ensureIsDirectBodyChild = (overlayContainer: HTMLElement): void => {
  if (overlayContainer.parentElement === document.body) {
    return;
  }

  document.body.appendChild(overlayContainer);
};

const applyHideToSiblings = (overlayContainer: HTMLElement): void => {
  const parent = overlayContainer.parentElement;
  if (!parent) {
    return;
  }

  hiddenEntries = [];

  for (const sibling of Array.from(parent.children)) {
    if (sibling === overlayContainer || shouldSkipSibling(sibling) || !(sibling instanceof HTMLElement)) {
      continue;
    }

    const hadAriaHidden = sibling.hasAttribute("aria-hidden");
    const previousAriaHidden = hadAriaHidden ? sibling.getAttribute("aria-hidden") : null;
    const hadInert = sibling.hasAttribute("inert");

    sibling.setAttribute("aria-hidden", "true");
    sibling.inert = true;
    hiddenEntries.push({ element: sibling, previousAriaHidden, hadAriaHidden, hadInert });
  }
};

export const hideBelowElements = (overlayContainer: HTMLElement): void => {
  ensureIsDirectBodyChild(overlayContainer);
  moveFocusBeforeBackdropRender(overlayContainer);

  hideRequestCount += 1;
  if (hideRequestCount > 1) {
    return;
  }

  applyHideToSiblings(overlayContainer);
};

export const restoreBelowElements = (): void => {
  if (hideRequestCount === 0) {
    return;
  }

  hideRequestCount -= 1;
  if (hideRequestCount > 0) {
    return;
  }

  for (const { element, previousAriaHidden, hadAriaHidden, hadInert } of hiddenEntries) {
    if (!hadInert) {
      element.inert = false;
    }

    if (!hadAriaHidden) {
      element.removeAttribute("aria-hidden");
      continue;
    }

    if (previousAriaHidden === null) {
      element.removeAttribute("aria-hidden");
    } else {
      element.setAttribute("aria-hidden", previousAriaHidden);
    }
  }

  hiddenEntries = [];
};
