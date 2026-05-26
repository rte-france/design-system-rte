import { addDays, getDayGridCellCountForViewMonth, isDateDisabled, startOfDay, startOfMonth } from "../datepicker";
import { DatepickerDayCellType } from "../datepicker/datepicker.interface";
import { getMondayBasedWeekdayIndex, isSameDay, isSameMonth } from "../pickers";

import { DaterangepickerDayCell } from "./daterangepicker.interface";

export const START_INPUT = "start";
export const END_INPUT = "end";

export function buildDayRangeGrid(params: {
  viewDate: Date;
  selectedDates: [Date | null, Date | null] | null;
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: readonly Date[];
}): DaterangepickerDayCell[] {
  const { viewDate, selectedDates, minDate, maxDate, disabledDates } = params;

  const firstMonthDay = startOfMonth(viewDate);
  const leadingDaysFromPreviousMonth = getMondayBasedWeekdayIndex(firstMonthDay);
  const gridStart = addDays(firstMonthDay, -leadingDaysFromPreviousMonth);
  const cellCount = getDayGridCellCountForViewMonth(viewDate);

  const today = startOfDay(new Date());

  return Array.from({ length: cellCount }).map((_, index) => {
    const cellDate = addDays(gridStart, index);
    const isCurrentMonth = isSameMonth(cellDate, viewDate);

    const isFirstSelectedDate = !!selectedDates?.[0] && isSameDay(cellDate, selectedDates[0]);
    const isSecondSelectedDate = !!selectedDates?.[1] && isSameDay(cellDate, selectedDates[1]);
    const isSelected = isFirstSelectedDate || isSecondSelectedDate;

    const isToday = isSameDay(cellDate, today);

    const inRange = isDateInRange(cellDate, selectedDates);

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
      isDisabled: isDateDisabled({ date: cellDate, minDate, maxDate, disabledDates }),
      isInRange: inRange,
    };
  });
}

function isDateInRange(date: Date, selectedDates: [Date | null, Date | null] | null): boolean {
  if (selectedDates === null) {
    return false;
  }
  const [start, end] = selectedDates;
  if (start === null || end === null) {
    return false;
  }

  const startDate = startOfDay(start);
  const endDate = startOfDay(end);
  const targetDate = startOfDay(date);

  return targetDate >= startDate && targetDate <= endDate;
}
