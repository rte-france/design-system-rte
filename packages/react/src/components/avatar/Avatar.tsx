import {
  IconSizeMap,
  StatusIndicatorSizeMap,
  StatusIndicatorIconMap,
} from "@design-system-rte/core/components/avatar/avatar.constants";
import { AvatarProps } from "@design-system-rte/core/components/avatar/avatar.interface";
import {
  computeMaskImage,
  computeIconColor,
  computeBackgroundColor,
} from "@design-system-rte/core/components/avatar/avatar.utils";
import { forwardRef } from "react";

import Icon from "../icon/Icon";

import styles from "./Avatar.module.scss";

const Avatar = forwardRef<HTMLDivElement | HTMLButtonElement, AvatarProps>(
  (
    {
      id,
      type = "user",
      imgSrc,
      alt,
      size = 32,
      status,
      layout = "image",
      initials,
      colorType = "neutral",
      decorativeColor,
      onClick,
      "aria-label": ariaLabel,
    }: AvatarProps,
    ref,
  ) => {
    if (layout === "initials" && (!initials || initials.length > 2)) {
      console.warn(
        "Avatar with 'initials' layout requires 'initials' prop to be provided with 1 or 2 characters maximum.",
      );
      return null;
    }
    if (layout === "image" && !imgSrc) {
      console.warn("Avatar with 'image' layout (default) requires 'imgSrc' prop to be provided.");
      return null;
    }

    const BaseAvatar = () => (
      <>
        <div
          className={styles["avatar"]}
          data-size={size}
          data-avatar-type={type}
          data-color={colorType}
          style={{
            backgroundColor: computeBackgroundColor(layout, colorType, decorativeColor),
            maskImage: computeMaskImage(size!, !!status),
          }}
        >
          {layout === "initials" ? (
            <span
              className={styles["initials"]}
              data-size={size}
              style={{
                maskImage: computeMaskImage(size!, !!status),
              }}
            >
              {initials}
            </span>
          ) : layout === "icon" ? (
            <>
              <Icon
                name={type === "user" ? "user" : "company"}
                size={IconSizeMap[size!]}
                color={computeIconColor(colorType!, decorativeColor)}
              />
            </>
          ) : (
            <img
              src={imgSrc}
              alt={alt}
              className={styles["avatar-image"]}
              style={{
                maskImage: computeMaskImage(size!, !!status),
              }}
            />
          )}
        </div>
        {status && (
          <img
            src={StatusIndicatorIconMap[status!]}
            alt={`Avatar indicator with status ${status}`}
            className={styles["status-indicator"]}
            style={{ width: StatusIndicatorSizeMap[size!], height: StatusIndicatorSizeMap[size!] }}
          />
        )}
      </>
    );

    return (
      <>
        {onClick ? (
          <button
            className={`${styles["avatar-container"]} ${styles["avatar-button"]}`}
            data-avatar-type={type}
            data-size={size}
            onClick={onClick}
            aria-label={ariaLabel}
            type="button"
            id={id}
            style={{ width: size, height: size }}
            ref={ref as React.Ref<HTMLButtonElement>}
          >
            <BaseAvatar />
          </button>
        ) : (
          <div
            id={id}
            className={`${styles["avatar-container"]}`}
            aria-hidden={true}
            style={{ width: size, height: size }}
            ref={ref as React.Ref<HTMLDivElement>}
          >
            <BaseAvatar />
          </div>
        )}
      </>
    );
  },
);

export default Avatar;
