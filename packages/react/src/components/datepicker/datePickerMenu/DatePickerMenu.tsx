import {
  addDays,
  addMonths,
  ARROW_DOWN_KEY,
  ARROW_LEFT_KEY,
  ARROW_RIGHT_KEY,
  ARROW_UP_KEY,
  buildDayGrid,
  buildMonthGrid,
  buildYearGrid,
  DATEPICKER_TAB_DATA,
  DatepickerCalendarType,
  DatepickerCompactNavStep,
  DatepickerDayNavAction,
  DatepickerDisabledConstraints,
  DateSegmentEnum,
  ENTER_KEY,
  findClosestEnabledDate,
  getDatepickerGridArrowDelta,
  getDayCellIndexForDate,
  getDecadeRangeLabel,
  getMonthLabel,
  getNextGridCellIndex,
  getWeekdayShortLabels,
  getYearLabel,
  isDateDisabled,
  isSameDay,
  normalizeDatepickerMenuSelectionDate,
  resolveDatepickerMenuKeyboardDayNavigation,
  resolveDatepickerMenuKeyboardMonthNavigation,
  resolveDatepickerMenuKeyboardYearNavigation,
  resolveDatepickerMenuOpenState,
  SPACE_KEY,
  startOfDay,
  tryProjectPendingDateToViewMonth,
  waitForNextFrame,
} from "@design-system-rte/core";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { useFocusTrap } from "../../../hooks/useFocusTrap";
import Button from "../../button/Button";
import Divider from "../../divider/Divider";
import IconButton from "../../iconButton/IconButton";
import { concatClassNames } from "../../utils";

import styles from "./DatePickerMenu.module.scss";
import useActiveDate from "./hooks/useActiveDate";

interface DatePickerMenuProps {
  isOpen: boolean;
  currentValue: Date | null;
  updateFullDate: (date: Date | null) => void;
  updateDisplayedDate: (date: Date | null) => void;
  hasAction?: boolean;
  onValidate?: () => void;
  onCancel?: () => void;
  displayValue: string;
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: readonly Date[];
  onChange?: (date: Date | null) => void;
}

