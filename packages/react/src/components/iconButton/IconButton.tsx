import { buttonIconSize } from "@design-system-rte/core/components/button/common/common-button.constants";
import { IconButtonProps as CoreIconButtonProps } from "@design-system-rte/core/components/button/icon-button/icon-button.interface";
import { forwardRef } from "react";

import Icon, { RegularIconIdKey, TogglableIconIdKey } from "../icon/Icon";
import { concatClassNames } from "../utils";

import style from "./IconButton.module.scss";

interface IconButtonProps
  extends Omit<CoreIconButtonProps, "disabled" | "icon">,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  icon: RegularIconIdKey | TogglableIconIdKey;
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
      icon,
      iconAppearance,
      compactSpacing,
      ...props
    },
    ref,
  ) => {
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
        <Icon name={icon} appearance={iconAppearance} size={buttonIconSize[size]} />
      </button>
    );
  },
);

export default IconButton;
