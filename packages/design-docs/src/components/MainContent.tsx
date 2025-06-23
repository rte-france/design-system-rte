import React from "react";

import "../styles/MainContent.css";

import designFace from "../img/face.svg";
import devFace from "../img/face_4.svg";
import placeholder from "../img/picture.png";

type UserCardProps = {
  icon: string;
  title: string;
  content: string;
  img_background?: string;
};

type ExplanationCardProps = {
  img: string;
  title: string;
  content: string;
  link: string;
};

const UserCard = ({ icon, title, content, img_background }: UserCardProps) => (
  <div className="user_card_container">
    <img
      className="img"
      style={{ backgroundColor: img_background }}
      src={icon}
      alt={`${title} avatar icon`}
      aria-hidden="true"
    />
    <p className="title">{title}</p>
    <p className="content">{content}</p>
  </div>
);

const ExplanationCard = ({ img, title, content, link }: ExplanationCardProps) => (
  <div className="explanation_card_container">
    <img className="img" src={img} alt={`Image pour ${title}`} aria-hidden="true" />
    <div className="card_content">
      <p className="title">{title}</p>
      <p className="content">{content}</p>
      <a className="link" href={link}>
        Plus d'information ➔
      </a>
    </div>
  </div>
);

const MainContent = () => (
  <main className="main-content">
    <h2 className="main_title">Storybook Preview Instance</h2>
    <h3 className="main_title">2nd Iteration</h3>
    <h2 className="main_title">Concevoir et construire ensemble</h2>
    <div className="main_user_card_container">
      <UserCard
        icon={designFace}
        title="Pour les designers"
        content="Accédez aux fondations visuelles, aux composants Figma, aux tokens, aux guidelines UI/UX et aux principes d’accessibilité pour concevoir des interfaces claires et harmonisées."
        img_background="#E6DEF0"
      />
      <UserCard
        icon={devFace}
        title="Pour les développeurs"
        content="Accédez à des composants prêts à l’emploi, aux spécifications techniques, aux tokens SCSS et aux bonnes pratiques pour développer des interfaces fiables et efficaces."
        img_background="#C7DBF0"
      />
    </div>
    <div className="main_explanation_card_container">
      <ExplanationCard
        img={placeholder}
        title="Fondations"
        content="Les fondations constituent les bases solides sur lesquelles repose tout notre design. Elles définissent les principes directeurs, les valeurs et les choix esthétiques qui garantissent la cohérence et la qualité de chaque élément."
        link="/design-system"
      />
      <ExplanationCard
        img={placeholder}
        title="Tokens"
        content="Les tokens sont les éléments clés qui harmonisent notre design à travers toutes les interfaces. Ils comprennent les couleurs, les typographies et d'autres paramètres essentiels, assurant une expérience utilisateur uniforme."
        link="/design-system"
      />
      <ExplanationCard
        img={placeholder}
        title="Composants"
        content="Nos composants sont les pièces maîtresses interactives de notre design system. Chaque composant est méticuleusement conçu pour être réutilisable, fonctionnel et visuellement attractif. "
        link="/design-system"
      />
    </div>
  </main>
);

export default MainContent;
