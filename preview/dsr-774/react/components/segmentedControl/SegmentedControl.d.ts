import { SegmentedControlProps as CoreSegmentedControlProps } from '../../../../core/components/segmented-control/segmented-control.interface';
interface SegmentedControlProps extends CoreSegmentedControlProps, Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
    onChange: (id: string) => void;
}
declare const SegmentedControl: import('../../../../../node_modules/react').ForwardRefExoticComponent<SegmentedControlProps & import('../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default SegmentedControl;
