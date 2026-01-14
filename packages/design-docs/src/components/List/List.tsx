import { ReactNode } from "react";
import "./List.scss";

interface ListProps {
  children?: ReactNode;
}

const List = ({ children }: ListProps) => {
  return <ul className="colors-list">{children}</ul>;
};

export default List;
