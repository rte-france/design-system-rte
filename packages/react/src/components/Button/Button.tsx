import { forwardRef } from 'react';

import { ButtonSize, ButtonProps as CoreButtonProps } from '@design-system-rte/core/components/button/button.interface';
import style from './Button.module.scss';
import Icon from '../Icon/Icon';

interface ButtonProps
  extends CoreButtonProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size' | 'type' | 'label' | 'onClick'> {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const buttonIconSize: Record<ButtonSize, number> = {
  s: 16,
  m: 20,
  l: 24,
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = 'm',
      label,
      type = 'filled',
      disabled = false,
      className = '',
      icon,
      iconPosition = 'left',
      onClick,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type="button"
        // TODO: use clsx to generate className concatenation
        className={style.button + ' ' + className}
        data-size={size}
        data-type={type}
        disabled={disabled}
        onClick={onClick}
        {...props}
      >
        {icon && iconPosition === 'left' && <Icon name={icon} size={buttonIconSize[size]} />}
        <span data-size={size} className={style.label}>
          {label}
        </span>
        {icon && iconPosition === 'right' && <Icon name={icon} size={buttonIconSize[size]} />}
      </button>
    );
  },
);

export default Button;
