import {
  ARROW_DOWN_KEY,
  ARROW_LEFT_KEY,
  ARROW_RIGHT_KEY,
  ARROW_UP_KEY,
  BACKSPACE_KEY,
  DATE_SEGMENT_MAX_FIRST_DIGIT,
  DATE_SEGMENT_MAX_VALUE,
  DATE_SEGMENTS_ORDER,
  DateSegmentEnum,
  DELETE_KEY,
  getDatepickerCalendarButtonAriaLabel,
  waitForNextFrame,
} from "@design-system-rte/core";
import { DatepickerProps as CoreDatePickerProps } from "@design-system-rte/core/components/datepicker/datepicker.interface";
import { forwardRef, useCallback, useEffect, useRef, useState } from "react";

import AssistiveText from "../assistivetext/AssistiveText";
import { BaseDropdown } from "../dropdown/BaseDropdown";
import BaseInputPicker from "../pickers/baseInputPicker/BaseInputPicker";
import RequiredIndicator from "../requiredindicator/RequiredIndicator";

import styles from "./DatePicker.module.scss";
import { computeDateSegmentRanges, formatNumberToParseSegmentValue } from "./DatePicker.utils";
import DatePickerMenu from "./datePickerMenu/DatePickerMenu";
import useDatePickerInternalValue from "./hooks/useDatePickerInternalValue";
import { useNavigateBetweenDateSegment } from "./hooks/useNavigateBetweenDateSegment";

const numberRegex = /^\d*$/;

interface DatepickerProps
  extends CoreDatePickerProps, Omit<React.HTMLAttributes<HTMLDivElement>, "id" | "onChange" | "defaultValue"> {}

const [DAY, MONTH, YEAR] = DATE_SEGMENTS_ORDER;

