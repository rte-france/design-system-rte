export type DaterangepickerDayCellType = "default" | "today" | "selected" | "prev/next" | "empty" | "in-range";

export interface DaterangepickerDayCell {
  readonly date: Date;
  readonly label: string;
  readonly cellType: DaterangepickerDayCellType;
  readonly isDisabled: boolean;
  readonly isInRange: boolean;
}
