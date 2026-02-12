import React from "react";

import Table from "../../../../design-docs/src/components/Table/Table";
import UsageTemplate from "../../../../design-docs/src/components/Usage/Usage";

import DoDont from "./assets/DoDont.svg";

const Usage = () => {
  const content = (
    <>
      <p className="title">
        Content Standards <span>(UX Writing)</span>
      </p>

      <p className="subtitle">📌 Idéalement :</p>
      <ul className="sb-unstyled" style={{ margin: 0 }}>
        <li>
          <b>Le label principal doit être concis</b> <span>→ "J'accepte"</span>
        </li>
        <li>
          <b>La description du label principal doit être claire</b>
          <span>→ "J'accepte les conditions générales de l'utilisation de l'outil."</span>
        </li>
      </ul>

      <Table options={contentStandardsTable} />
    </>
  );

  return (
    <div className="checkbox">
      <UsageTemplate contentStandards={content} image={DoDont} />
    </div>
  );
};

export default Usage;

const contentStandardsTable = {
  headers: ["", "Description textuelle"],
  lines: [
    [
      "Action orientée",
      'Utilisez des verbes d\'action qui indiquent clairement ce que l\'utilisateur va faire en cliquant sur la checkbox. Par exemple, "Je suis d\'accord", "Je confirme mon choix", dans le cas d\'un groupe de checkbox on privilégie l\'usage d\'un mot : "Paris", "Strasbourg".',
    ],
    [
      "Clarté et concision",
      "Le texte sur le label de description doit être clair et concis, évitant toute ambiguïté. Utilisez des mots simples et directs.",
    ],
    [
      "Contexte et pertinence",
      "Assurez-vous que le texte de le checkbox est pertinent par rapport à l'action attendue et au contexte de la page.",
    ],
    ["Consistance", "Cell Text"],
    ["Convivialité", "Cell Text"],
    ["Taille et visibilité", "Cell Text"],
    ["Placement du texte", "Cell Text"],
    ["Ne pas utiliser de smiley dans les labels", "Cell Text"],
  ],
};
