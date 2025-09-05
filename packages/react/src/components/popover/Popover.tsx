import { POPOVER_GAP, POPOVER_GAP_ARROW } from "@design-system-rte/core/components/popover/popover.constants";
import { PopoverProps as CorePopoverProps } from "@design-system-rte/core/components/popover/popover.interface";
import { getAutoPlacement, getCoordinates } from "@design-system-rte/core/components/utils/auto-placement";
import { forwardRef, useCallback, useEffect, useRef, useState } from "react";

import useAnimatedMount from "../../hooks/useAnimatedMount";
import Button from "../button/Button";
import { Overlay } from "../overlay/Overlay";
import { concatClassNames } from "../utils";

import style from "./Popover.module.scss";

interface PopoverProps extends CorePopoverProps, Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  children: React.ReactNode;
  triggerStyles?: React.CSSProperties;
}

const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      children,
      position = "auto",
      alignment = "start",
      content,
      arrow = true,
      title,
      showTitle = false,
      buttonLabel = "Close",
      button2 = false,
      button2Label = "Cancel",
      className = "",
      triggerStyles,
      ...props
    },
    ref,
  ) => {
    const triggerRef = useRef<HTMLDivElement>(null);
    const [popoverElement, setPopoverElement] = useState<HTMLDivElement | null>(null);
    const [autoPosition, setAutoPosition] = useState<string>(position);
    const [coordinates, setCoordinates] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
    const [isOpen, setIsOpen] = useState(false);
    const { shouldRender, isAnimating } = useAnimatedMount(isOpen, 150);

    const popoverCallbackRef = useCallback(
      (node: HTMLDivElement | null) => {
        setPopoverElement(node);
        if (typeof ref === "function") ref(node);
        else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      },
      [ref],
    );

    const updatePopoverPosition = useCallback(() => {
      if (!(isOpen && triggerRef.current && popoverElement)) {
        return;
      }
      const computedPosition =
        position === "auto"
          ? getAutoPlacement(triggerRef.current, popoverElement, "top", arrow ? POPOVER_GAP_ARROW : POPOVER_GAP)
          : position;
      const computedCoordinates = getCoordinates(
        computedPosition,
        triggerRef.current,
        popoverElement,
        arrow ? POPOVER_GAP_ARROW : POPOVER_GAP,
      );
      setAutoPosition(computedPosition);
      setCoordinates(computedCoordinates);
    }, [isOpen, position, arrow, popoverElement]);

    useEffect(() => {
      updatePopoverPosition();
      if (!isOpen) return;
      window.addEventListener("scroll", updatePopoverPosition, true);
      return () => {
        window.removeEventListener("scroll", updatePopoverPosition, true);
      };
    }, [isOpen, updatePopoverPosition]);

    useEffect(() => {
      if (!(shouldRender && isOpen && popoverElement)) {
        return;
      }
      const focusable = popoverElement.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length > 0) (focusable[0] as HTMLElement).focus();

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Tab") {
          const first = focusable[0] as HTMLElement;
          const last = focusable[focusable.length - 1] as HTMLElement;
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
          }
          return;
        }
        if (event.key === "Escape") {
          setIsOpen(false);
        }
      };
      popoverElement.addEventListener("keydown", handleKeyDown);
      return () => popoverElement.removeEventListener("keydown", handleKeyDown);
    }, [shouldRender, isOpen, popoverElement]);

    useEffect(() => {
      if (!isOpen) return;
      function handleClickAway(event: MouseEvent) {
        const trigger = triggerRef.current;
        if (!trigger || !popoverElement) return;
        if (!trigger.contains(event.target as Node) && !popoverElement.contains(event.target as Node)) {
          setIsOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickAway);
      return () => document.removeEventListener("mousedown", handleClickAway);
    }, [isOpen, popoverElement]);

    const handleTriggerInteraction = (e: React.MouseEvent | React.KeyboardEvent) => {
      if (
        !isOpen &&
        ((e.type === "click" && (e as React.MouseEvent).button === 0) ||
          (e.type === "keydown" &&
            ((e as React.KeyboardEvent).key === "Enter" || (e as React.KeyboardEvent).key === " ")))
      ) {
        setIsOpen(true);
      }
    };

    return (
      <div
        ref={triggerRef}
        className={concatClassNames(style.popoverTrigger)}
        onClick={handleTriggerInteraction}
        onKeyDown={handleTriggerInteraction}
        style={triggerStyles}
      >
        {children}
        {shouldRender && (
          <Overlay>
            <div
              ref={popoverCallbackRef}
              className={concatClassNames(style.popover, className)}
              role="dialog"
              aria-modal="true"
              aria-labelledby={showTitle && title ? "popover-title" : undefined}
              aria-describedby="popover-content"
              data-arrow={arrow}
              data-position={autoPosition}
              data-alignment={alignment}
              data-open={isAnimating || undefined}
              style={{ top: `${coordinates.top}px`, left: `${coordinates.left}px` }}
              {...props}
            >
              <div className={style.popoverInner}>
                <div className={style.popoverContentContainer}>
                  {showTitle && title && <div className={style.popoverTitle}>{title}</div>}
                  <div className={style.popoverContent}>{content}</div>
                </div>
                <div className={style.popoverButtonContainer}>
                  {button2 && (
                    <Button
                      className="popoverButton"
                      onClick={() => setIsOpen(false)}
                      label={button2Label}
                      variant="secondary"
                      size="m"
                    />
                  )}
                  <Button
                    className="popoverButton"
                    onClick={() => setIsOpen(false)}
                    label={buttonLabel}
                    variant="primary"
                    size="m"
                  />
                </div>
              </div>
            </div>
          </Overlay>
        )}
      </div>
    );
  },
);

export default Popover;
