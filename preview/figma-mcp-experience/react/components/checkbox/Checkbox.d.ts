import { CheckboxProps as CoreCheckboxProps } from '../../../../core/components/checkbox/checkbox.interface';
interface CheckboxProps extends CoreCheckboxProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, "id"> {
}
declare const Checkbox: ({ id, label, showLabel, disabled, description, error, errorMessage, readOnly, indeterminate, ...props }: CheckboxProps) => import("react/jsx-runtime").JSX.Element;
export default Checkbox;
