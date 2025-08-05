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
} from "@angular/core";
import { getSegmentPosition } from "@design-system-rte/core/components/segmented-control/segmented-control-utils";
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

@Component({
  selector: "rte-segmented-control",
  imports: [CommonModule, IconComponent],
  standalone: true,
  templateUrl: "./segmented-control.component.html",
  styleUrl: "./segmented-control.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SegmentedControlComponent implements AfterViewInit, OnDestroy {
  readonly options = input<SegmentOptions[]>([]);
  readonly change = output<string>();
  readonly selectedSegment = input<string>();
  readonly ariaLabel = input<string>();
  readonly ariaLabelledBy = input<string>();

  readonly segmentRefs = viewChildren<ElementRef<HTMLDivElement>>("segment");

  sliderLeft = 0;
  sliderWidth = 0;

  ngAfterViewInit() {
    this.updateSlider();
    window.addEventListener("resize", this.updateSlider.bind(this));
  }

  ngOnDestroy() {
    window.removeEventListener("resize", this.updateSlider.bind(this));
  }

  selectSegment(id: string) {
    this.change.emit(id);

    setTimeout(() => this.updateSlider());
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === TAB_KEY) {
      event.preventDefault();
      event.stopPropagation();
      const allFocusableElements = Array.from(document.querySelectorAll(FOCUSABLE_ELEMENTS_QUERY)) as HTMLElement[];
      const currentActiveElement = document.activeElement;
      const currentIndex = allFocusableElements.indexOf(currentActiveElement as HTMLElement);

      if (event.shiftKey) {
        this.focusPreviousNotSegmentElement(currentIndex, allFocusableElements);
      } else {
        this.focusNextNotSegmentElement(currentIndex, allFocusableElements);
      }
    }
  }

  handleKeyUp(event: KeyboardEvent) {
    event.preventDefault();
    event.stopPropagation();
    if (event.key === ARROW_RIGHT_KEY || event.key === ARROW_LEFT_KEY) {
      const allSegmentElements =
        (document.activeElement?.parentElement?.parentElement?.querySelectorAll(
          ".rte-segment",
        ) as NodeListOf<HTMLElement>) || [];

      const currentActiveSegmentElementIndex = Array.from(allSegmentElements).findIndex(
        (element) => element === document.activeElement,
      );

      if (event.key === ARROW_RIGHT_KEY) {
        this.focusNextSegmentElement(currentActiveSegmentElementIndex, allSegmentElements);
      } else if (event.key === ARROW_LEFT_KEY) {
        this.focusPreviousSegmentElement(currentActiveSegmentElementIndex, allSegmentElements);
      }
    } else if (event.key === SPACE_KEY || event.key === ENTER_KEY) {
      const target = event.target as HTMLElement;
      const dataId = target.getAttribute("data-id");
      this.selectSegment(dataId || "");
    }
  }

  getSegmentPosition(index: number): SegmentProps["position"] {
    return getSegmentPosition(index, this.options().length);
  }

  updateSlider() {
    const idx = this.options().findIndex((opt) => opt.id === this.selectedSegment());
    const segment = this.segmentRefs()[idx]?.nativeElement;
    if (segment) {
      this.sliderLeft = segment.offsetLeft;
      this.sliderWidth = segment.offsetWidth;
    }
  }

  private focusNextNotSegmentElement = (currentFocusedElementIndex: number, allFocusableElements: HTMLElement[]) => {
    let nextIndex = currentFocusedElementIndex < allFocusableElements.length - 2 ? currentFocusedElementIndex + 1 : 0;
    while (allFocusableElements[nextIndex]?.classList.contains("rte-segment")) {
      if (nextIndex < allFocusableElements.length - 1) {
        nextIndex++;
      } else {
        nextIndex = 0;
      }
    }

    allFocusableElements[nextIndex].focus();
  };

  private focusNextSegmentElement = (
    currentActiveSegmentElementIndex: number,
    allSegmentElements: NodeListOf<HTMLElement>,
  ) => {
    const nextIndex =
      currentActiveSegmentElementIndex < allSegmentElements.length - 1 ? currentActiveSegmentElementIndex + 1 : 0;

    allSegmentElements[nextIndex].focus();
  };

  private focusPreviousNotSegmentElement = (
    currentFocusedElementIndex: number,
    allFocusableElements: HTMLElement[],
  ) => {
    let previousIndex =
      currentFocusedElementIndex > 0 ? currentFocusedElementIndex - 1 : allFocusableElements.length - 1;

    while (allFocusableElements[previousIndex]?.classList.contains("rte-segment")) {
      if (previousIndex > 0) {
        previousIndex--;
      } else {
        previousIndex = allFocusableElements.length - 1;
      }
    }

    allFocusableElements[previousIndex].focus();
  };

  private focusPreviousSegmentElement = (
    currentActiveSegmentElementIndex: number,
    allSegmentElements: NodeListOf<HTMLElement>,
  ) => {
    const previousIndex =
      currentActiveSegmentElementIndex > 0 ? currentActiveSegmentElementIndex - 1 : allSegmentElements.length - 1;

    allSegmentElements[previousIndex].focus();
  };
}
