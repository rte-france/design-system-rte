import { TabProps as CoreTabProps } from "@design-system-rte/core/components/tab/tab.interface";
import { forwardRef, HTMLAttributes, MutableRefObject, useRef, MouseEvent, KeyboardEvent, useEffect } from "react";

import useSelectedIndicatorPosition from "../../hooks/useSelectedIndicatorPosition";

import style from "./Tab.module.scss";
import TabItem from "./tabitem/TabItem";

interface TabProps extends CoreTabProps, Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  onChange: (id: string) => void;
}

const Tab = forwardRef<HTMLDivElement, TabProps>(
  ({ options, onChange, direction = "horizontal", alignment = "start", selectedTabId, compactSpacing }, ref) => {
    const containerRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);

    const sliderStyle = useSelectedIndicatorPosition(
      containerRef,
      selectedTabId,
      direction === "horizontal" ? "bottom" : "left",
    );

    useEffect(() => {
      if (!selectedTabId && options.length > 0) {
        onChange(options[0].id);
      }
    }, [selectedTabId, options, onChange]);

    const handleOnClick = (event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => {
      const target = event.currentTarget;
      const id = target.getAttribute("id") || "";
      onChange(id);
    };

    return (
      <div
        ref={(node) => {
          containerRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        role="tablist"
        aria-label="Sample Tabs"
        className={style["tab-container"]}
        data-alignment={alignment}
        data-direction={direction}
      >
        <span
          className={style["tab-selected-indicator"]}
          style={{ left: sliderStyle.left, width: sliderStyle.width, top: sliderStyle.top, height: sliderStyle.height }}
        />
        {options.map((option, index) => (
          <TabItem
            key={`${option.id}-${index}`}
            onClick={handleOnClick}
            isSelected={selectedTabId === option.id}
            compactSpacing={compactSpacing}
            direction={direction}
            {...option}
          />
        ))}
      </div>
    );
  },
);

export default Tab;
