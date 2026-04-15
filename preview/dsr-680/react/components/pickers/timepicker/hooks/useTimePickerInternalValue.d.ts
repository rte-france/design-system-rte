import { TimeFormat, TimeSegmentEnum } from '../../../../../../core/components/timepicker/timepicker.interface.d';
declare const useTimePickerInternalValue: (value?: TimeFormat, incrementConfig?: {
    hourIncrement?: number;
    minuteIncrement?: number;
    secondIncrement?: number;
}) => {
    internalTimeValue: TimeFormat;
    updateTimeSegment: (segment: TimeSegmentEnum, val: string) => void;
    handleOnChangeHours: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleOnChangeMinutes: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleOnChangeSeconds: (e: React.ChangeEvent<HTMLInputElement>) => void;
    increaseSeconds: () => void;
    decreaseSeconds: () => void;
    increaseMinutes: () => void;
    decreaseMinutes: () => void;
    increaseHours: () => void;
    decreaseHours: () => void;
};
export default useTimePickerInternalValue;
