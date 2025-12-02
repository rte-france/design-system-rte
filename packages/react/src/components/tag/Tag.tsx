import { TagProps as TagPropsCore } from "@design-system-rte/core/components/tag/tag.interface";
import { forwardRef } from "react";

import Icon, { RegularIconIdKey, TogglableIconIdKey } from "../icon/Icon";
import { isValidIconName } from "../icon/IconMap";

import style from "./Tag.module.scss";

interface TagProps extends Omit<TagPropsCore, "iconName">, Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {
  iconName?: RegularIconIdKey | TogglableIconIdKey;
}

const statusIconMap: Record<string, RegularIconIdKey | TogglableIconIdKey> = {
  success: "check-circle",
  information: "info",
  warning: "warning",
  alert: "dangerous",
};

const Tag = forwardRef<HTMLDivElement, TagProps>(
  ({ tagType = "status", status, color, compactSpacing, label, showLeftIcon = false, iconName, ...props }, ref) => {
    if (tagType === "status" && status && statusIconMap[status]) {
      iconName = statusIconMap[status];
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
        data-compact-spacing={compactSpacing}
        {...props}
      >
        {iconName && isValidIconName(iconName) && (tagType === "status" || showLeftIcon) && (
          <Icon name={iconName} size={16} />
        )}
        {label && (
          <label className={style["tag-label"]} data-compact-spacing={compactSpacing}>
            {label}
          </label>
        )}
      </div>
    );
  },
);

export default Tag;
