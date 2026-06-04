import { BaseInputProps } from '../../../../../core/components/common/input/input.interface';
export interface BaseInputPickerProps extends BaseInputProps<string> {
    onChange?: () => void;
    icon?: string;
    isFocused?: boolean;
    pickerInputRef?: React.RefObject<HTMLInputElement> | ((element: HTMLInputElement) => void);
    pickerRef?: React.RefObject<HTMLDivElement>;
    onFocus?: () => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onMouseUp?: (event: React.MouseEvent<HTMLInputElement>) => void;
    onMouseDown?: () => void;
    onOpenPicker?: () => void;
    onBlur?: () => void;
    ariaLabelledBy?: string;
    ariaDescribedBy?: string;
    openButtonAriaLabel?: string;
    fixedWidth?: boolean;
}
declare const BaseInputPicker: ({ id, value, readOnly, icon, onChange, onFocus, onKeyDown, onMouseUp, onMouseDown, onOpenPicker, onBlur, isFocused, pickerInputRef, pickerRef, ariaLabelledBy, ariaDescribedBy, isError, disabled, openButtonAriaLabel, fixedWidth, }: BaseInputPickerProps) => import("react/jsx-runtime").JSX.Element;
export default BaseInputPicker;
