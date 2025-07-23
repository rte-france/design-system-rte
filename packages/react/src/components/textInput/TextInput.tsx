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
      leftIcon = "",
      showRightIcon = true,
      rightIconAction = "clean",
      showLabelRequirement = false,
      assistiveAppearance = "description",
      showAssistiveIcon = false,
      assistiveTextLabel = "",
      error = false,
      maxLength,
      disabled,
      readOnly,
      width,
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

    const getRightIconAriaLabel = (rightIconActionType: RightIconAction): string => {
      if (["visibilityOn", "visibilityOff"].includes(rightIconActionType)) {
        return isHiddenInput ? "show text" : "hide text";
      } else if (rightIconActionType === "clean") {
        return "clear";
      }
      return "";
    };

    const [inputValue, setInputValue] = useState(value ?? "");
    const [characterCount, setCharacterCount] = useState(inputValue.length);
    const [isHiddenInput, setIsHiddenInput] = useState(!!showRightIcon && rightIconAction === "visibilityOn");

    useEffect(() => {
      if (value !== undefined) {
        setInputValue(value);
        setCharacterCount(value.length);
      }
    }, [value]);

    useEffect(() => {
      setIsHiddenInput(!!showRightIcon && rightIconAction === "visibilityOn");
    }, [showRightIcon, rightIconAction]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      setInputValue(newValue);
      setCharacterCount(newValue.length);
      if (onChange) {
        onChange(newValue);
      }
    };

    const triggerRightIconAction = () => {
      if (rightIconAction === "clean") {
        setInputValue("");
        setCharacterCount(0);
        if (onChange) {
          onChange("");
        }
      }
      if (["visibilityOn", "visibilityOff"].includes(rightIconAction)) {
        toggleInputVisibility();
      }
    };

    const onRightIconClickHandler = () => {
      if (onRightIconClick) {
        onRightIconClick();
      }
      triggerRightIconAction();
    };

    const toggleInputVisibility = () => {
      setIsHiddenInput(!isHiddenInput);
    };

    const computedLeftIcon = error ? "error" : leftIcon;

    const computedInputBarClassName = concatClassNames(
      style.inputBar,
      computedLeftIcon ? style.withLeftIcon : "",
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
    const rightIconAriaLabel = getRightIconAriaLabel(rightIconAction);

    const shouldShowRightIcon = () => {
      if (readOnly || disabled) {
        return false;
      }
      if (rightIconAction === "clean") {
        return !!inputValue?.length && showRightIcon;
      }
      return showRightIcon && !!rightIconAction;
    };

    const labelRequirementTemplate = required ? (
      showLabelRequirement ? (
        <span className={style.requiredText}>(obligatoire)</span>
      ) : (
        <span className={style.requiredIconContainer}>
          <Icon name="asterisk" size={8} />
        </span>
      )
    ) : showLabelRequirement ? (
      <span className={style.requiredText}>(optionnel)</span>
    ) : null;

    return (
      <div className={style.container} data-label-position={labelPosition} data-error={error} style={{ width }}>
        {label && (
          <div className={style.text}>
            <div className={style.labelContainer}>
              <label className={style.inputLabel} id="inputLabel">
                {" "}
                {label}{" "}
              </label>
              {labelRequirementTemplate}
            </div>
            {displayCounter && labelPosition === "top" && (
              <p className={style.inputCounter} data-testid="input-counter">
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
              {computedLeftIcon && (
                <Icon
                  name={computedLeftIcon}
                  appearance="outlined"
                  className={style.leftIcon}
                  aria-hidden="true"
                  data-testid={`left-icon ${computedLeftIcon}`}
                />
              )}
              <input
                aria-label={getInputAriaLabel()}
                aria-required={required}
                ref={(node) => {
                  inputRef.current = node;
                  if (typeof ref === "function") {
                    ref(node);
                  } else if (ref) {
                    ref.current = node;
                  }
                }}
                type={isHiddenInput ? "password" : "text"}
                data-error={error}
                className={style.inputField}
                maxLength={maxLength}
                onChange={handleChange}
                disabled={disabled}
                readOnly={readOnly}
                value={inputValue}
                {...props}
              />

              {shouldShowRightIcon() && (
                <IconButton
                  name={rightIconName}
                  appearance="outlined"
                  variant="transparent"
                  className={style.rightIcon}
                  aria-label={rightIconAriaLabel}
                  onClick={onRightIconClickHandler}
                  data-testid="right-icon"
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
          <p className={style.inputCounter} data-testid="input-counter">
            {" "}
            {characterCount}/{maxLength}{" "}
          </p>
        )}
      </div>
    );
  },
);

export default TextInput;
