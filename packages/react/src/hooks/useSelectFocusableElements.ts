import { FOCUSABLE_ELEMENTS_QUERY } from "@design-system-rte/core/constants/dom/dom.constants";
import { useEffect, useState } from "react";

export const useSelectFocusableElements = () => {
  const [focusableElements, setFocusableElements] = useState<HTMLElement[]>([]);

  useEffect(() => {
    const updateFocusable = () => {
      setFocusableElements(Array.from(document.querySelectorAll(FOCUSABLE_ELEMENTS_QUERY)) as HTMLElement[]);
    };

    updateFocusable();

    const observer = new MutationObserver(updateFocusable);
    observer.observe(document.body, { childList: true, subtree: true, attributes: true });

    return () => observer.disconnect();
  }, []);

  return focusableElements;
};
