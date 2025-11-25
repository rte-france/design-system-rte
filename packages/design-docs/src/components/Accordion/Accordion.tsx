import Icon from "@design-system-rte/react/src/components/icon/Icon";
import React from "react";
import "./Accordion.scss";

export interface AccordionProps {
  title: string;
  id?: string;
  children?: React.ReactNode;
}

const Accordion = ({ title, id, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="rte-accordion">
      <details
        open
        onToggle={() => {
          setIsOpen(!isOpen);
        }}
      >
        <summary>
          <div className="rte-accordion-summary">
            {isOpen ? <Icon name="arrow-chevron-down" /> : <Icon name="arrow-chevron-up" />}
            <h2 id={id || title.split(" ").join("-")}>{title}</h2>
          </div>
        </summary>
        <div className="rte-accordion-body">{children}</div>
      </details>
    </div>
  );
};

export default Accordion;
