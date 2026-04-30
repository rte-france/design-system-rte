import { BaseInput } from "@design-system-rte/core/components/base-input/base-input.interface";

import Icon from "../../icon/Icon";

import styles from "./BaseInputPicker.module.scss";

export interface BaseInputPickerProps extends BaseInput {
  value?: string;
  onChange?: () => void;
  icon?: string;
  isFocused?: boolean;
  pickerInputRef?: React.RefObject<HTMLInputElement> | ((element: HTMLInputElement) => void);
  pickerRef?: React.RefObject<HTMLDivElement>;
  onFocus?: () => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onMouseUp?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onMouseDown?: () => void;
  onOpenPicker?: () => void;
  onBlur?: () => void;
  ariaLabelledBy?: string;
  openButtonAriaLabel?: string;
  fixedWidth?: boolean;
}

const BaseInputPicker = ({
  id,
  value,
  readOnly,
  icon = "clock",
  onChange,
  onFocus,
  onKeyDown,
  onMouseUp,
  onMouseDown,
  onOpenPicker,
  onBlur,
  isFocused,
  pickerInputRef,
  pickerRef,
  ariaLabelledBy,
  isError,
  disabled,
  openButtonAriaLabel,
  fixedWidth = true,
}: BaseInputPickerProps) => {
  const canInteractWithPicker = !disabled && !readOnly;
  const canBeFocused = canInteractWithPicker && isFocused;

  return (
    <>
      <div
        className={styles["rte-base-input-picker"]}
        ref={pickerRef}
        data-focused={canBeFocused ?? undefined}
        tabIndex={-1}
        onClick={canInteractWithPicker ? onFocus : undefined}
        data-is-error={isError || undefined}
        data-is-disabled={disabled || undefined}
        data-is-read-only={readOnly || undefined}
        data-fixed-width={fixedWidth || undefined}
      >
        {isError && <Icon name="error" className={styles["error-icon"]} />}
        <input
          id={id}
          aria-labelledby={ariaLabelledBy}
          readOnly={readOnly}
          ref={pickerInputRef}
          className={styles["rte-base-input-picker-input"]}
          value={value}
          onFocus={canInteractWithPicker ? onFocus : undefined}
          onKeyDown={canInteractWithPicker ? onKeyDown : undefined}
          onMouseUp={canInteractWithPicker ? onMouseUp : undefined}
          onMouseDown={canInteractWithPicker ? onMouseDown : undefined}
          onBlur={canInteractWithPicker ? onBlur : undefined}
          onKeyUp={(e) => {
            e.preventDefault();
          }}
          disabled={disabled}
          onChange={onChange}
        />
        <button
          onClick={canInteractWithPicker ? onOpenPicker : undefined}
          className={styles["rte-base-input-picker-button"]}
          aria-label={openButtonAriaLabel ?? "Open picker"}
          disabled={disabled}
          tabIndex={canBeFocused ? 0 : -1}
        >
          <Icon
            name={icon}
            appearance="outlined"
            className={styles["rte-base-input-picker-icon"]}
            aria-hidden="true"
            data-is-focused={canBeFocused || undefined}
            data-is-error={isError || undefined}
            data-is-disabled={disabled || undefined}
          />
        </button>
      </div>
    </>
  );
};

export default BaseInputPicker;
