import { CardProps as CardPropsCore } from '../../../../core/components/card/card.interface';
interface CardProps extends CardPropsCore {
    children?: React.ReactNode;
    onClick?: () => void;
}
declare const Card: ({ size, cardType, clickable, disabled, children, onClick, ...props }: CardProps) => import("react/jsx-runtime").JSX.Element;
export default Card;
