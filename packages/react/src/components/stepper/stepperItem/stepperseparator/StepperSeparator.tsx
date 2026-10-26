import { Direction } from "@design-system-rte/core/components/common/common-types";

import styles from "./StepperSeparator.module.scss";

export interface StepperSeparatorProps {
  isComplete: boolean;
  orientation?: Direction;
}

const StepperSeparator = ({ isComplete, orientation }: StepperSeparatorProps) => {
  return (
    <div className={styles.stepSeparatorContainer} aria-hidden="true" data-orientation={orientation}>
      <div className={styles.stepSeparator} data-complete={isComplete} data-orientation={orientation} />
    </div>
  );
};

export default StepperSeparator;
