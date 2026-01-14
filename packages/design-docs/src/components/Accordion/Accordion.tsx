import { ReactNode, useState } from "react";

import AccordionIconToggle from "../AccordionIconToggle/AccordionIconToggle";

import "./Accordion.scss";

export interface AccordionProps {
  title: string;
  id?: string;
  children?: ReactNode;
}

const Accordion = ({ title, id, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

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
            <AccordionIconToggle isAccordionOpen={isOpen} />
            <h2 id={id || title.split(" ").join("-")}>{title}</h2>
          </div>
        </summary>
        <div className="rte-accordion-body">{children}</div>
      </details>
    </div>
  );
};

export default Accordion;
