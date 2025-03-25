import { ButtonProps as CoreButtonProps } from '../../../../core/components/button/button.interface';
type ButtonProps = CoreButtonProps & Omit<React.HTMLProps<HTMLButtonElement>, 'size' | 'type'>;
declare const Button: import('../../../../../node_modules/react').ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & import('../../../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
export default Button;
