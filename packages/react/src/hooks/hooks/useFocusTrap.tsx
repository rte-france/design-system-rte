import { FOCUSABLE_ELEMENTS_QUERY } from "@design-system-rte/core/constants/dom/dom.constants";
import { useEffect } from "react";

export const useFocusTrap = <TElement extends HTMLElement>(containerElement?: TElement, shouldRender?: boolean) => {
  useEffect(() => {
    if (!shouldRender || !containerElement) {
      return;
    }

    const focusable = containerElement.querySelectorAll(FOCUSABLE_ELEMENTS_QUERY);

    if (focusable.length > 0) (focusable[0] as HTMLElement).focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Tab") {
        const first = focusable[0] as HTMLElement;
        const last = focusable[focusable.length - 1] as HTMLElement;
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    containerElement.addEventListener("keydown", handleKeyDown);
    return () => containerElement.removeEventListener("keydown", handleKeyDown);
  }, [containerElement, shouldRender]);
};
