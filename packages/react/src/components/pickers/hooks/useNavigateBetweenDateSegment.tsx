import { DateSegmentEnum } from "@design-system-rte/core";
import { useCallback, useState } from "react";

import { getNextSegment, getPrevSegment } from "../picker.utils";

export const useNavigateBetweenDateSegment = (): {
  moveToNextSegment: () => void;
  moveToPreviousSegment: () => void;
  setActiveDateSegment: (segment: DateSegmentEnum) => void;
  activeDateSegment: DateSegmentEnum;
  prevSegment: DateSegmentEnum;
  nextSegment: DateSegmentEnum;
} => {
  const [activeDateSegment, setActiveDateSegment] = useState<DateSegmentEnum>(DateSegmentEnum.DAY);

  const nextSegment = getNextSegment(activeDateSegment);
  const prevSegment = getPrevSegment(activeDateSegment);

  const moveToNextSegment = useCallback(() => {
    setActiveDateSegment(nextSegment);
  }, [nextSegment]);

  const moveToPreviousSegment = useCallback(() => {
    setActiveDateSegment(prevSegment);
  }, [prevSegment]);

  return {
    moveToNextSegment,
    moveToPreviousSegment,
    setActiveDateSegment,
    activeDateSegment,
    prevSegment,
    nextSegment,
  };
};
