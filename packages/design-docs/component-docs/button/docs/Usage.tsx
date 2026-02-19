import React from "react";

import Table from "../../../../design-docs/src/components/Table/Table";
import UsageTemplate from "../../../../design-docs/src/components/Usage/Usage";

import DoDontSvg from "./assets/DoDont.svg";

const Usage = () => {
  const content = (
    <>
      <p className="title">
        Content Standards <span>(UX Writing)</span>
      </p>
      <p className="description">
        Selon les règles ergonomiques de <b>Bastien &amp; Scapin</b>, un bouton doit contenir <b>3 mots maximum</b> pour
        garantir lisibilité et rapidité de compréhension.
      </p>
      <p className="subtitle">📌 Idéalement :</p>
      <ul className="sb-unstyled" style={{ margin: 0 }}>
        <li>
          <b>1 mot</b> <span>→ "Envoyer"</span>
        </li>
        <li>
          <b>2 mots</b> <span>→ "Ajouter au panier"</span>
        </li>
        <li>
          <b>3 mots max</b> <span>→ "Créer un compte"</span>
        </li>
      </ul>
      <p className="description">Si un bouton nécessite plus de 3 mots, envisagez une reformulation plus concise.</p>
      <Table options={contentStandardsTable} />
    </>
  );

  return (
    <div className="button">
      <UsageTemplate contentStandards={content} image={DoDontSvg} />
    </div>
  );
};

export default Usage;

const contentStandardsTable = {
  headers: ["", "Description textuelle"],
  lines: [
    [
      "Action orientée",
      'Utiliser des verbes qui indiquent l’action ("Envoyer", "Télécharger" etc.), qui reflètent l’action que l’utilisateur va effectuer.\nLes labels avec des noms, emojis ou des adjectifs ont tendance à désorienter l’utilisateur.\nSe tenir à un texte simple sans ponctuation ou décoration.',
    ],
    [
      "Clarté et concision",
      "Le texte sur le bouton doit être clair et concis, évitant toute ambiguïté. Utilisez des mots simples et directs.\nLimiter le texte du bouton à 2-3 mots mais pas plus.",
    ],
    [
      "Contexte et pertinence",
      "Assurez-vous que le texte du bouton est pertinent par rapport à l’action attendue et au contexte de la page.",
    ],
    [
      "Consistance",
      "Utilisez un langage et un ton cohérents avec le reste de l’interface utilisateur pour maintenir une expérience fluide.",
    ],
    [
      "Les capitales",
      "Les boutons ne doivent pas être rédigés en capitales, même pour accentuer une action.\nPar contre, le mot ou le début de la phrase doit en effet comporter une majuscule.",
    ],
  ],
};
