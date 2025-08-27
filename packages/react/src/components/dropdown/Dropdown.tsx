import {
  getAutoAlignment,
  getAutoPlacementDropdown,
  getCoordinates,
} from "@design-system-rte/core/components/utils/auto-placement";
import { useEffect, useState, useRef, useCallback, forwardRef, Fragment } from "react";

import useAnimatedMount from "../../hooks/useAnimatedMount";
import Divider from "../divider/Divider";
import Icon from "../icon/Icon";
import { Overlay } from "../overlay/Overlay";
import { concatClassNames } from "../utils";

import styles from "./Dropdown.module.scss";
import { DropdownManager } from "./DropdownManager";
import { useDropdownState } from "./useDropdownState";

type DropdownOptionItem = DropdownItemOption | DropdownItemOptionCategorized;

interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  dropdownId: string;
  trigger: React.ReactNode;
  options: DropdownOptionItem[];
  hasParent?: boolean;
  disabled?: boolean;
  position?: "top" | "bottom" | "left" | "right" | "auto";
}

interface DropdownItemOptionCategorized {
  category: string;
  values: DropdownOptionItem[];
}

interface DropdownItemOption {
  label: string;
  leftIcon?: string;
  subOptions?: DropdownOptionItem[];
  trailingText?: string;
  disabled?: boolean;
}

interface DropdownItemProps {
  option: DropdownItemOption;
  parentId: string;
}

function isCategorizedOption(option: DropdownOptionItem): option is DropdownItemOptionCategorized {
  return "category" in option && "values" in option;
}

function isSimpleOption(option: DropdownOptionItem): option is DropdownItemOption {
  return "label" in option;
}

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  ({ options, trigger, className, style, dropdownId, hasParent, disabled, position = "bottom", ...props }, ref) => {
    const { dropdownId: autoId, isOpen, open } = useDropdownState(dropdownId);
    const [autoPosition, setAutoPosition] = useState<string>(position);

    const triggerRef = useRef<HTMLDivElement | null>(null);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const [dropdownElement, setDropdownElement] = useState<HTMLDivElement | null>(null);
    const [triggerElement, setTriggerElement] = useState<HTMLDivElement | null>(null);
    const [coordinates, setCoordinates] = useState<{ top: number; left: number }>({ top: 500, left: 500 });

    const { shouldRender, isAnimating } = useAnimatedMount(isOpen, 150);

    const dropdownCallbackRef = useCallback(
      (node: HTMLDivElement | null) => {
        dropdownRef.current = node;
        setDropdownElement(node);
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [ref],
    );

    const triggerCallbackRef = useCallback((node: HTMLDivElement | null) => {
      triggerRef.current = node;
      setTriggerElement(node);
    }, []);

    useEffect(() => {
      if (!isOpen) return;

      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Element;
        const allDropdowns = document.querySelectorAll("[data-dropdown-id]");
        const clickedInside =
          Array.from(allDropdowns).some((dropdown) => dropdown.contains(target)) ||
          triggerRef.current?.contains(target);

        if (!clickedInside) {
          DropdownManager.closeAll();
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    useEffect(() => {
      if (!isOpen) return;
      if (!triggerElement || !dropdownElement) return;

      if (hasParent) {
        const computedPosition = getAutoPlacementDropdown(triggerElement, dropdownElement!, "right", 0, hasParent);
        const autoAlignment = getAutoAlignment(triggerElement, dropdownElement!, computedPosition);
        const computedCoordinates = getCoordinates(computedPosition, triggerElement, dropdownElement, 0, autoAlignment);

        setAutoPosition(computedPosition);
        setCoordinates(computedCoordinates);
      } else {
        const computedPosition =
          position === "auto" ? getAutoPlacementDropdown(triggerElement, dropdownElement!, "bottom") : position;
        const autoAlignment = getAutoAlignment(triggerElement, dropdownElement!, computedPosition);
        const computedCoordinates = getCoordinates(computedPosition, triggerElement, dropdownElement, 0, autoAlignment);

        setAutoPosition(computedPosition);
        setCoordinates(computedCoordinates);
      }
    }, [isOpen, dropdownElement, triggerElement, hasParent, position]);

    return (
      <>
        <div
          ref={triggerCallbackRef}
          onClick={disabled ? undefined : open}
          onMouseOver={disabled || !hasParent ? undefined : open}
          className={styles.trigger}
          data-disabled={disabled}
        >
          {trigger}
        </div>

        {shouldRender && (
          <Overlay>
            <div
              className={concatClassNames(styles.dropdown, className)}
              data-dropdown-id={autoId}
              data-position={autoPosition}
              data-open={isAnimating || undefined}
              {...props}
              style={{
                ...style,
                top: coordinates.top,
                left: coordinates.left,
              }}
              ref={dropdownCallbackRef}
            >
              <ul className={styles["dropdown-items"]} role="menu">
                {options.map((option, index) => {
                  if (isCategorizedOption(option)) {
                    return (
                      <Fragment key={`category-${option.category}-${index}`}>
                        {option.values.map(
                          (item, idx) =>
                            isSimpleOption(item) && (
                              <li key={`${option.category}-${item.label}-${idx}`}>
                                <DropdownItem option={item} parentId={autoId} />
                              </li>
                            ),
                        )}
                        <li
                          key={`divider-${option.category}-${index}`}
                          className={styles["dropdown-divider"]}
                          role="separator"
                        >
                          <Divider />
                        </li>
                      </Fragment>
                    );
                  }
                  if (isSimpleOption(option)) {
                    return (
                      <li key={`simple-${option.label}-${index}`}>
                        <DropdownItem key={option.label + index} option={option} parentId={autoId} />
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            </div>
          </Overlay>
        )}
      </>
    );
  },
);

export const DropdownItem = ({ option, parentId }: DropdownItemProps) => {
  const submenuId = `${parentId}-${option.label.replace(/\s+/g, "")}`;
  const { isOpen } = useDropdownState(submenuId);

  const handleMouseOver = () => {
    const dropdownsCurrentlyOpened = DropdownManager.getOpenedDropdowns();
    const dropdownsToClose = dropdownsCurrentlyOpened.filter((id) => id.startsWith(parentId) && id !== parentId);
    dropdownsToClose.forEach((dropdown) => DropdownManager.close(dropdown));
  };

  const { label, leftIcon, subOptions, trailingText, disabled } = option;
  if (subOptions && subOptions.length > 0) {
    return (
      <Dropdown
        hasParent
        dropdownId={submenuId}
        disabled={disabled}
        trigger={
          <>
            <div
              className={styles["dropdown-item"]}
              data-active={isOpen}
              data-disabled={disabled}
              role="menuitem"
              onMouseOver={handleMouseOver}
            >
              {leftIcon && <Icon name={leftIcon} className={styles["dropdown-item-icon"]} />}
              <span style={{ flex: "2" }}>{label}</span>
              <Icon name="arrow-chevron-right" className={styles["dropdown-item-icon"]} />
            </div>
          </>
        }
        options={subOptions || []}
      />
    );
  }
  return (
    <>
      <div className={styles["dropdown-item"]} data-disabled={disabled} role="menuitem" onMouseOver={handleMouseOver}>
        {leftIcon && <Icon name={leftIcon} className={styles["dropdown-item-icon"]} />}
        <span style={{ flex: "2" }}>{label}</span>
        {trailingText && <div>{trailingText}</div>}
      </div>
    </>
  );
};
