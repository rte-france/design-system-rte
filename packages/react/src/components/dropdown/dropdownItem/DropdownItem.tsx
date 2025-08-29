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
  withSeparator?: boolean;
}

export const DropdownItem = ({
  label,
  leftIcon,
  trailingText,
  disabled,
  onClick,
  withSeparator,
  children,
  ...props
}: DropdownItemProps) => {
  const parentId = useContext(DropdownParentContext) || null;
  const submenuId = `${parentId}-${label && label.replace(/\s+/g, "")}`;
  const { isOpen } = useDropdownState(submenuId);

  const handleMouseOver = () => {
    if (parentId === null) return;
    DropdownManager.closeSubMenus(parentId);
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
              {leftIcon && <Icon name={leftIcon} className={styles["dropdown-item-icon"]} />}
              <span style={{ flex: "2" }}>{label}</span>
              <Icon name="arrow-chevron-right" className={styles["dropdown-item-icon"]} />
            </li>
            {withSeparator && (
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
        {...props}
        onMouseOver={handleMouseOver}
        onClick={onClick}
      >
        {leftIcon && <Icon name={leftIcon} className={styles["dropdown-item-icon"]} />}
        <span style={{ flex: "2" }}>{label}</span>
        {trailingText && <div>{trailingText}</div>}
      </li>
      {withSeparator && (
        <div className={styles["dropdown-divider"]}>
          <Divider />
        </div>
      )}
    </>
  );
};
