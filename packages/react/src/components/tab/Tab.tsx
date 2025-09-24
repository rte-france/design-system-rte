import { MutableRefObject, useRef } from "react";

import useSelectedIndicatorPosition from "../../hooks/useSelectedIndicatorPosition";

import style from "./Tab.module.scss";
import TabItem from "./tabitem/TabItem";

interface TabProps {
  options: {
    id: string;
    panelId: string;
    label?: string;
    selected?: boolean;
    icon?: string;
    badgeCount?: number;
    badgeAppearance?: "text" | "icon";
    badgeIcon?: string;
  }[];
  onChange: (id: string) => void;
  direction?: "horizontal" | "vertical";
  alignment?: "start" | "center";
  selectedTabId?: string;
  compactSpacing?: boolean;
}

const Tab = ({
  options,
  onChange,
  direction = "horizontal",
  alignment = "start",
  selectedTabId,
  compactSpacing,
}: TabProps) => {
  const containerRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);

  const sliderStyle = useSelectedIndicatorPosition(
    containerRef,
    selectedTabId,
    direction === "horizontal" ? "bottom" : "left",
  );

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {
    const target = event.currentTarget;
    const id = target.getAttribute("id") || "";
    onChange(id);
  };

  return (
    <div
      role="tablist"
      aria-label="Sample Tabs"
      className={style["tab-container"]}
      ref={containerRef}
      data-alignment={alignment}
      data-direction={direction}
    >
      <span
        className={style["segment-selected-indicator"]}
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
};

export default Tab;
