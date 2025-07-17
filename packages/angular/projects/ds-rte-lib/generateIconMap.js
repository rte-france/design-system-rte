import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const assetsDir = path.resolve(__dirname, "src/lib/assets/icons");
const iconDir = path.resolve(__dirname, "src/lib/components/icon");
const ALL_ICONS = getIconsName();
const { togglableIcons, regularIcons } = extractRegularAndTogglableIcons();

generateIconMaps();

function getIconsName() {
  const files = fs.readdirSync(assetsDir);
  const iconsName = files.filter((file) => file.endsWith(".svg")).map((file) => path.basename(file, ".svg"));
  return iconsName;
}

function extractRegularAndTogglableIcons() {
  const togglableIcons = [];
  const regularIcons = [];
  ALL_ICONS.forEach((iconName) => {
    if (iconName.toLowerCase().includes("outlined") || iconName.includes("filled")) {
      const baseName = iconName.replace(/(_outlined|_filled)$/, "");
      if (!togglableIcons.includes(baseName)) {
        togglableIcons.push(baseName);
      }
    } else {
      regularIcons.push(iconName);
    }
  });
  return {
    togglableIcons,
    regularIcons,
  };
}

function generateIconMaps() {
  let string = `// This file is auto-generated. Do not edit manually.\n\n`;

  string += generateImportsIconsMap();
  string += generateRegularIconsMap();
  string += generateTogglableIconsMap();
  string += generateIsValidIconNameFunction();

  fs.writeFileSync(path.resolve(iconDir, "icon-map.ts"), string);
}

function generateImportsIconsMap() {
  return `import { isValidIconName as isValidIconNameShared } from "@design-system-rte/core/components/icon/icon-utils";\n\n`;
}

function generateRegularIconsMap() {
  let string = `export const RegularIcons = {\n`;
  regularIcons.forEach((iconName) => {
    const snakeCaseName = iconName.replace(/_/g, "-");
    string += `  "${snakeCaseName}": "${iconName}",\n`;
  });
  string += `};\n\n`;
  return string;
}

function generateTogglableIconsMap() {
  let string = `export const TogglableIcons = {\n`;
  togglableIcons.forEach((iconName) => {
    const snakeCaseName = iconName.replace(/_/g, "-");
    string += `  "${snakeCaseName}": ["${iconName}_outlined", "${iconName}_filled"],\n`;
  });
  string += `};\n`;
  return string;
}

function generateIsValidIconNameFunction() {
  return `\nexport function isValidIconName(iconName: string): boolean {\n  return isValidIconNameShared(iconName, RegularIcons, TogglableIcons);\n}\n`;
}
