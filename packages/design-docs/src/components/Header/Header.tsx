import React from "react";

import figma from "../../img/figma.png";
import github from "../../img/github.png";

import "./Header.scss";

interface HeaderComponentProps {
  title: string;
  linkFigma?: string;
  linkGithub?: string;
  children?: React.ReactNode;
}

const HeaderComponent = ({ title, linkFigma, linkGithub, children }: HeaderComponentProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <header className="rte-header">
        <div className="rte-header_content">
          <h1 className="rte-title">{title}</h1>
          <div className="rte-links">
            {linkFigma && (
              <div className="rte-link_container">
                <img src={figma} alt="Lien du Figma" className="rte-logo" />
                <a href={linkFigma}> Figma </a>
              </div>
            )}
            {linkGithub && (
              <div className="rte-link_container">
                <img src={github} alt="Lien du GitHub" className="rte-logo" />
                <a href={linkGithub}> GitHub </a>
              </div>
            )}
          </div>
        </div>
      </header>
      <div>{children}</div>
    </div>
  );
};

export default HeaderComponent;
