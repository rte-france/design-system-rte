import { generateId } from "@design-system-rte/core";
import { RadioButtonGroupProps as CoreRadioButtonGroupProps } from "@design-system-rte/core/components/radio-button-group/radio-button-group.interface";
import React, { forwardRef, useRef, useState } from "react";

import RadioButton from "../radioButton/RadioButton";
import RequiredIndicator from "../requiredindicator/RequiredIndicator";
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
      groupTitleText = "",
      groupHelpText = "",
      errorText = "",
      isError = false,
      disabled = false,
      isReadOnly = false,
      className = "",
      onValueChange,
      selectedValue,
      required = false,
      showLabelRequirement = false,
      ...props
    },
    ref,
  ) => {
    const errorMessageId = useRef(generateId()).current;
    const [internalSelectedValue, setInternalSelectedValue] = useState(selectedValue);

    if (disabled && isError) {
      console.warn(
        "RadioButtonGroup cannot be both disabled and in an error state. Please choose one state or the other.",
      );

      return null;
    }

    const handleOnChangeRadioButton = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled || isReadOnly) {
        return;
      }

      onValueChange?.(event.target.value);
      setInternalSelectedValue(event.target.value);
    };

    return (
      <div ref={ref} className={concatClassNames(styles["radioButtonGroupContainer"], className)} {...props}>
        <fieldset
          className={styles["radioButtonGroupFieldset"]}
          data-error={isError}
          data-disabled={disabled}
          data-read-only={isReadOnly}
          aria-describedby={isError && errorText ? errorMessageId : undefined}
        >
          <div
            className={styles["rte-radioButtonGroupTitleContainer"]}
            data-show-label-requirement={showLabelRequirement}
          >
            {groupTitleText && <legend className={styles["groupTitle"]}>{groupTitleText}</legend>}
            <RequiredIndicator required={required} showLabelRequirement={showLabelRequirement} />
          </div>
          {groupHelpText && <p className={styles["groupHelpText"]}>{groupHelpText}</p>}
          {errorText && isError && <p className={styles["errorMessage"]}>{errorText}</p>}
          <div className={styles["radioButtonGroup"]} data-direction={direction}>
            {items.map(({ label, value, ariaLabel, ariaLabelledBy }, index) => (
              <RadioButton
                key={value + index}
                label={showItemsLabel ? label : undefined}
                value={value}
                groupName={groupName}
                disabled={disabled}
                error={isError}
                readOnly={isReadOnly}
                onChange={handleOnChangeRadioButton}
                isChecked={internalSelectedValue === value}
                aria-label={ariaLabel}
                aria-labelledby={ariaLabelledBy}
              />
            ))}
          </div>
        </fieldset>
      </div>
    );
  },
);

export default RadioButtonGroup;
