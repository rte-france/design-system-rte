import { RadioButtonGroupProps as CoreRadioButtonGroupProps } from "@design-system-rte/core/components/radio-button-group/radio-button-group.interface";
import React, { forwardRef, useState } from "react";

import RadioButton from "../radioButton/RadioButton";
import { concatClassNames } from "../utils";

import style from "./RadioButtonGroup.module.scss";

interface RadioButtonGroupProps extends CoreRadioButtonGroupProps, React.InputHTMLAttributes<HTMLDivElement> {}

const RadioButtonGroup = forwardRef<HTMLDivElement, RadioButtonGroupProps>(
  (
    {
      groupName,
      items,
      direction = "horizontal",
      showItemsLabel = true,
      groupTitle = "",
      showGroupTitle = false,
      groupHelpText = "",
      showHelpText = false,
      errorMessage = "",
      error = false,
      disabled = false,
      readOnly = false,
      className = "",
      onValueChange,
      selectedValue,
      ...props
    },
    ref,
  ) => {
    const [internalSelectedValue, setInternalSelectedValue] = useState(selectedValue);

    if (disabled && error) {
      console.warn(
        "RadioButtonGroup cannot be both disabled and in an error state. Please choose one state or the other.",
      );

      return null;
    }

    const handleOnChangeRadioButton = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled || readOnly) {
        return;
      }

      onValueChange?.(event.target.value);
      setInternalSelectedValue(event.target.value);
    };

    return (
      <div ref={ref} className={concatClassNames(style.radioButtonGroupContainer, className)} {...props}>
        <div
          className={style.radioButtonGroupHeader}
          data-error={error}
          data-disabled={disabled}
          data-read-only={readOnly}
        >
          {groupTitle && showGroupTitle && <h3 className={style.groupTitle}>{groupTitle}</h3>}
          {groupHelpText && showHelpText && <p className={style.groupHelpText}>{groupHelpText}</p>}
          {errorMessage && error && <p className={style.errorMessage}>{errorMessage}</p>}
        </div>
        <div className={style.radioButtonGroup} data-direction={direction}>
          {items.map(({ label, value }, index) => (
            <RadioButton
              key={value + index}
              label={label}
              value={value}
              groupName={groupName}
              showLabel={showItemsLabel}
              disabled={disabled}
              error={error}
              readOnly={readOnly}
              onChange={handleOnChangeRadioButton}
              isChecked={internalSelectedValue === value}
            />
          ))}
        </div>
      </div>
    );
  },
);

export default RadioButtonGroup;
