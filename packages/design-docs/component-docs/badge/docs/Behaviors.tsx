import Accordion from "../../../src/components/Accordion/Accordion";
import Heading from "../../../src/components/Heading/Heading";
import Table from "../../../src/components/Table/Table";
import "./Behaviors.scss";

const Behaviors = () => {
  return (
    <div className="badge option-wrapper">
      <Accordion title="Behaviors">
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div className="option-table focus">
            <Heading id="focus" level={3}>
              Focus
            </Heading>
            <p>❌ Le badge ne reçoit jamais le focus</p>
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
            <Heading id="apparition" level={4}>
              Apparition
            </Heading>
            <ul className="sb-unstyled">
              <li>
                <strong>Spécification :</strong> Badge fade-in ou scale-up
              </li>
              <li>
                <strong>Délai :</strong> 150ms
              </li>
              <li>
                <strong>Modifiable :</strong> Oui
              </li>
            </ul>
            <br />
            <Heading id="disparition" level={4}>
              Disparition
            </Heading>
            <ul className="sb-unstyled">
              <li>
                <strong>Spécification :</strong> Fade-out ou scale-down
              </li>
              <li>
                <strong>Délai :</strong> 150ms
              </li>
              <li>
                <strong>Modifiable :</strong> Oui
              </li>
            </ul>
            <br />
            <Heading id="mise-a-jour" level={4}>
              Mise à jour
            </Heading>
            <ul className="sb-unstyled">
              <li>
                <strong>Spécification :</strong> Changement de valeur sans décalage visuel fort.
              </li>
              <li>
                <strong>Délai :</strong> 150ms
              </li>
              <li>
                <strong>Modifiable :</strong> Oui
              </li>
            </ul>
          </div>

          <div className="option-table keyboard-interactions">
            <Heading id="keyboard-interactions" level={3}>
              Keyboard interactions
            </Heading>
            <p>❌ Aucun comportement clavier requis</p>
          </div>

          <div className="option-table safezone">
            <Heading id="safezone" level={3}>
              Safezone
            </Heading>
            <ul className="sb-unstyled">
              <li>Espacement recommandé : Espacement mouvementé entre badge et bord du parent : 2-4px</li>
              <li>La safezone est définie par rapport au contenu du badge.</li>
            </ul>
          </div>
        </div>
      </Accordion>
    </div>
  );
};

const layoutOptions = {
  headers: ["Nom", "Description"],
  lines: [
    ["Text position", "Texte centré verticalement et horizontalement."],
    ["Truncation", "Pas de troncation."],
    ["Wrapping", "Pas de text wrapping, texte en une seule ligne."],
    ["Characters", "Un nombre maximal de caractère est fixé à 3 - Seulement des caractères numériques"],
    ["Flexible width", "Le badge s'allonge jusqu'à atteindre la largeur max."],
    ["Max width", "La largeur max est variable, le contenu étant fixé à 3 caractères."],
    ["Flexible height", "Pas flexible, le texte reste sur une seule ligne."],
  ],
};

export default Behaviors;
