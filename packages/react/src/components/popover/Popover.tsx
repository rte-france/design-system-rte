import { POPOVER_GAP, POPOVER_GAP_ARROW } from "@design-system-rte/core/components/popover/popover.constants";
import { PopoverProps as CorePopoverProps } from "@design-system-rte/core/components/popover/popover.interface";
import {
  getAutoAlignment,
  getAutoPlacement,
  getCoordinates,
} from "@design-system-rte/core/components/utils/auto-placement";
import { ENTER_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";
import { forwardRef, useCallback, useEffect, useRef, useState } from "react";

import useAnimatedMount from "../../hooks/useAnimatedMount";
import { useClickAway } from "../../hooks/useClickAway";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import { useKeydownEscape } from "../../hooks/useKeydownEscape";
import { useScrollEvent } from "../../hooks/useScrollEvent";
import Button from "../button/Button";
import { Overlay } from "../overlay/Overlay";
import { concatClassNames } from "../utils";

import style from "./Popover.module.scss";

interface PopoverProps extends CorePopoverProps, Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "content"> {
  content: string;
  children: React.ReactNode;
  triggerStyles?: React.CSSProperties;
}

const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      children,
      position = "auto",
      alignment,
      content,
      arrow = true,
      title,
      primaryButtonLabel,
      secondaryButtonLabel,
      className = "",
      triggerStyles,
      closeOnClickOutside = true,
      closeOnEscape = true,
      onClickPrimaryButton,
      onClickSecondaryButton,
      ...props
    },
    ref,
  ) => {
    const triggerRef = useRef<HTMLDivElement>(null);
    const [popoverElement, setPopoverElement] = useState<HTMLDivElement | null>(null);
    const [autoPosition, setAutoPosition] = useState<string>(position);
    const [autoAlignment, setAutoAlignment] = useState<string | undefined>(alignment);
    const [coordinates, setCoordinates] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
    const [isOpen, setIsOpen] = useState(false);
    const { shouldRender, isAnimating } = useAnimatedMount(isOpen, 150);
    const [positionReady, setPositionReady] = useState(false);

    const updatePopoverPosition = useCallback(() => {
      if (!triggerRef.current || !popoverElement) return;
      const computedPosition =
        position === "auto"
          ? getAutoPlacement(triggerRef.current, popoverElement, "top", arrow ? POPOVER_GAP_ARROW : POPOVER_GAP)
          : position;
      const computedAlignment = alignment || getAutoAlignment(triggerRef.current, popoverElement, computedPosition);
      const computedCoordinates = getCoordinates(
        computedPosition,
        triggerRef.current,
        popoverElement,
        arrow ? POPOVER_GAP_ARROW : POPOVER_GAP,
        computedAlignment,
      );
      setAutoAlignment(computedAlignment);
      setCoordinates(computedCoordinates);
      setAutoPosition(computedPosition);
    }, [position, arrow, popoverElement, alignment]);

    const handleClickAway = useCallback(() => {
      if (closeOnClickOutside) {
        setIsOpen(false);
      }
    }, [closeOnClickOutside]);

    const handleKeydownEscape = useCallback(() => {
      if (closeOnEscape) {
        setIsOpen(false);
      }
    }, [closeOnEscape]);

    useFocusTrap(popoverElement!, shouldRender);
    useClickAway(handleClickAway, triggerRef.current!, popoverElement!);
    useKeydownEscape(handleKeydownEscape);
    useScrollEvent(updatePopoverPosition);

    const popoverCallbackRef = useCallback(
      (node: HTMLDivElement | null) => {
        setPopoverElement(node);
        if (typeof ref === "function") ref(node);
        else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        if (node && isOpen) {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              updatePopoverPosition();
            });
          });
        }
      },
      [ref, isOpen, updatePopoverPosition],
    );

    useEffect(() => {
      if (isOpen && popoverElement) {
        updatePopoverPosition();
        setPositionReady(true);
      } else {
        setPositionReady(false);
      }
    }, [isOpen, popoverElement, updatePopoverPosition]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === ENTER_KEY) {
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        }
      }
    };

    const handleOnClick = (e: React.MouseEvent) => {
      if (!isOpen) {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    const handleClickSecondaryButton = () => {
      if (onClickSecondaryButton) {
        onClickSecondaryButton();
      }
      setIsOpen(false);
    };

    const handleClickPrimaryButton = () => {
      if (onClickPrimaryButton) {
        onClickPrimaryButton();
      }
      setIsOpen(false);
    };

    return (
      <div
        ref={triggerRef}
        className={concatClassNames(style.popoverTrigger)}
        onClick={handleOnClick}
        onKeyDown={handleKeyDown}
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
              data-arrow={arrow}
              data-position={autoPosition}
              data-alignment={autoAlignment}
              data-open={(positionReady && isAnimating) || undefined}
              style={{ top: `${coordinates.top}px`, left: `${coordinates.left}px` }}
              {...props}
            >
              <div className={style.popoverInner}>
                <div className={style.popoverContentContainer}>
                  {title && <div className={style.popoverTitle}>{title}</div>}
                  <div className={style.popoverContent}>{content}</div>
                </div>
                <div className={style.popoverButtonContainer}>
                  {secondaryButtonLabel && (
                    <Button
                      className="popoverButton"
                      onClick={handleClickSecondaryButton}
                      label={secondaryButtonLabel}
                      variant="secondary"
                    />
                  )}
                  <Button
                    className="popoverButton"
                    onClick={handleClickPrimaryButton}
                    label={primaryButtonLabel}
                    variant="primary"
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
