import { Direction } from "@design-system-rte/core/components/common/common-types";

import styles from "./StepperSeparator.module.scss";

export interface StepperSeparatorProps {
  isComplete: boolean;
  orientation?: Direction;
}

const StepperSeparator = ({ isComplete, orientation }: StepperSeparatorProps) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div
        className={styles.stepSeparator}
        role="separator"
        data-complete={isComplete}
        data-orientation={orientation}
      />
    </div>
  );
};

export default StepperSeparator;
