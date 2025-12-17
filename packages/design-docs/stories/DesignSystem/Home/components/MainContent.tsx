import { Icon } from "@design-system-rte/react";
import { ReactNode } from "react";

import "./MainContent.scss";

import Designers from "../assets/Designers.svg";
import Devs from "../assets/Devs.svg";

const DESIGNERS_LINK =
  "https://opensource.rte-france.com/design-system-rte/?path=/docs/design-system-get-started-kit-de-démarrage-design--docs";
const ANGULAR_LINK =
  "https://opensource.rte-france.com/design-system-rte/?path=/docs/design-system-get-started-kit-de-démarrage-angular--docs";
const REACT_LINK =
  "https://opensource.rte-france.com/design-system-rte/?path=/docs/design-system-get-started-kit-de-démarrage-react--docs";

type UserCardProps = {
  icon: string;
  title: string;
  content: string;
  img_background?: string;
  link?: string;
  children?: ReactNode;
};

const UserCard = ({ icon, title, content, img_background, link, children }: UserCardProps) => {
  const contentElement = (
    <div className="user_card_container">
      <img
        className="img"
        style={{ backgroundColor: img_background }}
        src={icon}
        alt={`${title} avatar icon`}
        aria-hidden="true"
      />
      <div className="user_card_content">
        <p className="title">{title}</p>
        <p className="content">{content}</p>
        <div className="user_card_extra">{children}</div>
      </div>
    </div>
  );

  if (link) {
    return <a href={link}>{contentElement}</a>;
  }

  return contentElement;
};

const MainContent = () => (
  <main className="main-content">
    <div id="conception" className="main_title">
      Démarrer avec le design system
    </div>
    <div className="main_user_card_container">
      <UserCard
        icon={Designers}
        title="Designers"
        link={DESIGNERS_LINK}
        content="Découvrez comment installer les librairies Figma et construire vos premiers écrans avec le Design System."
        img_background="#E6DEF0"
      />
      <UserCard
        icon={Devs}
        title="Développeurs"
        content="Intégrez la librairie front-end et découvrez comment implémenter les composants DS."
        img_background="#C7DBF0"
      >
        <div className="user_devs_extra">
          <a href={ANGULAR_LINK} className="user_devs_extra_link">
            <span className="user_devs_extra_link_text">Angular</span>
            <Icon name="arrow-right" size={16} />
          </a>
          <a href={REACT_LINK} className="user_devs_extra_link">
            <span className="user_devs_extra_link_text">React</span>
            <Icon name="arrow-right" size={16} />
          </a>
        </div>
      </UserCard>
    </div>
  </main>
);

export default MainContent;
