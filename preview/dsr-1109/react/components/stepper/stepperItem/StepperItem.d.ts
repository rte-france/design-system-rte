import { StepperItemProps as coreStepperItemProps } from '../../../../../core/components/stepper/stepper.interface';
export interface StepperItemProps extends coreStepperItemProps, Omit<React.HTMLAttributes<HTMLLIElement>, "onClick" | "id"> {
    onClick?: () => void;
    showConnector?: boolean;
    connectorComplete?: boolean;
}
declare const StepperItem: ({ number, name, completionState, orientation, onClick, clickableCompleteStep, isActive, showConnector, connectorComplete, ...props }: StepperItemProps) => import("react").JSX.Element;
export default StepperItem;
