import {
  getSegmentPosition,
  getSegmentTabIndex,
  isValidSegmentedControlOptions,
} from "@design-system-rte/core/components/segmented-control/segmented-control-utils";
import { SegmentedControlProps as CoreSegmentedControlProps } from "@design-system-rte/core/components/segmented-control/segmented-control.interface";
import { forwardRef, MutableRefObject, useEffect, useRef, useState } from "react";

import useSelectedIndicatorPosition from "../../hooks/useSelectedIndicatorPosition";

import Segment from "./Segment";
import style from "./SegmentedControl.module.scss";

interface SegmentedControlProps
  extends CoreSegmentedControlProps, Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  onChange: (id: string) => void;
}

const SegmentedControl = forwardRef<HTMLDivElement, SegmentedControlProps>(
  ({ options, onChange, selectedSegment, appearance = "brand", isCompact = false, ...props }, ref) => {
    const containerRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
    const [isInitialAnimationDisabled, setIsInitialAnimationDisabled] = useState(true);
    const [focusedSegmentId, setFocusedSegmentId] = useState<string | null>(null);
    const { indicatorStyle } = useSelectedIndicatorPosition(containerRef, selectedSegment);

    useEffect(() => {
      const frameId = requestAnimationFrame(() => setIsInitialAnimationDisabled(false));
      return () => cancelAnimationFrame(frameId);
    }, []);

    const handleOnClick = (event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => {
      const target = event.currentTarget as HTMLDivElement;
      const id = target.getAttribute("id") || "";
      if (id === selectedSegment) {
        return;
      }
      onChange(id);
    };

    const handleSegmentGroupBlurCapture = (event: React.FocusEvent<HTMLDivElement>) => {
      const nextFocused = event.relatedTarget as Node | null;
      if (!containerRef.current?.contains(nextFocused)) {
        setFocusedSegmentId(null);
      }
    };

    const fallbackTabStopSegmentId = options[0]?.id;

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
        data-compact-spacing={isCompact}
        data-number-of-segments={options.length}
        onBlurCapture={handleSegmentGroupBlurCapture}
        {...props}
      >
        <span
          className={style["segment-selected-indicator"]}
          data-compact-spacing={isCompact}
          data-initial-animation-disabled={isInitialAnimationDisabled}
          style={{
            left: indicatorStyle.left,
            top: indicatorStyle.top,
            width: indicatorStyle.width,
          }}
        />
        {options.map((option, index) => (
          <Segment
            key={`${option.id}-${index}`}
            position={getSegmentPosition(index, options.length)}
            onClick={handleOnClick}
            isSelected={selectedSegment === option.id}
            appearance={appearance}
            isCompact={isCompact}
            segmentTabIndex={getSegmentTabIndex({
              segmentId: option.id,
              selectedSegmentId: selectedSegment,
              focusedSegmentId,
              fallbackTabStopSegmentId,
            })}
            onSegmentFocus={() => setFocusedSegmentId(option.id)}
            {...option}
          />
        ))}
      </div>
    );
  },
);

export default SegmentedControl;
