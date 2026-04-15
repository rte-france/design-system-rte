import { TimeFormat, TimeSegmentEnum } from "./timepicker.interface";

export const TIME_SEGMENT_MIN_VALUE = 0;

export const HOURS = "hh";
export const MINUTES = "mm";
export const SECONDS = "ss";

export const DEFAULT_TIME_INPUT_VALUE: TimeFormat = {
  hh: "",
  mm: "",
  ss: "",
};

export const DEFAULT_TIME_PICKER_VALUE: TimeFormat = {
  hh: "00",
  mm: "00",
  ss: "00",
};

export const TIME_SEGMENT_ORDER: TimeSegmentEnum[] = [
  TimeSegmentEnum.HOURS,
  TimeSegmentEnum.MINUTES,
  TimeSegmentEnum.SECONDS,
];

export const TIME_SEGMENT_MAX_VALUE: Record<TimeSegmentEnum, number> = {
  [TimeSegmentEnum.HOURS]: 23,
  [TimeSegmentEnum.MINUTES]: 59,
  [TimeSegmentEnum.SECONDS]: 59,
};

export const TIME_SEGMENT_MAX_FIRST_DIGIT: Record<TimeSegmentEnum, number> = {
  [TimeSegmentEnum.HOURS]: 2,
  [TimeSegmentEnum.MINUTES]: 5,
  [TimeSegmentEnum.SECONDS]: 5,
};
