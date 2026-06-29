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
  alignViewDateToSelectedMonthIfNeeded,
  applyDatepickerTextInputChange,
  buildRestoreCommittedDatepickerFieldState,
  DATEPICKER_DEFAULT_CALENDAR_TYPE,
  DATEPICKER_DEFAULT_LOCALE,
  DATEPICKER_DEFAULT_WIDTH,
  formatDate,
  getDatepickerCalendarButtonAriaLabel,
  getDayOfMonthOrNull,
  normalizeDatepickerMenuSelectionDate,
  resolveDatepickerMenuKeyboardDayNavigation,
  resolveDatepickerMenuKeyboardMonthNavigation,
  resolveDatepickerMenuKeyboardYearNavigation,
  resolveDatepickerMenuOpenState,
  startOfMonth,
  tryProjectPendingDateToViewMonth,
  type DatepickerCalendarType,
  type DatepickerDisabledConstraints,
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
  readonly labelText = input<string>("Label");
  readonly hasLabel = input<boolean>(true);
  readonly labelPosition = input<"top" | "side">("top");
  readonly required = input<boolean>(false);
  readonly showLabelRequirement = input<boolean>(false);

  readonly width = input<string>(DATEPICKER_DEFAULT_WIDTH);

  readonly hasAssistiveText = input<boolean>(false);
  readonly assistiveTextLabel = input<string>("");
  readonly assistiveTextAppearance = input<"description" | "error">("description");
  readonly showAssistiveIcon = input<boolean>(false);

  readonly fieldAriaLabel = input<string>("");
  readonly fieldAriaLabelledby = input<string>("");

  readonly disabled = input<boolean>(false);
  readonly readOnly = input<boolean>(false);
  readonly error = input<boolean>(false);

  readonly minDate = input<Date | undefined>(undefined);
  readonly maxDate = input<Date | undefined>(undefined);
  readonly disabledDates = input<readonly Date[]>([]);
  readonly locale = input<string>(DATEPICKER_DEFAULT_LOCALE);
  readonly hasActions = input(true);

  readonly valueChange = output<Date | null>();
  readonly openedChange = output<boolean>();

  readonly dropdownWidth = signal<number | null>(null);

  readonly isOpen = signal(false);
  readonly calendarType = signal<DatepickerCalendarType>(DATEPICKER_DEFAULT_CALENDAR_TYPE);

  readonly selectedDate = signal<Date | null>(null);
  readonly pendingDate = signal<Date | null>(null);
  readonly viewDate = signal<Date>(new Date());

  readonly textValue = signal<string>("");

  readonly menuInitialActiveDate = signal<Date | null>(null);
  readonly menuFocusSessionId = signal(0);

  private readonly monthNavigationAnchorDay = signal<number | null>(null);

  private wasDatepickerOpen = false;

  private readonly formDisabled = signal(false);

  readonly isDisabled = computed(() => this.disabled() || this.formDisabled());
  readonly isError = computed(() => this.error());

  readonly calendarButtonAriaLabel = computed(() => getDatepickerCalendarButtonAriaLabel(this.selectedDate()));

  readonly segmentedFieldAriaLabelledby = computed(() => {
    const explicit = this.fieldAriaLabelledby();
    if (explicit !== "") {
      return explicit;
    }
    return this.hasLabel() && this.id() ? `input-label-${this.id()}` : null;
  });

  readonly computedWidth = computed(() => {
    const width = this.width();
    if (width.includes("px") || width.includes("%") || width.includes("em") || width.includes("rem")) {
      return width;
    }
    return `${width}px`;
  });

  private onTouched: () => void = () => {};
  private onChange: (value: Date | null) => void = () => {};
  private readonly focusTrapService = inject(FocusTrapService);
  private readonly datepickerMenuService = inject(DatepickerMenuService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private resizeObserver: ResizeObserver | null = null;

  constructor() {
    effect(() => {
      this.openedChange.emit(this.isOpen());
    });

    effect(() => {
      const open = this.isOpen();
      if (open && !this.wasDatepickerOpen) {
        this.applyStateWhenMenuOpens();
      }
      this.wasDatepickerOpen = open;
    });

    effect(() => {
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
          getOrderedFocusables: () => this.datepickerMenuService.collectDatepickerMenuTabOrder(menuHost, calendarType),
          initialFocusIndex,
        });
      });
    });

    effect(() => {
      if (!this.isOpen()) {
        return;
      }
      waitForNextFrame(() => {
        this.syncDropdownWidthFromInputBar();
      });
    });
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

  private pickerConstraints(): DatepickerDisabledConstraints {
    return {
      minDate: this.minDate(),
      maxDate: this.maxDate(),
      disabledDates: this.disabledDates(),
    };
  }

  private restoreCommittedDateToFieldAndPending(): void {
    const fieldState = buildRestoreCommittedDatepickerFieldState({
      selectedDate: this.selectedDate(),
    });
    this.pendingDate.set(fieldState.pendingDate);
    this.textValue.set(fieldState.textValue);
  }

  private applyStateWhenMenuOpens(): void {
    const openState = resolveDatepickerMenuOpenState({
      textValue: this.textValue(),
      constraints: this.pickerConstraints(),
      pendingDate: this.pendingDate(),
      selectedDate: this.selectedDate(),
    });
    this.viewDate.set(openState.viewDate);
    this.menuInitialActiveDate.set(openState.menuInitialActiveDate);
    this.menuFocusSessionId.update((sessionId) => sessionId + 1);
    this.monthNavigationAnchorDay.set(openState.monthNavigationAnchorDay);
  }

  private syncPendingDateToViewMonthProjection(viewDate: Date): void {
    const projectedDate = tryProjectPendingDateToViewMonth({
      anchorDay: this.monthNavigationAnchorDay(),
      viewDate,
      constraints: this.pickerConstraints(),
    });
    if (projectedDate === null) {
      return;
    }
    this.pendingDate.set(projectedDate);
    this.menuInitialActiveDate.set(projectedDate);
    this.menuFocusSessionId.update((sessionId) => sessionId + 1);
    if (this.hasActions()) {
      this.textValue.set(formatDate(projectedDate));
    }
  }

  writeValue(value: Date | null): void {
    this.selectedDate.set(value);
    this.pendingDate.set(value);
    this.viewDate.set(value ?? new Date());
    this.textValue.set(value ? formatDate(value) : "");
    this.monthNavigationAnchorDay.set(getDayOfMonthOrNull(value));
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
    if (this.readOnly() || this.isDisabled()) {
      return;
    }

    const result = applyDatepickerTextInputChange({
      rawValue: value,
      constraints: this.pickerConstraints(),
    });
    this.textValue.set(result.maskedValue);

    if (result.outcome === "committed") {
      this.pendingDate.set(result.date);
      this.selectedDate.set(result.date);
      this.viewDate.set(result.date);
      this.monthNavigationAnchorDay.set(result.monthAnchorDay);
      this.onChange(result.date);
      this.valueChange.emit(result.date);
      return;
    }

    if (result.outcome === "cleared") {
      this.pendingDate.set(null);
      this.selectedDate.set(null);
      this.monthNavigationAnchorDay.set(null);
      this.onChange(null);
      this.valueChange.emit(null);
    }
  }

  onCalendarIconTriggered(event: MouseEvent | KeyboardEvent): void {
    if (this.readOnly() || this.isDisabled()) {
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
    this.calendarType.set(DATEPICKER_DEFAULT_CALENDAR_TYPE);
    this.isOpen.set(false);
  }

  onClickedOutside(): void {
    this.restoreCommittedDateToFieldAndPending();
    this.calendarType.set(DATEPICKER_DEFAULT_CALENDAR_TYPE);
    this.isOpen.set(false);
  }

  onClosedDropdown(): void {
    this.isOpen.set(false);
    this.calendarType.set(DATEPICKER_DEFAULT_CALENDAR_TYPE);
  }

  onDismiss(): void {
    this.restoreCommittedDateToFieldAndPending();
    this.calendarType.set(DATEPICKER_DEFAULT_CALENDAR_TYPE);
    this.isOpen.set(false);
  }

  onMenuDateSelected(date: Date): void {
    const normalized = normalizeDatepickerMenuSelectionDate({
      date,
      constraints: this.pickerConstraints(),
    });
    if (normalized === null) {
      return;
    }
    this.monthNavigationAnchorDay.set(normalized.getDate());
    this.viewDate.set(alignViewDateToSelectedMonthIfNeeded({ viewDate: this.viewDate(), selectedDate: normalized }));

    if (!this.hasActions()) {
      this.pendingDate.set(normalized);
      this.selectedDate.set(normalized);
      this.textValue.set(formatDate(normalized));
      this.onChange(normalized);
      this.valueChange.emit(normalized);
      this.calendarType.set(DATEPICKER_DEFAULT_CALENDAR_TYPE);
      this.isOpen.set(false);
      return;
    }

    this.pendingDate.set(normalized);
    this.textValue.set(formatDate(normalized));
  }

  onMenuNavigateViewFromHeaderControls(date: Date): void {
    const monthStart = startOfMonth(date);
    this.viewDate.set(monthStart);
    this.syncPendingDateToViewMonthProjection(monthStart);
  }

  onMenuNavigateViewFromStructurePick(date: Date): void {
    this.viewDate.set(startOfMonth(date));
  }

  onMenuKeyboardNavigate(focusTarget: Date): void {
    const constraints = this.pickerConstraints();
    const calendarType = this.calendarType();
    let navigation: { viewDate: Date; menuInitialActiveDate: Date } | null = null;
    if (calendarType === DATEPICKER_DEFAULT_CALENDAR_TYPE) {
      navigation = resolveDatepickerMenuKeyboardDayNavigation({
        focusTargetDay: focusTarget,
        constraints,
      });
    } else if (calendarType === "month") {
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
    this.viewDate.set(navigation.viewDate);
    this.menuInitialActiveDate.set(navigation.menuInitialActiveDate);
    this.menuFocusSessionId.update((sessionId) => sessionId + 1);
  }

  onMenuCalendarTypeChange(type: DatepickerCalendarType): void {
    this.calendarType.set(type);
  }

  onCancel(): void {
    this.restoreCommittedDateToFieldAndPending();
    this.calendarType.set(DATEPICKER_DEFAULT_CALENDAR_TYPE);
    this.isOpen.set(false);
  }

  onConfirm(): void {
    const confirmedDate = this.pendingDate();
    this.selectedDate.set(confirmedDate);
    this.textValue.set(confirmedDate ? formatDate(confirmedDate) : "");
    this.monthNavigationAnchorDay.set(getDayOfMonthOrNull(confirmedDate));
    this.onChange(confirmedDate);
    this.valueChange.emit(confirmedDate);
    this.calendarType.set(DATEPICKER_DEFAULT_CALENDAR_TYPE);
    this.isOpen.set(false);
  }
}
