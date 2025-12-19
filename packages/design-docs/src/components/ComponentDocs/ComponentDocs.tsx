import React from "react";

import Header from "../Header/Header";

import Overview from "./Overview/Overview";
import Tabs from "./Tabs/Tabs";

import "./ComponentDocs.scss";

interface ComponentDocsProps {
  title: string;
  description?: React.ReactNode;
  linkFigma?: string;
  linkGithub?: string;
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
  guidelines?: React.ReactNode;
  accessibility?: React.ReactNode;
}

const ComponentDocs = ({
  title,
  description,
  linkFigma,
  linkGithub,
  disponibility,
  changelog,
  options,
  guidelines,
  accessibility,
}: ComponentDocsProps) => {
  return (
    <div className="rte-component-docs">
      <Header title={title} linkFigma={linkFigma} linkGithub={linkGithub}>
        {description}
      </Header>

      <Tabs>
        <div className="rte-component-docs-overview">
          <Overview disponibility={disponibility} changelog={changelog} options={options} />
        </div>

        <div className="rte-component-docs-guidelines">
          {guidelines || (
            <div style={{ padding: "16px" }}>
              <p>Guidelines content will be added here.</p>
            </div>
          )}
        </div>

        <div className="rte-component-docs-accessibility">
          {accessibility || (
            <div style={{ padding: "16px" }}>
              <p>Accessibility content will be added here.</p>
            </div>
          )}
        </div>
      </Tabs>
    </div>
  );
};

export default ComponentDocs;
