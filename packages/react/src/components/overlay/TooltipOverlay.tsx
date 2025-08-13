import { getAutoPlacement, getCoordinates } from "@design-system-rte/core/components/utils/auto-placement";
import { useRef, useState, useEffect, forwardRef } from "react";

import { OverlayPortal } from "./Overlay";
import styles from "./TooltipOverlay.module.scss";

type TooltipProps = {
  label: string;
  position?: "top" | "bottom" | "left" | "right" | "auto";
  children: React.ReactNode;
};

const margin = 10;

export const TooltipOverlay = forwardRef<HTMLDivElement, TooltipProps>(({ label, position = "top", children }, ref) => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [coordinates, setCoordinates] = useState<{ top: number; left: number }>({ top: 0, left: 0 });

  useEffect(() => {
    if (isOpen && triggerRef.current && tooltipRef.current) {
      const autoPosition =
        position === "auto" ? getAutoPlacement(triggerRef.current, tooltipRef.current!, "top", margin) : position;
      const computedCoordinates = getCoordinates(autoPosition, triggerRef.current, tooltipRef.current, margin);
      setCoordinates(computedCoordinates);
    }
  }, [isOpen, position]);

  return (
    <div
      ref={triggerRef}
      className={styles["tooltip-trigger"]}
      onMouseEnter={() => {
        setIsOpen(true);
      }}
      onMouseLeave={() => {
        setIsOpen(false);
      }}
    >
      {children}

      <OverlayPortal>
        <div
          id="tooltip-overlay"
          ref={(node) => {
            tooltipRef.current = node;
            if (typeof ref === "function") {
              ref(node);
            } else if (ref) {
              ref.current = node;
            }
          }}
          role="tooltip"
          data-position={position}
          data-open={isOpen || undefined}
          className={styles["tooltip-overlay"]}
          style={{
            top: `${coordinates.top}px`,
            left: `${coordinates.left}px`,
          }}
        >
          {label}
        </div>
      </OverlayPortal>
    </div>
  );
});
