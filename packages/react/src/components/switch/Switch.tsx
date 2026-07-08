import { switchHeight, switchWidth } from "@design-system-rte/core/components/switch/switch.constants";
import { SwitchProps as CoreSwitchProps } from "@design-system-rte/core/components/switch/switch.interface";
import { InputHTMLAttributes, useMemo, useState } from "react";

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
  checked,
  defaultChecked = false,
  onChange,
  ...props
}: SwitchProps) => {
  const isControlled = checked !== undefined;
  const [internalChecked, setInternalChecked] = useState(isControlled ? checked : defaultChecked);
  const isChecked = isControlled ? checked : internalChecked;

  const inputId = useMemo(() => {
    if (props.id) {
      return props.id;
    }
    return label ? `${label}-switch` : undefined;
  }, [label, props.id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (readOnly || disabled) {
      return;
    }

    if (!isControlled) {
      setInternalChecked(e.target.checked);
    }

    onChange?.(e);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (readOnly || disabled) {
      e.preventDefault();
      return;
    }

    const target = e.target as HTMLElement;
    if (target.tagName === "INPUT" || target.tagName === "LABEL") {
      return;
    }

    const inputElement = e.currentTarget.querySelector('input[type="checkbox"]') as HTMLInputElement | null;
    inputElement?.click();
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
        id={inputId}
        className={style["switch"]}
        disabled={disabled}
        checked={!!isChecked}
        onChange={handleChange}
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
        <label htmlFor={inputId} className={concatClassNames(style["switch-label"])}>
          {label}
        </label>
      )}
    </div>
  );
};

export default Switch;
