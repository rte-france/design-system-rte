import { TabProps as CoreTabProps } from "@design-system-rte/core/components/tab/tab.interface";
import {
  forwardRef,
  HTMLAttributes,
  MutableRefObject,
  useRef,
  MouseEvent,
  KeyboardEvent,
  useEffect,
  useState,
  useCallback,
} from "react";

import useSelectedIndicatorPosition from "../../hooks/useSelectedIndicatorPosition";
import { Dropdown } from "../dropdown/Dropdown";
import { DropdownItem } from "../dropdown/dropdownItem/DropdownItem";
import Icon from "../icon/Icon";
import IconButton from "../iconButton/IconButton";

import style from "./Tab.module.scss";
import TabItem from "./tabitem/TabItem";

interface TabProps extends CoreTabProps, Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  onChange: (id: string) => void;
}

const Tab = forwardRef<HTMLDivElement, TabProps>(
  (
    {
      options,
      onChange,
      direction = "horizontal",
      alignment = "start",
      selectedTabId,
      compactSpacing,
      overflowType = "scrollable",
    },
    ref,
  ) => {
    const [isScrollable, setIsScrollable] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const shouldDisplayDropdown = isScrollable && overflowType === "dropdown";

    const containerRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);

    const sliderStyle = useSelectedIndicatorPosition(
      containerRef,
      selectedTabId,
      direction === "horizontal" ? "bottom" : "left",
    );

    const setScrollableState = useCallback(() => {
      if (containerRef.current) {
        const isOverflowing = containerRef.current.offsetWidth < containerRef.current.scrollWidth;
        setIsScrollable(isOverflowing);
      }
    }, [containerRef, options]);

    useEffect(() => {
      setScrollableState();
      window.addEventListener("resize", setScrollableState);
      return () => window.removeEventListener("resize", setScrollableState);
    }, [setScrollableState]);

    useEffect(() => {
      if (!selectedTabId && options.length > 0) {
        onChange(options[0].id);
      }
    }, [selectedTabId, options, onChange]);

    const handleOnClick = (
      event:
        | MouseEvent<HTMLButtonElement>
        | MouseEvent<HTMLLIElement>
        | KeyboardEvent<HTMLButtonElement>
        | KeyboardEvent<HTMLLIElement>,
    ) => {
      const target = event.currentTarget;
      const id = target.getAttribute("id") || "";
      onChange(id);
      setIsDropdownOpen(false);
    };

    return (
      <>
        <div
          className={style["tab-border-vertical"]}
          aria-hidden="true"
          role="presentation"
          data-direction={direction}
        ></div>
        <div style={{ position: "relative" }}>
          {isScrollable && overflowType === "scrollable" && (
            <IconButton
              name={direction === "horizontal" ? "arrow-chevron-right" : "arrow-chevron-down"}
              aria-label="Next tabs"
              variant="secondary"
              size="l"
              style={{ position: "absolute", right: 0, top: "6px", zIndex: 11, borderRadius: 0 }}
              onClick={() => {
                if (containerRef.current) {
                  containerRef.current.scrollBy({ left: 100, behavior: "smooth" });
                }
              }}
            />
          )}
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
            <div
              className={style["tab-selected-indicator"]}
              style={{
                left: shouldDisplayDropdown ? 0 : sliderStyle.left,
                width: sliderStyle.width,
                top: sliderStyle.top,
                height: sliderStyle.height,
              }}
            ></div>
            {shouldDisplayDropdown && (
              <Dropdown
                autoClose
                dropdownId={"corgi"}
                onClose={() => setIsDropdownOpen(false)}
                trigger={
                  <button
                    type="button"
                    className={style["tab-dropdown-button"]}
                    onClick={() => setIsDropdownOpen((prev) => !prev)}
                    aria-label="Select tab"
                  >
                    <div style={{ flexShrink: 0 }}>{options.find((option) => option.id === selectedTabId)?.label}</div>
                    <Icon style={{ flexShrink: 0 }} name="arrow-chevron-down"></Icon>
                  </button>
                }
                isOpen={isDropdownOpen}
              >
                {options
                  .filter((option) => option.id !== selectedTabId)
                  .map((option, idx) => (
                    <DropdownItem
                      key={`${option.id}-dropdown-${idx}`}
                      id={option.id}
                      label={option.label}
                      onClick={handleOnClick}
                      disabled={option.disabled}
                    />
                  ))}
              </Dropdown>
            )}

            {options.map((option, index) => (
              <TabItem
                key={`${option.id}-${index}`}
                onClick={handleOnClick}
                isSelected={selectedTabId === option.id}
                compactSpacing={compactSpacing}
                direction={direction}
                data-hidden={shouldDisplayDropdown ? true : undefined}
                {...option}
              />
            ))}
          </div>
        </div>
        <div
          className={style["tab-border-horizontal"]}
          aria-hidden="true"
          role="presentation"
          data-direction={direction}
        ></div>
      </>
    );
  },
);

export default Tab;
