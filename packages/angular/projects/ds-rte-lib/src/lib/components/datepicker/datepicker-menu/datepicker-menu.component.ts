import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, HostListener, input, output, signal } from "@angular/core";
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
  addDays,
  buildDayGrid,
  buildMonthGrid,
  buildYearGrid,
  DatepickerCalendarType,
  formatDate,
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
  readonly calendarType = input<DatepickerCalendarType>("day");
  readonly locale = input<string>("fr-FR");

  readonly viewDate = input<Date>(new Date());
  readonly selectedDate = input<Date | null>(null);
  readonly pendingDate = input<Date | null>(null);

  readonly minDate = input<Date | undefined>(undefined);
  readonly maxDate = input<Date | undefined>(undefined);
  readonly disabledDate = input<((date: Date) => boolean) | undefined>(undefined);

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
    this.onKeyDownGrid(event);
  }

  onKeyDownGrid(event: KeyboardEvent): void {
    if (!event.key) {
      return;
    }
    event.stopPropagation();

    if (event.key === ESCAPE_KEY) {
      event.preventDefault();
      this.dismiss.emit();
      return;
    }

    if ([ENTER_KEY, SPACE_KEY].includes(event.key)) {
      event.preventDefault();
      const current = this.activeDate();
      const dayCell = this.dayCells().find((cell) => isSameDay(cell.date, current));
      if (dayCell && !dayCell.isDisabled) {
        this.onClickDay(current, false);
      }
      return;
    }

    if (this.calendarType() !== "day") {
      return;
    }

    const navigationKeys = [ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY];
    if (!navigationKeys.includes(event.key)) {
      return;
    }

    event.preventDefault();

    const delta =
      event.key === ARROW_LEFT_KEY ? -1 : event.key === ARROW_RIGHT_KEY ? 1 : event.key === ARROW_UP_KEY ? -7 : 7;

    const nextActive = addDays(this.activeDate(), delta);
    this.activeDate.set(nextActive);
  }
}
