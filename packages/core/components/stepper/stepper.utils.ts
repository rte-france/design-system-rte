import { FOCUSABLE_ELEMENTS_QUERY } from "../../constants/dom/dom.constants";

export const focusNextStepElement = (currentFocusSteppedIndex: number, allSteps: HTMLElement[]) => {
  let nextIndex = currentFocusSteppedIndex === allSteps.length - 1 ? 0 : currentFocusSteppedIndex + 1;

  while (allSteps[nextIndex]?.getAttribute("aria-disabled") === "true") {
    if (nextIndex === allSteps.length - 1) {
      nextIndex = 0;
    } else {
      nextIndex++;
    }
  }
  (allSteps[nextIndex] as HTMLElement).focus();
};

export const focusPreviousStepElement = (currentFocusSteppedIndex: number, allSteps: HTMLElement[]) => {
  let previousIndex = currentFocusSteppedIndex === 0 ? allSteps.length - 1 : currentFocusSteppedIndex - 1;

  while (allSteps[previousIndex]?.getAttribute("aria-disabled") === "true") {
    if (previousIndex === 0) {
      previousIndex = allSteps.length - 1;
    } else {
      previousIndex--;
    }
  }

  (allSteps[previousIndex] as HTMLElement).focus();
};

export const focusNextNotStepElement = (classCriteria: string, parent: HTMLElement) => {
  const currentActiveSegmentElement = document.activeElement;
  const allFocusableElement = Array.from(document.querySelectorAll(FOCUSABLE_ELEMENTS_QUERY)) as HTMLElement[];
  const currentActiveSegmentElementIndex = Array.from(allFocusableElement).indexOf(
    currentActiveSegmentElement as HTMLElement,
  );
  let nextIndex =
    currentActiveSegmentElementIndex === allFocusableElement.length - 1 ? 0 : currentActiveSegmentElementIndex + 1;
  while (allFocusableElement[nextIndex]?.classList.contains(classCriteria)) {
    if (parent?.contains(allFocusableElement[nextIndex])) {
      if (nextIndex === allFocusableElement.length - 1) {
        nextIndex = 0;
      } else {
        nextIndex++;
      }
    } else {
      break;
    }
  }
  allFocusableElement[nextIndex].focus();
};

export const focusPreviousNotStepElement = (classCriteria: string, parent: HTMLElement) => {
  const currentActiveSegmentElement = document.activeElement;
  const allFocusableElement = Array.from(document.querySelectorAll(FOCUSABLE_ELEMENTS_QUERY)) as HTMLElement[];
  const currentActiveSegmentElementIndex = Array.from(allFocusableElement).indexOf(
    currentActiveSegmentElement as HTMLElement,
  );
  let previousIndex =
    currentActiveSegmentElementIndex === 0 ? allFocusableElement.length - 1 : currentActiveSegmentElementIndex - 1;
  while (allFocusableElement[previousIndex]?.classList.contains(classCriteria)) {
    console.log(allFocusableElement[previousIndex]);
    if (parent?.contains(allFocusableElement[previousIndex])) {
      if (previousIndex === 0) {
        previousIndex = allFocusableElement.length - 1;
      } else {
        previousIndex--;
      }
    } else {
      break;
    }
  }
  allFocusableElement[previousIndex].focus();
};
