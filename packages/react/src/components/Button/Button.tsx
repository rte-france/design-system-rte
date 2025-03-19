import { forwardRef } from 'react';

import style from './Button.module.scss';
import { ButtonProps as CoreButtonProps } from '../../../../core/components/button/button.interface';

type ButtonProps = CoreButtonProps & Omit<React.HTMLProps<HTMLButtonElement>, 'size' | 'type'>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size = 'm', label, type = 'filled', disabled = false, className = '', ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        // TODO: use clsx to generate className concatenation
        className={style.coreButton + ' ' + className}
        data-size={size}
        data-type={type}
        disabled={disabled}
        {...props}
      >
        {label}
      </button>
    );
  },
);

export default Button;
