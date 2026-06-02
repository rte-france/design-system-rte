import type { BaseInputProps } from "../common/input/input.interface";

export interface TimeFormat {
  hh: string;
  mm: string;
  ss: string;
}

export interface TimePickerProps extends BaseInputProps<TimeFormat> {
  label: string;
  isHourReadOnly?: boolean;
  isMinuteReadOnly?: boolean;
  isSecondReadOnly?: boolean;
  hourIncrement?: number;
  minuteIncrement?: number;
  secondIncrement?: number;
}
