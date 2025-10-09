export const scrollToSelectedTab = (
  target: HTMLElement,
  container: HTMLElement,
  scrollDirection: "horizontal" | "vertical",
) => {
  if (!isHiddenByOverflow(target, container, scrollDirection)) return;

  const containerClientRect = container.getBoundingClientRect();
  const targetClientRect = target.getBoundingClientRect();

  if (scrollDirection === "horizontal") {
    const newScroll = container.scrollLeft + computeHorizontalScroll(targetClientRect, containerClientRect);
    container.scrollTo({ left: newScroll, behavior: "smooth" });
  } else {
    const newScroll = container.scrollTop + computeVerticalScroll(targetClientRect, containerClientRect);
    container.scrollTo({ top: newScroll, behavior: "smooth" });
  }
};

const isHiddenByOverflow = (
  target: HTMLElement,
  container: HTMLElement,
  scrollDirection: "horizontal" | "vertical",
): boolean => {
  if (container && target) {
    const containerClientRect = container.getBoundingClientRect();
    const targetClientRect = target.getBoundingClientRect();
    const isHiddenLeft = targetClientRect.left < containerClientRect.left;
    const isHiddenRight = targetClientRect.right > containerClientRect.right;
    const isHiddenTop = targetClientRect.top < containerClientRect.top;
    const isHiddenBottom = targetClientRect.bottom > containerClientRect.bottom;
    if (scrollDirection === "horizontal") return isHiddenLeft || isHiddenRight;
    return isHiddenTop || isHiddenBottom;
  }
  return false;
};

const computeHorizontalScroll = (targetClientRect: DOMRect, containerClientRect: DOMRect) => {
  const overflowLeft = targetClientRect.left < containerClientRect.left;
  const overflowRight = targetClientRect.right > containerClientRect.right;
  if (overflowLeft) {
    return targetClientRect.left - containerClientRect.left;
  } else if (overflowRight) {
    return targetClientRect.right - containerClientRect.right;
  } else {
    return 0;
  }
};

const computeVerticalScroll = (targetClientRect: DOMRect, containerClientRect: DOMRect) => {
  const overflowTop = targetClientRect.top < containerClientRect.top;
  const overflowBottom = targetClientRect.bottom > containerClientRect.bottom;
  if (overflowTop) {
    return targetClientRect.top - containerClientRect.top;
  } else if (overflowBottom) {
    return targetClientRect.bottom - containerClientRect.bottom;
  } else {
    return 0;
  }
};
