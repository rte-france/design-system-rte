import { AccordionProps as coreAccordionProps } from '../../../../core/components/accordion/accordion.interface';
interface AccordionProps extends coreAccordionProps, React.HTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode | React.ReactNode[];
}
declare const Accordion: ({ id, children, icon, alignement, disabled, isOpen, appearance, compactSpacing, size, onClick, }: AccordionProps) => import("react/jsx-runtime").JSX.Element;
export default Accordion;
