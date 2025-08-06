export const focusNextNotSegmentElement = (
  currentFocusedElementIndex: number,
  allFocusableElement: HTMLElement[],
  criteria: string,
) => {
  let nextIndex = currentFocusedElementIndex < allFocusableElement.length - 2 ? currentFocusedElementIndex + 1 : 0;
  while (allFocusableElement[nextIndex]?.classList.contains(criteria)) {
    if (nextIndex < allFocusableElement.length - 1) {
      nextIndex++;
    } else {
      nextIndex = 0;
    }
  }

  allFocusableElement[nextIndex].focus();
};

export const focusPreviousNotSegmentElement = (
  currentFocusedElementIndex: number,
  allFocusableElement: HTMLElement[],
  criteria: string,
) => {
  let previousIndex = currentFocusedElementIndex > 0 ? currentFocusedElementIndex - 1 : allFocusableElement.length - 1;

  while (allFocusableElement[previousIndex]?.classList.contains(criteria)) {
    if (previousIndex > 0) {
      previousIndex--;
    } else {
      previousIndex = allFocusableElement.length - 1;
    }
  }

  allFocusableElement[previousIndex].focus();
};

export const focusNextSegmentElement = (
  currentActiveSegmentElementIndex: number,
  allSegmentElements: HTMLElement[],
) => {
  const nextIndex =
    currentActiveSegmentElementIndex < allSegmentElements.length - 1 ? currentActiveSegmentElementIndex + 1 : 0;

  allSegmentElements[nextIndex].focus();
};

export const focusPreviousSegmentElement = (
  currentActiveSegmentElementIndex: number,
  allSegmentElements: HTMLElement[],
) => {
  const previousIndex =
    currentActiveSegmentElementIndex > 0 ? currentActiveSegmentElementIndex - 1 : allSegmentElements.length - 1;

  allSegmentElements[previousIndex].focus();
};
