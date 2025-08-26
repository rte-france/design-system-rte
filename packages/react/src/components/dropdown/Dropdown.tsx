import { getAutoPlacement, getCoordinates } from "@design-system-rte/core/components/utils/auto-placement";
import { useEffect, useState, useRef, useCallback, forwardRef } from "react";

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
  ({ options, trigger, className, style, dropdownId, hasParent, disabled, ...props }, ref) => {
    const { dropdownId: autoId, isOpen, toggle, close } = useDropdownState(dropdownId);
    const [openedChildren, setOpenedChildren] = useState<string[]>([]);
    const [autoPosition, setAutoPosition] = useState<string>("bottom");

    const triggerRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const [dropdownElement, setDropdownElement] = useState<HTMLDivElement | null>(null);
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
      if (!triggerRef.current || !dropdownElement) return;

      const computedPosition = getAutoPlacement(
        triggerRef.current,
        dropdownElement!,
        hasParent ? "right" : "bottom",
        0,
      );
      const computedCoordinates = getCoordinates(
        computedPosition,
        triggerRef.current,
        dropdownElement,
        0,
        hasParent ? "start" : "center",
      );
      setAutoPosition(computedPosition);
      setCoordinates(computedCoordinates);
    }, [isOpen, dropdownElement]);

    const handleMouseLeave = () => {
      if (hasParent) {
        const firstChild = document.querySelector(`[data-dropdown-id='${openedChildren[openedChildren.length - 1]}']`);
        const isOverFirstChild = firstChild?.matches(":hover");
        if (!isOverFirstChild) {
          close();
          setOpenedChildren((prev) => prev.filter((id) => id !== openedChildren[openedChildren.length - 1]));
        }
      }
    };

    const handleOnClick = () => {
      setOpenedChildren((prev) => [...prev, autoId]);
      toggle();
    };

    return (
      <>
        <div
          ref={triggerRef}
          onClick={disabled ? undefined : handleOnClick}
          onMouseLeave={disabled ? undefined : handleMouseLeave}
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
              onMouseLeave={handleMouseLeave}
              {...props}
              style={{
                ...style,
                top: coordinates.top,
                left: coordinates.left,
              }}
              ref={dropdownCallbackRef}
            >
              <div className={styles["dropdown-items"]}>
                {options.map((option, index) => {
                  if (isCategorizedOption(option)) {
                    return (
                      <div key={option.category + index}>
                        {option.values.map(
                          (item, idx) =>
                            isSimpleOption(item) && (
                              <DropdownItem key={item.label + idx} option={item} parentId={autoId} />
                            ),
                        )}
                        <div className={styles["dropdown-divider"]}>
                          <Divider />
                        </div>
                      </div>
                    );
                  }
                  if (isSimpleOption(option)) {
                    return <DropdownItem key={option.label + index} option={option} parentId={autoId} />;
                  }
                  return null;
                })}
              </div>
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

  const { label, leftIcon, subOptions, trailingText, disabled } = option;
  if (subOptions && subOptions.length > 0) {
    return (
      <Dropdown
        hasParent
        dropdownId={submenuId}
        disabled={disabled}
        trigger={
          <>
            <div className={styles["dropdown-item"]} data-active={isOpen} data-disabled={disabled}>
              {leftIcon && <Icon name={leftIcon} className={styles["dropdown-item-icon"]} />}
              <div style={{ flex: "2" }}>{label}</div>
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
      <div className={styles["dropdown-item"]} data-disabled={disabled}>
        {leftIcon && <Icon name={leftIcon} className={styles["dropdown-item-icon"]} />}
        <div style={{ flex: "2" }}>{label}</div>
        {trailingText && <div>{trailingText}</div>}
      </div>
    </>
  );
};
