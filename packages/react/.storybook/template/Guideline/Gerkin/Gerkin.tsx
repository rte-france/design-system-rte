import "./Gerkin.scss";

interface GerkinProps {
  children?: React.ReactNode;
}

const Gerkin = ({ children }: GerkinProps) => <div className="gerkin-container">{children}</div>;

export default Gerkin;
