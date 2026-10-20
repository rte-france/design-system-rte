import { TIME_SEGMENT_MIN_VALUE, TIME_SEGMENT_ORDER, TimeSegmentEnum } from "./timepicker.constants";
import type { TimeFormat } from "./timepicker.interface";

type TimepickerUtilsConfig = {
  vals: Record<TimeSegmentEnum, string>;
  activeSegment: TimeSegmentEnum;
  displaySeconds: boolean;
};

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

export const canSwitchToNextSegment = ({
  vals,
  activeSegment,
  displaySeconds = false,
}: TimepickerUtilsConfig): boolean => {
  if (activeSegment === TimeSegmentEnum.HOURS) {
    return !!vals[TimeSegmentEnum.MINUTES];
  }
  if (activeSegment === TimeSegmentEnum.MINUTES) {
    return !!vals[TimeSegmentEnum.SECONDS] && displaySeconds;
  }
  return true;
};

export const buildDisplayValue = ({ vals, activeSegment, displaySeconds = false }: TimepickerUtilsConfig): string => {
  const hourValue = vals[TimeSegmentEnum.HOURS];
  const minuteValue = vals[TimeSegmentEnum.MINUTES];
  const secondValue = vals[TimeSegmentEnum.SECONDS];
  let result = hourValue;

  if (hourValue === "" && minuteValue === "" && (!displaySeconds || secondValue === "")) {
    return "";
  }

  if (activeSegment !== TimeSegmentEnum.HOURS || minuteValue) {
    result += " : " + minuteValue;
  }
  if (displaySeconds && (activeSegment === TimeSegmentEnum.SECONDS || secondValue)) {
    result += " : " + secondValue;
  }
  return result;
};
