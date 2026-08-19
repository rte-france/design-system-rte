import { ThemeMode, Theme, Mode } from "@design-system-rte/core/common/common-types";
import { Select } from "@design-system-rte/react";
import { useState, useEffect } from "react";

import styles from "./ThemeSelector.module.scss";

const ThemeSelector = () => {
  const [currentThemeMode, setCurrentThemeMode] = useState<ThemeMode>("bleu_iceberg-light");

  const themes = [
    { id: "bleu_iceberg-light", label: "Bleu Iceberg - Light" },
    { id: "bleu_iceberg-dark", label: "Bleu Iceberg - Dark" },
    { id: "violet-light", label: "Violet - Light" },
    { id: "violet-dark", label: "Violet - Dark" },
    { id: "vert_foret-light", label: "Vert Forêt - Light" },
    { id: "vert_foret-dark", label: "Vert Forêt - Dark" },
  ];

  const handleOnChange = (value: ThemeMode) => {
    setCurrentThemeMode(value);
    const [theme, mode] = value.split("-") as [Theme, Mode];

    document.querySelector("html")?.setAttribute("data-theme", theme);
    document.querySelector("html")?.setAttribute("data-mode", mode);
  };

  useEffect(() => {
    const currentActiveTheme = document.querySelector("html")?.getAttribute("data-theme");
    const currentActiveMode = document.querySelector("html")?.getAttribute("data-mode");
    const currentActiveThemeMode = `${currentActiveTheme}-${currentActiveMode}` as ThemeMode;

    if (currentActiveThemeMode !== currentThemeMode) {
      setCurrentThemeMode(currentActiveThemeMode);
    }
  }, []);

  return (
    <>
      <div className={styles["theme-selector"]}>
        <Select
          label="Sélecteur de thème et mode"
          options={themes.map(({ id, label }) => ({ value: id, label }))}
          value={currentThemeMode}
          onChange={handleOnChange}
        />
      </div>
    </>
  );
};

export default ThemeSelector;
