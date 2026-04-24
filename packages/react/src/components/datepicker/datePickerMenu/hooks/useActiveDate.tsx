import {
  DatepickerCalendarType,
  DatepickerCompactNavStep,
  DatepickerDayNavAction,
  navigateViewDate,
} from "@design-system-rte/core";
import { useState } from "react";

const useActiveDate = (currentValue: Date | null) => {
  const [viewDate, setViewDate] = useState<Date>(currentValue ?? new Date());

  const getNextDateForDayNavigation = (action: DatepickerDayNavAction) => {
    const nextDate = navigateViewDate({
      viewDate,
      calendarType: "day",
      dayAction: action,
    });
    setViewDate(nextDate);
    return nextDate;
  };

  const getNextDateForCompactNavigation = (
    step: DatepickerCompactNavStep,
    calendarType: DatepickerCalendarType,
  ): Date => {
    const nextDate = navigateViewDate({
      viewDate,
      calendarType,
      compactStep: step,
    });
    setViewDate(nextDate);
    return nextDate;
  };

  const navigateToPreviousMonth = () => {
    const newViewDate = navigateViewDate({
      viewDate,
      calendarType: "day",
      dayAction: "prevMonth",
    });
    setViewDate(newViewDate);
    return newViewDate;
  };

  const navigateToNextMonth = () => {
    const newViewDate = navigateViewDate({
      viewDate,
      calendarType: "day",
      dayAction: "nextMonth",
    });
    setViewDate(newViewDate);
    return newViewDate;
  };

  const navigateToPreviousYear = () => {
    const nextDate = navigateViewDate({
      viewDate,
      calendarType: "day",
      dayAction: "prevYear",
    });

    setViewDate(nextDate);
    return nextDate;
  };

  const navigateToNextYear = () => {
    const nextDate = navigateViewDate({
      viewDate,
      calendarType: "day",
      dayAction: "nextYear",
    });

    setViewDate(nextDate);
    return nextDate;
  };

  const navigateToPreviousDecade = () => {
    const newViewDate = new Date(viewDate);
    newViewDate.setFullYear(viewDate.getFullYear() - 10);
    setViewDate(newViewDate);
  };

  const navigateToNextDecade = () => {
    const newViewDate = new Date(viewDate);
    newViewDate.setFullYear(viewDate.getFullYear() + 10);
    setViewDate(newViewDate);
  };

  return {
    viewDate,
    setViewDate,
    navigateToPreviousMonth,
    navigateToNextMonth,
    navigateToPreviousYear,
    navigateToNextYear,
    navigateToPreviousDecade,
    navigateToNextDecade,
    getNextDateForCompactNavigation,
    getNextDateForDayNavigation,
  };
};

export default useActiveDate;
