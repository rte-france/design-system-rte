import React, { useEffect, useState } from "react";

import Header from "../Header/Header";

import { useFrameworkContext } from "./FrameworkContext";
import Overview from "./Overview/Overview";
import Tabs from "./Tabs/Tabs";

import "./ComponentDocs.scss";

interface ComponentDocsProps {
  title: string;
  description?: React.ReactNode;
  linkFigma?: string;
  linkGithub?: string | { angular?: string; react?: string };
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
  const contextFramework = useFrameworkContext().framework;

  const [framework, setFramework] = useState<"angular" | "react">(() => {
    if (typeof document !== "undefined") {
      const frameworkAttr = document.documentElement.getAttribute("data-storybook-framework");
      if (frameworkAttr === "angular") {
        return "angular";
      }
    }
    return contextFramework;
  });

  useEffect(() => {
    if (typeof document !== "undefined") {
      const frameworkAttr = document.documentElement.getAttribute("data-storybook-framework");
      if (frameworkAttr === "angular") {
        setFramework("angular");
      } else if (frameworkAttr !== "angular") {
        setFramework(contextFramework);
      }
    } else {
      setFramework(contextFramework);
    }
  }, [contextFramework]);

  let resolvedLinkGithub: string | undefined;

  if (typeof linkGithub === "string") {
    resolvedLinkGithub = linkGithub;
  } else if (linkGithub && typeof linkGithub === "object") {
    if (framework === "angular" && linkGithub.angular) {
      resolvedLinkGithub = linkGithub.angular;
    } else if (framework === "react" && linkGithub.react) {
      resolvedLinkGithub = linkGithub.react;
    } else {
      resolvedLinkGithub = linkGithub.angular || linkGithub.react;
    }
  }

  return (
    <div className="rte-component-docs">
      <Header title={title} linkFigma={linkFigma} linkGithub={resolvedLinkGithub}>
        {description}
      </Header>

      <Tabs>
        <div className="rte-component-docs-overview">
          <Overview disponibility={disponibility} changelog={changelog} options={options} />
        </div>

        <div className="rte-component-docs-guidelines">{guidelines}</div>

        <div className="rte-component-docs-accessibility">{accessibility}</div>
      </Tabs>
    </div>
  );
};

export default ComponentDocs;
