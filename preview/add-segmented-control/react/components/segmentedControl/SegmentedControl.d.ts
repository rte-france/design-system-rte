import { SegmentProps as CoreSegmentProps, SegmentedControlProps as CoreSegmentedControlProps } from '../../../../core/components/segmented-control/segmented-control.interface';
import { MutableRefObject } from '../../../../../node_modules/react';
export interface SegmentProps extends CoreSegmentProps, Omit<React.HTMLAttributes<HTMLDivElement>, "id"> {
    onClick?: (event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void;
    parentRef?: MutableRefObject<HTMLDivElement | null>;
}
interface SegmentedControlProps extends CoreSegmentedControlProps, Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
    onChange: (id: string) => void;
}
declare const SegmentedControl: import('../../../../../node_modules/react').ForwardRefExoticComponent<SegmentedControlProps & import('../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default SegmentedControl;
