import { getSegmentPosition } from "@design-system-rte/core/components/segmented-control/segmented-control-utils";
import {
  SegmentProps as CoreSegmentProps,
  SegmentedControlProps as CoreSegmentedControlProps,
} from "@design-system-rte/core/components/segmented-control/segmented-control.interface";
import { forwardRef, MutableRefObject, useRef } from "react";

import useSelectedSegmentIndicatorStyle from "./hooks/useSelectedSegmentIndicatorStyle";
import Segment from "./Segment";
import style from "./SegmentedControl.module.scss";

export interface SegmentProps extends CoreSegmentProps, Omit<React.HTMLAttributes<HTMLDivElement>, "id"> {
  onClick?: (event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void;
  parentRef?: MutableRefObject<HTMLDivElement | null>;
}

interface SegmentedControlProps
  extends CoreSegmentedControlProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  onChange: (id: string) => void;
}

const SegmentedControl = forwardRef<HTMLDivElement, SegmentedControlProps>(
  ({ options, onChange, selectedSegment, ...props }, ref) => {
    const containerRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
    const sliderStyle = useSelectedSegmentIndicatorStyle(containerRef, options, selectedSegment);

    const handleOnClick = (event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => {
      const target = event.currentTarget as HTMLDivElement;
      const id = target.getAttribute("id") || "";
      onChange(id);
    };

    if (options.length <= 1 || options.length > 3) {
      console.warn("SegmentedControl: 'options' should have 2 or 3 items.");
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
          style={{ left: sliderStyle.left, width: sliderStyle.width }}
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
