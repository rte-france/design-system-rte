import { BaseTextInputProps as CoreTextInputProps } from '../../../../../core/components/text-input/text-input.interface';
import { InputHTMLAttributes } from '../../../../../../node_modules/react';
interface BaseTextInputProps extends CoreTextInputProps, Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "onChange" | "value" | "defaultValue" | "placeholder"> {
    onChange?: (value: string) => void;
}
declare const BaseTextInput: import('../../../../../../node_modules/react').ForwardRefExoticComponent<BaseTextInputProps & import('../../../../../../node_modules/react').RefAttributes<HTMLInputElement>>;
export default BaseTextInput;
