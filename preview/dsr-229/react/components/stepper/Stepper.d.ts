import { StepperProps as coreStepperProps } from '../../../../core/components/stepper/stepper.interface';
interface StepperProps extends coreStepperProps, React.HTMLAttributes<HTMLElement> {
    steps: {
        name: string;
        completionState: "unvisited" | "active" | "incomplete" | "complete";
        onClick?: () => void;
    }[];
}
declare const Stepper: import('../../../../../node_modules/react').ForwardRefExoticComponent<StepperProps & import('../../../../../node_modules/react').RefAttributes<HTMLElement>>;
export default Stepper;
