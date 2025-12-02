import { BannerProps as CoreBannerProps } from "@design-system-rte/core/components/banner/banner.interface";
import { forwardRef, useEffect, useState } from "react";

import useAnimatedMount from "../../hooks/useAnimatedMount";
import Button from "../button/Button";
import Icon from "../icon/Icon";
import IconButton from "../iconButton/IconButton";
import { concatClassNames } from "../utils";

import style from "./Banner.module.scss";

interface BannerProps extends CoreBannerProps, React.HTMLAttributes<HTMLDivElement> {}

const Banner = forwardRef<HTMLDivElement, BannerProps>(
  (
    {
      title,
      message,
      type = "alert",
      closable = false,
      onClose,
      position = "push",
      actionCallback,
      actionLabel,
      className = "",
      isOpen = true,
      ...props
    },
    ref,
  ) => {
    const [isInternalOpen, setIsInternalOpen] = useState(isOpen);
    const ariaRole = type === "error" ? "alert" : "status";
    const { shouldRender, isAnimating } = useAnimatedMount(isInternalOpen, 200);

    const iconTypeMap: Record<string, string> = {
      info: "info",
      error: "dangerous",
      success: "check-circle",
      warning: "warning",
    };

    useEffect(() => {
      setIsInternalOpen(isOpen);
    }, [isOpen]);

    if (closable === false && position === "overlay") {
      console.warn("Banner: 'closable' and 'onClose' props must be set when 'position' has 'overlay' value.");
      return null;
    }

    const handleOnClose = () => {
      setIsInternalOpen(false);
      onClose?.();
    };

    return (
      shouldRender && (
        <section
          role={ariaRole}
          className={concatClassNames(style["banner"], className)}
          ref={ref}
          data-type={type}
          data-position={position}
          data-open={isAnimating || undefined}
          {...props}
        >
          <div className={style["banner-icon"]}>
            <Icon name={iconTypeMap[type]} size={32} />
          </div>
          <div className={style["banner-content"]}>
            {title && <span className={style["banner-title"]}>{title}</span>}
            {message && (
              <div className={style["banner-message"]}>
                <span>{message}</span>
              </div>
            )}
          </div>
          {actionCallback && actionLabel && (
            <Button label={actionLabel} onClick={actionCallback} variant="text" aria-label={actionLabel} size="s" />
          )}
          {closable && (
            <div className={style["banner-close-icon"]}>
              <IconButton variant="neutral" name="close" onClick={handleOnClose} aria-label="close banner" />
            </div>
          )}
        </section>
      )
    );
  },
);

export default Banner;
