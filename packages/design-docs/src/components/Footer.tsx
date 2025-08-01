import React from "react";

import couleurs from "../img/introduction/couleurs.svg";
import elevation from "../img/introduction/elevation.svg";
import grilles from "../img/introduction/grilles.svg";
import iconographie from "../img/introduction/iconographie.svg";
import spacing from "../img/introduction/spacing.svg";
import typographie from "../img/introduction/typographie.svg";
import "../styles/Footer.css";

type InfoCardProps = {
  img: string;
  title: string;
};

const InfoCard = ({ img, title }: InfoCardProps) => (
  <div className="info_card_container">
    <img className="card_img" src={img} alt={`${title} icon`} aria-hidden="true" />
    <p className="card_title">{title}</p>
  </div>
);

const Footer = () => (
  <footer className="footer">
    <h2 id="tokens" className="title">
      {" "}
      Tokens{" "}
    </h2>
    <p className="content">
      Les design tokens traduisent les décisions de design (couleurs, typographies, espacements…) en variables
      structurées, partagées entre designers et développeurs. Ils garantissent une cohérence visuelle à grande échelle,
      facilitent les déclinaisons (dark mode, branding, accessibilité) et accélèrent la mise en œuvre sur tous les
      supports. Plus de duplication, moins d’erreurs, et un design toujours aligné au pixel près.
    </p>
    <div className="infocard_container">
      <InfoCard img={couleurs} title="Couleurs" />
      <InfoCard img={typographie} title="Typographie" />
      <InfoCard img={grilles} title="Grilles" />
      <InfoCard img={iconographie} title="Iconographie" />
      <div className="empty_grid_slot" aria-hidden="true" />
      <InfoCard img={spacing} title="Espacements" />
      <InfoCard img={elevation} title="Elevation" />
      <div className="empty_grid_slot" aria-hidden="true" />
    </div>
  </footer>
);

export default Footer;
