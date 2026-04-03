import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  input,
  output,
  signal,
  viewChild,
} from "@angular/core";
import {
  buildDigitsOnlyFromState,
  buildMaskedDdMmYyyyFromState,
  createEmptySegmentedDateFieldState,
  reduceSegmentedDateFieldKey,
  segmentedStateFromDdMmYyyyString,
  shouldPreventDefaultSegmentedKey,
  type SegmentedDateActiveSegment,
  type SegmentedDateFieldState,
} from "@design-system-rte/core/components/datepicker";

import { RegularIconIdKey, TogglableIconIdKey } from "../../icon/icon.service";
import { BaseInputComponent } from "../../input/base-input/base-input.component";
import { RteBaseInputControlDirective } from "../../input/rte-base-input-control.directive";

@Component({
  selector: "rte-datepicker-segmented-field",
  imports: [CommonModule, BaseInputComponent, RteBaseInputControlDirective],
  standalone: true,
  templateUrl: "./datepicker-segmented-field.component.html",
  styleUrl: "./datepicker-segmented-field.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerSegmentedFieldComponent {
  readonly id = input<string>();
  readonly label = input<string>("");
  readonly labelPosition = input<"top" | "side">("top");
  readonly required = input<boolean>(false);
  readonly showLabelRequirement = input<boolean>(false);
  readonly assistiveAppearance = input<"description" | "error" | "success" | "link">("description");
  readonly showAssistiveIcon = input<boolean>(false);
  readonly assistiveTextLabel = input<string>("");
  readonly error = input<boolean>(false);
  readonly maxLength = input<number>(10);
  readonly disabled = input<boolean>(false);
  readonly readOnly = input<boolean>(false);
  readonly width = input<string>("300px");
  readonly compactSpacing = input<boolean>(false);
  readonly ariaLabel = input<string>("");
  readonly ariaLabelledby = input<string>("");
  readonly ariaRequired = input<boolean>(false);
  readonly highlighted = input<boolean>(false);
  readonly hasLabel = input<boolean>(true);
  readonly hasAssistiveText = input<boolean>(false);
  readonly showCounter = input<boolean>(false);

  readonly value = input<string>("");
  readonly leftIcon = input<RegularIconIdKey | TogglableIconIdKey | null>(null);
  readonly showRightIcon = input<boolean>(true);
  readonly rightIcon = input<RegularIconIdKey | TogglableIconIdKey | null>(null);
  readonly rightIconAriaLabel = input<string>("");

  readonly valueChange = output<string>();
  readonly inputBlur = output<void>();
  readonly rightIconClick = output<MouseEvent | KeyboardEvent>();
  readonly rightIconKeydown = output<KeyboardEvent>();

  readonly segmentedState = signal<SegmentedDateFieldState>(createEmptySegmentedDateFieldState());

  readonly controlRef = viewChild<ElementRef<HTMLElement>>("controlRef");

  readonly computedRightIconName = computed(() => this.rightIcon());
  readonly computedRightIconAriaLabel = computed(() => this.rightIconAriaLabel());

  readonly dayDisplay = computed(() => this.formatSegmentVisual(this.segmentedState().dayDigits, "DD"));
  readonly monthDisplay = computed(() => this.formatSegmentVisual(this.segmentedState().monthDigits, "MM"));
  readonly yearDisplay = computed(() => this.formatSegmentVisual(this.segmentedState().yearDigits, "YYYY"));

  readonly assistiveTextId = computed(() =>
    this.hasAssistiveText() && this.assistiveTextLabel() ? `assistive-${this.id() ?? "datepicker-field"}` : null,
  );

  readonly labelElementId = computed(() => (this.hasLabel() && this.id() ? `input-label-${this.id()}` : null));

  constructor() {
    effect(
      () => {
        const externalValue = this.value();
        const fromState = buildMaskedDdMmYyyyFromState(this.segmentedState());
        if (externalValue === fromState) {
          return;
        }
        const previous = this.segmentedState();
        const next = segmentedStateFromDdMmYyyyString(externalValue);
        const previousDigits = buildDigitsOnlyFromState(previous);
        const nextDigits = buildDigitsOnlyFromState(next);
        const preserveActiveSegment = previousDigits.length > 0 && previousDigits === nextDigits;
        this.segmentedState.set(preserveActiveSegment ? { ...next, activeSegment: previous.activeSegment } : next);
      },
      { allowSignalWrites: true },
    );
  }

  onControlFocus(): void {
    this.segmentedState.update((current) => {
      if (buildDigitsOnlyFromState(current).length > 0) {
        return current;
      }
      return { ...current, activeSegment: "day" };
    });
  }

  onControlBlur(): void {
    this.inputBlur.emit();
  }

  onControlKeydown(event: KeyboardEvent): void {
    if (this.readOnly() || this.disabled()) {
      return;
    }
    const next = reduceSegmentedDateFieldKey({
      state: this.segmentedState(),
      key: event.key,
      isComposing: event.isComposing,
    });
    if (next === null) {
      return;
    }
    if (shouldPreventDefaultSegmentedKey(event.key)) {
      event.preventDefault();
    }
    this.segmentedState.set(next);
    this.valueChange.emit(buildMaskedDdMmYyyyFromState(next));
  }

  onPaste(event: ClipboardEvent): void {
    if (this.readOnly() || this.disabled()) {
      return;
    }
    event.preventDefault();
    const pasted = event.clipboardData?.getData("text") ?? "";
    const digitsOnly = pasted.replace(/\D/g, "").slice(0, 8);
    const next = segmentedStateFromDdMmYyyyString(digitsOnly);
    this.segmentedState.set(next);
    this.valueChange.emit(buildMaskedDdMmYyyyFromState(next));
  }

  selectSegment(segment: SegmentedDateActiveSegment): void {
    if (this.readOnly() || this.disabled()) {
      return;
    }
    this.segmentedState.update((current) => ({ ...current, activeSegment: segment }));
    this.controlRef()?.nativeElement.focus();
  }

  isSegmentActive(segment: SegmentedDateActiveSegment): boolean {
    return this.segmentedState().activeSegment === segment;
  }

  private formatSegmentVisual(digits: string, placeholder: string): string {
    if (digits.length === 0) {
      return placeholder;
    }
    return digits + placeholder.slice(digits.length);
  }

  onRightIconClickHandler(event: MouseEvent | KeyboardEvent): void {
    this.rightIconClick.emit(event);
  }

  onRightIconKeyDownHandler(event: KeyboardEvent): void {
    this.rightIconKeydown.emit(event);
  }
}
