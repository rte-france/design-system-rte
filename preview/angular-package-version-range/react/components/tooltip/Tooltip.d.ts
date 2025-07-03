import { TooltipProps as CoreTooltipProps } from '../../../../core/components/tooltip/tooltip.interface';
interface TooltipProps extends CoreTooltipProps, Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
    children: React.ReactNode;
}
declare const Tooltip: import('../../../../../node_modules/react').ForwardRefExoticComponent<TooltipProps & import('../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default Tooltip;
