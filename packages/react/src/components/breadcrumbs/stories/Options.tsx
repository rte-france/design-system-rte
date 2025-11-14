import Accordion from "../../../../.storybook/template/Accordion/Accordion";
import Heading from "../../../../.storybook/template/heading/Heading";
import Table from "../../../../.storybook/template/Table/Table";
import "./Options.scss";

const Options = () => {
  return (
    <div className="breadcrumb option-wrapper">
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
                Elles <b>n’incluent pas</b> les “Behaviors” qui correspondent à <b>comment le composant réagit</b>.
              </p>
            </div>
          </div>

          <div className="option-table number-of-pages">
            <Heading level={3}>Number of Pages</Heading>
            <Table options={numberOfPages} />
          </div>
          <div className="option-table boolean-option">
            <Heading level={3}>Boolean options</Heading>
            <Table options={booleanOptions} />
          </div>
        </div>
      </Accordion>
    </div>
  );
};

const numberOfPages = {
  headers: ["Valeur", "Purpose"],
  lines: [
    ["1", "page source"],
    ["2", "2 pages visibles"],
    ["3", "3 pages visibles"],
    ["3+", 'Plus de 3 pages visibles. Structure : page source / "…" / avant-dernier / courant'],
  ],
};

const booleanOptions = {
  headers: ["Valeur", "Purpose"],
  lines: [["showBadge", "Afficher un badge à côté de la page qui nécessite une notification"]],
};

export default Options;
