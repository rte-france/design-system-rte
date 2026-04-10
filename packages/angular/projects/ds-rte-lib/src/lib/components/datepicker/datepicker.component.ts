import { CommonModule } from "@angular/common";
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  computed,
  effect,
  inject,
  input,
  output,
  signal,
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { waitForNextFrame } from "@design-system-rte/core/common/animation";
import {
  buildDayGrid,
  type DatepickerCalendarType,
  formatDate,
  isDateDisabled,
  maskDateInput,
  parseDate,
  projectDayToMonthAnchor,
  resolveInitialCalendarDay,
  startOfDay,
} from "@design-system-rte/core/components/datepicker";
import { ENTER_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { FocusTrapService } from "../../services/focus-trap.service";
import { DropdownModule } from "../dropdown";

import { DatepickerMenuComponent } from "./datepicker-menu/datepicker-menu.component";
import { DatepickerMenuService } from "./datepicker-menu.service";
import { DatepickerSegmentedFieldComponent } from "./datepicker-segmented-field/datepicker-segmented-field.component";

@Component({
  selector: "rte-datepicker",
  imports: [CommonModule, DropdownModule, DatepickerSegmentedFieldComponent, DatepickerMenuComponent],
  standalone: true,
  templateUrl: "./datepicker.component.html",
  styleUrl: "./datepicker.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    DatepickerMenuService,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DatepickerComponent,
      multi: true,
    },
  ],
})
export class DatepickerComponent implements ControlValueAccessor, AfterViewInit {
  readonly id = input<string>();
  readonly name = input<string>();
  readonly labelText = input<string>("Label");
  readonly hasLabel = input<boolean>(true);
  readonly labelPosition = input<"top" | "side">("top");
  readonly isRequiredOptional = input<boolean>(false);
  readonly required = input<boolean>(false);
  readonly showLabelRequirement = input<boolean>(false);

  readonly width = input<string>("248px");

  readonly hasAssistiveText = input<boolean>(false);
  readonly assistiveTextLabel = input<string>("");
  readonly assistiveTextAppearance = input<"description" | "error">("description");
  readonly showAssistiveIcon = input<boolean>(false);

  readonly fieldAriaLabel = input<string>("");
  readonly fieldAriaLabelledby = input<string>("");

  readonly interactionState = input<
    "enabled" | "hover" | "activeInput" | "activeMenu" | "error" | "disabled" | "readOnly"
  >("enabled");

  readonly minDate = input<Date | undefined>(undefined);
  readonly maxDate = input<Date | undefined>(undefined);
  readonly disabledDates = input<readonly Date[]>([]);
  readonly locale = input<string>("fr-FR");
  readonly hasActions = input(true);

  readonly valueChange = output<Date | null>();
  readonly openedChange = output<boolean>();

  readonly dropdownWidth = signal<number | null>(null);

  readonly isOpen = signal(false);
  readonly calendarType = signal<DatepickerCalendarType>("day");

  readonly selectedDate = signal<Date | null>(null);
  readonly pendingDate = signal<Date | null>(null);
  readonly viewDate = signal<Date>(new Date());

  readonly textValue = signal<string>("");

  readonly menuInitialActiveDate = signal<Date | null>(null);
  readonly menuFocusSessionId = signal(0);

  private readonly monthNavigationAnchorDay = signal<number | null>(null);

  private wasDatepickerOpen = false;

  private readonly formDisabled = signal(false);

  readonly isDisabled = computed(() => ["disabled"].includes(this.interactionState()) || this.formDisabled());
  readonly isReadOnly = computed(() => ["readOnly"].includes(this.interactionState()));
  readonly isError = computed(() => ["error"].includes(this.interactionState()));

  readonly calendarButtonAriaLabel = computed(() => {
    const selectedDate = this.selectedDate();
    return selectedDate ? `Changer la date, ${formatDate(selectedDate)}` : "Ouvrir le calendrier";
  });

  readonly segmentedFieldAriaLabelledby = computed(() => {
    const explicit = this.fieldAriaLabelledby();
    if (explicit !== "") {
      return explicit;
    }
    return this.hasLabel() && this.id() ? `input-label-${this.id()}` : null;
  });

