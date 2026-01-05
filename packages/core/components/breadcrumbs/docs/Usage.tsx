import UsageTemplate from "../../../../design-docs/src/components/Usage/Usage";

import doNotSvg from "./assets/doNot.svg";
import "./Usage.scss";

const Usage = () => {
  const contentStandards = (
    <>
      <p className="title">
        Content Standards <span>(UX Writing)</span>
      </p>
      <div style={{ display: "flex", gap: "4px", flexDirection: "column" }}>
        <p className="subtitle">Description textuelle</p>
        <p className="description">
          <b>Texte des liens</b> simples, compréhensibles, sans ponctuation finale.
        </p>
      </div>
    </>
  );

  return (
    <div className="breadcrumb">
      <UsageTemplate image={doNotSvg} contentStandards={contentStandards} />
    </div>
  );
};

export default Usage;
