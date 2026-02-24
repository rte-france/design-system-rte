import { CommonModule } from "@angular/common";
import {
  Component,
  input,
  computed,
  output,
  signal,
  viewChild,
  ElementRef,
  ChangeDetectionStrategy,
  AfterViewInit,
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { REQUIREMENT_INDICATOR_VALUE } from "@design-system-rte/core/components/required-indicator/required-indicator.constant";
import {
  SELECT_DROPDOWN_OFFSET,
  THRESHOLD_BOTTOM_POSITION,
} from "@design-system-rte/core/components/select/select.constants";
import { SelectProps } from "@design-system-rte/core/components/select/select.interface";
import { ENTER_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { AssistiveTextComponent } from "../assistive-text/assistive-text.component";
import { BadgeComponent } from "../badge/badge.component";
import { ChipComponent } from "../chip/chip.component";
import { DropdownModule } from "../dropdown";
import { DropdownItemConfig } from "../dropdown/dropdown-item/dropdown-item.component";
import { IconComponent } from "../icon/icon.component";
import { IconButtonComponent } from "../icon-button/icon-button.component";

@Component({
  selector: "rte-select",
  imports: [
    CommonModule,
    IconComponent,
    DropdownModule,
    IconButtonComponent,
    AssistiveTextComponent,
    ChipComponent,
    BadgeComponent,
  ],
  standalone: true,
  templateUrl: "./select.component.html",
  styleUrl: "./select.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SelectComponent,
      multi: true,
    },
  ],
})
export class SelectComponent implements AfterViewInit {
  readonly id = input<string>();
  readonly name = input<string>();
  readonly ariaLabelledby = input<string>();
  readonly label = input<string>();
  readonly labelId = input<string>();
  readonly labelPosition = input<SelectProps["labelPosition"]>("top");
  readonly assistiveTextLabel = input<string>();
  readonly assistiveTextAppearance = input<SelectProps["assistiveAppearance"]>("description");
  readonly assistiveTextLink = input<string>();
  readonly required = input<boolean>(false);
  readonly showLabelRequirement = input<boolean>(false);
  readonly disabled = input<boolean>(false);
  readonly readOnly = input<boolean>(false);
  readonly options = input<SelectProps["options"]>([]);
  readonly isError = input<boolean>(false);
  readonly showAssistiveIcon = input<boolean>(false);
  readonly showResetButton = input<boolean>(false);
  readonly multiple = input<boolean>(false);
  readonly value = input<string | string[]>();
  readonly withSelectAll = input<boolean>(false);
  readonly optionToDisplay = input<SelectProps["optionToDisplay"]>("first-selected");

  readonly selectRef = viewChild<ElementRef<HTMLElement>>("selectRef");
  readonly buttonsContainerRef = viewChild<ElementRef<HTMLElement>>("buttonsContainerRef");

  readonly selectDropdownOffset = SELECT_DROPDOWN_OFFSET;

  readonly clearButton = computed(() => {
    return this.buttonsContainerRef()?.nativeElement.querySelector(
      ".rte-icon-button.clear-button",
    ) as HTMLElement | null;
  });

  readonly dropdownPosition = computed<"bottom" | "top">(() => {
    const selectElement = this.selectRef()?.nativeElement;
    if (selectElement) {
      const rect = selectElement.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      return spaceBelow >= THRESHOLD_BOTTOM_POSITION ? "bottom" : "top";
    }
    return "bottom";
  });

  readonly optionsFormatted = signal<DropdownItemConfig[]>(
    this.options().map(({ value, label }) => ({
      id: value,
      label: label,
      selected: this.isSelected(value),
    })),
  );

  readonly internalValue = signal(this.value());

  readonly requirementIndicatorValue = computed(() =>
    this.required()
      ? this.showLabelRequirement()
        ? REQUIREMENT_INDICATOR_VALUE.required
        : REQUIREMENT_INDICATOR_VALUE.requiredIcon
      : REQUIREMENT_INDICATOR_VALUE.optional,
  );

  readonly valueChange = output<Event>();

  readonly currentOptionLabel = signal(this.getCurrentOptionLabel());

  readonly shouldDisplayClearButton = signal(false);

  readonly shouldDisplayErrorIcon = computed(() => this.isError() && !this.disabled() && !this.readOnly());

  readonly isActive = signal(false);

  readonly selectWidth = computed(() => {
    const nativeElement = this.selectRef()?.nativeElement;
    if (nativeElement) {
      return nativeElement.getBoundingClientRect().width;
    }
    return null;
  });

  ngAfterViewInit() {
    this.regenerateOptionsFormatted();
    this.computeShouldDisplayClearButton();
  }

  areAllOptionsSelected(): boolean {
    const currentValue = this.internalValue();
    if (this.multiple() && currentValue && Array.isArray(currentValue)) {
      return this.options().every((option) => currentValue.includes(option.value));
    }
    return false;
  }

  handleOnClickTrigger() {
    if (this.readOnly() || this.disabled()) {
      return;
    }
    this.toggleDropdown();
  }

  handleOnKeyDownTrigger(event: KeyboardEvent) {
    if (this.readOnly() || this.disabled()) {
      return;
    }
    if (this.shouldDisplayClearButton()) {
      const clearButton = this.buttonsContainerRef()?.nativeElement.children[0].children[0];
      const isClearButtonFocused = document.activeElement === clearButton;
      if (isClearButtonFocused && (event.key === SPACE_KEY || event.key === ENTER_KEY)) {
        this.clearSelection();
        return;
      }
    }

    if (event.key === SPACE_KEY || event.key === ENTER_KEY) {
      this.toggleDropdown();
    }
  }

