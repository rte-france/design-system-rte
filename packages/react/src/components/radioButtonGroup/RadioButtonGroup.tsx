import { generateId } from "@design-system-rte/core";
import { RadioButtonGroupProps as CoreRadioButtonGroupProps } from "@design-system-rte/core/components/radio-button-group/radio-button-group.interface";
import React, { forwardRef, useRef, useState } from "react";

import RadioButton from "../radioButton/RadioButton";
import { concatClassNames } from "../utils";

import styles from "./RadioButtonGroup.module.scss";

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
    const errorMessageId = useRef(generateId()).current;
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
      <div ref={ref} className={concatClassNames(styles["radioButtonGroupContainer"], className)} {...props}>
        <fieldset
          className={styles["radioButtonGroupFieldset"]}
          data-error={error}
          data-disabled={disabled}
          data-read-only={readOnly}
          aria-describedby={error && errorMessage ? errorMessageId : undefined}
        >
          {groupTitle && showGroupTitle && <legend className={styles["groupTitle"]}>{groupTitle}</legend>}
          {groupHelpText && showHelpText && <p className={styles["groupHelpText"]}>{groupHelpText}</p>}
          {errorMessage && error && (
            <p id={errorMessageId} className={styles["errorMessage"]}>
              {errorMessage}
            </p>
          )}
          <div className={styles["radioButtonGroup"]} data-direction={direction}>
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
        </fieldset>
      </div>
    );
  },
);

export default RadioButtonGroup;
