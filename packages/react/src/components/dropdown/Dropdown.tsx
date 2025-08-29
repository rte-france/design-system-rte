import {
  getAutoAlignment,
  getAutoPlacementDropdown,
  getCoordinates,
} from "@design-system-rte/core/components/utils/auto-placement";
import { useEffect, useState, useRef, useCallback, forwardRef } from "react";

import useAnimatedMount from "../../hooks/useAnimatedMount";
import { Overlay } from "../overlay/Overlay";
import { concatClassNames } from "../utils";

import { DropdownContextProvider } from "./context/DropdownContextProvider";
import styles from "./Dropdown.module.scss";
import { DropdownManager } from "./hooks/DropdownManager";
import { useDropdownState } from "./hooks/useDropdownState";

interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  dropdownId: string;
  trigger: React.ReactNode;
  hasParent?: boolean;
  disabled?: boolean;
  position?: "top" | "bottom" | "left" | "right" | "auto";
}

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  ({ trigger, className, style, dropdownId, hasParent, disabled, position = "bottom", children, ...props }, ref) => {
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
        <DropdownContextProvider dropdownId={autoId}>
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
                  {children}
                </ul>
              </div>
            </Overlay>
          )}
        </DropdownContextProvider>
      </>
    );
  },
);
