import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, input, output, signal, computed, effect } from "@angular/core";

import { IconComponent } from "../icon/icon.component";
import { RegularIconIdKey, TogglableIconIdKey } from "../icon/icon.service";
import { IconButtonComponent } from "../icon-button/icon-button.component";
import { LinkComponent } from "../link/link.component";

@Component({
  selector: "rte-text-input",
  imports: [CommonModule, IconComponent, IconButtonComponent, LinkComponent],
  standalone: true,
  templateUrl: "./text-input.component.html",
  styleUrl: "./text-input.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextInputComponent {
  readonly id = input<string>();
  readonly label = input<string>("");
  readonly labelPosition = input<"top" | "side">("top");
  readonly required = input<boolean>(false);
  readonly showCounter = input<boolean>(false);
  readonly value = input<string>("");
  readonly internalValue = signal<string>(this.value());
  readonly leftIcon = input<RegularIconIdKey | TogglableIconIdKey | null>(null);
  readonly showRightIcon = input<boolean>(true);
  readonly rightIconAction = input<"clean" | "visibilityOn" | "visibilityOff">("clean");
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

  readonly valueChange = output<string>();
  readonly rightIconClick = output<void>();

  readonly characterCount = signal<number>(this.internalValue().length);
  readonly isHiddenInput = signal<boolean>(this.showRightIcon() && this.rightIconAction() === "visibilityOn");
  readonly displayedLeftIcon = computed(() => (this.error() ? "error" : this.leftIcon()));

  readonly displayCounter = computed(() => this.showCounter() && typeof this.maxLength() === "number");

  readonly rightIconName = computed(() => {
    if (["visibilityOn", "visibilityOff"].includes(this.rightIconAction())) {
      return this.isHiddenInput() ? "visibility-show" : "visibility-hide";
    } else if (this.rightIconAction() === "clean") {
      return "close";
    }
    return "";
  });

  readonly rightIconAriaLabel = computed(() => {
    if (["visibilityOn", "visibilityOff"].includes(this.rightIconAction())) {
      return this.isHiddenInput() ? "show text" : "hide text";
    } else if (this.rightIconAction() === "clean") {
      return "clear";
    }
    return "";
  });

  readonly shouldShowRightIcon = computed(() => {
    if (this.readOnly() || this.disabled()) {
      return false;
    }
    if (this.rightIconAction() === "clean") {
      return !!this.internalValue()?.length && this.showRightIcon();
    }
    return this.showRightIcon() && !!this.rightIconAction();
  });

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
    const input = event.target as HTMLInputElement;
    this.internalValue.set(input.value);
    this.valueChange.emit(input.value);
    if (this.maxLength()) {
      this.characterCount.set(input.value.length);
    }
    this.valueChange.emit(input.value);
  }

  onRightIconClickHandler(): void {
    this.rightIconClick.emit();
    this.triggerRightIconAction();
  }

  private toggleInputVisibility(): void {
    this.isHiddenInput.set(!this.isHiddenInput());
  }

  private triggerRightIconAction(): void {
    if (this.rightIconAction() === "clean") {
      this.internalValue.set("");
      this.valueChange.emit("");
      this.characterCount.set(0);
    }
    if (["visibilityOn", "visibilityOff"].includes(this.rightIconAction())) {
      this.toggleInputVisibility();
    }
  }
}
