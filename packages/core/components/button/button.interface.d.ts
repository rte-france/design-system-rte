export type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'transparent' | 'special';
export type ButtonSize = 'xs' | 's' | 'm';

export interface ButtonProps {
    /**
     *  Button contents
     */
    label: string;
    /**
     * The variant of button
     */
    type?: ButtonType;
    /**
     * How large should the button be?
     */
    size?: ButtonSize;
    /**
     * Indicates whether the button is disabled.
     */
    disabled?: boolean;
}