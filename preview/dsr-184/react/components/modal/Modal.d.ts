import { ModalProps as coreModalProps } from '../../../../core/components/modal/modal.interface';
import { default as Button } from '../button/Button';
type DSButtonElement = React.ReactElement<React.ComponentProps<typeof Button>, typeof Button>;
interface ModalProps extends coreModalProps, Omit<React.HTMLAttributes<HTMLDialogElement>, "id" | "title"> {
    onClose: () => void;
    closeOnOverlayClick?: boolean;
    isOpen: boolean;
    children?: React.ReactNode | React.ReactNode[];
    primaryButton: DSButtonElement;
    secondaryButton?: DSButtonElement;
}
declare const Modal: import('../../../../../node_modules/react').ForwardRefExoticComponent<ModalProps & import('../../../../../node_modules/react').RefAttributes<HTMLDialogElement>>;
export default Modal;
