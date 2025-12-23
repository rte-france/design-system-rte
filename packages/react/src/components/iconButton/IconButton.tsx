import { ButtonIconSize } from "@design-system-rte/core/components/button/common/common-button.constants";
import { IconButtonProps as CoreIconButtonProps } from "@design-system-rte/core/components/button/icon-button/icon-button.interface";
import { forwardRef } from "react";

import Badge from "../badge/Badge";
import Icon, { RegularIconIdKey, TogglableIconIdKey } from "../icon/Icon";
import { isValidIconName } from "../icon/IconMap";
import { concatClassNames } from "../utils";

import style from "./IconButton.module.scss";

interface IconButtonProps
  extends
    Omit<CoreIconButtonProps, "disabled" | "name">,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  name: RegularIconIdKey | TogglableIconIdKey;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      size = "m",
      variant = "primary",
      className = "",
      onClick,
      type = "button",
      name,
      appearance,
      compactSpacing,
      badgeContent,
      badgeCount,
      badgeType,
      badgeIcon,
      ...props
    },
    ref,
  ) => {
    if (isValidIconName(name)) {
      const shouldDisplayBadge =
        (badgeCount > 0 && badgeContent === "number") || (badgeContent === "icon" && badgeIcon);

      if (shouldDisplayBadge) {
        return (
          <Badge
            badgeType={badgeType}
            size={size}
            content={size === "s" ? "empty" : badgeContent}
            count={badgeCount}
            icon={badgeIcon}
          >
            <button
              ref={ref}
              type={type}
              className={concatClassNames(style["icon-button"], className)}
              data-size={size}
              data-variant={variant}
              data-compact-spacing={compactSpacing}
              onClick={onClick}
              {...props}
            >
              <Icon name={name} appearance={appearance} size={ButtonIconSize[size]} />
            </button>
          </Badge>
        );
      } else {
        return (
          <button
            ref={ref}
            type={type}
            className={concatClassNames(style["icon-button"], className)}
            data-size={size}
            data-variant={variant}
            data-compact-spacing={compactSpacing}
            onClick={onClick}
            {...props}
          >
            <Icon name={name} appearance={appearance} size={ButtonIconSize[size]} />
          </button>
        );
      }
    } else {
      console.warn(`IconButton: Invalid icon name "${name}". Please use a valid icon key.`);
      return null;
    }
  },
);

export default IconButton;
