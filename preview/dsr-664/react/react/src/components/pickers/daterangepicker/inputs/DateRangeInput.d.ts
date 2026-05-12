import { DateSegmentEnum } from '../../../../../../core';
import { BaseInputPickerProps } from '../../baseInputPicker/BaseInputPicker';
interface DateRangeInputProps extends Omit<BaseInputPickerProps, "value" | "onChange"> {
    value: Date | null;
    onChange?: (newDate: Date | null) => void;
    activeSegment: DateSegmentEnum;
    moveToNextSegment: () => void;
    moveToPreviousSegment: () => void;
}
declare const DateRangeInput: ({ id, pickerInputRef, isFocused, onKeyDown, onMouseDown, onMouseUp, onFocus, onBlur, value, onChange, activeSegment, moveToNextSegment, moveToPreviousSegment, onOpenPicker, }: DateRangeInputProps) => import("react/jsx-runtime").JSX.Element;
export default DateRangeInput;
