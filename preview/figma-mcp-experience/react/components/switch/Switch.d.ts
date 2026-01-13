import { SwitchProps as CoreSwitchProps } from '../../../../core/components/switch/switch.interface';
import { InputHTMLAttributes } from '../../../../../node_modules/react';
interface SwitchProps extends CoreSwitchProps, InputHTMLAttributes<HTMLInputElement> {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const Switch: ({ label, appearance, showLabel, showIcon, disabled, readOnly, checked, onChange, ...props }: SwitchProps) => import("react/jsx-runtime").JSX.Element;
export default Switch;
