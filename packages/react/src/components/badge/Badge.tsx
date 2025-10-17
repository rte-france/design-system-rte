import { BadgeProps as BadgePropsCore } from "@design-system-rte/core/components/badge/badge.interface";
import {
  getBadgeIconSize,
  getDisplayCount,
  getShowBadge,
  getShowIcon,
  getShowText,
} from "@design-system-rte/core/components/badge/badge.utils";
import { forwardRef } from "react";

import Icon from "../icon/Icon";
import { isValidIconName } from "../icon/IconMap";
import { concatClassNames } from "../utils";

import style from "./Badge.module.scss";

export interface BadgeProps extends BadgePropsCore, Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "content"> {
  children?: React.ReactNode;
  icon?: string;
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ badgeType = "brand", size = "m", content = "number", count, icon = "notification", children, ...props }, ref) => {
    if (content == "icon" && icon && !isValidIconName(icon)) {
      console.warn(`Badge: Invalid icon name "${icon}". Please use a valid icon key.`);
      return null;
    }

    const iconSize = getBadgeIconSize(size);

    const showIcon = getShowIcon({ size, content, iconSize });
    const showText = getShowText({ size, content, count });

    const showBadge = getShowBadge({ size, content, count, iconSize });
    const countOverflow = showText && getDisplayCount(count)?.length > 2;

    // TODO change when refactoring button with badge
    if (!children) {
      return (
        <div ref={ref} className={style.badgeContainer} {...props}>
          <div
            data-simple-badge="true"
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
              <span className={style.count} key={count}>
                {getDisplayCount(count)}
              </span>
            )}
          </div>
        </div>
      );
    }

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
            <span className={style.count} key={count}>
              {getDisplayCount(count)}
            </span>
          )}
        </div>
        {children}
      </div>
    );
  },
);

export default Badge;
