import {
  ARROW_UP_KEY,
  ARROW_DOWN_KEY,
  ARROW_LEFT_KEY,
  ARROW_RIGHT_KEY,
  BACKSPACE_KEY,
  DELETE_KEY,
  DATE_SEGMENT_MAX_VALUE,
  DateSegmentEnum,
  DdMmYyyyDigitParts,
} from "@design-system-rte/core";
import { useEffect, useMemo, useRef } from "react";

import BaseInputPicker, { BaseInputPickerProps } from "../../baseInputPicker/BaseInputPicker";
import { formatNumberToParseSegmentValue } from "../../picker.utils";

interface DateRangeInputProps extends Omit<BaseInputPickerProps, "value" | "onChange"> {
  value: Date | null;
  onChange?: (newDate: Date | null) => void;
  activeSegment: DateSegmentEnum;
  moveToNextSegment: () => void;
  moveToPreviousSegment: () => void;
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: Date[];
  dateState: DdMmYyyyDigitParts;
  internalValue: Date | null;
  increaseActiveSegmentValue: (segment: DateSegmentEnum) => void;
  decreaseActiveSegmentValue: (segment: DateSegmentEnum) => void;
  resetActiveSegmentValue: (segment: DateSegmentEnum) => void;
  updateDateSegment: (segment: DateSegmentEnum, value: string) => void;
  updateFullDate: (date: Date | null) => void;
  displayValue: string;
  isError?: boolean;
  readonly?: boolean;
}

const numberRegex = /^\d*$/;

const isDateStateEmpty = (dateState: DdMmYyyyDigitParts): boolean => {
  return dateState.dayDigits === "" && dateState.monthDigits === "" && dateState.yearDigits === "";
};

const areSameDate = (a: Date | null, b: Date | null): boolean => {
  if (a === b) {
    return true;
  }

  if (!a || !b) {
    return false;
  }

  return a.getTime() === b.getTime();
};

