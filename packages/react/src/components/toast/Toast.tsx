import { IconSize, IconTypeMap } from "@design-system-rte/core/components/icon/icon.constants";
import { forwardRef, MouseEventHandler, useCallback, useEffect, useRef, useState } from "react";

import useAnimatedMount from "../../hooks/useAnimatedMount";
import Button from "../button/Button";
import Icon from "../icon/Icon";
import IconButton from "../iconButton/IconButton";
import { Overlay } from "../overlay/Overlay";
import { concatClassNames } from "../utils";

import styles from "./Toast.module.scss";

type DSButtonElement = React.ReactElement<React.ComponentProps<typeof Button>, typeof Button>;

type ToastDuration = "short" | "medium" | "long";

const SHORT_TOAST_DURATION = 3000;
const MEDIUM_TOAST_DURATION = 5000;
const LONG_TOAST_DURATION = 10000;

const ToastDurationMap: Record<string, number> = {
  short: SHORT_TOAST_DURATION,
  medium: MEDIUM_TOAST_DURATION,
  long: LONG_TOAST_DURATION,
};

interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  message: string;
  type?: "info" | "success" | "warning" | "error" | "neutral";
  placement?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "bottom-center";
  closable?: boolean;
  actionButton?: DSButtonElement;
  isOpen?: boolean;
  autoDismiss?: boolean;
  handleOnClose?: () => void;
  duration?: ToastDuration;
}

const Toast = forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      message,
      actionButton,
      type = "error",
      closable = false,
      placement = "bottom-right",
      isOpen = true,
      autoDismiss = true,
      duration = "medium",
      handleOnClose,
      ...props
    },
    ref,
  ) => {
    const [position, alignment] = placement.split("-");
    const [isInternalOpen, setIsInternalOpen] = useState(isOpen);

    const [count, setCount] = useState(ToastDurationMap[duration] / 1000);

    const { shouldRender, isAnimating } = useAnimatedMount(isInternalOpen, 300);

    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const initializeTimer = useCallback(() => {
      if (autoDismiss && isOpen) {
        intervalRef.current = setInterval(() => {
          setCount((prevCount) => prevCount - 1);
        }, 1000);

        timerRef.current = setTimeout(() => {
          setIsInternalOpen(false);
          handleOnClose?.();
        }, ToastDurationMap[duration]);
      }
    }, [autoDismiss, duration, handleOnClose, isOpen]);

    const removeTimer = useCallback(() => {
      if (timerRef.current && intervalRef.current) {
        clearInterval(intervalRef.current);
        clearTimeout(timerRef.current);
        setCount(ToastDurationMap[duration] / 1000);
        timerRef.current = null;
      }
    }, [duration]);

    useEffect(() => {
      setIsInternalOpen(isOpen);

      initializeTimer();

      return () => {
        removeTimer();
      };
    }, [isOpen, initializeTimer, removeTimer]);

    const handleOnClickCloseButton = () => {
      setIsInternalOpen(false);
      handleOnClose?.();
    };

    const handleOnMouseHover: MouseEventHandler<HTMLDivElement> = (e) => {
      e.stopPropagation();
      if (autoDismiss && isOpen) {
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
          <div>
            {/* TODO: Remove */}
            <div>{count}</div>
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
                  name="close"
                  variant={type === "neutral" ? "reverse" : "neutral"}
                  onClick={handleOnClickCloseButton}
                />
              )}
            </div>
          </div>
        </Overlay>
      )
    );
  },
);

export default Toast;
