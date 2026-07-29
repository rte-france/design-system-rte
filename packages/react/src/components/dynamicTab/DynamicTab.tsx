import { BadgeHolderProps } from "@design-system-rte/core";
import { MutableRefObject, useRef } from "react";

import useSelectedIndicatorPosition from "../../hooks/useSelectedIndicatorPosition";

import styles from "./DynamicTab.module.scss";
import DynamicTabItem from "./dynamicTabItem/DynamicTabItem";

interface TabOption extends BadgeHolderProps {
  id: string;
  title: string;
  iconName?: string;
}

interface DynamicTabProps {
  appearance?: "neutral" | "brand";
  options?: TabOption[];
  selectedTabId?: string;
  onChange?: (selectedTabId: string) => void;
  onAddTab?: () => void;
  compactSpacing?: boolean;
}

const DynamicTab = ({ appearance = "neutral", options, selectedTabId, onChange, compactSpacing }: DynamicTabProps) => {
  const containerRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
  const sliderStyle = useSelectedIndicatorPosition(containerRef, selectedTabId, "bottom");

  return (
    <div className={styles["rte-dynamic-tab"]} ref={containerRef} data-appearance={appearance}>
      <div
        className={styles["rte-dynamic-tab__indicator"]}
        style={{
          left: sliderStyle.left,
          width: sliderStyle.width,
          top: sliderStyle.top,
          height: sliderStyle.height,
        }}
      ></div>
      {options?.map((option) => (
        <DynamicTabItem
          key={option.id}
          id={option.id}
          title={option.title}
          appearance={appearance}
          isActive={option.id === selectedTabId}
          onClick={() => onChange?.(option.id)}
          badgeContent={option.badgeContent}
          badgeCount={option.badgeCount}
          badgeIcon={option.badgeIcon}
          badgeType={option.badgeType}
          iconName={option.iconName}
          compactSpacing={compactSpacing}
        />
      ))}
    </div>
  );
};

export default DynamicTab;
