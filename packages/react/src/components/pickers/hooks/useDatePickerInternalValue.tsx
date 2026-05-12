import {
  DATE_SEGMENT_MAX_VALUE,
  DATE_SEGMENTS_ORDER,
  DatepickerDisabledConstraints,
  DateSegmentEnum,
  DdMmYyyyDigitParts,
  getLastDayOfMonth,
  isDateDisabled,
  normalizeDate,
} from "@design-system-rte/core";
import { useEffect, useMemo, useState } from "react";

import {
  formatNumberToParseSegmentValue,
  getDecreasedValueWithBounds,
  getIncreasedValueWithBounds,
} from "../picker.utils";

const [DAY, MONTH, YEAR] = DATE_SEGMENTS_ORDER;

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
    const date = new Date();
    date.setFullYear(year, month - 1, day);
    const isValidConstructedDate =
      date.getDate() === day && date.getMonth() + 1 === month && date.getFullYear() === year;

    if (!isValidConstructedDate) {
      return null;
    }
    if (!isDateDisabled({ date, minDate, maxDate, disabledDates })) {
      return normalizeDate(date);
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
    const date = new Date();
    date.setFullYear(year, month - 1, day);
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
  { minDate, maxDate, disabledDates }: DatepickerDisabledConstraints,
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
    const max = getMaxDayForSegment(segment);
    const segmentName = segment === DAY ? "day" : segment === MONTH ? "month" : "year";
    const initialValue = getInitialSegmentValue(segment);
    const modifiedValue =
      direction === "increase"
        ? getIncreasedValueWithBounds(initialValue, max)
        : getDecreasedValueWithBounds(initialValue, max);
    const formattedModifiedValue = formatNumberToParseSegmentValue(modifiedValue, segment);

    const newPotentialDateState = {
      ...dateState,
      [`${segmentName}Digits`]: formattedModifiedValue,
    } as DdMmYyyyDigitParts;
    const newPotentialDate = buildDateFromState(newPotentialDateState);
    if (!newPotentialDate) {
      updateDateSegment(segment, formattedModifiedValue);
      setDisplayValue(buildDisplayValue(newPotentialDateState));
    } else {
      if (!isDateDisabled({ date: newPotentialDate, minDate, maxDate, disabledDates })) {
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

  const getMaxDayForSegment = (segment: DateSegmentEnum): number => {
    if (segment === YEAR) {
      return DATE_SEGMENT_MAX_VALUE[DateSegmentEnum.YEAR];
    } else {
      const yearNum = Number.parseInt(dateState.yearDigits, 10);
      const monthNum = Number.parseInt(dateState.monthDigits, 10);
      const lastDayOfMonth = getLastDayOfMonth(yearNum, monthNum - 1);

      if (!Number.isNaN(monthNum) && monthNum >= 1 && monthNum <= 12 && !Number.isNaN(yearNum)) {
        return Math.max(1, Math.min(lastDayOfMonth, DATE_SEGMENT_MAX_VALUE[segment]));
      }
    }
    return 31;
  };

  const getInitialSegmentValue = (segment: DateSegmentEnum): number => {
    const currentSegmentValue = displayValue.split("/")[DATE_SEGMENTS_ORDER.indexOf(segment)];
    if (segment === YEAR && dateState.yearDigits.length === 0) {
      return new Date().getFullYear();
    } else {
      return Number(currentSegmentValue);
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
