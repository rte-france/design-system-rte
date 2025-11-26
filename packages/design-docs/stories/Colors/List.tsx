import "./List.scss";

interface ListProps {
  children?: React.ReactNode;
}

const List = ({ children }: ListProps) => {
  return <ul className="colors-list">{children}</ul>;
};

export default List;
