import { DateSegmentEnum, DdMmYyyyDigitParts } from '../../../../../core';
declare const useDatePickerInternalValue: (value: Date | null, minDate?: Date, maxDate?: Date) => {
    dateState: DdMmYyyyDigitParts;
    internalValue: Date | null;
    increaseActiveSegmentValue: (segment: DateSegmentEnum) => void;
    decreaseActiveSegmentValue: (segment: DateSegmentEnum) => void;
    resetActiveSegmentValue: (segment: DateSegmentEnum) => void;
    updateDateSegment: (segment: DateSegmentEnum, val: string) => void;
    updateFullDate: (date: Date | null) => void;
    displayValue: string;
    updateDisplayedDate: (date: Date | null) => void;
};
export default useDatePickerInternalValue;
