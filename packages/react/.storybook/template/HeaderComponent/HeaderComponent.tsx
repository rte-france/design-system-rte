import { Link } from "@design-system-rte/react";

import Figma from "../../asset/img/figma.png";
import Github from "../../asset/img/github.png";

import style from "./HeaderComponent.module.scss";

interface HeaderComponentProps {
  title: string;
  linkFigma?: string;
  linkGithub?: string;
}

const HeaderComponent = ({ title, linkFigma, linkGithub }: HeaderComponentProps) => {
  return (
    <header className={style.storybook_header}>
      <div className={style.storybook_header_content}>
        <h1 className={style.storybook_title}>{title}</h1>
        <div className={style.storybook_links}>
          {linkFigma && (
            <div className={style.storybook_link_container}>
              <img src={Figma} alt="Figma" className={style.storybook_logo} />
              <Link label="Figma" href={linkFigma} target="_blank" externalLink={true} />
            </div>
          )}
          {linkGithub && (
            <div className={style.storybook_link_container}>
              <img src={Github} alt="GitHub" className={style.storybook_logo} />
              <Link label="GitHub" href={linkGithub} target="_blank" externalLink={true} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
