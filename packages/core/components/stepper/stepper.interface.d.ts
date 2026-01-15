import { Direction } from "../../common/common-types";

export type STEP_COMPLETION_STATE = "unvisited" | "incomplete" | "complete";

interface Step {
  id: string;
  name: string;
  completionState: STEP_COMPLETION_STATE;
  clickableCompleteStep?: boolean;
  onClick?: () => void;
}

export interface StepperProps {
  steps: Step[];
  orientation?: Direction;
}

export interface StepperItemProps {
  id: string;
  number?: number;
  name?: string;
  completionState: STEP_COMPLETION_STATE;
  orientation?: Direction;
  clickableCompleteStep?: boolean;
  onClick?: () => void;
  isActive?: boolean;
}
