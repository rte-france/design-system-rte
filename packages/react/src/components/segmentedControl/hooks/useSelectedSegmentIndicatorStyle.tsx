import { SegmentedControlProps as CoreSegmentedControlProps } from "@design-system-rte/core/components/segmented-control/segmented-control.interface";
import { MutableRefObject, useCallback, useEffect, useState } from "react";

import style from "../SegmentedControl.module.scss";

const useSelectedSegmentIndicatorStyle = (
  containerRef: MutableRefObject<HTMLDivElement | null>,
  options: CoreSegmentedControlProps["options"],
  selectedSegment?: string,
) => {
  const [sliderStyle, setSliderStyle] = useState<{ left: number; width: number }>({ left: 0, width: 0 });

  const updateSlider = useCallback(() => {
    if (!containerRef.current) return;
    const idx = options.findIndex((opt) => opt.id === selectedSegment);
    if (idx < 0) return;
    const node = containerRef.current.querySelectorAll(`.${style.segment}`)[idx] as HTMLElement | undefined;
    if (node) setSliderStyle({ left: node.offsetLeft, width: node.offsetWidth });
  }, [selectedSegment, options, containerRef]);

  useEffect(() => {
    updateSlider();
    window.addEventListener("resize", updateSlider);
    return () => {
      window.removeEventListener("resize", updateSlider);
    };
  }, [selectedSegment, options, containerRef, updateSlider]);

  return sliderStyle;
};

export default useSelectedSegmentIndicatorStyle;
