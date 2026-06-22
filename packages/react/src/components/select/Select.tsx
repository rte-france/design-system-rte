import { IconSize } from "@design-system-rte/core";
import {
  SELECT_DROPDOWN_OFFSET,
  THRESHOLD_BOTTOM_POSITION,
} from "@design-system-rte/core/components/select/select.constants";
import { SelectProps as coreSelectProps } from "@design-system-rte/core/components/select/select.interface";
import { getSelectedOption } from "@design-system-rte/core/components/select/select.utils";
import { ENTER_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";
import { forwardRef, useEffect, useRef, useState } from "react";

import AssistiveText from "../assistivetext/AssistiveText";
import Badge from "../badge/Badge";
import Chip from "../chip/Chip";
import Dropdown from "../dropdown/Dropdown";
import DropdownItem from "../dropdown/dropdownItem/DropdownItem";
import Icon from "../icon/Icon";
import IconButton from "../iconButton/IconButton";
import Label from "../label/Label";
import { concatClassNames } from "../utils";

import styles from "./Select.module.scss";

interface SingleSelectProps extends Omit<coreSelectProps, "value" | "onChange"> {
  multiple?: false;
  value?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  onChange?: (value: string) => void;
  body?: React.ReactNode;
}

interface MultiSelectProps extends Omit<coreSelectProps, "value" | "onChange"> {
  multiple: true;
  value?: string[];
  header?: React.ReactNode;
  footer?: React.ReactNode;
  onChange?: (value: string[]) => void;
  body?: React.ReactNode;
}

export type SelectProps = SingleSelectProps | MultiSelectProps;

const Select = forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      id,
      label,
      labelPosition = "top",
      required = false,
      value,
      defaultValue,
      showLabel = true,
      isError,
      assistiveAppearance = "description",
      showAssistiveIcon = false,
      assistiveTextLink,
      showLabelRequirement = false,
      assistiveTextLabel,
      onClear,
      onChange,
      options = [],
      disabled,
      readonly,
      showResetButton,
      multiple,
      withSelectAll = true,
      optionToDisplay = "highest-selected",
      header,
      footer,
      width = "350px",
      compactSpacing = false,
      placeholder,
      variant = "default",
      maxHeight,
      body,
    },
    ref,
  ) => {
    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = useState<string | string[]>(defaultValue ?? (multiple ? [] : ""));

    const [isActive, setIsActive] = useState(false);

    const selectRef = useRef<HTMLDivElement | null>(null);

    const selectRefCallback = (node: HTMLDivElement | null) => {
      selectRef.current = node;
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };

    useEffect(() => {
      if (!isControlled) {
        return;
      }

      if (multiple) {
        setInternalValue(Array.isArray(value) ? value : []);
        return;
      }

      setInternalValue(Array.isArray(value) ? "" : (value ?? ""));
    }, [isControlled, multiple, value]);

    const shouldDisplayClearButton =
      showResetButton &&
      (multiple ? Array.isArray(internalValue) && internalValue.length > 0 : !!internalValue) &&
      !readonly &&
      !disabled;

    const selectedOptionToDisplay = getSelectedOption(optionToDisplay, options, internalValue);

    const shouldDisplayErrorIcon = isError && !disabled && !readonly;

    const shouldDisplaySelectedIcon =
      variant === "visibly-selected" &&
      !shouldDisplayErrorIcon &&
      !multiple &&
      !!internalValue &&
      !disabled &&
      !readonly;

    const computeDropdownPosition = () => {
      const selectElement = selectRef.current;
      if (selectElement) {
        const rect = selectElement.getBoundingClientRect();
        const spaceBelow = window.innerHeight - rect.bottom;
        return spaceBelow >= THRESHOLD_BOTTOM_POSITION ? "bottom" : "top";
      }
      return "bottom";
    };

    const handleOnClick = () => {
      if (selectRef.current) {
        if (disabled || readonly) {
          return;
        }
        selectRef.current.focus();
        setIsActive(!isActive);
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (document.activeElement === selectRef.current) {
        if (e.key === SPACE_KEY || e.key === ENTER_KEY) {
          e.preventDefault();
          handleOnClick();
        }
      }
    };

    const handleOnClear = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.stopPropagation();
      if (multiple) {
        if (!isControlled) {
          setInternalValue([]);
        }
        onChange?.([]);
        onClear?.();
      } else {
        if (!isControlled) {
          setInternalValue("");
        }
        onChange?.("");
        onClear?.();
      }
      selectRef.current?.focus();
    };

    const handleClearChip = (
      event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>,
      valueToClear: string,
    ) => {
      event.stopPropagation();
      if (multiple) {
        const prevValue = internalValue;
        if (!Array.isArray(prevValue)) {
          return;
        }
        const newValue = prevValue.filter((value) => value !== valueToClear);
        if (!isControlled) {
          setInternalValue(newValue);
        }
        onChange?.(newValue);
      }
    };

    const handleOnChange = (newValue: string) => {
      if (multiple) {
        const prevValue = internalValue;
        const newArrayValue = Array.isArray(prevValue) ? [...prevValue] : [];
        const valueIndex = newArrayValue.indexOf(newValue);
        if (valueIndex > -1) {
          newArrayValue.splice(valueIndex, 1);
        } else {
          newArrayValue.push(newValue);
        }
        if (!isControlled) {
          setInternalValue(newArrayValue);
        }
        onChange?.(newArrayValue);
      } else {
        if (!isControlled) {
          setInternalValue(newValue);
        }
        onChange?.(newValue);
        setIsActive(false);
      }
    };

    const handleOnClickSelectAll = () => {
      if (multiple) {
        if (Array.isArray(internalValue) && internalValue.length === options.length) {
          if (!isControlled) {
            setInternalValue([]);
          }
          onChange?.([]);
        } else {
          const allValues = options.map((option) => option.value);
          if (!isControlled) {
            setInternalValue(allValues);
          }
          onChange?.(allValues);
        }
      }
    };

    if ((Array.isArray(internalValue) && !multiple) || (!Array.isArray(internalValue) && multiple)) {
      console.warn(
        "Value type does not match the 'multiple' prop. Please check the value provided to the Select component.",
      );
      return;
    }

    return (
      <>
        <div className={styles["select-container"]} data-label-position={labelPosition} style={{ width }}>
          {showLabel && labelPosition === "side" && (
            <Label id={id} label={label} htmlFor={id} required={required} showLabelRequirement={showLabelRequirement} />
          )}
          <div className={styles["select-header"]}>
            {showLabel && labelPosition === "top" && (
              <Label
                id={id}
                label={label}
                htmlFor={id}
                required={required}
                showLabelRequirement={showLabelRequirement}
              />
            )}
            <Dropdown
              style={{ width }}
              dropdownId={id + "-dropdown"}
              onClose={() => {
                setIsActive(false);
              }}
              offset={SELECT_DROPDOWN_OFFSET}
              autoClose={!multiple}
              hasMaxWidth={false}
              maxHeight={maxHeight}
              isList={!body}
              trigger={
                <div
                  ref={selectRefCallback}
                  aria-expanded={isActive}
                  aria-labelledby={label}
                  data-error={isError}
                  data-active={isActive}
                  data-disabled={disabled}
                  data-read-only={readonly}
                  data-compact-spacing={compactSpacing}
                  data-multiple={multiple}
                  data-variant={variant}
                  data-has-value={!!internalValue}
                  id={id}
                  className={styles["select-wrapper"]}
                  role="combobox"
                  tabIndex={disabled || readonly ? -1 : 0}
                  onClick={handleOnClick}
                  onKeyDown={handleKeyDown}
                >
                  <div className={styles["select-content"]}>
                    {shouldDisplayErrorIcon && (
                      <Icon
                        name="error"
                        className={styles["error-icon"]}
                        size={compactSpacing ? IconSize["s"] : IconSize["m"]}
                      />
                    )}
                    {shouldDisplaySelectedIcon && (
                      <Icon
                        name="check-circle"
                        appearance="filled"
                        className={styles["selected-icon"]}
                        size={compactSpacing ? IconSize["s"] : IconSize["m"]}
                      />
                    )}
                    <div className={styles["select-value"]}>
                      {selectedOptionToDisplay ? (
                        <>
                          {multiple ? (
                            <div className={styles["select-multiple-values"]}>
                              <Chip
                                id={id + "-chip"}
                                label={selectedOptionToDisplay.label}
                                type="input"
                                onClose={(e) => handleClearChip(e, selectedOptionToDisplay.value)}
                              />
                              {Array.isArray(internalValue) && internalValue.length > 1 && (
                                <Badge
                                  count={internalValue.length - 1}
                                  content={"number"}
                                  badgeType={"brand"}
                                  size={"m"}
                                  withPlusSign={true}
                                />
                              )}
                            </div>
                          ) : (
                            <>
                              <div className={styles["select-single-value-wrapper"]} data-variant={variant}>
                                <span
                                  className={styles["select-single-value"]}
                                  data-variant={variant}
                                  data-active={isActive}
                                >
                                  {selectedOptionToDisplay.label}
                                </span>
                              </div>
                            </>
                          )}
                        </>
                      ) : placeholder ? (
                        <span className={styles["select-placeholder"]}>{placeholder}</span>
                      ) : null}
                    </div>
                    <div className={styles["select-right-icons"]}>
                      {shouldDisplayClearButton && (
                        <IconButton
                          name="cancel"
                          size="s"
                          variant="neutral"
                          className={concatClassNames(styles["icon-button"], styles["clear-icon"])}
                          onClick={handleOnClear}
                          disabled={disabled}
                          data-active={isActive}
                        />
                      )}
                      <Icon
                        name={isActive ? "arrow-chevron-up" : "arrow-chevron-down"}
                        data-testid="trigger-icon"
                        className={concatClassNames(styles["icon-button"], styles["trigger-icon"])}
                        data-active={isActive}
                      />
                    </div>
                  </div>
                </div>
              }
              header={header}
              footer={footer}
              isOpen={isActive}
              position={computeDropdownPosition()}
            >
              {body ? (
                body
              ) : (
                <>
                  {options.length === 0 && <DropdownItem label="No options available" />}
                  {withSelectAll && multiple && options.length > 0 && (
                    <DropdownItem
                      label="Sélectionner tout"
                      isSelected={Array.isArray(internalValue) && internalValue.length === options.length}
                      isIndeterminate={
                        Array.isArray(internalValue) && !!internalValue.length && internalValue.length < options.length
                      }
                      onClick={handleOnClickSelectAll}
                      hasCheckbox
                      hasSeparator
                    />
                  )}
                  {options.map(({ value, label }, index) => (
                    <DropdownItem
                      key={index + value}
                      label={label}
                      isSelected={multiple ? (internalValue as string[]).includes(value) : internalValue === value}
                      onClick={() => {
                        handleOnChange(value);
                      }}
                      hasCheckbox={multiple}
                    />
                  ))}
                </>
              )}
            </Dropdown>

            {assistiveTextLabel && (
              <AssistiveText
                label={assistiveTextLabel}
                appearance={isError ? "error" : assistiveAppearance}
                showIcon={showAssistiveIcon}
                href={assistiveTextLink}
              />
            )}
          </div>
        </div>
      </>
    );
  },
);

export default Select;
