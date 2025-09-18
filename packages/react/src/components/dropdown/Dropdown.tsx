import { Position } from "@design-system-rte/core/components/common/common-types";
import { DropdownProps as CoreDropdownProps } from "@design-system-rte/core/components/dropdown/dropdown.interface";
import { DropdownManager } from "@design-system-rte/core/components/dropdown/DropdownManager";
import {
  getAutoAlignment,
  getAutoPlacementDropdown,
  getCoordinates,
} from "@design-system-rte/core/components/utils/auto-placement";
import {
  ARROW_DOWN_KEY,
  ARROW_UP_KEY,
  ENTER_KEY,
  ESCAPE_KEY,
  SPACE_KEY,
  TAB_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard.constants";
import { useEffect, useState, useRef, useCallback, forwardRef, useContext } from "react";

import { useActiveKeyboard } from "../../hooks/useActiveKeyboard";
import useAnimatedMount from "../../hooks/useAnimatedMount";
import { Overlay } from "../overlay/Overlay";
import { concatClassNames } from "../utils";

import { DropdownParentContext } from "./context/DropdownContext";
import { DropdownContextProvider } from "./context/DropdownContextProvider";
import styles from "./Dropdown.module.scss";
import { focusNextElement, focusPreviousElement } from "./DropdownUtils";
import { useDropdownState } from "./hooks/useDropdownState";

interface DropdownProps extends CoreDropdownProps, React.HTMLAttributes<HTMLDivElement> {
  trigger: React.ReactNode;
}

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      trigger,
      className,
      style,
      dropdownId,
      hasParent,
      position = "bottom",
      autoClose = true,
      isOpen = false,
      onClose = () => {},
      children,
      ...props
    },
    ref,
  ) => {
    const { dropdownId: autoId } = useDropdownState(dropdownId);
    const [autoPosition, setAutoPosition] = useState<Omit<Position, "auto">>(position);
    const { closeRoot } = useContext(DropdownParentContext) || {};

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

    const closeDropdown = useCallback(() => {
      if (hasParent && closeRoot) {
        closeRoot();
      } else {
        onClose();
      }
      DropdownManager.closeAll();
    }, [closeRoot, hasParent, onClose]);

    const handleKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === ARROW_DOWN_KEY || e.key === ARROW_UP_KEY) {
        e.stopPropagation();
        e.preventDefault();

        if (dropdownElement === null) return;

        if (e.key === ARROW_DOWN_KEY) {
          focusNextElement(dropdownElement);
        } else {
          focusPreviousElement(dropdownElement);
        }
      }

      if (e.key === ESCAPE_KEY) {
        closeDropdown();
      }
    };

    const { onKeyDown, onKeyUp } = useActiveKeyboard<HTMLDivElement>(
      { onKeyUp: handleKeyUp },
      {
        interactiveKeyCodes: [SPACE_KEY, ENTER_KEY, TAB_KEY, ARROW_DOWN_KEY, ARROW_UP_KEY, ESCAPE_KEY],
      },
    );

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Element;
        const allDropdowns = document.querySelectorAll("[data-dropdown-id]");
        const clickedInside =
          Array.from(allDropdowns).some((dropdown) => dropdown.contains(target)) ||
          triggerRef.current?.contains(target);

        if (!clickedInside) {
          closeDropdown();
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [closeDropdown]);

    useEffect(() => {
      if (!isOpen) return;
      if (!triggerElement || !dropdownElement) return;
      if (hasParent) {
        positionChildDropdown(triggerElement, dropdownElement);
      } else {
        positionDropdown(triggerElement, dropdownElement, position);
      }
    }, [isOpen, hasParent, dropdownElement, triggerElement, position]);

    const positionChildDropdown = (triggerElement: HTMLDivElement, dropdownElement: HTMLDivElement) => {
      const computedPosition = getAutoPlacementDropdown(triggerElement, dropdownElement, "right", 0, true);
      const autoAlignment = getAutoAlignment(triggerElement!, dropdownElement!, computedPosition);
      const computedCoordinates = getCoordinates(computedPosition, triggerElement!, dropdownElement!, 0, autoAlignment);

      setAutoPosition(computedPosition);
      setCoordinates(computedCoordinates);
    };

    const positionDropdown = (triggerElement: HTMLDivElement, dropdownElement: HTMLDivElement, position: Position) => {
      const computedPosition =
        position === "auto" ? getAutoPlacementDropdown(triggerElement!, dropdownElement!, "bottom") : position;
      const autoAlignment = getAutoAlignment(triggerElement!, dropdownElement!, computedPosition);
      const computedCoordinates = getCoordinates(computedPosition, triggerElement!, dropdownElement!, 0, autoAlignment);

      setAutoPosition(computedPosition);
      setCoordinates(computedCoordinates);
    };

    return (
      <DropdownContextProvider dropdownId={autoId} closeRoot={closeDropdown} autoClose={autoClose}>
        <div ref={triggerCallbackRef} className={styles.trigger}>
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
              onKeyUp={onKeyUp}
              onKeyDown={onKeyDown}
            >
              <ul className={styles["dropdown-items"]} role="menu">
                {children}
              </ul>
            </div>
          </Overlay>
        )}
      </DropdownContextProvider>
    );
  },
);
