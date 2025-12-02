import { CommonModule } from "@angular/common";
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  input,
  output,
  signal,
} from "@angular/core";
import {
  APPEARANCE_CONFIG,
  DROPDOWN_OFFSET,
  SEARCHBAR_BUTTON_WIDTH,
} from "@design-system-rte/core/components/searchbar/searchbar.constants";
import { SearchBarAppearance } from "@design-system-rte/core/components/searchbar/searchbar.interface";
import { ENTER_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { DropdownItemConfig } from "../dropdown/dropdown-item/dropdown-item.component";
import { DropdownModule } from "../dropdown/dropdown.module";
import { IconButtonComponent } from "../icon-button/icon-button.component";
import { TextInputComponent } from "../text-input/text-input.component";

@Component({
  selector: "rte-searchbar",
  imports: [CommonModule, TextInputComponent, IconButtonComponent, DropdownModule],
  standalone: true,
  templateUrl: "./searchbar.component.html",
  styleUrl: "./searchbar.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchbarComponent implements AfterViewInit {
  readonly id = input<string>();
  readonly label = input<string>("");
  readonly placeholder = input<string>("Rechercher");
  readonly disabled = input<boolean>(false);
  readonly name = input<string>();
  readonly showResetButton = input<boolean>(true);
  readonly appearance = input<SearchBarAppearance>("primary");
  readonly compactSpacing = input<boolean>(false);
  readonly value = input<string>("");
  readonly assistiveText = input<string>("");
  readonly options = input<string[]>([]);
  readonly isOpen = input<boolean | undefined>(undefined);

  readonly valueChange = output<string>();
  readonly search = output<string | undefined>();
  readonly optionSelect = output<string>();
  readonly openChange = output<boolean>();

  private readonly cdr = inject(ChangeDetectorRef);
  private readonly elementRef = inject(ElementRef);

  readonly internalValue = signal<string>(this.value());
  readonly isOpenValue = signal<boolean>(false);
  readonly isFocused = signal<boolean>(false);
  readonly textInputWidth = signal<number | undefined>(undefined);

  readonly appearanceConfig = computed(() => APPEARANCE_CONFIG[this.appearance()]);
  readonly dropdownId = computed(() => `${this.id() ?? "searchbar"}-dropdown`);

  readonly dropdownItems = computed<DropdownItemConfig[]>(() => {
    return this.options().map((option) => ({
      label: option,
    }));
  });

  readonly isOpenComputed = computed(() => {
    return this.isOpen() ?? this.isOpenValue();
  });

  readonly DROPDOWN_OFFSET = DROPDOWN_OFFSET;

  private lastParentValue = this.value();

  constructor() {
    effect(
      () => {
        const parentValue = this.value();
        if (parentValue !== this.lastParentValue) {
          this.lastParentValue = parentValue;
          this.internalValue.set(parentValue);
        }
      },
      { allowSignalWrites: true },
    );

    effect(
      () => {
        const controlledIsOpen = this.isOpen();
        if (controlledIsOpen === undefined && this.options().length > 0) {
          this.isOpenValue.set(true);
        }
      },
      { allowSignalWrites: true },
    );

    effect(
      () => {
        const isOpen = this.isOpenComputed();
        const appearanceConfig = this.appearanceConfig();

        if (isOpen) {
          const updateWidth = () => {
            const dropdownTrigger = this.elementRef.nativeElement.querySelector(".dropdown-trigger");
            if (dropdownTrigger) {
              const triggerWidth = dropdownTrigger.getBoundingClientRect().width;
              const buttonWidth = appearanceConfig.showSearchButton ? parseInt(SEARCHBAR_BUTTON_WIDTH, 10) : 0;
              const inputWidth = triggerWidth - buttonWidth;
              this.textInputWidth.set(inputWidth);
            }
          };
          updateWidth();
          setTimeout(updateWidth, 0);
        } else {
          this.textInputWidth.set(undefined);
        }
      },
      { allowSignalWrites: true },
    );
  }

  private setIsOpen(value: boolean): void {
    const controlledIsOpen = this.isOpen();
    if (controlledIsOpen === undefined) {
      this.isOpenValue.set(value);
    }
    this.openChange.emit(value);
  }

  close(): void {
    this.setIsOpen(false);
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
    this.setupFocusListeners();
  }

  private setupFocusListeners(): void {
    const inputElement = this.elementRef.nativeElement.querySelector("input");
    if (inputElement) {
      inputElement.addEventListener("focus", () => this.handleFocus());
      inputElement.addEventListener("blur", () => this.handleBlur());
      inputElement.addEventListener("keyup", (event: KeyboardEvent) => this.handleEnter(event));
    }
  }

  handleChange(value: string): void {
    this.internalValue.set(value);
    this.valueChange.emit(value);
  }

  handleSearch(): void {
    this.search.emit(this.internalValue());
  }

  handleEnter(event: KeyboardEvent): void {
    if (event.key === ENTER_KEY) {
      this.handleSearch();
    }
  }

  handleClear(): void {
    this.internalValue.set("");
    this.valueChange.emit("");
    this.search.emit("");
  }

  handleFocus(): void {
    if (!this.disabled()) {
      this.isFocused.set(true);
    }
  }

  handleBlur(): void {
    this.isFocused.set(false);
  }

  handleDropdownClose(): void {
    this.setIsOpen(false);
  }

  handleDropdownSelect(event: { event: Event; id: string }): void {
    const option = event.id;
    this.setIsOpen(false);
    this.internalValue.set(option);
    this.valueChange.emit(option);
    this.optionSelect.emit(option);
  }

  onMenuEvent(event: { event: Event; id: string }): void {
    this.handleDropdownSelect(event);
  }
}
