import { useEffect } from "react";

export const useScrollEvent = (callback: () => void) => {
  useEffect(() => {
    window.addEventListener("scroll", callback, true);
    return () => {
      window.removeEventListener("scroll", callback, true);
    };
  }, [callback]);
};
