import { BadgeProps as BadgePropsCore } from "@design-system-rte/core/components/badge/badge.interface";
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
  ({ badgeType = "brand", size = "M", appearance = "text", count = 1, icon = "settings", children }, ref) => {
    if (appearance == "icon" && icon && !isValidIconName(icon)) {
      console.warn(`Badge: Invalid icon name "${icon}". Please use a valid icon key.`);
      return null;
    }

    return (
      <div ref={ref} className={style.badgeContainer}>
        <div
          data-badge-type={badgeType}
          data-size={size}
          data-testid="badge"
          className={concatClassNames(style.badge, count > 0 ? "" : style.hidden)}
        >
          {size !== "XS" && size !== "S" && (
            <>
              {appearance == "icon" && <Icon name={icon} className={style.icon} size={size === "M" ? 12 : 20} />}
              {appearance == "text" && count > 0 && (
                <p className={style.count} key={count}>
                  {count < 1000 ? count : "999+"}
                </p>
              )}
            </>
          )}
        </div>
        {children}
      </div>
    );
  },
);

export default Badge;
