import {
  ARROW_DOWN_KEY,
  ARROW_LEFT_KEY,
  ARROW_RIGHT_KEY,
  ARROW_UP_KEY,
  BACKSPACE_KEY,
  DATE_SEGMENT_MAX_FIRST_DIGIT,
  DATE_SEGMENT_MAX_VALUE,
  DATE_SEGMENTS_ORDER,
  DELETE_KEY,
  waitForNextFrame,
} from "@design-system-rte/core";
import { useCallback, useEffect, useRef, useState } from "react";

import { BaseDropdown } from "../dropdown/BaseDropdown";
import BaseInputPicker from "../pickers/baseInputPicker/BaseInputPicker";

import styles from "./DatePicker.module.scss";
import { computeDateSegmentRanges, formatNumberToParseSegmentValue } from "./DatePicker.utils";
import useDatePickerInternalValue from "./hooks/useDatePickerInternalValue";
import { useNavigateBetweenDateSegment } from "./hooks/useNavigateBetweenDateSegment";

const numberRegex = /^\d*$/;

interface DatePickerProps {
  value: Date | null;
  disabled?: boolean;
  onChange?: (newDate: Date | null) => void;
}

const [DAY, MONTH, YEAR] = DATE_SEGMENTS_ORDER;

const DatePicker = ({ disabled, value, onChange }: DatePickerProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const {
    increaseActiveSegmentValue,
    decreaseActiveSegmentValue,
    resetActiveSegmentValue,
    updateDateSegment,
    internalValue,
    displayValue,
    dateState,
  } = useDatePickerInternalValue(value);

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

  const handleOnFocus = () => {
    focusDatePicker();
  };

  const handleOnClose = () => {
    setIsFocused(false);
    setIsDropdownOpen(false);
  };

  const focusDatePicker = () => {
    if (!disabled) {
      setIsFocused(true);
      dateInputRef.current?.focus();
      selectActiveSegment();
    }
  };

  const handleOpenDatePicker = () => {
    if (!disabled) {
      setIsDropdownOpen(true);
      console.log(internalValue);
    }
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const key = e.key;

    e.preventDefault();
    e.stopPropagation();
    selectActiveSegment();
    if ([ARROW_UP_KEY, ARROW_DOWN_KEY, ARROW_LEFT_KEY, ARROW_RIGHT_KEY, BACKSPACE_KEY, DELETE_KEY].includes(key)) {
      handleFunctionKey(key);
    } else if (numberRegex.test(key)) {
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
    const currentCursorPosition = dateInputRef.current?.selectionStart ?? 0;
    const ranges = computeDateSegmentRanges();
    const endIndex = 1;
    if (currentCursorPosition <= ranges[DAY][endIndex] + 1) {
      setActiveDateSegment(DAY);
    } else if (currentCursorPosition <= ranges[MONTH][endIndex] + 1) {
      setActiveDateSegment(MONTH);
    } else {
      setActiveDateSegment(YEAR);
    }
    selectActiveSegment();
  };

  const selectActiveSegment = useCallback(() => {
    const dividerLength = 3;
    const rangeStart =
      activeDateSegment === DAY ? 0 : activeDateSegment === MONTH ? 0 + 2 + dividerLength : 0 + 2 * (2 + dividerLength);
    const rangeEnd = activeDateSegment === YEAR ? rangeStart + 4 : rangeStart + 2;
    waitForNextFrame(() => {
      console.log({ rangeStart, rangeEnd });
      dateInputRef.current?.setSelectionRange(rangeStart, rangeEnd);
    });
  }, [activeDateSegment]);

  useEffect(() => {
    console.log("activeSegment changed", activeDateSegment);
    selectActiveSegment();
  }, [activeDateSegment, selectActiveSegment]);

  return (
    <BaseDropdown
      isList={false}
      isOpen={isDropdownOpen}
      onClose={handleOnClose}
      offset={8}
      trigger={
        <BaseInputPicker
          id={"my-id"}
          icon="calendar-month"
          onFocus={handleOnFocus}
          isFocused={isFocused}
          pickerInputRef={dateInputRef}
          onOpenPicker={handleOpenDatePicker}
          value={displayValue}
          onKeyDown={handleOnKeyDown}
          onMouseUp={handleOnMouseUp}
          onChange={() => {}}
        />
      }
      position="bottom"
    >
      <div className={styles["rte-date-picker-dropdown"]}>Contenu du dropdown</div>
    </BaseDropdown>
  );
};

export default DatePicker;
