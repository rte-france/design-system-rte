import React from "react";

import Accordion from "../../../../design-docs/src/components/Accordion/Accordion";
import Heading from "../../../../design-docs/src/components/Heading/Heading";
import Table from "../../../../design-docs/src/components/Table/Table";
import "./Options.scss";

const Options = () => {
  return (
    <div className="button option-wrapper">
      <Accordion title="Options">
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ padding: "16px" }}>
            <div className="option-header">
              <p>
                Les <b>options comprennent</b> les <b>états</b> et{" "}
                <b>différentes formes que peut prendre le composant</b>.
                <br />
                Elles incluent : Les états, les variants, les tailles, les éléments modifiables qui composent le
                composant, etc.
                <br />
                Elles <b>n’incluent pas</b> les “Behaviors” qui correspondent à <b>comment le composant réagit</b>.
              </p>
            </div>
          </div>

          <div className="option-table interaction-states">
            <Heading id="interaction-states" level={3}>
              Interaction States
            </Heading>
            <Table options={interactionStatesOptions} />
          </div>

          <div className="option-table appearances">
            <Heading id="appearances" level={3}>
              Appearances
            </Heading>
            <Table options={appearancesOptions} />
          </div>

          <div className="option-table sizes">
            <Heading id="sizes" level={3}>
              Sizes
            </Heading>
            <p className="option-paragraph">
              Le Button existe en taille Small, Medium et Large. La taille la plus courante est Medium.
            </p>
            <Table options={sizesOptions} />
          </div>

          <div className="option-table boolean-options">
            <Heading id="boolean-options" level={3}>
              Boolean Options
            </Heading>
            <Table options={booleanOptions} />
          </div>

          <div className="option-table other-components">
            <Heading id="other-components" level={3}>
              Other Components
            </Heading>
            <Table options={otherComponentsOptions} />
          </div>
        </div>
      </Accordion>
    </div>
  );
};

const interactionStatesOptions = {
  headers: ["States", "Purpose"],
  lines: [
    ["Enabled", "Le bouton est visible, interactif et prêt à être utilisé."],
    ["Hover", "Changement de style (couleur) lorsque la souris passe dessus."],
    ["Active", "Apparence modifiée brièvement lors du clic ou appui tactile."],
    ["Disabled", "Inactif, visuellement atténué, aucune interaction possible."],
  ],
};

const appearancesOptions = {
  headers: ["Appearance", "Description", "Usage recommandé"],
  lines: [
    [
      "Primary",
      "Fond plein, texte clair",
      "Utilisé pour les actions principales et les appels à l’action les plus importants (ex : “Envoyer”, “Acheter”)",
    ],
    [
      "Secondary",
      "Contour visible, fond blanc. Fond coloré au hover et clic",
      "Idéal pour les actions secondaires, lorsque l’on veut attirer l’attention sans dominer l’interface (ex : “Annuler”, “En savoir plus”)",
    ],
    [
      "Text",
      "Bouton discret, sans contour ni fond. Fond coloré au hover et clic",
      "Utilisé pour des actions discrètes ou peu intrusives, souvent dans des interfaces minimalistes ou des actions secondaires (ex. “Voir plus”, “Modifier”, “Afficher”)",
    ],
    [
      "Transparent",
      "Bouton discret, sans contour ni fond. Texte seul coloré au hover et clic",
      "Généralement employé pour des actions moins prioritaires ou contextuelles, intégrées naturellement dans l’interface sans détourner l’attention (ex : “Fermer”, “Retour”).",
    ],
    [
      "Danger",
      "Bouton d’action critique, destructrice",
      "Utilisé pour des actions critiques et irréversibles, comme la suppression ou l’annulation définitive.",
    ],
    [
      "Neutral",
      "Bouton sans accent de marque : fond transparent, texte et icônes de couleur neutre.",
      "Contextes génériques (ex. : tables, filtres, zones neutres).",
    ],
    [
      "Reversed",
      "Variante du Neutral avec texte et icônes inversés (blanc sur fond sombre, foncé sur fond clair).",
      "Utilisation sur fond contrasté ou photo (CTA sur bannières, images).",
    ],
  ],
};

const sizesOptions = {
  headers: ["Size", ""],
  lines: [
    ["S", "hauteur = 24 pixels"],
    ["M", "hauteur = 32 pixels"],
    ["L", "hauteur = 40 pixels"],
  ],
};

const booleanOptions = {
  headers: ["Option", "Description"],
  lines: [
    ["showLeftIcon", "Affiche une icône à gauche du label."],
    ["showRightIcon", "Affiche une icône à droite du label."],
    ["showBadge", "Affiche un badge (compteur/état) dans le bouton, dans le coin en haut à droite."],
  ],
};

const otherComponentsOptions = {
  headers: ["Composant", "Description", "Règle et comportements"],
  lines: [
    [
      "Label",
      "Contenu principal du bouton, indiquant l’action à réaliser.",
      'Le contenu du label peut être modifié. Le label ne peut pas être désactivé pour générer un bouton "Icon only". Voir directement le composant Icon Button.',
    ],
    [
      "Icon",
      "Élément graphique optionnel pouvant accompagner le texte",
      "Peut être positionné à gauche, à droite ou seul. Une seule icône est autorisée par bouton, les combinaisons multiples ne sont pas permises.",
    ],
  ],
};

export default Options;