const DatePickerMenu = ({
  isOpen,
  currentValue,
  hasAction,
  updateFullDate,
  updateDisplayedDate,
  onValidate,
  onCancel,
  displayValue,
  minDate,
  maxDate,
  disabledDates,
  onChange,
}: DatePickerMenuProps) => {
  const [calendarType, setCalendarType] = useState<DateSegmentEnum>(DateSegmentEnum.DAY);
  const datePickerMenuRef = useRef<HTMLDivElement>(null);
  const [validatedDate, setValidatedDate] = useState<Date | null>(null);
  const [monthNavigationAnchorDay, setMonthNavigationAnchorDay] = useState<number | null>(null);

  useFocusTrap(datePickerMenuRef.current!, isOpen, false);
  const { viewDate, setViewDate, getNextDateForDayNavigation, getNextDateForCompactNavigation } =
    useActiveDate(currentValue);

  const [pendingDate, setPendingDate] = useState<Date | null>(null);
  const [activeDate, setActiveDate] = useState<Date>(currentValue ?? viewDate);
  const [initialDate] = useState<Date | null>(currentValue);

  const pickerConstraints: DatepickerDisabledConstraints = useMemo(
    () => ({
      minDate: minDate,
      maxDate: maxDate,
      disabledDates: disabledDates,
    }),
    [minDate, maxDate, disabledDates],
  );

  const handleNavigateDay = (action: DatepickerDayNavAction) => {
    const newDate = getNextDateForDayNavigation(action);
    syncPendingDateToViewMonthProjection(newDate);
  };

  const handleNavigateCompact = (step: DatepickerCompactNavStep, calendarType: DatepickerCalendarType) => {
    const newDate = getNextDateForCompactNavigation(step, calendarType);
    syncPendingDateToViewMonthProjection(newDate);
  };

  const syncPendingDateToViewMonthProjection = (viewDate: Date): void => {
    const projectedDate = tryProjectPendingDateToViewMonth({
      anchorDay: monthNavigationAnchorDay,
      viewDate,
      constraints: pickerConstraints,
    });
    if (projectedDate === null) {
      return;
    }
    setPendingDate(projectedDate);
    setActiveDate(projectedDate);
    updateDisplayedDate(projectedDate);
  };

  const applyStateWhenMenuOpens = useCallback((): void => {
    const openState = resolveDatepickerMenuOpenState({
      textValue: displayValue.split(" ").join(""),
      constraints: pickerConstraints,
      pendingDate: pendingDate,
      selectedDate: currentValue,
    });

    setViewDate(openState.viewDate);
    setMonthNavigationAnchorDay(openState.monthNavigationAnchorDay);
  }, [displayValue, pendingDate, currentValue, pickerConstraints, setViewDate]);

  const headerTitle = useMemo(() => {
    const currentViewedDate = viewDate ?? currentValue ?? new Date();
    const currentCalendarType = calendarType;

    if (calendarType === DateSegmentEnum.DAY) {
      return getMonthLabel(currentViewedDate);
    } else if (currentCalendarType === DateSegmentEnum.MONTH) {
      return getYearLabel(currentViewedDate);
    } else {
      return getDecadeRangeLabel(currentViewedDate);
    }
  }, [calendarType, viewDate, currentValue]);

  const dayCells = useMemo(() => {
    return buildDayGrid({
      viewDate: viewDate,
      selectedDate: pendingDate ?? currentValue,
      minDate: minDate,
      maxDate: maxDate,
      disabledDates: disabledDates,
    });
  }, [pendingDate, currentValue, viewDate, minDate, maxDate, disabledDates]);

  const monthCells = useMemo(() => {
    return buildMonthGrid({
      viewDate: viewDate,
      selectedDate: pendingDate ?? currentValue,
      minDate: minDate,
      maxDate: maxDate,
      disabledDates: disabledDates,
    });
  }, [pendingDate, currentValue, viewDate, minDate, maxDate, disabledDates]);

  const yearCells = useMemo(() => {
    return buildYearGrid({
      viewDate: viewDate,
      selectedDate: pendingDate ?? currentValue,
      minDate: minDate,
      maxDate: maxDate,
      disabledDates: disabledDates,
    });
  }, [pendingDate, currentValue, viewDate, minDate, maxDate, disabledDates]);

  const handleOnClickHeaderLabel = () => {
    if (calendarType === DateSegmentEnum.DAY) {
      setCalendarType(DateSegmentEnum.MONTH);
      queueFocusActiveMonthCell();
    } else if (calendarType === DateSegmentEnum.MONTH) {
      setCalendarType(DateSegmentEnum.YEAR);
      queueFocusActiveYearCell();
    } else {
      setCalendarType(DateSegmentEnum.DAY);
      queueFocusActiveDayCell();
    }
  };

  const handleOnClickDayCell = (date: Date) => {
    const normalizedDate = normalizeDatepickerMenuSelectionDate({ date, constraints: pickerConstraints });
    if (normalizedDate === null) {
      return;
    }
    if (!hasAction) {
      updateFullDate(normalizedDate);
      setValidatedDate(normalizedDate);
      onChange?.(normalizedDate);
      onValidate?.();
      return;
    } else {
      updateDisplayedDate(normalizedDate);
      setPendingDate(normalizedDate);
      setViewDate(normalizedDate);
      setActiveDate(normalizedDate);
      setMonthNavigationAnchorDay(normalizedDate.getDate());
    }
  };

  const handleOnClickMonthCell = (monthIndex: number) => {
    const newDate = new Date(viewDate.getFullYear(), monthIndex, 1);
    setViewDate(newDate);
    setActiveDate(newDate);
    setCalendarType(DateSegmentEnum.DAY);
    queueFocusActiveDayCell();
  };

  const handleOnClickYearCell = (year: number) => {
    const newDate = new Date(year, viewDate.getMonth(), 1);
    setViewDate(newDate);
    setActiveDate(newDate);
    setCalendarType(DateSegmentEnum.MONTH);
    queueFocusActiveMonthCell();
  };

  const isDayCellSelected = (date: Date): boolean => {
    const selectedDate = pendingDate ?? currentValue;
    return selectedDate !== null && isSameDay(date, selectedDate);
  };

  const handleOnKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      onCancel?.();
      return;
    }

    const mode = calendarType;

    if (mode === DateSegmentEnum.DAY) {
      handleDayGridKeyDown(event);
    } else if (mode === DateSegmentEnum.MONTH) {
      handleMonthGridKeyDown(event);
    } else {
      handleYearGridKeyDown(event);
    }
  };

  const handleDayGridKeyDown = (event: React.KeyboardEvent) => {
    if (!isEventTargetDayGridCell(event.target)) {
      return;
    }
    event.stopPropagation();

    if ([ENTER_KEY, SPACE_KEY].includes(event.key)) {
      event.preventDefault();
      const current = activeDate;
      const dayCell = dayCells.find((cell) => isSameDay(cell.date, current));
      if (dayCell && !dayCell.isDisabled) {
        handleOnClickDayCell(current);
      }
      return;
    }

    const navigationKeys = [ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY];
    if (!navigationKeys.includes(event.key)) {
      return;
    }

    event.preventDefault();
    moveActiveDayByArrowKey(event.key);
  };

  const handleMonthGridKeyDown = (event: React.KeyboardEvent): void => {
    if (!isEventTargetMonthGridCell(event.target)) {
      return;
    }

    event.stopPropagation();

    if ([ENTER_KEY, SPACE_KEY].includes(event.key)) {
      event.preventDefault();
      const monthIndex = activeDate.getMonth();
      const monthCell = monthCells.find((cell) => cell.monthIndex === monthIndex);
      if (monthCell && !monthCell.isDisabled) {
        handleOnClickMonthCell(monthIndex);
      }
      return;
    }

    const navigationKeys = [ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY];
    if (!navigationKeys.includes(event.key)) {
      return;
    }

    event.preventDefault();
    moveActiveMonthByArrowKey(event.key);
  };

  const handleYearGridKeyDown = (event: React.KeyboardEvent): void => {
    if (!isEventTargetYearGridCell(event.target)) {
      return;
    }

    event.stopPropagation();

    if ([ENTER_KEY, SPACE_KEY].includes(event.key)) {
      event.preventDefault();
      const year = activeDate.getFullYear();
      const yearCell = yearCells.find((cell) => cell.year === year);
      if (yearCell && !yearCell.isDisabled) {
        handleOnClickYearCell(year);
      }
      return;
    }

    const navigationKeys = [ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY];
    if (!navigationKeys.includes(event.key)) {
      return;
    }

    event.preventDefault();
    moveActiveYearByArrowKey(event.key);
  };

  const isEventTargetDayGridCell = (target: EventTarget | null): boolean => {
    if (!(target instanceof HTMLElement)) {
      return false;
    }
    return target.matches("button.day-cell") && target.closest(".rte-datepicker-day-grid") !== null;
  };

  const isEventTargetMonthGridCell = (target: EventTarget | null): boolean => {
    if (!(target instanceof HTMLElement)) {
      return false;
    }
    return target.matches("button.month-cell") && target.closest(".rte-datepicker-month-grid") !== null;
  };

  const isEventTargetYearGridCell = (target: EventTarget | null): boolean => {
    if (!(target instanceof HTMLElement)) {
      return false;
    }
    return target.matches("button.year-cell") && target.closest(".rte-datepicker-year-grid") !== null;
  };

  const moveActiveDayByArrowKey = (key: string) => {
    const cells = dayCells;
    const currentIndex = getDayCellIndexForDate(cells, activeDate);
    if (currentIndex < 0) {
      return;
    }

    const delta = getDatepickerGridArrowDelta(key, "day");
    const stride = Math.abs(delta) === 7 ? 7 : 1;
    const direction = delta > 0 ? 1 : -1;

    let nextIndex = currentIndex + delta;
    while (nextIndex >= 0 && nextIndex < cells.length && cells[nextIndex].isDisabled) {
      nextIndex += direction * stride;
    }

    if (nextIndex < 0 || nextIndex >= cells.length) {
      const targetDay = startOfDay(addDays(activeDate, delta));
      if (isDayDisabledInCalendar(targetDay)) {
        return;
      }
      navigateToNewInvisibleTarget(targetDay);
      queueFocusActiveDayCell();
      return;
    }

    const nextActiveDate = cells[nextIndex].date;
    setActiveDate(nextActiveDate);
    queueFocusActiveDayCell();
  };

  const moveActiveMonthByArrowKey = (key: string): void => {
    const cells = monthCells;
    const currentMonthIndex = activeDate.getMonth();
    const currentIndex = cells.findIndex((cell) => cell.monthIndex === currentMonthIndex);
    if (currentIndex < 0) {
      return;
    }

    const deltaMonths = getDatepickerGridArrowDelta(key, "monthYear");
    const targetMonthStart = addMonths(activeDate, deltaMonths);

    if (targetMonthStart.getFullYear() !== viewDate.getFullYear()) {
      navigateToNewInvisibleTarget(targetMonthStart);
      queueFocusActiveMonthCell();
      return;
    }

    const columnCount = 3;
    const cellCount = cells.length;

    let nextIndex = getNextGridCellIndex({
      currentIndex,
      key,
      columnCount,
      cellCount,
    });

    let guard = 0;
    while (nextIndex !== null && cells[nextIndex].isDisabled && guard < cellCount) {
      nextIndex = getNextGridCellIndex({
        currentIndex: nextIndex,
        key,
        columnCount,
        cellCount,
      });
      guard += 1;
    }

    if (nextIndex === null || cells[nextIndex].isDisabled) {
      return;
    }

    const nextMonthIndex = cells[nextIndex].monthIndex;
    setActiveDate(new Date(viewDate.getFullYear(), nextMonthIndex, 1));
    queueFocusActiveMonthCell();
  };

  const moveActiveYearByArrowKey = (key: string): void => {
    const cells = yearCells;
    const currentYear = activeDate.getFullYear();
    const currentIndex = cells.findIndex((cell) => cell.year === currentYear);
    if (currentIndex < 0) {
      return;
    }

    const deltaYears = getDatepickerGridArrowDelta(key, "monthYear");
    const targetYear = currentYear + deltaYears;

    const visibleYears = cells.map((cell) => cell.year);
    if (!visibleYears.includes(targetYear)) {
      navigateToNewInvisibleTarget(new Date(targetYear, 0, 1));
      queueFocusActiveYearCell();
      return;
    }

    const columnCount = 3;
    const cellCount = cells.length;

    let nextIndex = getNextGridCellIndex({
      currentIndex,
      key,
      columnCount,
      cellCount,
    });

    let guard = 0;
    while (nextIndex !== null && cells[nextIndex].isDisabled && guard < cellCount) {
      nextIndex = getNextGridCellIndex({
        currentIndex: nextIndex,
        key,
        columnCount,
        cellCount,
      });
      guard += 1;
    }

    if (nextIndex === null || cells[nextIndex].isDisabled) {
      return;
    }

    const nextYear = cells[nextIndex].year;
    setActiveDate(new Date(nextYear, 0, 1));
    queueFocusActiveYearCell();
  };

  const isDayDisabledInCalendar = (date: Date): boolean => {
    return isDateDisabled({
      date,
      ...pickerConstraints,
    });
  };

  const queueFocusActiveDayCell = (): void => {
    waitForNextFrame(() => {
      const root = datePickerMenuRef.current;
      const button = root?.querySelector(
        '.rte-datepicker-day-grid .day-cell[data-datepicker-active="true"]:not([disabled])',
      ) as HTMLElement | null;
      button?.focus();
    });
  };

  const queueFocusActiveMonthCell = (): void => {
    waitForNextFrame(() => {
      const root = datePickerMenuRef.current;
      const button = root?.querySelector(
        '.rte-datepicker-month-grid .month-cell[data-datepicker-active="true"]:not([disabled])',
      ) as HTMLElement | null;
      button?.focus();
    });
  };

  const queueFocusActiveYearCell = (): void => {
    waitForNextFrame(() => {
      const root = datePickerMenuRef.current;
      const button = root?.querySelector(
        '.rte-datepicker-year-grid .year-cell[data-datepicker-active="true"]:not([disabled])',
      ) as HTMLElement | null;
      button?.focus();
    });
  };

  const handleOnClickValidate = () => {
    onValidate?.();
    const nextValidatedDate = pendingDate ?? currentValue;
    setValidatedDate(nextValidatedDate);
    setPendingDate(null);
    updateFullDate(nextValidatedDate);
  };

  const tabIndexForDayCell = (cellDate: Date, activeDate: Date): number => {
    if (isSameDay(cellDate, activeDate)) {
      return 0;
    } else {
      return -1;
    }
  };

  const tabIndexForMonthCell = (monthIndex: number): number => {
    if (monthIndex === activeDate.getMonth()) {
      return 0;
    } else {
      return -1;
    }
  };

  const tabIndexForYearCell = (year: number): number => {
    if (year === activeDate.getFullYear()) {
      return 0;
    } else {
      return -1;
    }
  };

  const navigateToNewInvisibleTarget = (focusTarget: Date): void => {
    const constraints = pickerConstraints;
    let navigation: { viewDate: Date; menuInitialActiveDate: Date } | null = null;
    if (calendarType === DateSegmentEnum.DAY) {
      navigation = resolveDatepickerMenuKeyboardDayNavigation({
        focusTargetDay: focusTarget,
        constraints,
      });
    } else if (calendarType === DateSegmentEnum.MONTH) {
      navigation = resolveDatepickerMenuKeyboardMonthNavigation({
        focusTargetMonthStart: focusTarget,
        constraints,
      });
    } else {
      navigation = resolveDatepickerMenuKeyboardYearNavigation({
        focusTargetYear: focusTarget.getFullYear(),
        constraints,
      });
    }
    if (navigation === null) {
      return;
    }
    setViewDate(navigation.viewDate);
    setActiveDate(navigation.menuInitialActiveDate);
  };

  useEffect(() => {
    if (isOpen) {
      applyStateWhenMenuOpens();
      queueFocusActiveDayCell();
    } else {
      if (validatedDate) {
        return;
      } else {
        if (initialDate === null) {
          updateFullDate(null);
        } else {
          if (!isDateDisabled({ date: initialDate, ...pickerConstraints })) {
            updateDisplayedDate(initialDate);
          } else {
            const newPotentialDate = findClosestEnabledDate(initialDate, pickerConstraints);
            if (newPotentialDate) {
              updateFullDate(newPotentialDate);
            }
          }
        }
      }
    }
  }, [
    isOpen,
    applyStateWhenMenuOpens,
    currentValue,
    updateDisplayedDate,
    initialDate,
    validatedDate,
    minDate,
    maxDate,
    disabledDates,
    updateFullDate,
    pickerConstraints,
  ]);

  useEffect(() => {
    const synchronizeActiveDateWithDayGrid = () => {
      if (calendarType === DateSegmentEnum.DAY) {
        const cells = dayCells;
        const currentActive = activeDate;
        if (getDayCellIndexForDate(cells, currentActive) >= 0) {
          return;
        }
        const firstEnabled = cells.find((cell) => !cell.isDisabled);
        if (firstEnabled) {
          setActiveDate(firstEnabled.date);
        }
      } else if (calendarType === DateSegmentEnum.MONTH) {
        const cells = monthCells;
        const currentActiveMonth = activeDate.getMonth();
        if (
          cells.some(
            (cell) =>
              cell.monthIndex === currentActiveMonth &&
              !cell.isDisabled &&
              viewDate.getFullYear() === activeDate.getFullYear(),
          )
        ) {
          return;
        }
        const firstEnabled = cells.find((cell) => !cell.isDisabled);
        if (firstEnabled) {
          setActiveDate(new Date(viewDate.getFullYear(), firstEnabled.monthIndex, 1));
        }
      } else {
        const cells = yearCells;
        const currentActiveYear = activeDate.getFullYear();
        if (cells.some((cell) => cell.year === currentActiveYear && !cell.isDisabled)) {
          return;
        }
        const firstEnabled = cells.find((cell) => !cell.isDisabled);
        if (firstEnabled) {
          setActiveDate(new Date(firstEnabled.year, 0, 1));
        }
      }
    };
    synchronizeActiveDateWithDayGrid();
  }, [viewDate, activeDate, calendarType, dayCells, monthCells, yearCells]);

  return (
    <>
      <div
        ref={datePickerMenuRef}
        className={styles["rte-datepicker-dropdown"]}
        role="dialog"
        aria-modal="true"
        aria-label="Choisir une date"
        onKeyDown={handleOnKeyDown}
      >
        <div className={styles["rte-datepicker-dropdown-header"]}>
          <div className={styles["nav-left"]}>
            {calendarType === DateSegmentEnum.DAY ? (
              <>
                <IconButton
                  name="arrow-double-left"
                  variant="neutral"
                  size="s"
                  aria-label="Année précédente"
                  data-datepicker-tab={DATEPICKER_TAB_DATA.navPrevYear}
                  onClick={() => handleNavigateDay("prevYear")}
                />
                <IconButton
                  name="arrow-chevron-left"
                  variant="neutral"
                  size="s"
                  aria-label="Mois précédent"
                  data-datepicker-tab={DATEPICKER_TAB_DATA.navPrevMonth}
                  onClick={() => handleNavigateDay("prevMonth")}
                />
              </>
            ) : calendarType === DateSegmentEnum.MONTH ? (
              <IconButton
                name="arrow-chevron-left"
                variant="neutral"
                size="s"
                aria-label="Année précédente"
                data-datepicker-tab={DATEPICKER_TAB_DATA.navPrevCompact}
                onClick={() => handleNavigateCompact("previous", "month")}
              />
            ) : (
              <IconButton
                name="arrow-chevron-left"
                variant="neutral"
                size="s"
                aria-label="Décennie précédente"
                data-datepicker-tab={DATEPICKER_TAB_DATA.navPrevCompact}
                onClick={() => handleNavigateCompact("previous", "year")}
              />
            )}
          </div>

          {calendarType === DateSegmentEnum.YEAR ? (
            <span className={concatClassNames(styles["month-label"], "month-label-static")}>{headerTitle}</span>
          ) : (
            <button
              className={styles["month-label"]}
              onClick={handleOnClickHeaderLabel}
              aria-label={`Changer de vue, ${headerTitle} , appuyer pour voir les ${calendarType === DateSegmentEnum.DAY ? "mois" : "années"}`}
              data-datepicker-tab={DATEPICKER_TAB_DATA.monthLabel}
            >
              {headerTitle}
            </button>
          )}

          <div className={styles["nav-right"]}>
            {calendarType === DateSegmentEnum.DAY ? (
              <>
                <IconButton
                  name="arrow-chevron-right"
                  variant="neutral"
                  size="s"
                  aria-label="Mois suivant"
                  data-datepicker-tab={DATEPICKER_TAB_DATA.navNextMonth}
                  onClick={() => handleNavigateDay("nextMonth")}
                />
                <IconButton
                  name="arrow-double-right"
                  variant="neutral"
                  size="s"
                  aria-label="Année suivante"
                  data-datepicker-tab={DATEPICKER_TAB_DATA.navNextYear}
                  onClick={() => handleNavigateDay("nextYear")}
                />
              </>
            ) : calendarType === DateSegmentEnum.MONTH ? (
              <IconButton
                name="arrow-chevron-right"
                variant="neutral"
                size="s"
                aria-label="Année suivante"
                data-datepicker-tab={DATEPICKER_TAB_DATA.navNextCompact}
                onClick={() => handleNavigateCompact("next", "month")}
              />
            ) : (
              <IconButton
                name="arrow-chevron-right"
                variant="neutral"
                size="s"
                aria-label="Décennie suivante"
                data-datepicker-tab={DATEPICKER_TAB_DATA.navNextCompact}
                onClick={() => handleNavigateCompact("next", "year")}
              />
            )}
          </div>
        </div>
        {calendarType === DateSegmentEnum.DAY ? (
          <>
            <div className={styles["rte-datepicker-weekdays"]} aria-hidden="true">
              {getWeekdayShortLabels().map((weekdayLabel, index) => (
                <div key={index} className={styles["weekday"]}>
                  {weekdayLabel}
                </div>
              ))}
            </div>

            <Divider appearance="brand" />

            <div
              className={concatClassNames(styles["rte-datepicker-day-grid"], "rte-datepicker-day-grid")}
              role="grid"
              aria-label="Calendrier"
            >
              {dayCells.map((cell) => (
                <button
                  type="button"
                  key={cell.date.toISOString()}
                  className={concatClassNames(styles["day-cell"], "day-cell")}
                  role="gridcell"
                  onClick={() => handleOnClickDayCell(cell.date)}
                  aria-selected={isDayCellSelected(cell.date)}
                  tabIndex={tabIndexForDayCell(cell.date, activeDate)}
                  disabled={cell.isDisabled}
                  data-cell-type={cell.cellType}
                  data-datepicker-active={activeDate?.toDateString() === cell.date.toDateString() || undefined}
                >
                  <span className={styles["day-cell__surface"]} aria-hidden="true"></span>
                  <span className={styles["day-cell__label"]}>{cell.label}</span>
                </button>
              ))}
            </div>
          </>
        ) : calendarType === DateSegmentEnum.MONTH ? (
          <>
            <Divider appearance="brand" />
            <p className={styles["rte-datepicker-view-instruction"]} id="rte-datepicker-month-instruction">
              Sélectionner un mois
            </p>
            <div
              className={concatClassNames(styles["rte-datepicker-month-grid"], "rte-datepicker-month-grid")}
              role="grid"
              aria-label="Mois"
            >
              {monthCells.map((cell) => (
                <button
                  type="button"
                  key={cell.monthIndex}
                  className={concatClassNames(styles["month-cell"], "month-cell")}
                  role="gridcell"
                  aria-selected={cell.isSelected}
                  tabIndex={tabIndexForMonthCell(cell.monthIndex)}
                  data-cell-month-index={cell.monthIndex}
                  data-active-date-month={viewDate.getMonth()}
                  data-active-date-year={activeDate.getFullYear()}
                  data-active-view-year={viewDate.getFullYear()}
                  data-datepicker-active={
                    cell.monthIndex === activeDate.getMonth() && viewDate.getFullYear() === activeDate.getFullYear()
                      ? true
                      : undefined
                  }
                  data-current={cell.isCurrent}
                  disabled={cell.isDisabled}
                  data-selected={cell.isSelected}
                  onClick={() => handleOnClickMonthCell(cell.monthIndex)}
                >
                  <span className={styles["month-cell__label"]}>{cell.label}</span>
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <Divider appearance="brand" />
            <p className={styles["rte-datepicker-view-instruction"]} id="rte-datepicker-year-instruction">
              Sélectionner une année
            </p>

            <div
              className={concatClassNames(styles["rte-datepicker-year-grid"], "rte-datepicker-year-grid")}
              role="grid"
              aria-label="Années"
            >
              {yearCells.map((cell) => (
                <button
                  type="button"
                  key={cell.year}
                  className={concatClassNames(styles["year-cell"], "year-cell")}
                  role="gridcell"
                  data-datepicker-active={activeDate?.getFullYear() === cell.year || null}
                  data-current={cell.isCurrent}
                  tabIndex={tabIndexForYearCell(cell.year)}
                  data-selected={cell.isSelected}
                  aria-selected={cell.isSelected}
                  disabled={cell.isDisabled}
                  onClick={() => handleOnClickYearCell(cell.year)}
                >
                  {cell.label}
                </button>
              ))}
            </div>
          </>
        )}
        {hasAction && (
          <div className={styles["rte-datepicker-dropdown-actions"]}>
            <Button label="Annuler" size="s" variant="transparent" onClick={onCancel} />
            <Button label="Confirmer" size="s" variant="transparent" onClick={handleOnClickValidate} />
          </div>
        )}
      </div>
    </>
  );
};

export default DatePickerMenu;
