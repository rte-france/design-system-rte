import { CommonModule } from "@angular/common";
import {
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
  untracked,
  viewChild,
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { waitForNextFrame } from "@design-system-rte/core/common/animation";
import {
  DEFAULT_TIME_INPUT_VALUE,
  TIME_PICKER_WARN_ERROR_WITHOUT_ASSISTIVE_TEXT,
  TIME_PICKER_WARN_READ_ONLY_INCOMPLETE_VALUE,
  TIME_SEGMENT_MAX_FIRST_DIGIT,
  TIME_SEGMENT_MAX_VALUE,
  TIME_SEGMENT_MIN_VALUE,
  TIME_SEGMENT_ORDER,
  TimeSegmentEnum,
} from "@design-system-rte/core/components/timepicker/timepicker.constants";
import type { TimeFormat } from "@design-system-rte/core/components/timepicker/timepicker.interface";
import {
  buildDisplayValue,
  canSwitchToNextSegment,
  computeTimeSegmentRanges,
  formatNumberToDigitValue,
  getDecreasedValueWithBounds,
  getIncreasedValueWithBounds,
  getNextSegment,
  getPrevSegment,
} from "@design-system-rte/core/components/timepicker/timepicker.utils";
import {
  ARROW_DOWN_KEY,
  ARROW_LEFT_KEY,
  ARROW_RIGHT_KEY,
  ARROW_UP_KEY,
  BACKSPACE_KEY,
  DELETE_KEY,
  ENTER_KEY,
  SPACE_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { DropdownService } from "../../services/dropdown.service";
import { FocusTrapService } from "../../services/focus-trap.service";
import { AssistiveTextComponent } from "../assistive-text/assistive-text.component";
import { DropdownMenuBodyDirective } from "../dropdown/dropdown-menu/dropdown-menu-body.directive";
import { DropdownMenuComponent } from "../dropdown/dropdown-menu/dropdown-menu.component";
import { DropdownTriggerDirective } from "../dropdown/dropdown-trigger/dropdown-trigger.directive";
import { DropdownDirective } from "../dropdown/dropdown.directive";
import { IconComponent } from "../icon/icon.component";
import { RequiredIndicatorComponent } from "../input/required-indicator/required-indicator.component";

import { TimePickerMenuComponent } from "./time-picker-menu/time-picker-menu.component";

const [HOURS_SEGMENT, MINUTES_SEGMENT] = TIME_SEGMENT_ORDER;

@Component({
  selector: "rte-time-picker",
  imports: [
    CommonModule,
    IconComponent,
    AssistiveTextComponent,
    DropdownDirective,
    DropdownTriggerDirective,
    DropdownMenuComponent,
    DropdownMenuBodyDirective,
    TimePickerMenuComponent,
    RequiredIndicatorComponent,
  ],
  templateUrl: "./time-picker.component.html",
  styleUrl: "./time-picker.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TimePickerComponent,
      multi: true,
    },
  ],
})
export class TimePickerComponent implements ControlValueAccessor {
  readonly id = input.required<string>();
  readonly labelId = input<string>();
  readonly label = input.required<string>();
  readonly value = input<TimeFormat | undefined>(undefined);
  readonly showLabel = input<boolean>(true);
  readonly required = input<boolean>(false);
  readonly showLabelRequirement = input<boolean>(false);
  readonly readOnly = input<boolean>(false);
  readonly assistiveTextLabel = input<string>();
  readonly assistiveAppearance = input<"description" | "error" | "success" | "link">("description");
  readonly showAssistiveIcon = input<boolean>(false);
  readonly assistiveTextLink = input<string>();
  readonly isError = input<boolean>(false);
  readonly disabled = input<boolean>(false);
  readonly isHourReadOnly = input<boolean>(false);
  readonly isMinuteReadOnly = input<boolean>(false);
  readonly isSecondReadOnly = input<boolean>(false);
  readonly hourIncrement = input<number>(1);
  readonly minuteIncrement = input<number>(1);
  readonly secondIncrement = input<number>(1);

  readonly valueChange = output<TimeFormat>();

  readonly pickerRef = viewChild<ElementRef<HTMLElement>>("pickerRef");
  readonly pickerInputRef = viewChild<ElementRef<HTMLInputElement>>("pickerInput");

