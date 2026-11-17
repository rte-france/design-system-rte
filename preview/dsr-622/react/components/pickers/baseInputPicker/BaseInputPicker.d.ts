import { BaseInputProps } from '../../../../../core/components/common/input/input.interface';
export interface BaseInputPickerProps extends BaseInputProps<string> {
    onChange?: () => void;
    onClickReset?: () => void;
    icon?: string;
    isFocused?: boolean;
    pickerInputRef?: React.RefObject<HTMLInputElement> | ((element: HTMLInputElement) => void);
    pickerRef?: React.RefObject<HTMLDivElement>;
    openButtonRef?: React.RefObject<HTMLButtonElement>;
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
    required?: boolean;
    isCompact?: boolean;
    placeholder?: string;
    showResetIcon?: boolean;
}
declare const BaseInputPicker: ({ id, value, readOnly, icon, onChange, onFocus, onKeyDown, onMouseUp, onMouseDown, onOpenPicker, onClickReset, onBlur, isFocused, pickerInputRef, pickerRef, openButtonRef, ariaLabelledBy, ariaDescribedBy, isError, disabled, openButtonAriaLabel, fixedWidth, required, isCompact, placeholder, showResetIcon, }: BaseInputPickerProps) => import("react").JSX.Element;
export default BaseInputPicker;
