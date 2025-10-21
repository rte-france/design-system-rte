import { CheckboxGroupProps as CoreCheckboxGroupProps } from "@design-system-rte/core/components/checkbox-group/checkbox-group.interface";
import React, { forwardRef } from "react";

import Checkbox from "../checkbox/Checkbox";
import { concatClassNames } from "../utils";

import style from "./CheckboxGroup.module.scss";

interface CheckboxGroupProps extends CoreCheckboxGroupProps, React.InputHTMLAttributes<HTMLDivElement> {}

const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>(
  (
    {
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
      ...props
    },
    ref,
  ) => {
    if (disabled && error) {
      return;
    }

    return (
      <div ref={ref} className={concatClassNames(style.checkboxGroupContainer, className)} {...props}>
        <div
          className={style.checkboxGroupHeader}
          data-error={error}
          data-disabled={disabled}
          data-read-only={readOnly}
        >
          {groupTitle && showGroupTitle && <h3 className={style.groupTitle}>{groupTitle}</h3>}
          {groupHelpText && showHelpText && <p className={style.groupHelpText}>{groupHelpText}</p>}
          {errorMessage && error && <p className={style.errorMessage}>{errorMessage}</p>}
        </div>
        <div className={style.checkboxGroup} data-direction={direction}>
          {items.map((item, index) => (
            <Checkbox
              id={`${item}-${index}`}
              key={`${item}-${index}`}
              label={item}
              showLabel={showItemsLabel}
              disabled={disabled}
              error={error}
              readOnly={readOnly}
            />
          ))}
        </div>
      </div>
    );
  },
);

export default CheckboxGroup;
