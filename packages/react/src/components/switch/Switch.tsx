import { switchHeight, switchWidth } from "@design-system-rte/core/components/switch/switch.constants";
import { SwitchProps as CoreSwitchProps } from "@design-system-rte/core/components/switch/switch.interface";
import { InputHTMLAttributes, useState } from "react";

import Icon from "../icon/Icon";
import { concatClassNames } from "../utils";

import style from "./Switch.module.scss";

interface SwitchProps extends CoreSwitchProps, InputHTMLAttributes<HTMLInputElement> {}

const Switch = ({
  label,
  appearance = "brand",
  showLabel = true,
  showIcon = true,
  disabled = false,
  readOnly = false,
  ...props
}: SwitchProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <div
      className={style["switch-container"]}
      data-appearance={appearance}
      data-disabled={disabled}
      data-read-only={readOnly}
      data-checked={checked}
      onClick={(e) => {
        if (readOnly || disabled) {
          e.stopPropagation();
        } else {
          setChecked(!checked);
        }
      }}
    >
      <input
        aria-label={label}
        type="checkbox"
        role="switch"
        name={label}
        className={style["switch"]}
        disabled={disabled}
        checked={checked}
        readOnly={readOnly}
        style={{
          minHeight: switchHeight,
          minWidth: switchWidth,
        }}
        {...props}
      />
      <div className={style["switch-icon-check"]} data-checked={checked}>
        {showIcon && checked && <Icon name="check" size={16} />}
        {showIcon && !checked && <Icon name="close" size={16} />}
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
