import type { BaseInputProps } from "@design-system-rte/core/components/common/input/input.interface";

import Icon from "../../icon/Icon";
import IconButton from "../../iconButton/IconButton";

import styles from "./BaseInputPicker.module.scss";

export interface BaseInputPickerProps extends BaseInputProps<string> {
  onChange?: () => void;
  onClickReset?: () => void;
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
  ariaDescribedBy?: string;
  openButtonAriaLabel?: string;
  fixedWidth?: boolean;
  isCompact?: boolean;
  placeholder?: string;
  showResetIcon?: boolean;
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
  onClickReset,
  onBlur,
  isFocused,
  pickerInputRef,
  pickerRef,
  ariaLabelledBy,
  ariaDescribedBy,
  isError,
  disabled,
  openButtonAriaLabel,
  fixedWidth = true,
  isCompact = false,
  placeholder,
  showResetIcon = true,
}: BaseInputPickerProps) => {
  const canInteractWithPicker = !disabled && !readOnly;
  const canBeFocused = canInteractWithPicker && isFocused;

  const shouldDisplayPlaceholder = placeholder && !(disabled || readOnly);

  const shouldDisplayResetIcon = showResetIcon && !!value && canInteractWithPicker;

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
        data-is-compact={isCompact || undefined}
      >
        {isError && <Icon name="error" className={styles["error-icon"]} />}
        <input
          id={id}
          aria-labelledby={ariaLabelledBy}
          aria-describedby={ariaDescribedBy}
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
          placeholder={shouldDisplayPlaceholder ? placeholder : undefined}
        />
        {shouldDisplayResetIcon && (
          <IconButton
            color="var(--content-secondary)"
            name="cancel"
            className={styles["reset-icon"]}
            variant="neutral"
            size="s"
            onClick={onClickReset}
          />
        )}
        <button
          onClick={canInteractWithPicker ? onOpenPicker : undefined}
          className={styles["rte-base-input-picker-button"]}
          aria-label={openButtonAriaLabel ?? "Open picker"}
          disabled={disabled}
          tabIndex={canBeFocused ? 0 : -1}
          type="button"
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
