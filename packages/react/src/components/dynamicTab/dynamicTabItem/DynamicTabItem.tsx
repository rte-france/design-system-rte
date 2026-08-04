import {
  ARROW_LEFT_KEY,
  ARROW_RIGHT_KEY,
  DynamicTabItemProps as CoreDynamicTabItemProps,
  ENTER_KEY,
  ESCAPE_KEY,
  SPACE_KEY,
  waitForNextFrame,
  getTextWidth,
} from "@design-system-rte/core";
import { RestrictToHorizontalAxis } from "@dnd-kit/abstract/modifiers";
import { useSortable } from "@dnd-kit/react/sortable";
import { useRef, KeyboardEvent, useState, useEffect, useCallback, HTMLAttributes } from "react";

import useAnimatedMount from "../../../hooks/useAnimatedMount";
import Badge from "../../badge/Badge";
import useDisplayTabItemElement from "../../dynamicTab/hooks/useDisplayTabItemElement";
import Icon from "../../icon/Icon";

import styles from "./DynamicTabItem.module.scss";

interface DynamicTabItemProps
  extends CoreDynamicTabItemProps, Omit<HTMLAttributes<HTMLLIElement>, keyof CoreDynamicTabItemProps> {}

const DynamicTabItem = ({
  id,
  index,
  title,
  parentId,
  appearance = "neutral",
  isActive = false,
  onClick,
  onClickClose,
  onChangeTabTitle,
  compactSpacing = false,
  isEditable = true,
  badgeContent,
  badgeCount,
  badgeIcon,
  badgeType,
  iconName,
  isClosable = true,
  updateIndicator,
  isHidden = false,
  setIsMoving: setIsMovingExternal,
  isMoving: isMovingExternal,
}: DynamicTabItemProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const tabItemRef = useRef<HTMLLIElement | null>(null);
  const tabItemContentRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [tabTitle, setTabTitle] = useState(title);
  const [previousTabTitle, setPreviousTabTitle] = useState(title);
  const [isRendering, setIsRendering] = useState(false);
  const [isDisappearing, setIsDisappearing] = useState(false);

  const { isAnimating } = useAnimatedMount(isRendering, 300);
  const { isAnimating: isAnimatingDisappearing } = useAnimatedMount(isDisappearing, 300);

  const hasBadgeContent = !!(
    (badgeCount && badgeCount > 0 && badgeContent === "number") ||
    (badgeContent === "icon" && badgeIcon)
  );

  const { shouldDisplayBadge, shouldDisplayIcon, shouldDisplayText, shouldDisplayCloseButton, isZeroToXS } =
    useDisplayTabItemElement({
      tabItem: tabItemRef,
      isActive,
      hasBadgeContent,
      iconName,
      isClosable,
    });

  const handleKeyDown = (event: KeyboardEvent<HTMLLIElement>) => {
    const key = event.key;

    if (isEditing) {
      event?.stopPropagation();
      handleKeyboardEditingMode(key);
      return;
    }

    if (key === ARROW_RIGHT_KEY || key === ARROW_LEFT_KEY) {
      event.preventDefault();
      if (!isMovingExternal) {
        focusItem(key === ARROW_RIGHT_KEY ? "next" : "previous");
      }
      return;
    }

    if (key === ENTER_KEY || key === SPACE_KEY) {
      event.preventDefault();

      onClick?.();
    }
  };

  const handleKeyUp = (event: KeyboardEvent<HTMLLIElement>) => {
    const key = event.key;
    if (key === SPACE_KEY) {
      if (isActive && !isEditing) {
        setIsMovingExternal?.(true);
        return;
      }
    }
  };

  const handleOnBlur = () => {
    if (isEditable) {
      commitTabTitle();
    }
  };

  const handleKeyboardEditingMode = (key: string) => {
    if (key === ENTER_KEY) {
      commitTabTitle();
      return;
    }
    if (key === ESCAPE_KEY) {
      setIsEditing(false);
      resetTabTitle();
      return;
    }
  };

  const handleOnKeyDownCloseTab = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === ENTER_KEY || event.key === SPACE_KEY) {
      event.preventDefault();
      event.stopPropagation();
      handleOnClickCloseTab(event as unknown as React.MouseEvent<HTMLButtonElement, MouseEvent>);
    }
  };

  const handleOnKeyUpCloseTab = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === ENTER_KEY || event.key === SPACE_KEY) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  const handleOnClickCloseTab = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setIsDisappearing(true);
    updateIndicator?.();
    setTimeout(() => {
      onClickClose?.();
    }, 300);
  };

  const handleOnDoubleClick = () => {
    if (isEditable) {
      enableEditingMode();
    }
  };

  const handleOnChangeTabTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value;
    setTabTitle(newTitle);

    if (inputRef.current) {
      const inputElement = inputRef.current;
      const width = getTextWidth(inputElement);
      event.target.style.width = `${width(newTitle) + 8}px`;
    }
  };

  const handleOnTitleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if ((event.key === ENTER_KEY || event.key === SPACE_KEY) && !isEditing) {
      event.stopPropagation();
      enableEditingMode();
    }
  };

  const enableEditingMode = () => {
    setIsEditing(true);
    setPreviousTabTitle(tabTitle);
    waitForNextFrame(() => {
      inputRef.current?.focus();
    });
  };

  const commitTabTitle = () => {
    setIsEditing(false);
    if (tabTitle.trim() === "") {
      resetTabTitle();
    } else {
      validateTabTitle();
    }
  };

  const validateTabTitle = () => {
    onChangeTabTitle?.(tabTitle);
    setPreviousTabTitle(tabTitle);
  };

  const resetTabTitle = () => {
    setTabTitle(previousTabTitle);
  };

  const focusItem = (direction: "next" | "previous") => {
    const parent = document.getElementById(parentId);
    if (!parent) return;
    const allTabItems = Array.from(parent.querySelectorAll(`.${styles["rte-dynamic-tab-item"]}`)) as HTMLElement[];
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

  const focusSelectedItem = useCallback(() => {
    const parent = document.getElementById(parentId);
    if (!parent) return;
    const allTabItems = Array.from(parent.querySelectorAll(`.${styles["rte-dynamic-tab-item"]}`)) as HTMLElement[];
    allTabItems.find((tab) => tab.getAttribute("aria-active") === "true")?.focus();
  }, [parentId]);

  const computeNextItemIndex = (currentIndex: number, totalItems: number, direction: "next" | "previous") => {
    return direction === "next" ? (currentIndex + 1) % totalItems : (currentIndex - 1 + totalItems) % totalItems;
  };

  const { ref } = useSortable({
    id,
    index,
    modifiers: [RestrictToHorizontalAxis],
  });

  useEffect(() => {
    setIsRendering(true);
    updateIndicator?.();
    focusSelectedItem();
  }, [focusSelectedItem, updateIndicator]);

  return (
    <li
      id={id}
      ref={(node) => {
        ref(node);
        tabItemRef.current = node;
      }}
      className={styles["rte-dynamic-tab-item"]}
      data-hidden={isHidden}
      data-is-animating={isAnimating}
      data-is-disappearing={isAnimatingDisappearing}
      data-appearance={appearance}
      data-active={isActive}
      data-compact-spacing={compactSpacing}
      data-tab-id={id}
      onClick={onClick}
      role="tab"
      tabIndex={isActive ? 0 : -1}
      aria-selected={isActive}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
    >
      {(shouldDisplayBadge || shouldDisplayIcon || shouldDisplayText) && (
        <div
          ref={tabItemContentRef}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            width: isHidden ? "0" : "100%",
            overflow: "hidden",
            minWidth: "auto",
          }}
        >
          {shouldDisplayBadge && (
            <Badge
              content={"empty"}
              count={badgeCount}
              icon={badgeIcon}
              size={"s"}
              badgeType={badgeType}
              style={{
                marginLeft: isZeroToXS ? "4px" : undefined,
              }}
            />
          )}
          {shouldDisplayIcon && (
            <Icon name={iconName!} appearance={isActive ? "filled" : "outlined"} style={{ flex: "none" }} />
          )}
          {shouldDisplayText && (
            <div
              className={styles["rte-dynamic-tab-item__title"]}
              onDoubleClick={handleOnDoubleClick}
              ref={titleRef}
              tabIndex={isActive && isEditable ? 0 : -1}
              onKeyDown={handleOnTitleKeyDown}
            >
              {isEditing ? (
                <input
                  ref={inputRef}
                  type="text"
                  value={tabTitle}
                  onChange={handleOnChangeTabTitle}
                  onBlur={handleOnBlur}
                  style={{
                    width: `${inputRef.current ? getTextWidth(inputRef.current)(tabTitle) + 8 : 0}px`,
                    maxWidth: 100 + "%",
                  }}
                />
              ) : (
                <>{shouldDisplayText && <span data-is-animating={isAnimating}>{tabTitle}</span>}</>
              )}
            </div>
          )}
        </div>
      )}
      {isClosable && shouldDisplayCloseButton && (
        <button
          type="button"
          className={styles["rte-dynamic-tab-item__close-button"]}
          aria-label={`Close ${tabTitle} tab`}
          onClick={handleOnClickCloseTab}
          onKeyDown={handleOnKeyDownCloseTab}
          onKeyUp={handleOnKeyUpCloseTab}
        >
          <Icon name="close" />
        </button>
      )}
    </li>
  );
};

export default DynamicTabItem;