  readonly internalTimeValue = signal<TimeFormat>({ ...DEFAULT_TIME_INPUT_VALUE });
  readonly activeTimeSegment = signal<TimeSegmentEnum>(TimeSegmentEnum.HOURS);
  readonly isPanelOpen = signal<boolean>(false);
  readonly isFocused = signal<boolean>(false);
  readonly pickerDropdownWidth = signal<number | null>(null);

  readonly displayValue = computed(() => buildDisplayValue(this.internalTimeValue(), this.activeTimeSegment()));
  readonly dropdownMenuId = computed(() => `time_picker_${this.id()}`);

  private readonly disabledFromControl = signal(false);

  readonly isEffectivelyDisabled = computed(() => this.disabled() || this.disabledFromControl());

  readonly shouldRender = computed(() => {
    const timeValue = this.internalTimeValue();
    if (this.readOnly() && (timeValue.hh === "" || timeValue.mm === "" || timeValue.ss === "")) {
      console.warn(TIME_PICKER_WARN_READ_ONLY_INCOMPLETE_VALUE);
      return false;
    }
    if (this.isError() && !this.assistiveTextLabel()) {
      console.warn(TIME_PICKER_WARN_ERROR_WITHOUT_ASSISTIVE_TEXT);
      return false;
    }
    return true;
  });

  readonly canShowFocusedOutline = computed(
    () => !this.isEffectivelyDisabled() && !this.readOnly() && this.isFocused(),
  );

  private readonly numberPattern = /^\d*$/;
  private onChangeCallback: ((value: TimeFormat) => void) | undefined;
  private onTouchedCallback: (() => void) | undefined;
  private timePickerMenuTrapWasActive = false;

