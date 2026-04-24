interface DatePickerProps {
    value: Date | null;
    disabled?: boolean;
    onChange?: (newDate: Date | null) => void;
    onValidate?: () => void;
    onCancel?: () => void;
    hasAction?: boolean;
    minDate?: Date;
    maxDate?: Date;
    disabledDates?: Date[];
}
declare const DatePicker: ({ disabled, value, onChange, hasAction, onCancel, onValidate, minDate, maxDate, disabledDates, }: DatePickerProps) => import("react/jsx-runtime").JSX.Element;
export default DatePicker;
