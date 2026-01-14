import {
  BaseTextInputProps as CoreTextInputProps,
  RightIconAction,
  RightIconName,
} from "@design-system-rte/core/components/text-input/text-input.interface";
import {
  ChangeEvent,
  CSSProperties,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

import AssistiveText from "../../assistivetext/AssistiveText";
import Icon from "../../icon/Icon";
import IconButton from "../../iconButton/IconButton";
import RequiredIndicator from "../../requiredindicator/RequiredIndicator";
import { concatClassNames } from "../../utils";

import style from "./BaseTextInput.module.scss";

interface BaseTextInputProps
  extends
    CoreTextInputProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "onChange" | "value" | "defaultValue" | "placeholder"> {
  onChange?: (value: string) => void;
  rightSlot?: ReactNode;
  inputStyle?: CSSProperties;
  highlighted?: boolean;
}

const BaseTextInput = forwardRef<HTMLInputElement, BaseTextInputProps>(
  (
    {
      id,
      label,
      labelPosition = "top",
      required = false,
      showCounter,
      value,
      leftIcon,
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
      compactSpacing,
      placeholder,
      rightSlot,
      highlighted,
      ...props
    }: BaseTextInputProps,
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const getRightIconName = (rightIconActionType: RightIconAction): RightIconName => {
      if (["visibilityOn", "visibilityOff"].includes(rightIconActionType)) {
        return isHiddenInput ? "visibility-show" : "visibility-hide";
      } else if (rightIconActionType === "clean") {
        return "cancel";
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

    return (
      <div
        className={style.container}
        data-label-position={labelPosition}
        data-error={error}
        style={{ width }}
        data-compact-spacing={compactSpacing}
      >
        {label && (
          <div className={style.text}>
            <div className={style.labelContainer}>
              <label className={style.inputLabel} id={`inputLabel-${id}`} htmlFor={id}>
                {" "}
                {label}{" "}
              </label>
              <RequiredIndicator required={required} showLabelRequirement={showLabelRequirement} />
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
                id={id}
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
                data-highlighted={highlighted}
                className={style.inputField}
                maxLength={maxLength}
                onChange={handleChange}
                disabled={disabled}
                readOnly={readOnly}
                value={disabled ? "" : inputValue}
                placeholder={placeholder}
                {...props}
              />

              {shouldShowRightIcon() && (
                <IconButton
                  name={rightIconName}
                  appearance="outlined"
                  variant="neutral"
                  size="s"
                  compactSpacing={true}
                  className={style.rightIcon}
                  aria-label={rightIconAriaLabel}
                  onClick={onRightIconClickHandler}
                  data-testid="right-icon"
                />
              )}
            </div>
            {rightSlot && <div className={style.rightSlot}>{rightSlot}</div>}
          </div>
          {assistiveTextLabel && (
            <AssistiveText label={assistiveTextLabel} appearance={assistiveAppearance} showIcon={showAssistiveIcon} />
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

export default BaseTextInput;
