export const getAutoPlacement = (
  hostElement: HTMLElement,
  castedElement: Element,
  defaultPosition: string,
  offset: number = 0,
) => {
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

export const getCoordinates = (
  position: string,
  triggerElement: HTMLElement,
  castedElement: HTMLElement,
  offset: number = 0,
  alignment: "start" | "center" | "end" = "center",
) => {
  let top = 0;
  let left = 0;
  if (position === "bottom") {
    top = triggerElement.getBoundingClientRect().bottom + offset;
    left =
      triggerElement.getBoundingClientRect().left +
      triggerElement.getBoundingClientRect().width / 2 -
      castedElement.getBoundingClientRect().width / 2;
  } else if (position === "left") {
    top =
      triggerElement.getBoundingClientRect().top +
      triggerElement.getBoundingClientRect().height / 2 -
      castedElement.getBoundingClientRect().height / 2;
    left = triggerElement.getBoundingClientRect().left - castedElement.getBoundingClientRect().width - offset;
  } else if (position === "right") {
    if (alignment === "start") {
      top = triggerElement.getBoundingClientRect().top;
    } else if (alignment === "end") {
      top = triggerElement.getBoundingClientRect().bottom - castedElement.getBoundingClientRect().height;
    } else
      top =
        triggerElement.getBoundingClientRect().top +
        triggerElement.getBoundingClientRect().height / 2 -
        castedElement.getBoundingClientRect().height / 2;
    left = triggerElement.getBoundingClientRect().right + offset;
  } else if (position === "top" || !position) {
    top = triggerElement.getBoundingClientRect().top - castedElement.getBoundingClientRect().height - offset;
    left =
      triggerElement.getBoundingClientRect().left +
      triggerElement.getBoundingClientRect().width / 2 -
      castedElement.getBoundingClientRect().width / 2;
  }

  return {
    top,
    left,
  };
};
