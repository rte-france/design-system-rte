export type ButtonVariant = 'primary' | 'secondary' | 'text' | 'transparent' | 'danger'
export type ButtonSize = 's' | 'm' | 'l';
export type ButtonIconPosition = 'left' | 'right';

export interface ButtonProps {
    label: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    icon?: string;
    iconPosition?: ButtonIconPosition
}