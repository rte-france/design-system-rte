import { forwardRef } from 'react';

import { ButtonProps as CoreButtonProps } from '@design-system-rte/core/components/button/button.interface';
import style from './Button.module.scss';
import { concatClassNames } from '../utils';

interface ButtonProps
  extends Omit<CoreButtonProps, 'disabled'>,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size = 'm', label, variant = 'primary', className = '', onClick, type = 'button', ...props }, ref) => {
    return (
      <>
        <button
          ref={ref}
          type={type}
          className={concatClassNames(style.button, className)}
          data-size={size}
          data-variant={variant}
          onClick={onClick}
          {...props}
        >
          <span data-size={size} className={style.label}>
            {label}
          </span>
        </button>
      </>
    );
  },
);

export default Button;
