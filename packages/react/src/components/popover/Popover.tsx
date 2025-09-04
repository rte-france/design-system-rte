import { PopoverProps as CorePopoverProps } from "@design-system-rte/core/components/popover/popover.interface";
import { getAutoPlacement, getCoordinates } from "@design-system-rte/core/components/utils/auto-placement";
import { forwardRef, useCallback, useEffect, useRef, useState } from "react";

import Button from "../button/Button";

import useAnimatedMount from "../../hooks/useAnimatedMount";
import { Overlay } from "../overlay/Overlay";
import { concatClassNames } from "../utils";

import style from "./Popover.module.scss";

// You'll need to define these constants for popover spacing
const POPOVER_GAP = 8; // Adjust as needed
const POPOVER_GAP_ARROW = 12; // Adjust as needed

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
        const popoverRef = useRef<HTMLDivElement | null>(null);
        const [popoverElement, setPopoverElement] = useState<HTMLDivElement | null>(null);
        const [autoPosition, setAutoPosition] = useState<string>(position);
        const [coordinates, setCoordinates] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
        const [isOpen, setIsOpen] = useState(false);

        const { shouldRender, isAnimating } = useAnimatedMount(isOpen, 150);

        const popoverCallbackRef = useCallback(
            (node: HTMLDivElement | null) => {
                popoverRef.current = node;
                setPopoverElement(node);
                if (typeof ref === "function") {
                    ref(node);
                } else if (ref) {
                    ref.current = node;
                }
            },
            [ref],
        );

        const computePosition = useCallback(() => {
            if (isOpen && triggerRef.current && popoverElement) {
                const computedPosition =
                    position === "auto"
                        ? getAutoPlacement(triggerRef.current, popoverElement!, "top", arrow ? POPOVER_GAP_ARROW : POPOVER_GAP)
                        : position;
                const computedCoordinates = getCoordinates(
                    computedPosition,
                    triggerRef.current,
                    popoverElement,
                    arrow ? POPOVER_GAP_ARROW : POPOVER_GAP,
                );
                setAutoPosition(computedPosition);
                setCoordinates(computedCoordinates);
            }
        }, [isOpen, position, arrow, popoverElement]);

        useEffect(() => {
            computePosition();
            window.addEventListener("scroll", computePosition);

            return () => {
                window.removeEventListener("scroll", computePosition);
            };
        }, [computePosition]);

        const openPopover = () => {
            setIsOpen(true);
        };

        const closePopover = () => {
            setIsOpen(false);
        };

        return (
            <div
                ref={triggerRef}
                className={concatClassNames(style.popoverTrigger)}
                onClick={openPopover}
                onFocus={openPopover}
                onBlur={closePopover}
                tabIndex={0}
                style={triggerStyles}
            >
                {children}
                {shouldRender && (
                    <Overlay>
                        <div
                            ref={popoverCallbackRef}
                            className={concatClassNames(style.popover, className)}
                            data-position={autoPosition}
                            data-alignment={alignment}
                            data-open={isAnimating || undefined}
                            data-arrow={arrow}
                            data-showTitle={showTitle}
                            data-button2={button2}
                            style={{
                                top: `${coordinates.top}px`,
                                left: `${coordinates.left}px`,
                            }}
                            {...props}
                        >
                            <div className={style.popoverContentContainer}>
                            {showTitle && title && (
                                <div className={style.popoverTitle}>
                                    {title}
                                </div>
                            )}
                            <div className={style.popoverContent}>
                                {content}
                            </div>
                            </div>
                            <div className={style.popoverButtonContainer}>
                                <Button onClick={closePopover} label={buttonLabel} variant="primary"
                                size="m" />
                                {button2 && <Button onClick={closePopover} label={button2Label} variant="secondary" size="m" />}
                            </div>
                        </div>
                    </Overlay>
                )}
            </div>
        );
    },
);

export default Popover;
