import { DateSegmentEnum, DdMmYyyyDigitParts } from '../../../../../../core';
import { BaseInputPickerProps } from '../../baseInputPicker/BaseInputPicker';
interface DateRangeInputProps extends Omit<BaseInputPickerProps, "value" | "onChange"> {
    value: Date | null;
    onChange?: (newDate: Date | null) => void;
    activeSegment: DateSegmentEnum;
    moveToNextSegment: () => void;
    moveToPreviousSegment: () => void;
    minDate?: Date;
    maxDate?: Date;
    disabledDates?: Date[];
    dateState: DdMmYyyyDigitParts;
    internalValue: Date | null;
    increaseActiveSegmentValue: (segment: DateSegmentEnum) => void;
    decreaseActiveSegmentValue: (segment: DateSegmentEnum) => void;
    resetActiveSegmentValue: (segment: DateSegmentEnum) => void;
    updateDateSegment: (segment: DateSegmentEnum, value: string) => void;
    updateFullDate: (date: Date | null) => void;
    displayValue: string;
    isError?: boolean;
    readonly?: boolean;
}
declare const DateRangeInput: ({ id, pickerInputRef, isFocused, onKeyDown, onMouseDown, onMouseUp, onFocus, onBlur, ariaLabelledBy, ariaDescribedBy, openButtonAriaLabel, value, onChange, activeSegment, moveToNextSegment, moveToPreviousSegment, onOpenPicker, disabled, dateState, internalValue, increaseActiveSegmentValue, decreaseActiveSegmentValue, resetActiveSegmentValue, updateDateSegment, displayValue, isError, readonly, }: DateRangeInputProps) => import("react/jsx-runtime").JSX.Element;
export default DateRangeInput;
