import Link from "../../src/components/link/Link";

import figmaLogo from "./figma.png";
import githubLogo from "./github.png";
import style from "./HeaderComponent.module.scss";

interface HeaderComponentProps {
  title: string;
  linkFigma?: string;
  linkGithub?: string;
  children?: React.ReactNode;
}

const HeaderComponent = ({ title, linkFigma, linkGithub, children }: HeaderComponentProps) => {
  return (
    <header className={style.storybook_header}>
      <div className={style.storybook_header_content}>
        <h1 className={style.storybook_title}>{title}</h1>
        <div className={style.storybook_links}>
          {linkFigma && (
            <div className={style.storybook_link_container}>
              <img src={figmaLogo} alt="Figma" className={style.storybook_logo} />
              <Link label="Figma" href={linkFigma} />
            </div>
          )}
          {linkGithub && (
            <div className={style.storybook_link_container}>
              <img src={githubLogo} alt="GitHub" className={style.storybook_logo} />
              <Link label="GitHub" href={linkGithub} />
            </div>
          )}
        </div>
      </div>
      <div className={style.storybook_header_content}>{children}</div>
    </header>
  );
};

export default HeaderComponent;
