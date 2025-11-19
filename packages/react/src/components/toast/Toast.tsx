import { IconSize, IconTypeMap } from "@design-system-rte/core/components/icon/icon.constants";
import { ToastProps as coreToastProps } from "@design-system-rte/core/components/toast/toast.interface";
import { forwardRef, MouseEventHandler, useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import useAnimatedMount from "../../hooks/useAnimatedMount";
import Button from "../button/Button";
import Icon from "../icon/Icon";
import IconButton from "../iconButton/IconButton";
import { Overlay } from "../overlay/Overlay";
import { concatClassNames } from "../utils";

import useHandleQueueChanges from "./hooks/useHandleQueueChanges";
import useHandleTimer from "./hooks/useHandleTimer";
import styles from "./Toast.module.scss";
import useToastQueueContext from "./toastQueue/useToastQueueContext";

type DSButtonElement = React.ReactElement<React.ComponentProps<typeof Button>, typeof Button>;

interface ToastProps extends coreToastProps, React.HTMLAttributes<HTMLDivElement> {
  actionButton?: DSButtonElement;
}

const Toast = forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      id,
      message,
      actionButton,
      type = "error",
      closable = false,
      placement = "bottom-right",
      isOpen = true,
      autoDismiss = true,
      duration = "medium",
      onClose,
      ...props
    },
    ref,
  ) => {
    const isAutoDismiss = autoDismiss && !!actionButton === false;

    const [internalId] = useState<string>(id || uuidv4());

    const { isInternalOpen, hideToast } = useHandleQueueChanges(internalId, isOpen);
    const { addToQueue, removeFromQueue } = useToastQueueContext();
    const { shouldRender, isAnimating } = useAnimatedMount(isInternalOpen, 300);
    const { initializeTimer, removeTimer } = useHandleTimer(
      { shouldStartTimer: isAutoDismiss, duration },
      isInternalOpen,
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
        addToQueue({ id: internalId, hasButtonAction: !!actionButton, type, isAutoDismiss: isAutoDismiss });
      } else {
        handleOnClose();
      }
    }, [isOpen, actionButton, type, isAutoDismiss, internalId, addToQueue, handleOnClose]);

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
      initializeTimer();
    };

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
              {type !== "neutral" && (
                <Icon
                  name={IconTypeMap[type]}
                  size={IconSize["xl"]}
                  className={styles["toast-icon"]}
                  aria-hidden="true"
                />
              )}
              <span className={styles["toast-message"]}>{message}</span>
            </div>
            {actionButton}
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
