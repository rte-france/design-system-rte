import { ReactNode } from "react";

import Heading from "../../Heading/Heading";

import Changelog from "./Changelog/Changelog";
import Disponibility from "./Disponibility/Disponibility";
import Options from "./Options/Options";

import "./Overview.scss";

interface OverviewProps {
  disponibility?: {
    design?: {
      figma?: boolean;
      guidelines?: boolean;
    };
    code?: {
      react?: boolean;
      angular?: boolean;
    };
  };
  changelog?: {
    version: string;
    date: string;
    changes: string[];
  }[];
  options?: {
    property: string;
    value: string;
    defaultValue: string;
    dependance: string;
  }[];
  optionsContent?: ReactNode;
}

const Overview = ({ disponibility, changelog, options, optionsContent }: OverviewProps) => {
  return (
    <div className="rte-overview">
      <div className="rte-overview-top">
        <div className="rte-overview-section">
          <Heading level={2} id="disponibility">
            Disponibilité
          </Heading>
          {disponibility && <Disponibility {...disponibility} />}
        </div>
        <div className="rte-overview-section">
          <Heading level={2} id="changelog">
            Dernières mises à jour
          </Heading>
          {changelog && <Changelog updates={changelog} />}
        </div>
      </div>
      {options && (
        <div className="rte-overview-section">
          <Heading level={2} id="options">
            Options
          </Heading>
          <Options options={options}>{optionsContent}</Options>
        </div>
      )}
    </div>
  );
};

export default Overview;
