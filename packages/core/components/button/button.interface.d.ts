export type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'transparent' | 'special';
export type ButtonSize = 'xs' | 's' | 'm';

export interface ButtonProps {
    label: string;
    type: ButtonType;
    size: ButtonSize;
    disabled: boolean;
}