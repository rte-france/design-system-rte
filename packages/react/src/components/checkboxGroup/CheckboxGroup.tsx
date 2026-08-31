import { CheckboxGroupProps as CoreCheckboxGroupProps } from "@design-system-rte/core/components/checkbox-group/checkbox-group.interface";
import React, { forwardRef } from "react";

import Checkbox from "../checkbox/Checkbox";
import { concatClassNames } from "../utils";

import style from "./CheckboxGroup.module.scss";

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
    if (disabled && error) {
      return;
    }

    return (
      <fieldset
        ref={ref}
        className={concatClassNames(style.checkboxGroupContainer, className)}
        disabled={disabled}
        {...props}
      >
        {groupTitle && (
          <legend
            className={style.groupTitle}
            data-visible={showGroupTitle}
            data-error={error}
            data-disabled={disabled}
            data-read-only={readOnly}
          >
            {groupTitle}
          </legend>
        )}
        <div
          className={style["checkboxGroupSubheader"]}
          data-error={error}
          data-disabled={disabled}
          data-read-only={readOnly}
        >
          {groupHelpText && showHelpText && <p className={style.groupHelpText}>{groupHelpText}</p>}
          {errorMessage && error && <p className={style.errorMessage}>{errorMessage}</p>}
        </div>
        <div className={style["checkboxGroup"]} data-direction={direction}>
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
