import {
  ARROW_DOWN_KEY,
  ARROW_LEFT_KEY,
  ARROW_RIGHT_KEY,
  ARROW_UP_KEY,
  BACKSPACE_KEY,
  DATE_SEGMENT_MAX_VALUE,
  DATE_SEGMENTS_ORDER,
  DateSegmentEnum,
  DELETE_KEY,
  waitForNextFrame,
} from "@design-system-rte/core";
import { InputProps } from "@design-system-rte/core/components/common/input-props";
import { useCallback, useEffect, useRef, useState } from "react";

import Icon from "../../icon/Icon";
import Label from "../../label/Label";
import BaseInputPicker from "../baseInputPicker/BaseInputPicker";
import { computeDateSegmentRanges, formatNumberToParseSegmentValue } from "../datepicker/DatePicker.utils";
import useDatePickerInternalValue from "../datepicker/hooks/useDatePickerInternalValue";
import { useNavigateBetweenDateSegment } from "../datepicker/hooks/useNavigateBetweenDateSegment";

import styles from "./DateRangePicker.module.scss";

interface DateRangePickerProps extends Omit<InputProps, "value" | "onChange"> {
  id: string;
  value: [Date | null, Date | null] | null;
  onChange?: (value: [Date | null, Date | null] | null) => void;
}

const START_INPUT = "start";
const END_INPUT = "end";

type DateRangeInputType = typeof START_INPUT | typeof END_INPUT;

const [DAY, MONTH, YEAR] = DATE_SEGMENTS_ORDER;

const numberRegex = /^\d*$/;

