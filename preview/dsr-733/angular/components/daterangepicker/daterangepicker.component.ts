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
  DATEPICKER_DEFAULT_CALENDAR_TYPE,
  DATEPICKER_DEFAULT_LOCALE,
  formatDate,
  getDayOfMonthOrNull,
  normalizeDatepickerMenuSelectionDate,
  resolveDatepickerMenuKeyboardDayNavigation,
  resolveDatepickerMenuKeyboardMonthNavigation,
  resolveDatepickerMenuKeyboardYearNavigation,
  startOfMonth,
  tryProjectPendingDateToViewMonth,
  type DatepickerCalendarType,
  type DatepickerDisabledConstraints,
} from "@design-system-rte/core/components/datepicker";
import {
  DATERANGEPICKER_DEFAULT_WIDTH,
  type DateRangePickerValue,
} from "@design-system-rte/core/components/daterangepicker";
import { normalizeDate } from "@design-system-rte/core/components/pickers";
import { ENTER_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { FocusTrapService } from "../../services/focus-trap.service";
import { AssistiveTextComponent } from "../assistive-text/assistive-text.component";
import { DatepickerMenuService } from "../datepicker/datepicker-menu.service";
import { DatepickerSegmentedFieldComponent } from "../datepicker/datepicker-segmented-field/datepicker-segmented-field.component";
import { DropdownModule } from "../dropdown";
import { IconComponent } from "../icon/icon.component";
import { RequiredIndicatorComponent } from "../input/required-indicator/required-indicator.component";

import { DaterangepickerMenuComponent } from "./daterangepicker-menu/daterangepicker-menu.component";

type DateRangeBound = [Date | null, Date | null];
type DateRangeInputTarget = "start" | "end";
type DateRangeSelectionMode = "start" | "end";

@Component({
  selector: "rte-daterangepicker",
  imports: [
    CommonModule,
    DropdownModule,
    DatepickerSegmentedFieldComponent,
    DaterangepickerMenuComponent,
    IconComponent,
    AssistiveTextComponent,
    RequiredIndicatorComponent,
  ],
  standalone: true,
  templateUrl: "./daterangepicker.component.html",
  styleUrl: "./daterangepicker.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    DatepickerMenuService,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DaterangepickerComponent,
      multi: true,
    },
  ],
})
export class DaterangepickerComponent implements ControlValueAccessor, AfterViewInit {
  readonly id = input.required<string>();
  readonly labelText = input<string>("Label");
  readonly hasLabel = input<boolean>(true);
  readonly labelPosition = input<"top" | "side">("top");
  readonly isRequiredOptional = input<boolean>(false);
  readonly required = input<boolean>(false);
  readonly showLabelRequirement = input<boolean>(false);

  readonly width = input<string>(DATERANGEPICKER_DEFAULT_WIDTH);

  readonly hasAssistiveText = input<boolean>(false);
  readonly assistiveTextLabel = input<string>("");
  readonly assistiveTextAppearance = input<"description" | "error">("description");
  readonly showAssistiveIcon = input<boolean>(false);

  readonly fieldAriaLabelledby = input<string>("");

  readonly disabled = input<boolean>(false);
  readonly readOnly = input<boolean>(false);
  readonly error = input<boolean>(false);

  readonly minDate = input<Date | undefined>(undefined);
  readonly maxDate = input<Date | undefined>(undefined);
  readonly disabledDates = input<readonly Date[]>([]);
  readonly locale = input<string>(DATEPICKER_DEFAULT_LOCALE);
  readonly hasActions = input(true);

  readonly valueChange = output<DateRangePickerValue>();
  readonly openedChange = output<boolean>();

  readonly dropdownWidth = signal<number | null>(null);

  readonly isOpen = signal(false);
  readonly calendarType = signal<DatepickerCalendarType>(DATEPICKER_DEFAULT_CALENDAR_TYPE);

  readonly selectedRange = signal<DateRangeBound>([null, null]);
  readonly pendingRange = signal<DateRangeBound>([null, null]);
  readonly selectionMode = signal<DateRangeSelectionMode>("start");
  readonly activeInput = signal<DateRangeInputTarget>("start");
  readonly isInputsFocused = signal(false);

  readonly inputsHighlighted = computed(() => this.isInputsFocused() || this.isOpen());

  readonly viewDate = signal<Date>(new Date());
  readonly textValueStart = signal<string>("");
  readonly textValueEnd = signal<string>("");

  readonly menuInitialActiveDate = signal<Date | null>(null);
  readonly menuFocusSessionId = signal(0);

  private readonly monthNavigationAnchorDay = signal<number | null>(null);
  private readonly committedSnapshot = signal<DateRangeBound>([null, null]);
  private readonly hasPendingChanges = signal(false);

