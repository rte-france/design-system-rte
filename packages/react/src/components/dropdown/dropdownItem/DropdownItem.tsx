import { shouldDisplayBadge } from "@design-system-rte/core/components/badge/badge.utils";
import { DropdownItemProps as CoreDropdownItemProps } from "@design-system-rte/core/components/dropdown/dropdown.interface";
import { DropdownManager } from "@design-system-rte/core/components/dropdown/DropdownManager";
import {
  ARROW_DOWN_KEY,
  ARROW_UP_KEY,
  ENTER_KEY,
  ESCAPE_KEY,
  SPACE_KEY,
  TAB_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard.constants";
import { useContext } from "react";

import { useActiveKeyboard } from "../../../hooks/useActiveKeyboard";
import Badge from "../../badge/Badge";
import Divider from "../../divider/Divider";
import Icon from "../../icon/Icon";
import { DropdownParentContext } from "../context/DropdownContext";
import { Dropdown } from "../Dropdown";
import { focusDropdownFirstElement, focusParentDropdownFirstElement } from "../DropdownUtils";
import { useDropdownState } from "../hooks/useDropdownState";

import styles from "./DropdownItem.module.scss";

interface DropdownItemProps extends Omit<CoreDropdownItemProps, "onClick">, React.HTMLAttributes<HTMLLIElement> {
  onClick?: (event: React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>) => void;
}

export const DropdownItem = ({
  label,
  link,
  leftIcon,
  trailingText,
  disabled,
  hasSeparator,
  hasIndent,
  children,
  badgeCount,
  badgeContent,
  badgeIcon,
  badgeType,
  badgeSize,
  showBadge,
  isSelected,
  onClick,
  ...props
}: DropdownItemProps) => {
  const { dropdownId, autoClose, closeRoot } = useContext(DropdownParentContext) || {};
  const childDropdownId = `${dropdownId}-${label && label.replace(/\s+/g, "")}`;
  const { isOpen, open } = useDropdownState(childDropdownId);

  const handleMouseOver = () => {
    if (!dropdownId) return;
    DropdownManager.closeSubMenus(dropdownId);
    open();
  };

  const handleOnFocus = () => {
    if (!dropdownId) return;
    DropdownManager.closeSubMenus(dropdownId);
  };

  if (hasIndent && leftIcon) {
    console.warn(
      `DropdownItem: 'hasIndent' prop is ignored when 'leftIcon' is provided : displaying icon '${leftIcon}' for dropdownitem with label '${label}' without indentation.`,
    );
  }

  const handleOnClick = (event: React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>) => {
    if (disabled) return;
    if (onClick) {
      onClick(event);
    }
    if (autoClose && closeRoot) {
      closeRoot();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    if ([SPACE_KEY, ENTER_KEY].includes(e.key)) {
      if (link) {
        const linkElement = e.currentTarget.querySelector("a");
        if (linkElement) {
          linkElement.click();
        }
      } else {
        if (disabled) return;
        if (onClick) {
          handleOnClick(e as unknown as React.KeyboardEvent<HTMLLIElement>);
        }
        if (children) {
          open();
        }
      }
    }
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLLIElement>) => {
    e.preventDefault();
    if (e.key === TAB_KEY) {
      if (isOpen) {
        focusDropdownFirstElement(childDropdownId);
      }
      if (e.shiftKey) {
        if (dropdownId) {
          focusParentDropdownFirstElement(dropdownId);
        }
      }
    }
  };

  const { onKeyUp, onFocus, onKeyDown } = useActiveKeyboard<HTMLLIElement>(
    { onKeyUp: handleKeyUp, onFocus: handleOnFocus, onKeyDown: handleKeyDown },
    {
      interactiveKeyCodes: [SPACE_KEY, ENTER_KEY, TAB_KEY, ARROW_DOWN_KEY, ARROW_UP_KEY, ESCAPE_KEY],
    },
  );

  if (children) {
    return (
      <Dropdown
        hasParent
        dropdownId={childDropdownId}
        isOpen={isOpen}
        trigger={
          <>
            <li
              className={styles["dropdown-item"]}
              data-active={isOpen}
              data-disabled={disabled}
              role="menuitem"
              onMouseOver={handleMouseOver}
              onKeyUp={onKeyUp}
              onKeyDown={onKeyDown}
              onFocus={onFocus}
              tabIndex={0}
            >
              {hasIndent && <span style={{ width: "20px" }} />}
              {leftIcon && (
                <Icon
                  name={leftIcon}
                  className={styles["dropdown-item-icon"]}
                  appearance={isOpen ? "filled" : "outlined"}
                />
              )}
              {link ? (
                <a href={link} style={{ flex: "2", textDecoration: "none", color: "inherit" }}>
                  {label}
                </a>
              ) : (
                <span style={{ flex: "2" }}>{label}</span>
              )}
              <Icon name="arrow-chevron-right" className={styles["dropdown-item-icon"]} />
            </li>
            {hasSeparator && (
              <div className={styles["dropdown-divider"]}>
                <Divider />
              </div>
            )}
          </>
        }
      >
        {children}
      </Dropdown>
    );
  }
  return (
    <>
      <li
        className={styles["dropdown-item"]}
        data-disabled={disabled}
        data-active={isSelected}
        role="menuitem"
        onClick={handleOnClick}
        onMouseOver={handleMouseOver}
        onKeyUp={onKeyUp}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
        tabIndex={0}
        {...props}
      >
        {hasIndent && !leftIcon && <span style={{ width: "20px" }} />}
        {leftIcon && <Icon name={leftIcon} className={styles["dropdown-item-icon"]} />}
        {link ? (
          <a href={link} style={{ flex: "2", textDecoration: "none", color: "inherit" }}>
            {label}
          </a>
        ) : (
          <span style={{ flex: "2" }}>{label}</span>
        )}
        {trailingText && <div>{trailingText}</div>}
        {shouldDisplayBadge({ showBadge: !!showBadge, badgeContent, badgeCount, badgeIcon }) && (
          <Badge count={badgeCount} content={badgeContent} icon={badgeIcon} badgeType={badgeType} size={badgeSize} />
        )}
      </li>
      {hasSeparator && (
        <div className={styles["dropdown-divider"]}>
          <Divider />
        </div>
      )}
    </>
  );
};
