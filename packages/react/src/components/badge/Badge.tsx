import { BadgeProps as BadgePropsCore } from "@design-system-rte/core/components/badge/badge.interface";
import { forwardRef } from "react";

import Icon, { RegularIconIdKey, TogglableIconIdKey } from "../icon/Icon";
import { isValidIconName } from "../icon/IconMap";

import style from "./Badge.module.scss";
export interface BadgeProps extends BadgePropsCore, Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  children: React.ReactNode;
  icon?: RegularIconIdKey | TogglableIconIdKey;
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ badgeType = "brand", size = "M", appearance = "text", count = 42, icon = "settings", children }, ref) => {
    if (appearance == "icon" && icon && !isValidIconName(icon)) {
      console.warn(`Badge: Invalid icon name "${icon}". Please use a valid icon key.`);
      return null;
    }

    if (appearance == "text" && typeof count !== "number") {
      console.warn("Badge: 'count' must be a number when appearance is 'text'.");
      return null;
    }

    return (
      <div ref={ref} className={style["badge-container"]}>
        <div data-badge-type={badgeType} data-size={size} className={style.badge}>
          {size !== "XS" && size !== "S" && (
            <>
              {appearance == "icon" && (
                <Icon
                  name={icon as RegularIconIdKey | TogglableIconIdKey}
                  className={style.icon}
                  size={size === "M" ? 12 : 20}
                />
              )}
              {appearance == "text" && <p className={style.count}>{count < 1000 ? count : "999+"}</p>}
            </>
          )}
        </div>
        {children}
      </div>
    );
  },
);

export default Badge;
