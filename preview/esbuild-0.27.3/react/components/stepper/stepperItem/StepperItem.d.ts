import { StepperItemProps as coreStepperItemProps } from '../../../../../core/components/stepper/stepper.interface';
export interface StepperItemProps extends coreStepperItemProps, Omit<React.HTMLAttributes<HTMLLIElement>, "onClick" | "id"> {
    onClick?: () => void;
}
declare const StepperItem: ({ number, name, completionState, orientation, onClick, clickableCompleteStep, isActive, ...props }: StepperItemProps) => import("react/jsx-runtime").JSX.Element;
export default StepperItem;
