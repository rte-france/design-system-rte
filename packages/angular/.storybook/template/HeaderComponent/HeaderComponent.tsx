import React, { ReactNode } from "react";

import figma from "../assets/img/figma.png";
import github from "../assets/img/github.png";

interface HeaderComponentProps {
  title: string;
  linkFigma?: string;
  linkGithub?: string;
  children?: ReactNode;
}

const HeaderComponent = ({ title, linkFigma, linkGithub, children }: HeaderComponentProps) => {
  return (
    <header className="storybook_header">
      <div className="storybook_header_content">
        <h1 tabIndex={0} className="storybook_title">{title}</h1>
        <div className="storybook_links">
          {linkFigma && (
            <div className="storybook_link_container">
              <img src={figma} alt="Lien du Figma" className="storybook_logo" />
              <a tabIndex={0} href={linkFigma}> Figma </a>
            </div>
          )}
          {linkGithub && (
            <div className="storybook_link_container">
              <img src={github} alt="Lien du GitHub" className="storybook_logo" />
              <a tabIndex={0} href={linkGithub}> GitHub </a>
            </div>
          )}
        </div>
      </div>
      <div className="storybook_header_content">{children}</div>
    </header>
  );
};

export default HeaderComponent;
