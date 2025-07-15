import { TagProps } from "@design-system-rte/core/components/tag/tag.interface";
import { forwardRef } from "react";

import Icon, { RegularIconIdKey, TogglableIconIdKey } from "../icon/Icon";
import { isValidIconName } from "../icon/IconMap";

import style from "./Tag.module.scss";

const Tag = forwardRef<HTMLDivElement, TagProps>(
  ({ tagType = "status", status, color, CompactSpacing, label, showLeftIcon = false, iconName, ...props }, ref) => {
    if (tagType === "status") {
      const statusIconMap: Record<string, string> = {
        success: "check",
        information: "info",
        warning: "warning",
        alert: "dangerous",
      };
      if (status && statusIconMap[status]) {
        iconName = statusIconMap[status];
      }
    }

    if (iconName && !isValidIconName(iconName)) {
      console.warn(`Tag: Invalid icon name "${iconName}". Please use a valid icon key.`);
      return null;
    }

    return (
      <div
        ref={ref}
        className={style["tag"]}
        data-tag-type={tagType}
        data-status={status}
        data-color={color}
        data-compact-spacing={CompactSpacing}
        {...props}
      >
        {showLeftIcon && iconName && isValidIconName(iconName) && (
          <Icon name={iconName as RegularIconIdKey | TogglableIconIdKey} size={16} />
        )}
        {label && <label className={style["tag-label"]}>{label}</label>}
      </div>
    );
  },
);

export default Tag;
