import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, effect, input, output, signal } from "@angular/core";

import { IconComponent } from "../../icon/icon.component";
import { RegularIconIdKey, TogglableIconIdKey } from "../../icon/icon.service";
import { IconButtonComponent } from "../../icon-button/icon-button.component";
import { LinkComponent } from "../../link/link.component";

@Component({
  selector: "rte-base-input",
  imports: [CommonModule, IconComponent, IconButtonComponent, LinkComponent],
  standalone: true,
  templateUrl: "./base-input.component.html",
  styleUrl: "./base-input.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseInputComponent {
  readonly id = input<string>();
  readonly label = input<string>("");
  readonly labelPosition = input<"top" | "side">("top");
  readonly placeholder = input<string>("");
  readonly required = input<boolean>(false);
  readonly showCounter = input<boolean>(false);
  readonly value = input<string>("");
  readonly internalValue = signal<string>(this.value());
  readonly leftIcon = input<RegularIconIdKey | TogglableIconIdKey | null>(null);

  readonly showRightIcon = input<boolean>(true);
  readonly rightIcon = input<RegularIconIdKey | TogglableIconIdKey | null>(null);
  readonly rightIconAriaLabel = input<string>("");

  readonly showLabelRequirement = input<boolean>(false);
  readonly assistiveAppearance = input<"description" | "error" | "success" | "link">("description");
  readonly showAssistiveIcon = input<boolean>(false);
  readonly assistiveTextLabel = input<string>("");
  readonly error = input<boolean>(false);
  readonly maxLength = input<number>(150);
  readonly disabled = input<boolean>(false);
  readonly readOnly = input<boolean>(false);
  readonly width = input<string>("300px");
  readonly ariaLabel = input<string>("");
  readonly ariaRequired = input<boolean>(false);
  readonly ariaLabelledby = input<string>("");
  readonly compactSpacing = input<boolean>(false);
  readonly customStyle = input<Record<string, string>>();
  readonly autocomplete = input<string>("");
  readonly highlighted = input<boolean>(false);
  readonly inputType = input<"text" | "password">("text");

  readonly valueChange = output<string>();
  readonly rightIconClick = output<MouseEvent | KeyboardEvent>();
  readonly rightIconKeydown = output<KeyboardEvent>();

  readonly characterCount = signal<number>(this.internalValue().length);
  readonly displayedLeftIcon = computed(() => (this.error() ? "error" : this.leftIcon()));
  readonly displayCounter = computed(() => this.showCounter() && typeof this.maxLength() === "number");

  readonly computedInputType = computed(() => this.computeInputType());
  readonly computedRightIconName = computed(() => this.computeRightIconName());
  readonly computedRightIconAriaLabel = computed(() => this.computeRightIconAriaLabel());
  readonly shouldShowRightIcon = computed(() => this.computeShouldShowRightIcon());

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
  }

  handleChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const newValue = inputElement.value;
    this.internalValue.set(newValue);
    if (this.maxLength()) {
      this.characterCount.set(newValue.length);
    }
    this.valueChange.emit(newValue);
  }

  onRightIconClickHandler(event: MouseEvent | KeyboardEvent): void {
    this.rightIconClick.emit(event);
    this.handleRightIconClick();
  }

  onRightIconKeyDownHandler(event: KeyboardEvent): void {
    this.rightIconKeydown.emit(event);
  }

  protected computeInputType(): "text" | "password" {
    return this.inputType();
  }

  protected computeRightIconName(): RegularIconIdKey | TogglableIconIdKey | null {
    return this.rightIcon();
  }

  protected computeRightIconAriaLabel(): string {
    return this.rightIconAriaLabel();
  }

  protected computeShouldShowRightIcon(): boolean {
    if (this.readOnly() || this.disabled()) {
      return false;
    }
    if (!this.showRightIcon()) {
      return false;
    }
    return !!this.computedRightIconName();
  }

  // Intended extension point for specialized inputs (e.g. BaseTextInput).
  protected handleRightIconClick(): void {}
}
