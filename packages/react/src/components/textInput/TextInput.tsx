import {
  TextInputProps as CoreTextInputProps,
  RightIconAction,
  RightIconName,
} from "@design-system-rte/core/components/text-input/text-input.interface";
import { ChangeEvent, forwardRef, InputHTMLAttributes, useEffect, useRef, useState } from "react";

import Icon from "../icon/Icon";
import IconButton from "../iconButton/IconButton";
import Link from "../link/Link";
import { concatClassNames } from "../utils";

import style from "./TextInput.module.scss";

interface TextInputProps
  extends CoreTextInputProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "value" | "defaultValue" | "placeholder"> {
  onChange?: (value: string) => void;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      labelPosition = "top",
      required = false,
      showCounter,
      value,
      defaultValue,
      leftIcon = "",
      showRightIcon,
      rightIconAction = "clean",
      showLabelRequirement = false,
      assistiveAppearance = "description",
      showAssistiveIcon = false,
      assistiveTextLabel = "",
      error = false,
      maxLength,
      disabled,
      readOnly,
      onChange,
      onRightIconClick,
      ...props
    }: TextInputProps,
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const getRightIconName = (rightIconActionType: RightIconAction): RightIconName => {
      if (["visibilityOn", "visibilityOff"].includes(rightIconActionType)) {
        return isHiddenInput ? "visibility-show" : "visibility-hide";
      } else if (rightIconActionType === "clean") {
        return "close";
      }
      return "" as RightIconName;
    };

    const [characterCount, setCharacterCount] = useState(value?.length || defaultValue?.length || 0);
    const [isHiddenInput, setIsHiddenInput] = useState(rightIconAction === "visibilityOn");

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.value = value || "";
      }
    }, [value]);

    useEffect(() => {
      setIsHiddenInput(rightIconAction === "visibilityOn");
    }, [rightIconAction]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(event.target.value);
      }
      if (maxLength) {
        setCharacterCount(event.target.value.length);
      }
    };

    const triggerRightIconAction = () => {
      if (rightIconAction === "clean") {
        if (inputRef.current) {
          inputRef.current.value = "";
        }
      }
      if (["visibilityOn", "visibilityOff"].includes(rightIconAction)) {
        toggleInputVisibility();
      }
    };

    const onRightIconClickHandler = () => {
      if (onRightIconClick) {
        onRightIconClick();
        triggerRightIconAction();
      }
    };

    const toggleInputVisibility = () => {
      setIsHiddenInput(!isHiddenInput);
    };

    const computedInputBarClassName = concatClassNames(
      style.inputBar,
      leftIcon ? style.withLeftIcon : "",
      rightIconAction ? style.withRightIcon : "",
    );

    const getInputAriaLabel = () => {
      let ariaLabel = "";

      if (label) {
        ariaLabel = label;
      }
      if (error) {
        ariaLabel += " error";
      }
      if (value) {
        ariaLabel += ` ${value}`;
      }
      return ariaLabel;
    };

    const displayCounter = showCounter && typeof maxLength === "number";
    const rightIconName = getRightIconName(rightIconAction);

    return (
      <div className={style.container} data-label-position={labelPosition} data-error={error}>
        {label && (
          <div className={style.text}>
            <div className={style.labelContainer}>
              <label className={style.inputLabel} id="inputLabel">
                {" "}
                {label}{" "}
              </label>
              {required ? (
                showLabelRequirement ? (
                  <p className={style.requiredText}>(obligatoire)</p>
                ) : (
                  <div className={style.requiredIconContainer}>
                    <Icon name="asterisk" size={8} />
                  </div>
                )
              ) : showLabelRequirement ? (
                <p className={style.requiredText}>(optionnel)</p>
              ) : null}
            </div>
            {displayCounter && labelPosition === "top" && (
              <p className={style.inputCounter}>
                {" "}
                {characterCount}/{maxLength}
              </p>
            )}
          </div>
        )}
        <div className={style.inputContainer}>
          <div
            className={style.input}
            data-label-position={labelPosition}
            data-disabled={disabled}
            data-read-only={readOnly}
          >
            <div className={computedInputBarClassName}>
              {leftIcon && (
                <Icon
                  name={error ? "error" : leftIcon}
                  appearance="outlined"
                  className={style.leftIcon}
                  aria-hidden="true"
                />
              )}
              <input
                aria-label={getInputAriaLabel()}
                role="textbox"
                ref={(node) => {
                  inputRef.current = node;
                  if (typeof ref === "function") {
                    ref(node);
                  } else if (ref) {
                    ref.current = node;
                  }
                }}
                type={isHiddenInput ? "password" : "text"}
                data-read-only={readOnly}
                data-error={error}
                className={style.inputField}
                maxLength={maxLength}
                onChange={handleChange}
                {...props}
              />

              {showRightIcon && rightIconAction && (
                <IconButton
                  name={rightIconName}
                  appearance="outlined"
                  variant="transparent"
                  className={style.rightIcon}
                  onClick={onRightIconClickHandler}
                />
              )}
            </div>
          </div>
          {assistiveTextLabel && (
            <div className={style.assistiveText}>
              {showAssistiveIcon && assistiveAppearance === "error" && (
                <Icon name="error" appearance="outlined" className={style.assistiveIconError} size={12} />
              )}
              {showAssistiveIcon && assistiveAppearance === "success" && (
                <Icon name="check" appearance="outlined" className={style.assistiveIconSucces} size={12} />
              )}
              {assistiveAppearance === "link" ? (
                <Link label={assistiveTextLabel} />
              ) : (
                <p className={style.assistiveLabel} data-appearance={assistiveAppearance}>
                  {" "}
                  {assistiveTextLabel}{" "}
                </p>
              )}
            </div>
          )}
        </div>
        {displayCounter && labelPosition == "side" && (
          <p className={style.inputCounter}>
            {" "}
            {characterCount}/{maxLength}{" "}
          </p>
        )}
      </div>
    );
  },
);

export default TextInput;