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
  inject,
} from "@angular/core";
import { IconSize } from "@design-system-rte/core/components/icon/icon.constants";
import { StepperProps } from "@design-system-rte/core/components/stepper/stepper.interface";
import {
  focusNextNotStepElement,
  focusNextStepElement,
  focusPreviousNotStepElement,
  focusPreviousStepElement,
} from "@design-system-rte/core/components/stepper/stepper.utils";
import {
  ARROW_DOWN_KEY,
  ARROW_LEFT_KEY,
  ARROW_RIGHT_KEY,
  ARROW_UP_KEY,
  TAB_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { IconComponent } from "../icon/icon.component";

const segmentClass = "rte-stepper-button";

@Component({
  selector: "rte-stepper",
  imports: [CommonModule, IconComponent],
  standalone: true,
  templateUrl: "./stepper.component.html",
  styleUrl: "./stepper.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperComponent implements AfterViewInit, OnDestroy {
  readonly steps = input<StepperProps["steps"]>([]);
  readonly activeStepId = input<string>();
  readonly orientation = input<StepperProps["orientation"]>("horizontal");
  readonly stepRefs = viewChildren<ElementRef<HTMLLIElement>>("step");

  readonly iconSize = IconSize;

  private readonly stepperRef = inject(ElementRef);

  readonly clickStep = output<StepperProps["steps"][number]>();

  ngAfterViewInit() {
    window.addEventListener("keydown", this.onGlobalKeyDown.bind(this));

    this.stepRefs().forEach((stepElement) => {
      const stepButton = stepElement.nativeElement.querySelector("button");
      if (stepButton) {
        stepButton.addEventListener("focus", this.focusCurrentStepElement.bind(this));
      }
    });
  }

  ngOnDestroy() {
    window.removeEventListener("keydown", this.onGlobalKeyDown.bind(this));

    this.stepRefs().forEach((stepElement) => {
      const stepButton = stepElement.nativeElement.querySelector("button");
      if (stepButton) {
        stepButton.addEventListener("focus", this.focusCurrentStepElement.bind(this));
      }
    });
  }

  isStepActive(id: string): boolean {
    return this.activeStepId() === id;
  }

  isStepClickable(step: StepperProps["steps"][number]): boolean {
    return (
      !!step.onClick &&
      ((step.completionState === "complete" && step.clickableCompleteStep) ||
        step.completionState === "unvisited" ||
        step.completionState === "incomplete")
    );
  }

  isStepFocusable(step: StepperProps["steps"][number]): boolean {
    return this.isStepClickable(step) || this.isStepActive(step.id);
  }

  handleStepClick(step: StepperProps["steps"][number]) {
    if (this.isStepClickable(step) && !this.isStepActive(step.id) && step.onClick) {
      step.onClick();
      this.clickStep.emit(step);
    }
  }
  handleKeyUp = (event: KeyboardEvent) => {
    if ([ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY].includes(event.key)) {
      event.preventDefault();
      event.stopPropagation();

      const allSteps = this.stepperRef.nativeElement.querySelectorAll("button");
      if (allSteps) {
        const currentFocusSteppedIndex = Array.from(allSteps).findIndex((step) => step === document.activeElement);
        if (this.orientation() === "horizontal") {
          switch (event.key) {
            case ARROW_LEFT_KEY: {
              focusPreviousStepElement(currentFocusSteppedIndex, Array.from(allSteps));
              break;
            }
            case ARROW_RIGHT_KEY: {
              focusNextStepElement(currentFocusSteppedIndex, Array.from(allSteps));
              break;
            }
            default:
              return;
          }
        } else {
          switch (event.key) {
            case ARROW_UP_KEY: {
              focusPreviousStepElement(currentFocusSteppedIndex, Array.from(allSteps));
              break;
            }
            case ARROW_DOWN_KEY: {
              focusNextStepElement(currentFocusSteppedIndex, Array.from(allSteps));
              break;
            }
            default:
              return;
          }
        }
      }
    }
  };

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === TAB_KEY) {
      event.preventDefault();
    }
    if (event.key === TAB_KEY) {
      if (event.shiftKey) {
        focusPreviousNotStepElement(segmentClass, this.stepperRef.nativeElement);
      } else {
        focusNextNotStepElement(segmentClass, this.stepperRef.nativeElement);
      }
    }
  }

  private lastKeydown: string | null = null;

  private onGlobalKeyDown = (event: KeyboardEvent) => {
    this.lastKeydown = event.key;
  };

  private focusCurrentStepElement() {
    if (this.lastKeydown === "Tab") {
      const selectedStepElement = this.stepRefs()
        .find((segment) => segment.nativeElement.querySelector('[aria-current="step"] button'))
        ?.nativeElement.querySelector("button") as HTMLElement;
      if (selectedStepElement) {
        selectedStepElement.focus();
      }
    }
  }
}
