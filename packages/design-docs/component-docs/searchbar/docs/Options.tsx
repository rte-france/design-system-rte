import Accordion from "../../../src/components/Accordion/Accordion";
import Heading from "../../../src/components/Heading/Heading";
import Table from "../../../src/components/Table/Table";

const Options = () => {
  return (
    <div className="searchbar option-wrapper">
      <Accordion title="Options">
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ padding: "16px" }}>
            <div className="option-header">
              <p>
                Les <b>options comprennent</b> les <b>états</b> et{" "}
                <b>différentes formes que peut prendre le composant</b>
                .
                <br />
                Elles incluent : Les états, les variants, les tailles, les éléments modifiables qui composent le
                composant, etc.
                <br />
                Elles <b>n'incluent pas</b> les "Behaviors" qui correspondent à <b>comment le composant réagit</b>.
              </p>
            </div>
          </div>

          <div className="option-table interaction-state">
            <Heading id="interaction-state" level={3}>
              Interaction State
            </Heading>
            <Table options={interactionStateOptions} />
          </div>

          <div className="option-table sizes">
            <Heading id="sizes" level={3}>
              Sizes
            </Heading>
            <Table options={sizesOptions} />
          </div>

          <div className="option-table text-options">
            <Heading id="text-options" level={3}>
              Text Options
            </Heading>
            <Table options={textOptions} />
          </div>

          <div className="option-table other-components">
            <Heading id="other-components" level={3}>
              Other Components
            </Heading>
            <Table options={otherComponentsOptions} />
          </div>

          <div className="option-table boolean-options">
            <Heading id="boolean-options" level={3}>
              Boolean Options
            </Heading>
            <Table options={booleanOptions} />
          </div>
        </div>
      </Accordion>
    </div>
  );
};

const interactionStateOptions = {
  headers: ["Interaction State", "Purpose"],
  lines: [
    ["Enabled", "Etat par défaut : champ actif et éditable"],
    ["Hover", "Apparence du champ au survol de la souris"],
    ["Active", "Apparence du champ lorsqu'il est actif (clic puis remplissage)"],
    ["Completed", "Uniquement sur figma."],
    ["Disabled", "Champ grisé et inactif, non éditable"],
  ],
};

const sizesOptions = {
  headers: ["", "Size"],
  lines: [
    ["Default", "Le champ de recherche a une seule hauteur (largeur variable). 32 pixels de haut"],
    [
      "Compact Spacing",
      "Le champ de recherche a une hauteur de 24 px (largeur variable). Ce variant est utilisé dans un contexte de composant : dans le dropdown ou en filtre d'un tableau. 24 pixels de haut",
    ],
  ],
};

const textOptions = {
  headers: ["Option", "Description", "Règles et comportements"],
  lines: [
    [
      "Label",
      "Texte situé dans le champ de recherche, par défaut « Rechercher »",
      "Le label par défaut est « Rechercher », mais il peut être personnalisé pour être plus spécifique dans des cas d'utilisation tels que la recherche ciblée ou pour donner du contexte, et encourager l'utilisateur à effectuer une recherche plus spécifique (par exemple \"Rechercher un template\"). Par défaut, le libellé est en style de texte normal avant la saisie d'un terme de recherche, afin de respecter les ratios de contraste et de montrer qu'il s'agit d'un libellé de champ, et non d'un texte d'insertion.",
    ],
    [
      "Assistive Text",
      "Texte associé au champ de recherche, sous le champ de remplissage, explicitant plus en détail la valeur demandée à l'utilisateur (contraintes, format, instructions, etc.)",
      "Son contenu peut être modifié. Uniquement un texte de description est autorisé (pas d'état Error pour le champ de recherche)",
    ],
  ],
};

const otherComponentsOptions = {
  headers: ["Composant", "Description", "Règles et comportements"],
  lines: [
    [
      "Icône loupe",
      "Icône à gauche du champ",
      "Toujours positionnée à gauche, dans le champ de saisie et toujours visible. Non interactif.",
    ],
    [
      "Icône croix",
      "Icône à droite du champ",
      "A droite dans le champ de saisie. Apparaît dès que l'utilisateur rentre au moins un caractère dans le champ. Interactif : bouton qui clear le champ. Si les résultats de la recherche sont affichés dans un menu ou une fenêtre contextuelle, la sélection de ce bouton fermera le menu et effacera le champ. Si un terme de recherche a été saisi et que les résultats sont apparus, la sélection de ce bouton effacera uniquement le champ et n'affectera pas la liste des résultats.",
    ],
  ],
};

const booleanOptions = {
  headers: ["Propriété", "Description"],
  lines: [
    ["Show Reset Button", "Affiche ou masque l'icône croix qui se situe à droite dans le champ de saisie."],
    ["Show Assistive Text", "Permet d'afficher ou masquer un texte descriptif optionnel affiché sous le champ."],
  ],
};

export default Options;
