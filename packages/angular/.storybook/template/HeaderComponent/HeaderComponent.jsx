const HeaderComponent = (title, linkFigma, linkGithub, children) => {
  return (
    <header className={style.storybook_header}>
      <div className={style.storybook_header_content}>
        <h1 className={style.storybook_title}>{title}</h1>
        <div className={style.storybook_links}>
          {linkFigma && (
            <div className={style.storybook_link_container}>
              <img src="/figma.png" alt="Figma" className={style.storybook_logo} />
              <a href={linkFigma}> Figma </a>
            </div>
          )}
          {linkGithub && (
            <div className={style.storybook_link_container}>
              <img src="/github.png" alt="GitHub" className={style.storybook_logo} />
              <a href={linkGithub}> GitHub </a>
            </div>
          )}
        </div>
      </div>
      <div className={style.storybook_header_content}>{children}</div>
    </header>
  );
};

export default HeaderComponent;
