import { DividerProps as coreDividerProps } from '../../../../core/components/divider/divider.interface';
interface DividerProps extends coreDividerProps, Omit<React.HTMLAttributes<HTMLDivElement>, "role"> {
}
declare const Divider: import('../../../../../node_modules/react').ForwardRefExoticComponent<DividerProps & import('../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default Divider;
