import { TimePickerProps as coreTimePickerProps } from '../../../../../core';
interface TimePickerProps extends coreTimePickerProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, "id" | "onChange" | "value" | "defaultValue"> {
}
declare const TimePicker: import('../../../../../../node_modules/react').ForwardRefExoticComponent<TimePickerProps & import('../../../../../../node_modules/react').RefAttributes<HTMLInputElement>>;
export default TimePicker;
