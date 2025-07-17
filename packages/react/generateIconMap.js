import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const iconDir = path.resolve(__dirname, "src/components/icon");
const ALL_ICONS = getIconsName();
const { togglableIcons, regularIcons } = extractRegularAndTogglableIcons();

generateIndexFile();
generateIconMaps();

function getIconsName() {
  const files = fs.readdirSync(path.resolve(iconDir, "generated"));
  const iconsName = files.filter((file) => file.endsWith(".tsx")).map((file) => path.basename(file, ".tsx"));
  return iconsName;
}

function extractRegularAndTogglableIcons() {
  const togglableIcons = [];
  const regularIcons = [];
  ALL_ICONS.forEach((iconName) => {
    if (iconName.includes("Outlined") || iconName.includes("Filled")) {
      const baseName = iconName.replace(/(Outlined|Filled)$/, "");
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

function generateIndexFile() {
  let string = `// This file is auto-generated. Do not edit manually.\n\n`;
  ALL_ICONS.forEach((iconName) => {
    string += `export { default as ${iconName} } from './${iconName}';\n`;
  });
  fs.writeFileSync(path.resolve(iconDir, "generated/index.ts"), string);
}

function generateIconMaps() {
  let string = `// This file is auto-generated. Do not edit manually.\n\n`;

  string += generateImportsIconsMap();
  string += generateRegularIconsMap();
  string += generateTogglableIconsMap();
  string += generateIsValidIconNameFunction();

  fs.writeFileSync(path.resolve(iconDir, "IconMap.ts"), string);
}

function generateImportsIconsMap() {
  let string = `import { isValidIconName as isValidIconNameShared } from "@design-system-rte/core/components/icon/icon-utils";\n\n`;
  string += `import {\n`;
  ALL_ICONS.forEach((iconName) => {
    const iconNameCamelCase = iconName.charAt(0).toUpperCase() + iconName.slice(1);
    string += `  ${iconNameCamelCase},\n`;
  });
  string += `} from "./generated";\n\n`;
  return string;
}

function generateRegularIconsMap() {
  let string = `export const RegularIcons = {\n`;
  regularIcons.forEach((iconName) => {
    const snakeCaseName = iconName.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
    string += `  "${snakeCaseName}": ${iconName},\n`;
  });
  string += `};\n\n`;
  return string;
}

function generateTogglableIconsMap() {
  let string = `export const TogglableIcons = {\n`;
  togglableIcons.forEach((iconName) => {
    const snakeCaseName = iconName
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
      .toLowerCase();
    string += `  "${snakeCaseName}": [${iconName}Outlined, ${iconName}Filled],\n`;
  });
  string += `};\n`;
  return string;
}

function generateIsValidIconNameFunction() {
  return `\nexport function isValidIconName(name: string): boolean {\n  return isValidIconNameShared(name, RegularIcons, TogglableIcons);\n}\n`;
}
