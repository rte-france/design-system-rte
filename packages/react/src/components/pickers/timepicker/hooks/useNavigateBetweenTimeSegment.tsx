import { TimeSegmentEnum } from "@design-system-rte/core/components/timepicker/timepicker.interface.d";
import { getNextSegment, getPrevSegment } from "@design-system-rte/core/components/timepicker/timepicker.utils";
import { useCallback, useState } from "react";

export const useNavigateBetweenTimeSegment = (): {
  moveToNextSegment: () => void;
  moveToPreviousSegment: () => void;
  setActiveTimeSegment: (segment: TimeSegmentEnum) => void;
  activeTimeSegment: TimeSegmentEnum;
  prevSegment: TimeSegmentEnum;
  nextSegment: TimeSegmentEnum;
} => {
  const [activeTimeSegment, setActiveTimeSegment] = useState<TimeSegmentEnum>(TimeSegmentEnum.HOURS);

  const nextSegment = getNextSegment(activeTimeSegment);
  const prevSegment = getPrevSegment(activeTimeSegment);

  const moveToNextSegment = useCallback(() => {
    setActiveTimeSegment(nextSegment);
  }, [nextSegment]);

  const moveToPreviousSegment = useCallback(() => {
    setActiveTimeSegment(prevSegment);
  }, [prevSegment]);

  return {
    moveToNextSegment,
    moveToPreviousSegment,
    setActiveTimeSegment,
    activeTimeSegment,
    prevSegment,
    nextSegment,
  };
};
