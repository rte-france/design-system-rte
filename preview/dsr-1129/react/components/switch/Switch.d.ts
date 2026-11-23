import { SwitchProps as CoreSwitchProps } from '../../../../core/components/switch/switch.interface';
import { InputHTMLAttributes } from '../../../../../node_modules/react';
interface SwitchProps extends CoreSwitchProps, InputHTMLAttributes<HTMLInputElement> {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const Switch: ({ label, appearance, showIcon, disabled, readOnly, checked, defaultChecked, onChange, ["aria-labelledby"]: ariaLabelledBy, ["aria-label"]: ariaLabel, ...props }: SwitchProps) => import("react").JSX.Element | undefined;
export default Switch;
