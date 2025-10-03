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
import Badge from "../badge/Badge";
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
    const [isScrollableLeft, setIsScrollableLeft] = useState(false);
    const [isScrollableRight, setIsScrollableRight] = useState(false);
    const [isScrollable, setIsScrollable] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const shouldDisplayDropdown = isScrollable && overflowType === "dropdown";

    const containerRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);

    const sliderStyle = useSelectedIndicatorPosition(
      containerRef,
      selectedTabId,
      direction === "horizontal" ? "bottom" : "left",
    );

    const computeScrollableState = useCallback(() => {
      if (containerRef.current) {
        const isScrollable = containerRef.current.offsetWidth < containerRef.current.scrollWidth;
        const isOverFlowingLeft = containerRef.current.scrollLeft > 0;
        const isOverFlowingRight =
          containerRef.current.scrollWidth - containerRef.current.clientWidth - containerRef.current.scrollLeft > 0;
        setIsScrollableLeft(isOverFlowingLeft);
        setIsScrollableRight(isOverFlowingRight);
        setIsScrollable(isScrollable);
      }
    }, [containerRef]);

    useEffect(() => {
      computeScrollableState();
      window.addEventListener("resize", computeScrollableState);
      containerRef.current?.addEventListener("scroll", computeScrollableState);
      return () => {
        window.removeEventListener("resize", computeScrollableState);
        containerRef.current?.removeEventListener("scroll", computeScrollableState);
      };
    }, [computeScrollableState]);

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

    const selectedOption = options.find((option) => option.id === selectedTabId);

    return (
      <div className={style["tab-container"]} data-direction={direction}>
        <div
          className={style["tab-border-vertical"]}
          aria-hidden="true"
          role="presentation"
          data-direction={direction}
        ></div>
        <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
          {isScrollable && overflowType === "scrollable" && (
            <IconButton
              name={direction === "horizontal" ? "arrow-chevron-left" : "arrow-chevron-up"}
              aria-label="Previous tabs"
              variant="transparent"
              size="l"
              style={{
                zIndex: 11,
                backgroundColor: "white",
                opacity: isScrollableLeft ? 1 : 0,
                pointerEvents: isScrollableLeft ? "auto" : "none",
              }}
              onClick={() => {
                if (containerRef.current) {
                  containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
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
            className={style["tab"]}
            data-alignment={isScrollable ? "start" : alignment}
            data-direction={direction}
          >
            <div
              className={style["tab-selected-indicator"]}
              style={{
                left: shouldDisplayDropdown ? 0 : sliderStyle.left,
                width: (sliderStyle.width ?? 0) + (shouldDisplayDropdown ? 16 : 0),
                top: sliderStyle.top,
                height: sliderStyle.height,
              }}
            ></div>
            {shouldDisplayDropdown && selectedOption && (
              <Dropdown
                autoClose
                dropdownId={"tab-dropdown"}
                onClose={() => setIsDropdownOpen(false)}
                offset={10}
                trigger={
                  <button
                    type="button"
                    className={style["tab-dropdown-button"]}
                    onClick={() => setIsDropdownOpen((prev) => !prev)}
                    aria-label="Select tab"
                  >
                    {selectedOption && selectedOption.icon && <Icon name={selectedOption.icon} appearance="filled" />}
                    {selectedOption && <div style={{ flexShrink: 0 }}>{selectedOption?.label}</div>}
                    {selectedOption.badgeCount &&
                      selectedOption.badgeCount > 0 &&
                      selectedOption.badgeAppearance === "text" && (
                        <Badge
                          badgeType={selectedOption.badgeType}
                          appearance={selectedOption.badgeAppearance}
                          count={selectedOption.badgeCount}
                        />
                      )}
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
                      leftIcon={option.icon}
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
          {isScrollable && overflowType === "scrollable" && (
            <IconButton
              name={direction === "horizontal" ? "arrow-chevron-right" : "arrow-chevron-down"}
              aria-label="Next tabs"
              variant="transparent"
              size="l"
              style={{
                zIndex: 11,
                backgroundColor: "white",
                opacity: isScrollableRight ? 1 : 0,
                pointerEvents: isScrollableRight ? "auto" : "none",
              }}
              onClick={() => {
                if (containerRef.current) {
                  containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
                }
              }}
            />
          )}
        </div>
        <div
          className={style["tab-border-horizontal"]}
          aria-hidden="true"
          role="presentation"
          data-direction={direction}
          data-compact-spacing={compactSpacing}
          data-scrollable={isScrollable && overflowType === "scrollable" ? true : undefined}
        ></div>
      </div>
    );
  },
);

export default Tab;
