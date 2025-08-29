import { useContext } from "react";

import Divider from "../../divider/Divider";
import Icon from "../../icon/Icon";
import { DropdownParentContext } from "../context/DropdownContext";
import { Dropdown } from "../Dropdown";
import { DropdownManager } from "../hooks/DropdownManager";
import { useDropdownState } from "../hooks/useDropdownState";

import styles from "./DropdownItem.module.scss";

interface DropdownItemProps extends React.HTMLAttributes<HTMLLIElement> {
  label?: string;
  leftIcon?: string;
  trailingText?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLLIElement>) => void;
  hasSeparator?: boolean;
  hasIndent?: boolean;
}

export const DropdownItem = ({
  label,
  leftIcon,
  trailingText,
  disabled,
  onClick,
  hasSeparator,
  hasIndent,
  children,
  ...props
}: DropdownItemProps) => {
  const { autoClose, dropdownId: parentId } = useContext(DropdownParentContext) || {};
  const submenuId = `${parentId}-${label && label.replace(/\s+/g, "")}`;
  const { isOpen } = useDropdownState(submenuId);

  const handleMouseOver = () => {
    if (!parentId) return;
    DropdownManager.closeSubMenus(parentId);
  };

  if (hasIndent && leftIcon) {
    console.warn(
      `DropdownItem: 'hasIndent' prop is ignored when 'leftIcon' is provided : displaying icon '${leftIcon}' for dropdownitem with label '${label}' without indentation.`,
    );
  }

  const handleOnClick = (event: React.MouseEvent<HTMLLIElement>) => {
    if (disabled) return;
    onClick?.(event);
    if (autoClose) {
      DropdownManager.closeAll();
    }
  };

  if (children) {
    return (
      <Dropdown
        hasParent
        dropdownId={submenuId}
        disabled={disabled}
        trigger={
          <>
            <li
              className={styles["dropdown-item"]}
              data-active={isOpen}
              data-disabled={disabled}
              role="menuitem"
              onMouseOver={handleMouseOver}
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
        onMouseOver={handleMouseOver}
        onClick={handleOnClick}
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
