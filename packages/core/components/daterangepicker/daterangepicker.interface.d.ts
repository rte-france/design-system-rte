import { InputProps } from "../input";

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

export interface DateRangePickerProps extends Omit<InputProps, "value" | "onChange"> {
  id: string;
  value: [Date | null, Date | null] | null;
  onChange?: (value: [Date | null, Date | null] | null) => void;
  hasAction?: boolean;
  onValidate?: () => void;
  onCancel?: () => void;
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: Date[];
}
