export type TimePickerDigitProps = {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    increase?: () => void;
    decrease?: () => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    unit: "h" | "m" | "s";
    withSeparator?: boolean;
    readOnly?: boolean;
};
declare const TimePickerDigit: import('../../../../../../../node_modules/react').ForwardRefExoticComponent<TimePickerDigitProps & import('../../../../../../../node_modules/react').RefAttributes<HTMLInputElement>>;
export default TimePickerDigit;
