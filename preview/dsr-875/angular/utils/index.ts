let nextFallbackId = 0;

function isElementInParentWithOverlay(element?: HTMLElement): boolean {
  if (!element) {
    return false;
  }
  return !!element.closest("[aria-modal='true']") || !!element.closest("[role='dialog']");
}

function generateId(): string {
  if (typeof globalThis.crypto !== "undefined" && "randomUUID" in globalThis.crypto) {
    return globalThis.crypto.randomUUID();
  }
  nextFallbackId += 1;
  return `id-${nextFallbackId}`;
}

export { isElementInParentWithOverlay, generateId };
