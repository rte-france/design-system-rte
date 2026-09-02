import { CheckboxGroupProps as CoreCheckboxGroupProps } from '../../../../core/components/checkbox-group/checkbox-group.interface';
import { default as React } from '../../../../../node_modules/react';
interface CheckboxGroupProps extends CoreCheckboxGroupProps, React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
}
declare const CheckboxGroup: React.ForwardRefExoticComponent<CheckboxGroupProps & React.RefAttributes<HTMLFieldSetElement>>;
export default CheckboxGroup;
