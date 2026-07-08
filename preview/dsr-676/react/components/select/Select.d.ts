import { SelectProps as coreSelectProps } from '../../../../core/components/select/select.interface';
interface SingleSelectProps extends Omit<coreSelectProps, "value" | "onChange"> {
    multiple?: false;
    value?: string;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    onChange?: (value: string) => void;
}
interface MultiSelectProps extends Omit<coreSelectProps, "value" | "onChange"> {
    multiple: true;
    value?: string[];
    header?: React.ReactNode;
    footer?: React.ReactNode;
    onChange?: (value: string[]) => void;
}
export type SelectProps = SingleSelectProps | MultiSelectProps;
declare const Select: import('../../../../../node_modules/react').ForwardRefExoticComponent<SelectProps & import('../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default Select;
