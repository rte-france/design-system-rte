import Accordion from "../../../../../design-docs/src/components/Accordion/Accordion";
import Heading from "../../../../.storybook/template/Heading/Heading";
import Table from "../../../../.storybook/template/Table/Table";
import "./Options.scss";

const Behaviors = () => {
  return (
    <div className="breadcrumb option-wrapper">
      <Accordion title="Behaviors">
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div className="option-table layout">
            <Heading level={3}>Layout</Heading>
            <Table options={layoutOptions} />
          </div>

          <div className="option-table focus">
            <Heading level={3}>Focus</Heading>
            <Table options={focusOptions} />
          </div>

          <div className="option-table animations">
            <Heading level={3}>Animations</Heading>
            <ul>
              <li>
                Toutes les animations doivent respecter les préférences utilisateur (prefers-reduced-motion) et être
                désactivables si nécessaire.
              </li>
              <li>
                Les transitions doivent rester <strong>non-intrusives</strong> et ne jamais bloquer l'interaction ou la
                lisibilité.
              </li>
            </ul>
            <Table options={animationsOptions} />
          </div>

          <div className="option-table interactions">
            <Heading level={3}>Interactions</Heading>
            <Table options={interactionsOptions} />
          </div>

          <div className="option-table keyboard-interactions">
            <Heading level={3}>Keyboard interactions</Heading>
            <Table options={keyboardInteractionsOptions} />
          </div>

          <div className="option-table safezone">
            <Heading level={3}>Safezone</Heading>
            <Table options={safezoneOptions} />
          </div>

          <div className="option-table autre-contextuel">
            <Heading level={3}>Autre / contextuel</Heading>
            <Table options={autreContextuelOptions} />
          </div>
        </div>
      </Accordion>
    </div>
  );
};

const layoutOptions = {
  headers: ["Propriété", "Description"],
  lines: [
    ["Affichage horizontal", 'Les éléments sont alignés en ligne, avec des séparateurs "/".'],
    ["Troncature automatique", 'Si plus de 3 éléments → afficher : item1 / "…" / itemN-1 / itemN.'],
    ["Wrapping", "Non autorisé : overflow visible ou contenu tronqué sur une ligne."],
  ],
};

const focusOptions = {
  headers: ["Propriété", "Description"],
  lines: [
    ["Focus sur les liens uniquement", "L’indicateur de focus s’affiche uniquement sur les composants Link."],
    ["Ordre de tabulation", "Suivant l’ordre du DOM (gauche → droite)."],
  ],
};

const animationsOptions = {
  headers: ["Propriété", "Valeur", "Description", "Modifiable"],
  lines: [["Apparition", "Fade-in", "Effet de fondu si le breadcrumb se charge dynamiquement. Durée : 150ms", "Oui"]],
};

const interactionsOptions = {
  headers: ["Propriété", "Valeur", "Description"],
  lines: [
    [
      "Navigation lien",
      "Composant Link",
      'Gérée via le composant "Link", héritant de tous ses comportements prédéfinis',
    ],
    ["État courant non interactif", "Oui", "Le dernier élément du breadcrumb n'est jamais un lien"],
  ],
};

const keyboardInteractionsOptions = {
  headers: ["Touche", "Action", "Description"],
  lines: [
    ["TAB", "Navigation", "Permet d'accéder individuellement à chaque lien"],
    ["ENTER", "Activation", 'Active le lien focalisé via le composant "Link"'],
  ],
};

const safezoneOptions = {
  headers: ["Propriété", "Valeur", "Description"],
  lines: [
    ["Padding minimal", "8px", "Espacement minimal entre chaque élément"],
    ["Hauteur minimale", "20px", "Hauteur minimale du composant"],
  ],
};

const autreContextuelOptions = {
  headers: ["Propriété", "Valeur", "Description"],
  lines: [
    [
      "HTML natif recommandé",
      '<nav aria-label="Fil d\'Ariane"><ol>...</ol></nav>',
      "Structure HTML recommandée pour l'accessibilité",
    ],
    ["Page actuelle", '<li aria-current="page">Détail</li>', "Attribut ARIA pour indiquer la page courante"],
  ],
};

export default Behaviors;
