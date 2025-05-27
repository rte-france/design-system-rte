import React, { forwardRef } from 'react';
import { RadioButtonGroupProps as CoreRadioButtonGroupProps } from '@design-system-rte/core/components/radio-button-group/radio-button-group.interface';
import { concatClassNames } from '../utils';
import RadioButton from '../radioButton/RadioButton';
import style from './RadioButtonGroup.module.scss';

interface RadioButtonGroupProps extends CoreRadioButtonGroupProps, React.InputHTMLAttributes<HTMLDivElement> {}

const RadioButtonGroup = forwardRef<HTMLDivElement, RadioButtonGroupProps>(
  (
    {
      groupName,
      items,
      direction = 'horizontal',
      showItemsLabel = true,
      groupTitle = '',
      showGroupTitle = false,
      groupHelpText = '',
      showHelpText = false,
      errorMessage = '',
      error = false,
      disabled = false,
      readOnly = false,
      className = '',
      ...props
    },
    ref,
  ) => {
    if (disabled && error) {
      return;
    }

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
          {items.map((item, index) => (
            <RadioButton
              key={index}
              label={item}
              groupName={groupName}
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

export default RadioButtonGroup;
