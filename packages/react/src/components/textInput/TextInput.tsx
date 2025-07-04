import { TextInputProps } from "@design-system-rte/core/components/text-input/text-input.interface";
import React, { useEffect, useRef } from "react";

import Icon from "../icon/Icon";
import Link from "../link/Link";

import style from "./TextInput.module.scss";

const TextInput = ({
  showLabel = true,
  label,
  labelPosition = "top",
  required_optional = false,
  showCounter = false,
  value = "",
  showLeftIcon = false,
  showRightIcon = false,
  rightIconAppearance = "clean",
  requiredAppearance = "requiredIconOnly",
  showAssistiveText = false,
  assistiveAppearance = "description",
  showAssistiveIcon = false,
  assistiveLabel = "",
  disabled = false,
  error = false,
  readOnly = false,
  onChange,
  onRightIconClick,
}: TextInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = value;
    }
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  const onRightIconClickHandler = () => {
    if (onRightIconClick) {
      onRightIconClick();
    }
  };

  const rightIconCorrectName =
    rightIconAppearance === "visibilityOn"
      ? "visibility-show"
      : rightIconAppearance === "visibilityOff"
        ? "visibility-hide"
        : rightIconAppearance === "clean"
          ? "close"
          : rightIconAppearance;

  return (
    <div className={style.container}>
      {showLabel && (
        <div className={style.topText}>
          <div className={style.labelContainer} data-label-position={labelPosition}>
            <label className={style.inputLabel}> {label} </label>
            {required_optional ? (
              requiredAppearance == "required" ? (
                <p className={style.requiredText}>(obligatoire)</p>
              ) : requiredAppearance == "requiredIconOnly" ? (
                <div className={style.requiredIconContainer}>
                  <Icon name="asterisk" size={8} />
                </div>
              ) : requiredAppearance == "optional" ? (
                <p className={style.requiredText}>(optionnel)</p>
              ) : null
            ) : null}
          </div>
          {showCounter && labelPosition == "top" && <p className={style.inputCounter}> xxx/yyy</p>}
        </div>
      )}
      <div className={style.inputContainer}>
        <div
          className={style.input}
          data-label-position={labelPosition}
          data-disabled={disabled}
          data-read-only={readOnly}
        >
          <div className={style.inputBar}>
            {showLeftIcon && <Icon name="error" appearance="outlined" className={style.leftIcon} />}
            <input
              ref={inputRef}
              type="text"
              value={value}
              disabled={disabled}
              data-read-only={readOnly}
              data-error={error}
              className={style.inputField}
              onChange={handleChange}
            />

            {showRightIcon && (
              <Icon
                name={rightIconCorrectName}
                appearance="outlined"
                className={style.rightIcon}
                onClick={onRightIconClickHandler}
              />
            )}
          </div>
          {showCounter && labelPosition == "side" && <p className={style.inputCounter}> xxx/yyy </p>}
        </div>
        {showAssistiveText && (
          <div className={style.assistiveText}>
            {showAssistiveIcon && assistiveAppearance === "error" && (
              <Icon name="error" appearance="outlined" className={style.assistiveIconError} size={12} />
            )}
            {showAssistiveIcon && assistiveAppearance === "success" && (
              <Icon name="check" appearance="outlined" className={style.assistiveIconSucces} size={12} />
            )}
            {assistiveAppearance === "link" ? (
              <Link label={assistiveLabel} />
            ) : (
              <p className={style.assistiveLabel} data-appearance={assistiveAppearance}>
                {" "}
                {assistiveLabel}{" "}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TextInput;
