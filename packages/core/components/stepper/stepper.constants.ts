import { STEP_COMPLETION_STATE } from "./stepper.interface";

export const STEPPER_DEFAULT_NAV_ARIA_LABEL = "Progression";

export const COMPLETION_STATE_COMPLETE = "terminée";
export const COMPLETION_STATE_UNVISITED = "";
export const COMPLETION_STATE_IN_PROGRESS = "partiellement complétée";

export const COMPLETION_STATES: Record<STEP_COMPLETION_STATE, string> = {
  complete: COMPLETION_STATE_COMPLETE,
  unvisited: COMPLETION_STATE_UNVISITED,
  incomplete: COMPLETION_STATE_IN_PROGRESS,
};
