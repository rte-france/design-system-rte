import { ReactNode } from "react";

import "./Gerkin.scss";

interface GerkinProps {
  children?: ReactNode;
}

const Gerkin = ({ children }: GerkinProps) => <div className="gerkin-container">{children}</div>;

export default Gerkin;
