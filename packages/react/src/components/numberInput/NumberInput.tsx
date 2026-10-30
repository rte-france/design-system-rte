import { ButtonSize } from "@design-system-rte/core/components/button/common/common-button";
import type { NumberInputProps as CoreNumberInputProps } from "@design-system-rte/core/components/number-input/number-input.interface";
import { forwardRef, InputHTMLAttributes, MouseEvent } from "react";

import AssistiveText from "../assistivetext/AssistiveText";
import IconButton from "../iconButton/IconButton";
import Label from "../label/Label";
import { concatClassNames } from "../utils";

import {
  NUMBER_INPUT_DEFAULT_APPEARANCE,
  NUMBER_INPUT_DEFAULT_INCREMENT_POSITION,
  useNumberInput,
} from "./hooks/useNumberInput";
import styles from "./NumberInput.module.scss";

interface NumberInputProps
  extends
    CoreNumberInputProps,
    Omit<
      InputHTMLAttributes<HTMLInputElement>,
      | "id"
      | "value"
      | "defaultValue"
      | "onChange"
      | "onBlur"
      | "aria-label"
      | "aria-labelledby"
      | "min"
      | "max"
      | "step"
      | "name"
      | "width"
      | "placeholder"
    > {
  onBlur?: () => void;
  "aria-label"?: string;
  "aria-labelledby"?: string;
}

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      id,
      label,
      labelPosition = "top",
      required = false,
      showLabelRequirement = false,
      appearance = NUMBER_INPUT_DEFAULT_APPEARANCE,
      incrementPosition = NUMBER_INPUT_DEFAULT_INCREMENT_POSITION,
      compactSpacing = false,
      unit = "",
      assistiveTextLabel = "",
      assistiveAppearance = "description",
      showAssistiveIcon = false,
      isError = false,
      errorMessage = "",
      disabled = false,
      readOnly = false,
      min,
      max,
      step,
      decimalPrecision,
      locale,
      defaultValue,
      placeholder = "",
      width,
      name = "",
      rangeErrorMessages,
      value,
      onChange,
      onBlur,
      "aria-label": ariaLabel = "",
      "aria-labelledby": ariaLabelledby = "",
      ...inputProps
    }: NumberInputProps,
    ref,
  ) => {
    const {
      spinbuttonRef,
      computedWidth,
      fieldDisplayText,
      inputFocused,
      inputMode,
      showErrorState,
      visibleAssistiveText,
      displayedLabel,
      hasVisibleLabel,
      spinbuttonAriaLabelledby,
      spinbuttonAriaLabel,
      spinbuttonAriaDescribedBy,
      canDecrement,
      canIncrement,
      ariaValueNow,
      ariaValueText,
      handleInput,
      handleBlur,
      handleFocus,
      handleKeyDown,
      handleDecrementClick,
      handleIncrementClick,
    } = useNumberInput({
      id,
      label,
      value,
      defaultValue,
      onChange,
      onBlur,
      min,
      max,
      step,
      decimalPrecision,
      locale,
      unit,
      isError,
      errorMessage,
      assistiveTextLabel,
      disabled,
      readOnly,
      rangeErrorMessages,
      ariaLabel,
      ariaLabelledby,
      width,
    });

    const stepperSize: Exclude<ButtonSize, "l"> = compactSpacing ? "s" : "m";
    const stepperButtonProps =
      appearance === "brand"
        ? { variant: "primary" as const, appearance: "filled" as const }
        : { appearance: "neutral" as const, hierarchy: "primary" as const, iconAppearance: "filled" as const };
    const labelId = hasVisibleLabel ? `input-label-${id}` : undefined;
    const computedAssistiveAppearance = showErrorState ? "error" : assistiveAppearance;
    const showAssistiveIconResolved = showErrorState || showAssistiveIcon;

    const controlClassName = concatClassNames(
      styles.numberInputControl,
      showErrorState ? styles.numberInputControlError : "",
      disabled ? styles.numberInputControlDisabled : "",
      readOnly ? styles.numberInputControlReadOnly : "",
      inputFocused ? styles.numberInputControlHighlighted : "",
    );

    const stepperDisabled = disabled || readOnly;

    const renderStepper = (
      stepperType: "increment" | "decrement",
      options: {
        name: "add" | "remove";
        disabled: boolean;
        onClick: (event: MouseEvent<HTMLButtonElement>) => void;
      },
    ) => (
      <span className={concatClassNames(styles.numberInputStepper, `number-input-stepper--${stepperType}`)}>
        <IconButton
          name={options.name}
          {...stepperButtonProps}
          size={stepperSize}
          compactSpacing={compactSpacing}
          disabled={options.disabled}
          tabIndex={-1}
          aria-hidden={true}
          onClick={options.onClick}
        />
      </span>
    );

    const decrementStepper = renderStepper("decrement", {
      name: "remove",
      disabled: stepperDisabled || !canDecrement,
      onClick: handleDecrementClick,
    });

    const incrementStepper = renderStepper("increment", {
      name: "add",
      disabled: stepperDisabled || !canIncrement,
      onClick: handleIncrementClick,
    });

    return (
      <div
        className={styles.container}
        data-label-position={labelPosition}
        data-disabled={disabled || undefined}
        data-compact-spacing={compactSpacing || undefined}
        style={{ width: computedWidth }}
      >
        {displayedLabel && (
          <div className={styles.text}>
            <Label
              id={labelId}
              label={displayedLabel}
              htmlFor={id}
              required={required}
              showLabelRequirement={showLabelRequirement}
            />
          </div>
        )}
        <div className={styles.inputContainer}>
          <div className={styles.input} data-disabled={disabled || undefined} data-read-only={readOnly || undefined}>
            <div
              className={styles.numberInputLayout}
              role="group"
              data-increment-position={incrementPosition}
              data-appearance={appearance}
              aria-labelledby={spinbuttonAriaLabelledby}
              aria-label={spinbuttonAriaLabelledby ? undefined : spinbuttonAriaLabel}
            >
              {incrementPosition === "sides" && decrementStepper}
              <div className={controlClassName}>
                <div className={styles.numberInputValue}>
                  <input
                    {...inputProps}
                    ref={(node) => {
                      spinbuttonRef.current = node;
                      if (typeof ref === "function") {
                        ref(node);
                      } else if (ref) {
                        ref.current = node;
                      }
                    }}
                    id={id}
                    name={name || undefined}
                    className={styles.numberInputSpinbutton}
                    type="text"
                    role="spinbutton"
                    inputMode={inputMode as "decimal" | "numeric"}
                    value={fieldDisplayText}
                    placeholder={placeholder}
                    readOnly={readOnly}
                    disabled={disabled}
                    aria-valuemin={min}
                    aria-valuemax={max ?? undefined}
                    aria-valuenow={ariaValueNow}
                    aria-valuetext={ariaValueText}
                    aria-invalid={showErrorState || undefined}
                    aria-readonly={readOnly || undefined}
                    aria-required={required || undefined}
                    aria-labelledby={spinbuttonAriaLabelledby}
                    aria-label={spinbuttonAriaLabel}
                    aria-describedby={spinbuttonAriaDescribedBy}
                    onChange={handleInput}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    onKeyDown={handleKeyDown}
                  />
                  {unit ? (
                    <span className={styles.numberInputUnit} aria-hidden="true">
                      {unit}
                    </span>
                  ) : null}
                </div>
              </div>
              {incrementPosition === "sides" ? (
                incrementStepper
              ) : (
                <div className={styles.numberInputSteppersRight}>
                  {decrementStepper}
                  {incrementStepper}
                </div>
              )}
            </div>
          </div>
          {visibleAssistiveText ? (
            <AssistiveText
              id={`${id}-assistive-text`}
              label={visibleAssistiveText}
              appearance={computedAssistiveAppearance}
              showIcon={showAssistiveIconResolved}
            />
          ) : null}
        </div>
      </div>
    );
  },
);

export default NumberInput;
