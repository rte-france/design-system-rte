import React from "react";

import Tag from "../../../../react/src/components/Tag/Tag";
import Heading from "../Heading/Heading.tsx";
import "./LastUpdate.scss";

interface LastUpdateProps {
  updates?: { version: string; date: string; changes: string[] }[];
}

const LastUpdate = ({ updates }: LastUpdateProps) => {
  return (
    <>
      <Heading id="last-update" level={2}>
        Dernière mise à jour
      </Heading>
      <div className="rte-last-update">
        {updates?.map((update) => (
          <details key={update.version}>
            <summary>
              <span>
                V{update.version} <span style={{ color: "#3E3E3D" }}>- {update.date}</span>
              </span>
              <Tag
                tagType="decorative"
                label="Nouveauté"
                color="menthe"
                compactSpacing={true}
                style={{ marginLeft: "8px", color: "var(--background-decoration-mint)" }}
              />
            </summary>
            <ul>
              {update.changes.map((change, index) => (
                <li key={index}>{change}</li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </>
  );
};

export default LastUpdate;
