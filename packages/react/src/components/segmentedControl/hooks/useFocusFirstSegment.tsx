import { useEffect } from "react";

import style from "../SegmentedControl.module.scss";

const useFocusFirstSegment = (ref: React.RefObject<HTMLDivElement>) => {
  useEffect(() => {
    const segmentRef = ref.current;

    if (!segmentRef) return;

    let lastKey = "";
    const handleKeyDown = (e: KeyboardEvent) => {
      lastKey = e.key;
    };
    window.addEventListener("keydown", handleKeyDown);

    const focusFirstSegmentElement = () => {
      if (lastKey === "Tab") {
        const segmentedControlElement = segmentRef.parentElement?.parentElement;
        const allSegmentElements = Array.from(
          segmentedControlElement?.querySelectorAll("." + style.segment) ?? [],
        ) as HTMLElement[];
        allSegmentElements[0]?.focus();
      }
    };

    ref.current?.addEventListener("focus", focusFirstSegmentElement);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      segmentRef.removeEventListener("focus", focusFirstSegmentElement);
    };
  }, [ref]);
};

export default useFocusFirstSegment;
