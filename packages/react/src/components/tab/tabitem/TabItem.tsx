import { TabItemProps as CoreTabItemProps } from "@design-system-rte/core/components/tab/tab.interface";
import {
  ARROW_DOWN_KEY,
  ARROW_LEFT_KEY,
  ARROW_RIGHT_KEY,
  ARROW_UP_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard.constants";
import { HTMLAttributes, useCallback, useEffect, useRef, useState, MouseEvent, KeyboardEvent, forwardRef } from "react";

import Badge from "../../badge/Badge";
import Icon from "../../icon/Icon";

import style from "./TabItem.module.scss";

interface TabItemProps extends CoreTabItemProps, Omit<HTMLAttributes<HTMLButtonElement>, "id" | "onClick"> {
  onClick: (event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => void;
}

const TabItem = forwardRef<HTMLButtonElement, TabItemProps>(
  (
    {
      id,
      panelId,
      label,
      isSelected,
      showBadge,
      badgeCount,
      badgeContent = "empty",
      badgeIcon,
      onClick,
      icon,
      badgeType = "indicator",
      compactSpacing,
      direction,
      disabled,
      inverted,
      ...props
    },
    ref,
  ) => {
    const badgeProps = {
      count: badgeCount,
      content: badgeContent,
      icon: badgeIcon,
      badgeType,
    };

    const hasNumberBadge = badgeCount && badgeCount > 0 && badgeContent === "number";
    const hasIconBadge = badgeContent === "icon" && badgeIcon;
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
        setHoverIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
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
      const isVertical = direction === "vertical";

      const isDownKeyPressed = isVertical && event.key === ARROW_DOWN_KEY;
      const isUpKeyPressed = isVertical && event.key === ARROW_UP_KEY;
      const isRightKeyPressed = !isVertical && event.key === ARROW_RIGHT_KEY;
      const isLeftKeyPressed = !isVertical && event.key === ARROW_LEFT_KEY;

      const isArrowNext = isDownKeyPressed || isRightKeyPressed;
      const isArrowPrev = isUpKeyPressed || isLeftKeyPressed;

      if (isArrowNext || isArrowPrev) {
        event.preventDefault();
        focusItem(isArrowNext ? "next" : "previous");
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

    const updateIndicator = useCallback(() => {
      if (tabItemRef.current && !isSelected) {
        if (direction === "horizontal") {
          setHoverIndicatorStyle((prev) => ({
            ...prev,
            width: tabItemRef.current?.offsetWidth,
            left: tabItemRef.current?.offsetLeft ?? 0,
            top: (tabItemRef.current?.offsetTop ?? 0) + (tabItemRef.current?.offsetHeight ?? 0),
          }));
        } else {
          setHoverIndicatorStyle((prev) => ({
            ...prev,
            left: 0,
            top: tabItemRef.current?.offsetTop,
            height: tabItemRef.current?.offsetHeight,
          }));
        }
      }
    }, [isSelected, direction]);

    useEffect(() => {
      updateIndicator();
      window.addEventListener("resize", updateIndicator);
      if (tabItemRef.current?.parentElement) {
        tabItemRef.current.parentElement.addEventListener("scroll", updateIndicator);
      }
      return () => {
        window.removeEventListener("resize", updateIndicator);
        if (tabItemRef.current && tabItemRef.current.parentElement) {
          tabItemRef.current.parentElement.removeEventListener("scroll", updateIndicator);
        }
      };
    }, [updateIndicator]);

    useEffect(() => {
      if (tabItemRef.current) {
        if (direction === "horizontal") {
          setHoverIndicatorStyle({
            width: tabItemRef.current.offsetWidth,
            left: tabItemRef.current.offsetLeft - (tabItemRef.current.parentElement?.scrollLeft ?? 0),
            top: tabItemRef.current.offsetTop + tabItemRef.current.offsetHeight,
            opacity: 0,
          });
        } else {
          setHoverIndicatorStyle({
            left: 0,
            top: tabItemRef.current.offsetTop,
            height: tabItemRef.current.offsetHeight,
            opacity: 0,
          });
        }
      }
    }, [direction]);

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
          data-direction={direction}
          data-inverted={inverted}
          onClick={handleOnClick}
          data-compact-spacing={compactSpacing}
          ref={(node) => {
            tabItemRef.current = node;
            if (typeof ref === "function") ref(node);
            else if (ref) ref.current = node;
          }}
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
  },
);

export default TabItem;
