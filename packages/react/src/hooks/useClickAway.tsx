import { useEffect } from "react";

export const useClickAway = <TElement extends HTMLElement>(onClickAway: () => void, ...elements: TElement[]) => {
  useEffect(() => {
    function handleClickAway(event: MouseEvent) {
      if (elements.length === 0 || elements.some((element) => !element)) return;
      const shouldIgnore = elements.some((element) => element.contains(event.target as Node));
      if (!shouldIgnore) {
        onClickAway();
      }
    }
    document.addEventListener("mousedown", handleClickAway);
    return () => document.removeEventListener("mousedown", handleClickAway);
  }, [onClickAway, elements]);
};
