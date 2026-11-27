import { CheckboxProps as CoreCheckboxProps } from "@design-system-rte/core/components/checkbox/checkbox.interface";
import { useEffect, useRef } from "react";

import Icon from "../icon/Icon";

import styles from "./Checkbox.module.scss";

interface CheckboxProps extends CoreCheckboxProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, "id"> {}

const Checkbox = ({
  id,
  label = "",
  showLabel = true,
  disabled,
  description,
  isError = false,
  error,
  errorMessage,
  readOnly,
  indeterminate,
  ...props
}: CheckboxProps) => {
  const showVisibleLabel = Boolean(label) && showLabel;
  const effectiveIsError = isError || Boolean(error);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = !!indeterminate;
    }
  }, [indeterminate]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Space") {
      if (readOnly) {
        event.preventDefault();
      }
    }
  };

  return (
    <div
      className={styles["rte-checkbox-container"]}
      data-show-label={showVisibleLabel}
      data-disabled={disabled}
      data-read-only={readOnly}
      data-error={effectiveIsError}
    >
      <input
        type="checkbox"
        id={id}
        className={styles["rte-checkbox"]}
        disabled={disabled}
        ref={inputRef}
        data-read-only={readOnly}
        data-error={effectiveIsError}
        onKeyDown={handleKeyDown}
        {...props}
      />
      <div
        className={styles["rte-checkbox-background"]}
        data-disabled={disabled}
        data-read-only={readOnly}
        data-error={effectiveIsError}
      >
        <div className={styles["rte-checkbox-outer"]}></div>
        <div className={styles["rte-checkbox-inner"]}></div>
        <div className={`${styles["rte-checkbox-icon-selected"]} ${styles["rte-checkbox-icons"]}`}>
          <Icon name="check-small" size={16} />
        </div>
        <div className={`${styles["rte-checkbox-icon-indeterminated"]} ${styles["rte-checkbox-icons"]}`}>
          <Icon name="check-indeterminate" size={16} />
        </div>
      </div>
      <div className={styles["rte-checkbox-text-container"]} data-disabled={disabled}>
        {showVisibleLabel && <label htmlFor={id}>{label}</label>}
        <p className={styles["rte-checkbox-description"]}>{description}</p>
        {effectiveIsError && errorMessage && <p className={styles["rte-checkbox-error"]}>{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Checkbox;
