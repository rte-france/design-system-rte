import { useCallback, useEffect, useState } from "react";

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
): IndicatorStyle => {
  const [indicatorStyle, setIndicatorStyle] = useState<IndicatorStyle>({ left: 0, bottom: 0, width: 0 });

  const updateIndicator = useCallback(() => {
    if (!containerRef.current) return;
    const node = containerRef.current.querySelector(`#${selectedId}`) as HTMLElement | undefined;

    if (node && node?.getAttribute("data-disabled") !== "true") {
      const containerRect = containerRef.current.getBoundingClientRect();
      const nodeRect = node.getBoundingClientRect();
      if (position === "bottom") {
        setIndicatorStyle({ left: nodeRect.left - containerRect.left, bottom: 0, width: nodeRect.width });
      } else if (position === "left") {
        setIndicatorStyle({
          left: 0,
          top: nodeRect.top - containerRect.top,
          height: nodeRect.height,
          width: 2,
        });
      } else {
        setIndicatorStyle({
          left: nodeRect.left - containerRect.left,
          top: nodeRect.top - containerRect.top,
          width: nodeRect.width,
        });
      }
    }
  }, [selectedId, containerRef, position]);

  useEffect(() => {
    const containerRefCurrent = containerRef.current;
    if (!containerRefCurrent) return;
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    containerRefCurrent.addEventListener("scroll", updateIndicator);
    return () => {
      window.removeEventListener("resize", updateIndicator);
      containerRefCurrent.removeEventListener("scroll", updateIndicator);
    };
  }, [selectedId, containerRef, updateIndicator]);

  return indicatorStyle;
};

export default useSelectedIndicatorPosition;