  private wasMenuOpen = false;
  private menuOpenedFromInput: DateRangeInputTarget = "start";

  private readonly formDisabled = signal(false);

  readonly isDisabled = computed(() => this.disabled() || this.formDisabled());
  readonly isError = computed(() => this.error());

  readonly groupLabelId = computed(() => `${this.id()}-label`);

  readonly groupAriaLabelledby = computed(() => {
    const explicit = this.fieldAriaLabelledby();
    if (explicit !== "") {
      return explicit;
    }
    return this.hasLabel() ? this.groupLabelId() : null;
  });

  readonly fieldDescribedBy = computed(() => {
    if (!this.hasAssistiveText() || !this.assistiveTextLabel() || this.isOpen()) {
      return null;
    }
    return `${this.id()}-assistive-text`;
  });

  readonly startInputLabelId = computed(() => `${this.id()}-start-label`);
  readonly endInputLabelId = computed(() => `${this.id()}-end-label`);
  readonly startFieldId = computed(() => `${this.id()}-start-input`);
  readonly endFieldId = computed(() => `${this.id()}-end-input`);

  readonly startFieldAriaLabelledby = computed(() => {
    const groupIds = [this.groupAriaLabelledby(), this.startInputLabelId()].filter(Boolean);
    return groupIds.join(" ");
  });

  readonly endFieldAriaLabelledby = computed(() => {
    const groupIds = [this.groupAriaLabelledby(), this.endInputLabelId()].filter(Boolean);
    return groupIds.join(" ");
  });

  readonly startCalendarButtonAriaLabel = computed(() => "Ouvrir le sélecteur de date de début");
  readonly endCalendarButtonAriaLabel = computed(() => "Ouvrir le sélecteur de date de fin");

  readonly menuDisplayRange = computed((): DateRangeBound => {
    if (this.hasActions() && this.isOpen()) {
      return this.pendingRange();
    }
    return this.selectedRange();
  });

  readonly showAssistiveOnHost = computed(
    () => this.hasAssistiveText() && !!this.assistiveTextLabel() && !this.isOpen(),
  );

