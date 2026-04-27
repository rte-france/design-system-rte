declare const DatePickerMenu: ({ isOpen, currentValue, hasAction, updateFullDate, updateDisplayedDate, onValidate, onCancel, displayValue, minDate, maxDate, disabledDates, onChange, onClose, }: {
    isOpen: boolean;
    currentValue: Date | null;
    updateFullDate: (date: Date | null) => void;
    updateDisplayedDate: (date: Date | null) => void;
    hasAction?: boolean;
    onValidate?: () => void;
    onCancel?: () => void;
    displayValue: string;
    minDate?: Date;
    maxDate?: Date;
    disabledDates?: readonly Date[];
    onChange?: (date: Date | null) => void;
    onClose?: () => void;
}) => import("react/jsx-runtime").JSX.Element;
export default DatePickerMenu;
