import { TextareaProps as CoreTextareaProps } from '../../../../core/components/textarea/textarea.interface';
import { ChangeEvent, TextareaHTMLAttributes } from '../../../../../node_modules/react';
interface TextareaProps extends CoreTextareaProps, Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange" | "value" | "defaultValue" | "placeholder"> {
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}
declare const Textarea: import('../../../../../node_modules/react').ForwardRefExoticComponent<TextareaProps & import('../../../../../node_modules/react').RefAttributes<HTMLTextAreaElement>>;
export default Textarea;
