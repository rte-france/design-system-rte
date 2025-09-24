import { BadgeAppearance, BadgeType } from "@design-system-rte/core/components/badge/badge.interface";
import { ARROW_LEFT_KEY, ARROW_RIGHT_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";
import { useCallback, useEffect, useRef, useState } from "react";

import Badge from "../../badge/Badge";
import Icon from "../../icon/Icon";

import style from "./TabItem.module.scss";

interface TabItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  id: string;
  panelId: string;
  label?: string;
  isSelected?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => void;
  icon?: string;
  badgeCount?: number;
  badgeAppearance?: BadgeAppearance;
  badgeIcon?: string;
  badgeType?: BadgeType;
  compactSpacing?: boolean;
  direction?: "horizontal" | "vertical";
}

const TabItem = ({
  id,
  panelId,
  label,
  isSelected,
  badgeCount,
  badgeAppearance,
  badgeIcon,
  onClick,
  icon,
  badgeType = "indicator",
  compactSpacing,
  direction,
  ...props
}: TabItemProps) => {
  const shouldDisplayBadge = badgeCount || (badgeIcon && badgeAppearance === "icon");
  const badgeProps = {
    count: badgeCount,
    appearance: badgeAppearance,
    icon: badgeIcon,
    badgeType,
  };

  const tabItemRef = useRef<HTMLButtonElement | null>(null);

  const [hoverIndicatorStyle, setHoverIndicatorStyle] = useState<{
    width?: number;
    left?: number;
    top?: number;
    height?: number;
    opacity?: number;
  } | null>(null);

  const handleHover = useCallback(
    (event: string) => {
      if (tabItemRef.current && !isSelected) {
        if (event === "mouseover") {
          setHoverIndicatorStyle((prev) => ({
            ...prev,
            opacity: 1,
          }));
        } else {
          setHoverIndicatorStyle((prev) => ({
            ...prev,
            opacity: 0,
          }));
        }
      }
    },
    [isSelected],
  );

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if ([ARROW_LEFT_KEY, ARROW_RIGHT_KEY].includes(event.key)) {
      event.preventDefault();
      if (event.key === ARROW_RIGHT_KEY) {
        focusItem("next");
      } else {
        focusItem("previous");
      }
    }
  };

  const focusItem = (direction: "next" | "previous") => {
    const parent = tabItemRef.current?.parentElement;
    if (!parent) return;
    const allTabItems = Array.from(parent.querySelectorAll(`.${style.tabitem}`)) as HTMLElement[];
    const currentIndex = allTabItems.findIndex((tab) => tab === document.activeElement);
    let newIndex;
    if (direction === "next") {
      newIndex = (currentIndex + 1) % allTabItems.length;
    } else {
      newIndex = (currentIndex - 1 + allTabItems.length) % allTabItems.length;
    }
    allTabItems[newIndex].focus();
    allTabItems[newIndex].click();
  };

  useEffect(() => {
    if (tabItemRef.current) {
      console.log(direction);
      if (direction === "horizontal") {
        setHoverIndicatorStyle({
          width: tabItemRef.current.offsetWidth,
          left: tabItemRef.current.offsetLeft,
          top: tabItemRef.current.offsetTop + tabItemRef.current.offsetHeight,
          opacity: 0,
        });
      } else {
        console.log("vertical");
        setHoverIndicatorStyle({
          left: tabItemRef.current.offsetLeft - 2,
          top: tabItemRef.current.offsetTop,
          height: tabItemRef.current.offsetHeight,
          opacity: 0,
        });
      }
    }
  }, [isSelected, direction]);

  return (
    <>
      <button
        id={id}
        className={style["tabitem"]}
        role="tab"
        aria-selected={isSelected}
        aria-controls={panelId}
        tabIndex={isSelected ? 0 : -1}
        data-selected={isSelected}
        onClick={onClick}
        data-compact-spacing={compactSpacing}
        ref={tabItemRef}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => handleHover("mouseover")}
        onMouseLeave={() => handleHover("mouseleave")}
        {...(isSelected && { "data-testid": "tabitem-selected" })}
        {...props}
      >
        {icon && <Icon name={icon} appearance={isSelected ? "filled" : "outlined"} />}
        {label && <span>{label}</span>}
        {shouldDisplayBadge && <Badge {...badgeProps} />}
      </button>
      <span
        className={style["segment-hover-indicator"]}
        style={{
          width: hoverIndicatorStyle?.width,
          height: hoverIndicatorStyle?.height,
          left: hoverIndicatorStyle?.left,
          top: hoverIndicatorStyle?.top,
          opacity: hoverIndicatorStyle?.opacity,
        }}
      />
    </>
  );
};

export default TabItem;
