export const getAutoPlacement = (hostElement: HTMLElement, castedElement: Element, defaultPosition: string) => {
    const parent = hostElement.parentElement;
    if (!parent) return defaultPosition;

    const parentRect = parent.getBoundingClientRect();
    const castedElementRect = castedElement.getBoundingClientRect();
    const maxWidth = parseInt(getComputedStyle(castedElement).getPropertyValue('max-width'));
    const maxHeight = parseInt(getComputedStyle(castedElement).getPropertyValue('max-height'));

    const hasSpaceTop = castedElementRect.top - maxHeight >= parentRect.top;
    const hasSpaceBottom = castedElementRect.bottom + maxHeight <= parentRect.bottom;
    const hasSpaceLeft = castedElementRect.left - maxWidth >= parentRect.left;
    const hasSpaceRight = castedElementRect.right + maxWidth <= parentRect.right;

    if (hasSpaceTop) return "top";
    if (hasSpaceBottom) return "bottom";
    if (hasSpaceLeft) return "left";
    if (hasSpaceRight) return "right";

    return defaultPosition;
};