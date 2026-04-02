export type DatepickerCalendarType = "day" | "month" | "year";

export type DatepickerDayNavAction = "prevYear" | "prevMonth" | "nextMonth" | "nextYear";

export type DatepickerCompactNavStep = "previous" | "next";

export type DatepickerDayCellType = "default" | "today" | "selected" | "prev/next" | "empty";

export interface DatepickerDayCell {
  readonly date: Date;
  readonly label: string;
  readonly cellType: DatepickerDayCellType;
  readonly isDisabled: boolean;
}

export interface DatepickerMonthCell {
  readonly monthIndex: number;
  readonly label: string;
  readonly isDisabled: boolean;
  readonly isCurrent: boolean;
  readonly isSelected: boolean;
}

export interface DatepickerYearCell {
  readonly year: number;
  readonly label: string;
  readonly isDisabled: boolean;
  readonly isCurrent: boolean;
  readonly isSelected: boolean;
}

export interface NavigateViewDateParams {
  viewDate: Date;
  calendarType: DatepickerCalendarType;
  dayAction?: DatepickerDayNavAction;
  compactStep?: DatepickerCompactNavStep;
}
