import { SelectProps as coreSelectProps } from "@design-system-rte/core/components/select/select.interface";
import { ENTER_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";
import { useRef, useState } from "react";

import AssistiveText from "../assistiveText/AssistiveText";
import { Dropdown } from "../dropdown/Dropdown";
import { DropdownItem } from "../dropdown/dropdownItem/DropdownItem";
import Icon from "../icon/Icon";
import IconButton from "../iconButton/IconButton";
import RequiredIndicator from "../requiredindicator/RequiredIndicator";
import { concatClassNames } from "../utils";

import styles from "./Select.module.scss";

export interface SelectProps extends coreSelectProps, HTMLDivElement {}

const Select = ({
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
}: SelectProps) => {
  const [internalValue, setInternalValue] = useState(value || "");

  const [isActive, setIsActive] = useState(false);

  const selectRef = useRef<HTMLDivElement>(null);

  const shouldDisplayClearButton = !!internalValue && !readonly && !disabled;

  const currentOptionLabel = options.find((option) => option.value === internalValue)?.label;

  const shouldDisplayErrorIcon = isError && !disabled && !readonly;

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
    handleOnChange("");
    onClear?.();
    selectRef.current?.focus();
  };

  const handleOnChange = (newValue: string) => {
    setInternalValue(newValue);
    onChange?.(newValue);
    setIsActive(false);
  };

  return (
    <>
      <div className={styles["select-container"]} data-label-position={labelPosition}>
        {showLabel && labelPosition === "side" && (
          <label htmlFor={id} id={id} className={styles["select-label"]}>
            {label}
            <RequiredIndicator required={required} showLabelRequirement={showLabelRequirement} />
          </label>
        )}
        <div className={styles["select-header"]}>
          {showLabel && labelPosition === "top" && (
            <span id={id} className={styles["select-label"]}>
              {label}
              <RequiredIndicator required={required} showLabelRequirement={showLabelRequirement} />
            </span>
          )}
          <Dropdown
            style={{ width: selectRef.current?.offsetWidth }}
            dropdownId={id + "-dropdown"}
            onClose={() => {
              setIsActive(false);
            }}
            offset={10}
            trigger={
              <div
                ref={selectRef}
                aria-controls="listbox1"
                aria-expanded={isActive}
                aria-haspopup="listbox"
                aria-labelledby="combo1-label"
                data-error={isError ? "true" : "false"}
                data-active={isActive ? "true" : "false"}
                data-disabled={disabled ? "true" : "false"}
                data-read-only={readonly ? "true" : "false"}
                id="combo1"
                className={styles["select-wrapper"]}
                role="combobox"
                tabIndex={0}
                onClick={handleOnClick}
                onKeyDown={handleKeyDown}
              >
                <div className={styles["select-content"]}>
                  {shouldDisplayErrorIcon && <Icon name="error" className={styles["error-icon"]} />}
                  <div className={styles["select-value"]}>
                    <span>{currentOptionLabel}</span>
                  </div>
                  <div className={styles["select-right-icons"]}>
                    {shouldDisplayClearButton && (
                      <IconButton
                        name="cancel"
                        variant="neutral"
                        className={concatClassNames(styles["icon-button"], styles["clear-icon"])}
                        onClick={handleOnClear}
                      />
                    )}
                    <IconButton
                      name="arrow-chevron-down"
                      variant="neutral"
                      className={concatClassNames(styles["icon-button"], styles["trigger-icon"])}
                    />
                  </div>
                </div>
              </div>
            }
            isOpen={isActive}
          >
            {options.length === 0 && <DropdownItem label="No options available" onClick={() => {}} />}
            {options.map(({ value, label }, index) => (
              <DropdownItem
                key={index + value}
                label={label}
                isSelected={value === internalValue}
                onClick={() => {
                  handleOnChange(value);
                }}
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
};

export default Select;
