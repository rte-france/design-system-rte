import { ChipProps as CoreChipProps } from "@design-system-rte/core/components/chip/chip.interface";
import React from "react";

import { useActiveKeyboard } from "../../hooks/useActiveKeyboard";
import Icon from "../icon/Icon";
import { concatClassNames } from "../utils";

import styles from "./Chip.module.scss";

interface ChipProps
  extends Omit<CoreChipProps, "onClick" | "onClose">,
    Omit<React.HTMLAttributes<HTMLSpanElement>, "id"> {
  onClick?: (event: React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLSpanElement>) => void;
  onClose?: (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => void;
}

export const Chip = ({
  id,
  label,
  selected = false,
  onClick,
  disabled = false,
  type = "single",
  className = "",
  compactSpacing = false,
  onClose,
  ...props
}: ChipProps) => {
  const { onBlur, onKeyDown, onKeyUp } = useActiveKeyboard<HTMLSpanElement>((e) => onClick?.(e), {
    id,
  });

  const isCheckable = type === "single" || type === "multi";

  return (
    <span
      id={id}
      role={type === "single" ? "radio" : type === "multi" ? "checkbox" : "option"}
      className={concatClassNames(styles["chip"], ...className)}
      data-selected={isCheckable && selected}
      data-disabled={disabled}
      data-compact-spacing={compactSpacing}
      data-type={type}
      onClick={onClick}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      onBlur={onBlur}
      aria-checked={isCheckable && selected}
      aria-disabled={disabled}
      {...props}
    >
      {type === "multi" && (
        <span className={styles["chip-icon-container"]}>
          <span
            className={concatClassNames(
              styles["chip-icon"],
              selected ? styles["chip-icon--visible"] : styles["chip-icon--hidden"],
            )}
            aria-hidden={!selected}
          >
            <Icon name="check-circle" appearance="filled" size={16} />
          </span>
          <span
            className={concatClassNames(
              styles["chip-icon"],
              !selected ? styles["chip-icon--visible"] : styles["chip-icon--hidden"],
            )}
            aria-hidden={selected}
          >
            <Icon name="radio-button-empty" size={16} />
          </span>
        </span>
      )}
      <span className={styles["chip-label"]} data-type={type}>
        {label}
      </span>
      {type === "input" && (
        <button
          type="button"
          className={styles["chip-close-button"]}
          onClick={onClose}
          disabled={disabled}
          aria-label={`Supprimer ${label}`}
          value={label}
        >
          <Icon className={styles["chip-close-button--icon"]} name="close" />
        </button>
      )}
    </span>
  );
};

export default Chip;
