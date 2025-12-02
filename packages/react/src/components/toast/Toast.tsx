import { IconSize, IconTypeMap } from "@design-system-rte/core/components/icon/icon.constants";
import { ToastProps as coreToastProps } from "@design-system-rte/core/components/toast/toast.interface";
import { forwardRef, MouseEventHandler, useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
      type = "error",
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

    const [internalId] = useState<string>(id || uuidv4());

    const { isInternalOpen, hideToast } = useHandleQueueChanges(internalId, isOpen);
    const { addToQueue, removeFromQueue } = useToastQueueContext();
    const { shouldRender, isAnimating } = useAnimatedMount(isInternalOpen, 300);
    const { initializeTimer, removeTimer } = useHandleTimer(
      { shouldStartTimer: isAutoDismiss && isInternalOpen, duration },
      () => {
        handleOnClose();
      },
    );

    const [position, alignment] = placement.split("-");

    const handleOnClose = useCallback(() => {
      hideToast();
      removeTimer();
      removeFromQueue(internalId);
      onClose?.();
    }, [hideToast, removeTimer, removeFromQueue, internalId, onClose]);

    useEffect(() => {
      if (isOpen) {
        addToQueue({ id: internalId, hasActionButton: hasActionButton, type });
      } else {
        handleOnClose();
      }
    }, [isOpen, hasActionButton, type, isAutoDismiss, internalId, addToQueue, handleOnClose]);

    const handleOnClickCloseButton = () => {
      handleOnClose();
    };

    const handleOnMouseHover: MouseEventHandler<HTMLDivElement> = (e) => {
      e.stopPropagation();
      if (isAutoDismiss && isOpen) {
        removeTimer();
      }
    };

    const handleOnMouseOut: MouseEventHandler<HTMLDivElement> = (e) => {
      e.stopPropagation();
      if (isAutoDismiss) {
        initializeTimer();
      }
    };

    const displayDefaultIcon = showLeftIcon && type !== "neutral";
    const displayCustomIcon = showLeftIcon && iconName && isValidIconName(iconName);

    return (
      shouldRender && (
        <Overlay>
          <div
            role="status"
            className={concatClassNames(styles["toast"], props.className)}
            data-type={type}
            data-position={position}
            data-alignment={alignment}
            data-open={isAnimating || undefined}
            ref={ref}
            onMouseOver={handleOnMouseHover}
            onMouseOut={handleOnMouseOut}
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
              <span className={styles["toast-message"]}>{message}</span>
            </div>
            {hasActionButton && (
              <Button
                variant={type === "neutral" ? "reverse" : "transparent"}
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
              />
            )}
          </div>
        </Overlay>
      )
    );
  },
);

export default Toast;
