import { useCallback, useEffect, useState } from "react";

const useSelectedIndicatorPosition = (
  containerRef: React.MutableRefObject<HTMLDivElement | null>,
  options: { id: string }[],
  selectedId?: string,
  position?: "bottom" | "center",
): {
  left: number;
  top: number;
  width: number;
} => {
  const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; top: number; width: number }>({
    left: 0,
    top: 0,
    width: 0,
  });

  const updateIndicator = useCallback(() => {
    if (!containerRef.current) return;
    const node = containerRef.current.querySelector(`#${selectedId}`) as HTMLElement | undefined;
    if (node)
      if (position === "bottom") {
        setIndicatorStyle({ left: node.offsetLeft, top: node.offsetTop + node.offsetHeight, width: node.offsetWidth });
      } else {
        setIndicatorStyle({ left: node.offsetLeft, top: node.offsetTop, width: node.offsetWidth });
      }
  }, [selectedId, options, containerRef]);

  useEffect(() => {
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => {
      window.removeEventListener("resize", updateIndicator);
    };
  }, [selectedId, options, containerRef, updateIndicator]);

  return indicatorStyle;
};

export default useSelectedIndicatorPosition;
