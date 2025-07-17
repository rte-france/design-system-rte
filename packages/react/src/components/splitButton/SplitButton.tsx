import {
  splitButtonLeftIconSize,
  splitButtonRightIconSize,
} from "@design-system-rte/core/components/split-button/split-button.constants";
import { SplitButtonProps as CoreSplitButtonProps } from "@design-system-rte/core/components/split-button/split-button.interface";
import React, { ForwardedRef, useEffect, useRef } from "react";

import Icon from "../icon/Icon";
import { RegularIcons, TogglableIcons } from "../icon/IconMap";
import { concatClassNames } from "../utils";

import style from "./SplitButton.module.scss";

interface SplitButtonProps
  extends CoreSplitButtonProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "children"> {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  icon?: keyof typeof RegularIcons | keyof typeof TogglableIcons;
}

const SplitButton = React.forwardRef<HTMLElement | HTMLButtonElement, SplitButtonProps>(
  (
    {
      appearance = "primary",
      size = "m",
      label,
      compactSpacing = false,
      selected = false,
      position = "bottom-start",
      className,
      icon,
      onClick,
      children,
      disabled,
      ariaLabelRight,
      ...props
    }: SplitButtonProps,
    ref,
  ) => {
    const [isHovered, setIsHovered] = React.useState<boolean>(false);

    const [isClicked, setIsClicked] = React.useState<boolean>(false);

    const hasAnimationRan = useRef<boolean>(false);

    const [display, setDisplay] = React.useState<React.CSSProperties["visibility"]>(selected ? "visible" : "hidden");

    const rightButtonRef = useRef<HTMLButtonElement>(null);
    const leftButtonRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>, key: string, callback: () => void) => {
      if (e.key === key) {
        e.preventDefault();
        callback();
      }
    };

    const handleKeyDownOnRightButton = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      handleKeyDown(e, "ArrowDown", () => setIsClicked(true));
      handleKeyDown(e, "Escape", () => setIsClicked(false));
    };

    const handleKeyDownOnMenu = (e: React.KeyboardEvent<HTMLDivElement>) =>
      handleKeyDown(e, "Escape", () => setIsClicked(false));

    useEffect(() => {
      if (isHovered || isClicked || selected) {
        setDisplay("visible");
        if (!hasAnimationRan.current) {
          if (menuRef.current) {
            menuRef.current.classList.remove(style.animationSlideFromTop);
            menuRef.current.classList.add(style.animationSlideFromTop);
          }
          hasAnimationRan.current = true;
        }
        return;
      }
      setDisplay("hidden");
      hasAnimationRan.current = false;
    }, [isHovered, isClicked, selected]);

    window.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      if (Array.from(target.classList).some((cls) => cls.includes("splitButtonRight"))) return;
      setIsClicked(false);
    });

    return (
      <div
        className={concatClassNames(style.splitButtonContainer, className)}
        data-size={size}
        data-compact-spacing={compactSpacing}
        ref={ref as ForwardedRef<HTMLDivElement>}
      >
        <button
          type="button"
          className={style.splitButtonLeft}
          data-appearance={appearance}
          data-size={size}
          onClick={onClick}
          disabled={disabled}
          data-testid="Main action button"
          {...props}
          ref={leftButtonRef}
        >
          {icon && <Icon name={icon} size={splitButtonLeftIconSize[size]} />}
          <p data-size={size} className={style.splitButtonLabel}>
            {label}
          </p>
        </button>
        <div className={style.splitButtonDivider} data-appearance={appearance} data-disabled={disabled}></div>
        <div className={style.splitButtonRightContainer}>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={display === "visible"}
            aria-label={ariaLabelRight}
            className={style.splitButtonRight}
            data-appearance={appearance}
            data-size={size}
            data-selected={selected}
            data-testid="Menu button"
            disabled={disabled}
            onClick={() => setIsClicked(true)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onKeyDown={handleKeyDownOnRightButton}
            {...props}
            ref={rightButtonRef}
          >
            <div className={style.splitButtonRightIconContainer}>
              <Icon name="arrow-chevron-down" size={splitButtonRightIconSize[size]} />
            </div>
          </button>
          <div
            onKeyDown={handleKeyDownOnMenu}
            className={style.splitButtonDropdown}
            data-position={position}
            role="menu"
            style={{ visibility: display }}
            data-testid="Menu container"
          >
            {children}
          </div>
        </div>
      </div>
    );
  },
);

export default SplitButton;
