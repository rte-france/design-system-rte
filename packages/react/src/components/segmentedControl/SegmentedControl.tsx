import {
  getSegmentPosition,
  isValidSegmentedControlOptions,
} from "@design-system-rte/core/components/segmented-control/segmented-control-utils";
import { SegmentedControlProps as CoreSegmentedControlProps } from "@design-system-rte/core/components/segmented-control/segmented-control.interface";
import { forwardRef, MutableRefObject, useRef } from "react";

import useSelectedIndicatorPosition from "../../hooks/useSelectedIndicatorPosition";

import Segment from "./Segment";
import style from "./SegmentedControl.module.scss";

interface SegmentedControlProps
  extends CoreSegmentedControlProps, Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  onChange: (id: string) => void;
}

const SegmentedControl = forwardRef<HTMLDivElement, SegmentedControlProps>(
  ({ options, onChange, selectedSegment, ...props }, ref) => {
    const containerRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
    const sliderStyle = useSelectedIndicatorPosition(containerRef, selectedSegment);

    const handleOnClick = (event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => {
      const target = event.currentTarget as HTMLDivElement;
      const id = target.getAttribute("id") || "";
      onChange(id);
    };

    if (!isValidSegmentedControlOptions(options)) {
      return null;
    }

    return (
      <div
        ref={(node) => {
          containerRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        role="radiogroup"
        className={style["segmented-control"]}
        {...props}
      >
        <span
          className={style["segment-selected-indicator"]}
          style={{ left: sliderStyle.left, top: sliderStyle.top, width: sliderStyle.width }}
        />
        {options.map((option, index) => (
          <Segment
            key={`${option.id}-${index}`}
            position={getSegmentPosition(index, options.length)}
            onClick={handleOnClick}
            isSelected={selectedSegment === option.id}
            {...option}
          />
        ))}
      </div>
    );
  },
);

export default SegmentedControl;
