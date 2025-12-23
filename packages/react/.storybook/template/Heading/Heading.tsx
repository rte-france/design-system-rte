import React from "react";

import "./Heading.scss";

interface HeadingProps {
  level: number;
  children: React.ReactNode;
  id?: string;
}

const Heading = ({ id, level, children }: HeadingProps) => {
  const style = level === 1 ? { fontFamily: "Nunito" } : { fontFamily: "Nunito", border: "none", margin: 0 };

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Tag id={id} style={style}>
      {children}
    </Tag>
  );
};

export default Heading;
