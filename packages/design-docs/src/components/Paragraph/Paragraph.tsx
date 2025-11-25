import React from "react";

import "./Paragraph.scss";

interface ParagraphProps {
  children: React.ReactNode;
}

const Paragraph = ({ children }: ParagraphProps) => {
  return <p className="rte-paragraph"> {children} </p>;
};

export default Paragraph;
