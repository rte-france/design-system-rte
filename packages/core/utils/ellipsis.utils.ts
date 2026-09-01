export function hasEllipsis(element: HTMLElement, axis: "horizontal" | "vertical" = "horizontal"): boolean {
  if (axis === "horizontal") {
    return element.scrollWidth > element.clientWidth;
  }

  return element.scrollHeight > element.clientHeight;
}

export function hasEllipsisInSubtree(element: HTMLElement, axis: "horizontal" | "vertical" = "horizontal"): boolean {
  if (hasEllipsis(element, axis)) {
    return true;
  }

  return Array.from(element.children).some(
    (child) => child instanceof HTMLElement && hasEllipsisInSubtree(child, axis),
  );
}
