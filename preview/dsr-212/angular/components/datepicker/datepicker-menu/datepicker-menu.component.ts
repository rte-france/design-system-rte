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
import {
  addMonths,
  buildDayGrid,
  buildMonthGrid,
  buildYearGrid,
  DatepickerCalendarType,
  DATEPICKER_TAB_DATA,
  formatDate,
  getDayCellIndexForDate,
  getMonthLabel,
  getWeekdayShortLabels,
  isSameDay,
} from "../datepicker.utils";

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
  readonly monthLabel = computed(() => getMonthLabel(this.viewDate(), this.locale()));

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

  readonly tabIndexForDayKeyboardOrder = computed(() => (this.calendarType() === "day" ? -1 : undefined));

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
  }

  goToPreviousYear(): void {
    const nextDate = addMonths(this.viewDate(), -12);
    this.dateHovered.emit(nextDate);
  }

  goToPreviousMonth(): void {
    const nextDate = addMonths(this.viewDate(), -1);
    this.dateHovered.emit(nextDate);
  }

  goToNextMonth(): void {
    const nextDate = addMonths(this.viewDate(), 1);
    this.dateHovered.emit(nextDate);
  }

  goToNextYear(): void {
    const nextDate = addMonths(this.viewDate(), 12);
    this.dateHovered.emit(nextDate);
  }

  setCalendarType(type: DatepickerCalendarType): void {
    this.calendarTypeChange.emit(type);
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
    const nextDate = new Date(year, this.viewDate().getMonth(), 1);
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

    if (this.calendarType() !== "day") {
      return;
    }

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

  private isEventTargetDayGridCell(target: EventTarget | null): boolean {
    if (!(target instanceof HTMLElement)) {
      return false;
    }
    return target.matches("button.day-cell") && target.closest(".rte-datepicker-day-grid") !== null;
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

  private queueFocusActiveDayCell(): void {
    waitForNextFrame(() => {
      const root = this.elementRef.nativeElement;
      const button = root.querySelector(
        '.rte-datepicker-day-grid .day-cell[data-datepicker-active="true"]:not([disabled])',
      ) as HTMLElement | null;
      button?.focus();
    });
  }
}
