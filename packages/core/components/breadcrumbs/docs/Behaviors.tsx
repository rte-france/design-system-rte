import Accordion from "../../../../design-docs/src/components/Accordion/Accordion";
import Heading from "../../../../design-docs/src/components/Heading/Heading";
import Table from "../../../../design-docs/src/components/Table/Table";
import "./Options.scss";

const Behaviors = () => {
  return (
    <div className="breadcrumb option-wrapper">
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

          <div className="option-table safezone">
            <Heading id="safezone" level={3}>
              Safezone
            </Heading>
            <Table options={safezoneOptions} />
          </div>

          <div className="option-table autre-contextuel">
            <Heading id="autre-contextuel" level={3}>
              Autre / contextuel
            </Heading>
            <Table options={autreContextuelOptions} />
          </div>
        </div>
      </Accordion>
    </div>
  );
};

const layoutOptions = {
  headers: ["Nom", "Descriptif"],
  lines: [
    ["Affichage horizontal", 'Les éléments sont alignés en ligne, avec des séparateurs "/".'],
    ["Troncature automatique", 'Si plus de 3 éléments → afficher : item1 / "…" / itemN-1 / itemN.'],
    ["Wrapping", "Non autorisé : overflow visible ou contenu tronqué sur une ligne."],
  ],
};

const focusOptions = {
  headers: ["Fonction attendue", "Spécifications"],
  lines: [
    ["Focus sur les liens uniquement", "L'indicateur de focus s'affiche uniquement sur les composants Link."],
    ["Ordre de tabulation", "Suivant l'ordre du DOM (gauche → droite)."],
  ],
};

const animationsOptions = {
  headers: ["Fonction attendue", "Spécification", "Durée", "Modifiable"],
  lines: [["Apparition", "Fade-in si le breadcrumb se charge dynamiquement", "150ms", "Oui"]],
};

const interactionsOptions = {
  headers: ["Fonction attendue", "Spécification"],
  lines: [
    ["Navigation lien", "Via composant Link (tous les comportements déjà définis)."],
    ["État courant non interactif", "Le dernier item n'est jamais un lien."],
  ],
};

const keyboardInteractionsOptions = {
  headers: ["Fonction attendue", "Spécifications"],
  lines: [
    ["TAB navigation", "Permet d'accéder à chaque lien individuellement."],
    ["ENTER", "Active le lien focusé via le composant Link."],
  ],
};

const safezoneOptions = {
  headers: ["Fonction attendue", "Spécification"],
  lines: [
    ["Padding minimal", "8px entre chaque item"],
    ["Hauteur minimale", "20px"],
  ],
};

const autreContextuelOptions = {
  headers: ["Fonction attendue", "Spécification"],
  lines: [
    ["HTML natif recommandé", '<nav aria-label="Fil d\'Ariane"><ol>…</ol></nav>'],
    ["Page actuelle", '<li aria-current="page">Détail</li>'],
  ],
};

export default Behaviors;