  private readonly focusTrap = inject(FocusTrapService);
  private readonly dropdownService = inject(DropdownService);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => this.applyValueInputToInternalState());

    effect(() => {
      const segment = this.activeTimeSegment();
      const timeValue = this.internalTimeValue();
      void segment;
      void timeValue;
      this.scheduleSelectActiveSegment();
    });

    effect(() => {
      const open = this.isPanelOpen();
      if (!open) {
        const shouldMoveFocusToOpenTrigger = this.timePickerMenuTrapWasActive;
        this.timePickerMenuTrapWasActive = false;
        this.focusTrap.deactivate();
        if (shouldMoveFocusToOpenTrigger) {
          waitForNextFrame(() => {
            this.focusOpenMenuTriggerButton();
          });
        }
        return;
      }
      waitForNextFrame(() => {
        const menuElement = document.querySelector(`[data-menu-id="${this.dropdownMenuId()}"]`) as HTMLElement | null;
        if (menuElement && this.isPanelOpen()) {
          this.timePickerMenuTrapWasActive = true;
          this.focusTrap.activate(menuElement, {
            restoreFocusTo: this.getOpenMenuTriggerButton(),
          });
        }
      });
    });

    const dropdownStateSubscription = this.dropdownService.state$.subscribe((state) => {
      if (state === null && this.isPanelOpen()) {
        this.isPanelOpen.set(false);
        this.isFocused.set(false);
      }
    });

    this.destroyRef.onDestroy(() => {
      dropdownStateSubscription.unsubscribe();
      this.closePanel();
    });
  }

  writeValue(value: TimeFormat | null): void {
    if (value) {
      this.internalTimeValue.set({ hh: value.hh, mm: value.mm, ss: value.ss });
    } else {
      this.internalTimeValue.set({ ...DEFAULT_TIME_INPUT_VALUE });
    }
  }

  private applyValueInputToInternalState(): void {
    const external = this.value();
    if (external === undefined || external === null) {
      return;
    }
    const current = untracked(() => this.internalTimeValue());
    if (this.timeFormatsEqual(external, current)) {
      return;
    }
    this.internalTimeValue.set({
      hh: external.hh,
      mm: external.mm,
      ss: external.ss,
    });
  }

  registerOnChange(callback: (value: TimeFormat) => void): void {
    this.onChangeCallback = callback;
  }

  registerOnTouched(callback: () => void): void {
    this.onTouchedCallback = callback;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabledFromControl.set(isDisabled);
  }

  onPickerShellClick(): void {
    if (!this.canInteractWithPicker()) {
      return;
    }
    this.focusMainInput();
  }

  onMainInputFocus(): void {
    if (!this.isEffectivelyDisabled() && !this.readOnly()) {
      this.isFocused.set(true);
    }
  }

  onMainInputBlur(event: FocusEvent): void {
    const relatedTarget = event.relatedTarget as Node | null;
    if (this.isFocusMovingIntoDropdownMenu(relatedTarget)) {
      return;
    }
    this.isFocused.set(false);
    this.onTouchedCallback?.();
  }

  handleDropdownClickedOutside(): void {
    this.closePanel();
  }

  onPickerDropdownTriggered(event: Event): void {
    const target = event.target as HTMLElement | null;
    if (!target?.closest(".rte-base-input-picker-button")) {
      return;
    }
    if (!this.canInteractWithPicker()) {
      return;
    }
    this.togglePanel();
  }

  onPickerDropdownKeydown(event: KeyboardEvent): void {
    const target = event.target as HTMLElement | null;
    if (!target?.closest(".rte-base-input-picker-button")) {
      return;
    }
    if (!this.canInteractWithPicker()) {
      return;
    }
    if ([SPACE_KEY, ENTER_KEY].includes(event.key)) {
      event.preventDefault();
      this.togglePanel();
    }
  }

  onMainInputMouseup(): void {
    if (this.isPanelOpen()) {
      this.closePanel();
    }
    const inputElement = this.pickerInputRef()?.nativeElement;
    if (!inputElement) {
      return;
    }
    const currentCursorPosition = inputElement.selectionStart ?? 0;
    const ranges = computeTimeSegmentRanges(this.internalTimeValue());
    const endIndex = 1;
    if (currentCursorPosition <= ranges[HOURS_SEGMENT][endIndex]) {
      this.activeTimeSegment.set(TimeSegmentEnum.HOURS);
    } else if (currentCursorPosition <= ranges[MINUTES_SEGMENT][endIndex]) {
      this.activeTimeSegment.set(TimeSegmentEnum.MINUTES);
    } else {
      this.activeTimeSegment.set(TimeSegmentEnum.SECONDS);
    }
  }

  onMainInputKeydown(event: KeyboardEvent): void {
    if (!this.canInteractWithPicker()) {
      return;
    }
    const key = event.key;
    if ([ARROW_UP_KEY, ARROW_DOWN_KEY, ARROW_LEFT_KEY, ARROW_RIGHT_KEY, BACKSPACE_KEY, DELETE_KEY].includes(key)) {
      event.preventDefault();
      this.handleFunctionKey(key);
      return;
    }
    if (!this.numberPattern.test(key)) {
      if (key.length === 1) {
        event.preventDefault();
      }
      this.scheduleSelectActiveSegment();
      return;
    }
    event.preventDefault();
    if (this.isCurrentSegmentReadOnly()) {
      this.scheduleSelectActiveSegment();
      return;
    }
    const activeSegment = this.activeTimeSegment();
    const currentActiveTimeSegmentValue = this.internalTimeValue()[activeSegment];
    if (currentActiveTimeSegmentValue.length >= 2) {
      this.modifyCurrentSegmentValue(currentActiveTimeSegmentValue, formatNumberToDigitValue(Number(key)));
    } else {
      const next = currentActiveTimeSegmentValue + key;
      const maxFirstDigit = TIME_SEGMENT_MAX_FIRST_DIGIT[activeSegment];
      if (currentActiveTimeSegmentValue.length === 0 && Number(key) > maxFirstDigit) {
        this.updateTimeSegment(activeSegment, formatNumberToDigitValue(Number(key)));
        this.moveToNextSegment();
      } else if (next.length === 2) {
        const clamped = formatNumberToDigitValue(Math.min(Number(next), TIME_SEGMENT_MAX_VALUE[activeSegment]));
        this.updateTimeSegment(activeSegment, clamped);
        this.moveToNextSegment();
      } else {
        this.updateTimeSegment(activeSegment, formatNumberToDigitValue(Number(key)));
      }
    }
  }

  private handleFunctionKey(key: string): void {
    if ([BACKSPACE_KEY, DELETE_KEY].includes(key)) {
      this.handleDeleteSegmentValue();
    } else if (key === ARROW_LEFT_KEY) {
      this.moveToPreviousSegment();
      this.scheduleSelectionRangeForSegment(this.activeTimeSegment());
    } else if (key === ARROW_RIGHT_KEY) {
      if (canSwitchToNextSegment(this.internalTimeValue(), this.activeTimeSegment())) {
        this.moveToNextSegment();
        this.scheduleSelectionRangeForSegment(this.activeTimeSegment());
      }
    }
  }

  private handleDeleteSegmentValue(): void {
    const activeSegment = this.activeTimeSegment();
    if (this.internalTimeValue()[activeSegment] !== "") {
      this.updateTimeSegment(activeSegment, "");
    } else {
      const previous = getPrevSegment(activeSegment);
      if (previous !== activeSegment) {
        this.updateTimeSegment(previous, "");
        this.moveToPreviousSegment();
      }
    }
  }

  private modifyCurrentSegmentValue(currentActiveTimeSegmentValue: string, key: string): void {
    const activeSegment = this.activeTimeSegment();
    const currentTimeSegmentStartIndex = computeTimeSegmentRanges(this.internalTimeValue())[activeSegment][0];
    const inputElement = this.pickerInputRef()?.nativeElement;
    const cursorPos = inputElement?.selectionStart ?? 0;
    const positionInSegment = cursorPos - currentTimeSegmentStartIndex;
    if (positionInSegment === 0) {
      if (currentActiveTimeSegmentValue[0] === "0") {
        const newValue = currentActiveTimeSegmentValue[1] + key[1];
        const formattedDigitValue = formatNumberToDigitValue(
          Math.min(Number(newValue), TIME_SEGMENT_MAX_VALUE[activeSegment]),
        );
        this.updateTimeSegment(activeSegment, formattedDigitValue);
        this.moveToNextSegment();
      } else {
        this.updateTimeSegment(activeSegment, key);
      }
    } else {
      const newValue = Number(currentActiveTimeSegmentValue[0] + key);
      const formattedDigitValue = formatNumberToDigitValue(Math.min(newValue, TIME_SEGMENT_MAX_VALUE[activeSegment]));
      this.updateTimeSegment(activeSegment, formattedDigitValue);
      this.moveToNextSegment();
    }
  }

  private isCurrentSegmentReadOnly(): boolean {
    const activeSegment = this.activeTimeSegment();
    if (activeSegment === TimeSegmentEnum.HOURS) {
      return this.isHourReadOnly();
    }
    if (activeSegment === TimeSegmentEnum.MINUTES) {
      return this.isMinuteReadOnly();
    }
    return this.isSecondReadOnly();
  }

  private moveToNextSegment(): void {
    this.activeTimeSegment.set(getNextSegment(this.activeTimeSegment()));
  }

  private moveToPreviousSegment(): void {
    this.activeTimeSegment.set(getPrevSegment(this.activeTimeSegment()));
  }

  private scheduleSelectionRangeForSegment(segment: TimeSegmentEnum): void {
    waitForNextFrame(() => {
      const range = computeTimeSegmentRanges(this.internalTimeValue())[segment];
      this.pickerInputRef()?.nativeElement.setSelectionRange(range[0], range[1]);
    });
  }

  private scheduleSelectActiveSegment(): void {
    waitForNextFrame(() => {
      const range = computeTimeSegmentRanges(this.internalTimeValue())[this.activeTimeSegment()];
      this.pickerInputRef()?.nativeElement.setSelectionRange(range[0], range[1]);
    });
  }

  private updateTimeSegment(segment: TimeSegmentEnum, value: string): void {
    if (value.length > 2 || !this.numberPattern.test(value)) {
      return;
    }
    this.internalTimeValue.update((previous) => ({ ...previous, [segment]: value }));
    this.emitValue(this.internalTimeValue());
  }

  private emitValue(timeFormat: TimeFormat): void {
    this.valueChange.emit(timeFormat);
    this.onChangeCallback?.(timeFormat);
  }

  private togglePanel(): void {
    if (this.isPanelOpen()) {
      this.closePanel();
    } else {
      this.openPanel();
    }
  }

  private focusMainInput(): void {
    if (!this.isEffectivelyDisabled()) {
      this.isFocused.set(true);
      this.pickerInputRef()?.nativeElement.focus();
    }
  }

  private initializeDisplayValueFromTimePickerValue(): void {
    const current = this.internalTimeValue();
    TIME_SEGMENT_ORDER.forEach((segment) => {
      const raw = current[segment];
      const normalized = Number(raw);
      if (Number.isNaN(normalized)) {
        this.updateTimeSegment(segment, formatNumberToDigitValue(0));
      } else {
        this.updateTimeSegment(segment, formatNumberToDigitValue(normalized));
      }
    });
  }

  private openPanel(): void {
    this.dropdownService.closeAllMenus();
    if (!this.isEffectivelyDisabled()) {
      this.isFocused.set(true);
    }
    this.pickerDropdownWidth.set(this.pickerRef()?.nativeElement.offsetWidth ?? null);
    this.isPanelOpen.set(true);
    this.initializeDisplayValueFromTimePickerValue();
  }

  onMenuHoursValueChange(raw: string): void {
    this.updateTimeSegment(TimeSegmentEnum.HOURS, raw);
  }

  onMenuMinutesValueChange(raw: string): void {
    this.updateTimeSegment(TimeSegmentEnum.MINUTES, raw);
  }

  onMenuSecondsValueChange(raw: string): void {
    this.updateTimeSegment(TimeSegmentEnum.SECONDS, raw);
  }

  onKeydownSeconds(event: KeyboardEvent): void {
    const key = event.key;
    if (key === ARROW_UP_KEY) {
      event.preventDefault();
      this.increaseSeconds();
    } else if (key === ARROW_DOWN_KEY) {
      event.preventDefault();
      this.decreaseSeconds();
    }
  }

  onKeydownMinutes(event: KeyboardEvent): void {
    const key = event.key;
    if (key === ARROW_UP_KEY) {
      event.preventDefault();
      this.increaseMinutes();
    } else if (key === ARROW_DOWN_KEY) {
      event.preventDefault();
      this.decreaseMinutes();
    }
  }

  onKeydownHours(event: KeyboardEvent): void {
    const key = event.key;
    if (key === ARROW_UP_KEY) {
      event.preventDefault();
      this.increaseHours();
    } else if (key === ARROW_DOWN_KEY) {
      event.preventDefault();
      this.decreaseHours();
    }
  }

  increaseHours(): void {
    this.adjustSegment(TimeSegmentEnum.HOURS, this.hourIncrement(), 1);
  }

  decreaseHours(): void {
    this.adjustSegment(TimeSegmentEnum.HOURS, this.hourIncrement(), -1);
  }

  increaseMinutes(): void {
    this.adjustSegment(TimeSegmentEnum.MINUTES, this.minuteIncrement(), 1);
  }

  decreaseMinutes(): void {
    this.adjustSegment(TimeSegmentEnum.MINUTES, this.minuteIncrement(), -1);
  }

  increaseSeconds(): void {
    this.adjustSegment(TimeSegmentEnum.SECONDS, this.secondIncrement(), 1);
  }

  decreaseSeconds(): void {
    this.adjustSegment(TimeSegmentEnum.SECONDS, this.secondIncrement(), -1);
  }

  private adjustSegment(segment: TimeSegmentEnum, increment: number, direction: 1 | -1): void {
    const current = this.internalTimeValue()[segment];
    if (direction === 1) {
      if (current === "") {
        this.updateTimeSegment(segment, formatNumberToDigitValue(TIME_SEGMENT_MIN_VALUE));
      } else {
        const next = getIncreasedValueWithBounds(Number(current), TIME_SEGMENT_MAX_VALUE[segment], increment);
        this.updateTimeSegment(segment, next);
      }
    } else {
      const next = getDecreasedValueWithBounds(Number(current), TIME_SEGMENT_MAX_VALUE[segment], increment);
      this.updateTimeSegment(segment, next);
    }
  }

  private closePanel(): void {
    this.dropdownService.closeAllMenus();
    this.isPanelOpen.set(false);
    this.isFocused.set(false);
  }

  private getOpenMenuTriggerButton(): HTMLElement | undefined {
    return this.pickerRef()?.nativeElement.querySelector(".rte-base-input-picker-button") as HTMLElement | undefined;
  }

  private focusOpenMenuTriggerButton(): void {
    this.getOpenMenuTriggerButton()?.focus();
  }

  private isFocusMovingIntoDropdownMenu(relatedTarget: Node | null): boolean {
    if (!relatedTarget || !this.isPanelOpen()) {
      return false;
    }
    const menuHost = document.querySelector(`[data-menu-id="${this.dropdownMenuId()}"]`);
    return menuHost ? menuHost.contains(relatedTarget) : false;
  }

  private canInteractWithPicker(): boolean {
    return !this.isEffectivelyDisabled() && !this.readOnly();
  }

  private timeFormatsEqual(first: TimeFormat | undefined | null, second: TimeFormat): boolean {
    if (!first) {
      return false;
    }
    return first.hh === second.hh && first.mm === second.mm && first.ss === second.ss;
  }
}
