export const getAutoPlacement = (element: HTMLElement, defaultPosition: string) => {
    const parent = element.parentElement;
    if (!parent) return defaultPosition;

    const parentRect = parent.getBoundingClientRect();
    const tooltipRect = element.getBoundingClientRect();

    const hasSpaceTop = tooltipRect.top-40 >= parentRect.top;
    const hasSpaceBottom = tooltipRect.bottom+40 <= parentRect.bottom;
    const hasSpaceLeft = tooltipRect.left-160 >= parentRect.left;
    const hasSpaceRight = tooltipRect.right+160 <= parentRect.right;

    if (hasSpaceTop) return "top";
    if (hasSpaceBottom) return "bottom";
    if (hasSpaceLeft) return "left";
    if (hasSpaceRight) return "right";

    console.warn(defaultPosition);
    console.log(hasSpaceTop, hasSpaceBottom, hasSpaceLeft, hasSpaceRight);

    return defaultPosition;
};