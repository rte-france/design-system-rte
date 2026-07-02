import { CardProps as CardPropsCore } from '../../../../core/components/card/card.interface';
import { HTMLAttributes } from '../../../../../node_modules/react';
interface CardProps extends CardPropsCore, Omit<HTMLAttributes<HTMLDivElement>, "onClick"> {
    onClick?: () => void;
}
declare const Card: import('../../../../../node_modules/react').ForwardRefExoticComponent<CardProps & import('../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default Card;
