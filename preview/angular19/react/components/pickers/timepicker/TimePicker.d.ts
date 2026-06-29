import { TimePickerProps as coreTimePickerProps } from '../../../../../core';
interface TimePickerProps extends coreTimePickerProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, "id" | "onChange" | "value" | "defaultValue" | "placeholder"> {
}
declare const TimePicker: import('../../../../node_modules/react').ForwardRefExoticComponent<TimePickerProps & import('../../../../node_modules/react').RefAttributes<HTMLInputElement>>;
export default TimePicker;
