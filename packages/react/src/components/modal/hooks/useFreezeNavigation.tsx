import { useEffect } from "react";

const useFreezeNavigation = (isOpen: boolean) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);
};

export default useFreezeNavigation;
