import { FOCUSABLE_ELEMENTS_QUERY } from "@design-system-rte/core/constants/dom/dom.constants";

const focusStepElement = (currentFocusSteppedIndex: number, allSteps: HTMLElement[], direction: 1 | -1) => {
  let nextIndex = currentFocusSteppedIndex;

  for (let visitedSteps = 0; visitedSteps < allSteps.length; visitedSteps++) {
    nextIndex = (nextIndex + direction + allSteps.length) % allSteps.length;
    const step = allSteps[nextIndex];

    if (!step.matches(":disabled") && step.getAttribute("aria-disabled") !== "true") {
      step.focus();
      return;
    }
  }
};

export const focusNextStepElement = (currentFocusSteppedIndex: number, allSteps: HTMLElement[]) => {
  focusStepElement(currentFocusSteppedIndex, allSteps, 1);
};

export const focusPreviousStepElement = (currentFocusSteppedIndex: number, allSteps: HTMLElement[]) => {
  focusStepElement(currentFocusSteppedIndex, allSteps, -1);
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

export const isStepClickable = (stepConfig: { completionState: string; clickableCompleteStep: boolean }) => {
  const { completionState, clickableCompleteStep } = stepConfig;
  return (
    (completionState === "complete" && clickableCompleteStep) ||
    completionState === "unvisited" ||
    completionState === "incomplete"
  );
};
