import { AccordionProps as coreAccordionProps } from '../../../../core/components/accordion/accordion.interface';
interface AccordionProps extends coreAccordionProps, Omit<React.HTMLAttributes<HTMLButtonElement>, "title"> {
    children?: React.ReactNode | React.ReactNode[];
}
declare const Accordion: import('../../../../../node_modules/react').ForwardRefExoticComponent<AccordionProps & import('../../../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
export default Accordion;
