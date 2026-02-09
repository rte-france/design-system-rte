import React from "react";

import Accordion from "../../../../design-docs/src/components/Accordion/Accordion";
import Heading from "../../../../design-docs/src/components/Heading/Heading";
import Table from "../../../../design-docs/src/components/Table/Table";

const Behaviors = () => {
  return (
    <div className="checkbox behaviors-wrapper">
      <Accordion title="Behaviors">
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "16px" }}>
          <div>
            <Heading id="checkbox-focus" level={3}>
              Focus
            </Heading>
            <p className="description">
              Lorsque le focus se place sur une checkbox, il sélectionne uniquement la box et pas le label principal, la
              description et ou l'erreur.
            </p>
          </div>

          <div>
            <Heading id="checkbox-layout" level={3}>
              Layout
            </Heading>
            <Table options={layoutTable} />
          </div>

          <div>
            <Heading id="checkbox-interactions" level={3}>
              Interactions
            </Heading>
            <Table options={interactionsTable} />
          </div>

          <div>
            <Heading id="checkbox-keyboard-interactions" level={3}>
              Keyboard interactions
            </Heading>
            <Table options={keyboardInteractionsTable} />
          </div>

          <div>
            <Heading id="checkbox-animation" level={3}>
              Animation
            </Heading>
            <Table options={animationTable} />
          </div>
        </div>
      </Accordion>
    </div>
  );
};

export default Behaviors;

const layoutTable = {
  headers: ["Nom", "Descriptif"],
  lines: [
    [
      "Overflow",
      "Il n’y a pas de limite de largeur sur le composant checkbox. Il est fortement conseillé de garder le label principal concis.",
    ],
    ["Truncation", "Non autorisé."],
    [
      "Wrapping",
      "Le passage sur une deuxième ligne du composant n’est pas autorisé pour le label principal mais autorisé pour la description.",
    ],
  ],
};

const interactionsTable = {
  headers: ["Nom", "Descriptif"],
  lines: [
    [
      "Changement d’état au curseur",
      "La checkbox étant un composant d'action, celui-ci fait réagir le pointeur qu’il est survolé, pour signifier à l’utilisateur qu’une interaction est possible. Il est également modifié lorsqu’elle est en état disabled, pour montrer que l’interaction est impossible.",
    ],
    [
      "Hitbox",
      "La hitbox de la checkbox ne se limite pas à la case à cocher mais concerne tout l’élément et donc également le label principal, la description et le message d’erreur.",
    ],
  ],
};

const keyboardInteractionsTable = {
  headers: ["Key", "Interaction"],
  lines: [
    ["Tab", "Place le focus sur le prochain élément interactif."],
    ["Shift + Tab", "Place le focus sur l'élément interactif précédent."],
    ["Space", "Rend actif la checkbox sur laquelle le focus est placé."],
  ],
};

const animationTable = {
  headers: ["Animation", "Descriptif", "Couleur", "Délais", "Modifiable", "Ressource"],
  lines: [
    [
      "Ripple effect",
      "Animation d’onde circulaire centrée sur le carré de la checkbox au clic, signalant la prise en compte de l'interaction.",
      "Couleur du halo en état Hover",
      "150ms (expand) / 300ms (fade)",
      "Non",
      "https://uiverse.io/lenin55/black-dragon-46",
    ],
  ],
};
