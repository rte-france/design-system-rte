import { ModalProps as coreModalProps } from '../../../../core/components/modal/modal.interface';
import { DSButtonElement, DSFooterActionElement } from '../../abstract/baseFooter/BaseFooter';
interface ModalProps extends coreModalProps, Omit<React.HTMLAttributes<HTMLDialogElement>, "id" | "title"> {
    onClose: () => void;
    closeOnOverlayClick?: boolean;
    isOpen: boolean;
    children?: React.ReactNode | React.ReactNode[];
    primaryButton: DSFooterActionElement;
    secondaryButton?: DSButtonElement;
}
declare const Modal: import('../../../../../node_modules/react').ForwardRefExoticComponent<ModalProps & import('../../../../../node_modules/react').RefAttributes<HTMLDialogElement>>;
export default Modal;
