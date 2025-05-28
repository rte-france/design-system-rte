const MAX_TOOLTIP_HEIGHT = 40;
const MAX_TOOLTIP_WIDTH = 160;

export const getAutoPlacement = (element: HTMLElement, defaultPosition: string) => {
    const parent = element.parentElement;
    if (!parent) return defaultPosition;

    const parentRect = parent.getBoundingClientRect();
    const tooltipRect = element.getBoundingClientRect();

    const hasSpaceTop = tooltipRect.top - MAX_TOOLTIP_HEIGHT >= parentRect.top;
    const hasSpaceBottom = tooltipRect.bottom + MAX_TOOLTIP_HEIGHT <= parentRect.bottom;
    const hasSpaceLeft = tooltipRect.left - MAX_TOOLTIP_WIDTH >= parentRect.left;
    const hasSpaceRight = tooltipRect.right + MAX_TOOLTIP_WIDTH <= parentRect.right;

    if (hasSpaceTop) return "top";
    if (hasSpaceBottom) return "bottom";
    if (hasSpaceLeft) return "left";
    if (hasSpaceRight) return "right";

    return defaultPosition;
};