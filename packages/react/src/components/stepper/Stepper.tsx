import { StepperProps as coreStepperProps } from "@design-system-rte/core/components/stepper/stepper.interface";
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
import { forwardRef, Fragment, useCallback, useRef, useState } from "react";

import styles from "./Stepper.module.scss";
import StepperItem from "./stepperItem/StepperItem";
import stepperItemStyles from "./stepperItem/StepperItem.module.scss";
import StepperSeparator from "./stepperItem/stepperseparator/StepperSeparator";

interface StepperProps extends coreStepperProps, React.HTMLAttributes<HTMLElement> {
  activeStepId: string | null;
}

const Stepper = forwardRef<HTMLElement, StepperProps>(
  ({ steps, orientation = "horizontal", activeStepId, ...props }, ref) => {
    const [stepperElement, setStepperElement] = useState<HTMLElement | null>(null);

    const stepperRef = useRef<HTMLElement | null>(null);

    const stepperCallbackRef = useCallback(
      (node: HTMLDialogElement | null) => {
        stepperRef.current = node;
        setStepperElement(node);
        if (typeof ref === "function") ref(node);
        else if (ref) (ref as React.MutableRefObject<HTMLDialogElement | null>).current = node;
      },
      [ref],
    );

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (event.key === TAB_KEY) {
        event.preventDefault();
        if (event.shiftKey) {
          focusPreviousNotStepElement(stepperItemStyles.stepButton, stepperRef.current!);
        } else {
          focusNextNotStepElement(stepperItemStyles.stepButton, stepperRef.current!);
        }
      }

      if ([ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY].includes(event.key)) {
        event.preventDefault();
        event.stopPropagation();

        const allSteps = stepperElement?.querySelectorAll("button");
        if (allSteps) {
          const currentFocusSteppedIndex = Array.from(allSteps).findIndex((step) => step === document.activeElement);
          if (orientation === "horizontal") {
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

    if (steps.length < 2 || steps.length > 7) {
      console.warn("Stepper component requires between 2 and 7 steps to function properly.");
      return null;
    }

    return (
      <nav aria-label="Progression" style={{ width: "100%", height: "100%" }} ref={stepperCallbackRef} {...props}>
        <ol className={styles.stepper} data-orientation={orientation}>
          {steps.map((step, index) => (
            <Fragment key={step.name + index}>
              <StepperItem
                id={step.id}
                number={index + 1}
                name={step.name}
                completionState={step.completionState}
                orientation={orientation}
                onKeyDown={handleKeyDown}
                onClick={step.onClick}
                isActive={step.id === activeStepId}
                clickableCompleteStep={step.clickableCompleteStep}
              />
              {index < steps.length - 1 && (
                <StepperSeparator isComplete={step.completionState === "complete"} orientation={orientation} />
              )}
            </Fragment>
          ))}
        </ol>
      </nav>
    );
  },
);

export default Stepper;
