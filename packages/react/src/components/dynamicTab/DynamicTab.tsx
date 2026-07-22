import { DynamicTabItemOption, DynamicTabProps, SPACE_KEY, TAB_KEY } from "@design-system-rte/core";
import { MutableRefObject, useEffect, useMemo, useRef, useState, forwardRef, useCallback } from "react";

import useElementResizeEvent from "../../hooks/useElementResizeEvent";
import useMutationEvent from "../../hooks/useMutationEvent";
import useSelectedIndicatorPosition from "../../hooks/useSelectedIndicatorPosition";
import { generateId } from "../../utils";
import Dropdown from "../dropdown/Dropdown";
import DropdownItem from "../dropdown/dropdownItem/DropdownItem";
import Icon from "../icon/Icon";

import styles from "./DynamicTab.module.scss";
import { buildNewTab } from "./dynamictab.utils";
import DynamicTabItem from "./dynamicTabItem/DynamicTabItem";
import useLastPressedKey from "./hooks/useLastPressedKey";
import DragAndDropProvider from "./provider/DragAndDropProvider";

const WIDTH_ACTION_BUTTONS = 188;

const DynamicTab = forwardRef<HTMLDivElement, DynamicTabProps>(
  (
    {
      id = "dynamic-tab",
      appearance = "neutral",
      options,
      selectedTabId,
      onChangeActiveTab: onChangeActiveTab,
      onUpdateTabs,
      newTabConfig,
      compactSpacing,
      isClosable = true,
      isEditable = true,
      iconName,
    },
    ref,
  ) => {
    const containerRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
    const triggerRef: MutableRefObject<HTMLButtonElement | null> = useRef<HTMLButtonElement>(null);
    const [internalSelectedTabId, setInternalSelectedTabId] = useState<string | undefined>(selectedTabId);
    const listRef: MutableRefObject<HTMLUListElement | null> = useRef<HTMLUListElement>(null);
    const onUpdateTabsRef = useRef(onUpdateTabs);
    const internalOptionsRef = useRef(options);
    const { indicatorStyle, updateIndicator } = useSelectedIndicatorPosition(
      containerRef,
      internalSelectedTabId,
      "bottom",
    );

    const lastPressedKey = useLastPressedKey();

    const listId = useMemo(() => `${id}-list-${generateId()}`, [id]);

    const [internalOptions, setInternalOptions] = useState<DynamicTabItemOption[]>(options);
    const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

    const [isMoving, setIsMoving] = useState(false);

    const [maxNumberOfVisibleTabs, setMaxNumberOfVisibleTabs] = useState<number>(internalOptions.length);

    useMutationEvent(listRef.current!, updateIndicator);

    const numberOfHiddenTabs = internalOptions.length - maxNumberOfVisibleTabs;

    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const availableWidthForTabs = containerWidth - WIDTH_ACTION_BUTTONS;
        const maxVisibleTabs = Math.max(1, Math.floor(availableWidthForTabs / 44));
        setMaxNumberOfVisibleTabs(maxVisibleTabs);
      }
    };

    useElementResizeEvent(containerRef.current, handleResize);

    useEffect(() => {
      handleResize();
    }, []);

    const hasOverflow = useMemo(() => {
      return internalOptions.length > maxNumberOfVisibleTabs;
    }, [internalOptions, maxNumberOfVisibleTabs]);

    const handleAddTab = () => {
      const newTab = buildNewTab(newTabConfig, internalOptions);
      if (!newTab) {
        console.warn("No new tab configuration provided or invalid configuration.");
        return;
      }
      onChangeActiveTab?.(newTab.id);
      const updatedOptions = [...internalOptions, newTab];
      setInternalOptions(updatedOptions);
      onUpdateTabsRef.current?.(updatedOptions);
      setIsMoreMenuOpen(false);
      setInternalSelectedTabId(newTab.id);
    };

    const focusSelectedTab = useCallback(async () => {
      const selectedTabElement = listRef.current?.querySelector(
        `[data-tab-id="${internalSelectedTabId}"]`,
      ) as HTMLElement;
      if (selectedTabElement) {
        selectedTabElement.focus();
      }
    }, [internalSelectedTabId, listRef]);

    const handleOnClickCloseTab = (tabId: string) => {
      if (internalSelectedTabId === tabId) {
        const currentIndex = internalOptions.findIndex((option) => option.id === tabId);
        const totalItems = internalOptions.length;
        const newSelectedTabId =
          currentIndex === totalItems - 1 ? internalOptions[totalItems - 2].id : internalOptions[currentIndex + 1].id;
        setInternalSelectedTabId(newSelectedTabId);
        onChangeActiveTab?.(newSelectedTabId);
      }
      const updatedOptions = internalOptions.filter((option) => option.id !== tabId);
      setInternalOptions(updatedOptions);
      onUpdateTabsRef.current?.(updatedOptions);
      focusSelectedTab();
    };

    useEffect(() => {
      onUpdateTabsRef.current = onUpdateTabs;
      internalOptionsRef.current = internalOptions;
    });

    useEffect(() => {
      if (hasOverflow) {
        const options = internalOptionsRef.current;
        const lastVisibleTabIndex = maxNumberOfVisibleTabs - 1;
        const firstPart = options.slice(0, lastVisibleTabIndex);
        const secondPart = options.slice(lastVisibleTabIndex);
        const currentSelectedTab = options.find((option) => option.id === internalSelectedTabId);
        if (currentSelectedTab && secondPart.includes(currentSelectedTab)) {
          const newVisibleTabs = [...firstPart, currentSelectedTab];
          const newHiddenTabs = secondPart.filter((tab) => tab.id !== currentSelectedTab.id);
          const updatedOptions = [...newVisibleTabs, ...newHiddenTabs];
          setInternalOptions(updatedOptions);
          onUpdateTabsRef.current?.(updatedOptions);
        }
      }
    }, [hasOverflow, internalOptions.length, internalSelectedTabId, maxNumberOfVisibleTabs]);

    useEffect(() => {
      focusSelectedTab();
    }, [internalSelectedTabId, focusSelectedTab]);

    useEffect(() => {
      const handleKeydown = (event: KeyboardEvent) => {
        if (event.key === SPACE_KEY) {
          if (isMoving) {
            event.preventDefault();
            event.stopPropagation();
            setIsMoving(false);
          }
        }
      };

      window.addEventListener("keydown", handleKeydown);

      return () => {
        window.removeEventListener("keydown", handleKeydown);
      };
    }, [isMoving]);

    const selectTab = (tabId: string) => {
      setInternalSelectedTabId(tabId);
      onChangeActiveTab?.(tabId);
    };

    const handleContainerFocusCapture = (event: React.FocusEvent<HTMLDivElement>) => {
      const container = containerRef.current;
      if (!container || internalOptions.length === 0) return;

      if (lastPressedKey !== TAB_KEY) return;

      const related = event.relatedTarget as Node | null;
      const isEnteringFromOutside = !related || !container.contains(related);
      if (!isEnteringFromOutside) return;

      const firstTab = listRef.current?.querySelector('[role="tab"]') as HTMLElement | null;
      if (!firstTab) return;

      const firstTabId = firstTab.getAttribute("data-tab-id");
      if (firstTabId && firstTabId !== internalSelectedTabId) {
        selectTab(firstTabId);
      }

      if (event.target !== firstTab) {
        requestAnimationFrame(() => firstTab.focus());
      }
    };

    return (
      <div
        className={styles["rte-dynamic-tab"]}
        ref={(node) => {
          containerRef.current = node;
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            (ref as MutableRefObject<HTMLDivElement | null>).current = node;
          }
        }}
        data-appearance={appearance}
        onFocusCapture={handleContainerFocusCapture}
      >
        {internalOptions.length > 0 && (
          <div
            className={styles["rte-dynamic-tab__indicator"]}
            style={{
              visibility: isMoving || maxNumberOfVisibleTabs === 0 ? "hidden" : "visible",
              left: indicatorStyle.left,
              width: indicatorStyle.width,
              top: indicatorStyle.top,
              height: indicatorStyle.height,
            }}
          ></div>
        )}
        <DragAndDropProvider
          internalOptions={internalOptions}
          setInternalOptions={setInternalOptions}
          onUpdateTabs={onUpdateTabsRef.current}
          onDragEndCallback={() => setIsMoving(false)}
          onBeforeDragStartCallback={() => setIsMoving(true)}
        >
          <ul
            className={styles["rte-dynamic-tab__list"]}
            role="tablist"
            id={listId}
            ref={listRef}
            data-hidden={maxNumberOfVisibleTabs === 0}
          >
            {internalOptions.map((option, index) => {
              if (index < maxNumberOfVisibleTabs) {
                return (
                  <DynamicTabItem
                    setIsMoving={setIsMoving}
                    isMoving={isMoving}
                    updateIndicator={updateIndicator}
                    key={option.id}
                    id={option.id}
                    index={index}
                    title={option.title}
                    appearance={appearance}
                    parentId={listId}
                    isClosable={isClosable}
                    isEditable={isEditable}
                    isActive={option.id === internalSelectedTabId}
                    onClick={() => selectTab(option.id)}
                    badgeContent={option.badgeContent}
                    badgeCount={option.badgeCount}
                    badgeIcon={option.badgeIcon}
                    badgeType={option.badgeType}
                    iconName={iconName}
                    compactSpacing={compactSpacing}
                    onClickClose={() => handleOnClickCloseTab(option.id)}
                    onChangeTabTitle={(newTitle) => {
                      const updatedOptions = internalOptions.map((opt) =>
                        opt.id === option.id ? { ...opt, title: newTitle } : opt,
                      );
                      setInternalOptions(updatedOptions);
                      onUpdateTabsRef.current?.(updatedOptions);
                    }}
                  />
                );
              }
              return null;
            })}
          </ul>
          <div className={styles["rte-dynamic-tab__more-menu-container"]}>
            <Dropdown
              style={{
                width: triggerRef?.current?.offsetWidth,
                visibility: hasOverflow ? "visible" : "hidden",
              }}
              isOpen={isMoreMenuOpen}
              offset={8}
              onClose={() => setIsMoreMenuOpen(false)}
              trigger={
                <>
                  <button
                    ref={triggerRef}
                    className={styles["rte-dynamic-tab__more-menu"]}
                    data-appearance={appearance}
                    data-compact-spacing={compactSpacing}
                    data-overflow={hasOverflow}
                    onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                    type="button"
                  >
                    <span className={styles["rte-dynamic-tab__more-menu__text"]}>
                      + {numberOfHiddenTabs} onglet{numberOfHiddenTabs > 1 ? "s" : ""}
                    </span>
                    <Icon name={isMoreMenuOpen ? "arrow-chevron-up" : "arrow-chevron-down"} />
                  </button>
                  <button
                    className={styles["rte-dynamic-tab__add-button"]}
                    data-appearance={appearance}
                    data-compact-spacing={compactSpacing}
                    onClick={handleAddTab}
                    type="button"
                    aria-label="Add new tabitem"
                  >
                    <Icon name="add" />
                  </button>
                </>
              }
            >
              {internalOptions.map((option, index) => {
                if (index >= maxNumberOfVisibleTabs) {
                  return (
                    <DropdownItem
                      key={option.id}
                      label={option.title}
                      onClick={() => {
                        setInternalSelectedTabId(option.id);
                        onChangeActiveTab?.(option.id);
                      }}
                    />
                  );
                }
              })}
            </Dropdown>
          </div>
        </DragAndDropProvider>
      </div>
    );
  },
);

export default DynamicTab;
