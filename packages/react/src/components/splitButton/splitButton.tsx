import React, { ForwardedRef, useEffect } from "react";
import { SplitButtonProps as CoreSplitButtonProps } from "@design-system-rte/core/components/split-button/split-button.interface";
import { splitButtonLeftIconSize, splitButtonRightIconSize } from "@design-system-rte/core/components/split-button/split-button.constants";

import Icon from "../icon/Icon";
import { concatClassNames } from "../utils";
import style from "./splitButton.module.scss";

interface SplitButtonProps
  extends CoreSplitButtonProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "children"> {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
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
            ...props
        }: SplitButtonProps,
        ref
    ) => {

        const [isHovered, setIsHovered] = React.useState<boolean>(false);

        const [isClicked, setIsClicked] = React.useState<boolean>(false);

        const [asAnimationRan, setAsAnimationRan] = React.useState<boolean>(false);

        const [display, setDisplay] = React.useState<React.CSSProperties['visibility']>(selected ? "visible" : "hidden");



        useEffect(() => {
            if (isHovered || isClicked) {
                setDisplay("visible");
                if (asAnimationRan == false) {
                    const dropdown = document.querySelector(`.${style.splitButtonDropdown}`) as HTMLElement;
                    if (dropdown) {
                        dropdown.classList.remove(style.animationSlideFromTop);
                        dropdown.offsetWidth;
                        dropdown.classList.add(style.animationSlideFromTop);
                    }
                    setAsAnimationRan(true)
                }
                return;
            }
            setDisplay("hidden");
            setAsAnimationRan(false)
        }, [isHovered, isClicked]);



        window.addEventListener("click", (e) => {
            const target = e.target as HTMLElement;
            if (
                Array.from(target.classList).some(
                    cls => cls.includes("splitButtonRight"))
            ) return;
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
                    {...props}
                    ref={ref as ForwardedRef<HTMLButtonElement>}
                >
                    {icon && <Icon name={icon} size={splitButtonLeftIconSize[size]} />}
                    <p
                        data-size={size}
                        className={style.splitButtonLabel}
                    >
                        {label}
                    </p>
                </button>
                <div
                    className={style.splitButtonDivider}
                    data-appearance={appearance}
                    data-disabled={disabled}
                >
                </div>
                <div
                    className={style.splitButtonRightContainer}
                    ref={ref as ForwardedRef<HTMLDivElement>}
                >
                    <button
                        type="button"
                        className={style.splitButtonRight}
                        data-appearance={appearance}
                        data-size={size}
                        data-selected={selected}
                        disabled={disabled}
                        onClick={() => setIsClicked(true)}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        {...props}
                        ref={ref as ForwardedRef<HTMLButtonElement>}
                    >
                        <div className={style.splitButtonRightIconContainer}>
                            <Icon name=">" size={splitButtonRightIconSize[size]} />
                        </div>
                    </button>
                    <div
                        className={style.splitButtonDropdown}
                        data-position={position}
                        style={{ visibility: display }}
                    >
                        {children}
                    </div>
                </div>
            </div>
        );
    }
);

export default SplitButton;