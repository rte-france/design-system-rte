export type ButtonType = 'filled' | 'outlined' | 'text' | 'transparent' | 'danger'
export type ButtonSize = 's' | 'm' | 'l';

export interface ButtonProps {
    label: string;
    type?: ButtonType;
    size?: ButtonSize;
    disabled?: boolean;
}