import { ReactNode } from "react";

import "./Paragraph.scss";

interface ParagraphProps {
  children: ReactNode;
}

const Paragraph = ({ children }: ParagraphProps) => {
  return <p className="rte-paragraph"> {children} </p>;
};

export default Paragraph;
