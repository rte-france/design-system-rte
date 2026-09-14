import { generateId } from "@design-system-rte/core";
import { CheckboxGroupProps as CoreCheckboxGroupProps } from "@design-system-rte/core/components/checkbox-group/checkbox-group.interface";
import React, { forwardRef, useRef } from "react";

import Checkbox from "../checkbox/Checkbox";
import { concatClassNames } from "../utils";

import styles from "./CheckboxGroup.module.scss";

interface CheckboxGroupProps extends CoreCheckboxGroupProps, React.FieldsetHTMLAttributes<HTMLFieldSetElement> {}

const CheckboxGroup = forwardRef<HTMLFieldSetElement, CheckboxGroupProps>(
  (
    {
      items,
      direction = "vertical",
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
      ...props
    },
    ref,
  ) => {
    const errorMessageId = useRef(generateId()).current;
    if (disabled && error) {
      return;
    }

    return (
      <fieldset
        ref={ref}
        className={concatClassNames(styles["checkboxGroupContainer"], className)}
        disabled={disabled}
        aria-describedby={error && errorMessage ? errorMessageId : undefined}
        {...props}
      >
        {groupTitle && (
          <legend
            className={styles["groupTitle"]}
            data-visible={showGroupTitle}
            data-error={error}
            data-disabled={disabled}
            data-read-only={readOnly}
          >
            {groupTitle}
          </legend>
        )}
        <div
          className={styles["checkboxGroupSubheader"]}
          data-error={error}
          data-disabled={disabled}
          data-read-only={readOnly}
        >
          {groupHelpText && showHelpText && <p className={styles["groupHelpText"]}>{groupHelpText}</p>}
          {errorMessage && error && (
            <p id={errorMessageId} className={styles["errorMessage"]}>
              {errorMessage}
            </p>
          )}
        </div>
        <div className={styles["checkboxGroup"]} data-direction={direction}>
          {items.map((item, index) => (
            <Checkbox
              id={`${item}-${index}`}
              key={`${item}-${index}`}
              label={item}
              showLabel={showItemsLabel}
              disabled={disabled}
              error={error}
              readOnly={readOnly}
              aria-label={showItemsLabel ? undefined : item}
            />
          ))}
        </div>
      </fieldset>
    );
  },
);

export default CheckboxGroup;
