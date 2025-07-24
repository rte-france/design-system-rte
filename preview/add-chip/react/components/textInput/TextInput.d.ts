import { TextInputProps as CoreTextInputProps } from '../../../../core/components/text-input/text-input.interface';
import { InputHTMLAttributes } from '../../../../../node_modules/react';
interface TextInputProps extends CoreTextInputProps, Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "onChange" | "value" | "defaultValue" | "placeholder"> {
    onChange?: (value: string) => void;
}
declare const TextInput: import('../../../../../node_modules/react').ForwardRefExoticComponent<TextInputProps & import('../../../../../node_modules/react').RefAttributes<HTMLInputElement>>;
export default TextInput;
