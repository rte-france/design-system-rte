import { NumberInputProps as CoreNumberInputProps } from '../../../../core/components/number-input/number-input.interface';
import { InputHTMLAttributes } from '../../../../../node_modules/react';
interface NumberInputProps extends CoreNumberInputProps, Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "value" | "defaultValue" | "onChange" | "onBlur" | "aria-label" | "aria-labelledby" | "min" | "max" | "step" | "name" | "width" | "placeholder"> {
    onBlur?: () => void;
    "aria-label"?: string;
    "aria-labelledby"?: string;
}
declare const NumberInput: import('../../../../../node_modules/react').ForwardRefExoticComponent<NumberInputProps & import('../../../../../node_modules/react').RefAttributes<HTMLInputElement>>;
export default NumberInput;
