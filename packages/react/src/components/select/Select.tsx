import {
  SELECT_DROPDOWN_OFFSET,
  THRESHOLD_BOTTOM_POSITION,
} from "@design-system-rte/core/components/select/select.constants";
import { SelectProps as coreSelectProps } from "@design-system-rte/core/components/select/select.interface";
import { getSelectedOption } from "@design-system-rte/core/components/select/select.utils";
import { ENTER_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";
import { forwardRef, useRef, useState } from "react";

import AssistiveText from "../assistivetext/AssistiveText";
import Badge from "../badge/Badge";
import Chip from "../chip/Chip";
import { Dropdown } from "../dropdown/Dropdown";
import { DropdownItem } from "../dropdown/dropdownItem/DropdownItem";
import Icon from "../icon/Icon";
import IconButton from "../iconButton/IconButton";
import RequiredIndicator from "../requiredindicator/RequiredIndicator";
import { concatClassNames } from "../utils";

import styles from "./Select.module.scss";

interface SingleSelectProps extends Omit<coreSelectProps, "value"> {
  multiple?: false;
  value?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

interface MultiSelectProps extends Omit<coreSelectProps, "value"> {
  multiple: true;
  value?: string[];
  header?: React.ReactNode;
  footer?: React.ReactNode;
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
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = useState<string | string[]>(value || (multiple ? [] : ""));

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

    const shouldDisplayClearButton =
      showResetButton &&
      (multiple ? Array.isArray(internalValue) && internalValue.length > 0 : !!internalValue) &&
      !readonly &&
      !disabled;

    const selectedOptionToDisplay = getSelectedOption(optionToDisplay, options, internalValue);

    const shouldDisplayErrorIcon = isError && !disabled && !readonly;

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
        setInternalValue([]);
        onClear?.();
      } else {
        handleOnChange("");
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
        setInternalValue((prevValue) => {
          if (Array.isArray(prevValue)) {
            const newValue = prevValue.filter((value) => value !== valueToClear);

            return newValue;
          }
          return prevValue;
        });
        onChange?.(valueToClear);
      }
    };

    const handleOnChange = (newValue: string) => {
      if (multiple) {
        const newArrayValue = Array.isArray(internalValue) ? [...internalValue] : [];
        const valueIndex = newArrayValue.indexOf(newValue);
        if (valueIndex > -1) {
          newArrayValue.splice(valueIndex, 1);
        } else {
          newArrayValue.push(newValue);
        }
        setInternalValue(newArrayValue);
        onChange?.(newValue);
        return;
      }
      setInternalValue(newValue);
      onChange?.(newValue);
      setIsActive(false);
    };

    if ((Array.isArray(internalValue) && !multiple) || (!Array.isArray(internalValue) && multiple)) {
      console.warn(
        "Value type does not match the 'multiple' prop. Please check the value provided to the Select component.",
      );
      return;
    }

    return (
      <>
        <div className={styles["select-container"]} data-label-position={labelPosition}>
          {showLabel && labelPosition === "side" && (
            <label htmlFor={id} id={label} className={styles["select-label"]}>
              {label}
              <RequiredIndicator required={required} showLabelRequirement={showLabelRequirement} />
            </label>
          )}
          <div className={styles["select-header"]}>
            {showLabel && labelPosition === "top" && (
              <label htmlFor={id} id={label} className={styles["select-label"]}>
                {label}
                <RequiredIndicator required={required} showLabelRequirement={showLabelRequirement} />
              </label>
            )}
            <Dropdown
              style={{ width: selectRef.current?.offsetWidth }}
              dropdownId={id + "-dropdown"}
              onClose={() => {
                setIsActive(false);
              }}
              offset={SELECT_DROPDOWN_OFFSET}
              autoClose={!multiple}
              trigger={
                <div
                  ref={selectRefCallback}
                  aria-expanded={isActive}
                  aria-labelledby={label}
                  data-error={isError ? "true" : "false"}
                  data-active={isActive ? "true" : "false"}
                  data-disabled={disabled ? "true" : "false"}
                  data-read-only={readonly ? "true" : "false"}
                  id={id}
                  className={styles["select-wrapper"]}
                  role="combobox"
                  tabIndex={disabled || readonly ? -1 : 0}
                  onClick={handleOnClick}
                  onKeyDown={handleKeyDown}
                >
                  <div className={styles["select-content"]}>
                    {shouldDisplayErrorIcon && <Icon name="error" className={styles["error-icon"]} />}
                    <div className={styles["select-value"]}>
                      {selectedOptionToDisplay && (
                        <>
                          {multiple ? (
                            <div className={styles["select-multiple-values"]}>
                              <Chip
                                id={id + "-chip"}
                                label={selectedOptionToDisplay.label}
                                compactSpacing
                                type="input"
                                onClose={(e) => handleClearChip(e, selectedOptionToDisplay.value)}
                              />
                              {internalValue.length > 1 && (
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
                            <span>{selectedOptionToDisplay.label}</span>
                          )}
                        </>
                      )}
                    </div>
                    <div className={styles["select-right-icons"]}>
                      {shouldDisplayClearButton && (
                        <IconButton
                          name="cancel"
                          variant="neutral"
                          className={concatClassNames(styles["icon-button"], styles["clear-icon"])}
                          onClick={handleOnClear}
                          disabled={disabled}
                        />
                      )}
                      <Icon
                        name={isActive ? "arrow-chevron-up" : "arrow-chevron-down"}
                        data-testid="trigger-icon"
                        className={styles["trigger-icon"]}
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
              {options.length === 0 && <DropdownItem label="No options available" />}
              {withSelectAll && multiple && options.length > 0 && (
                <DropdownItem
                  label="Sélectionner tout"
                  isSelected={Array.isArray(internalValue) && internalValue.length === options.length}
                  isIndeterminate={
                    Array.isArray(internalValue) && internalValue.length > 0 && internalValue.length < options.length
                  }
                  onClick={() => {
                    if (Array.isArray(internalValue) && internalValue.length === options.length) {
                      setInternalValue([]);
                    } else {
                      const allValues = options.map((option) => option.value);
                      setInternalValue(allValues);
                    }
                    onChange?.("select-all");
                  }}
                  hasCheckbox
                  hasSeparator
                />
              )}
              {options.map(({ value, label }, index) => (
                <DropdownItem
                  key={index + value}
                  label={label}
                  isSelected={multiple ? internalValue.includes(value) : internalValue === value}
                  onClick={() => {
                    handleOnChange(value);
                  }}
                  hasCheckbox={multiple}
                />
              ))}
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
