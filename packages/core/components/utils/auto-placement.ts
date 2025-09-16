import { Alignment, Position } from "../common/common-types";

export const getAutoPlacement = (
  hostElement: HTMLElement,
  castedElement: Element,
  defaultPosition: Exclude<Position, "auto">,
  offset: number = 0,
  hasParent: boolean = false,
): Exclude<Position, "auto"> => {
  let sides: Record<Exclude<Position, "auto">, boolean>;
  const triggerRect = hostElement.getBoundingClientRect();
  if (hasParent) {
    const triggerParent = hostElement.parentElement;
    if (!triggerParent) {
      return defaultPosition;
    }

    const maxWidth = parseInt(getComputedStyle(castedElement).getPropertyValue("max-width"));
    const maxHeight = parseInt(getComputedStyle(castedElement).getPropertyValue("max-height"));
    const parentRect = triggerParent.getBoundingClientRect();
    sides = {
      top: triggerRect.top - parentRect.top > maxHeight + offset,
      right: parentRect.right - triggerRect.right > maxWidth + offset,
      bottom: parentRect.bottom - triggerRect.bottom >= maxHeight + offset,
      left: triggerRect.left - parentRect.left > maxWidth + offset,
    } as const;
  } else {
    const elementRect = castedElement.getBoundingClientRect();
    sides = {
      top: elementRect.height + offset < triggerRect.top,
      right: elementRect.width + offset < window.innerWidth - triggerRect.right,
      bottom: elementRect.height + offset < window.innerHeight - triggerRect.bottom,
      left: elementRect.width + offset < triggerRect.left,
    } as const;
  }

  if (sides.top) return "top";
  if (sides.bottom) return "bottom";
  if (sides.left) return "left";
  if (sides.right) return "right";

  return defaultPosition;
};

export const getAutoPlacementDropdown = (
  hostElement: HTMLElement,
  castedElement: Element,
  defaultPosition: Exclude<Position, "auto">,
  offset: number = 0,
  hasDropdownParent: boolean = false,
): Exclude<Position, "auto"> => {
  const triggerRect = hostElement.getBoundingClientRect();
  const elementRect = castedElement.getBoundingClientRect();
  const sides = {
    top: elementRect.height + offset < triggerRect.top,
    right: elementRect.width + offset < window.innerWidth - triggerRect.right,
    bottom: elementRect.height + offset < window.innerHeight - triggerRect.bottom,
    left: elementRect.width + offset < triggerRect.left,
  } as const;

  if (hasDropdownParent) {
    return getAutoPlacementDropdownWithParent(sides, defaultPosition);
  }

  return getAutoPlacementDropdownWithoutParent(sides, defaultPosition);
};

const getAutoPlacementDropdownWithParent = (
  sides: Record<Exclude<Position, "auto">, boolean>,
  defaultPosition: Exclude<Position, "auto">,
) => {
  if (sides.right) return "right";
  if (sides.left) return "left";
  if (sides.bottom) return "bottom";
  if (sides.top) return "top";

  return defaultPosition;
};

const getAutoPlacementDropdownWithoutParent = (
  sides: Record<Exclude<Position, "auto">, boolean>,
  defaultPosition: Exclude<Position, "auto">,
) => {
  if (sides.bottom) return "bottom";
  if (sides.right) return "right";
  if (sides.left) return "left";
  if (sides.top) return "top";

  return defaultPosition;
};

export const getAutoAlignment = (
  hostElement: HTMLElement,
  castedElement: Element,
  position: Exclude<Position, "auto">,
) => {
  const defaultPosition = "center";
  const triggerParent = hostElement.parentElement;
  if (!triggerParent) {
    return defaultPosition;
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
  return defaultPosition;
};

export const getCoordinates = (
  position: Exclude<Position, "auto">,
  triggerElement: HTMLElement,
  castedElement: HTMLElement,
  offset: number = 0,
  alignment: Alignment = "center",
) => {
  const triggerElementRect = triggerElement.getBoundingClientRect();
  const castedElementRect = castedElement.getBoundingClientRect();

  if (position === "bottom") {
    return handleBottomPosition(triggerElementRect, castedElementRect, offset, alignment);
  } else if (position === "left") {
    return handleLeftPosition(triggerElementRect, castedElementRect, offset, alignment);
  } else if (position === "right") {
    return handleRightPosition(triggerElementRect, castedElementRect, offset, alignment);
  } else {
    return handleTopPosition(triggerElementRect, castedElementRect, offset, alignment);
  }
};

const handleBottomPosition = (
  triggerElementRect: DOMRect,
  castedElementRect: DOMRect,
  offset: number,
  alignment: Alignment,
) => {
  const top = triggerElementRect.bottom + offset + window.scrollY;
  let left = 0;

  if (alignment === "start") {
    left = triggerElementRect.left + window.scrollX;
  } else if (alignment === "end") {
    left = triggerElementRect.right - castedElementRect.width + window.scrollX;
  } else {
    left = triggerElementRect.left + triggerElementRect.width / 2 - castedElementRect.width / 2 + window.scrollX;
  }

  return { top, left };
};

const handleLeftPosition = (
  triggerElementRect: DOMRect,
  castedElementRect: DOMRect,
  offset: number,
  alignment: Alignment,
) => {
  const left = triggerElementRect.left - castedElementRect.width - offset + window.scrollX;
  let top = 0;

  if (alignment === "start") {
    top = triggerElementRect.top + window.scrollY;
  } else if (alignment === "end") {
    top = triggerElementRect.bottom - castedElementRect.height + window.scrollY;
  } else {
    top = triggerElementRect.top + triggerElementRect.height / 2 - castedElementRect.height / 2 + window.scrollY;
  }

  return { top, left };
};

const handleRightPosition = (
  triggerElementRect: DOMRect,
  castedElementRect: DOMRect,
  offset: number,
  alignment: Alignment,
) => {
  const left = triggerElementRect.right + offset + window.scrollX;
  let top = 0;

  if (alignment === "start") {
    top = triggerElementRect.top + window.scrollY;
  } else if (alignment === "end") {
    top = triggerElementRect.bottom - castedElementRect.height + window.scrollY;
  } else {
    top = triggerElementRect.top + triggerElementRect.height / 2 - castedElementRect.height / 2 + window.scrollY;
  }

  return { top, left };
};

const handleTopPosition = (
  triggerElementRect: DOMRect,
  castedElementRect: DOMRect,
  offset: number,
  alignment: Alignment,
) => {
  const top = triggerElementRect.top - castedElementRect.height - offset + window.scrollY;

  let left = 0;

  if (alignment === "start") {
    left = triggerElementRect.left + window.scrollX;
  } else if (alignment === "end") {
    left = triggerElementRect.right - castedElementRect.width + window.scrollX;
  } else {
    left = triggerElementRect.left + triggerElementRect.width / 2 - castedElementRect.width / 2 + window.scrollX;
  }

  return { top, left };
};
