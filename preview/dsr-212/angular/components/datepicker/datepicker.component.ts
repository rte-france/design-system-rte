import { CommonModule } from "@angular/common";
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  effect,
  inject,
  input,
  output,
  signal,
  viewChild,
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { waitForNextFrame } from "@design-system-rte/core/common/animation";
import { ESCAPE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { FocusTrapService } from "../../services/focus-trap.service";
import { DropdownModule } from "../dropdown";
import { BaseInputComponent } from "../input/base-input/base-input.component";

import { DatepickerMenuComponent } from "./datepicker-menu/datepicker-menu.component";
import { DatepickerCalendarType, formathDate, maskDateInput, parseDate } from "./datepicker.utils";

@Component({
  selector: "rte-datepicker",
  imports: [CommonModule, DropdownModule, BaseInputComponent, DatepickerMenuComponent],
  standalone: true,
  templateUrl: "./datepicker.component.html",
  styleUrl: "./datepicker.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
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
  readonly inputRootRef = viewChild<ElementRef<HTMLElement>>("inputRootRef");

  readonly isOpen = signal(false);
  readonly calendarType = signal<DatepickerCalendarType>("day");

  readonly selectedDate = signal<Date | null>(null);
  readonly pendingDate = signal<Date | null>(null);
  readonly viewDate = signal<Date>(new Date());

  readonly textValue = signal<string>("");

  readonly isDisabled = computed(() => ["disabled"].includes(this.interactionState()));
  readonly isReadOnly = computed(() => ["readOnly"].includes(this.interactionState()));
  readonly isError = computed(() => ["error"].includes(this.interactionState()));

  readonly calendarButtonAriaLabel = computed(() => {
    const selectedDate = this.selectedDate();
    return selectedDate ? `Changer la date, ${formathDate(selectedDate)}` : "Ouvrir le calendrier";
  });

  private onTouched: () => void = () => {};
  private onChange: (value: Date | null) => void = () => {};
  private readonly focusTrapService = inject(FocusTrapService);

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
        if (open) {
          waitForNextFrame(() => {
            const overlayRoot = document.getElementById("overlay-root");
            const menuElement = overlayRoot?.querySelector("rte-datepicker-menu") as HTMLElement | null;
            if (menuElement) {
              this.focusTrapService.activate(menuElement);
              waitForNextFrame(() => {
                const activeGridCell = menuElement.querySelector(
                  '.day-cell[tabindex="0"]:not([disabled])',
                ) as HTMLButtonElement | null;
                activeGridCell?.focus();
              });
            }
          });
        } else {
          this.focusTrapService.deactivate();
        }
      },
      { allowSignalWrites: true },
    );
  }

  ngAfterViewInit(): void {
    const rootElement = this.inputRootRef()?.nativeElement;
    if (rootElement) {
      this.dropdownWidth.set(rootElement.getBoundingClientRect().width);
    }
  }

  writeValue(value: Date | null): void {
    this.selectedDate.set(value);
    this.pendingDate.set(value);
    this.viewDate.set(value ?? new Date());
    this.textValue.set(value ? formathDate(value) : "");
  }

  registerOnChange(fn: (value: Date | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.isOpen.set(false);
    }
  }

  onInputFocused(): void {
    this.onTouched();
  }

  onInputValueChange(value: string): void {
    if (this.isReadOnly() || this.isDisabled()) {
      return;
    }

    const masked = maskDateInput(value);
    this.textValue.set(masked);

    const parsed = parseDate(masked);
    if (parsed) {
      this.pendingDate.set(parsed);
      this.selectedDate.set(parsed);
      this.viewDate.set(parsed);
      this.onChange(parsed);
      this.valueChange.emit(parsed);
    } else if (masked.length === 0) {
      this.pendingDate.set(null);
      this.selectedDate.set(null);
      this.onChange(null);
      this.valueChange.emit(null);
    }
  }

  onCalendarIconTriggered(): void {
    if (this.isReadOnly() || this.isDisabled()) {
      return;
    }
    this.isOpen.set(true);
  }

  onClickedOutside(): void {
    this.isOpen.set(false);
  }

  onClosedDropdown(): void {
    this.isOpen.set(false);
    this.calendarType.set("day");
  }

  onDismiss(): void {
    this.pendingDate.set(this.selectedDate());
    this.isOpen.set(false);
  }

  onCalendarKeyDown(event: KeyboardEvent): void {
    if (event.key === ESCAPE_KEY) {
      event.preventDefault();
      event.stopPropagation();
      this.isOpen.set(false);
    }
  }

  onMenuDateSelected(date: Date): void {
    this.pendingDate.set(date);
    this.textValue.set(formathDate(date));
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
    this.isOpen.set(false);
  }

  onConfirm(): void {
    const date = this.pendingDate();
    this.selectedDate.set(date);
    this.onChange(date);
    this.valueChange.emit(date);
    this.isOpen.set(false);
  }
}
