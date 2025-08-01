import { MutableRefObject } from '../../../../../node_modules/react';
export interface SegmentProps extends React.HTMLAttributes<HTMLDivElement> {
    id: string;
    label?: string;
    icon?: string;
    iconAppearance?: "outlined" | "filled";
    position: "left" | "middle" | "right";
    selected?: boolean;
    onClick?: (event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void;
    parentRef?: MutableRefObject<HTMLDivElement | null>;
}
interface SegmentedControlProps extends React.HTMLAttributes<HTMLDivElement> {
    options: Omit<SegmentProps, "position" | "selected">[];
    selected?: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void;
}
declare const SegmentedControl: import('../../../../../node_modules/react').ForwardRefExoticComponent<SegmentedControlProps & import('../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default SegmentedControl;
