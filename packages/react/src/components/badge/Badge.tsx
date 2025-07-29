import { BadgeProps as BadgePropsCore } from "@design-system-rte/core/components/badge/badge.interface";
import {
  getBadgeIconSize,
  getDisplayCount,
  getShowBadge,
  getShowIcon,
  getShowText,
} from "@design-system-rte/core/components/badge/badge.utils";
import { forwardRef } from "react";

import Icon, { RegularIconIdKey, TogglableIconIdKey } from "../icon/Icon";
import { isValidIconName } from "../icon/IconMap";
import { concatClassNames } from "../utils";

import style from "./Badge.module.scss";

export interface BadgeProps extends BadgePropsCore, Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  children: React.ReactNode;
  icon?: RegularIconIdKey | TogglableIconIdKey;
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ badgeType = "brand", size = "m", appearance = "text", count, icon = "notification", children, ...props }, ref) => {
    if (appearance == "icon" && icon && !isValidIconName(icon)) {
      console.warn(`Badge: Invalid icon name "${icon}". Please use a valid icon key.`);
      return null;
    }

    const iconSize = getBadgeIconSize(size);

    const showIcon = getShowIcon({ size, appearance, iconSize });
    const showText = getShowText({ size, appearance, count });

    const showBadge = getShowBadge({ size, appearance, count, iconSize });
    const countOverflow = showText && getDisplayCount(count)?.length > 2;

    return (
      <div ref={ref} className={style.badgeContainer} {...props}>
        <div
          data-badge-type={badgeType}
          data-size={size}
          data-testid="badge"
          className={concatClassNames(
            style.badge,
            showBadge ? "" : style.hidden,
            countOverflow ? style.countOverflow : "",
          )}
        >
          {showIcon && <Icon name={icon} className={style.icon} size={iconSize} />}
          {showText && (
            <p className={style.count} key={count}>
              {getDisplayCount(count)}
            </p>
          )}
        </div>
        {children}
      </div>
    );
  },
);

export default Badge;
