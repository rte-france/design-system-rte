import React from "react";

import { useActiveKeyboard } from "../../hooks/useActiveKeyboard";
import { concatClassNames } from "../utils";

import styles from "./Chip.module.scss";

type ChipProps = {
  id?: string;
  label: string;
  selected?: boolean;
  type?: "single" | "multi" | "input";
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLSpanElement>) => void;
  className?: string;
  compactSpacing?: boolean;
  value?: string;
};

export const Chip: React.FC<ChipProps> = ({
  id,
  label,
  selected = false,
  onClick,
  disabled = false,
  type = "single",
  className = "",
  compactSpacing = false,
}) => {
  const { onBlur, onKeyDown, onKeyUp } = useActiveKeyboard<HTMLSpanElement>((e) => onClick?.(e), {
    id,
  });

  return (
    <span
      id={id}
      role={type === "single" ? "radio" : "checkbox"}
      className={concatClassNames(styles["chip"], ...className)}
      data-selected={selected}
      data-disabled={disabled}
      data-compact-spacing={compactSpacing}
      data-type={type}
      onClick={onClick}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      onBlur={onBlur}
      aria-checked={selected}
      aria-disabled={disabled}
    >
      <span className={styles["chip-label"]}>{label}</span>
    </span>
  );
};

export default Chip;
