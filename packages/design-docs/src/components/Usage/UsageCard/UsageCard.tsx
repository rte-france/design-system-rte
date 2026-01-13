import { ReactNode } from "react";
import "./UsageCard.scss";

interface UsageCardProps {
  children: ReactNode;
}

const UsageCard = ({ children }: UsageCardProps) => {
  return <div className="usage-card">{children}</div>;
};

export default UsageCard;
