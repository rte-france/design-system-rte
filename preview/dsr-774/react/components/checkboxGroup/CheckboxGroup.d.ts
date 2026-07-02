import { CheckboxGroupProps as CoreCheckboxGroupProps } from '../../../../core/components/checkbox-group/checkbox-group.interface';
import { default as React } from '../../../../../node_modules/react';
interface CheckboxGroupProps extends CoreCheckboxGroupProps, React.InputHTMLAttributes<HTMLDivElement> {
}
declare const CheckboxGroup: React.ForwardRefExoticComponent<CheckboxGroupProps & React.RefAttributes<HTMLDivElement>>;
export default CheckboxGroup;
