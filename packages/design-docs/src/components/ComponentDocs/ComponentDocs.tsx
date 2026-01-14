import { ReactNode, useEffect, useState } from "react";

import Header from "../Header/Header";

import { useFrameworkContext } from "./FrameworkContext";
import Overview from "./Overview/Overview";
import Tabs from "./Tabs/Tabs";

import "./ComponentDocs.scss";

interface ComponentDocsProps {
  title: string;
  description?: ReactNode;
  linkFigma?: string;
  linkGithub?: { angular?: string; react?: string };
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
  guidelines?: ReactNode;
  accessibility?: ReactNode;
}

const ComponentDocs = ({
  title,
  description,
  linkFigma,
  linkGithub,
  disponibility,
  changelog,
  options,
  optionsContent,
  guidelines,
  accessibility,
}: ComponentDocsProps) => {
  const contextFramework = useFrameworkContext().framework;

  function detectFramework(): "angular" | "react" {
    const pathname = window.location.pathname;
    if (pathname.includes("/angular/")) {
      return "angular";
    }
    if (pathname.includes("/react/")) {
      return "react";
    }

    const port = window.location.port;
    if (port === "7007") {
      return "angular";
    }
    if (port === "7008") {
      return "react";
    }

    return contextFramework;
  }

  const [framework, setFramework] = useState<"angular" | "react">(detectFramework);

  useEffect(() => {
    const detectedFramework = detectFramework();
    setFramework(detectedFramework);
  }, [contextFramework]);

  const resolvedLinkGithub: string = linkGithub?.[framework] || "";

  return (
    <div className="rte-component-docs">
      <Header title={title} linkFigma={linkFigma} linkGithub={resolvedLinkGithub}>
        {description}
      </Header>

      <Tabs>
        <div className="rte-component-docs-overview">
          <Overview
            disponibility={disponibility}
            changelog={changelog}
            options={options}
            optionsContent={optionsContent}
          />
        </div>

        <div className="rte-component-docs-guidelines">{guidelines}</div>

        <div className="rte-component-docs-accessibility">{accessibility}</div>
      </Tabs>
    </div>
  );
};

export default ComponentDocs;
