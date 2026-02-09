import React from "react";

import Accordion from "../../../../design-docs/src/components/Accordion/Accordion";
import Heading from "../../../../design-docs/src/components/Heading/Heading";
import Table from "../../../../design-docs/src/components/Table/Table";

const Behaviors = () => {
  return (
    <div className="button option-wrapper">
      <Accordion title="Behaviors">
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div className="option-table focus">
            <Heading id="focus" level={3}>
              Focus
            </Heading>
            <p>Lorsque le focus se place sur un bouton, il sélectionne l’entièreté du composant.</p>
          </div>

          <div className="option-table interactions">
            <Heading id="interactions" level={3}>
              Interactions
            </Heading>
            <Table options={interactionsOptions} />
          </div>

          <div className="option-table keyboard-interactions">
            <Heading id="keyboard-interactions" level={3}>
              Keyboard interactions
            </Heading>
            <Table options={keyboardInteractionsOptions} />
          </div>
        </div>
      </Accordion>
    </div>
  );
};

const interactionsOptions = {
  headers: ["Nom", "Descriptif"],
  lines: [
    [
      "Tooltip",
      'Lorsqu’un bouton est en "Icon only" alors un tooltip doit être prévu pour expliciter l’action qu’il représente (même si le signifiant est connu de l’utilisateur)',
    ],
    [
      "Changement d’état au curseur",
      "Le bouton étant un composant d’action, celui-ci fait réagir le pointeur quand il est survolé, pour signifier à l’utilisateur qu’une interaction est possible.",
    ],
  ],
};

const keyboardInteractionsOptions = {
  headers: ["Key", "Interaction"],
  lines: [
    ["Tab", "Place le focus sur le prochain élément interactif."],
    ["Shift + Tab", "Place le focus sur l’élément interactif précédent."],
    ["Space or Enter", "Rend actif le bouton sur lequel le focus est placé."],
  ],
};

export default Behaviors;
