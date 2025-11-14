import { TOOLTIP_ANIMATION_DURATION, TOOLTIP_GAP } from "@design-system-rte/core/components/tooltip/tooltip.constants";
import { TooltipProps as CoreTooltipProps } from "@design-system-rte/core/components/tooltip/tooltip.interface";
import { getTooltipGap } from "@design-system-rte/core/components/tooltip/tooltip.utils";
import { getAutoPlacement, getCoordinates } from "@design-system-rte/core/components/utils/auto-placement";
import { forwardRef, useCallback, useEffect, useRef, useState } from "react";

import useAnimatedMount from "../../hooks/useAnimatedMount";
import { Overlay } from "../overlay/Overlay";
import { concatClassNames } from "../utils";

import style from "./Tooltip.module.scss";

interface TooltipProps extends CoreTooltipProps, Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  children: React.ReactNode;
  triggerStyles?: React.CSSProperties;
  shouldFocusTrigger?: boolean;
}

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      children,
      position = "top",
      alignment = "center",
      label,
      arrow = true,
      className = "",
      triggerStyles,
      shouldFocusTrigger = true,
      gap = TOOLTIP_GAP,
      ...props
    },
    ref,
  ) => {
    const triggerRef = useRef<HTMLDivElement>(null);
    const tooltipRef = useRef<HTMLDivElement | null>(null);
    const [tooltipElement, setTooltipElement] = useState<HTMLDivElement | null>(null);
    const [autoPosition, setAutoPosition] = useState<string>(position);
    const [coordinates, setCoordinates] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
    const [isOpen, setIsOpen] = useState(false);

    const { shouldRender, isAnimating } = useAnimatedMount(isOpen, TOOLTIP_ANIMATION_DURATION);

    const tooltipCallbackRef = useCallback(
      (node: HTMLDivElement | null) => {
        tooltipRef.current = node;
        setTooltipElement(node);
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [ref],
    );

    const computePosition = useCallback(() => {
      if (isOpen && triggerRef.current && tooltipElement) {
        const tooltipGap = getTooltipGap(arrow, gap);
        const computedPosition =
          position === "auto"
            ? getAutoPlacement(triggerRef.current, tooltipElement!, "top", tooltipGap, true)
            : position;
        const computedCoordinates = getCoordinates(computedPosition, triggerRef.current, tooltipElement, tooltipGap);
        setAutoPosition(computedPosition);
        setCoordinates(computedCoordinates);
      }
    }, [isOpen, position, arrow, tooltipElement, gap]);

    useEffect(() => {
      computePosition();
      window.addEventListener("scroll", computePosition);

      return () => {
        window.removeEventListener("scroll", computePosition);
      };
    }, [computePosition]);

    const openTooltip = () => {
      setIsOpen(true);
    };

    const closeTooltip = () => {
      setIsOpen(false);
    };

    return (
      <div
        ref={triggerRef}
        className={style["tooltip-trigger"]}
        onMouseEnter={openTooltip}
        onMouseLeave={closeTooltip}
        onFocus={openTooltip}
        onFocusCapture={!shouldFocusTrigger ? openTooltip : undefined}
        onBlur={closeTooltip}
        tabIndex={shouldFocusTrigger ? 0 : undefined}
        style={triggerStyles}
      >
        {children}
        {shouldRender && (
          <Overlay>
            <div
              ref={tooltipCallbackRef}
              className={concatClassNames(style.tooltip, className)}
              data-position={autoPosition}
              data-open={isAnimating || undefined}
              data-alignment={alignment}
              data-arrow={arrow}
              style={{
                top: `${coordinates.top}px`,
                left: `${coordinates.left}px`,
              }}
              {...props}
            >
              {label && (
                <span role="tooltip" className={style.tooltipLabel}>
                  {label}
                </span>
              )}
            </div>
          </Overlay>
        )}
      </div>
    );
  },
);

export default Tooltip;
