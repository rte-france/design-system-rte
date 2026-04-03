import { BaseInput } from "@design-system-rte/core/components/base-input/base-input.interface";

import Icon from "../../icon/Icon";

import styles from "./BaseInputPicker.module.scss";

interface BaseInputPickerProps extends BaseInput {
  value?: string;
  onChange?: () => void;
  isFocused?: boolean;
  pickerInputRef?: React.RefObject<HTMLInputElement> | ((element: HTMLInputElement) => void);
  pickerRef?: React.RefObject<HTMLDivElement>;
  onFocus?: () => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onMouseUp?: () => void;
  onOpenPicker?: () => void;
  ariaLabelledBy?: string;
}

const BaseInputPicker = ({
  id,
  value,
  readOnly,
  onChange,
  onFocus,
  onKeyDown,
  onMouseUp,
  onOpenPicker,
  isFocused,
  pickerInputRef,
  pickerRef,
  ariaLabelledBy,
  isError,
  disabled,
}: BaseInputPickerProps) => {
  const canInteractWithPicker = !disabled && !readOnly;
  const canBeFocused = !disabled && !readOnly && isFocused;

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
      >
        <input
          id={id}
          aria-labelledby={ariaLabelledBy}
          readOnly={readOnly}
          ref={pickerInputRef}
          className={styles["rte-base-input-picker-input"]}
          value={value}
          onFocus={canInteractWithPicker ? onFocus : undefined}
          onKeyDown={canInteractWithPicker ? onKeyDown : undefined}
          onChange={onChange}
          onMouseUp={canInteractWithPicker ? onMouseUp : undefined}
          disabled={disabled}
        />
        <button
          onClick={canInteractWithPicker ? onOpenPicker : undefined}
          className={styles["rte-base-input-picker-button"]}
          aria-label="Open time picker"
          disabled={disabled}
        >
          <Icon
            name="clock"
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
