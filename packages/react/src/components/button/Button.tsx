import { ButtonProps as CoreButtonProps } from "@design-system-rte/core/components/button/button.interface";
import { ButtonBadgeSizeMapping } from "@design-system-rte/core/components/button/common/common-button.constants";
import { forwardRef } from "react";

import Badge from "../badge/Badge";
import { concatClassNames } from "../utils";

import style from "./Button.module.scss";

interface ButtonProps
  extends Omit<CoreButtonProps, "disabled">, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = "m",
      label,
      variant = "primary",
      className = "",
      onClick,
      type = "button",
      badgeContent,
      badgeCount,
      badgeType,
      badgeIcon,
      ...props
    },
    ref,
  ) => {
    const shouldDisplayBadge = (badgeCount > 0 && badgeContent === "number") || (badgeContent === "icon" && badgeIcon);

    if (shouldDisplayBadge) {
      return (
        <Badge
          badgeType={badgeType}
          size={ButtonBadgeSizeMapping[size]}
          content={size === "s" ? "empty" : badgeContent}
          count={badgeCount}
          icon={badgeIcon}
        >
          <button
            ref={ref}
            type={type}
            className={concatClassNames(style.button, className)}
            data-size={size}
            data-variant={variant}
            onClick={onClick}
            {...props}
          >
            <span data-size={size} className={style.label}>
              {label}
            </span>
          </button>
        </Badge>
      );
    } else {
      return (
        <button
          ref={ref}
          type={type}
          className={concatClassNames(style.button, className)}
          data-size={size}
          data-variant={variant}
          onClick={onClick}
          {...props}
        >
          <span data-size={size} className={style.label}>
            {label}
          </span>
        </button>
      );
    }
  },
);

export default Button;
