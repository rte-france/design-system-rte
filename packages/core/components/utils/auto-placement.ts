export const getAutoPlacement = (
  hostElement: HTMLElement,
  castedElement: Element,
  defaultPosition: "top" | "bottom" | "left" | "right",
  offset: number = 0,
): "top" | "bottom" | "left" | "right" => {
  const triggerParent = hostElement.parentElement;
  if (!triggerParent) {
    return defaultPosition;
  }
  const triggerRect = hostElement.getBoundingClientRect();
  const maxWidth = parseInt(getComputedStyle(castedElement).getPropertyValue("max-width"));
  const maxHeight = parseInt(getComputedStyle(castedElement).getPropertyValue("max-height"));

  const parentRect = triggerParent.getBoundingClientRect();
  const sides = {
    top: triggerRect.top - parentRect.top > maxHeight + offset,
    right: parentRect.right - triggerRect.right > maxWidth + offset,
    bottom: parentRect.bottom - triggerRect.bottom >= maxHeight + offset,
    left: triggerRect.left - parentRect.left > maxWidth + offset,
  } as const;

  if (sides.top) return "top";
  if (sides.bottom) return "bottom";
  if (sides.left) return "left";
  if (sides.right) return "right";

  return defaultPosition;
};

export const getAutoPlacementDropdown = (
  hostElement: HTMLElement,
  castedElement: Element,
  defaultPosition: "top" | "bottom" | "left" | "right",
  offset: number = 0,
  hasDropdownParent: boolean = false,
) => {
  const triggerRect = hostElement.getBoundingClientRect();
  const elementRect = castedElement.getBoundingClientRect();
  const sides = {
    top: elementRect.height + offset < triggerRect.top,
    right: elementRect.width + offset < window.innerWidth - triggerRect.right,
    bottom: elementRect.height + offset < window.innerHeight - triggerRect.bottom,
    left: elementRect.width + offset < triggerRect.left,
  } as const;

  if (hasDropdownParent) {
    if (sides.right) return "right";
    if (sides.left) return "left";
    if (sides.bottom) return "bottom";
    if (sides.top) return "top";

    return defaultPosition;
  }

  if (sides.bottom) return "bottom";
  if (sides.right) return "right";
  if (sides.left) return "left";
  if (sides.top) return "top";

  return defaultPosition;
};

export const getAutoAlignment = (hostElement: HTMLElement, castedElement: Element, position: string) => {
  const triggerParent = hostElement.parentElement;
  if (!triggerParent) {
    return "center";
  }
  const triggerRect = hostElement.getBoundingClientRect();
  const castedRect = castedElement.getBoundingClientRect();

  const alignments = {
    end:
      position === "top" || position === "bottom"
        ? triggerRect.right >= castedRect.width
        : window.innerHeight - triggerRect.bottom >= castedRect.height,
    start:
      position === "top" || position === "bottom"
        ? window.innerWidth - triggerRect.left >= castedRect.width
        : window.innerHeight - triggerRect.top >= castedRect.height,
  } as const;
  if (alignments.start) return "start";
  if (alignments.end) return "end";
  return "center";
};

export const getCoordinates = (
  position: string,
  triggerElement: HTMLElement,
  castedElement: HTMLElement,
  offset: number = 0,
  alignment: "start" | "center" | "end" = "center",
) => {
  const triggerElementRect = triggerElement.getBoundingClientRect();
  const castedElementRect = castedElement.getBoundingClientRect();

  let top = 0;
  let left = 0;
  if (position === "bottom") {
    if (alignment === "start") {
      left = triggerElementRect.left + window.scrollX;
    } else if (alignment === "end") {
      left = triggerElementRect.right - castedElementRect.width + window.scrollX;
    } else {
      left = triggerElementRect.left + triggerElementRect.width / 2 - castedElementRect.width / 2 + window.scrollX;
    }
    top = triggerElementRect.bottom + offset + window.scrollY;
  } else if (position === "left") {
    if (alignment === "start") {
      top = triggerElementRect.top + window.scrollY;
    } else if (alignment === "end") {
      top = triggerElementRect.bottom - castedElementRect.height + window.scrollY;
    } else {
      top = triggerElementRect.top + triggerElementRect.height / 2 - castedElementRect.height / 2 + window.scrollY;
    }
    left = triggerElementRect.left - castedElementRect.width - offset + window.scrollX;
  } else if (position === "right") {
    if (alignment === "start") {
      top = triggerElementRect.top + window.scrollY;
    } else if (alignment === "end") {
      top = triggerElementRect.bottom - castedElementRect.height + window.scrollY;
    } else top = triggerElementRect.top + triggerElementRect.height / 2 - castedElementRect.height / 2 + window.scrollY;
    left = triggerElementRect.right + offset + window.scrollX;
  } else if (position === "top" || !position) {
    top = triggerElementRect.top - castedElementRect.height - offset + window.scrollY;
    left = triggerElementRect.left + triggerElementRect.width / 2 - castedElementRect.width / 2 + window.scrollX;
  }

  return {
    top,
    left,
  };
};
