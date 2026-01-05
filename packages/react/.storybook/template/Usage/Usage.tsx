import React from "react";

import Accordion from "../../../../design-docs/src/components/Accordion/Accordion";
import Icon from "../../../src/components/icon/Icon";
import Heading from "../Heading/Heading";
import "./Usage.scss";

export interface UsageProps {
  positiveContent: React.ReactNode;
  negativeContent: React.ReactNode;
  contentStandards?: React.ReactNode;
}

const Usage = ({ positiveContent, negativeContent, contentStandards }: UsageProps) => {
  return (
    <div className="usage-wrapper">
      <Accordion title="Usage">
        <div className="usage-container">
          <div className="usage">
            <div className="section positive">
              <div className="title">
                <Icon name="check-circle" size={16} />
                <Heading id="" level={3}>
                  A faire
                </Heading>
              </div>
              <div className="body">{positiveContent}</div>
            </div>
            <div className="section negative">
              <div className="title">
                <Icon name="cancel" size={16} />
                <Heading id="" level={3}>
                  A ne pas faire
                </Heading>
              </div>
              <div className="body">{negativeContent}</div>
            </div>
          </div>
          {contentStandards && <div className="content-standard">{contentStandards}</div>}
        </div>
      </Accordion>
    </div>
  );
};

export default Usage;
