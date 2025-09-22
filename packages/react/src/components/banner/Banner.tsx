import { forwardRef } from "react";

import useAnimatedMount from "../../hooks/useAnimatedMount";
import Button from "../button/Button";
import Icon from "../icon/Icon";
import IconButton from "../iconButton/IconButton";
import { concatClassNames } from "../utils";

import style from "./Banner.module.scss";

interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
  type: "default" | "alert";
  position?: "overlay" | "push";
  title?: string;
  message?: string;
  closable?: boolean;
  showIcon?: boolean;
  onClose?: () => void;
  actionCallback?: () => void;
  actionLabel?: string;
  isOpen?: boolean;
}

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

    console.log({ isOpen, shouldRender, isAnimating });

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
                <p>{message}</p>
                {actionCallback && actionLabel && (
                  <Button
                    label={actionLabel}
                    className={style["banner-action-button"]}
                    onClick={actionCallback}
                    variant="text"
                  />
                )}
              </div>
            </div>
            {closable && (
              <div className={style["banner-close-icon"]}>
                <IconButton variant="transparent" name="close" onClick={handleOnClose} />
              </div>
            )}
          </div>
        </section>
      )
    );
  },
);

export default Banner;
