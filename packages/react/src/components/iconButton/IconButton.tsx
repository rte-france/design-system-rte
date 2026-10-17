import { ButtonIconSize } from "@design-system-rte/core/components/button/common/common-button.constants";
import { resolveIconButtonVisual } from "@design-system-rte/core/components/button/common/resolve-icon-button-visual";
import { IconButtonProps as CoreIconButtonProps } from "@design-system-rte/core/components/button/icon-button/icon-button.interface";
import { forwardRef, useMemo } from "react";

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
      hierarchy,
      isCritical,
      isReversed,
      iconAppearance,
      compactSpacing,
      badgeContent,
      badgeCount,
      badgeType,
      badgeIcon,
      ...props
    },
    ref,
  ) => {
    const resolvedVisual = useMemo(
      () =>
        resolveIconButtonVisual({
          variant,
          appearance,
          hierarchy,
          isCritical,
          isReversed,
          iconAppearance,
        }),
      [variant, appearance, hierarchy, isCritical, isReversed, iconAppearance],
    );

    if (isValidIconName(name)) {
      const shouldDisplayBadge =
        (badgeCount && badgeCount > 0 && badgeContent === "number") || (badgeContent === "icon" && badgeIcon);

      const shellDataAttributes = {
        "data-appearance": resolvedVisual.appearance,
        "data-hierarchy": resolvedVisual.hierarchy,
        ...(resolvedVisual.isCritical ? { "data-critical": true } : {}),
        ...(resolvedVisual.isReversed ? { "data-reversed": true } : {}),
      };

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
              data-compact-spacing={compactSpacing}
              onClick={onClick}
              {...shellDataAttributes}
              {...props}
            >
              <Icon
                name={name}
                appearance={resolvedVisual.iconAppearance}
                size={ButtonIconSize[size]}
                aria-hidden={true}
              />
            </button>
          </Badge>
        );
      }

      return (
        <button
          ref={ref}
          type={type}
          className={concatClassNames(style["icon-button"], className)}
          data-size={size}
          data-compact-spacing={compactSpacing}
          onClick={onClick}
          {...shellDataAttributes}
          {...props}
        >
          <Icon name={name} appearance={resolvedVisual.iconAppearance} size={ButtonIconSize[size]} aria-hidden={true} />
        </button>
      );
    }

    console.warn(`IconButton: Invalid icon name "${name}". Please use a valid icon key.`);
    return null;
  },
);

export default IconButton;
