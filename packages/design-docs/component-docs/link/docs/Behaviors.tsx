import React from "react";

import Accordion from "../../../../design-docs/src/components/Accordion/Accordion";
import Heading from "../../../../design-docs/src/components/Heading/Heading";
import Table from "../../../../design-docs/src/components/Table/Table";

const Behaviors = () => {
  return (
    <div className="link behaviors-wrapper">
      <Accordion title="Behaviors">
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "16px" }}>
          <div>
            <Heading id="link-layout" level={3}>
              Layout
            </Heading>
            <p className="description">
              Wrapping : un lien dans un texte peut être wrap au besoin. Son état ou sa mécanique ne change pas.
            </p>
          </div>

          <div>
            <Heading id="link-interactions" level={3}>
              Interactions
            </Heading>
            <Table options={interactionsTable} />
          </div>

          <div>
            <Heading id="link-keyboard-interactions" level={3}>
              Keyboard Interactions
            </Heading>
            <Table options={keyboardInteractionsTable} />
          </div>

          <div>
            <Heading id="link-placement" level={3}>
              Placement
            </Heading>
            <Table options={placementTable} />
          </div>
        </div>
      </Accordion>
    </div>
  );
};

export default Behaviors;

const interactionsTable = {
  headers: ["Nom", "Descriptif"],
  lines: [
    [
      "Clic",
      "Cliquer sur un lien peut mener à :\n• Ouvrir une modal\n• Naviguer vers une nouvelle page, avec un URL différent demandant un refresh du browser\n• Provoquer un jump vers un autre endroit de la même page\n• Ouvrir des ressources comme des images, vidéos, documents PDF etc.",
    ],
    [
      "Changement d’état au curseur",
      "Lorsque le curseur survol un lien, s’il est disponible, le curseur change d’état pour montrer que celui-ci propose une interaction.",
    ],
    ["Zone de clic", "La zone de clic s'étend sur tout le texte du lien, et l’icône quand celui-ci en a une."],
  ],
};

const keyboardInteractionsTable = {
  headers: ["Key", "Interaction"],
  lines: [
    ["Enter", "Exécute le lien et dirige le focus vers l’URL cible du lien."],
    ["Tab", "Permet de se déplacer de passer sur le lien."],
  ],
};

const placementTable = {
  headers: ["Nom", "Descriptif"],
  lines: [
    [
      "Lien dans les textes",
      "Cliquer sur un lien peut mener à :\n• Ouvrir une modal\n• Naviguer vers une nouvelle page, avec un URL différent demandant un refresh du browser\n• Provoquer un jump vers un autre endroit de la même page\n• Ouvrir des ressources comme des images, vidéos, documents PDF etc.",
    ],
    [
      "Liens groupés",
      "Les liens peuvent être groupés horizontalement ou verticalement.\nLe groupement horizontal est généralement utilisé dans le corps de la page (Ex : un fil d’ariane)\nLe groupement vertical est lui utilisé sur les côtés de la page, pour rediriger vers des ressources ou des arborescences.",
    ],
  ],
};
