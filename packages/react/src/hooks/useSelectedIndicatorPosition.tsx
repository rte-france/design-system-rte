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
      if (position === "bottom") {
        setIndicatorStyle({ left: node.offsetLeft, bottom: 0, width: node.offsetWidth });
      } else if (position === "left") {
        setIndicatorStyle({
          left: 0,
          top: node.offsetTop,
          height: node.offsetHeight,
          width: 2,
        });
      } else {
        setIndicatorStyle({ left: node.offsetLeft, top: node.offsetTop, width: node.offsetWidth });
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
