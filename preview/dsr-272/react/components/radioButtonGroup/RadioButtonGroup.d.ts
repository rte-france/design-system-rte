import { RadioButtonGroupProps as CoreRadioButtonGroupProps } from '../../../../core/components/radio-button-group/radio-button-group.interface';
import { default as React } from '../../../../../node_modules/react';
interface RadioButtonGroupProps extends CoreRadioButtonGroupProps, React.InputHTMLAttributes<HTMLDivElement> {
}
declare const RadioButtonGroup: React.ForwardRefExoticComponent<RadioButtonGroupProps & React.RefAttributes<HTMLDivElement>>;
export default RadioButtonGroup;
