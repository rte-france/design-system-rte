import { useCallback, useEffect, useState } from "react";

import useElementResizeEvent from "./useElementResizeEvent";
import { useScrollEvent } from "./useScrollEvent";

interface IndicatorStyle {
  left: number;
  top?: number;
  bottom?: number;
  width?: number;
  height?: number;
}

const useSelectedIndicatorPosition = (
  containerRef: React.MutableRefObject<HTMLDivElement | null>,
  selectedId?: string,
  position?: "bottom" | "center" | "left",
): { indicatorStyle: IndicatorStyle; updateIndicator: () => void } => {
  const [indicatorStyle, setIndicatorStyle] = useState<IndicatorStyle>({ left: 0, bottom: 0, width: 0 });
  const [selectedElement, setSelectedElement] = useState<HTMLElement | null>(null);

  const updateIndicator = useCallback(() => {
    if (!containerRef.current) return;
    const node = containerRef.current.querySelector(`#${selectedId}`) as HTMLElement | undefined;

    if (node && node?.getAttribute("data-disabled") !== "true") {
      setSelectedElement(node);
      const containerRect = containerRef.current.getBoundingClientRect();
      const nodeRect = node.getBoundingClientRect();
      if (position === "bottom") {
        setIndicatorStyle({
          left: nodeRect.left - containerRect.left + containerRef.current.scrollLeft,
          bottom: 0,
          width: nodeRect.width,
        });
      } else if (position === "left") {
        setIndicatorStyle({
          left: 0,
          top: nodeRect.top - containerRect.top + containerRef.current.scrollTop,
          height: nodeRect.height,
          width: 2,
        });
      } else {
        setIndicatorStyle({
          left: nodeRect.left - containerRect.left + containerRef.current.scrollLeft,
          top: nodeRect.top - containerRect.top,
          width: nodeRect.width,
        });
      }
    }
  }, [selectedId, position]);

  useEffect(() => {
    const containerRefCurrent = containerRef.current;
    if (!containerRefCurrent) return;
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => {
      window.removeEventListener("resize", updateIndicator);
    };
  }, [selectedId, containerRef, updateIndicator]);

  useElementResizeEvent(containerRef.current, updateIndicator);
  useElementResizeEvent(selectedElement, updateIndicator);
  useScrollEvent(updateIndicator);

  return { indicatorStyle, updateIndicator };
};

export default useSelectedIndicatorPosition;
