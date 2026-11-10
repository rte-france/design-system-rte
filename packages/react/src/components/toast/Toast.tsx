import { generateId, ToastCloseButtonAriaLabel, ToastStatusMessageMap } from "@design-system-rte/core";
import { IconSize, IconTypeMap } from "@design-system-rte/core/components/icon/icon.constants";
import { ToastProps as coreToastProps } from "@design-system-rte/core/components/toast/toast.interface";
import {
  forwardRef,
  FocusEvent,
  FocusEventHandler,
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import useAnimatedMount from "../../hooks/useAnimatedMount";
import Button from "../button/Button";
import Icon from "../icon/Icon";
import { isValidIconName } from "../icon/IconMap";
import IconButton from "../iconButton/IconButton";
import { Overlay } from "../overlay/Overlay";
import { concatClassNames } from "../utils";

import useHandleQueueChanges from "./hooks/useHandleQueueChanges";
import useHandleTimer from "./hooks/useHandleTimer";
import styles from "./Toast.module.scss";
import useToastQueueContext from "./toastQueue/useToastQueueContext";

interface ToastProps extends coreToastProps, React.HTMLAttributes<HTMLDivElement> {
  showActionButton?: boolean;
}

const Toast = forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      id,
      message,
      type = "neutral",
      closable = false,
      placement = "bottom-right",
      isOpen = true,
      autoDismiss = true,
      actionButtonLabel,
      onActionButtonClick,
      duration = "medium",
      onClose,
      iconName,
      showLeftIcon = true,
      showActionButton = true,
      ...props
    },
    ref,
  ) => {
    const hasActionButton = !!actionButtonLabel && showActionButton;

    const isAutoDismiss = autoDismiss && !hasActionButton;

    const [internalId] = useState<string>(id || generateId());
    const previousFocusedElementRef = useRef<Element | null>(null);

    const { isInternalOpen, hideToast } = useHandleQueueChanges(internalId, isOpen);
    const { addToQueue, removeFromQueue, announceToast, isFirstInQueue } = useToastQueueContext();
    const isActiveToast = isOpen && isInternalOpen && isFirstInQueue(internalId);
    const { shouldRender, isAnimating } = useAnimatedMount(isInternalOpen, 300);
    const { initializeTimer, removeTimer } = useHandleTimer(
      { shouldStartTimer: isAutoDismiss && isInternalOpen, duration },
      () => {
        handleOnClose();
      },
    );

    const [position, alignment] = placement.split("-");

    const restorePreviousFocus = useCallback(() => {
      const previousFocusedElement = previousFocusedElementRef.current;
      previousFocusedElementRef.current = null;
      if (previousFocusedElement instanceof HTMLElement) {
        previousFocusedElement.focus();
      }
    }, []);

    const savePreviousFocus = (event: FocusEvent<HTMLDivElement>) => {
      if (previousFocusedElementRef.current === null) {
        const previouslyFocusedElement = event.relatedTarget;
        previousFocusedElementRef.current = previouslyFocusedElement;
      }
    };

    const handleOnClose = useCallback(() => {
      restorePreviousFocus();
      hideToast();
      removeTimer();
      removeFromQueue(internalId);
      onClose?.();
    }, [restorePreviousFocus, hideToast, removeTimer, removeFromQueue, internalId, onClose]);

    useEffect(() => {
      if (!isInternalOpen) {
        restorePreviousFocus();
      }
    }, [isInternalOpen, restorePreviousFocus]);

    useEffect(() => {
      if (isOpen) {
        addToQueue({ id: internalId, hasActionButton: hasActionButton, type });
      } else {
        handleOnClose();
      }
    }, [isOpen, hasActionButton, type, isAutoDismiss, internalId, addToQueue, handleOnClose]);

    useEffect(() => {
      if (!isActiveToast) {
        return;
      }

      return announceToast(`${ToastStatusMessageMap[type]} ${message}`);
    }, [isActiveToast, message, type, announceToast]);

    const handleOnClickCloseButton = () => {
      handleOnClose();
    };

    const isHoveredRef = useRef(false);
    const isFocusedRef = useRef(false);

    const resumeTimer = useCallback(() => {
      if (isAutoDismiss && isInternalOpen && !isHoveredRef.current && !isFocusedRef.current) {
        initializeTimer();
      }
    }, [isAutoDismiss, isInternalOpen, initializeTimer]);

    const handleOnMouseHover: MouseEventHandler<HTMLDivElement> = (event) => {
      event.stopPropagation();
      isHoveredRef.current = true;
      if (isAutoDismiss && isOpen) {
        removeTimer();
      }
    };

    const handleOnMouseOut: MouseEventHandler<HTMLDivElement> = (event) => {
      event.stopPropagation();
      isHoveredRef.current = false;
      resumeTimer();
    };

    const handleOnFocusIn: FocusEventHandler<HTMLDivElement> = (event) => {
      isFocusedRef.current = true;
      savePreviousFocus(event);
      if (isAutoDismiss && isOpen) {
        removeTimer();
      }
    };

    const handleOnFocusOut: FocusEventHandler<HTMLDivElement> = (event) => {
      const nextFocused = event.relatedTarget as Node | null;
      if (nextFocused && event.currentTarget.contains(nextFocused)) {
        return;
      }
      isFocusedRef.current = false;
      previousFocusedElementRef.current = null;
      resumeTimer();
    };

    const displayDefaultIcon = showLeftIcon && type !== "neutral";
    const displayCustomIcon = showLeftIcon && iconName && isValidIconName(iconName);

    const computedStatusMessage = ToastStatusMessageMap[type];

    return (
      shouldRender && (
        <Overlay>
          <div
            className={concatClassNames(styles["toast"], props.className)}
            data-type={type}
            data-position={position}
            data-alignment={alignment}
            data-open={isAnimating || undefined}
            ref={ref}
            onMouseOver={handleOnMouseHover}
            onMouseOut={handleOnMouseOut}
            onFocus={handleOnFocusIn}
            onBlur={handleOnFocusOut}
            {...props}
          >
            <div className={styles["toast-content"]}>
              {displayDefaultIcon ? (
                <Icon
                  name={IconTypeMap[type]}
                  size={IconSize["xl"]}
                  className={styles["toast-icon"]}
                  aria-hidden="true"
                />
              ) : (
                displayCustomIcon && (
                  <Icon name={iconName} size={IconSize["xl"]} className={styles["toast-icon"]} aria-hidden="true" />
                )
              )}
              <span className={styles["sr-only"]}>{computedStatusMessage}</span>
              <span className={styles["toast-message"]}>{message}</span>
            </div>
            {hasActionButton && (
              <Button
                hierarchy="text"
                isReversed={type === "neutral"}
                onClick={onActionButtonClick}
                label={actionButtonLabel}
              />
            )}
            {closable && (
              <IconButton
                data-testid="toast-close-button"
                name="close"
                variant={type === "neutral" ? "reverse" : "neutral"}
                onClick={handleOnClickCloseButton}
                aria-label={ToastCloseButtonAriaLabel}
              />
            )}
          </div>
        </Overlay>
      )
    );
  },
);

export default Toast;
