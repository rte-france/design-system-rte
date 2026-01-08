import { shouldDisplayBadge } from "@design-system-rte/core/components/badge/badge.utils";
import { DropdownProps } from "@design-system-rte/core/components/dropdown/dropdown.interface";
import {
  splitButtonLeftIconSize,
  splitButtonRightIconSize,
} from "@design-system-rte/core/components/split-button/split-button.constants";
import {
  SplitButtonProps as CoreSplitButtonProps,
  SplitButtonItemProps as CoreSplitButtonOptionProps,
} from "@design-system-rte/core/components/split-button/split-button.interface";
import { ARROW_DOWN_KEY, ENTER_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";
import { ButtonHTMLAttributes, ForwardedRef, forwardRef, KeyboardEvent, MouseEvent, useRef, useState } from "react";

import Badge from "../badge/Badge";
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
  extends Omit<CoreSplitButtonProps, "options">, Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
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
      showBadge,
      badgeContent,
      badgeIcon,
      badgeType,
      badgeCount,
      badgeSize,
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

    const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
      if ([ENTER_KEY].includes(e.key)) {
        e.preventDefault();
      }
    };

    const handleKeyUp = (e: KeyboardEvent<HTMLButtonElement>) => {
      if ([ENTER_KEY, ARROW_DOWN_KEY].includes(e.key)) {
        setIsDropdownOpen(true);
      }
    };

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
            shouldDisplayBadge({ showBadge: !!showBadge, badgeContent, badgeCount, badgeIcon }) ? (
              <Badge count={badgeCount} content={badgeContent} badgeType={badgeType} icon={badgeIcon} size={badgeSize}>
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
                  onKeyDown={handleKeyDown}
                  onKeyUp={handleKeyUp}
                  {...props}
                  ref={rightButtonRef}
                >
                  <div className={style.splitButtonRightIconContainer}>
                    <Icon name="arrow-chevron-down" size={splitButtonRightIconSize[size]} />
                  </div>
                </button>
              </Badge>
            ) : (
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
                onKeyDown={handleKeyDown}
                onKeyUp={handleKeyUp}
                {...props}
                ref={rightButtonRef}
              >
                <div className={style.splitButtonRightIconContainer}>
                  <Icon name="arrow-chevron-down" size={splitButtonRightIconSize[size]} />
                </div>
              </button>
            )
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
              badgeContent={option.badgeContent}
              badgeIcon={option.badgeIcon}
              badgeType={option.badgeType}
              showBadge={option.showBadge}
              badgeCount={option.badgeCount}
            />
          ))}
        </Dropdown>
      </div>
    );
  },
);

export default SplitButton;
