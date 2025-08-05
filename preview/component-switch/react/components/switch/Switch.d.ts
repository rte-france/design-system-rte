import { SwitchProps as CoreSwitchProps } from '../../../../core/components/switch/switch.interface';
import { InputHTMLAttributes } from '../../../../../node_modules/react';
interface SwitchProps extends CoreSwitchProps, InputHTMLAttributes<HTMLInputElement> {
}
declare const Switch: ({ label, appearance, showLabel, showIcon, disabled, readOnly, checked, ...props }: SwitchProps) => import("react/jsx-runtime").JSX.Element;
export default Switch;
