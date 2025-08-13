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
} from "@angular/core";
import {
  getSegmentPosition,
  focusNextNotSegmentElement,
  focusPreviousNotSegmentElement,
  focusNextSegmentElement,
  focusPreviousSegmentElement,
} from "@design-system-rte/core/components/segmented-control/segmented-control-utils";
import {
  SegmentOptions,
  SegmentProps,
} from "@design-system-rte/core/components/segmented-control/segmented-control.interface";
import { FOCUSABLE_ELEMENTS_QUERY } from "@design-system-rte/core/constants/dom/dom.constants";
import {
  ARROW_LEFT_KEY,
  ARROW_RIGHT_KEY,
  ENTER_KEY,
  SPACE_KEY,
  TAB_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { IconComponent } from "../icon/icon.component";

const segmentClass = "rte-segment";
const segmentSelector = `.${segmentClass}`;

@Component({
  selector: "rte-segmented-control",
  imports: [CommonModule, IconComponent],
  standalone: true,
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

  readonly segmentRefs = viewChildren<ElementRef<HTMLDivElement>>("segment");

  readonly sliderLeft = signal(0);
  readonly sliderWidth = signal(0);

  readonly segmentSelectedIndicatorStyle = computed(() => ({
    left: `${this.sliderLeft()}px`,
    width: `${this.sliderWidth()}px`,
  }));

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["selectedSegment"]) {
      this.updateSelectedSegmentIndicator();
    }
  }

  ngAfterViewInit() {
    this.updateSelectedSegmentIndicator();
    window.addEventListener("resize", this.updateSelectedSegmentIndicator.bind(this));
    window.addEventListener("keydown", this.onGlobalKeyDown.bind(this));

    this.segmentRefs().forEach((segmentElement) => {
      segmentElement.nativeElement.addEventListener("focus", this.focusFirstSegmentElement.bind(this));
    });
  }

  ngOnDestroy() {
    window.removeEventListener("resize", this.updateSelectedSegmentIndicator.bind(this));
    window.removeEventListener("keydown", this.onGlobalKeyDown.bind(this));

    this.segmentRefs().forEach((segmentElement) => {
      segmentElement.nativeElement.addEventListener("focus", this.focusFirstSegmentElement.bind(this));
    });
  }

  selectSegment(id: string) {
    this.change.emit(id);
  }

  isSegmentSelected(id: string): boolean {
    return this.selectedSegment() === id;
  }

  handleKeyUp(event: KeyboardEvent) {
    event.preventDefault();
    event.stopPropagation();
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
    if (event.key === TAB_KEY || event.key === SPACE_KEY || event.key === ENTER_KEY) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (event.key === TAB_KEY) {
      const allFocusableElements = Array.from(document.querySelectorAll(FOCUSABLE_ELEMENTS_QUERY)) as HTMLElement[];
      const currentActiveElement = document.activeElement;
      const currentIndex = allFocusableElements.indexOf(currentActiveElement as HTMLElement);

      if (event.shiftKey) {
        focusPreviousNotSegmentElement(currentIndex, allFocusableElements, segmentClass);
      } else {
        focusNextNotSegmentElement(currentIndex, allFocusableElements, segmentClass);
      }
    }
  }

  getSegmentPosition(index: number): SegmentProps["position"] {
    return getSegmentPosition(index, this.options().length);
  }

  private updateSelectedSegmentIndicator() {
    const idx = this.options().findIndex((opt) => opt.id === this.selectedSegment());
    const segment = this.segmentRefs()[idx]?.nativeElement;

    if (segment) {
      this.sliderWidth.set(segment.offsetWidth);
      this.sliderLeft.set(segment.offsetLeft);
    }
  }

  private lastKeydown: string | null = null;

  private onGlobalKeyDown = (event: KeyboardEvent) => {
    this.lastKeydown = event.key;
  };

  private focusFirstSegmentElement() {
    if (this.lastKeydown === "Tab") {
      this.segmentRefs()[0]?.nativeElement?.focus();
    }
  }
}
