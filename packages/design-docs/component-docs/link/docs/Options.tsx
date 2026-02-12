import React from "react";

import Accordion from "../../../../design-docs/src/components/Accordion/Accordion";
import Heading from "../../../../design-docs/src/components/Heading/Heading";
import Table from "../../../../design-docs/src/components/Table/Table";

const Options = () => {
  return (
    <div className="link option-wrapper">
      <Accordion title="Options">
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ padding: "16px" }}>
            <div className="option-header">
              <p>
                Les <b>options comprennent</b> les <b>états</b> et{" "}
                <b>différentes formes que peut prendre le composant</b>.
              </p>
              <p>
                Elles incluent : Les états, les variants, les tailles, les éléments modifiables qui composent le
                composant, etc.
              </p>
              <p>
                Elles <b>n’incluent pas</b> les “Behaviors” qui correspondent à <b>comment le composant réagit</b>.
              </p>
            </div>
          </div>

          <div className="option-table interaction-states" style={{ padding: "0 16px" }}>
            <Heading id="link-interaction-states" level={3}>
              Interaction States
            </Heading>
            <Table options={interactionStatesTable} />
          </div>

          <div className="option-table selection-state" style={{ padding: "0 16px" }}>
            <Heading id="link-selection-state" level={3}>
              Selection State
            </Heading>
            <Table options={selectionStateTable} />
          </div>

          <div className="option-table boolean-options" style={{ padding: "0 16px" }}>
            <Heading id="link-boolean-options" level={3}>
              Boolean Options
            </Heading>
            <Table options={booleanOptionsTable} />
          </div>

          <div className="option-table other-components" style={{ padding: "0 16px 16px" }}>
            <Heading id="link-other-components" level={3}>
              Other Components
            </Heading>
            <Table options={otherComponentsTable} />
          </div>
        </div>
      </Accordion>
    </div>
  );
};

export default Options;

const interactionStatesTable = {
  headers: ["Interaction State", "Purpose"],
  lines: [
    ["Enabled", "Lien visible et cliquable."],
    ["Hover", "Quand l'utilisateur survole le lien avec son curseur."],
    ["Active", "État reflétant le moment du clic de l’utilisateur sur le lien."],
    ["Focus", "Anneau de focus conforme à l'accessibilité."],
  ],
};

const selectionStateTable = {
  headers: ["Variant", "Purpose"],
  lines: [
    ["Unvisited", "État par défaut du lien quand l'utilisateur ne l'a pas visité."],
    [
      "Visited",
      "État du lien quand l'utilisateur a déjà visité celui-ci, lui donnant des informations sur son parcours. (NA pour le variant quiet)",
    ],
  ],
};

const booleanOptionsTable = {
  headers: ["Variant", "Purpose"],
  lines: [
    [
      "Subtle",
      "Les liens peuvent être sans soulignement et de couleur grise, à utiliser uniquement si le contexte rend leur nature évidente. Comme par exemple dans des composants comme le footer où l'on identifie clairement que les éléments sont interactifs. Ce variant n'inclue pas l'état \"visited\".\n(Les liens discrets sont moins accessibles. Évitez donc de les utiliser pour des liens critiques à l’expérience utilisateur.)",
    ],
    [
      "External",
      "Variant contenant une icône indiquant la sortie du site au clic sur le lien.\nCe variant peut être combiné avec tous les autres ci-dessus.",
    ],
  ],
};

const otherComponentsTable = {
  headers: ["Élément", "Description"],
  lines: [
    [
      "Label",
      "Le composant link est un label en soit. Il est donc tout à fait possible de modifier le texte à l'intérieur.\nNon optionnel mais modifiable.",
    ],
  ],
};
