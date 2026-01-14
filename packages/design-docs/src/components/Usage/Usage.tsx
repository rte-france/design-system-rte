import { ReactNode } from "react";

import Accordion from "../Accordion/Accordion";
import "./Usage.scss";

export interface UsageProps {
  image?: string;
  contentStandards?: ReactNode;
}

const Usage = ({ image, contentStandards }: UsageProps) => {
  return (
    <div className="usage-wrapper">
      <Accordion title="Usage">
        <div className="usage-container">
          {image && <img src={image} alt="Usage guidelines" />}
          {contentStandards && <div className="content-standard">{contentStandards}</div>}
        </div>
      </Accordion>
    </div>
  );
};

export default Usage;
