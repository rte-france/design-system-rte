import { ButtonProps as CoreButtonProps } from "@design-system-rte/core/components/button/button.interface";
import {
  ButtonBadgeSizeMapping,
  ButtonIconSize,
} from "@design-system-rte/core/components/button/common/common-button.constants";
import { forwardRef } from "react";

import Badge from "../badge/Badge";
import Icon from "../icon/Icon";
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
      variant = "secondary",
      className = "",
      onClick,
      type = "button",
      badgeContent,
      badgeCount,
      badgeType,
      badgeIcon,
      iconPosition = "left",
      icon,
      iconAppearance,
      ...props
    },
    ref,
  ) => {
    const shouldDisplayBadge =
      (badgeCount && badgeCount > 0 && badgeContent === "number") || (badgeContent === "icon" && badgeIcon);

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
            {icon && iconPosition === "left" && <Icon name={icon} size={ButtonIconSize[size]} className={style.icon} />}
            <span data-size={size} className={style.label}>
              {label}
            </span>
            {icon && iconPosition === "right" && (
              <Icon name={icon} size={ButtonIconSize[size]} className={style.icon} />
            )}
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
          {icon && iconPosition === "left" && (
            <Icon name={icon} size={ButtonIconSize[size]} className={style.icon} appearance={iconAppearance} />
          )}
          <span data-size={size} className={style.label}>
            {label}
          </span>
          {icon && iconPosition === "right" && (
            <Icon name={icon} size={ButtonIconSize[size]} className={style.icon} appearance={iconAppearance} />
          )}
        </button>
      );
    }
  },
);

export default Button;
