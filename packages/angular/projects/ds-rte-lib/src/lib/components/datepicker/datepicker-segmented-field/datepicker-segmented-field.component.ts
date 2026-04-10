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
  untracked,
  viewChild,
} from "@angular/core";
import {
  applySegmentLeaveWhenChangingActiveSegment,
  buildDigitsOnlyFromState,
  buildMaskedDdMmYyyyFromState,
  createEmptySegmentedDateFieldState,
  firstIncompleteSegmentForState,
  getSegmentDisplayText,
  reduceSegmentedDateFieldKey,
  resetIncompleteSegmentsOnBlur,
  segmentedStateFromDdMmYyyyString,
  shouldPreventDefaultSegmentedKey,
  type SegmentedDateActiveSegment,
  type SegmentedDateFieldState,
} from "@design-system-rte/core/components/datepicker";

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
  readonly disabled = input<boolean>(false);
  readonly readOnly = input<boolean>(false);
  readonly ariaLabel = input<string>("");
  readonly ariaLabelledby = input<string | null>(null);
  readonly ariaRequired = input<boolean>(false);
  readonly hasLabel = input<boolean>(true);
  readonly hasAssistiveText = input<boolean>(false);

  readonly value = input<string>("");
  readonly rightIconAriaLabel = input<string>("");

  readonly valueChange = output<string>();
  readonly inputBlur = output<void>();
  readonly rightIconClick = output<MouseEvent | KeyboardEvent>();
  readonly rightIconKeydown = output<KeyboardEvent>();
  readonly segmentedControlClick = output<void>();

  readonly segmentedState = signal<SegmentedDateFieldState>(createEmptySegmentedDateFieldState());

  private readonly controlHasFocus = signal(false);

  readonly controlRef = viewChild<ElementRef<HTMLElement>>("controlRef");
  private readonly daySegmentRef = viewChild<ElementRef<HTMLElement>>("daySegment");
  private readonly monthSegmentRef = viewChild<ElementRef<HTMLElement>>("monthSegment");
  private readonly yearSegmentRef = viewChild<ElementRef<HTMLElement>>("yearSegment");

  readonly dayDisplay = computed(() => getSegmentDisplayText(this.segmentedState().dayDigits, "day", "DD"));
  readonly monthDisplay = computed(() => getSegmentDisplayText(this.segmentedState().monthDigits, "month", "MM"));
  readonly yearDisplay = computed(() => getSegmentDisplayText(this.segmentedState().yearDigits, "year", "YYYY"));

  readonly assistiveTextId = computed(() =>
    this.hasAssistiveText() && this.assistiveTextLabel() ? `assistive-${this.id() ?? "datepicker-field"}` : null,
  );

  constructor() {
    effect(
      () => {
        const externalValue = this.value();
        untracked(() => {
          const previous = this.segmentedState();
          const fromState = buildMaskedDdMmYyyyFromState(previous);
          if (externalValue === fromState) {
            return;
          }
          const next = segmentedStateFromDdMmYyyyString(externalValue);
          const segmentsMatch =
            previous.dayDigits === next.dayDigits &&
            previous.monthDigits === next.monthDigits &&
            previous.yearDigits === next.yearDigits;
          if (segmentsMatch) {
            this.segmentedState.set({ ...next, activeSegment: previous.activeSegment });
            return;
          }
          this.segmentedState.set(next);
        });
      },
      { allowSignalWrites: true },
    );

    effect(() => {
      this.segmentedState();
      if (!this.controlHasFocus() || this.disabled() || this.readOnly()) {
        return;
      }
      untracked(() => {
        this.scheduleNativeSelectionOfActiveSegment();
      });
    });
  }

  onSegmentedControlClick(): void {
    this.segmentedControlClick.emit();
  }

  onControlFocus(): void {
    this.controlHasFocus.set(true);
    this.segmentedState.update((current) => {
      if (buildDigitsOnlyFromState(current).length > 0) {
        return current;
      }
      return { ...current, activeSegment: "day" };
    });
  }

  onControlBlur(): void {
    this.controlHasFocus.set(false);
    globalThis.getSelection()?.removeAllRanges();
    const beforeMask = buildMaskedDdMmYyyyFromState(this.segmentedState());
    const afterBlur = resetIncompleteSegmentsOnBlur(this.segmentedState());
    this.segmentedState.set(afterBlur);
    const afterMask = buildMaskedDdMmYyyyFromState(afterBlur);
    if (beforeMask !== afterMask) {
      this.valueChange.emit(afterMask);
    }
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
    event.stopPropagation();
    this.segmentedState.set(next);
    this.valueChange.emit(buildMaskedDdMmYyyyFromState(next));
    this.scheduleFocusRestoreIfNeeded();
  }

  onPaste(event: ClipboardEvent): void {
    if (this.readOnly() || this.disabled()) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    const pasted = event.clipboardData?.getData("text") ?? "";
    const digitsOnly = pasted.replace(/\D/g, "").slice(0, 8);
    const parsed = segmentedStateFromDdMmYyyyString(digitsOnly);
    const next: SegmentedDateFieldState = {
      ...parsed,
      activeSegment: firstIncompleteSegmentForState(parsed),
    };
    this.segmentedState.set(next);
    this.valueChange.emit(buildMaskedDdMmYyyyFromState(next));
    this.scheduleFocusRestoreIfNeeded();
  }

  selectSegment(segment: SegmentedDateActiveSegment): void {
    if (this.readOnly() || this.disabled()) {
      return;
    }
    const beforeMask = buildMaskedDdMmYyyyFromState(this.segmentedState());
    this.segmentedState.update((current) => applySegmentLeaveWhenChangingActiveSegment(current, segment));
    const afterMask = buildMaskedDdMmYyyyFromState(this.segmentedState());
    if (beforeMask !== afterMask) {
      this.valueChange.emit(afterMask);
    }
    this.controlRef()?.nativeElement.focus();
    this.scheduleNativeSelectionOfActiveSegment();
  }

  isSegmentActive(segment: SegmentedDateActiveSegment): boolean {
    return this.segmentedState().activeSegment === segment;
  }

  onRightIconClickHandler(event: MouseEvent | KeyboardEvent): void {
    this.rightIconClick.emit(event);
  }

  onRightIconKeyDownHandler(event: KeyboardEvent): void {
    this.rightIconKeydown.emit(event);
  }

  private scheduleFocusRestoreIfNeeded(): void {
    const host = this.controlRef()?.nativeElement;
    if (!host) {
      return;
    }
    queueMicrotask(() => {
      if (!this.controlHasFocus()) {
        return;
      }
      if (document.activeElement !== host) {
        host.focus();
      }
    });
  }

  private scheduleNativeSelectionOfActiveSegment(): void {
    queueMicrotask(() => {
      requestAnimationFrame(() => {
        this.applyNativeSelectionToActiveSegment();
      });
    });
  }

  private applyNativeSelectionToActiveSegment(): void {
    const host = this.getActiveSegmentHostElement();
    if (!host) {
      return;
    }
    const selection = globalThis.getSelection();
    if (!selection) {
      return;
    }
    const range = document.createRange();
    range.selectNodeContents(host);
    selection.removeAllRanges();
    selection.addRange(range);
  }

  private getActiveSegmentHostElement(): HTMLElement | null {
    const activeSegment = this.segmentedState().activeSegment;
    if (activeSegment === "day") {
      return this.daySegmentRef()?.nativeElement ?? null;
    }
    if (activeSegment === "month") {
      return this.monthSegmentRef()?.nativeElement ?? null;
    }
    return this.yearSegmentRef()?.nativeElement ?? null;
  }
}
