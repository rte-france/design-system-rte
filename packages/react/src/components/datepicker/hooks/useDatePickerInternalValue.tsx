import {
  DATE_SEGMENT_MAX_VALUE,
  DATE_SEGMENTS_ORDER,
  DateSegmentEnum,
  DdMmYyyyDigitParts,
  isDateDisabled,
} from "@design-system-rte/core";
import { useEffect, useMemo, useState } from "react";

import {
  formatNumberToParseSegmentValue,
  getDecreasedValueWithBounds,
  getIncreasedValueWithBounds,
} from "../DatePicker.utils";

const [DAY, MONTH] = DATE_SEGMENTS_ORDER;

const placeholderDisplayValue = "jj / mm / aaaa";

const buildDisplayValue = (dateState: DdMmYyyyDigitParts): string => {
  const day = dateState.dayDigits || "jj";
  const month = dateState.monthDigits || "mm";
  const year = dateState.yearDigits || "aaaa";

  return `${day} / ${month} / ${year}`;
};

const buildInternalValue = (
  dateState: DdMmYyyyDigitParts,
  minDate?: Date,
  maxDate?: Date,
  disabledDates?: readonly Date[],
): Date | null => {
  const day = dateState.dayDigits === "" || isNaN(Number(dateState.dayDigits)) ? null : Number(dateState.dayDigits);
  const month =
    dateState.monthDigits === "" || isNaN(Number(dateState.monthDigits)) ? null : Number(dateState.monthDigits);
  const year = dateState.yearDigits === "" || isNaN(Number(dateState.yearDigits)) ? null : Number(dateState.yearDigits);
  if (day === null || month === null || year === null) {
    return null;
  } else {
    const date = new Date(1, month - 1, day);
    date.setFullYear(year);
    if (!isDateDisabled({ date, minDate, maxDate, disabledDates })) {
      return date;
    } else {
      return null;
    }
  }
};

const buildDateFromState = (dateState: DdMmYyyyDigitParts): Date | null => {
  const day = dateState.dayDigits === "" || isNaN(Number(dateState.dayDigits)) ? null : Number(dateState.dayDigits);
  const month =
    dateState.monthDigits === "" || isNaN(Number(dateState.monthDigits)) ? null : Number(dateState.monthDigits);
  const year = dateState.yearDigits === "" || isNaN(Number(dateState.yearDigits)) ? null : Number(dateState.yearDigits);
  if (day === null || month === null || year === null) {
    return null;
  } else {
    const date = new Date(1, month - 1, day);
    date.setFullYear(year);
    const isValidConstructedDate =
      date.getDate() === day && date.getMonth() + 1 === month && date.getFullYear() === year;
    if (!isValidConstructedDate) {
      return null;
    }
    return date;
  }
};