  private onTouched: () => void = () => {};
  private onChange: (value: Date | null) => void = () => {};
  private readonly focusTrapService = inject(FocusTrapService);
  private readonly datepickerMenuService = inject(DatepickerMenuService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private resizeObserver: ResizeObserver | null = null;

  constructor() {
    effect(
      () => {
        this.openedChange.emit(this.isOpen());
      },
      { allowSignalWrites: true },
    );

    effect(
      () => {
        const open = this.isOpen();
        if (open && !this.wasDatepickerOpen) {
          this.applyStateWhenMenuOpens();
        }
        this.wasDatepickerOpen = open;
      },
      { allowSignalWrites: true },
    );

    effect(
      () => {
        const open = this.isOpen();
        const calendarType = this.calendarType();

        if (!open) {
          this.focusTrapService.deactivate();
          return;
        }
        waitForNextFrame(() => {
          const overlayRoot = document.getElementById("overlay-root");
          const menuHost = overlayRoot?.querySelector("rte-datepicker-menu") as HTMLElement | null;
          if (!menuHost) {
            return;
          }

          this.focusTrapService.deactivate();
          const orderedFocusables = this.datepickerMenuService.collectDatepickerMenuTabOrder(menuHost, calendarType);
          const initialFocusIndex = this.datepickerMenuService.getInitialFocusIndexForMenu(
            menuHost,
            calendarType,
            orderedFocusables,
          );
          this.focusTrapService.activate(menuHost, {
            getOrderedFocusables: () =>
              this.datepickerMenuService.collectDatepickerMenuTabOrder(menuHost, calendarType),
            initialFocusIndex,
          });
        });
      },
      { allowSignalWrites: true },
    );

    effect(
      () => {
        if (!this.isOpen()) {
          return;
        }
        waitForNextFrame(() => {
          this.syncDropdownWidthFromInputBar();
        });
      },
      { allowSignalWrites: true },
    );
  }

  ngAfterViewInit(): void {
    const inputBarElement = this.getInputBarElement();
    if (!inputBarElement) {
      return;
    }

    this.syncDropdownWidthFromInputBar();

    this.resizeObserver = new ResizeObserver(() => {
      this.syncDropdownWidthFromInputBar();
    });
    this.resizeObserver.observe(inputBarElement);

    this.destroyRef.onDestroy(() => {
      this.resizeObserver?.disconnect();
      this.resizeObserver = null;
    });
  }

  private getInputBarElement(): HTMLElement | null {
    return this.elementRef.nativeElement.querySelector(".rte-datepicker .input-bar");
  }

  private syncDropdownWidthFromInputBar(): void {
    const inputBarElement = this.getInputBarElement();
    if (!inputBarElement) {
      return;
    }
    this.dropdownWidth.set(Math.round(inputBarElement.getBoundingClientRect().width));
  }

  private isDateDisabledForPicker(date: Date): boolean {
    return isDateDisabled({
      date,
      minDate: this.minDate(),
      maxDate: this.maxDate(),
      disabledDates: this.disabledDates(),
    });
  }

  private dayOfMonthFromNullableDate(date: Date | null): number | null {
    return date?.getDate() ?? null;
  }

  private restoreCommittedDateToFieldAndPending(): void {
    const committed = this.selectedDate();
    this.pendingDate.set(committed);
    this.textValue.set(committed ? formatDate(committed) : "");
  }

  private applyStateWhenMenuOpens(): void {
    const trimmedText = this.textValue().trim();
    const parsedFromField = trimmedText.length > 0 ? parseDate(trimmedText) : null;
    const parsedNormalized = parsedFromField ? startOfDay(parsedFromField) : null;
    const isParsedUsable = parsedNormalized !== null && !this.isDateDisabledForPicker(parsedNormalized);

    let viewDateForGrid = this.viewDate();
    let pendingResolvedForMenu: Date | null = null;

    if (isParsedUsable && parsedNormalized) {
      pendingResolvedForMenu = parsedNormalized;
      viewDateForGrid = this.startOfCalendarMonth(parsedNormalized);
      this.viewDate.set(viewDateForGrid);
    } else {
      viewDateForGrid = new Date();
      this.viewDate.set(viewDateForGrid);
    }

    const dayCells = buildDayGrid({
      viewDate: viewDateForGrid,
      selectedDate: pendingResolvedForMenu,
      minDate: this.minDate(),
      maxDate: this.maxDate(),
      disabledDates: this.disabledDates(),
    });
    const resolvedInitialActiveDay = resolveInitialCalendarDay({
      pendingDate: pendingResolvedForMenu,
      selectedDate: pendingResolvedForMenu,
      dayCells,
    });
    this.menuInitialActiveDate.set(resolvedInitialActiveDay);
    this.menuFocusSessionId.update((sessionId) => sessionId + 1);
    this.syncMonthNavigationAnchorFromOpenContext(pendingResolvedForMenu);
  }

  private syncMonthNavigationAnchorFromOpenContext(pendingResolvedForMenu: Date | null): void {
    const anchorDay = (pendingResolvedForMenu ?? this.pendingDate() ?? this.selectedDate())?.getDate() ?? null;
    this.monthNavigationAnchorDay.set(anchorDay);
  }

  private syncPendingDateToViewMonthProjection(viewDate: Date): void {
    const anchorDay = this.monthNavigationAnchorDay();
    if (anchorDay === null) {
      return;
    }
    const projectedDate = projectDayToMonthAnchor(anchorDay, viewDate.getFullYear(), viewDate.getMonth());
    if (this.isDateDisabledForPicker(projectedDate)) {
      return;
    }
    this.pendingDate.set(projectedDate);
    this.menuInitialActiveDate.set(projectedDate);
    this.menuFocusSessionId.update((sessionId) => sessionId + 1);
  }

  writeValue(value: Date | null): void {
    this.selectedDate.set(value);
    this.pendingDate.set(value);
    this.viewDate.set(value ?? new Date());
    this.textValue.set(value ? formatDate(value) : "");
    this.monthNavigationAnchorDay.set(this.dayOfMonthFromNullableDate(value));
  }

  registerOnChange(fn: (value: Date | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.formDisabled.set(isDisabled);
    if (isDisabled) {
      this.isOpen.set(false);
    }
  }

  onInputBlurred(): void {
    this.onTouched();
  }

  onInputValueChange(value: string): void {
    if (this.isReadOnly() || this.isDisabled()) {
      return;
    }

    const masked = maskDateInput(value);
    this.textValue.set(masked);

    const parsed = parseDate(masked.trim());
    if (parsed) {
      const normalized = startOfDay(parsed);
      if (this.isDateDisabledForPicker(normalized)) {
        return;
      }
      this.pendingDate.set(normalized);
      this.selectedDate.set(normalized);
      this.viewDate.set(normalized);
      this.monthNavigationAnchorDay.set(normalized.getDate());
      this.onChange(normalized);
      this.valueChange.emit(normalized);
    } else if (masked.length === 0) {
      this.pendingDate.set(null);
      this.selectedDate.set(null);
      this.monthNavigationAnchorDay.set(null);
      this.onChange(null);
      this.valueChange.emit(null);
    }
  }

  onCalendarIconTriggered(event: MouseEvent | KeyboardEvent): void {
    if (this.isReadOnly() || this.isDisabled()) {
      return;
    }

    if (event instanceof KeyboardEvent) {
      const isValidOpenKey = [ENTER_KEY, SPACE_KEY].includes(event.key);
      if (!isValidOpenKey) {
        return;
      }
      event.preventDefault();
    }

    this.syncDropdownWidthFromInputBar();
    this.isOpen.set(true);
  }

  onSegmentedControlClicked(): void {
    if (!this.isOpen()) {
      return;
    }
    this.restoreCommittedDateToFieldAndPending();
    this.calendarType.set("day");
    this.isOpen.set(false);
  }

  onClickedOutside(): void {
    this.restoreCommittedDateToFieldAndPending();
    this.calendarType.set("day");
    this.isOpen.set(false);
  }

  onClosedDropdown(): void {
    this.isOpen.set(false);
    this.calendarType.set("day");
  }

  onDismiss(): void {
    this.restoreCommittedDateToFieldAndPending();
    this.calendarType.set("day");
    this.isOpen.set(false);
  }

  onMenuDateSelected(date: Date): void {
    const normalized = startOfDay(date);
    if (this.isDateDisabledForPicker(normalized)) {
      return;
    }
    this.monthNavigationAnchorDay.set(normalized.getDate());
    this.alignViewMonthToSelectedDateIfNeeded(normalized);

    if (!this.hasActions()) {
      this.pendingDate.set(normalized);
      this.selectedDate.set(normalized);
      this.textValue.set(formatDate(normalized));
      this.onChange(normalized);
      this.valueChange.emit(normalized);
      this.calendarType.set("day");
      this.isOpen.set(false);
      return;
    }

    this.pendingDate.set(normalized);
  }

  private startOfCalendarMonth(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  }

  private alignViewMonthToSelectedDateIfNeeded(selectedDate: Date): void {
    const viewMonthStart = this.startOfCalendarMonth(this.viewDate());
    const selectedMonthStart = this.startOfCalendarMonth(selectedDate);
    if (viewMonthStart.getTime() !== selectedMonthStart.getTime()) {
      this.viewDate.set(selectedMonthStart);
    }
  }

  onMenuNavigateViewFromHeaderControls(date: Date): void {
    const monthStart = this.startOfCalendarMonth(date);
    this.viewDate.set(monthStart);
    this.syncPendingDateToViewMonthProjection(monthStart);
  }

  onMenuNavigateViewFromStructurePick(date: Date): void {
    this.viewDate.set(this.startOfCalendarMonth(date));
  }

  onMenuKeyboardNavigateToDay(focusTargetDay: Date): void {
    const normalized = startOfDay(focusTargetDay);
    if (this.isDateDisabledForPicker(normalized)) {
      return;
    }
    this.viewDate.set(this.startOfCalendarMonth(normalized));
    this.menuInitialActiveDate.set(normalized);
    this.menuFocusSessionId.update((sessionId) => sessionId + 1);
  }

  onMenuCalendarTypeChange(type: DatepickerCalendarType): void {
    this.calendarType.set(type);
  }

  onCancel(): void {
    this.pendingDate.set(null);
    this.selectedDate.set(null);
    this.textValue.set("");
    this.monthNavigationAnchorDay.set(null);
    this.onChange(null);
    this.valueChange.emit(null);
    this.calendarType.set("day");
    this.isOpen.set(false);
  }

  onConfirm(): void {
    const confirmedDate = this.pendingDate();
    this.selectedDate.set(confirmedDate);
    this.textValue.set(confirmedDate ? formatDate(confirmedDate) : "");
    this.monthNavigationAnchorDay.set(this.dayOfMonthFromNullableDate(confirmedDate));
    this.onChange(confirmedDate);
    this.valueChange.emit(confirmedDate);
    this.calendarType.set("day");
    this.isOpen.set(false);
  }
}
