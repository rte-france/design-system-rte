import { CommonModule } from "@angular/common";
import { Component, input, computed, output, signal, viewChild, ElementRef } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { ASSISTIVE_TEXT_ICON_SIZE } from "@design-system-rte/core/components/assistive-text/assistive-text.constants";
import { REQUIREMENT_INDICATOR_VALUE } from "@design-system-rte/core/components/required-indicator/required-indicator.constant";
import { SelectProps } from "@design-system-rte/core/components/select/select.interface";

import { DropdownModule } from "../dropdown";
import { IconComponent } from "../icon/icon.component";
import { IconButtonComponent } from "../icon-button/icon-button.component";
import { LinkComponent } from "../link/link.component";

@Component({
  selector: "rte-select",
  imports: [CommonModule, IconComponent, LinkComponent, DropdownModule, IconButtonComponent],
  standalone: true,
  templateUrl: "./select.component.html",
  styleUrl: "./select.component.scss",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SelectComponent,
      multi: true,
    },
  ],
})
export class SelectComponent {
  readonly id = input<string | undefined>(undefined);
  readonly name = input<string | undefined>(undefined);
  readonly ariaLabelledby = input<string | undefined>(undefined);
  readonly label = input<string | undefined>(undefined);
  readonly labelId = input<string | undefined>(undefined);
  readonly labelPosition = input<SelectProps["labelPosition"]>("top");
  readonly assistiveTextLabel = input<string | undefined>(undefined);
  readonly assistiveTextAppearance = input<SelectProps["assistiveAppearance"]>("description");
  readonly assistiveTextLink = input<string | undefined>(undefined);
  readonly required = input<boolean>(false);
  readonly showLabelRequirement = input<boolean>(false);
  readonly disabled = input<boolean>(false);
  readonly readOnly = input<boolean>(false);
  readonly value = input<string | undefined>(undefined);
  readonly options = input<SelectProps["options"]>([]);
  readonly isError = input<boolean>(false);
  readonly showAssistiveIcon = input<boolean>(false);

  readonly selectRef = viewChild<ElementRef<HTMLElement>>("selectRef");
  readonly buttonsContainerRef = viewChild<ElementRef<HTMLElement>>("buttonsContainerRef");

  readonly clearButton = computed(() => {
    return this.buttonsContainerRef()?.nativeElement.querySelector(
      ".rte-icon-button.clear-button",
    ) as HTMLElement | null;
  });

  readonly internalValue = signal(this.value());

  readonly requirementIndicatorValue = computed(() =>
    this.required()
      ? this.showLabelRequirement()
        ? REQUIREMENT_INDICATOR_VALUE.required
        : REQUIREMENT_INDICATOR_VALUE.requiredIcon
      : REQUIREMENT_INDICATOR_VALUE.optional,
  );

  readonly change = output<Event>();
  readonly blur = output<FocusEvent>();

  readonly currentOptionLabel = computed(() => {
    return this.options().find((option) => option.value === this.internalValue())?.label;
  });

  readonly isAssistiveTextLinkVisible = computed(
    () => this.assistiveTextAppearance() === "link" && this.assistiveTextLink() !== undefined,
  );

  readonly formattedOptions = computed(() => {
    return this.options().map((option) => ({
      id: option.value,
      label: option.label,
      selected: option.value === this.internalValue(),
    }));
  });

  readonly assistiveTextIconSize = ASSISTIVE_TEXT_ICON_SIZE;

  readonly shouldDisplayClearButton = computed(() => !!this.internalValue() && !this.readOnly() && !this.disabled());

  readonly isActive = signal(false);

  readonly selectWidth = computed(() => {
    const nativeElement = this.selectRef()?.nativeElement;
    if (nativeElement) {
      return nativeElement.getBoundingClientRect().width;
    }
    return null;
  });

  onClickOutside() {
    this.isActive.set(false);
  }

  onClickItem(id: string) {
    if (this.readOnly() || this.disabled()) {
      return;
    }
    this.internalValue.set(id);
    const event = new Event("change", { bubbles: true });
    this.change.emit(event);
    this.isActive.set(!this.isActive());
    this.selectRef()?.nativeElement.focus();
  }

  onClickTrigger() {
    if (this.readOnly() || this.disabled()) {
      return;
    }
    this.isActive.set(!this.isActive());
  }

  onKeyDownTrigger(event: KeyboardEvent) {
    console.log("onKeyDownTrigger", event);
    if (this.readOnly() || this.disabled()) {
      return;
    }
    if (this.shouldDisplayClearButton()) {
      const clearButton = this.buttonsContainerRef()?.nativeElement.children[0].children[0];
      const isClearButtonFocused = document.activeElement === clearButton;
      if (isClearButtonFocused && (event.key === " " || event.key === "Enter")) {
        event.preventDefault();
        this.handleClickClearContent(event);
        return;
      }
    }
    const toggleButton = this.buttonsContainerRef()?.nativeElement.children[0].children[0];
    const isToggleButtonClicked = event.target === toggleButton;

    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      this.onClickTrigger();
      if (isToggleButtonClicked) {
        if (this.isActive()) {
          this.selectRef()?.nativeElement.dispatchEvent(new Event("openDropdown"));
        } else {
          this.selectRef()?.nativeElement.dispatchEvent(new Event("closeDropdown"));
        }
      }
    }
  }

  handleClickClearContent(event: Event) {
    if (this.readOnly() || this.disabled()) {
      return;
    }
    this.internalValue.set(undefined);
    this.isActive.set(false);
    this.change.emit(event);
    this.selectRef()?.nativeElement.dispatchEvent(new Event("clearContent"));
  }

  handleToggleDropdown() {
    if (this.readOnly() || this.disabled()) {
      return;
    }
    if (this.isActive()) {
      this.onClickTrigger();
      this.selectRef()?.nativeElement.dispatchEvent(new Event("closeDropdown"));
    } else {
      this.onClickTrigger();
      this.selectRef()?.nativeElement.dispatchEvent(new Event("openDropdown"));
    }
  }
}
