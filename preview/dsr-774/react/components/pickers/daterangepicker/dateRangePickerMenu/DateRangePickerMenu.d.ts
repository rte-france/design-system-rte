interface DateRangePickerMenuProps {
    isOpen: boolean;
    currentValue: [Date | null, Date | null] | null;
    hasAction?: boolean;
    onValidate?: () => void;
    onCancel?: () => void;
    minDate?: Date;
    maxDate?: Date;
    disabledDates?: readonly Date[];
    onChange?: (date: Date | null) => void;
    selectionMode?: "start" | "end";
    setInitialValue?: (date: [Date | null, Date | null]) => void;
}
declare const DateRangePickerMenu: ({ isOpen, currentValue, hasAction, onValidate, onCancel, minDate, maxDate, disabledDates, onChange, selectionMode, setInitialValue, }: DateRangePickerMenuProps) => import("react").JSX.Element;
export default DateRangePickerMenu;
