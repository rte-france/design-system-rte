interface DateRangePickerMenuProps {
    isOpen: boolean;
    currentValue: [Date | null, Date | null] | null;
    hasAction?: boolean;
    onValidate?: () => void;
    onCancel?: () => void;
    minDate?: Date;
    maxDate?: Date;
    disabledDates?: readonly Date[];
    onChangeStartDate?: (date: Date | null) => void;
    onChangeEndDate?: (date: Date | null) => void;
    onChange?: (date: Date | null) => void;
    selectionMode?: "start" | "end";
}
declare const DateRangePickerMenu: ({ isOpen, currentValue, hasAction, onValidate, onCancel, minDate, maxDate, disabledDates, onChange, selectionMode, }: DateRangePickerMenuProps) => import("react/jsx-runtime").JSX.Element;
export default DateRangePickerMenu;