const DatePicker = forwardRef<HTMLDivElement, DatepickerProps>(
  (
    {
      id,
      label,
      labelId,
      required = false,
      showLabelRequirement = false,
      disabled = false,
      value,
      readonly = false,
      onChange,
      hasAction = false,
      onCancel,
      onValidate,
      minDate,
      maxDate,
      disabledDates,
      isError,
      assistiveTextLabel,
      assistiveAppearance = "description",
      showAssistiveIcon = false,
      assistiveTextLink,
    }: DatepickerProps,
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const shouldDisplayAssistiveText = assistiveTextLabel && !isDropdownOpen;

    const {
      increaseActiveSegmentValue,
      decreaseActiveSegmentValue,
      resetActiveSegmentValue,
      updateDateSegment,
      updateFullDate,
      internalValue,
      displayValue,
      dateState,
      updateDisplayedDate,
    } = useDatePickerInternalValue(value, minDate, maxDate, disabledDates);

    const { moveToNextSegment, moveToPreviousSegment, setActiveDateSegment, activeDateSegment } =
      useNavigateBetweenDateSegment();

    useEffect(() => {
      if (!internalValue) {
        onChange?.(null);
      } else {
        onChange?.(internalValue);
      }
    }, [internalValue, onChange]);

    const dateInputRef = useRef<HTMLInputElement>(null);
    const pickerRef = useRef<HTMLDivElement>(null);

    const handleOnFocus = () => {
      focusDatePicker();
      selectActiveSegment(activeDateSegment);
    };

    const handleOnClose = () => {
      setIsFocused(false);
      setIsDropdownOpen(false);
    };

    const focusDatePicker = () => {
      if (!disabled) {
        setIsFocused(true);
      }
    };

    const handleOpenDatePicker = () => {
      if (!disabled) {
        setIsDropdownOpen(true);
      }
    };

    const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      const key = e.key;

      e.stopPropagation();
      selectActiveSegment(activeDateSegment);
      if ([ARROW_UP_KEY, ARROW_DOWN_KEY, ARROW_LEFT_KEY, ARROW_RIGHT_KEY, BACKSPACE_KEY, DELETE_KEY].includes(key)) {
        e.preventDefault();
        handleFunctionKey(key);
      } else if (numberRegex.test(key)) {
        e.preventDefault();
        handleDigitInput(key);
      } else {
        return;
      }
    };

    const handleFunctionKey = (key: string) => {
      if (key === ARROW_RIGHT_KEY) {
        moveToNextSegment();
      } else if (key === ARROW_LEFT_KEY) {
        moveToPreviousSegment();
      } else {
        if (key === ARROW_UP_KEY) {
          increaseActiveSegmentValue(activeDateSegment);
        } else if (key === ARROW_DOWN_KEY) {
          decreaseActiveSegmentValue(activeDateSegment);
        } else {
          resetActiveSegmentValue(activeDateSegment);
        }
      }
    };

    const handleDigitInput = (key: string) => {
      const segmentName = activeDateSegment === DAY ? "day" : activeDateSegment === MONTH ? "month" : "year";
      const currentSegmentValue = dateState[`${segmentName}Digits`];

      if (activeDateSegment === YEAR && currentSegmentValue.length >= 4) {
        handleYearSegmentInput(currentSegmentValue, key);
      } else {
        handleDayAndMonthSegmentInput(currentSegmentValue, key);
      }
    };

    const handleYearSegmentInput = (currentSegmentValue: string, key: string) => {
      const numberOfLeadingZeros = Array.from(currentSegmentValue).findIndex((digit) => digit !== "0");
      if (numberOfLeadingZeros === 0) {
        const newVal = formatNumberToParseSegmentValue(Number(key), activeDateSegment);
        updateDateSegment(activeDateSegment, newVal);
      } else {
        const newValue = currentSegmentValue.slice(numberOfLeadingZeros) + key;
        const clamped = formatNumberToParseSegmentValue(
          Math.min(Number(newValue), DATE_SEGMENT_MAX_VALUE[activeDateSegment]),
          activeDateSegment,
        );
        updateDateSegment(activeDateSegment, clamped);
      }
    };

    const handleDayAndMonthSegmentInput = (currentSegmentValue: string, key: string) => {
      if (currentSegmentValue.length >= 2) {
        if (currentSegmentValue[0] === "0") {
          const newValue = Number(currentSegmentValue[1] + key);
          const newVal = formatNumberToParseSegmentValue(
            Math.min(newValue, DATE_SEGMENT_MAX_VALUE[activeDateSegment]),
            activeDateSegment,
          );
          updateDateSegment(activeDateSegment, newVal);
          moveToNextSegment();
        } else {
          const newVal = formatNumberToParseSegmentValue(Number(key), activeDateSegment);
          updateDateSegment(activeDateSegment, newVal);
        }
      } else {
        const next = `${currentSegmentValue}${key}`;
        const maxFirstDigit = DATE_SEGMENT_MAX_FIRST_DIGIT[activeDateSegment];

        if (currentSegmentValue.length === 0 && Number(key) > maxFirstDigit) {
          const newVal = formatNumberToParseSegmentValue(Number(key), activeDateSegment);
          updateDateSegment(activeDateSegment, newVal);
        } else if (next.length === 2) {
          const clamped = formatNumberToParseSegmentValue(
            Math.min(Number(next), DATE_SEGMENT_MAX_VALUE[activeDateSegment]),
            activeDateSegment,
          );
          updateDateSegment(activeDateSegment, clamped);
        } else {
          const newVal = formatNumberToParseSegmentValue(Number(key), activeDateSegment);
          updateDateSegment(activeDateSegment, newVal);
        }
      }
    };

    const handleOnMouseUp = () => {
      if (isDropdownOpen) {
        setIsDropdownOpen(false);
      }
      const currentCursorPosition = dateInputRef.current?.selectionStart ?? 0;
      const ranges = computeDateSegmentRanges();
      const endIndex = 1;
      if (currentCursorPosition <= ranges[DAY][endIndex] + 1) {
        selectActiveSegment(DAY);
      } else if (currentCursorPosition <= ranges[MONTH][endIndex] + 1) {
        selectActiveSegment(MONTH);
      } else {
        selectActiveSegment(YEAR);
      }
    };

    const selectActiveSegment = useCallback(
      (segment: DateSegmentEnum) => {
        setActiveDateSegment(segment);
        const dividerLength = 3;
        const rangeStart =
          segment === DAY ? 0 : segment === MONTH ? 0 + 2 + dividerLength : 0 + 2 * (2 + dividerLength);
        const rangeEnd = segment === YEAR ? rangeStart + 4 : rangeStart + 2;
        waitForNextFrame(() => {
          dateInputRef.current?.setSelectionRange(rangeStart, rangeEnd);
        });
      },
      [setActiveDateSegment],
    );

    const handleOnCancel = () => {
      onCancel?.();
      handleOnClose();
    };

    const handleOnValidate = () => {
      onValidate?.();
      handleOnClose();
    };

    useEffect(() => {
      selectActiveSegment(activeDateSegment);
    }, [activeDateSegment, selectActiveSegment]);

    return (
      <div className={styles["rte-date-picker"]} style={{ minWidth: "248px" }} ref={ref}>
        <div className={styles["rte-date-picker-header"]}>
          <label htmlFor={id} id={labelId ?? label} className={styles["rte-datepicker-label"]}>
            {label}
            <RequiredIndicator required={required} showLabelRequirement={showLabelRequirement} />
          </label>
        </div>
        <BaseDropdown
          style={{ width: pickerRef.current?.offsetWidth }}
          isList={false}
          isOpen={isDropdownOpen}
          onClose={handleOnClose}
          offset={8}
          trigger={
            <BaseInputPicker
              id={id}
              ariaLabelledBy={labelId ?? label}
              icon="calendar-month"
              onFocus={handleOnFocus}
              isFocused={isFocused}
              pickerInputRef={dateInputRef}
              onOpenPicker={handleOpenDatePicker}
              value={displayValue}
              onKeyDown={handleOnKeyDown}
              onMouseUp={handleOnMouseUp}
              onChange={() => {}}
              fixedWidth={false}
              pickerRef={pickerRef}
              openButtonAriaLabel={getDatepickerCalendarButtonAriaLabel(internalValue)}
              isError={isError}
              disabled={disabled}
              readOnly={readonly}
            />
          }
          position="bottom"
        >
          <DatePickerMenu
            isOpen={isDropdownOpen}
            currentValue={internalValue}
            hasAction={hasAction}
            onValidate={handleOnValidate}
            onCancel={handleOnCancel}
            updateDisplayedDate={updateDisplayedDate}
            updateFullDate={updateFullDate}
            displayValue={displayValue}
            minDate={minDate}
            maxDate={maxDate}
            disabledDates={disabledDates}
          />
        </BaseDropdown>
        {shouldDisplayAssistiveText && (
          <AssistiveText
            label={assistiveTextLabel}
            appearance={isError ? "error" : assistiveAppearance}
            showIcon={showAssistiveIcon}
            href={assistiveTextLink}
          />
        )}
      </div>
    );
  },
);

export default DatePicker;
