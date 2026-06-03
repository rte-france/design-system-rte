import { resolveScrollDirection, ScrollDirectionState } from "@design-system-rte/core";
import { useEffect, useState } from "react";

const useHeaderScrollBehavior = ({ isSticky, showAtScrollUp }: { isSticky: boolean; showAtScrollUp: boolean }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const setupScrollBehavior = () => {
      if (!isSticky || !showAtScrollUp) {
        return () => {};
      }

      let scrollState: ScrollDirectionState = { lastScrollY: window.scrollY || 0, lastDirection: "up" };

      const onScroll = (): void => {
        const nextScrollY = window.scrollY || 0;
        scrollState = resolveScrollDirection(scrollState, nextScrollY, 2);

        if (nextScrollY <= 0) {
          setIsVisible(true);
          return;
        }

        setIsVisible(scrollState.lastDirection === "up");
      };

      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    };

    const cleanupScrollBehavior = setupScrollBehavior();
    return () => {
      cleanupScrollBehavior();
    };
  }, [isSticky, showAtScrollUp]);

  return { isVisible };
};

export default useHeaderScrollBehavior;