const DateRangeInput = ({
  id,
  pickerInputRef,
  isFocused,
  onKeyDown,
  onMouseDown,
  onMouseUp,
  onFocus,
  onBlur,
  value,
  onChange,
  activeSegment,
  moveToNextSegment,
  moveToPreviousSegment,
  onOpenPicker,
  disabled,
  dateState,
  internalValue,
  increaseActiveSegmentValue,
  decreaseActiveSegmentValue,
  resetActiveSegmentValue,
  updateDateSegment,
  displayValue,
  isError,
  readonly,
}: DateRangeInputProps) => {
  const activeModifiedSegmentRef = useRef<DateSegmentEnum | null>(null);
  const onChangeRef = useRef(onChange);
  const lastEmittedValueRef = useRef<Date | null>(value ?? null);

  const localDisplayValue = useMemo(() => displayValue, [displayValue]);

  const setCurrentModifiedSegment = (segment: DateSegmentEnum | null) => {
    activeModifiedSegmentRef.current = segment;
  };

  const getCurrentModifiedSegment = () => {
    return activeModifiedSegmentRef.current;
  };

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const key = event.key;
    onKeyDown?.(event);

    if ([ARROW_UP_KEY, ARROW_DOWN_KEY, ARROW_LEFT_KEY, ARROW_RIGHT_KEY, BACKSPACE_KEY, DELETE_KEY].includes(key)) {
      event.preventDefault();
      handleFunctionKey(key);
      return;
    }

    if (numberRegex.test(key)) {
      handleDigitInput(key);
    } else {
      return;
    }
  };

  const handleDigitInput = (key: string) => {
    const segmentName =
      activeSegment === DateSegmentEnum.DAY ? "day" : activeSegment === DateSegmentEnum.MONTH ? "month" : "year";
    const currentSegmentValue = dateState[`${segmentName}Digits`];
    if (activeSegment === DateSegmentEnum.YEAR) {
      updateYearSegmentInput(currentSegmentValue, key);
    } else {
      handleDayAndMonthSegmentInput(currentSegmentValue, key);
    }
  };

  const updateYearSegmentInput = (currentSegmentValue: string, key: string) => {
    const numberOfLeadingZeros = Array.from(currentSegmentValue).findIndex((digit) => digit !== "0");
    if (numberOfLeadingZeros === 0) {
      setCurrentModifiedSegment(null);
    }
    if (getCurrentModifiedSegment() === DateSegmentEnum.YEAR) {
      const newValue = currentSegmentValue.slice(numberOfLeadingZeros) + key;
      const maxValue = DATE_SEGMENT_MAX_VALUE[DateSegmentEnum.YEAR];
      const clamped = formatNumberToParseSegmentValue(Math.min(Number(newValue), maxValue), DateSegmentEnum.YEAR);

      updateDateSegment(DateSegmentEnum.YEAR, clamped);
    } else {
      setCurrentModifiedSegment(DateSegmentEnum.YEAR);
      const newVal = formatNumberToParseSegmentValue(Number(key), DateSegmentEnum.YEAR);
      updateDateSegment(DateSegmentEnum.YEAR, newVal);
    }
  };

  const handleDayAndMonthSegmentInput = (currentSegmentValue: string, key: string) => {
    const numberOfLeadingZeros = Array.from(currentSegmentValue).findIndex((digit) => digit !== "0");
    if (numberOfLeadingZeros === 0) {
      setCurrentModifiedSegment(null);
    }
    if (activeSegment === DateSegmentEnum.MONTH) {
      if (getCurrentModifiedSegment() === DateSegmentEnum.MONTH) {
        const newValue = currentSegmentValue + key;
        const clamped = formatNumberToParseSegmentValue(
          Math.min(Number(newValue), DATE_SEGMENT_MAX_VALUE[DateSegmentEnum.MONTH]),
          DateSegmentEnum.MONTH,
        );
        updateDateSegment(DateSegmentEnum.MONTH, clamped);
        moveToNextSegment();
      } else {
        setCurrentModifiedSegment(DateSegmentEnum.MONTH);
        const newVal = formatNumberToParseSegmentValue(Number(key), DateSegmentEnum.MONTH);
        updateDateSegment(DateSegmentEnum.MONTH, newVal);
      }
    } else {
      if (getCurrentModifiedSegment() === DateSegmentEnum.DAY) {
        const newValue = currentSegmentValue + key;
        const clamped = formatNumberToParseSegmentValue(
          Math.min(Number(newValue), DATE_SEGMENT_MAX_VALUE[DateSegmentEnum.DAY]),
          DateSegmentEnum.DAY,
        );
        updateDateSegment(DateSegmentEnum.DAY, clamped);
        moveToNextSegment();
      } else {
        setCurrentModifiedSegment(DateSegmentEnum.DAY);
        const newVal = formatNumberToParseSegmentValue(Number(key), DateSegmentEnum.DAY);
        updateDateSegment(DateSegmentEnum.DAY, newVal);
      }
    }
  };

  const handleFunctionKey = (key: string) => {
    if ([ARROW_LEFT_KEY, ARROW_RIGHT_KEY].includes(key)) {
      activeModifiedSegmentRef.current = null;
      if (key === ARROW_RIGHT_KEY) {
        moveToNextSegment();
      } else {
        moveToPreviousSegment();
      }
    } else if ([ARROW_UP_KEY, ARROW_DOWN_KEY].includes(key)) {
      if (key === ARROW_UP_KEY) {
        increaseActiveSegmentValue(activeSegment);
      } else {
        decreaseActiveSegmentValue(activeSegment);
      }
    } else {
      resetActiveSegmentValue(activeSegment);
    }
  };

  useEffect(() => {
    if (internalValue === null && !isDateStateEmpty(dateState)) {
      return;
    }

    if (areSameDate(lastEmittedValueRef.current, internalValue)) {
      return;
    }

    lastEmittedValueRef.current = internalValue;
    onChangeRef.current?.(internalValue);
  }, [internalValue, dateState]);

  return (
    <BaseInputPicker
      id={`${id}-start`}
      pickerInputRef={pickerInputRef}
      isFocused={isFocused}
      onKeyDown={handleOnKeyDown}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onFocus={onFocus}
      onBlur={onBlur}
      value={localDisplayValue}
      icon="calendar-month"
      onOpenPicker={onOpenPicker}
      fixedWidth={false}
      onChange={() => {}}
      disabled={disabled}
      isError={isError}
      readOnly={readonly}
    />
  );
};

export default DateRangeInput;
