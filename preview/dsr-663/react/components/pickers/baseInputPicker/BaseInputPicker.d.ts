import { BaseInput } from '../../../../../core/components/base-input/base-input.interface';
interface BaseInputPickerProps extends BaseInput {
    value?: string;
    onChange?: () => void;
    isFocused?: boolean;
    pickerInputRef?: React.RefObject<HTMLInputElement> | ((element: HTMLInputElement) => void);
    pickerRef?: React.RefObject<HTMLDivElement>;
    onFocus?: () => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onMouseUp?: () => void;
    onOpenPicker?: () => void;
    ariaLabelledBy?: string;
    openButtonAriaLabel?: string;
}
declare const BaseInputPicker: ({ id, value, readOnly, onChange, onFocus, onKeyDown, onMouseUp, onOpenPicker, isFocused, pickerInputRef, pickerRef, ariaLabelledBy, isError, disabled, openButtonAriaLabel, }: BaseInputPickerProps) => import("react/jsx-runtime").JSX.Element;
export default BaseInputPicker;
