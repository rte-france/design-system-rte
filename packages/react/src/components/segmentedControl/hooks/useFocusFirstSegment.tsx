import { useEffect } from "react";

import style from "../SegmentedControl.module.scss";

const useFocusCurrentSegmentElement = (ref: React.RefObject<HTMLDivElement>) => {
  useEffect(() => {
    const segmentRef = ref.current;

    if (!segmentRef) return;

    let lastKey = "";
    const handleKeyDown = (e: KeyboardEvent) => {
      lastKey = e.key;
    };
    window.addEventListener("keydown", handleKeyDown);

    const focusCurrentSegmentElement = () => {
      if (lastKey === "Tab") {
        const segmentedControlElement = segmentRef.parentElement?.parentElement;
        const selectedSegmentElement = segmentedControlElement?.querySelector("[data-selected='true']") as HTMLElement;
        if (selectedSegmentElement) {
          selectedSegmentElement.focus();
        } else {
          const allSegmentElements = Array.from(
            segmentedControlElement?.querySelectorAll("." + style.segment) ?? [],
          ) as HTMLElement[];
          allSegmentElements[0]?.focus();
        }
      }
    };

    ref.current?.addEventListener("focus", focusCurrentSegmentElement);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      segmentRef.removeEventListener("focus", focusCurrentSegmentElement);
    };
  }, [ref]);
};

export default useFocusCurrentSegmentElement;
