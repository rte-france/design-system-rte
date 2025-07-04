import React, { ReactNode } from "react";

interface HeaderComponentProps {
  title: string;
  linkFigma?: string;
  linkGithub?: string;
  children?: ReactNode;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ title, linkFigma, linkGithub, children }) => {
  return (
    <header className="storybook_header">
      <div className="storybook_header_content">
        <h1 className="storybook_title">{title}</h1>
        <div className="storybook_links">
          {linkFigma && (
            <div className="storybook_link_container">
              <img src="/figma.png" alt="Figma" className="storybook_logo" />
              <a href={linkFigma}> Figma </a>
            </div>
          )}
          {linkGithub && (
            <div className="storybook_link_container">
              <img src="/github.png" alt="GitHub" className="storybook_logo" />
              <a href={linkGithub}> GitHub </a>
            </div>
          )}
        </div>
      </div>
      <div className="storybook_header_content">{children}</div>
    </header>
  );
};

export default HeaderComponent;
