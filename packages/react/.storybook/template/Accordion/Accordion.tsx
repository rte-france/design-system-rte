import "./Accordion.scss";

export interface AccordionProps {
  title: string;
  children?: React.ReactNode;
}

const Accordion = ({ title, children }: AccordionProps) => {
  return (
    <div className="rte-accordion">
      <details open>
        <summary>
          <span>{title}</span>
        </summary>
        {children}
      </details>
    </div>
  );
};

export default Accordion;
