import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  HostListener,
  inject,
  input,
  output,
  signal,
} from "@angular/core";
import { getDayCellIndexForDate, isSameDay } from "@design-system-rte/core";
import { waitForNextFrame } from "@design-system-rte/core/common/animation";
import {
  addDays,
  addMonths,
  buildMonthGrid,
  buildYearGrid,
  type DatepickerCalendarType,
  type DatepickerCompactNavStep,
  type DatepickerDayNavAction,
  DATEPICKER_TAB_DATA,
  DATEPICKER_YEAR_GRID_PAGE_SIZE,
  getDatepickerGridArrowDelta,
  getDecadeRangeLabel,
  getDecadeStartYear,
  getMonthLabel,
  getNextGridCellIndex,
  getWeekdayShortLabels,
  getYearLabel,
  isDateDisabled,
  navigateViewDate,
  startOfDay,
} from "@design-system-rte/core/components/datepicker";
import { buildDayRangeGrid } from "@design-system-rte/core/components/daterangepicker";
import {
  ARROW_DOWN_KEY,
  ARROW_LEFT_KEY,
  ARROW_RIGHT_KEY,
  ARROW_UP_KEY,
  ESCAPE_KEY,
  ENTER_KEY,
  SPACE_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { ButtonComponent } from "../../button/button.component";
import { DividerComponent } from "../../divider/divider.component";
import { IconButtonComponent } from "../../icon-button/icon-button.component";

type DateRangeSelectionMode = "start" | "end";

@Component({
  selector: "rte-daterangepicker-menu",
  imports: [CommonModule, IconButtonComponent, ButtonComponent, DividerComponent],
  standalone: true,
  templateUrl: "./daterangepicker-menu.component.html",
  styleUrl: "./daterangepicker-menu.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaterangepickerMenuComponent {
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  readonly calendarType = input<DatepickerCalendarType>("day");
  readonly locale = input<string>("fr-FR");
  readonly selectionMode = input<DateRangeSelectionMode>("start");

  readonly viewDate = input<Date>(new Date());
  readonly selectedDates = input<[Date | null, Date | null]>([null, null]);

  readonly minDate = input<Date | undefined>(undefined);
  readonly maxDate = input<Date | undefined>(undefined);
  readonly disabledDates = input<readonly Date[]>([]);

  readonly focusSessionId = input(0);
  readonly initialActiveDate = input<Date | null>(null);
  readonly hasActions = input(true);

  readonly navigateViewFromHeaderControls = output<Date>();
  readonly navigateViewFromStructurePick = output<Date>();
  readonly dateSelected = output<Date>();
  readonly dateKeyboardNavigate = output<Date>();
  readonly calendarTypeChange = output<DatepickerCalendarType>();

  readonly cancel = output<void>();
  readonly confirm = output<void>();
  readonly dismiss = output<void>();

  readonly hoveredDate = signal<Date | null>(null);

  readonly weekdayLabels = computed(() => getWeekdayShortLabels(this.locale()));

  readonly startDate = computed(() => this.selectedDates()[0]);
  readonly endDate = computed(() => this.selectedDates()[1]);

  readonly hasPendingRange = computed(() => {
    const [start, end] = this.selectedDates();
    return start !== null && end === null;
  });

  readonly headerTitle = computed(() => {
    const view = this.viewDate();
    const type = this.calendarType();
    if (type === "day") {
      return getMonthLabel(view, this.locale());
    }
    if (type === "month") {
      return getYearLabel(view, this.locale());
    }
    return getDecadeRangeLabel(view);
  });

  readonly dayCells = computed(() =>
    buildDayRangeGrid({
      viewDate: this.viewDate(),
      selectedDates: this.selectedDates(),
      minDate: this.minDate(),
      maxDate: this.maxDate(),
      disabledDates: this.disabledDates(),
    }),
  );

  readonly monthCells = computed(() =>
    buildMonthGrid({
      viewDate: this.viewDate(),
      selectedDate: this.startDate(),
      minDate: this.minDate(),
      maxDate: this.maxDate(),
      disabledDates: this.disabledDates(),
      locale: this.locale(),
    }),
  );

  readonly yearCells = computed(() =>
    buildYearGrid({
      viewDate: this.viewDate(),
      selectedDate: this.startDate(),
      minDate: this.minDate(),
      maxDate: this.maxDate(),
      disabledDates: this.disabledDates(),
    }),
  );

  readonly activeDate = signal<Date>(this.startDate() ?? this.viewDate());

  readonly tabIndexForKeyboardOrder = computed(() => -1);

  readonly datepickerTabData = DATEPICKER_TAB_DATA;

  constructor() {
    effect(
      () => {
        this.focusSessionId();
        const initial = this.initialActiveDate();
        if (initial != null) {
          this.activeDate.set(initial);
        }
      },
      { allowSignalWrites: true },
    );

    effect(
      () => {
        const view = this.viewDate();
        if (this.calendarType() !== "month") {
          return;
        }
        const monthIndex = this.activeDate().getMonth();
        const aligned = new Date(view.getFullYear(), monthIndex, 1);
        if (aligned.getTime() !== this.activeDate().getTime()) {
          this.activeDate.set(aligned);
        }
      },
      { allowSignalWrites: true },
    );

    effect(
      () => {
        const view = this.viewDate();
        if (this.calendarType() !== "year") {
          return;
        }
        const decadeStart = getDecadeStartYear(view.getFullYear());
        const year = this.activeDate().getFullYear();
        if (year < decadeStart || year > decadeStart + DATEPICKER_YEAR_GRID_PAGE_SIZE - 1) {
          this.activeDate.set(new Date(decadeStart, 0, 1));
        }
      },
      { allowSignalWrites: true },
    );

    effect(
      () => {
        if (this.calendarType() !== "day") {
          return;
        }
        this.dayCells();
        this.activeDate();
        this.initialActiveDate();
        this.synchronizeActiveDateWithDayGrid();
      },
      { allowSignalWrites: true },
    );
  }

  isDateInRange(date: Date): boolean {
    const start = this.startDate();
    const end = this.endDate();
    if (!start || !end || this.hasPendingRange()) {
      return false;
    }
    if (this.selectionMode() === "end" && this.hoveredDate()) {
      const hovered = this.hoveredDate()!;
      if (hovered < start) {
        return date >= start && date <= end;
      }
      return false;
    }
    const target = startOfDay(date);
    return target >= startOfDay(start) && target <= startOfDay(end);
  }

  isDateFirstInRange(date: Date): boolean {
    const start = this.startDate();
    if (!start) {
      return false;
    }
    return isSameDay(date, start);
  }

  isDateLastInRange(date: Date): boolean {
    const end = this.endDate();
    if (!end) {
      return false;
    }
    return isSameDay(date, end);
  }

  isDateInPreviewRange(date: Date): boolean {
    const [pendingStart, pendingEnd] = this.selectedDates();
    const hovered = this.hoveredDate();

    if (this.hasPendingRange()) {
      if (pendingStart && !pendingEnd && hovered) {
        if (isSameDay(hovered, date) && isSameDay(date, pendingStart)) {
          return false;
        }
        const target = startOfDay(date);
        return target >= startOfDay(pendingStart) && target <= startOfDay(hovered);
      }
      if (pendingEnd && pendingStart) {
        if (hovered && this.selectionMode() === "end") {
          if (isSameDay(hovered, date) && isSameDay(date, pendingEnd)) {
            return false;
          }
          if (hovered >= pendingStart) {
            const target = startOfDay(date);
            return target >= startOfDay(pendingStart) && target <= startOfDay(hovered);
          }
        }
        const target = startOfDay(date);
        return target >= startOfDay(pendingStart) && target <= startOfDay(pendingEnd);
      }
      return false;
    }

    const start = this.startDate();
    if (this.selectionMode() === "end" && start && hovered) {
      const target = startOfDay(date);
      return target >= startOfDay(start) && target <= startOfDay(hovered);
    }
    return false;
  }

  isDateLastInPreviewRange(date: Date): boolean {
    if (this.selectionMode() === "start") {
      const end = this.selectedDates()[1];
      if (end) {
        return isSameDay(date, end);
      }
      return false;
    }
    const hovered = this.hoveredDate();
    if (hovered) {
      return isSameDay(date, hovered);
    }
    return false;
  }

  isDateFirstInPreviewRange(date: Date): boolean {
    if (this.selectionMode() === "start") {
      const hovered = this.hoveredDate();
      if (hovered) {
        return isSameDay(date, hovered);
      }
      return false;
    }
    const start = this.selectedDates()[0];
    if (start) {
      return isSameDay(date, start);
    }
    return false;
  }

  onDayCellMouseEnter(date: Date): void {
    this.hoveredDate.set(date);
  }

  onDayCellMouseLeave(): void {
    this.hoveredDate.set(null);
  }

  private synchronizeActiveDateWithDayGrid(): void {
    if (this.calendarType() !== "day") {
      return;
    }
    const cells = this.dayCells();
    const currentActive = this.activeDate();
    if (getDayCellIndexForDate(cells, currentActive) >= 0) {
      return;
    }
    const initial = this.initialActiveDate();
    if (initial != null) {
      const cellForInitial = cells.find((cell) => isSameDay(cell.date, initial));
      if (cellForInitial && !cellForInitial.isDisabled) {
        this.activeDate.set(cellForInitial.date);
        return;
      }
    }
    const firstEnabled = cells.find((cell) => !cell.isDisabled);
    if (firstEnabled) {
      this.activeDate.set(firstEnabled.date);
    }
  }

  goToDayNavigation(action: DatepickerDayNavAction): void {
    const nextDate = navigateViewDate({
      viewDate: this.viewDate(),
      calendarType: "day",
      dayAction: action,
    });
    this.navigateViewFromHeaderControls.emit(nextDate);
  }

  goToCompactNavigation(step: DatepickerCompactNavStep): void {
    const nextDate = navigateViewDate({
      viewDate: this.viewDate(),
      calendarType: this.calendarType(),
      compactStep: step,
    });
    this.navigateViewFromHeaderControls.emit(nextDate);
  }

  onHeaderLabelClick(): void {
    const type = this.calendarType();
    if (type === "day") {
      this.activeDate.set(new Date(this.viewDate().getFullYear(), this.viewDate().getMonth(), 1));
      this.setCalendarType("month");
      return;
    }
    if (type === "month") {
      this.setCalendarType("year");
      const view = this.viewDate();
      this.activeDate.set(new Date(getDecadeStartYear(view.getFullYear()), 0, 1));
    }
  }

  onClickDay(date: Date, isDisabled: boolean): void {
    if (isDisabled) {
      return;
    }
    this.activeDate.set(date);
    this.dateSelected.emit(date);
  }

  setActiveDate(date: Date): void {
    this.activeDate.set(date);
  }

  onMonthCellFocused(monthIndex: number): void {
    this.setActiveDate(new Date(this.viewDate().getFullYear(), monthIndex, 1));
  }

  onYearCellFocused(year: number): void {
    this.setActiveDate(new Date(year, 0, 1));
  }

  onClickMonth(monthIndex: number, isDisabled: boolean): void {
    if (isDisabled) {
      return;
    }
    const nextDate = new Date(this.viewDate().getFullYear(), monthIndex, 1);
    this.activeDate.set(nextDate);
    this.navigateViewFromStructurePick.emit(nextDate);
    this.setCalendarType("day");
  }

  onClickYear(year: number, isDisabled: boolean): void {
    if (isDisabled) {
      return;
    }
    const reference = this.startDate() ?? this.viewDate();
    const nextDate = new Date(year, reference.getMonth(), 1);
    this.activeDate.set(nextDate);
    this.navigateViewFromStructurePick.emit(nextDate);
    this.setCalendarType("month");
  }

  @HostListener("keydown", ["$event"])
  onHostKeyDown(event: KeyboardEvent): void {
    if (!event.key) {
      return;
    }

    if (event.key === ESCAPE_KEY) {
      event.preventDefault();
      event.stopPropagation();
      this.dismiss.emit();
      return;
    }

    const mode = this.calendarType();
    if (mode === "day") {
      this.handleDayGridKeyDown(event);
      return;
    }
    if (mode === "month") {
      this.handleMonthGridKeyDown(event);
      return;
    }
    if (mode === "year") {
      this.handleYearGridKeyDown(event);
    }
  }

  private setCalendarType(type: DatepickerCalendarType): void {
    this.calendarTypeChange.emit(type);
  }

  private handleDayGridKeyDown(event: KeyboardEvent): void {
    if (!this.isEventTargetDayGridCell(event.target)) {
      return;
    }

    event.stopPropagation();

    if ([ENTER_KEY, SPACE_KEY].includes(event.key)) {
      event.preventDefault();
      this.synchronizeActiveDateWithDayGrid();
      const current = this.activeDate();
      const dayCell = this.dayCells().find((cell) => isSameDay(cell.date, current));
      if (dayCell && !dayCell.isDisabled) {
        this.onClickDay(current, false);
      }
      return;
    }

    const navigationKeys = [ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY];
    if (!navigationKeys.includes(event.key)) {
      return;
    }

    event.preventDefault();
    this.moveActiveDayByArrowKey(event.key);
  }

  private handleMonthGridKeyDown(event: KeyboardEvent): void {
    if (!this.isEventTargetMonthGridCell(event.target)) {
      return;
    }

    event.stopPropagation();

    if ([ENTER_KEY, SPACE_KEY].includes(event.key)) {
      event.preventDefault();
      const monthIndex = this.activeDate().getMonth();
      const monthCell = this.monthCells().find((cell) => cell.monthIndex === monthIndex);
      if (monthCell && !monthCell.isDisabled) {
        this.onClickMonth(monthIndex, false);
      }
      return;
    }

    const navigationKeys = [ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY];
    if (!navigationKeys.includes(event.key)) {
      return;
    }

    event.preventDefault();
    this.moveActiveMonthByArrowKey(event.key);
  }

  private handleYearGridKeyDown(event: KeyboardEvent): void {
    if (!this.isEventTargetYearGridCell(event.target)) {
      return;
    }

    event.stopPropagation();

    if ([ENTER_KEY, SPACE_KEY].includes(event.key)) {
      event.preventDefault();
      const year = this.activeDate().getFullYear();
      const yearCell = this.yearCells().find((cell) => cell.year === year);
      if (yearCell && !yearCell.isDisabled) {
        this.onClickYear(year, false);
      }
      return;
    }

    const navigationKeys = [ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY];
    if (!navigationKeys.includes(event.key)) {
      return;
    }

    event.preventDefault();
    this.moveActiveYearByArrowKey(event.key);
  }

  private isEventTargetDayGridCell(target: EventTarget | null): boolean {
    if (!(target instanceof HTMLElement)) {
      return false;
    }
    return target.matches("button.day-cell") && target.closest(".rte-datepicker-day-grid") !== null;
  }

  private isEventTargetMonthGridCell(target: EventTarget | null): boolean {
    if (!(target instanceof HTMLElement)) {
      return false;
    }
    return target.matches("button.month-cell") && target.closest(".rte-datepicker-month-grid") !== null;
  }

  private isEventTargetYearGridCell(target: EventTarget | null): boolean {
    if (!(target instanceof HTMLElement)) {
      return false;
    }
    return target.matches("button.year-cell") && target.closest(".rte-datepicker-year-grid") !== null;
  }

  private moveActiveDayByArrowKey(key: string): void {
    this.synchronizeActiveDateWithDayGrid();
    const cells = this.dayCells();
    const currentIndex = getDayCellIndexForDate(cells, this.activeDate());
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
      const targetDay = startOfDay(addDays(this.activeDate(), delta));
      if (this.isDayDisabledInCalendar(targetDay)) {
        return;
      }
      this.dateKeyboardNavigate.emit(targetDay);
      this.hoveredDate.set(targetDay);
      this.queueFocusActiveDayCell();
      return;
    }

    const nextActiveDate = cells[nextIndex].date;
    this.activeDate.set(nextActiveDate);
    this.hoveredDate.set(nextActiveDate);
    this.queueFocusActiveDayCell();
  }

  private isDayDisabledInCalendar(date: Date): boolean {
    return isDateDisabled({
      date,
      minDate: this.minDate(),
      maxDate: this.maxDate(),
      disabledDates: this.disabledDates(),
    });
  }

  private moveActiveMonthByArrowKey(key: string): void {
    const cells = this.monthCells();
    const currentMonthIndex = this.activeDate().getMonth();
    const currentIndex = cells.findIndex((cell) => cell.monthIndex === currentMonthIndex);
    if (currentIndex < 0) {
      return;
    }

    const deltaMonths = getDatepickerGridArrowDelta(key, "monthYear");
    const targetMonthStart = addMonths(this.activeDate(), deltaMonths);

    if (targetMonthStart.getFullYear() !== this.viewDate().getFullYear()) {
      this.dateKeyboardNavigate.emit(targetMonthStart);
      this.queueFocusActiveMonthCell();
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
    this.activeDate.set(new Date(this.viewDate().getFullYear(), nextMonthIndex, 1));
    this.queueFocusActiveMonthCell();
  }

  private moveActiveYearByArrowKey(key: string): void {
    const cells = this.yearCells();
    const currentYear = this.activeDate().getFullYear();
    const currentIndex = cells.findIndex((cell) => cell.year === currentYear);
    if (currentIndex < 0) {
      return;
    }

    const deltaYears = getDatepickerGridArrowDelta(key, "monthYear");
    const targetYear = currentYear + deltaYears;

    const visibleYears = cells.map((cell) => cell.year);
    if (!visibleYears.includes(targetYear)) {
      this.dateKeyboardNavigate.emit(new Date(targetYear, 0, 1));
      this.queueFocusActiveYearCell();
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
    this.activeDate.set(new Date(nextYear, 0, 1));
    this.queueFocusActiveYearCell();
  }

  private queueFocusActiveDayCell(): void {
    waitForNextFrame(() => {
      const root = this.elementRef.nativeElement;
      const button = root.querySelector(
        '.rte-datepicker-day-grid .day-cell[data-datepicker-active="true"]:not([disabled])',
      ) as HTMLElement | null;
      button?.focus();
    });
  }

  private queueFocusActiveMonthCell(): void {
    waitForNextFrame(() => {
      const root = this.elementRef.nativeElement;
      const button = root.querySelector(
        '.rte-datepicker-month-grid .month-cell[data-datepicker-active="true"]:not([disabled])',
      ) as HTMLElement | null;
      button?.focus();
    });
  }

  private queueFocusActiveYearCell(): void {
    waitForNextFrame(() => {
      const root = this.elementRef.nativeElement;
      const button = root.querySelector(
        '.rte-datepicker-year-grid .year-cell[data-datepicker-active="true"]:not([disabled])',
      ) as HTMLElement | null;
      button?.focus();
    });
  }
}
