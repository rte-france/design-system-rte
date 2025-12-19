import Tag from "@design-system-rte/react/src/components/tag/Tag";
import React from "react";

import AccordionIconToggle from "../../../AccordionIconToggle/AccordionIconToggle";

import "./Changelog.scss";

interface ChangelogProps {
  updates?: { version: string; date: string; changes: string[] }[];
}

const Changelog = ({ updates }: ChangelogProps) => {
  const [openStates, setOpenStates] = React.useState<{ [key: string]: boolean }>({});

  function handleToggle(version: string) {
    setOpenStates((prev) => ({
      ...prev,
      [version]: !prev[version],
    }));
  }

  return (
    <div className="rte-changelog">
      {updates?.map((update) => {
        const isOpen = openStates[update.version] ?? true;
        return (
          <details
            key={update.version}
            open={isOpen}
            onToggle={() => {
              handleToggle(update.version);
            }}
          >
            <summary>
              <div className="rte-changelog-summary">
                <AccordionIconToggle isAccordionOpen={isOpen} />
                <span>
                  V{update.version} <span style={{ color: "#3E3E3D" }}>- {update.date}</span>
                </span>
                <Tag
                  tagType="decorative"
                  label="Nouveauté"
                  color="menthe"
                  compactSpacing={true}
                  style={{ marginLeft: "8px" }}
                />
              </div>
            </summary>
            <ul>
              {update.changes.map((change, index) => (
                <li key={index}>{change}</li>
              ))}
            </ul>
          </details>
        );
      })}
    </div>
  );
};

export default Changelog;
