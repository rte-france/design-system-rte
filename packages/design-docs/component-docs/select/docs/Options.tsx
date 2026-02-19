import Accordion from "../../../src/components/Accordion/Accordion";
import Heading from "../../../src/components/Heading/Heading";
import Table from "../../../src/components/Table/Table";
import "./Options.scss";

const Options = () => {
  return (
    <div className="select option-wrapper">
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

          <div className="option-table label-position">
            <Heading id="label-position" level={3}>
              Label Position
            </Heading>
            <Table options={labelPositionOptions} />
          </div>

          <div className="option-table required-indicator">
            <Heading id="required-indicator" level={3}>
              Required Indicator
            </Heading>
            <Table options={requiredIndicatorOptions} />
          </div>

          <div className="option-table boolean-options">
            <Heading id="boolean-options" level={3}>
              Boolean Options
            </Heading>
            <Table options={booleanOptions} />
          </div>

          <div className="option-table text-options">
            <Heading id="text-options" level={3}>
              Text Options
            </Heading>
            <Table options={textOptions} />
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
    ["Active", "Apparence du champ lorsqu'il est actif (clic puis lorsque la dropdown est ouverte)"],
    ["Error", "Apparence du champ en erreur"],
    ["Disabled", "Champ grisé et inactif, non éditable"],
    ["Read Only", "Apparence comprenant du texte non modifiable et suffisamment contrasté"],
  ],
};

const sizesOptions = {
  headers: ["", "Size"],
  lines: [
    [
      "Default",
      "Le Select n'existe qu'en une seule taille. Le Select n'a qu'une seule hauteur (largeur variable) : 32 pixels de haut.",
    ],
  ],
};

const labelPositionOptions = {
  headers: ["Label Position", "Purpose"],
  lines: [
    ["Top", "Le label est positionné au-dessus du champ (option par défaut)."],
    ["Side", "Le label est aligné à gauche du champ, sur la même ligne (cas de formulaires denses)."],
  ],
};

const requiredIndicatorOptions = {
  headers: ["Apparence", "Purpose"],
  lines: [
    ["required", 'La mention "obligatoire" apparaît en rouge.'],
    ["required icon only", "Une icône (astérisque) permet d'indiquer que le champ est obligatoire."],
    ["optional", 'La mention "factulatif" apparaît en text italique.'],
  ],
};

const textOptions = {
  headers: ["Option", "Description", "Règles et comportements"],
  lines: [
    [
      "Label",
      "Texte associé au Select, décrivant la valeur devant être choisie par l'utilisateur.",
      "Son contenu peut être modifié.",
    ],
    [
      "Value",
      "Text situé dans le corps du champ de sélection.",
      "Ne s'affiche que sur une seule ligne et est cropé si le contenu dépasse la taille du champs (fortement déconseillé dans les guidelines)",
    ],
    [
      "Assistive Text",
      "Texte associé au Select, sous le champ, explicitant plus en détail la valeur demandée à l'utilisateur (contraintes, format, instructions, etc.)",
      "Son contenu peut être modifié. Sa forme dépend de l'assistive text sélectionné. Dans le cas de l'erreur, il est toujours rouge et remplace les autres formes de descriptions.",
    ],
  ],
};

const booleanOptions = {
  headers: ["Option", "Purpose"],
  lines: [
    ["Show Label", "Permet d'afficher ou masquer le label textuel autour du sélecteur."],
    [
      "Required / Optional",
      "Permet d'indiquer que le champ est obligatoire. L'interface doit par ailleurs le signaler visuellement (texte : (obligatoire) / icon : astérisque / autre).",
    ],
    [
      "Show Assistive Text",
      "Permet d'afficher ou masquer un texte optionnel affiché sous le champ. Ce champ possède des options complémentaires : appearance (default, error) : permet de modifier la nature et les caractéristiques du message d'assistance ; showIcon (true ou false) : permet d'intégrer ou non une icône au début de son Assistive Text ; label : cf text option.",
    ],
  ],
};

export default Options;