  private onTouched: () => void = () => {};
  private onChange: (value: DateRangePickerValue) => void = () => {};
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
        if (open && !this.wasMenuOpen) {
          this.applyStateWhenMenuOpens();
        }
        this.wasMenuOpen = open;
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
          const menuHost = overlayRoot?.querySelector("rte-daterangepicker-menu") as HTMLElement | null;
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
            restoreFocusTo: this.getCalendarButtonForInput(this.menuOpenedFromInput),
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
          this.syncDropdownWidthFromInputsWrapper();
        });
      },
      { allowSignalWrites: true },
    );
  }

  ngAfterViewInit(): void {
    const inputsWrapper = this.getInputsWrapperElement();
    if (!inputsWrapper) {
      return;
    }

    this.syncDropdownWidthFromInputsWrapper();

    this.resizeObserver = new ResizeObserver(() => {
      this.syncDropdownWidthFromInputsWrapper();
    });
    this.resizeObserver.observe(inputsWrapper);

    this.destroyRef.onDestroy(() => {
      this.resizeObserver?.disconnect();
      this.resizeObserver = null;
    });
  }

  private getInputsWrapperElement(): HTMLElement | null {
    return this.elementRef.nativeElement.querySelector(".rte-daterangepicker-inputs");
  }

  private syncDropdownWidthFromInputsWrapper(): void {
    const inputsWrapper = this.getInputsWrapperElement();
    if (!inputsWrapper) {
      return;
    }
    this.dropdownWidth.set(Math.round(inputsWrapper.getBoundingClientRect().width));
  }

  private getCalendarButtonForInput(target: DateRangeInputTarget): HTMLButtonElement | null {
    const fieldHosts = this.elementRef.nativeElement.querySelectorAll("rte-datepicker-segmented-field");
    const fieldIndex = target === "start" ? 0 : 1;
    const fieldHost = fieldHosts[fieldIndex];
    if (!fieldHost) {
      return null;
    }
    const calendarButtonAriaLabel =
      target === "start" ? this.startCalendarButtonAriaLabel() : this.endCalendarButtonAriaLabel();
    return fieldHost.querySelector(`button[aria-label="${calendarButtonAriaLabel}"]`) as HTMLButtonElement | null;
  }

  private pickerConstraints(): DatepickerDisabledConstraints {
    return {
      minDate: this.minDate(),
      maxDate: this.maxDate(),
      disabledDates: this.disabledDates(),
    };
  }

  private normalizeRangeBound(value: DateRangePickerValue): DateRangeBound {
    if (value === null) {
      return [null, null];
    }
    const [start, end] = value;
    return [start ? normalizeDate(start) : null, end ? normalizeDate(end) : null];
  }

  private syncTextValuesFromRange(range: DateRangeBound): void {
    const [start, end] = range;
    this.textValueStart.set(start ? formatDate(start) : "");
    this.textValueEnd.set(end ? formatDate(end) : "");
  }

  private applyStateWhenMenuOpens(): void {
    const committed = this.selectedRange();
    this.committedSnapshot.set(committed);
    this.pendingRange.set(committed);
    this.hasPendingChanges.set(false);

    const [start, end] = committed;
    const anchorDate = start ?? end ?? new Date();
    this.viewDate.set(startOfMonth(anchorDate));
    this.menuInitialActiveDate.set(start ?? end);
    this.menuFocusSessionId.update((sessionId) => sessionId + 1);
    this.monthNavigationAnchorDay.set(getDayOfMonthOrNull(start ?? end));

    if (start !== null && end === null) {
      this.selectionMode.set("end");
    } else {
      this.selectionMode.set(this.activeInput() === "end" ? "end" : "start");
    }
  }

  private restoreCommittedRangeToFields(): void {
    const snapshot = this.committedSnapshot();
    this.pendingRange.set(snapshot);
    this.selectedRange.set(snapshot);
    this.syncTextValuesFromRange(snapshot);
    this.hasPendingChanges.set(false);
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
    const [start, end] = this.pendingRange();
    const nextStart = this.selectionMode() === "start" ? projectedDate : start;
    const nextRange: DateRangeBound = [nextStart, end];
    this.pendingRange.set(nextRange);
    this.menuInitialActiveDate.set(projectedDate);
    this.menuFocusSessionId.update((sessionId) => sessionId + 1);
    if (this.hasActions()) {
      this.syncTextValuesFromRange(nextRange);
    }
  }

  writeValue(value: DateRangePickerValue): void {
    const range = this.normalizeRangeBound(value);
    this.selectedRange.set(range);
    this.pendingRange.set(range);
    this.committedSnapshot.set(range);
    const [start, end] = range;
    this.viewDate.set(start ?? end ?? new Date());
    this.syncTextValuesFromRange(range);
    this.monthNavigationAnchorDay.set(getDayOfMonthOrNull(start ?? end));
  }

  registerOnChange(fn: (value: DateRangePickerValue) => void): void {
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
    if (this.hasActions() && this.hasPendingChanges()) {
      this.restoreCommittedRangeToFields();
    }
    this.onTouched();
  }

  onInputsGroupFocusIn(event: FocusEvent): void {
    this.isInputsFocused.set(true);
    this.updateActiveInputFromFocusTarget(event.target);
  }

  onInputsGroupFocusOut(event: FocusEvent): void {
    const group = event.currentTarget;
    const nextFocus = event.relatedTarget;
    if (group instanceof HTMLElement && nextFocus instanceof Node && group.contains(nextFocus)) {
      return;
    }
    this.isInputsFocused.set(false);
  }

  onStartInputValueChange(value: string): void {
    this.applyBoundTextInputChange("start", value);
  }

  onEndInputValueChange(value: string): void {
    this.applyBoundTextInputChange("end", value);
  }

  private applyBoundTextInputChange(bound: DateRangeInputTarget, rawValue: string): void {
    if (this.readOnly() || this.isDisabled()) {
      return;
    }

    const result = applyDatepickerTextInputChange({
      rawValue,
      constraints: this.pickerConstraints(),
    });

    if (bound === "start") {
      this.textValueStart.set(result.maskedValue);
    } else {
      this.textValueEnd.set(result.maskedValue);
    }

    const current = this.selectedRange();

    if (result.outcome === "committed") {
      const nextRange: DateRangeBound = bound === "start" ? [result.date, current[1]] : [current[0], result.date];
      this.selectedRange.set(nextRange);
      this.pendingRange.set(nextRange);
      this.committedSnapshot.set(nextRange);
      if (bound === "start") {
        this.viewDate.set(result.date);
        this.monthNavigationAnchorDay.set(result.monthAnchorDay);
      }
      this.onChange(nextRange);
      this.valueChange.emit(nextRange);
      return;
    }

    if (result.outcome === "cleared") {
      const nextRange: DateRangeBound = bound === "start" ? [null, current[1]] : [current[0], null];
      this.selectedRange.set(nextRange);
      this.pendingRange.set(nextRange);
      this.committedSnapshot.set(nextRange);
      if (bound === "start") {
        this.monthNavigationAnchorDay.set(null);
      }
      this.onChange(nextRange);
      this.valueChange.emit(nextRange);
    }
  }

  private openMenuForInput(target: DateRangeInputTarget): void {
    this.menuOpenedFromInput = target;
    this.activeInput.set(target);
    this.selectionMode.set(target === "end" ? "end" : "start");
    this.syncDropdownWidthFromInputsWrapper();
    this.isOpen.set(true);
  }

  private updateActiveInputFromFocusTarget(focusTarget: EventTarget | null): void {
    if (!(focusTarget instanceof Node)) {
      return;
    }
    const fieldHosts = this.elementRef.nativeElement.querySelectorAll("rte-datepicker-segmented-field");
    const startFieldHost = fieldHosts[0];
    const endFieldHost = fieldHosts[1];
    if (startFieldHost?.contains(focusTarget)) {
      this.activeInput.set("start");
      return;
    }
    if (endFieldHost?.contains(focusTarget)) {
      this.activeInput.set("end");
    }
  }

  onStartCalendarIconTriggered(event: MouseEvent | KeyboardEvent): void {
    if (this.readOnly() || this.isDisabled()) {
      return;
    }
    if (event instanceof KeyboardEvent && ![ENTER_KEY, SPACE_KEY].includes(event.key)) {
      return;
    }
    if (event instanceof KeyboardEvent) {
      event.preventDefault();
    }
    this.openMenuForInput("start");
  }

  onEndCalendarIconTriggered(event: MouseEvent | KeyboardEvent): void {
    if (this.readOnly() || this.isDisabled()) {
      return;
    }
    if (event instanceof KeyboardEvent && ![ENTER_KEY, SPACE_KEY].includes(event.key)) {
      return;
    }
    if (event instanceof KeyboardEvent) {
      event.preventDefault();
    }
    this.openMenuForInput("end");
  }

  onSegmentedControlClicked(): void {
    if (!this.isOpen()) {
      return;
    }
    this.restoreCommittedRangeToFields();
    this.calendarType.set(DATEPICKER_DEFAULT_CALENDAR_TYPE);
    this.isOpen.set(false);
  }

  onClickedOutside(): void {
    this.restoreCommittedRangeToFields();
    this.calendarType.set(DATEPICKER_DEFAULT_CALENDAR_TYPE);
    this.isOpen.set(false);
  }

  onClosedDropdown(): void {
    this.isOpen.set(false);
    this.calendarType.set(DATEPICKER_DEFAULT_CALENDAR_TYPE);
  }

  onDismiss(): void {
    this.restoreCommittedRangeToFields();
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

    const currentPending = this.pendingRange();

    if (this.selectionMode() === "start") {
      const nextRange: DateRangeBound = [normalized, null];
      this.pendingRange.set(nextRange);
      this.selectionMode.set("end");
      this.syncTextValuesFromRange(nextRange);
      if (this.hasActions()) {
        this.hasPendingChanges.set(true);
        return;
      }
      this.selectedRange.set(nextRange);
      this.onChange(nextRange);
      this.valueChange.emit(nextRange);
      return;
    }

    const startDate = currentPending[0];
    if (startDate && normalized < startDate) {
      const resetRange: DateRangeBound = [normalized, null];
      this.pendingRange.set(resetRange);
      this.syncTextValuesFromRange(resetRange);
      if (this.hasActions()) {
        this.hasPendingChanges.set(true);
        return;
      }
      this.selectedRange.set(resetRange);
      this.onChange(resetRange);
      this.valueChange.emit(resetRange);
      return;
    }

    const completedRange: DateRangeBound = [startDate, normalized];
    this.pendingRange.set(completedRange);
    this.selectionMode.set("start");
    this.syncTextValuesFromRange(completedRange);

    if (!this.hasActions()) {
      this.selectedRange.set(completedRange);
      this.committedSnapshot.set(completedRange);
      this.onChange(completedRange);
      this.valueChange.emit(completedRange);
      this.calendarType.set(DATEPICKER_DEFAULT_CALENDAR_TYPE);
      this.isOpen.set(false);
      return;
    }

    this.hasPendingChanges.set(true);
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
    this.restoreCommittedRangeToFields();
    this.calendarType.set(DATEPICKER_DEFAULT_CALENDAR_TYPE);
    this.isOpen.set(false);
  }

  onConfirm(): void {
    const confirmed = this.pendingRange();
    this.selectedRange.set(confirmed);
    this.committedSnapshot.set(confirmed);
    this.syncTextValuesFromRange(confirmed);
    this.hasPendingChanges.set(false);
    this.onChange(confirmed);
    this.valueChange.emit(confirmed);
    this.calendarType.set(DATEPICKER_DEFAULT_CALENDAR_TYPE);
    this.isOpen.set(false);
  }
}
