export type ButtonType = 'filled' | 'outlined' | 'text' | 'transparent' | 'danger'
export type ButtonSize = 's' | 'm' | 'l';
export type ButtonIconPosition = 'left' | 'right';

export interface ButtonProps {
    label: string;
    type?: ButtonType;
    size?: ButtonSize;
    disabled?: boolean;
    icon?: string;
    iconPosition?: ButtonIconPosition
}