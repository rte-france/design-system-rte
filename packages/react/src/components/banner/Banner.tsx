import { BannerProps as CoreBannerProps } from "@design-system-rte/core/components/banner/banner.interface";
import { forwardRef } from "react";

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
      showIcon = false,
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
    const ariaRole = type === "default" ? "status" : "alert";
    const { shouldRender, isAnimating } = useAnimatedMount(isOpen, 200);

    if (closable === false && position === "overlay") {
      console.warn("Banner: 'closable' and 'onClose' props must be set when 'position' has 'overlay' value.");
      return null;
    }

    const handleOnClose = () => {
      onClose?.();
    };

    return (
      shouldRender && (
        <section
          role={ariaRole}
          className={concatClassNames(style["banner-container"], className)}
          ref={ref}
          data-type={type}
          data-position={position}
          data-open={isAnimating || undefined}
          {...props}
        >
          <div className={style["banner"]}>
            {showIcon && (
              <div className={style["banner-icon"]}>
                <Icon name={type === "default" ? "info" : "error"} size={32} />
              </div>
            )}
            <div className={style["banner-content"]}>
              <span className={style["banner-title"]}>{title}</span>
              <div className={style["banner-message"]}>
                <span>{message}</span>
                {actionCallback && actionLabel && (
                  <Button label={actionLabel} onClick={actionCallback} variant="neutral" aria-label={actionLabel} />
                )}
              </div>
            </div>
            {closable && (
              <div className={style["banner-close-icon"]}>
                <IconButton variant="neutral" name="close" onClick={handleOnClose} aria-label="close banner" />
              </div>
            )}
          </div>
        </section>
      )
    );
  },
);

export default Banner;
