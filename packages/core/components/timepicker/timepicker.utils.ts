import { TIME_SEGMENT_MIN_VALUE, TIME_SEGMENT_ORDER } from "./timepicker.constants";
import { TimeFormat, TimeSegmentEnum } from "./timepicker.interface";

export const getIncreasedValueWithBounds = (current: number, max: number, increment: number): string => {
  const normalizedCurrent = isNaN(current) ? TIME_SEGMENT_MIN_VALUE : current;

  const temp = normalizedCurrent + increment;
  const normalizedTemp = temp > max ? TIME_SEGMENT_MIN_VALUE : temp;

  return formatNumberToDigitValue(normalizedTemp);
};

export const getDecreasedValueWithBounds = (current: number, max: number, decrement: number): string => {
  const normalizedCurrent = isNaN(current) ? TIME_SEGMENT_MIN_VALUE : current;
  const temp = normalizedCurrent - decrement;

  if (temp < 0) {
    return formatNumberToDigitValue(max);
  } else {
    return formatNumberToDigitValue(temp);
  }
};

export const formatNumberToDigitValue = (value: number): string => {
  return value.toString().padStart(2, "0");
};

export const computeTimeSegmentRanges = (vals: TimeFormat): Record<TimeSegmentEnum, [number, number]> => {
  const hourValueLength = vals[TimeSegmentEnum.HOURS].toString().length;
  const dividerLength = 3;
  const minuteValueStartIndex = hourValueLength + dividerLength;
  const minuteValueLength = vals[TimeSegmentEnum.MINUTES].toString().length;
  const secondValueStartIndex = minuteValueStartIndex + minuteValueLength + dividerLength;

  return {
    [TimeSegmentEnum.HOURS]: [0, hourValueLength],
    [TimeSegmentEnum.MINUTES]: [minuteValueStartIndex, minuteValueStartIndex + minuteValueLength],
    [TimeSegmentEnum.SECONDS]: [
      secondValueStartIndex,
      secondValueStartIndex + vals[TimeSegmentEnum.SECONDS].toString().length,
    ],
  };
};

export const getNextSegment = (seg: TimeSegmentEnum): TimeSegmentEnum =>
  TIME_SEGMENT_ORDER[Math.min(TIME_SEGMENT_ORDER.indexOf(seg) + 1, 2)];
export const getPrevSegment = (seg: TimeSegmentEnum): TimeSegmentEnum =>
  TIME_SEGMENT_ORDER[Math.max(TIME_SEGMENT_ORDER.indexOf(seg) - 1, 0)];

export const canSwitchToNextSegment = (vals: Record<TimeSegmentEnum, string>, seg: TimeSegmentEnum): boolean => {
  if (seg === TimeSegmentEnum.HOURS) {
    return !!vals[TimeSegmentEnum.MINUTES];
  }
  if (seg === TimeSegmentEnum.MINUTES) {
    return !!vals[TimeSegmentEnum.SECONDS];
  }
  return true;
};

export const buildDisplayValue = (vals: Record<TimeSegmentEnum, string>, activeSegment: TimeSegmentEnum): string => {
  let result = vals[TimeSegmentEnum.HOURS];
  if (activeSegment !== TimeSegmentEnum.HOURS || vals[TimeSegmentEnum.MINUTES]) {
    result += " : " + vals[TimeSegmentEnum.MINUTES];
  }
  if (activeSegment === TimeSegmentEnum.SECONDS || vals[TimeSegmentEnum.SECONDS]) {
    result += " : " + vals[TimeSegmentEnum.SECONDS];
  }
  return result;
};
