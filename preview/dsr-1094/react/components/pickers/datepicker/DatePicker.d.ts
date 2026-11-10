import { DatepickerProps as CoreDatePickerProps } from '../../../../../core/components/datepicker/datepicker.interface';
interface DatepickerProps extends Omit<CoreDatePickerProps, "labelId">, Omit<React.HTMLAttributes<HTMLDivElement>, "id" | "onChange" | "defaultValue"> {
}
declare const DatePicker: import('../../../../../../node_modules/react').ForwardRefExoticComponent<DatepickerProps & import('../../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default DatePicker;
