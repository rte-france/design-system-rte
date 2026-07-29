import { ToastProps as coreToastProps } from '../../../../core/components/toast/toast.interface';
interface ToastProps extends coreToastProps, React.HTMLAttributes<HTMLDivElement> {
    showActionButton?: boolean;
}
declare const Toast: import('../../../../../node_modules/react').ForwardRefExoticComponent<ToastProps & import('../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default Toast;
