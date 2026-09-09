import { StepperProps as coreStepperProps } from '../../../../core/components/stepper/stepper.interface';
interface StepperProps extends coreStepperProps, React.HTMLAttributes<HTMLElement> {
    activeStepId: string | null;
}
declare const Stepper: import('../../../../../node_modules/react').ForwardRefExoticComponent<StepperProps & import('../../../../../node_modules/react').RefAttributes<HTMLElement>>;
export default Stepper;
