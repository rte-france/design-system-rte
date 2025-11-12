import React from "react";

interface HeadingProps {
  id: string;
  level: number;
  children: React.ReactNode;
}

const Heading = ({ id, level, children }: HeadingProps) => {
  const style = level === 1 ? { fontFamily: "Nunito" } : { fontFamily: "Nunito", border: "none" };

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Tag id={id} style={style}>
      {children}
    </Tag>
  );
};

export default Heading;
