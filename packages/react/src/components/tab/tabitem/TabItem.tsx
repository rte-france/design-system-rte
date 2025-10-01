import { TabItemProps as CoreTabItemProps } from "@design-system-rte/core/components/tab/tab.interface";
import { ARROW_LEFT_KEY, ARROW_RIGHT_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";
import { HTMLAttributes, useCallback, useEffect, useRef, useState, MouseEvent, KeyboardEvent } from "react";

import Badge from "../../badge/Badge";
import Icon from "../../icon/Icon";

import style from "./TabItem.module.scss";

interface TabItemProps extends CoreTabItemProps, Omit<HTMLAttributes<HTMLButtonElement>, "id" | "onClick"> {
  onClick: (event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => void;
}

const TabItem = ({
  id,
  panelId,
  label,
  isSelected,
  showBadge,
  badgeCount,
  badgeAppearance = "empty",
  badgeIcon,
  onClick,
  icon,
  badgeType = "indicator",
  compactSpacing,
  direction,
  disabled,
  ...props
}: TabItemProps) => {
  const badgeProps = {
    count: badgeCount,
    appearance: badgeAppearance,
    icon: badgeIcon,
    badgeType,
  };

  const hasNumberBadge = badgeCount && badgeCount > 0 && badgeAppearance === "text";
  const hasIconBadge = badgeAppearance === "icon" && badgeIcon;
  const displayBadge = !disabled && (showBadge || hasNumberBadge || hasIconBadge);
  const tabItemRef = useRef<HTMLButtonElement | null>(null);

  const [hoverIndicatorStyle, setHoverIndicatorStyle] = useState<{
    width?: number;
    left?: number;
    top?: number;
    height?: number;
    opacity?: number;
  } | null>(null);

  const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      onClick(event);
    } else {
      event.preventDefault();
    }
  };

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

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
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
    let newIndex = computeNextItemIndex(currentIndex, allTabItems.length, direction);
    let counter = 0;
    const maxIterations = allTabItems.length;
    while (allTabItems[newIndex].getAttribute("data-disabled") === "true" && counter < maxIterations) {
      newIndex = computeNextItemIndex(newIndex, allTabItems.length, direction);
      counter++;
    }
    allTabItems[newIndex].focus();
    allTabItems[newIndex].click();
  };

  const computeNextItemIndex = (currentIndex: number, totalItems: number, direction: "next" | "previous") => {
    return direction === "next" ? (currentIndex + 1) % totalItems : (currentIndex - 1 + totalItems) % totalItems;
  };

  useEffect(() => {
    if (tabItemRef.current) {
      if (direction === "horizontal") {
        setHoverIndicatorStyle({
          width: tabItemRef.current.offsetWidth,
          left: tabItemRef.current.offsetLeft,
          top: tabItemRef.current.offsetTop + tabItemRef.current.offsetHeight,
          opacity: 0,
        });
      } else {
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
        aria-disabled={disabled}
        tabIndex={isSelected ? 0 : -1}
        data-selected={isSelected}
        data-disabled={disabled}
        onClick={handleOnClick}
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
        {displayBadge && <Badge {...badgeProps} />}
      </button>
      <span
        data-disabled={disabled}
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