const useDatePickerInternalValue = (
  value: Date | null,
  minDate?: Date,
  maxDate?: Date,
  disabledDates?: readonly Date[],
) => {
  const [dateState, setDateState] = useState<DdMmYyyyDigitParts>({
    dayDigits: value ? formatNumberToParseSegmentValue(value.getDate(), DateSegmentEnum.DAY) : "",
    monthDigits: value ? formatNumberToParseSegmentValue(value.getMonth() + 1, DateSegmentEnum.MONTH) : "",
    yearDigits: value ? formatNumberToParseSegmentValue(value.getFullYear(), DateSegmentEnum.YEAR) : "",
  });

  const [displayValue, setDisplayValue] = useState<string>(placeholderDisplayValue);

  const internalDate = useMemo(
    () => buildInternalValue(dateState, minDate, maxDate, disabledDates),
    [dateState, minDate, maxDate, disabledDates],
  );

  const updateDateSegment = (segment: DateSegmentEnum, val: string) => {
    setDateState((prev) => {
      const segmentName = segment === DAY ? "day" : segment === MONTH ? "month" : "year";
      const newValues = { ...prev, [`${segmentName}Digits`]: val };
      return newValues;
    });
  };

  const modifyActiveSegmentValue = (segment: DateSegmentEnum, direction: "increase" | "decrease") => {
    const max = DATE_SEGMENT_MAX_VALUE[segment];
    const segmentName = segment === DAY ? "day" : segment === MONTH ? "month" : "year";
    const currentSegmentValue = displayValue.split("/")[DATE_SEGMENTS_ORDER.indexOf(segment)];

    const modifiedValue =
      direction === "increase"
        ? getIncreasedValueWithBounds(Number(currentSegmentValue), max, 1)
        : getDecreasedValueWithBounds(Number(currentSegmentValue), max, 1);
    const formattedModifiedValue = formatNumberToParseSegmentValue(modifiedValue, segment);
    const newPotentialDateState = {
      ...dateState,
      [`${segmentName}Digits`]: formattedModifiedValue,
    } as DdMmYyyyDigitParts;
    const newDate = buildDateFromState(newPotentialDateState);
    if (!newDate) {
      updateDateSegment(segment, formattedModifiedValue);
    } else {
      if (!isDateDisabled({ date: newDate, minDate, maxDate, disabledDates })) {
        setDateState(newPotentialDateState);
      }
    }
  };

  const increaseActiveSegmentValue = (segment: DateSegmentEnum) => {
    modifyActiveSegmentValue(segment, "increase");
  };

  const decreaseActiveSegmentValue = (segment: DateSegmentEnum) => {
    modifyActiveSegmentValue(segment, "decrease");
  };

  const resetActiveSegmentValue = (segment: DateSegmentEnum) => {
    const segmentName = segment === DAY ? "day" : segment === MONTH ? "month" : "year";
    const newDateState = {
      ...dateState,
      [`${segmentName}Digits`]: "",
    } as DdMmYyyyDigitParts;
    setDateState(newDateState);
  };

  const updateFullDate = (date: Date | null) => {
    if (date) {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const nextDateState = {
        dayDigits: formatNumberToParseSegmentValue(day, DateSegmentEnum.DAY),
        monthDigits: formatNumberToParseSegmentValue(month, DateSegmentEnum.MONTH),
        yearDigits: formatNumberToParseSegmentValue(year, DateSegmentEnum.YEAR),
      } as DdMmYyyyDigitParts;

      setDateState((prev) => {
        const isSameDateState =
          prev.dayDigits === nextDateState.dayDigits &&
          prev.monthDigits === nextDateState.monthDigits &&
          prev.yearDigits === nextDateState.yearDigits;

        return isSameDateState ? prev : nextDateState;
      });
    } else {
      setDateState((prev) => {
        const isAlreadyEmpty = prev.dayDigits === "" && prev.monthDigits === "" && prev.yearDigits === "";
        if (isAlreadyEmpty) {
          return prev;
        }
        return {
          dayDigits: "",
          monthDigits: "",
          yearDigits: "",
        };
      });
    }
  };

  const updateDisplayedDate = (date: Date | null) => {
    if (date) {
      const state = {
        dayDigits: formatNumberToParseSegmentValue(date.getDate(), DateSegmentEnum.DAY),
        monthDigits: formatNumberToParseSegmentValue(date.getMonth() + 1, DateSegmentEnum.MONTH),
        yearDigits: formatNumberToParseSegmentValue(date.getFullYear(), DateSegmentEnum.YEAR),
      } as DdMmYyyyDigitParts;

      setDisplayValue(buildDisplayValue(state));
    } else {
      setDisplayValue(placeholderDisplayValue);
    }
  };

  useEffect(() => {
    const newDisplayValue = buildDisplayValue(dateState);
    setDisplayValue(newDisplayValue);
  }, [dateState]);

  return {
    dateState,
    internalValue: internalDate,
    increaseActiveSegmentValue,
    decreaseActiveSegmentValue,
    resetActiveSegmentValue,
    updateDateSegment,
    updateFullDate,
    displayValue,
    updateDisplayedDate,
  };
};

export default useDatePickerInternalValue;
