import { switchHeight, switchWidth } from "@design-system-rte/core/components/switch/switch.constants";
import { SwitchProps as CoreSwitchProps } from "@design-system-rte/core/components/switch/switch.interface";
import { InputHTMLAttributes, useState } from "react";

import Icon from "../icon/Icon";
import { concatClassNames } from "../utils";

import style from "./Switch.module.scss";

interface SwitchProps extends CoreSwitchProps, InputHTMLAttributes<HTMLInputElement> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Switch = ({
  label,
  appearance = "brand",
  showLabel = true,
  showIcon = true,
  disabled = false,
  readOnly = false,
  checked = false,
  onChange,
  ...props
}: SwitchProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    onChange?.(e);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (readOnly || disabled) {
      e.stopPropagation();
    } else {
      const inputElement = e.currentTarget.querySelector('input[type="checkbox"]') as HTMLInputElement;
      if (inputElement) {
        inputElement.checked = !isChecked;
        const syntheticEvent = {
          target: inputElement,
          currentTarget: inputElement,
        } as React.ChangeEvent<HTMLInputElement>;
        handleChange(syntheticEvent);
      }
    }
  };

  return (
    <div
      className={style["switch-container"]}
      data-appearance={appearance}
      data-disabled={disabled}
      data-read-only={readOnly}
      data-checked={isChecked}
      onClick={handleClick}
    >
      <input
        aria-label={label}
        type="checkbox"
        role="switch"
        name={label}
        className={style["switch"]}
        disabled={disabled}
        defaultChecked={isChecked}
        readOnly={readOnly}
        style={{
          minHeight: switchHeight,
          minWidth: switchWidth,
        }}
        {...props}
      />
      <div className={style["switch-icon-check"]} data-checked={isChecked}>
        {showIcon && isChecked && <Icon name="check" size={16} />}
        {showIcon && !isChecked && <Icon name="close" size={16} />}
      </div>
      {showLabel && label && (
        <label htmlFor={label} className={concatClassNames(style["switch-label"])}>
          {label}
        </label>
      )}
    </div>
  );
};

export default Switch;
