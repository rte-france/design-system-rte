import { StepperItemProps as coreStepperItemProps } from '../../../../../core/components/stepper/stepper.interface';
export interface StepperItemProps extends coreStepperItemProps, React.HTMLAttributes<HTMLLIElement> {
}
declare const StepperItem: ({ number, name, completionState, orientation, ...props }: StepperItemProps) => import("react/jsx-runtime").JSX.Element;
export default StepperItem;
