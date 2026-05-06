import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  contentChild,
  effect,
  input,
  output,
  signal,
  viewChild,
} from "@angular/core";
import { ButtonSize } from "@design-system-rte/core";

import { IconComponent } from "../../icon/icon.component";
import { RegularIconIdKey, TogglableIconIdKey } from "../../icon/icon.service";
import { IconButtonComponent } from "../../icon-button/icon-button.component";
import { LinkComponent } from "../../link/link.component";
import { RteBaseInputControlDirective } from "../rte-base-input-control.directive";

@Component({
  selector: "rte-base-input",
  imports: [CommonModule, IconComponent, IconButtonComponent, LinkComponent, RteBaseInputControlDirective],
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
  readonly rightIconSize = input<Exclude<ButtonSize, "l">>("s");

  readonly showLabelRequirement = input<boolean>(false);
  readonly assistiveAppearance = input<"description" | "error" | "success" | "link">("description");
  readonly showAssistiveIcon = input<boolean>(false);
  readonly assistiveTextLabel = input<string>("");
  readonly assistiveTextId = input<string | null>(null);
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
  readonly useLabelForAttribute = input<boolean>(true);

  readonly valueChange = output<string>();
  readonly inputBlur = output<void>();
  readonly rightIconClick = output<MouseEvent | KeyboardEvent>();
  readonly rightIconKeydown = output<KeyboardEvent>();

  readonly characterCount = signal<number>(this.internalValue().length);
  readonly displayedLeftIcon = computed(() => (this.error() ? "error" : this.leftIcon()));
  readonly displayCounter = computed(() => this.showCounter() && typeof this.maxLength() === "number");

  readonly shouldShowRightIcon = computed(() => this.computeShouldShowRightIcon());

  readonly computedInputType = computed(() => this.computeInputType());
  readonly computedRightIconName = computed(() => this.computeRightIconName());
  readonly computedRightIconAriaLabel = computed(() => this.computeRightIconAriaLabel());

  readonly inputRef = viewChild<ElementRef<HTMLInputElement>>("inputRef");

  readonly projectedControl = contentChild(RteBaseInputControlDirective);
  readonly projectedControlElementRef = contentChild(RteBaseInputControlDirective, { read: ElementRef<HTMLElement> });

  private readonly projectedControlLatch = signal(false);

  readonly showProjectedShell = computed(() => this.projectedControl() !== undefined || this.projectedControlLatch());

  readonly computedAriaLabelledby = computed(() => {
    const explicit = this.ariaLabelledby();
    if (explicit !== "") {
      return explicit;
    }
    if (this.label() && this.id()) {
      return `input-label-${this.id()}`;
    }
    return null;
  });

  private lastParentValue = this.value();

  constructor() {
    effect(
      () => {
        if (this.projectedControl()) {
          this.projectedControlLatch.set(true);
        }
      },
      { allowSignalWrites: true },
    );

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

  protected handleRightIconClick(): void {}

  protected computeShouldShowRightIcon(): boolean {
    return this.showRightIcon();
  }

  onLabelClick(event: MouseEvent): void {
    if (this.disabled()) {
      return;
    }

    const canUseNativeLabelFocus = this.useLabelForAttribute() && !this.showProjectedShell() && !!this.id();
    if (canUseNativeLabelFocus) {
      return;
    }

    event.preventDefault();

    const focusTarget = this.showProjectedShell()
      ? this.projectedControlElementRef()?.nativeElement
      : this.inputRef()?.nativeElement;

    focusTarget?.focus();
  }
}
