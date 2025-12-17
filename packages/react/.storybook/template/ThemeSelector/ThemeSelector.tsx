import { Mode, Theme } from "@design-system-rte/core/common/common-types";
import { Chip, IconButton } from "@design-system-rte/react";
import { useState } from "react";

import styles from "./ThemeSelector.module.scss";

const ThemeSelector = () => {
  const [currentMode, setCurrentMode] = useState<Mode>("light");
  const [currentTheme, setCurrentTheme] = useState<Theme>("bleu_iceberg");

  const switchMode = (mode: "light" | "dark") => {
    document.querySelector("html")?.setAttribute("data-mode", mode);
    setCurrentMode(mode);
  };

  const switchTheme = (theme: "bleu_iceberg" | "vert_foret" | "violet") => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
    setCurrentTheme(theme);
  };

  const themes = [
    { id: "bleu_iceberg", label: "Bleu Iceberg" },
    { id: "violet", label: "Violet" },
    { id: "vert_foret", label: "Vert Forêt" },
  ];

  const handleClick = (event: React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLSpanElement>) => {
    const clickedChipId = event.currentTarget.id as "bleu_iceberg" | "vert_foret" | "violet";
    switchTheme(clickedChipId);
  };

  return (
    <div className={styles["theme-selector"]}>
      <div className={styles["theme-selector__chips"]} role="radiogroup">
        {themes.map(({ id, label }) => (
          <Chip
            id={id}
            key={id}
            label={label}
            selected={currentTheme === id}
            onClick={handleClick}
            type="single"
            className="chip"
          />
        ))}
      </div>
      <div style={{ display: "flex" }}>
        <IconButton
          name={currentMode === "light" ? "mode-dark" : "mode-light"}
          aria-label={"Toggle Theme Mode"}
          onClick={() => switchMode(currentMode === "light" ? "dark" : "light")}
          data-testid="mode-switcher"
        />
      </div>
    </div>
  );
};

export default ThemeSelector;
