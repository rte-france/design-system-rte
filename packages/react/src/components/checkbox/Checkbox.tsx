import { CheckboxProps as CoreCheckboxProps } from "@design-system-rte/core/components/checkbox/checkbox.interface";
import { useEffect, useRef } from "react";

import Icon from "../icon/Icon";

import styles from "./Checkbox.module.scss";

interface CheckboxProps extends CoreCheckboxProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, "id"> {}

const Checkbox = ({
  id,
  label,
  showLabel = true,
  disabled,
  description,
  error,
  errorMessage,
  readOnly,
  indeterminate,
  ...props
}: CheckboxProps) => {
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
      className={styles.container}
      data-show-label={showLabel}
      data-disabled={disabled}
      data-read-only={readOnly}
      data-error={!!error}
    >
      <input
        type="checkbox"
        id={id}
        className={styles.checkbox}
        disabled={disabled}
        ref={inputRef}
        data-read-only={readOnly}
        data-error={!!error}
        onKeyDown={handleKeyDown}
        {...props}
      />
      <div
        className={styles.checkboxBackground}
        data-disabled={disabled}
        data-read-only={readOnly}
        data-error={!!error}
      >
        <div className={styles.checkboxOuter}></div>
        <div className={styles.checkboxInner}></div>
        <div className={`${styles.checkboxIconSelected} ${styles.checkboxIcons}`}>
          <Icon name="check-small" size={16} />
        </div>
        <div className={`${styles.checkboxIconIndeterminated} ${styles.checkboxIcons}`}>
          <Icon name="check-indeterminate" size={16} />
        </div>
      </div>
      <div className={styles.checkboxTextContainer} data-disabled={disabled}>
        {showLabel && <label htmlFor={id}>{label}</label>}
        <p className={styles.checkboxDescription}>{description}</p>
        {error && errorMessage && <p className={styles.checkboxError}>{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Checkbox;