  handleOnCloseChip(event: Event, label: string) {
    const option = this.options().find((opt) => opt.label === label);
    const value = option?.value;
    console.log(value);
    event.stopPropagation();
    if (this.readOnly() || this.disabled()) {
      return;
    }

    if (this.multiple() && value) {
      const currentValue = this.internalValue();
      if (currentValue && Array.isArray(currentValue)) {
        const valuesArray = currentValue;
        const valueIndex = valuesArray.indexOf(value);
        if (valueIndex > -1) {
          valuesArray.splice(valueIndex, 1);
          this.internalValue.set(valuesArray);
          this.regenerateOptionsFormatted();
          const event = new CustomEvent<{ target: { value: string } }>("change", {
            bubbles: true,
            detail: { target: { value: value } },
          });
          this.valueChange.emit(event);
          this.currentOptionLabel.set(this.getCurrentOptionLabel());
          this.computeShouldDisplayClearButton();
        }
      }
    }
  }

  handleOnClickClearButton(event: Event): void {
    if (this.readOnly() || this.disabled()) {
      return;
    }
    event.stopPropagation();
    this.clearSelection();
  }

  handleOnClickItem(id: string) {
    if (this.readOnly() || this.disabled()) {
      return;
    }

    if (this.multiple()) {
      if (id === "select-all") {
        if (this.areAllOptionsSelected()) {
          this.internalValue.set([]);
        } else {
          this.internalValue.set(this.options().map((option) => option.value));
        }
        this.regenerateOptionsFormatted();
      } else {
        const currentValue = this.internalValue();
        if (currentValue === undefined) {
          this.internalValue.set([id]);
        } else {
          if (Array.isArray(currentValue)) {
            const valuesArray = currentValue;
            const valueIndex = valuesArray.indexOf(id);
            if (valueIndex > -1) {
              valuesArray.splice(valueIndex, 1);
            } else {
              valuesArray.push(id);
            }
            console.log("Updated values array after click:", valuesArray);
            this.internalValue.set(valuesArray);
            console.log("this.internalValue:", this.internalValue());
          }
        }
      }
    } else {
      this.internalValue.set(id);
      this.isActive.set(!this.isActive());
    }
    this.regenerateOptionsFormatted();
    const event = new CustomEvent<{ target: { value: string } }>("change", {
      bubbles: true,
      detail: { target: { value: id } },
    });
    this.valueChange.emit(event);
    this.currentOptionLabel.set(this.getCurrentOptionLabel());
    this.computeShouldDisplayClearButton();
    this.selectRef()?.nativeElement.focus();
  }

  handleOnClosingDropdown() {
    this.isActive.set(false);
  }

  handleOnClickOutside() {
    this.isActive.set(false);
  }

  getCurrentOptionLabel(): string | undefined {
    const internalValue = this.internalValue();
    console.log({ internalValue });
    if (internalValue) {
      if (this.multiple()) {
        switch (this.optionToDisplay()) {
          case "first-selected":
            return this.options().find((option) => option.value === internalValue[0])?.label;
          case "last-selected":
            return this.options().find((option) => option.value === internalValue[internalValue.length - 1])?.label;
          default:
            return this.options().find((option) => internalValue.includes(option.value))?.label;
        }
      }
      return this.options().find((option) => option.value === internalValue)?.label;
    }
    return undefined;
  }

  private toggleDropdown() {
    this.isActive.set(!this.isActive());
    if (this.isActive()) {
      this.selectRef()?.nativeElement.dispatchEvent(new Event("openDropdown"));
    } else {
      this.selectRef()?.nativeElement.dispatchEvent(new Event("closeDropdown"));
    }
  }

  private clearSelection() {
    if (!this.multiple()) {
      this.internalValue.set("");
    } else {
      console.log("Clearing selection. Previous value:", this.internalValue());
      this.internalValue.set([]);
    }
    console.log("Selection cleared. Current value:", this.internalValue());
    this.isActive.set(false);
    const event = new CustomEvent<{ target: { value: string } }>("change", {
      bubbles: true,
      detail: { target: { value: "select-all" } },
    });
    this.valueChange.emit(event);
    this.selectRef()?.nativeElement.dispatchEvent(new Event("clearContent"));
    this.regenerateOptionsFormatted();
    this.currentOptionLabel.set(this.getCurrentOptionLabel());
    this.computeShouldDisplayClearButton();
  }

  private regenerateOptionsFormatted() {
    if (this.withSelectAll()) {
      this.optionsFormatted.set([
        {
          id: "select-all",
          label: "Select All",
          selected: this.areAllOptionsSelected(),
          hasCheckbox: true,
          hasSeparator: true,
          isIndeterminate:
            this.options().some((option) => this.isSelected(option.value)) && !this.areAllOptionsSelected(),
        },
        ...this.options().map(({ value, label }) => ({
          id: value,
          label: label,
          selected: this.isSelected(value),
          hasCheckbox: this.multiple(),
        })),
      ]);
    } else {
      this.optionsFormatted.set(
        this.options().map(({ value, label }) => ({
          id: value,
          value: value,
          label: label,
          selected: this.isSelected(value),
          hasCheckbox: this.multiple(),
          hasSeparator: false,
        })),
      );
    }
  }

  private isSelected(value: string): boolean {
    if (this.multiple()) {
      const currentValue = this.internalValue();
      if (currentValue) {
        return currentValue.includes(value);
      }
    }
    return this.internalValue() === value;
  }

  private computeShouldDisplayClearButton() {
    const shouldDisplay =
      this.showResetButton() &&
      (this.multiple()
        ? Array.isArray(this.internalValue()) && this.internalValue()!.length > 0
        : !!this.internalValue()) &&
      !this.disabled();
    this.shouldDisplayClearButton.set(shouldDisplay);
  }
}
