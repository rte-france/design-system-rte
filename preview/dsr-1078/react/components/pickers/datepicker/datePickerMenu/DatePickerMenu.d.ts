interface DatePickerMenuProps {
    isOpen: boolean;
    currentValue: Date | null;
    updateFullDate: (date: Date | null) => void;
    updateDisplayedDate: (date: Date | null) => void;
    hasActions?: boolean;
    onValidate?: () => void;
    onCancel?: () => void;
    displayValue: string;
    minDate?: Date;
    maxDate?: Date;
    disabledDates?: readonly Date[];
    onChange?: (date: Date | null) => void;
}
declare const DatePickerMenu: ({ isOpen, currentValue, hasActions, updateFullDate, updateDisplayedDate, onValidate, onCancel, displayValue, minDate, maxDate, disabledDates, onChange, }: DatePickerMenuProps) => import("react").JSX.Element;
export default DatePickerMenu;
