import {
  DEFAULT_TIME_INPUT_VALUE,
  TIME_SEGMENT_MAX_VALUE,
  TIME_SEGMENT_MIN_VALUE,
} from "@design-system-rte/core/components/timepicker/timepicker.constants";
import { TimeFormat, TimeSegmentEnum } from "@design-system-rte/core/components/timepicker/timepicker.interface.d";
import {
  formatNumberToDigitValue,
  getDecreasedValueWithBounds,
  getIncreasedValueWithBounds,
} from "@design-system-rte/core/components/timepicker/timepicker.utils";
import { useCallback, useState } from "react";

const numberRegex = /^\d*$/;

const useTimePickerInternalValue = (
  value?: TimeFormat,
  incrementConfig?: {
    hourIncrement?: number;
    minuteIncrement?: number;
    secondIncrement?: number;
  },
) => {
  const [internalTimeValue, setInternalTimeValue] = useState<TimeFormat>(value ?? DEFAULT_TIME_INPUT_VALUE);

  const { hourIncrement = 1, minuteIncrement = 1, secondIncrement = 1 } = incrementConfig ?? {};

  const updateTimeSegment = (segment: TimeSegmentEnum, val: string) => {
    if (val.length > 2 || !numberRegex.test(val)) return;
    setInternalTimeValue((prev) => {
      const newValues = { ...prev, [segment]: val };
      return newValues;
    });
  };

  const handleOnChangeHours = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    updateTimeSegment(TimeSegmentEnum.HOURS, val);
  }, []);

  const handleOnChangeMinutes = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    updateTimeSegment(TimeSegmentEnum.MINUTES, val);
  }, []);

  const handleOnChangeSeconds = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    updateTimeSegment(TimeSegmentEnum.SECONDS, val);
  }, []);

  const increaseValue = useCallback(
    (segment: TimeSegmentEnum, increment: number) => {
      if (internalTimeValue[segment] === "") {
        updateTimeSegment(segment, formatNumberToDigitValue(TIME_SEGMENT_MIN_VALUE));
      } else {
        const val = getIncreasedValueWithBounds(
          Number(internalTimeValue[segment]),
          TIME_SEGMENT_MAX_VALUE[segment],
          increment,
        );
        updateTimeSegment(segment, val);
      }
    },
    [internalTimeValue],
  );

  const decreaseValue = useCallback(
    (segment: TimeSegmentEnum, increment: number) => {
      const val = getDecreasedValueWithBounds(
        Number(internalTimeValue[segment]),
        TIME_SEGMENT_MAX_VALUE[segment],
        increment,
      );
      updateTimeSegment(segment, val);
    },
    [internalTimeValue],
  );

  const increaseSeconds = useCallback(() => {
    increaseValue(TimeSegmentEnum.SECONDS, secondIncrement);
  }, [secondIncrement, increaseValue]);

  const decreaseSeconds = useCallback(() => {
    decreaseValue(TimeSegmentEnum.SECONDS, secondIncrement);
  }, [secondIncrement, decreaseValue]);

  const increaseMinutes = useCallback(() => {
    increaseValue(TimeSegmentEnum.MINUTES, minuteIncrement);
  }, [minuteIncrement, increaseValue]);

  const decreaseMinutes = useCallback(() => {
    decreaseValue(TimeSegmentEnum.MINUTES, minuteIncrement);
  }, [minuteIncrement, decreaseValue]);

  const increaseHours = useCallback(() => {
    increaseValue(TimeSegmentEnum.HOURS, hourIncrement);
  }, [hourIncrement, increaseValue]);

  const decreaseHours = useCallback(() => {
    decreaseValue(TimeSegmentEnum.HOURS, hourIncrement);
  }, [hourIncrement, decreaseValue]);

  return {
    internalTimeValue,
    updateTimeSegment,
    handleOnChangeHours,
    handleOnChangeMinutes,
    handleOnChangeSeconds,
    increaseSeconds,
    decreaseSeconds,
    increaseMinutes,
    decreaseMinutes,
    increaseHours,
    decreaseHours,
  };
};

export default useTimePickerInternalValue;
