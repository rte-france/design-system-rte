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
  readonly disabledDate = input<((date: Date) => boolean) | undefined>(undefined);
  readonly locale = input<string>("fr-FR");

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
          const trimmedText = this.textValue().trim();
          const parsedFromField = trimmedText.length > 0 ? parseDate(trimmedText) : null;
          const parsedNormalized = parsedFromField ? startOfDay(parsedFromField) : null;
          const isParsedUsable =
            parsedNormalized !== null &&
            !isDateDisabled({
              date: parsedNormalized,
              minDate: this.minDate(),
              maxDate: this.maxDate(),
              disabledDate: this.disabledDate(),
            });

          let viewDateForGrid = this.viewDate();
          let pendingForMenu: Date | null = null;

          if (isParsedUsable && parsedNormalized) {
            pendingForMenu = parsedNormalized;
          } else {
            viewDateForGrid = new Date();
            this.viewDate.set(viewDateForGrid);
          }

          const dayCells = buildDayGrid({
            viewDate: viewDateForGrid,
            selectedDate: pendingForMenu,
            minDate: this.minDate(),
            maxDate: this.maxDate(),
            disabledDate: this.disabledDate(),
          });
          const resolved = resolveInitialCalendarDay({
            pendingDate: pendingForMenu,
            selectedDate: pendingForMenu,
            dayCells,
          });
          this.menuInitialActiveDate.set(resolved);
          this.menuFocusSessionId.update((value) => value + 1);
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
          this.focusTrapService.activate(menuHost, {
            getOrderedFocusables: () =>
              this.datepickerMenuService.collectDatepickerMenuTabOrder(menuHost, calendarType),
            initialFocusIndex: 0,
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

  writeValue(value: Date | null): void {
    this.selectedDate.set(value);
    this.pendingDate.set(value);
    this.viewDate.set(value ?? new Date());
    this.textValue.set(value ? formatDate(value) : "");
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
      if (
        isDateDisabled({
          date: normalized,
          minDate: this.minDate(),
          maxDate: this.maxDate(),
          disabledDate: this.disabledDate(),
        })
      ) {
        return;
      }
      this.pendingDate.set(normalized);
      this.selectedDate.set(normalized);
      this.viewDate.set(normalized);
      this.onChange(normalized);
      this.valueChange.emit(normalized);
    } else if (masked.length === 0) {
      this.pendingDate.set(null);
      this.selectedDate.set(null);
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

  onClickedOutside(): void {
    this.calendarType.set("day");
    this.isOpen.set(false);
  }

  onClosedDropdown(): void {
    this.isOpen.set(false);
    this.calendarType.set("day");
  }

  onDismiss(): void {
    this.pendingDate.set(this.selectedDate());
    this.calendarType.set("day");
    this.isOpen.set(false);
  }

  onMenuDateSelected(date: Date): void {
    this.pendingDate.set(date);
    this.textValue.set(formatDate(date));
  }

  onMenuViewDateChanged(date: Date): void {
    this.viewDate.set(date);
  }

  onMenuCalendarTypeChange(type: DatepickerCalendarType): void {
    this.calendarType.set(type);
  }

  onCancel(): void {
    this.pendingDate.set(null);
    this.selectedDate.set(null);
    this.textValue.set("");
    this.onChange(null);
    this.valueChange.emit(null);
    this.calendarType.set("day");
    this.isOpen.set(false);
  }

  onConfirm(): void {
    const date = this.pendingDate();
    this.selectedDate.set(date);
    this.onChange(date);
    this.valueChange.emit(date);
    this.calendarType.set("day");
    this.isOpen.set(false);
  }
}
