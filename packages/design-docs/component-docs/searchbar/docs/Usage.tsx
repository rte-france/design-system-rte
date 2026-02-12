import Table from "../../../src/components/Table/Table";
import UsageTemplate from "../../../src/components/Usage/Usage";

import doNotSvg from "./assets/doNot.svg";

const Usage = () => {
  const contentStandards = (
    <>
      <p className="title">
        Content Standards <span>(UX Writing)</span>
      </p>
      <Table options={contentStandardsTable} />
    </>
  );

  return (
    <div className="searchbar">
      <UsageTemplate image={doNotSvg} contentStandards={contentStandards} />
    </div>
  );
};

const contentStandardsTable = {
  headers: ["Critère", "Description détaillée"],
  lines: [
    [
      "Label",
      "Par défaut : \"Rechercher\"\n. Le label et le texte sont les éléments à afficher.\nPar défaut, Le Label est un style simple quand possible.\nLe texte de description s'affiche uniquement lorsque l'utilisateur interagit avec le champ.",
    ],
    [
      "Texte d'aide (description)",
      "Situé sous le champ afin de fournir un contexte supplémentaire ou des instructions sur les informations à saisir. La description fournit des informations utiles, telles que l'étendue de la recherche.",
    ],
  ],
};

export default Usage;
