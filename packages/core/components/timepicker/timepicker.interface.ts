import type { BaseInput } from "../base-input/base-input.interface";

export interface TimeFormat {
  hh: string;
  mm: string;
  ss: string;
}

export enum TimeSegmentEnum {
  HOURS = "hh",
  MINUTES = "mm",
  SECONDS = "ss",
}

export interface TimePickerProps extends BaseInput {
  id: string;
  labelId?: string;
  label: string;
  value?: TimeFormat;
  onChange?: (value: TimeFormat) => void;
  showLabel?: boolean;
  showLabelRequirement?: boolean;
  isHourReadOnly?: boolean;
  isMinuteReadOnly?: boolean;
  isSecondReadOnly?: boolean;
  hourIncrement?: number;
  minuteIncrement?: number;
  secondIncrement?: number;
}
