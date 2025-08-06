import { SegmentedControlProps as CoreSegmentedControlProps } from "@design-system-rte/core/components/segmented-control/segmented-control.interface";
import { MutableRefObject, useEffect, useState } from "react";

import style from "../SegmentedControl.module.scss";

const useSelectedSegmentIndicatorStyle = (
  containerRef: MutableRefObject<HTMLDivElement | null>,
  options: CoreSegmentedControlProps["options"],
  selectedSegment?: string,
) => {
  const [sliderStyle, setSliderStyle] = useState<{ left: number; width: number }>({ left: 0, width: 0 });

  useEffect(() => {
    function updateSlider() {
      if (!containerRef.current) return;
      const idx = options.findIndex((opt) => opt.id === selectedSegment);
      if (idx === -1) return;

      const segmentNodes = containerRef.current.querySelectorAll(`.${style.segment}`);
      const node = segmentNodes[idx] as HTMLElement;

      if (node) {
        setSliderStyle({
          left: node.offsetLeft,
          width: node.offsetWidth,
        });
      }
    }
    updateSlider();
    window.addEventListener("resize", updateSlider);
    return () => {
      window.removeEventListener("resize", updateSlider);
    };
  }, [selectedSegment, options, containerRef]);

  return sliderStyle;
};

export default useSelectedSegmentIndicatorStyle;
