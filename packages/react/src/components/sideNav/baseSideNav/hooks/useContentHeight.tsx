import { ReactNode, RefObject, useLayoutEffect } from "react";

function useContentHeight(
  containerRef: RefObject<HTMLDivElement>,
  contentRef: RefObject<HTMLDivElement>,
  children?: ReactNode,
): void {
  useLayoutEffect(() => {
    const containerEl = containerRef.current;
    const contentEl = contentRef.current;
    if (!containerEl || !contentEl) return;

    const setHeightVar = () => {
      const height = contentEl.offsetHeight;
      containerEl.style.setProperty("--content-height", `${height}px`);
    };

    setHeightVar();

    const resizeObserver = new ResizeObserver(() => setHeightVar());
    resizeObserver.observe(contentEl);

    window.addEventListener("resize", setHeightVar);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", setHeightVar);
    };
  }, [children, containerRef, contentRef]);
}

export default useContentHeight;
