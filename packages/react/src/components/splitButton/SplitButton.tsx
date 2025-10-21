import { DropdownProps } from "@design-system-rte/core/components/dropdown/dropdown.interface";
import {
  splitButtonLeftIconSize,
  splitButtonRightIconSize,
} from "@design-system-rte/core/components/split-button/split-button.constants";
import {
  SplitButtonProps as CoreSplitButtonProps,
  SplitButtonItemProps as CoreSplitButtonOptionProps,
} from "@design-system-rte/core/components/split-button/split-button.interface";
import { ButtonHTMLAttributes, ForwardedRef, forwardRef, KeyboardEvent, MouseEvent, useRef, useState } from "react";

import { Dropdown } from "../dropdown/Dropdown";
import { DropdownItem } from "../dropdown/dropdownItem/DropdownItem";
import Icon from "../icon/Icon";
import { RegularIcons, TogglableIcons } from "../icon/IconMap";
import { concatClassNames } from "../utils";

import style from "./SplitButton.module.scss";

interface SplitButtonOption extends CoreSplitButtonOptionProps {
  onClick?: (e: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>) => void;
}

interface SplitButtonProps
  extends Omit<CoreSplitButtonProps, "options">,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  icon?: keyof typeof RegularIcons | keyof typeof TogglableIcons;
  options: SplitButtonOption[];
}

const SplitButton = forwardRef<HTMLElement | HTMLButtonElement, SplitButtonProps>(
  (
    {
      appearance = "primary",
      size = "m",
      label,
      compactSpacing = false,
      position = "bottom-start",
      className,
      icon,
      onClick,
      disabled,
      ariaLabelRight,
      options,
      ...props
    }: SplitButtonProps,
    ref,
  ) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    const rightButtonRef = useRef<HTMLButtonElement>(null);
    const leftButtonRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    const [internalPosition, internalAlignment] = position.split("-") as [
      DropdownProps["position"],
      DropdownProps["alignment"],
    ];

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
        <Dropdown
          ref={menuRef}
          autoClose
          dropdownId={"tab-dropdown"}
          onClose={() => setIsDropdownOpen(false)}
          offset={0}
          data-testid="Menu container"
          position={internalPosition}
          alignment={internalAlignment}
          trigger={
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={isDropdownOpen}
              aria-label={ariaLabelRight}
              className={style.splitButtonRight}
              data-active={isDropdownOpen}
              data-compact-spacing={compactSpacing}
              data-appearance={appearance}
              data-size={size}
              data-testid="Menu button"
              disabled={disabled}
              onClick={() => setIsDropdownOpen(true)}
              {...props}
              ref={rightButtonRef}
            >
              <div className={style.splitButtonRightIconContainer}>
                <Icon name="arrow-chevron-down" size={splitButtonRightIconSize[size]} />
              </div>
            </button>
          }
          isOpen={isDropdownOpen}
        >
          {options.map((option, idx) => (
            <DropdownItem
              key={`${option.id}-dropdown-${idx}`}
              id={option.id}
              label={option.label}
              onClick={option.onClick}
              disabled={option.disabled}
              leftIcon={option.icon}
            />
          ))}
        </Dropdown>
      </div>
    );
  },
);

export default SplitButton;
