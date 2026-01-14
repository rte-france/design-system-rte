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
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { REQUIREMENT_INDICATOR_VALUE } from "@design-system-rte/core/components/required-indicator/required-indicator.constant";
import {
  SELECT_DROPDOWN_OFFSET,
  THRESHOLD_BOTTOM_POSITION,
  MIN_SELECT_WIDTH,
} from "@design-system-rte/core/components/select/select.constants";
import { SelectProps } from "@design-system-rte/core/components/select/select.interface";
import { ENTER_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { AssistiveTextComponent } from "../assistive-text/assistive-text.component";
import { DropdownModule } from "../dropdown";
import { IconComponent } from "../icon/icon.component";
import { IconButtonComponent } from "../icon-button/icon-button.component";

@Component({
  selector: "rte-select",
  imports: [CommonModule, IconComponent, DropdownModule, IconButtonComponent, AssistiveTextComponent],
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
export class SelectComponent {
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
  readonly value = input<string>();
  readonly options = input<SelectProps["options"]>([]);
  readonly isError = input<boolean>(false);
  readonly showAssistiveIcon = input<boolean>(false);
  readonly showResetButton = input<boolean>(false);
  readonly width = input<number>(MIN_SELECT_WIDTH);

  readonly selectRef = viewChild<ElementRef<HTMLElement>>("selectRef");
  readonly buttonsContainerRef = viewChild<ElementRef<HTMLElement>>("buttonsContainerRef");

  readonly selectDropdownOffset = SELECT_DROPDOWN_OFFSET;

  readonly computedWidth = computed(() => {
    return `${this.width()}px`;
  });

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

  readonly internalValue = signal(this.value());

  readonly requirementIndicatorValue = computed(() =>
    this.required()
      ? this.showLabelRequirement()
        ? REQUIREMENT_INDICATOR_VALUE.required
        : REQUIREMENT_INDICATOR_VALUE.requiredIcon
      : REQUIREMENT_INDICATOR_VALUE.optional,
  );

  readonly valueChange = output<Event>();

  readonly currentOptionLabel = computed(() => {
    return this.options().find((option) => option.value === this.internalValue())?.label;
  });

  readonly isAssistiveTextLinkVisible = computed(() => {
    return this.assistiveTextAppearance() === "link" && this.assistiveTextLink() !== undefined;
  });

  readonly formattedOptions = computed(() => {
    return this.options().map(({ value, label }) => ({
      id: value,
      label: label,
      selected: value === this.internalValue(),
    }));
  });

  readonly shouldDisplayClearButton = computed(
    () => this.showResetButton() && !!this.internalValue() && !this.disabled(),
  );

  readonly shouldDisplayErrorIcon = computed(() => this.isError() && !this.disabled() && !this.readOnly());

  readonly isActive = signal(false);

  readonly selectWidth = computed(() => {
    const nativeElement = this.selectRef()?.nativeElement;
    if (nativeElement) {
      return nativeElement.getBoundingClientRect().width;
    }
    return null;
  });

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
        this.clearSelection(event);
        return;
      }
    }

    if (event.key === SPACE_KEY || event.key === ENTER_KEY) {
      this.toggleDropdown();
    }
  }

  handleOnClickClearButton(event: Event): void {
    if (this.readOnly() || this.disabled()) {
      return;
    }
    event.preventDefault();
    this.clearSelection(event);
  }

  handleOnClickItem(id: string) {
    if (this.readOnly() || this.disabled()) {
      return;
    }
    this.internalValue.set(id);
    const event = new CustomEvent<{ target: { value: string } }>("change", {
      bubbles: true,
      detail: { target: { value: id } },
    });
    this.valueChange.emit(event);
    this.isActive.set(!this.isActive());
    this.selectRef()?.nativeElement.focus();
  }

  handleOnClosingDropdown() {
    this.isActive.set(false);
  }

  handleOnClickOutside() {
    this.isActive.set(false);
  }

  private toggleDropdown() {
    this.isActive.set(!this.isActive());
    if (this.isActive()) {
      this.selectRef()?.nativeElement.dispatchEvent(new Event("openDropdown"));
    } else {
      this.selectRef()?.nativeElement.dispatchEvent(new Event("closeDropdown"));
    }
  }

  private clearSelection(event: Event) {
    this.internalValue.set(undefined);
    this.isActive.set(false);
    this.valueChange.emit(event);
    this.selectRef()?.nativeElement.dispatchEvent(new Event("clearContent"));
  }
}
