import { ToastProps as coreToastProps } from '../../../../core/components/toast/toast.interface';
import { default as Button } from '../button/Button';
type DSButtonElement = React.ReactElement<React.ComponentProps<typeof Button>, typeof Button>;
interface ToastProps extends coreToastProps, React.HTMLAttributes<HTMLDivElement> {
    actionButton?: DSButtonElement;
}
declare const Toast: import('../../../../../node_modules/react').ForwardRefExoticComponent<ToastProps & import('../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default Toast;