const DateRangePicker = ({
  id,
  label,
  labelId,
  required = false,
  showLabelRequirement = false,
  value,
  onChange,
}: DateRangePickerProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const skipNextFocusRef = useRef(false);
  const activeInputRef = useRef<"start" | "end">("start");
  const activeModifiedSegmentRef = useRef<DateSegmentEnum | null>(null);

  const dateInputStartRef = useRef<HTMLInputElement | null>(null);
  const dateInputEndRef = useRef<HTMLInputElement | null>(null);

  const [internalValue, setInternalValue] = useState<[Date | null, Date | null] | null>(value);

  const {
    dateState: startDateState,
    internalValue: internalStartDate,
    increaseActiveSegmentValue: increaseStartDateSegmentValue,
    decreaseActiveSegmentValue: decreaseStartDateSegmentValue,
    resetActiveSegmentValue: resetStartDateSegmentValue,
    updateDateSegment: updateStartDateSegment,
    updateFullDate: updateStartFullDate,
    displayValue: startDisplayValue,
    updateDisplayedDate: updateStartDisplayedDate,
  } = useDatePickerInternalValue(value ? value[0] : null, {});
  const {
    dateState: endDateState,
    internalValue: internalEndDate,
    increaseActiveSegmentValue: increaseEndDateSegmentValue,
    decreaseActiveSegmentValue: decreaseEndDateSegmentValue,
    resetActiveSegmentValue: resetEndDateSegmentValue,
    updateDateSegment: updateEndDateSegment,
    updateFullDate: updateEndFullDate,
    displayValue: endDisplayValue,
    updateDisplayedDate: updateEndDisplayedDate,
  } = useDatePickerInternalValue(value ? value[1] : null, {});

  const {
    moveToNextSegment,
    moveToPreviousSegment,
    setActiveDateSegment: setActiveSegment,
    activeDateSegment: activeSegment,
  } = useNavigateBetweenDateSegment();

  const setCurrentActiveInput = (input: DateRangeInputType) => {
    activeInputRef.current = input;
  };

  const getCurrentActiveInput = () => {
    return activeInputRef.current;
  };

  const setCurrentModifiedSegment = (segment: DateSegmentEnum | null) => {
    activeModifiedSegmentRef.current = segment;
  };

  const getCurrentModifiedSegment = () => {
    return activeModifiedSegmentRef.current;
  };

  const shouldSkipNextFocus = () => {
    return skipNextFocusRef.current;
  };

  const setShouldSkipNextFocus = (value: boolean) => {
    skipNextFocusRef.current = value;
  };

  const handleOnFocusStart = () => {
    setCurrentActiveInput(START_INPUT);
    setIsFocused(true);
    if (shouldSkipNextFocus()) {
      return;
    } else {
      selectActiveSegment(activeSegment);
    }
  };

  const handleOnFocusEnd = () => {
    setCurrentActiveInput(END_INPUT);
    setIsFocused(true);
    if (shouldSkipNextFocus()) {
      return;
    } else {
      selectActiveSegment(activeSegment);
    }
  };

  const handleOnBlur = () => {
    setActiveSegment(DAY);
    setIsFocused(false);
    setShouldSkipNextFocus(false);
    setCurrentModifiedSegment(null);
  };

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const key = event.key;
    selectActiveSegment(activeSegment);

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
    const segmentName = activeSegment === DAY ? "day" : activeSegment === MONTH ? "month" : "year";
    const currentSegmentValue =
      getCurrentActiveInput() === START_INPUT
        ? startDateState[`${segmentName}Digits`]
        : endDateState[`${segmentName}Digits`];
    if (activeSegment === YEAR) {
      updateYearSegmentInput(currentSegmentValue, key);
    } else {
      handleDayAndMonthSegmentInput(currentSegmentValue, key);
    }
  };

  const updateYearSegmentInput = (currentSegmentValue: string, key: string) => {
    const numberOfLeadingZeros = Array.from(currentSegmentValue).findIndex((digit) => digit !== "0");
    if (getCurrentModifiedSegment() === YEAR) {
      const newValue = currentSegmentValue.slice(numberOfLeadingZeros) + key;
      const clamped = formatNumberToParseSegmentValue(
        Math.min(Number(newValue), DATE_SEGMENT_MAX_VALUE[DateSegmentEnum.YEAR]),
        DateSegmentEnum.YEAR,
      );
      if (getCurrentActiveInput() === START_INPUT) {
        updateStartDateSegment(DateSegmentEnum.YEAR, clamped);
      } else {
        updateEndDateSegment(DateSegmentEnum.YEAR, clamped);
      }
    } else {
      setCurrentModifiedSegment(DateSegmentEnum.YEAR);
      const newVal = formatNumberToParseSegmentValue(Number(key), DateSegmentEnum.YEAR);
      if (getCurrentActiveInput() === START_INPUT) {
        updateStartDateSegment(DateSegmentEnum.YEAR, newVal);
      } else {
        updateEndDateSegment(DateSegmentEnum.YEAR, newVal);
      }
    }
  };

  const handleDayAndMonthSegmentInput = (currentSegmentValue: string, key: string) => {
    if (activeSegment === MONTH) {
      if (getCurrentModifiedSegment() === MONTH) {
        const newValue = currentSegmentValue + key;
        const clamped = formatNumberToParseSegmentValue(
          Math.min(Number(newValue), DATE_SEGMENT_MAX_VALUE[DateSegmentEnum.MONTH]),
          DateSegmentEnum.MONTH,
        );
        if (getCurrentActiveInput() === START_INPUT) {
          updateStartDateSegment(DateSegmentEnum.MONTH, clamped);
        } else {
          updateEndDateSegment(DateSegmentEnum.MONTH, clamped);
        }
      } else {
        setCurrentModifiedSegment(DateSegmentEnum.MONTH);
        const newVal = formatNumberToParseSegmentValue(Number(key), DateSegmentEnum.MONTH);
        if (getCurrentActiveInput() === START_INPUT) {
          updateStartDateSegment(DateSegmentEnum.MONTH, newVal);
        } else {
          updateEndDateSegment(DateSegmentEnum.MONTH, newVal);
        }
      }
    } else {
      if (getCurrentModifiedSegment() === DAY) {
        const newValue = currentSegmentValue + key;
        const clamped = formatNumberToParseSegmentValue(
          Math.min(Number(newValue), DATE_SEGMENT_MAX_VALUE[DateSegmentEnum.DAY]),
          DateSegmentEnum.DAY,
        );
        if (getCurrentActiveInput() === START_INPUT) {
          updateStartDateSegment(DateSegmentEnum.DAY, clamped);
        } else {
          updateEndDateSegment(DateSegmentEnum.DAY, clamped);
        }
      } else {
        setCurrentModifiedSegment(DateSegmentEnum.DAY);
        const newVal = formatNumberToParseSegmentValue(Number(key), DateSegmentEnum.DAY);
        if (getCurrentActiveInput() === START_INPUT) {
          updateStartDateSegment(DateSegmentEnum.DAY, newVal);
        } else {
          updateEndDateSegment(DateSegmentEnum.DAY, newVal);
        }
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
        if (activeInputRef.current === START_INPUT) {
          increaseStartDateSegmentValue(activeSegment);
        } else {
          increaseEndDateSegmentValue(activeSegment);
        }
      } else {
        if (activeInputRef.current === START_INPUT) {
          decreaseStartDateSegmentValue(activeSegment);
        } else {
          decreaseEndDateSegmentValue(activeSegment);
        }
      }
    } else {
      if (activeInputRef.current === START_INPUT) {
        resetStartDateSegmentValue(activeSegment);
      } else {
        resetEndDateSegmentValue(activeSegment);
      }
      return;
    }
  };

  const handleOnMouseDownStart = () => {
    setCurrentActiveInput(START_INPUT);
    skipNextFocusRef.current = true;
  };

  const handleOnMouseDownEnd = () => {
    setCurrentActiveInput(END_INPUT);
    skipNextFocusRef.current = true;
  };

  const handleOnMouseUp = () => {
    const input = activeInputRef.current;
    const startInput = dateInputStartRef.current;
    const endInput = dateInputEndRef.current;
    const endIndex = 1;
    const ranges = computeDateSegmentRanges();

    const currentCursorPosition =
      input === START_INPUT ? (startInput?.selectionStart ?? 0) : (endInput?.selectionStart ?? 0);

    if (currentCursorPosition <= ranges[DAY][endIndex] + 1) {
      selectActiveSegment(DAY);
    } else if (currentCursorPosition <= ranges[MONTH][endIndex] + 1) {
      selectActiveSegment(MONTH);
    } else {
      selectActiveSegment(YEAR);
    }
    skipNextFocusRef.current = false;
  };

  const selectActiveSegment = useCallback(
    (segment: DateSegmentEnum) => {
      if (activeSegment !== segment) {
        setActiveSegment(segment);
      }
      const input = activeInputRef.current;
      const dividerLength = 3;
      const rangeStart = segment === DAY ? 0 : segment === MONTH ? 0 + 2 + dividerLength : 0 + 2 * (2 + dividerLength);
      const rangeEnd = segment === YEAR ? rangeStart + 4 : rangeStart + 2;
      waitForNextFrame(() => {
        if (input) {
          if (input === START_INPUT) {
            dateInputStartRef.current?.setSelectionRange(rangeStart, rangeEnd);
          } else {
            dateInputEndRef.current?.setSelectionRange(rangeStart, rangeEnd);
          }
        }
      });
    },
    [activeSegment, setActiveSegment],
  );

  useEffect(() => {
    selectActiveSegment(activeSegment);
  }, [activeSegment, selectActiveSegment]);

  useEffect(() => {
    let newInternalValue: [Date | null, Date | null] | null = internalValue;
    newInternalValue = [internalStartDate, internalValue ? internalValue[1] : null];
    setInternalValue(newInternalValue);
    onChange?.(newInternalValue);
  }, [internalStartDate]);

  useEffect(() => {
    let newInternalValue: [Date | null, Date | null] | null = internalValue;
    newInternalValue = [internalValue ? internalValue[0] : null, internalEndDate];
    setInternalValue(newInternalValue);
    onChange?.(newInternalValue);
  }, [internalEndDate]);

  return (
    <div className={styles["date-range-picker"]}>
      <Label id={labelId} label={label} required={required} showLabelRequirement={showLabelRequirement} htmlFor={id} />
      <div className={styles["date-range-picker-inputs"]}>
        <BaseInputPicker
          id={`${id}-start`}
          pickerInputRef={dateInputStartRef}
          isFocused={isFocused}
          onKeyDown={handleOnKeyDown}
          onMouseDown={handleOnMouseDownStart}
          onMouseUp={handleOnMouseUp}
          onFocus={handleOnFocusStart}
          onBlur={handleOnBlur}
          value={startDisplayValue}
          icon="calendar-month"
        />
        <Icon name="arrow-double-right" size={20} />
        <BaseInputPicker
          id={`${id}-end`}
          pickerInputRef={dateInputEndRef}
          isFocused={isFocused}
          onKeyDown={handleOnKeyDown}
          onMouseDown={handleOnMouseDownEnd}
          onMouseUp={handleOnMouseUp}
          onFocus={handleOnFocusEnd}
          onBlur={handleOnBlur}
          value={endDisplayValue}
          icon="calendar-month"
        />
      </div>
    </div>
  );
};

export default DateRangePicker;
