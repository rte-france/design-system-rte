import { InputProps } from '../../../../../core/components/common/input-props';
interface DateRangePickerProps extends Omit<InputProps, "value" | "onChange"> {
    id: string;
    value: [Date | null, Date | null] | null;
    onChange?: (value: [Date | null, Date | null] | null) => void;
    hasAction?: boolean;
    onValidate?: () => void;
    onCancel?: () => void;
    minDate?: Date;
    maxDate?: Date;
    disabledDates?: Date[];
}
declare const DateRangePicker: ({ id, label, labelId, required, showLabelRequirement, value, onChange, hasAction, onValidate, onCancel, minDate, maxDate, disabledDates, disabled, assistiveTextLabel, assistiveAppearance, showAssistiveIcon, assistiveTextLink, isError, }: DateRangePickerProps) => import("react/jsx-runtime").JSX.Element;
export default DateRangePicker;
