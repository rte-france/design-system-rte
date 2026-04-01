export type DatepickerCalendarType = "day" | "month" | "year";

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

export function maskDateInput(value: string): string {
  const digitsOnly = value.replace(/\D/g, "").slice(0, 8);
  const day = digitsOnly.slice(0, 2);
  const month = digitsOnly.slice(2, 4);
  const year = digitsOnly.slice(4, 8);

  if (digitsOnly.length <= 2) {
    return day;
  }
  if (digitsOnly.length <= 4) {
    return `${day}/${month}`;
  }
  return `${day}/${month}/${year}`;
}

export function formathDate(date: Date): string {
  const day = `${date.getDate()}`.padStart(2, "0");
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const year = `${date.getFullYear()}`.padStart(4, "0");
  return `${day}/${month}/${year}`;
}

export function parseDate(value: string): Date | null {
  const trimmedValue = value.trim();
  if (trimmedValue.length === 0) {
    return null;
  }

  const match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(trimmedValue);
  if (!match) {
    return null;
  }

  const day = Number(match[1]);
  const month = Number(match[2]);
  const year = Number(match[3]);

  if (month < 1 || month > 12) {
    return null;
  }

  const date = new Date(year, month - 1, day);
  const isSame =
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day &&
    !Number.isNaN(date.valueOf());
  return isSame ? date : null;
}

export function isSameDay(first: Date, second: Date): boolean {
  return (
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate()
  );
}

export function isBeforeDay(first: Date, second: Date): boolean {
  return startOfDay(first).valueOf() < startOfDay(second).valueOf();
}

export function isAfterDay(first: Date, second: Date): boolean {
  return startOfDay(first).valueOf() > startOfDay(second).valueOf();
}

export function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function addDays(date: Date, amount: number): Date {
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + amount);
  return nextDate;
}

export function addMonths(date: Date, amount: number): Date {
  return new Date(date.getFullYear(), date.getMonth() + amount, 1);
}

export function isDateDisabled(params: {
  date: Date;
  minDate?: Date;
  maxDate?: Date;
  disabledDate?: (date: Date) => boolean;
}): boolean {
  const { date, minDate, maxDate, disabledDate } = params;
  const currentDay = startOfDay(date);
  if (minDate && isBeforeDay(currentDay, minDate)) {
    return true;
  }
  if (maxDate && isAfterDay(currentDay, maxDate)) {
    return true;
  }
  return disabledDate ? disabledDate(currentDay) : false;
}

export function getMonthLabel(date: Date, locale: string = "fr-FR"): string {
  return new Intl.DateTimeFormat(locale, { month: "long", year: "numeric" }).format(date);
}

export function getWeekdayShortLabels(locale: string = "fr-FR"): string[] {
  const monday = new Date(2021, 0, 4); // Monday
  return Array.from({ length: 7 }).map((_, index) => {
    const day = addDays(monday, index);
    const label = new Intl.DateTimeFormat(locale, { weekday: "short" }).format(day);
    return label.charAt(0).toUpperCase() + label.slice(1);
  });
}

export function buildDayGrid(params: {
  viewDate: Date;
  selectedDate: Date | null;
  minDate?: Date;
  maxDate?: Date;
  disabledDate?: (date: Date) => boolean;
}): DatepickerDayCell[] {
  const { viewDate, selectedDate, minDate, maxDate, disabledDate } = params;

  const firstOfMonth = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1);
  const firstDayOfWeek = (firstOfMonth.getDay() + 6) % 7; // Monday=0 ... Sunday=6
  const gridStart = addDays(firstOfMonth, -firstDayOfWeek);

  const today = startOfDay(new Date());

  return Array.from({ length: 42 }).map((_, index) => {
    const cellDate = addDays(gridStart, index);
    const isCurrentMonth = cellDate.getMonth() === viewDate.getMonth();
    const isSelected = !!selectedDate && isSameDay(cellDate, selectedDate);
    const isToday = isSameDay(cellDate, today);
    let cellType: DatepickerDayCellType = "default";
    if (!isCurrentMonth) {
      cellType = "prev/next";
    } else if (isSelected) {
      cellType = "selected";
    } else if (isToday) {
      cellType = "today";
    }

    return {
      date: cellDate,
      label: `${cellDate.getDate()}`,
      cellType,
      isDisabled: isDateDisabled({ date: cellDate, minDate, maxDate, disabledDate }),
    };
  });
}

export function buildMonthGrid(params: {
  viewDate: Date;
  selectedDate: Date | null;
  minDate?: Date;
  maxDate?: Date;
  disabledDate?: (date: Date) => boolean;
  locale?: string;
}): DatepickerMonthCell[] {
  const { viewDate, selectedDate, minDate, maxDate, disabledDate, locale = "fr-FR" } = params;
  const selectedMonthDate = selectedDate ? new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1) : null;
  const nowMonthDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1);

  return Array.from({ length: 12 }).map((_, monthIndex) => {
    const cellDate = new Date(viewDate.getFullYear(), monthIndex, 1);
    return {
      monthIndex,
      label: new Intl.DateTimeFormat(locale, { month: "long" }).format(cellDate),
      isDisabled: isDateDisabled({ date: cellDate, minDate, maxDate, disabledDate }),
      isCurrent: cellDate.getTime() === nowMonthDate.getTime(),
      isSelected: !!selectedMonthDate && cellDate.getTime() === selectedMonthDate.getTime(),
    };
  });
}

export function buildYearGrid(params: {
  viewDate: Date;
  selectedDate: Date | null;
  minDate?: Date;
  maxDate?: Date;
  disabledDate?: (date: Date) => boolean;
}): DatepickerYearCell[] {
  const { viewDate, selectedDate, minDate, maxDate, disabledDate } = params;
  const currentYear = new Date().getFullYear();
  const selectedYear = selectedDate?.getFullYear() ?? null;
  const startYear = viewDate.getFullYear() - 7;

  return Array.from({ length: 16 }).map((_, index) => {
    const year = startYear + index;
    const cellDate = new Date(year, 0, 1);
    return {
      year,
      label: `${year}`,
      isDisabled: isDateDisabled({ date: cellDate, minDate, maxDate, disabledDate }),
      isCurrent: year === currentYear,
      isSelected: selectedYear === year,
    };
  });
}
