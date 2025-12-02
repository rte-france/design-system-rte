import React from "react";

import header from "../assets/header.png";
import "./Header.css";

const Header = () => (
  <header className="header">
    <div className="header_left_container">
      <h1 id="design-system-rte" className="title">
        {" "}
        Design System RTE{" "}
      </h1>
      <p className="text">
        Un socle solide pour concevoir des expériences cohérentes, accessibles et durables.
        <br />
        Ce design system rassemble tous les fondements visuels, techniques et éditoriaux pour concevoir plus vite,
        mieux, et ensemble.{" "}
      </p>
      <button className="button"> Kit de démarrage </button>
    </div>

    <div className="header_right_container">
      <img className="img" src={header} alt="Logo" />
    </div>
  </header>
);

export default Header;
