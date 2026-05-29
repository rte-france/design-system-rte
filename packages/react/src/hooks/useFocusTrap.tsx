import { TAB_KEY } from "@design-system-rte/core";
import { FOCUSABLE_ELEMENTS_QUERY } from "@design-system-rte/core/constants/dom/dom.constants";
import { useEffect } from "react";

export const useFocusTrap = <TElement extends HTMLElement>(
  containerElement?: TElement,
  shouldRender?: boolean,
  shouldFocusFirst: boolean = true,
) => {
  useEffect(() => {
    if (!shouldRender || !containerElement) {
      return;
    }
    const focusable = containerElement.querySelectorAll(FOCUSABLE_ELEMENTS_QUERY) as NodeListOf<HTMLElement>;

    if (shouldFocusFirst && focusable.length > 0) (focusable[0] as HTMLElement).focus({ preventScroll: true });

    const handleKeyDown = (event: KeyboardEvent) => {
      const focusable = containerElement.querySelectorAll(FOCUSABLE_ELEMENTS_QUERY) as NodeListOf<HTMLElement>;
      if (event.key === TAB_KEY) {
        const first = focusable[0] as HTMLElement;
        const last = focusable[focusable.length - 1] as HTMLElement;
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        } else {
          return;
        }
      }
    };
    containerElement.addEventListener("keydown", handleKeyDown);
    return () => containerElement.removeEventListener("keydown", handleKeyDown);
  }, [containerElement, shouldRender, shouldFocusFirst]);
};
