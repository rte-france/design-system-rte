import { useEffect, useRef } from 'react';
import { CheckboxProps as CoreCheckboxProps } from '@design-system-rte/core/components/checkbox/checkbox.interface';
import styles from './Checkbox.module.scss';

interface CheckboxProps extends CoreCheckboxProps, React.InputHTMLAttributes<HTMLInputElement> {}

const Checkbox = ({
  id,
  label,
  showLabel,
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

  return (
    <div className={styles['container']}>
      <input
        type="checkbox"
        id={id}
        className={styles['checkbox']}
        disabled={disabled}
        ref={inputRef}
        data-read-only={readOnly}
        data-error={!!error}
        {...props}
      />
      {/* TODO: Replace with the real icon from Iconography ticket */}
      <div className={`${styles['checkbox-icon-selected']} ${styles['checkbox-icons']}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6.66667 9.06668L10.6 5.13335C10.7222 5.01112 10.8778 4.95001 11.0667 4.95001C11.2556 4.95001 11.4111 5.01112 11.5333 5.13335C11.6556 5.25557 11.7167 5.41112 11.7167 5.60001C11.7167 5.7889 11.6556 5.94446 11.5333 6.06668L7.13334 10.4667C7.00001 10.6 6.84445 10.6667 6.66667 10.6667C6.4889 10.6667 6.33334 10.6 6.20001 10.4667L4.46667 8.73335C4.34445 8.61112 4.28334 8.45557 4.28334 8.26668C4.28334 8.07779 4.34445 7.92223 4.46667 7.80001C4.5889 7.67779 4.74445 7.61668 4.93334 7.61668C5.12223 7.61668 5.27778 7.67779 5.40001 7.80001L6.66667 9.06668Z" />
        </svg>
      </div>
      <div className={`${styles['checkbox-icon-indeterminated']} ${styles['checkbox-icons']}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M4.66667 8.66665C4.47778 8.66665 4.31944 8.60276 4.19167 8.47498C4.06389 8.3472 4 8.18887 4 7.99998C4 7.81109 4.06389 7.65276 4.19167 7.52498C4.31944 7.3972 4.47778 7.33331 4.66667 7.33331H11.3333C11.5222 7.33331 11.6806 7.3972 11.8083 7.52498C11.9361 7.65276 12 7.81109 12 7.99998C12 8.18887 11.9361 8.3472 11.8083 8.47498C11.6806 8.60276 11.5222 8.66665 11.3333 8.66665H4.66667Z" />
        </svg>
      </div>
      <div className={styles['checkbox-text-container']} data-disabled={disabled}>
        {showLabel && <label htmlFor={id}>{label}</label>}
        <p className={styles['checkbox-description']}>{description}</p>
        {error && errorMessage && <p className={styles['checkbox-error']}>{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Checkbox;
