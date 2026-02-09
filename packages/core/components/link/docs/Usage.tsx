import React from "react";

import Table from "../../../../design-docs/src/components/Table/Table";
import UsageTemplate from "../../../../design-docs/src/components/Usage/Usage";

import DoDont from "./assets/DoDont.svg";

const Usage = () => {
  const contentStandards = (
    <div>
      <p className="title">
        Content Standards <span>(UX Writing)</span>
      </p>
      <Table options={contentStandardsTable} />
    </div>
  );

  return (
    <div className="badge">
      <UsageTemplate image={DoDont} contentStandards={contentStandards} />
    </div>
  );
};
export default Usage;

const contentStandardsTable = {
  headers: ["", "Description textuelle"],
  lines: [
    [
      "Liens seuls",
      "Les liens seuls ne sont pas des phrases et n'ont pas de ponctuation à la fin. Rédigez les comme des Buttons, avec des phrases courtes avec un verbe d'action.",
    ],
    ["Clarté", "Le lien doit expliciter ce que l’utilisateur va trouver en cliquant dessus."],
    [
      "Longueur",
      "Éviter les formulations vagues comme “Cliquez ici”. Préférer “Voir la documentation” ou “Accéder au profil”.",
    ],
    ["Ponctuation", "Pas de point à la fin d’un lien."],
    ["Style", "Le lien doit rester concis, cohérent avec les guidelines de contenu globales."],
  ],
};
