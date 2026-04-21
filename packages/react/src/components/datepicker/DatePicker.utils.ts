import { DATE_SEGMENT_MIN_VALUE, DATE_SEGMENTS_ORDER, DateSegmentEnum } from "@design-system-rte/core";

export const getNextSegment = (seg: DateSegmentEnum): DateSegmentEnum =>
  DATE_SEGMENTS_ORDER[Math.min(DATE_SEGMENTS_ORDER.indexOf(seg) + 1, 2)];
export const getPrevSegment = (seg: DateSegmentEnum): DateSegmentEnum =>
  DATE_SEGMENTS_ORDER[Math.max(DATE_SEGMENTS_ORDER.indexOf(seg) - 1, 0)];

export const getIncreasedValueWithBounds = (current: number, max: number, increment: number): number => {
  const normalizedCurrent = isNaN(current) ? DATE_SEGMENT_MIN_VALUE : current;

  const temp = normalizedCurrent + increment;
  const normalizedTemp = temp > max ? DATE_SEGMENT_MIN_VALUE : temp;

  return normalizedTemp;
};

export const getDecreasedValueWithBounds = (current: number, max: number, decrement: number): number => {
  const normalizedCurrent = isNaN(current) ? DATE_SEGMENT_MIN_VALUE : current;
  const temp = normalizedCurrent - decrement;

  if (temp < DATE_SEGMENT_MIN_VALUE) {
    return max;
  } else {
    return temp;
  }
};

export const formatNumberToParseSegmentValue = (value: number, segment?: DateSegmentEnum): string => {
  if (segment === DateSegmentEnum.YEAR) {
    return value.toString().padStart(4, "0");
  } else {
    return value.toString().padStart(2, "0");
  }
};

export const computeDateSegmentRanges = (): Record<DateSegmentEnum, [number, number]> => {
  const dayValueLength = 2;
  const dividerLength = 3;
  const monthValueStartIndex = dayValueLength + dividerLength;
  const monthValueLength = 2;
  const yearValueStartIndex = monthValueStartIndex + monthValueLength + dividerLength;
  const yearValueLength = 4;

  return {
    [DateSegmentEnum.DAY]: [0, dayValueLength],
    [DateSegmentEnum.MONTH]: [monthValueStartIndex, monthValueStartIndex + monthValueLength],
    [DateSegmentEnum.YEAR]: [yearValueStartIndex, yearValueStartIndex + yearValueLength],
  };
};
