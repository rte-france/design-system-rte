import { RadioButtonProps as CoreRadioButtonProps } from '../../../../core/components/radio-button/radio-button.interface';
import { default as React } from '../../../../../node_modules/react';
interface RadioButtonProps extends CoreRadioButtonProps, React.InputHTMLAttributes<HTMLInputElement> {
}
declare const RadioButton: React.ForwardRefExoticComponent<RadioButtonProps & React.RefAttributes<HTMLInputElement>>;
export default RadioButton;
