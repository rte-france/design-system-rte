import { IconSize } from "@design-system-rte/core/components/icon/icon.constants";
import { StepperItemProps as coreStepperItemProps } from "@design-system-rte/core/components/stepper/stepper.interface";
import { isStepClickable } from "@design-system-rte/core/components/stepper/stepper.utils";
import { useRef } from "react";

import Icon from "../../icon/Icon";

import styles from "./StepperItem.module.scss";

export interface StepperItemProps
  extends coreStepperItemProps, Omit<React.HTMLAttributes<HTMLLIElement>, "onClick" | "id"> {
  onClick?: () => void;
}

const StepperItem = ({
  number,
  name,
  completionState = "unvisited",
  orientation = "horizontal",
  onClick,
  clickableCompleteStep = false,
  isActive,
  ...props
}: StepperItemProps) => {
  const ref = useRef<HTMLLIElement>(null);

  const clickable = onClick && isStepClickable({ completionState, clickableCompleteStep });

  const focusable = clickable || isActive;

  const handleOnClick = () => {
    if (clickable && !isActive && onClick) {
      onClick();
    }
  };

  return (
    <li
      className={styles.stepperItem}
      data-completion-state={completionState}
      data-orientation={orientation}
      ref={ref}
      data-clickable={clickable}
      aria-current={isActive ? "step" : undefined}
      data-active={isActive}
      {...props}
    >
      <button
        className={styles.stepButton}
        type="button"
        onClick={handleOnClick}
        disabled={!focusable}
        tabIndex={isActive ? 0 : -1}
      >
        {completionState === "complete" && !isActive ? (
          <div className={styles.stepCompleteIndicator}>
            <Icon name="check" size={IconSize["m"]} aria-hidden="true" />
          </div>
        ) : (
          <div className={styles.stepNumber} data-completion-state={completionState}>
            <span>{number}</span>
          </div>
        )}
        <span className={styles.stepName}>{name}</span>
      </button>
    </li>
  );
};

export default StepperItem;
