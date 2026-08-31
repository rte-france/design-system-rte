import { labelSize } from "@design-system-rte/core/components/radio-button/radio-button.constants";
import { RadioButtonProps as CoreRadioButtonProps } from "@design-system-rte/core/components/radio-button/radio-button.interface";
import {
  getRadioButtonAccessibleName,
  RADIO_BUTTON_MISSING_ACCESSIBLE_NAME_ERROR,
} from "@design-system-rte/core/components/radio-button/radio-button.utils";
import React, { forwardRef } from "react";

import { concatClassNames } from "../utils";

import style from "./RadioButton.module.scss";

interface RadioButtonProps extends CoreRadioButtonProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, "value"> {}

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  (
    {
      label,
      groupName,
      showLabel = true,
      disabled = false,
      error = false,
      readOnly = false,
      className = "",
      onChange,
      value,
      isChecked,
      ...props
    },
    ref,
  ) => {
    if (disabled && error) {
      console.warn("RadioButton cannot be both disabled and in an error state. Please choose one state or the other.");
      return null;
    }

    const accessibleLabel = getRadioButtonAccessibleName(label, props["aria-label"]);

    if (!accessibleLabel) {
      console.error(RADIO_BUTTON_MISSING_ACCESSIBLE_NAME_ERROR);
      return null;
    }

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled || readOnly) {
        return;
      }

      if (onChange) {
        onChange(event);
      }
    };

    return (
      <div className={style.radioButtonContainer} data-disabled={disabled} data-read-only={readOnly} data-error={error}>
        <input
          ref={ref}
          type="radio"
          id={value}
          value={value}
          size={labelSize}
          name={groupName}
          className={concatClassNames(style.radioButton, className)}
          disabled={disabled}
          data-error={error}
          data-read-only={readOnly}
          onChange={handleOnChange}
          checked={isChecked}
          aria-label={accessibleLabel}
          {...props}
        />
        <div
          className={style.radioButtonBackground}
          data-disabled={disabled}
          data-error={error}
          data-read-only={readOnly}
        >
          <div className={style.radioButtonOuter}></div>
          <div className={style.radioButtonInner}></div>
        </div>
        {showLabel && (
          <label
            htmlFor={value}
            className={concatClassNames(style.radioButtonLabel, className)}
            data-disabled={disabled}
            data-error={error}
            data-read-only={readOnly}
            data-show-label={showLabel}
          >
            {label}
          </label>
        )}
      </div>
    );
  },
);

export default RadioButton;
