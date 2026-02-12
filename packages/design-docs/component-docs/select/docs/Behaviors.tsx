import Accordion from "../../../src/components/Accordion/Accordion";
import Heading from "../../../src/components/Heading/Heading";
import Table from "../../../src/components/Table/Table";
import "./Options.scss";

const Behaviors = () => {
  return (
    <div className="select option-wrapper">
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
    ["Style de focus visible", "Focus ring autour du champ, à 4px d'écart."],
    ["Focus clavier", "Navigation naturelle avec Tab et Shift+Tab."],
    [
      "Pas de focus forcé au chargement ou à la navigation au clic",
      "Le focus n'est pas imposé à l'ouverture d'une page ou lorsque la navigation se fait au clic.",
    ],
  ],
};

const layoutOptions = {
  headers: ["Nom", "Descriptif"],
  lines: [
    ["Flexible width", "La largeur est fixe mais adaptable lorsque définie par le designer"],
    [
      "Minimum width",
      "64 pixels (2 fois la hauteur du champ). Garantit que les petits sélécteurs soient lisibles et faciles à cibler sur les appareils tactiles.",
    ],
    [
      "Text overflow",
      "Lorsque le label du champ et le texte du menu sont trop longs pour l'espace horizontal disponible, wrapping pour former une autre ligne. Le texte du champ lui-même est tronqué à la fin, mais le texte peut être affiché en entier dans le menu.",
    ],
    [
      "Assistive text overflow",
      "Lorsque le texte d'aide est trop long pour l'espace horizontal disponible, wrapping pour former une autre ligne.",
    ],
    ["Flexible height", "Pas flexible, le texte reste sur une seule ligne."],
    ["Max height", "Fixed height : 32px"],
  ],
};

const animationsOptions = {
  headers: ["Fonction attendue", "Spécification", "Durée", "Modifiable"],
  lines: [
    ["Ouverture menu", "Fade ou slide", "150 ms", "Oui"],
    ["Fermeture menu", "Fade ou slide", "150 ms", "Oui"],
    ["Focus ring (anneau de focus)", "Animation d'apparition en fondu", "120 ms", "Oui"],
    ["Apparition message erreur", "Fade-in", "200 ms", "Oui"],
  ],
};

const keyboardInteractionsOptions = {
  headers: ["Fonction attendue", "Spécification"],
  lines: [
    ["Tab navigation", "Navigue vers le champ."],
    ["Enter / Space", "Ouvre ou ferme la liste."],
    ["Flèches", "Parcourt les options."],
    ["Escape", "Ferme la liste."],
  ],
};

const placementOptions = {
  headers: ["Fonction attendue", "Spécification"],
  lines: [
    ["Liste déroulante", "S'affiche sous le champ."],
    ["Position dynamique", "En haut si pas de place en bas."],
  ],
};

const interactionsOptions = {
  headers: ["Fonction attendue", "Spécification"],
  lines: [
    ["Zone cliquable", "Toute la surface du champ."],
    ["Clic sur champ", "Ouvre la liste."],
    ["Sélection d'option", "Met à jour la valeur sélectionnée."],
    ["ESC", "Ferme la liste"],
    ["Clic hors du champ", "Ferme la liste"],
  ],
};

const autreContextuelOptions = {
  headers: ["Fonction attendue", "Spécification"],
  lines: [
    ["HTML natif recommandé", "<select> natif ou ARIA-compliant"],
    ["aria-controls / aria-expanded", "Implémentés sur champ principal"],
  ],
};

export default Behaviors;
