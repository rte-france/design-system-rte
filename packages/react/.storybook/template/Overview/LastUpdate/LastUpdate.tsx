import Tag from "../../../../src/components/tag/Tag";
import "./LastUpdate.scss";

interface LastUpdateProps {
  updates?: { version: string; date: string; changes: string[] }[];
}

const LastUpdate = ({ updates }: LastUpdateProps) => {
  return (
    <div className="container">
      {updates?.map((update) => (
        <details key={update.version}>
          <summary>
            <span>
              V{update.version} <span style={{ color: "#3E3E3D" }}>- {update.date}</span>
            </span>
            <Tag
              tagType="status"
              status="success"
              label="Nouveauté"
              compactSpacing={true}
              style={{ marginLeft: "8px" }}
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
  );
};

export default LastUpdate;
