import React from "react";

import figma from "../img/figma.png";
import github from "../img/github.png";

interface HeaderComponentProps {
  title: string;
  linkFigma?: string;
  linkGithub?: string;
}

const HeaderComponent = ({ title, linkFigma, linkGithub }: HeaderComponentProps) => {
  return (
    <header className="storybook_header">
      <div className="storybook_header_content">
        <h1 className="storybook_title">{title}</h1>
        <div className="storybook_links">
          {linkFigma && (
            <div className="storybook_link_container">
              <img src={figma} alt="Lien du Figma" className="storybook_logo" />
              <a href={linkFigma} target="_blank">
                {" "}
                Figma{" "}
              </a>
            </div>
          )}
          {linkGithub && (
            <div className="storybook_link_container">
              <img src={github} alt="Lien du GitHub" className="storybook_logo" />
              <a href={linkGithub} target="_blank">
                {" "}
                GitHub{" "}
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
