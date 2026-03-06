import type { ModalProps as coreModalProps } from "@design-system-rte/core/components/modal/modal.interface";
import { forwardRef, useCallback, useState } from "react";

import BaseFooter, { DSButtonElement } from "../../abstract/baseFooter/BaseFooter";
import BaseHeader from "../../abstract/baseHeader/BaseHeader";
import useAnimatedMount from "../../hooks/useAnimatedMount";
import { useClickAway } from "../../hooks/useClickAway";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import { useKeydownEscape } from "../../hooks/useKeydownEscape";
import { Overlay } from "../overlay/Overlay";
import { concatClassNames } from "../utils";

import styles from "./Modal.module.scss";

interface ModalProps extends coreModalProps, Omit<React.HTMLAttributes<HTMLDialogElement>, "id" | "title"> {
  onClose: () => void;
  closeOnOverlayClick?: boolean;
  isOpen: boolean;
  children?: React.ReactNode | React.ReactNode[];
  primaryButton: DSButtonElement;
  secondaryButton?: DSButtonElement;
}

const Modal = forwardRef<HTMLDialogElement, ModalProps>(
  (
    {
      id,
      isOpen,
      title,
      icon,
      iconAppearance,
      description,
      primaryButton,
      secondaryButton,
      size = "m",
      closeOnOverlayClick = true,
      onClose,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const { shouldRender, isAnimating } = useAnimatedMount(isOpen, 150);
    const [modalElement, setModalElement] = useState<HTMLDialogElement | null>(null);

    const modalCallbackRef = useCallback(
      (node: HTMLDialogElement | null) => {
        setModalElement(node);
        if (typeof ref === "function") ref(node);
        else if (ref) (ref as React.MutableRefObject<HTMLDialogElement | null>).current = node;
      },
      [ref],
    );

    useClickAway(closeOnOverlayClick ? onClose : () => {}, modalElement!);
    useKeydownEscape(onClose);
    useFocusTrap(modalElement!, shouldRender);

    return (
      <>
        {shouldRender && (
          <Overlay freezeNavigation={true}>
            <div className={styles["modal-backdrop"]} data-open={isAnimating}></div>
            <dialog
              ref={modalCallbackRef}
              className={concatClassNames(styles["modal-container"], className)}
              aria-modal="true"
              aria-labelledby={`${id}-modal-title`}
              aria-describedby={description ? `${id}-modal-desc` : props["aria-describedby"]}
              data-size={size}
              data-open={isAnimating}
            >
              <BaseHeader id={id} title={title} icon={icon} iconAppearance={iconAppearance} onClose={onClose} />

              {(description || children) && (
                <div className={styles["modal-content"]}>
                  <p className={styles["modal-content-description"]} id={`${id}-modal-desc`}>
                    {description}
                  </p>
                  {children}
                </div>
              )}
              <BaseFooter primaryButton={primaryButton} secondaryButton={secondaryButton} />
            </dialog>
          </Overlay>
        )}
      </>
    );
  },
);

export default Modal;
