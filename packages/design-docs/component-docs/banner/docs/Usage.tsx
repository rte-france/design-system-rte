import React from "react";

import Table from "../../../../design-docs/src/components/Table/Table";
import UsageTemplate from "../../../../design-docs/src/components/Usage/Usage";

import Do from "./assets/Do.svg";
import Dont from "./assets/Dont.svg";

const Usage = () => {
  const contentStandards = (
    <>
      <div className="usage">
        <img src={Do} alt="Bon exemple (Do)" />
        <img src={Dont} alt="Mauvais exemple (Don't)" />
      </div>
      <p className="title">
        Content Standards <span>(UX Writing)</span>
      </p>
      <Table options={contentStandardsTable} />
    </>
  );

  return (
    <div className="banner">
      <UsageTemplate contentStandards={contentStandards} />
    </div>
  );
};

export default Usage;

const contentStandardsTable = {
  headers: ["", "Description textuelle"],
  lines: [
    ["Titre (optionnel)", 'Phrase courte, impérative si action attendue (ex : "Connexion requise")'],
    ["Message", "Précis, factuel, sans ambiguïté"],
    ["CTA (facultatif)", 'Libellé clair (ex : "Réessayer", "Détails")'],
    ["Icône (optionnelle)", "Icône liée au statut (info, succès, attention, erreur)"],
  ],
};
