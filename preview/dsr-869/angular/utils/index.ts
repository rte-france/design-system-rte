function isElementInParentWithOverlay(element?: HTMLElement): boolean {
  if (!element) {
    return false;
  }
  return !!element.closest("[aria-modal='true']") || !!element.closest("[role='dialog']");
}
export { isElementInParentWithOverlay };
