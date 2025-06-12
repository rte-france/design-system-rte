import React from "react";

// @ts-expect-error storybook don't import img if error is not ignored
import couleurs from "../img/couleurs.svg";
// @ts-expect-error storybook don't import img if error is not ignored
import elevation from "../img/elevation.svg";
// @ts-expect-error storybook don't import img if error is not ignored
import grilles from "../img/grilles.svg";
// @ts-expect-error storybook don't import img if error is not ignored
import iconographie from "../img/iconographie.svg";
// @ts-expect-error storybook don't import img if error is not ignored
import spacing from "../img/spacing.svg";
// @ts-expect-error storybook don't import img if error is not ignored
import typographie from "../img/typographie.svg";

import "../styles/Footer.css";

type InfoCardProps = {
  img: string;
  title: string;
};

const InfoCard = ({ img, title }: InfoCardProps) => (
  <div className="info_card_container">
    <img className="card_img" src={img} alt="Info Icon" />
    <p className="card_title">{title}</p>
  </div>
);

const Footer = () => (
  <footer className="footer">
    <h2 className="title"> Tokens </h2>
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
      <div />
      <InfoCard img={spacing} title="Espacements" />
      <InfoCard img={elevation} title="Elevation" />
      <div />
    </div>
  </footer>
);

export default Footer;
