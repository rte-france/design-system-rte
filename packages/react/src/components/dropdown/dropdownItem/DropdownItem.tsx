import { DropdownItemProps as CoreDropdownItemProps } from "@design-system-rte/core/components/dropdown/dropdown.interface";
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
import Divider from "../../divider/Divider";
import Icon from "../../icon/Icon";
import { DropdownParentContext } from "../context/DropdownContext";
import { Dropdown } from "../Dropdown";
import { focusChildDropdownFirstElement, focusParentDropdownFirstElement } from "../DropdownUtils";
import { DropdownManager } from "../hooks/DropdownManager";
import { useDropdownState } from "../hooks/useDropdownState";

import styles from "./DropdownItem.module.scss";

interface DropdownItemProps extends Omit<CoreDropdownItemProps, "onClick">, React.HTMLAttributes<HTMLLIElement> {
  onClick?: (event: React.MouseEvent<HTMLLIElement> | React.KeyboardEventHandler<HTMLLIElement>) => void;
}

export const DropdownItem = ({
  label,
  leftIcon,
  trailingText,
  disabled,
  hasSeparator,
  hasIndent,
  children,
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

  const handleOnClick = (event: React.MouseEvent<HTMLLIElement> | React.KeyboardEventHandler<HTMLLIElement>) => {
    if (disabled) return;
    if (onClick) {
      onClick?.(event);
    }
    if (autoClose && closeRoot) {
      closeRoot();
    }
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLLIElement>) => {
    e.preventDefault();
    if (e.key === TAB_KEY) {
      if (isOpen) {
        focusChildDropdownFirstElement(childDropdownId);
      }
      if (e.shiftKey) {
        if (dropdownId) {
          focusParentDropdownFirstElement(dropdownId);
        }
      }
    }
    if (e.key === ENTER_KEY || e.key === SPACE_KEY) {
      if (disabled) return;
      if (onClick) {
        handleOnClick(e as unknown as React.KeyboardEventHandler<HTMLLIElement>);
      }
      if (children) {
        open();
      }
    }
  };

  const { onKeyUp, onFocus } = useActiveKeyboard<HTMLLIElement>(
    { onKeyUp: handleKeyUp, onFocus: handleOnFocus },
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
              onFocus={onFocus}
              tabIndex={0}
            >
              {hasIndent && <span style={{ width: "20px" }} />}
              {leftIcon && <Icon name={leftIcon} className={styles["dropdown-item-icon"]} />}
              <span style={{ flex: "2" }}>{label}</span>
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
        role="menuitem"
        onClick={handleOnClick}
        onMouseOver={handleMouseOver}
        onKeyUp={onKeyUp}
        onFocus={onFocus}
        tabIndex={0}
        {...props}
      >
        {hasIndent && !leftIcon && <span style={{ width: "20px" }} />}
        {leftIcon && <Icon name={leftIcon} className={styles["dropdown-item-icon"]} />}
        <span style={{ flex: "2" }}>{label}</span>
        {trailingText && <div>{trailingText}</div>}
      </li>
      {hasSeparator && (
        <div className={styles["dropdown-divider"]}>
          <Divider />
        </div>
      )}
    </>
  );
};
