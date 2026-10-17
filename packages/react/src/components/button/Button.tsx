import { ButtonProps as CoreButtonProps } from "@design-system-rte/core/components/button/button.interface";
import { resolveButtonStyle } from "@design-system-rte/core/components/button/common/button-style.utils";
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
      variant,
      appearance,
      hierarchy,
      isCritical,
      isReversed,
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
    const resolvedStyle = resolveButtonStyle({
      variant,
      appearance,
      hierarchy,
      isCritical,
      isReversed,
    });

    const styleAttributes = {
      "data-size": size,
      "data-appearance": resolvedStyle.appearance,
      "data-hierarchy": resolvedStyle.hierarchy,
      "data-critical": String(resolvedStyle.isCritical),
      "data-reversed": String(resolvedStyle.isReversed),
      ...(variant !== undefined ? { "data-variant": variant } : {}),
    };

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
            onClick={onClick}
            {...styleAttributes}
            {...props}
          >
            {icon && iconPosition === "left" && (
              <Icon name={icon} size={ButtonIconSize[size]} className={style.icon} aria-hidden="true" />
            )}
            <span data-size={size} className={style.label}>
              {label}
            </span>
            {icon && iconPosition === "right" && (
              <Icon name={icon} size={ButtonIconSize[size]} className={style.icon} aria-hidden="true" />
            )}
          </button>
        </Badge>
      );
    }

    return (
      <button
        ref={ref}
        type={type}
        className={concatClassNames(style.button, className)}
        onClick={onClick}
        {...styleAttributes}
        {...props}
      >
        {icon && iconPosition === "left" && (
          <Icon
            name={icon}
            size={ButtonIconSize[size]}
            className={style.icon}
            appearance={iconAppearance}
            aria-hidden="true"
          />
        )}
        <span data-size={size} className={style.label}>
          {label}
        </span>
        {icon && iconPosition === "right" && (
          <Icon
            name={icon}
            size={ButtonIconSize[size]}
            className={style.icon}
            appearance={iconAppearance}
            aria-hidden="true"
          />
        )}
      </button>
    );
  },
);

export default Button;
