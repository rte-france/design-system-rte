import { PopoverProps as CorePopoverProps } from '../../../../core/components/popover/popover.interface';
interface PopoverProps extends CorePopoverProps, Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "content"> {
    content: string;
    children: React.ReactNode;
    triggerStyles?: React.CSSProperties;
}
declare const Popover: import('../../../../../node_modules/react').ForwardRefExoticComponent<PopoverProps & import('../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default Popover;
