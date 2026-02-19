import Table from "../../../src/components/Table/Table";
import UsageTemplate from "../../../src/components/Usage/Usage";

import doNotSvg from "./assets/doNot.svg";
import "./Usage.scss";

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
    <div className="select">
      <UsageTemplate image={doNotSvg} contentStandards={contentStandards} />
    </div>
  );
};

const contentStandardsTable = {
  headers: ["", "Description textuelle"],
  lines: [
    ["Label", 'Concis, descriptif (ex : "Pays", "Catégorie"). Majuscule en début de label et pas de ponctuation.'],
    [
      "Texte d'aide (description)",
      "Situé sous le champ afin de fournir un contexte supplémentaire ou des instructions sur les informations à saisir.",
    ],
    [
      "Erreur",
      "Le texte d'erreur doit être rédigé en une ou deux phrases courtes et complètes, de manière claire et directe, avec un langage clair, tourné vers l'action. Les phrases doivent être terminées par un point et jamais par un point d'exclamation.",
    ],
  ],
};

export default Usage;
