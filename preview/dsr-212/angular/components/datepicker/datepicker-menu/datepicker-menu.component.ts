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
import { waitForNextFrame } from "@design-system-rte/core/common/animation";
import {
  buildDayGrid,
  buildMonthGrid,
  buildYearGrid,
  type DatepickerCalendarType,
  type DatepickerCompactNavStep,
  type DatepickerDayNavAction,
  DATEPICKER_TAB_DATA,
  formatDate,
  getDayCellIndexForDate,
  getDecadeRangeLabel,
  getDecadeStartYear,
  getMonthLabel,
  getNextGridCellIndex,
  getWeekdayShortLabels,
  getYearLabel,
  navigateViewDate,
  isSameDay,
} from "@design-system-rte/core/components/datepicker";
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
import { IconButtonComponent } from "../../icon-button/icon-button.component";

@Component({
  selector: "rte-datepicker-menu",
  imports: [CommonModule, IconButtonComponent, ButtonComponent],
  standalone: true,
  templateUrl: "./datepicker-menu.component.html",
  styleUrl: "./datepicker-menu.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerMenuComponent {
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  readonly calendarType = input<DatepickerCalendarType>("day");
  readonly locale = input<string>("fr-FR");

  readonly viewDate = input<Date>(new Date());
  readonly selectedDate = input<Date | null>(null);
  readonly pendingDate = input<Date | null>(null);

  readonly minDate = input<Date | undefined>(undefined);
  readonly maxDate = input<Date | undefined>(undefined);
  readonly disabledDate = input<((date: Date) => boolean) | undefined>(undefined);

  readonly focusSessionId = input(0);
  readonly initialActiveDate = input<Date | null>(null);

  readonly dateHovered = output<Date>();
  readonly dateSelected = output<Date>();
  readonly calendarTypeChange = output<DatepickerCalendarType>();

  readonly cancel = output<void>();
  readonly confirm = output<void>();
  readonly dismiss = output<void>();

  readonly weekdayLabels = computed(() => getWeekdayShortLabels(this.locale()));

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
    buildDayGrid({
      viewDate: this.viewDate(),
      selectedDate: this.pendingDate() ?? this.selectedDate(),
      minDate: this.minDate(),
      maxDate: this.maxDate(),
      disabledDate: this.disabledDate(),
    }),
  );

  readonly monthCells = computed(() =>
    buildMonthGrid({
      viewDate: this.viewDate(),
      selectedDate: this.pendingDate() ?? this.selectedDate(),
      minDate: this.minDate(),
      maxDate: this.maxDate(),
      disabledDate: this.disabledDate(),
      locale: this.locale(),
    }),
  );

  readonly yearCells = computed(() =>
    buildYearGrid({
      viewDate: this.viewDate(),
      selectedDate: this.pendingDate() ?? this.selectedDate(),
      minDate: this.minDate(),
      maxDate: this.maxDate(),
      disabledDate: this.disabledDate(),
    }),
  );

  readonly activeDate = signal<Date>(this.pendingDate() ?? this.selectedDate() ?? this.viewDate());

  readonly activeDateLabel = computed(() => {
    const selectedDate = this.pendingDate() ?? this.selectedDate();
    return selectedDate ? formatDate(selectedDate) : "";
  });

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
        if (year < decadeStart || year > decadeStart + 9) {
          this.activeDate.set(new Date(decadeStart, 0, 1));
        }
      },
      { allowSignalWrites: true },
    );
  }

  goToDayNavigation(action: DatepickerDayNavAction): void {
    const nextDate = navigateViewDate({
      viewDate: this.viewDate(),
      calendarType: "day",
      dayAction: action,
    });
    this.dateHovered.emit(nextDate);
  }

  goToCompactNavigation(step: DatepickerCompactNavStep): void {
    const nextDate = navigateViewDate({
      viewDate: this.viewDate(),
      calendarType: this.calendarType(),
      compactStep: step,
    });
    this.dateHovered.emit(nextDate);
  }

  setCalendarType(type: DatepickerCalendarType): void {
    this.calendarTypeChange.emit(type);
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
    this.dateHovered.emit(nextDate);
    this.setCalendarType("day");
  }

  onClickYear(year: number, isDisabled: boolean): void {
    if (isDisabled) {
      return;
    }
    const reference = this.pendingDate() ?? this.selectedDate() ?? this.viewDate();
    const nextDate = new Date(year, reference.getMonth(), 1);
    this.activeDate.set(nextDate);
    this.dateHovered.emit(nextDate);
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

  private handleDayGridKeyDown(event: KeyboardEvent): void {
    if (!this.isEventTargetDayGridCell(event.target)) {
      return;
    }

    event.stopPropagation();

    if ([ENTER_KEY, SPACE_KEY].includes(event.key)) {
      event.preventDefault();
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
    const cells = this.dayCells();
    const currentIndex = getDayCellIndexForDate(cells, this.activeDate());
    if (currentIndex < 0) {
      return;
    }

    const delta = key === ARROW_LEFT_KEY ? -1 : key === ARROW_RIGHT_KEY ? 1 : key === ARROW_UP_KEY ? -7 : 7;
    const stride = Math.abs(delta) === 7 ? 7 : 1;
    const direction = delta > 0 ? 1 : -1;

    let nextIndex = currentIndex + delta;
    while (nextIndex >= 0 && nextIndex < cells.length && cells[nextIndex].isDisabled) {
      nextIndex += direction * stride;
    }

    if (nextIndex < 0 || nextIndex >= cells.length) {
      return;
    }

    this.activeDate.set(cells[nextIndex].date);
    this.queueFocusActiveDayCell();
  }

  private moveActiveMonthByArrowKey(key: string): void {
    const cells = this.monthCells();
    const currentMonthIndex = this.activeDate().getMonth();
    const currentIndex = cells.findIndex((cell) => cell.monthIndex === currentMonthIndex);
    if (currentIndex < 0) {
      return;
    }

    const columnCount = 4;
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

    const columnCount = 4;
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
