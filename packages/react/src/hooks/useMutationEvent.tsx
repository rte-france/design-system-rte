import { useEffect } from "react";

const useMutationEvent = (container: HTMLElement = document.body, callback: () => void) => {
  useEffect(() => {
    if (container === null) return;
    const observer = new MutationObserver(callback);
    observer.observe(container, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [callback, container]);
};

export default useMutationEvent;
