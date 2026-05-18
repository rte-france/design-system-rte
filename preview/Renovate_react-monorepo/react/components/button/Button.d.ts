import { ButtonProps as CoreButtonProps } from '../../../../core/components/button/button.interface';
interface ButtonProps extends Omit<CoreButtonProps, "disabled">, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
declare const Button: import('../../../../../node_modules/react').ForwardRefExoticComponent<ButtonProps & import('../../../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
export default Button;
