import { useEffect, RefObject } from "react";

const useFocusCurrentStep = (ref: RefObject<HTMLLIElement>) => {
  useEffect(() => {
    const stepRef = ref.current;
    const button = stepRef?.querySelector("button");

    if (!button) return;

    let lastKey = "";
    const handleKeyDown = (e: KeyboardEvent) => {
      lastKey = e.key;
    };
    window.addEventListener("keydown", handleKeyDown);

    const focusCurrentSegmentElement = () => {
      if (lastKey === "Tab") {
        const stepper = stepRef?.parentElement;
        const selectedStepElement = stepper?.querySelector('[aria-current="step"] button') as HTMLElement;
        if (selectedStepElement) {
          selectedStepElement.focus();
        }
      }
    };

    button.addEventListener("focus", focusCurrentSegmentElement);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      button.removeEventListener("focus", focusCurrentSegmentElement);
    };
  }, [ref]);
};

export default useFocusCurrentStep;
