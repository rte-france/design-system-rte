import React from "react";

import Accordion from "../../../../design-docs/src/components/Accordion/Accordion";
import Heading from "../../../../design-docs/src/components/Heading/Heading";
import Table from "../../../../design-docs/src/components/Table/Table";

const Options = () => {
  return (
    <div className="checkbox option-wrapper">
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
            <Heading id="checkbox-interaction-states" level={3}>
              Interaction States
            </Heading>
            <Table options={interactionStatesTable} />
          </div>

          <div className="option-table selection-states" style={{ padding: "0 16px" }}>
            <Heading id="checkbox-selection-states" level={3}>
              Selection States
            </Heading>
            <Table options={selectionStatesTable} />
          </div>

          <div className="option-table size" style={{ padding: "0 16px" }}>
            <Heading id="checkbox-size" level={3}>
              Size
            </Heading>
            <p className="description">La checkbox n’existe qu’en une seule taille.</p>
            <p className="description">Défaut :</p>
            <ul className="sb-unstyled" style={{ margin: 0 }}>
              <li>hauteur = 16 pixels</li>
              <li>largeur = 16 pixels</li>
            </ul>
          </div>

          <div className="option-table boolean-options" style={{ padding: "0 16px" }}>
            <Heading id="checkbox-boolean-options" level={3}>
              Boolean Options
            </Heading>
            <Table options={booleanOptionsTable} />
          </div>

          <div className="option-table read-only-disabled" style={{ padding: "0 16px" }}>
            <Heading id="checkbox-readonly-disabled" level={3}>
              Précisions : différence readOnly / disabled
            </Heading>
            <Table options={readOnlyDisabledTable} />
          </div>

          <div className="option-table text-options" style={{ padding: "0 16px 16px" }}>
            <Heading id="checkbox-text-options" level={3}>
              Text Options
            </Heading>
            <Table options={textOptionsTable} />
          </div>
        </div>
      </Accordion>
    </div>
  );
};

export default Options;

const interactionStatesTable = {
  headers: ["Interaction States", "Purpose"],
  lines: [
    ["Enabled", "La checkbox est disponible."],
    ["Hover", "Au survol du curseur, la checkbox change d'état."],
    [
      "Focus",
      "Lors de la navigation par clavier, la checkbox peut être sélectionnée.\nPour indiquer cet état, la case à cocher est entourée d’un contour supplémentaire.",
    ],
  ],
};

const selectionStatesTable = {
  headers: ["Selection state", "Purpose"],
  lines: [
    ["Unselected", "Etat par défaut (décoché)."],
    ["Selected", "Etat coché (peut être forcé comme l'état par défaut si besoin)."],
    [
      "Indeterminate",
      'Etat utilisé uniquement lorsqu\'il y a plusieurs checkbox concernées.\nCet état est à représenter qu\'une partie des checkbox disponibles a été activée. Lorsque toutes les checkbox sont désactivées du groupe, elle repasse au statut "default". Lorsque toutes les checkbox du groupe sont activées, elle passe automatiquement au statut "selected".\nLorsque l\'utilisateur clique sur la checkbox indeterminate, toutes les checkbox enfant sont sélectionnées.',
    ],
  ],
};

const booleanOptionsTable = {
  headers: ["Option", "Purpose"],
  lines: [
    [
      "Error",
      "Active l’affichage de l’état d’erreur visuel et textuel lorsque la sélection ne respecte pas une contrainte métier.",
    ],
    ["Read Only", "Rend la checkbox non modifiable, tout en conservant sa visibilité, sa valeur et sa focussabilité."],
    ["Show Label", "Permet d’afficher ou masquer le label textuel à côté de la checkbox."],
  ],
};

const readOnlyDisabledTable = {
  headers: ["Etat", "Focusable", "Modifiable", "Soumis", "Contraste requis"],
  lines: [
    ["enabled", "Oui ✅", "Oui ✅", "Oui ✅", "Oui ✅"],
    ["readOnly", "Non ❌", "Non ❌", "Oui ✅", "Oui ✅"],
    ["disabled", "Non ❌", "Non ❌", "Non ❌", "Non ❌"],
  ],
};

const textOptionsTable = {
  headers: ["Options", "Description", "Règles et comportements"],
  lines: [
    [
      "Label",
      "Texte associé à la checkbox, décrivant l’option proposée à l’utilisateur.",
      `Son contenu peut être modifié.\nChaque bouton radio est lié à son libellé grâce aux attributs ID.\nPar exemple <input id="radio-01"><label for="radio-01">`,
    ],
    [
      "Description",
      "Texte associé à la checkbox, sous le label principal, expliquant plus en détail l’option proposée à l’utilisateur.",
      "Son contenu peut être modifié.",
    ],
    [
      "Error",
      "Message d’erreur affiché sous la checkbox, lorsque la sélection ne respecte pas une règle de validation.",
      "Message obligatoire si error = true\nIl peut être enclenché à la validation du formulaire et donc dépendre de composants externe à la checkbox.\nLe label error peut s'afficher sur toutes les checkbox quel que soit leur type et état",
    ],
  ],
};
