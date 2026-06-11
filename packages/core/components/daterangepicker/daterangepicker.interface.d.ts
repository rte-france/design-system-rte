import type { InputProps } from "../common/input/input.interface";

import { START_INPUT, END_INPUT } from "./daterangepicker.utils";

export type DaterangepickerDayCellType = "default" | "today" | "selected" | "prev/next" | "empty" | "in-range";

export interface DaterangepickerDayCell {
  readonly date: Date;
  readonly label: string;
  readonly cellType: DaterangepickerDayCellType;
  readonly isDisabled: boolean;
  readonly isInRange: boolean;
}

export type DateRangeInputType = typeof START_INPUT | typeof END_INPUT;

export type DateRangePickerValue = [Date | null, Date | null] | null;

export interface DateRangePickerProps extends InputProps<DateRangePickerValue> {
  id: string;
  value: DateRangePickerValue;
  onChange?: (value: DateRangePickerValue) => void;
  hasAction?: boolean;
  onValidate?: () => void;
  onCancel?: () => void;
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: Date[];
  width?: string;
}
