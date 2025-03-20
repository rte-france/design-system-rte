import { forwardRef } from 'react';

import style from './Button.module.scss';
import { ButtonSize, ButtonProps as CoreButtonProps } from '../../../../core/components/button/button.interface';
import Icon from '../Icon/Icon';

type ButtonProps = CoreButtonProps & Omit<React.HTMLProps<HTMLButtonElement>, 'size' | 'type'>;

const buttonIconSize: Record<ButtonSize, number> = {
  s: 16,
  m: 20,
  l: 24,
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size = 'm', label, type = 'filled', disabled = false, className = '', leftIcon, rightIcon, ...props }, ref) => {
    return (
      <>
        <button
          ref={ref}
          type="button"
          // TODO: use clsx to generate className concatenation
          className={style.button + ' ' + className}
          data-size={size}
          data-type={type}
          disabled={disabled}
          {...props}
        >
          {leftIcon && <Icon name={leftIcon} size={buttonIconSize[size]} />}
          <span data-size={size} className={style.label}>
            {label}
          </span>
          {rightIcon && <Icon name={rightIcon} />}
        </button>
      </>
    );
  },
);

export default Button;
