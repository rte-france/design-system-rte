import Accordion from "../../../src/components/Accordion/Accordion";
import Heading from "../../../src/components/Heading/Heading";
import Table from "../../../src/components/Table/Table";

const Behaviors = () => {
  return (
    <div className="searchbar option-wrapper">
      <Accordion title="Behaviors">
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div className="option-table focus">
            <Heading id="focus" level={3}>
              Focus
            </Heading>
            <Table options={focusOptions} />
          </div>

          <div className="option-table layout">
            <Heading id="layout" level={3}>
              Layout
            </Heading>
            <Table options={layoutOptions} />
          </div>

          <div className="option-table animations">
            <Heading id="animations" level={3}>
              Animations
            </Heading>
            <ul className="sb-unstyled">
              <li>
                Toutes les animations doivent respecter les préférences utilisateur <em>(prefers-reduced-motion)</em> et
                être désactivables si nécessaire.
              </li>
              <li>
                Les transitions doivent rester <strong>non-intrusives</strong> et ne jamais bloquer l'interaction ou la
                lisibilité.
              </li>
            </ul>
            <Table options={animationsOptions} />
          </div>

          <div className="option-table keyboard-interactions">
            <Heading id="keyboard-interactions" level={3}>
              Keyboard interactions
            </Heading>
            <Table options={keyboardInteractionsOptions} />
          </div>

          <div className="option-table autre-contextuel">
            <Heading id="autre-contextuel" level={3}>
              Autre/contextuel
            </Heading>
            <Table options={autreContextuelOptions} />
          </div>
        </div>
      </Accordion>
    </div>
  );
};

const focusOptions = {
  headers: ["Fonction attendue", "Spécification"],
  lines: [
    ["Style de focus visible", "Passage au statut active quand focusé."],
    ["Focus clavier", "Navigation naturelle avec Tab et Shift+Tab"],
    [
      "Pas de focus forcé au chargement ou à la navigation au clic",
      "Le focus n'est pas imposé à l'ouverture d'une page ou lorsque la navigation se fait au clic",
    ],
  ],
};

const layoutOptions = {
  headers: ["Nom", "Descriptif"],
  lines: [
    ["Flexible width{}", "La largeur est fixe mais adaptable lorsque définie par le designer"],
    [
      "Minimum width",
      "96 pixels (3 fois la hauteur du champ). Garantit que les petits champs de recherche soient lisibles et faciles à cibler sur les appareils tactiles. Le min est de 72 pixels pour le variant compact spacing.",
    ],
    [
      "Text overflow",
      "Lorsque le texte saisi est trop long pour l'espace horizontal disponible dans le champ, le texte est tronqué.",
    ],
    [
      "Assistive text overflow",
      "Lorsque le texte d'aide est trop long pour l'espace horizontal disponible, wrapping pour former une autre ligne.",
    ],
    ["Flexible height", "Pas flexible, le texte reste sur une seule ligne."],
    ["Max height", "Fixed height : 32px ou 24px pour le variant compacted"],
  ],
};

const animationsOptions = {
  headers: ["Fonction attendue", "Spécification", "Durée", "Modifiable"],
  lines: [
    [
      'Apparition du bouton "clear"',
      "La croix de suppression apparaît en fondu quand du texte est présent",
      "150 ms",
      "Oui (via token de durée d'animation standard - token à venir)",
    ],
    [
      'Disparition du bouton "clear"',
      "La croix disparaît lorsqu'on vide le champ",
      "150 ms",
      "Oui (via token de durée d'animation standard - token à venir)",
    ],
    ["Focus ring (anneau de focus)", "Animation d'apparition en fondu", "120 ms", "Cell Text"],
  ],
};

const keyboardInteractionsOptions = {
  headers: ["Fonction attendue", "Spécification"],
  lines: [
    ["Tab navigation", "Accès logique : champ > bouton reset (si présent)"],
    ["Entrée", "Déclenche l'événement de recherche ou soumet le formulaire"],
    ["Escape", "Vide le champ de recherche"],
  ],
};

const autreContextuelOptions = {
  headers: ["Fonction attendue", "Spécification"],
  lines: [
    ["HTML natif recommandé", '<input type="search"> est recommandé pour la sémantique et les comportements attendus'],
    ["Effacement natif", "Permet aux navigateurs de proposer un clear button natif si supporté"],
    ["Escape", "Vide le champ de recherche"],
  ],
};

export default Behaviors;
