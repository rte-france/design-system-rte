import UsageTemplate from "../../../../design-docs/src/components/Usage/Usage";

import doNotSvg from "./assets/doNot.svg";

const Usage = () => {
  const contentStandards = (
    <>
      <p className="title">
        Content Standards <span>(UX Writing)</span>
      </p>
      <div style={{ display: "flex", gap: "4px", flexDirection: "column" }}>
        <p className="subtitle">Contenu numérique</p>
        <p className="description">1 à 3 chiffres (ou caractères) max (ex : 1, 9, 32, 99+)</p>
        <p className="subtitle">Contenu symbolique</p>
        <p className="description">
          Un point ou une puce colorée peut être utilisée pour signaler une nouveauté ou une présence. Pas de texte en
          toutes lettres (ex : éviter "Nouveau", "Beaucoup").
        </p>
      </div>
    </>
  );

  return (
    <div className="badge">
      <UsageTemplate image={doNotSvg} contentStandards={contentStandards} />
    </div>
  );
};

export default Usage;
