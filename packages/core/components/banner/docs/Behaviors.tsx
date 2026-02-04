import React from "react";

import Accordion from "../../../../design-docs/src/components/Accordion/Accordion";
import Heading from "../../../../design-docs/src/components/Heading/Heading";
import Table from "../../../../design-docs/src/components/Table/Table";

const Behaviors = () => {
  return (
    <div className="banner option-wrapper">
      <Accordion title="Behaviors">
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div className="option-table layout">
            <Heading id="layout" level={3}>
              Layout
            </Heading>
            <Table options={layoutOptions} />
          </div>

          <div className="option-table focus">
            <Heading id="focus" level={3}>
              Focus
            </Heading>
            <Table options={focusOptions} />
          </div>

          <div className="option-table animations">
            <Heading id="animations" level={3}>
              Animations
            </Heading>
            <ul className="sb-unstyled">
              <li>
                Toutes les animations doivent respecter les préférences utilisateur (prefersreduced-motion) et être
                désactivables si nécessaire.
              </li>
              <li>
                Les transitions doivent rester non-intrusives et ne jamais bloquer l’interaction ou la lisibilité.
              </li>
            </ul>
            <Table options={animationsOptions} />
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

          <div className="option-table placement">
            <Heading id="placement" level={3}>
              Placement
            </Heading>
            <Table options={placementOptions} />
          </div>

          <div className="option-table html-native">
            <Heading id="html-native" level={3}>
              Autre / HTML natif
            </Heading>
            <Table options={htmlNativeOptions} />
          </div>
        </div>
      </Accordion>
    </div>
  );
};

const layoutOptions = {
  headers: ["Nom", "Descriptif"],
  lines: [
    ["Length", "La longueur s'adapte à la taille du conteneur (100% du conteneur). Doit être responsive."],
    [
      "Text overflow",
      "Lorsque le texte est trop long pour l'espace horizontal disponible, wrapping sur une autre ligne. Si un bouton d'action est présent, le bouton reste centré en hauteur.",
    ],
    ["Truncation", "Pas de troncation --> text wrapping"],
    ["Justification", "Le contenu est aligné à gauche"],
  ],
};

const focusOptions = {
  headers: ["Fonction attendue", "Spécification"],
  lines: [
    ["Seuls les éléments interactifs reçoivent le focus", "Bouton de fermeture et lien/bouton éventuel"],
    ["Aucune mise en surbrillance sur la bannière elle-même", "Elle est informative, non interactive"],
  ],
};

const animationsOptions = {
  headers: ["Fonction attendue", "Descriptif", "Durée", "Modifiable"],
  lines: [
    ["Apparition", "Fade in + slide depuis le bord du haut", "200ms", "Oui"],
    ["Disparition", "Fade out + slide vers le bord du haut", "200ms", "Oui"],
  ],
};

const interactionsOptions = {
  headers: ["Fonction attendue", "Spécification"],
  lines: [
    ["Fermeture manuelle", "Par clic sur la croix (si closable = true)"],
    ["Action secondaire", "Clic sur le bouton déclenche une fonction"],
  ],
};

const keyboardInteractionsOptions = {
  headers: ["Fonction attendue", "Spécification"],
  lines: [
    ["TAB / SHIFT+TAB", "Navigation vers bouton présent"],
    ["ENTER ou SPACE", "Active le bouton actuellement focusé"],
    ["ESC", "Pas d'action"],
  ],
};

const placementOptions = {
  headers: ["Fonction attendue", "Spécification"],
  lines: [
    ["Toujours en haut de la page ou du conteneur", "Pas de position flottante au milieu d’un flux"],
    ["Affiché dans le flux DOM (pas en position: absolute)", "Pour cohérence avec le document sémantique"],
  ],
};

const htmlNativeOptions = {
  headers: ["Fonction attendue", "Spécification"],
  lines: [
    [
      'Utiliser un <section role="alert"> ou <div role="status">',
      "Selon le type de message (error, success, info, etc.)",
    ],
    ["Si closable — la croix doit être un <button>", 'Avec aria-label="Fermer la bannière"'],
    ["Les CTA doivent être des ou accessibles", "Avec aria-label ou aria-describedby si besoin"],
  ],
};

export default Behaviors;
