import { CHIP_TYPE_TO_ARIA_ROLE_MAP } from "@design-system-rte/core/components/chip/chip.constants";
import { ChipProps as CoreChipProps } from "@design-system-rte/core/components/chip/chip.interface";
import {
  BACKSPACE_KEY,
  DELETE_KEY,
  ENTER_KEY,
  SPACE_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard.constants";
import React, { forwardRef } from "react";

import { useActiveKeyboard } from "../../hooks/useActiveKeyboard";
import Icon from "../icon/Icon";
import { concatClassNames } from "../utils";

import styles from "./Chip.module.scss";

interface ChipProps
  extends Omit<CoreChipProps, "onClick" | "onClose">, Omit<React.HTMLAttributes<HTMLSpanElement>, "id"> {
  onClick?: (event: React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLSpanElement>) => void;
  onClose?: (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => void;
}

export const Chip = forwardRef<HTMLSpanElement, ChipProps>(
  (
    {
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
    },
    ref,
  ) => {
    const deleteButtonRef = React.useRef<HTMLButtonElement>(null);

    const keyboardHandler = (event: React.KeyboardEvent<HTMLSpanElement>) => {
      if (event.key === SPACE_KEY || event.key === ENTER_KEY) {
        event.preventDefault();
        onClick?.(event);
      } else if ((event.key === BACKSPACE_KEY || event.key === DELETE_KEY) && onClose) {
        if (type !== "input") return;
        event.preventDefault();
        if (deleteButtonRef.current) {
          deleteButtonRef.current.click();
        }
      }
    };

    const { onBlur, onKeyDown, onKeyUp } = useActiveKeyboard<HTMLSpanElement>(
      { onKeyUp: keyboardHandler },
      {
        id,
        interactiveKeyCodes: [SPACE_KEY, ENTER_KEY, BACKSPACE_KEY, DELETE_KEY],
      },
    );

    const isCheckable = type === "single" || type === "multi";

    return (
      <span
        id={id}
        ref={ref}
        role={CHIP_TYPE_TO_ARIA_ROLE_MAP[type]}
        className={concatClassNames(styles["chip"], className)}
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
              className={concatClassNames(styles["chip-icon"], selected ? styles["chip-icon--visible"] : "")}
              aria-hidden={!selected}
            >
              <Icon name="check-circle" appearance="filled" size={16} />
            </span>
            <span
              className={concatClassNames(styles["chip-icon"], !selected ? styles["chip-icon--visible"] : "")}
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
            id={id + "-delete-button"}
            type="button"
            className={styles["chip-close-button"]}
            onClick={onClose}
            disabled={disabled}
            aria-label={`Supprimer ${label}`}
            value={label}
            ref={deleteButtonRef}
          >
            <Icon className={styles["chip-close-button--icon"]} name="close" />
          </button>
        )}
      </span>
    );
  },
);

export default Chip;
