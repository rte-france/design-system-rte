import { TIME_SEGMENT_MIN_VALUE, TIME_SEGMENT_ORDER } from "./timepicker.constants";
import { TimeFormat, TimeSegmentEnum } from "./timepicker.interface.d";

export const getIncreasedValueWithBounds = (current: number, max: number, increment: number): string => {
  if (current !== undefined && current !== null) {
    const temp = current + increment;
    if (temp >= max) {
      return formatNumberToDigitValue(TIME_SEGMENT_MIN_VALUE);
    } else {
      return formatNumberToDigitValue(temp);
    }
  } else {
    return formatNumberToDigitValue(TIME_SEGMENT_MIN_VALUE);
  }
};

export const getDecreasedValueWithBounds = (current: number, max: number, decrement: number): string => {
  if (current !== undefined && current !== null) {
    const temp = current - decrement;
    if (temp < 0) {
      return formatNumberToDigitValue(max - decrement);
    } else {
      return formatNumberToDigitValue(temp);
    }
  } else {
    return formatNumberToDigitValue(max - decrement);
  }
};

export const formatNumberToDigitValue = (value: number): string => {
  return value.toString().padStart(2, "0");
};

export const computeTimeSegmentRanges = (vals: TimeFormat): Record<TimeSegmentEnum, [number, number]> => {
  const hourValueLength = vals[TimeSegmentEnum.HOURS].toString().length;
  const minuteValueStartIndex = hourValueLength + 1;
  const minuteValueLength = vals[TimeSegmentEnum.MINUTES].toString().length;
  const secondValueStartIndex = minuteValueStartIndex + minuteValueLength + 1;

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
    result += ":" + vals[TimeSegmentEnum.MINUTES];
  }
  if (activeSegment === TimeSegmentEnum.SECONDS || vals[TimeSegmentEnum.SECONDS]) {
    result += ":" + vals[TimeSegmentEnum.SECONDS];
  }
  return result;
};
