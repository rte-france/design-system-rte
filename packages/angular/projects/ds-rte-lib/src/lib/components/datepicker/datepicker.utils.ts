import {
  addDays,
  DatepickerDayCell,
  DatepickerDayCellType,
  DatepickerMonthCell,
  DatepickerYearCell,
  isAfterDay,
  isBeforeDay,
  isSameDay,
  startOfDay,
  startOfMonth,
} from "@design-system-rte/core";
import { getMondayBasedWeekdayIndex, isSameMonth } from "@design-system-rte/core/components/datepicker";

function getTodayStart(): Date {
  return startOfDay(new Date());
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
  const monday = new Date(2021, 0, 4);
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

  const firstMonthDay = startOfMonth(viewDate);
  const leadingDaysFromPreviousMonth = getMondayBasedWeekdayIndex(firstMonthDay);
  const gridStart = addDays(firstMonthDay, -leadingDaysFromPreviousMonth);

  const today = getTodayStart();

  return Array.from({ length: 42 }).map((_, index) => {
    const cellDate = addDays(gridStart, index);
    const isCurrentMonth = isSameMonth(cellDate, viewDate);
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
  const selectedMonthDate = selectedDate ? startOfMonth(selectedDate) : null;
  const currentMonthDate = startOfMonth(new Date());

  return Array.from({ length: 12 }).map((_, monthIndex) => {
    const cellDate = new Date(viewDate.getFullYear(), monthIndex, 1);
    return {
      monthIndex,
      label: new Intl.DateTimeFormat(locale, { month: "long" }).format(cellDate),
      isDisabled: isDateDisabled({ date: cellDate, minDate, maxDate, disabledDate }),
      isCurrent: cellDate.getTime() === currentMonthDate.getTime(),
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
  const currentYear = getTodayStart().getFullYear();
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
