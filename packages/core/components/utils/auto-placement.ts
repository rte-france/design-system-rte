export const getAutoPlacement = (
  hostElement: HTMLElement,
  castedElement: Element,
  defaultPosition: string,
  offset: number = 0,
) => {
  const triggerRect = hostElement.getBoundingClientRect();
  const castedElementRect = castedElement.getBoundingClientRect();
  const triggerParent = hostElement.parentElement;

  if (!triggerParent) {
    return defaultPosition;
  }

  const parentRect = triggerParent.getBoundingClientRect();
  const sides = {
    top: triggerRect.top - parentRect.top > castedElementRect.height + offset,
    right: parentRect.right - triggerRect.right > castedElementRect.width + offset,
    bottom: parentRect.bottom - triggerRect.bottom >= castedElementRect.height + offset,
    left: triggerRect.left - parentRect.left > castedElementRect.width + offset,
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
) => {
  let top = 0;
  let left = 0;

  if (position === "bottom") {
    console.log("ici");
    top = triggerElement.getBoundingClientRect().bottom + window.scrollY + offset;
    left =
      triggerElement.getBoundingClientRect().left +
      window.scrollX +
      triggerElement.getBoundingClientRect().width / 2 -
      castedElement.getBoundingClientRect().width / 2;
  } else if (position === "left") {
    top =
      triggerElement.getBoundingClientRect().top +
      window.scrollY +
      triggerElement.getBoundingClientRect().height / 2 -
      castedElement.getBoundingClientRect().height / 2;
    left =
      triggerElement.getBoundingClientRect().left +
      window.scrollX -
      castedElement.getBoundingClientRect().width -
      offset;
  } else if (position === "right") {
    top =
      triggerElement.getBoundingClientRect().top +
      window.scrollY +
      triggerElement.getBoundingClientRect().height / 2 -
      castedElement.getBoundingClientRect().height / 2;
    left = triggerElement.getBoundingClientRect().right + window.scrollX + offset;
  } else if (position === "top" || !position) {
    top =
      triggerElement.getBoundingClientRect().top +
      window.scrollY -
      castedElement.getBoundingClientRect().height -
      offset;
    left =
      triggerElement.getBoundingClientRect().left +
      window.scrollX +
      triggerElement.getBoundingClientRect().width / 2 -
      castedElement.getBoundingClientRect().width / 2;
  }

  return {
    top,
    left,
  };
};
