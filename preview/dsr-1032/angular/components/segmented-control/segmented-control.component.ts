import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  input,
  output,
  viewChildren,
  AfterViewInit,
  OnDestroy,
  computed,
  signal,
  OnChanges,
  SimpleChanges,
  viewChild,
} from "@angular/core";
import { shouldDisplayBadge as CoreShouldDisplayBadge } from "@design-system-rte/core/components/badge/badge.utils";
import {
  getSegmentPosition,
  focusNextSegmentElement,
  focusPreviousSegmentElement,
  getSegmentAriaLabel as getCoreSegmentAriaLabel,
  getSegmentTabIndex,
  isValidSegmentedControlOptions,
} from "@design-system-rte/core/components/segmented-control/segmented-control-utils";
import {
  SegmentOptions,
  SegmentProps,
} from "@design-system-rte/core/components/segmented-control/segmented-control.interface";
import {
  ARROW_LEFT_KEY,
  ARROW_RIGHT_KEY,
  ENTER_KEY,
  SPACE_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { BadgeComponent } from "../badge/badge.component";
import { IconComponent } from "../icon/icon.component";

const segmentClass = "rte-segment";
const segmentSelector = `.${segmentClass}`;

@Component({
  selector: "rte-segmented-control",
  imports: [CommonModule, IconComponent, BadgeComponent],
  templateUrl: "./segmented-control.component.html",
  styleUrl: "./segmented-control.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SegmentedControlComponent implements OnChanges, AfterViewInit, OnDestroy {
  readonly options = input<SegmentOptions[]>([]);
  readonly change = output<string>();
  readonly selectedSegment = input<string>();
  readonly ariaLabel = input<string>();
  readonly ariaLabelledBy = input<string>();
  readonly appearance = input<"brand" | "neutral">("brand");
  readonly isCompact = input<boolean>(false);
  readonly isInitialAnimationDisabled = signal(true);

  readonly segmentRefs = viewChildren<ElementRef<HTMLDivElement>>("segment");
  readonly segmentedControl = viewChild<ElementRef<HTMLDivElement>>("segmentedControl");

  readonly sliderLeft = signal(0);
  readonly sliderWidth = signal(0);
  readonly sliderTop = signal(0);

  readonly focusedSegmentId = signal<string | null>(null);

  readonly segmentSelectedIndicatorStyle = computed(() => ({
    left: `${this.sliderLeft()}px`,
    top: `${this.sliderTop()}px`,
    width: `${this.sliderWidth()}px`,
  }));

  readonly isValidOptions = computed(() => isValidSegmentedControlOptions(this.options()));

  readonly segmentTabIndexByOptionId = computed(() => {
    const focusedSegmentId = this.focusedSegmentId();
    const selectedSegmentId = this.selectedSegment();
    const fallbackTabStopSegmentId = this.options()[0]?.id;

    return Object.fromEntries(
      this.options().map((option) => [
        option.id,
        getSegmentTabIndex({
          segmentId: option.id,
          selectedSegmentId,
          focusedSegmentId,
          fallbackTabStopSegmentId,
        }),
      ]),
    ) as Record<string, 0 | -1>;
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["selectedSegment"]) {
      requestAnimationFrame(() => requestAnimationFrame(() => this.updateSelectedSegmentIndicator()));
    }
  }

  ngAfterViewInit() {
    requestAnimationFrame(() => this.isInitialAnimationDisabled.set(false));
    window.addEventListener("resize", this.updateSelectedSegmentIndicator);
  }

  ngOnDestroy() {
    window.removeEventListener("resize", this.updateSelectedSegmentIndicator);
  }

  shouldDisplayBadge(option: SegmentOptions): boolean {
    return CoreShouldDisplayBadge({
      showBadge: !!option.showBadge,
      badgeContent: option.badgeContent,
      badgeCount: option.badgeCount,
      badgeIcon: option.badgeIcon,
    });
  }

  getSegmentAriaLabel(option: SegmentOptions): string {
    return getCoreSegmentAriaLabel(option);
  }

  onSegmentFocus(optionId: string) {
    this.focusedSegmentId.set(optionId);
  }

  onSegmentGroupFocusOut(event: FocusEvent) {
    const relatedTarget = event.relatedTarget as Node | null;
    const radiogroupElement = this.segmentedControl()?.nativeElement;
    if (radiogroupElement && !radiogroupElement.contains(relatedTarget)) {
      this.focusedSegmentId.set(null);
    }
  }

  selectSegment(id: string) {
    if (id === this.selectedSegment()) {
      return;
    }
    this.change.emit(id);
  }

  isSegmentSelected(id: string): boolean {
    return this.selectedSegment() === id;
  }

  handleKeyUp(event: KeyboardEvent) {
    event.preventDefault();
    if (event.key === ARROW_RIGHT_KEY || event.key === ARROW_LEFT_KEY) {
      const allSegmentElements =
        Array.from(
          document.activeElement?.parentElement?.parentElement?.querySelectorAll(
            segmentSelector,
          ) as NodeListOf<HTMLElement>,
        ) || [];

      const currentActiveSegmentElementIndex = Array.from(allSegmentElements).findIndex(
        (element) => element === document.activeElement,
      );

      if (event.key === ARROW_RIGHT_KEY) {
        focusNextSegmentElement(currentActiveSegmentElementIndex, allSegmentElements);
      } else if (event.key === ARROW_LEFT_KEY) {
        focusPreviousSegmentElement(currentActiveSegmentElementIndex, allSegmentElements);
      }
    } else if (event.key === SPACE_KEY || event.key === ENTER_KEY) {
      const target = event.target as HTMLElement;
      const dataId = target.getAttribute("data-id");
      this.selectSegment(dataId || "");
    }
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === SPACE_KEY || event.key === ENTER_KEY) {
      event.preventDefault();
    }
  }

  getSegmentPosition(index: number): SegmentProps["position"] {
    return getSegmentPosition(index, this.options().length);
  }

  private readonly updateSelectedSegmentIndicator = () => {
    const idx = this.options().findIndex((opt) => opt.id === this.selectedSegment());
    const segment = this.segmentRefs()[idx]?.nativeElement;

    if (segment) {
      const container = this.segmentedControl()?.nativeElement;

      if (container) {
        const segmentRect = segment.getBoundingClientRect();
        const controlRect = container.getBoundingClientRect();

        this.sliderWidth.set(segmentRect.width);
        this.sliderTop.set(segmentRect.top - controlRect.top);
        this.sliderLeft.set(segmentRect.left - controlRect.left);
      }
    }
  };
}
