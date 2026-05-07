import { DatepickerDayCell } from "../datepicker";
import { DaterangepickerDayCell } from "../daterangepicker";

export function getMondayBasedWeekdayIndex(date: Date): number {
  return (date.getDay() + 6) % 7;
}

export function isSameMonth(first: Date, second: Date): boolean {
  return first.getFullYear() === second.getFullYear() && first.getMonth() === second.getMonth();
}

export function getDayCellIndexForDate(dayCells: DaterangepickerDayCell[] | DatepickerDayCell[], date: Date): number {
  return dayCells.findIndex((cell) => isSameDay(cell.date, date));
}

export function isSameDay(first: Date, second: Date): boolean {
  return (
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate()
  );
}
