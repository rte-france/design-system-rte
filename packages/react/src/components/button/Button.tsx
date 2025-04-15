import { forwardRef } from 'react';

import { ButtonProps as CoreButtonProps } from '@design-system-rte/core/components/button/button.interface';
import { buttonIconSize } from '@design-system-rte/core/components/button/button.constants';
import style from './Button.module.scss';
import Icon from '../icon/Icon';
import { concatClassNames } from '../utils';

interface ButtonProps
  extends Omit<CoreButtonProps, 'disabled'>,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = 'm',
      label,
      variant = 'filled',
      className = '',
      icon,
      iconPosition = 'left',
      onClick,
      type = 'button',
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={concatClassNames(style.button, className)}
        data-size={size}
        data-variant={variant}
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
