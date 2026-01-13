import Accordion from "../../../../design-docs/src/components/Accordion/Accordion";
import Heading from "../../../../design-docs/src/components/Heading/Heading";
import Table from "../../../../design-docs/src/components/Table/Table";

const Options = () => {
  return (
    <div className="badge option-wrapper">
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

          <div className="option-table badge-types">
            <Heading id="badge-types" level={3}>
              Badge Types
            </Heading>
            <Table options={badgeTypes} />
          </div>

          <div className="option-table taille">
            <Heading id="taille" level={3}>
              Taille
            </Heading>
            <Table options={tailleOptions} />
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
            <Table options={otherComponents} />
          </div>
        </div>
      </Accordion>
    </div>
  );
};

const badgeTypes = {
  headers: ["Types", "Purpose", "Details"],
  lines: [
    ["Brand", "Couleur de la brand de l'interface.", "Possibilité d'activer une icône ou du texte."],
    ["Neutral", "Badge en tons de gris.", "Possibilité d'activer une icône ou du texte."],
    [
      "Indicator",
      "Notifie d'une nouveauté, de la disponibilité d'un élément, etc.",
      "Possibilité d'activer une icône ou du texte.",
    ],
  ],
};

const tailleOptions = {
  headers: ["Size", "Valeurs", "Contraintes"],
  lines: [
    ["Extra small", "6x6 px", "Pas d'icône ou de quantité possible."],
    ["Small", "12x12 px", "Pas d'icône ou de quantité possible."],
    ["Medium", "16x16 px", "hauteur fixe, largeur adaptable au contenu."],
  ],
};

const textOptions = {
  headers: ["Elément", "Description", "Règles et comportements"],
  lines: [["Count", "Nombre affiché dans le badge", "1-3 chiffres max"]],
};

const otherComponents = {
  headers: ["Composant", "Description", "Règle et comportements"],
  lines: [["Icon", "Elément graphique optionnel pouvant remplacer le label", "Ne peut coexister avec le texte."]],
};

export default Options;
