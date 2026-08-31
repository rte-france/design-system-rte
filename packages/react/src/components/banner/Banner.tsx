import {
  CloseButtonAriaLabel,
  bannerTypeLabel,
  BannerProps as CoreBannerProps,
  IconSize,
  generateId,
  iconTypeMap,
} from "@design-system-rte/core";
import { forwardRef, useEffect, useRef, useState } from "react";

import useAnimatedMount from "../../hooks/useAnimatedMount";
import Button from "../button/Button";
import Icon from "../icon/Icon";
import iconButtonStyle from "../iconButton/IconButton.module.scss";
import { concatClassNames } from "../utils";

import style from "./Banner.module.scss";

interface BannerProps extends CoreBannerProps, React.HTMLAttributes<HTMLDivElement> {}

const Banner = forwardRef<HTMLElement, BannerProps>(
  (
    {
      title,
      message,
      type = "info",
      closable = false,
      onClose,
      position = "push",
      actionCallback,
      actionLabel,
      className = "",
      isOpen = true,
      isCompact = false,
      ...props
    },
    ref,
  ) => {
    const [isInternalOpen, setIsInternalOpen] = useState(isOpen);
    const ariaRole = type === "error" ? "alert" : "status";
    const { shouldRender, isAnimating } = useAnimatedMount(isInternalOpen, 200);

    const bannerRef = useRef<HTMLElement | null>(null);
    const customId = generateId();

    const titleId = `banner-title-${customId}`;
    const messageId = `banner-message-${customId}`;

    useEffect(() => {
      setIsInternalOpen(isOpen);
    }, [isOpen]);

    useEffect(() => {
      if (type === "error" && shouldRender) {
        bannerRef.current?.focus();
      }
    }, [shouldRender, type]);

    const handleOnClose = () => {
      setIsInternalOpen(false);
      onClose?.();
    };

    const isClosable = closable || position === "overlay";

    return (
      shouldRender && (
        <section
          role={ariaRole}
          className={concatClassNames(style["rte-banner"], className)}
          ref={(node) => {
            bannerRef.current = node;
            if (typeof ref === "function") {
              ref(node);
            } else if (ref) {
              ref.current = node;
            }
          }}
          aria-labelledby={title ? titleId : undefined}
          aria-describedby={message ? messageId : undefined}
          data-type={type}
          data-position={position}
          data-compact={isCompact ? "true" : undefined}
          data-open={isAnimating || undefined}
          tabIndex={-1}
          {...props}
        >
          <div className={style["rte-banner-icon"]}>
            <Icon name={iconTypeMap[type]} size={32} aria-hidden="true" />
          </div>
          <div className={style["rte-banner-content"]}>
            {title && (
              <>
                <span id={titleId} className={style["rte-banner-title"]}>
                  <span className={style["rte-sr-only"]}>{bannerTypeLabel[type]} </span>
                  {title}
                </span>
              </>
            )}
            {message && (
              <div id={messageId} className={style["rte-banner-message"]}>
                <span>{message}</span>
              </div>
            )}
          </div>
          {actionCallback && actionLabel && (
            <Button
              label={actionLabel}
              onClick={actionCallback}
              variant="text"
              aria-label={actionLabel}
              size={isCompact ? "s" : "m"}
            />
          )}
          {isClosable && (
            <button
              type="button"
              className={concatClassNames(iconButtonStyle["icon-button"], style["rte-banner-close-button"])}
              data-size="m"
              data-variant="neutral"
              data-compact-spacing={true}
              aria-label={CloseButtonAriaLabel}
              onClick={handleOnClose}
            >
              <Icon name="close" size={IconSize["m"]} />
            </button>
          )}
        </section>
      )
    );
  },
);

export default Banner;
