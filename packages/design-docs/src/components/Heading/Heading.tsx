import { ReactNode } from "react";
import "./Heading.scss";

interface HeadingProps {
  id: string;
  level: number;
  hasAnchor?: boolean;
  children: ReactNode;
}

const Heading = ({ id, level, hasAnchor = true, children }: HeadingProps) => {
  const style = level === 1 ? { fontFamily: "Nunito" } : { fontFamily: "Nunito", border: "none" };

  const Tag = hasAnchor ? (`h${level}` as keyof JSX.IntrinsicElements) : ("span" as keyof JSX.IntrinsicElements);
  return (
    <Tag id={id} style={style} className={"rte-heading h" + level} data-has-anchor={hasAnchor}>
      {children}
    </Tag>
  );
};

export default Heading;
