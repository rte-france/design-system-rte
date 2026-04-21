import {
  DATE_SEGMENT_MAX_VALUE,
  DATE_SEGMENTS_ORDER,
  DateSegmentEnum,
  DdMmYyyyDigitParts,
} from "@design-system-rte/core";
import { useEffect, useState } from "react";

import {
  formatNumberToParseSegmentValue,
  getDecreasedValueWithBounds,
  getIncreasedValueWithBounds,
} from "../DatePicker.utils";

const [DAY, MONTH] = DATE_SEGMENTS_ORDER;

const useDatePickerInternalValue = (value: Date | null) => {
  const [dateState, setDateState] = useState<DdMmYyyyDigitParts>({
    dayDigits: "",
    monthDigits: "",
    yearDigits: "",
  });

  const [displayValue, setDisplayValue] = useState<string>("");

  const [internalValue, setInternalValue] = useState<Date | null>(value || null);

  useEffect(() => {
    const newDisplayValue = buildDisplayValue(dateState);
    setDisplayValue(newDisplayValue);

    const date = new Date();
    const day = dateState.dayDigits === "" || isNaN(Number(dateState.dayDigits)) ? null : Number(dateState.dayDigits);
    const month =
      dateState.monthDigits === "" || isNaN(Number(dateState.monthDigits)) ? null : Number(dateState.monthDigits);
    const year =
      dateState.yearDigits === "" || isNaN(Number(dateState.yearDigits)) ? null : Number(dateState.yearDigits);
    console.log(isNaN(Number(dateState.dayDigits)));
    console.log(day, month, year);

    if (day === null || month === null || year === null) {
      setInternalValue(null);
    } else {
      date.setDate(day);
      date.setMonth(month - 1);
      date.setFullYear(year);

      setInternalValue(date);
    }
  }, [dateState]);

  const buildDisplayValue = (dateState: DdMmYyyyDigitParts): string => {
    const day = dateState.dayDigits || "DD";
    const month = dateState.monthDigits || "MM";
    const year = dateState.yearDigits || "YYYY";

    return `${day} / ${month} / ${year}`;
  };

  const updateDateSegment = (segment: DateSegmentEnum, val: string) => {
    setDateState((prev) => {
      console.log({ segment, val });
      const segmentName = segment === DAY ? "day" : segment === MONTH ? "month" : "year";
      const newValues = { ...prev, [`${segmentName}Digits`]: val };
      return newValues;
    });
  };

  const increaseActiveSegmentValue = (segment: DateSegmentEnum) => {
    const max = DATE_SEGMENT_MAX_VALUE[segment];
    const currentSegmentValue = displayValue.split("/")[DATE_SEGMENTS_ORDER.indexOf(segment)];
    if (isNaN(Number(currentSegmentValue))) {
      const segmentName = segment === DAY ? "day" : segment === MONTH ? "month" : "year";
      const newDateState = {
        ...dateState,
        [`${segmentName}Digits`]: formatNumberToParseSegmentValue(1, segment),
      } as DdMmYyyyDigitParts;
      setDateState(newDateState);
    } else {
      const increasedValue = getIncreasedValueWithBounds(Number(currentSegmentValue), max, 1);
      const segmentName = segment === DAY ? "day" : segment === MONTH ? "month" : "year";
      const newDateState = {
        ...dateState,
        [`${segmentName}Digits`]: formatNumberToParseSegmentValue(increasedValue, segment),
      } as DdMmYyyyDigitParts;
      setDateState(newDateState);
    }
  };

  const decreaseActiveSegmentValue = (segment: DateSegmentEnum) => {
    const max = DATE_SEGMENT_MAX_VALUE[segment];
    const currentSegmentValue = displayValue.split("/")[DATE_SEGMENTS_ORDER.indexOf(segment)];
    if (isNaN(Number(currentSegmentValue))) {
      const segmentName = segment === DAY ? "day" : segment === MONTH ? "month" : "year";
      const newDateState = {
        ...dateState,
        [`${segmentName}Digits`]: formatNumberToParseSegmentValue(max, segment),
      } as DdMmYyyyDigitParts;
      setDateState(newDateState);
    } else {
      const decreasedValue = getDecreasedValueWithBounds(Number(currentSegmentValue), max, 1);
      const segmentName = segment === DAY ? "day" : segment === MONTH ? "month" : "year";
      const newDateState = {
        ...dateState,
        [`${segmentName}Digits`]: formatNumberToParseSegmentValue(decreasedValue, segment),
      } as DdMmYyyyDigitParts;
      setDateState(newDateState);
    }
  };

  const resetActiveSegmentValue = (segment: DateSegmentEnum) => {
    const segmentName = segment === DAY ? "day" : segment === MONTH ? "month" : "year";
    const newDateState = {
      ...dateState,
      [`${segmentName}Digits`]: "",
    } as DdMmYyyyDigitParts;
    setDateState(newDateState);
  };

  return {
    dateState,
    internalValue,
    increaseActiveSegmentValue,
    decreaseActiveSegmentValue,
    resetActiveSegmentValue,
    updateDateSegment,
    displayValue,
  };
};

export default useDatePickerInternalValue;
