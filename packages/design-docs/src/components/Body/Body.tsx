import { ReactNode } from "react";
import "./Body.scss";

export interface BodyProps {
  children?: ReactNode;
}

const Body = ({ children }: BodyProps) => {
  return <div className="rte-storybook-body">{children}</div>;
};

export default Body;
