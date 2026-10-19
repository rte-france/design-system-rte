import { Direction } from '../../../../../../core/components/common/common-types';
export interface StepperSeparatorProps {
    isComplete: boolean;
    orientation?: Direction;
}
declare const StepperSeparator: ({ isComplete, orientation }: StepperSeparatorProps) => import("react").JSX.Element;
export default StepperSeparator;
