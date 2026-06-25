import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const assetsDir = path.resolve(__dirname, "src/lib/assets/icons");
const iconDir = path.resolve(__dirname, "src/lib/components/icon");
const figmaNodeMapPath = path.resolve(iconDir, "icon.figma-nodes.json");
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
  fs.writeFileSync(path.resolve(iconDir, "icon.figma.ts"), generateIconFigmaTemplate());
  fs.writeFileSync(path.resolve(iconDir, "icon-glyph.figma.batch.ts"), generateIconGlyphFigmaBatchTemplate());
  fs.writeFileSync(path.resolve(iconDir, "icon-glyphs.figma.batch.json"), generateIconGlyphFigmaBatch());
}

function toAngularIconName(figmaIconKey) {
  return figmaIconKey.replace(/_/g, "-");
}

function formatIconMapKey(iconMapKey) {
  return /^[A-Za-z_$][\w$]*$/.test(iconMapKey) ? iconMapKey : `"${iconMapKey}"`;
}

function generateIconFigmaTemplate() {
  let string = `// This file is auto-generated. Do not edit manually.\n`;
  string += `// url=https://www.figma.com/design/tKntdNwiF1x3jSpJ9Q0O0q/01.3-Iconography?node-id=88-85\n`;
  string += `/// <reference types="@figma/code-connect/figma-types" />\n`;
  string += `import figma from "figma";\n\n`;
  string += `const TOGGLABLE_ICON_NAMES = [\n`;
  togglableIcons
    .map(toAngularIconName)
    .sort((leftKey, rightKey) => leftKey.localeCompare(rightKey))
    .forEach((iconName) => {
      string += `  "${iconName}",\n`;
    });
  string += `];\n\n`;
  string += `function isRecord(value: unknown): value is Record<string, unknown> {\n`;
  string += `  return typeof value === "object" && value !== null;\n`;
  string += `}\n\n`;
  string += `function renderCodeConnectValue(value: unknown): string {\n`;
  string += `  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {\n`;
  string += `    return String(value);\n`;
  string += `  }\n\n`;
  string += `  if (Array.isArray(value)) {\n`;
  string += `    return value.map(renderCodeConnectValue).join("").trim();\n`;
  string += `  }\n\n`;
  string += `  if (!isRecord(value)) {\n`;
  string += `    return "";\n`;
  string += `  }\n\n`;
  string += `  if (typeof value["code"] === "string") {\n`;
  string += `    return value["code"].trim();\n`;
  string += `  }\n\n`;
  string += `  if (typeof value["value"] === "string") {\n`;
  string += `    return value["value"];\n`;
  string += `  }\n\n`;
  string += `  if (Array.isArray(value["sections"])) {\n`;
  string += `    return renderCodeConnectValue(value["sections"]);\n`;
  string += `  }\n\n`;
  string += `  return "";\n`;
  string += `}\n\n`;
  string += `function getConnectedIconName(): string {\n`;
  string += `  const renderedIcon = figma.properties.instance("icon");\n`;
  string += `  const renderedIconName = renderCodeConnectValue(renderedIcon);\n`;
  string += `  if (renderedIconName) {\n`;
  string += `    return renderedIconName;\n`;
  string += `  }\n\n`;
  string += `  const iconInstance = figma.properties.__instance__("icon");\n`;
  string += `  if (\n`;
  string += `    isRecord(iconInstance) &&\n`;
  string += `    "executeTemplate" in iconInstance &&\n`;
  string += `    typeof iconInstance["executeTemplate"] === "function"\n`;
  string += `  ) {\n`;
  string += `    return renderCodeConnectValue(iconInstance["executeTemplate"]().example);\n`;
  string += `  }\n\n`;
  string += `  return "";\n`;
  string += `}\n\n`;
  string += `const instance = figma.selectedInstance;\n`;
  string += `const name = getConnectedIconName();\n`;
  string += `const size = instance.getEnum("size", {\n`;
  string += `  XS: 12,\n`;
  string += `  S: 16,\n`;
  string += `  M: 20,\n`;
  string += `  L: 24,\n`;
  string += `  XL: 32,\n`;
  string += `});\n`;
  string += `const iconInstanceLayer = instance.findInstance("Icon instance");\n`;
  string += `const appearance =\n`;
  string += `  TOGGLABLE_ICON_NAMES.includes(name) && iconInstanceLayer?.type === "INSTANCE"\n`;
  string += `    ? iconInstanceLayer.getEnum("iconAppearance", {\n`;
  string += `        outlined: "outlined",\n`;
  string += `        filled: "filled",\n`;
  string += `      })\n`;
  string += `    : undefined;\n`;
  string += `const appearanceAttribute = appearance ? \` appearance="\${appearance}"\` : "";\n\n`;
  string += `export default {\n`;
  string += `  id: "Icon",\n`;
  string += `  example: figma.code\`<rte-icon name="\${name}" size="\${size}"\${appearanceAttribute} />\`,\n`;
  string += `  imports: ['import { IconComponent } from "@design-system-rte/angular";'],\n`;
  string += `};\n`;

  return string;
}

function getFigmaIconNodeIds() {
  return JSON.parse(fs.readFileSync(figmaNodeMapPath, "utf8"));
}

function getFigmaIconEntries() {
  const figmaIconNodeIds = getFigmaIconNodeIds();
  const figmaIconKeys = [...regularIcons, ...togglableIcons].sort((leftKey, rightKey) =>
    leftKey.localeCompare(rightKey),
  );
  const missingFigmaIconKeys = figmaIconKeys.filter((figmaIconKey) => !figmaIconNodeIds[figmaIconKey]);

  if (missingFigmaIconKeys.length) {
    console.warn(
      `Skipping Figma Code Connect for icons without node ids in ${figmaNodeMapPath}: ${missingFigmaIconKeys.join(", ")}`,
    );
  }

  return figmaIconKeys
    .filter((figmaIconKey) => figmaIconNodeIds[figmaIconKey])
    .map((figmaIconKey) => {
      const nodeId = figmaIconNodeIds[figmaIconKey];
      return {
        name: figmaIconKey,
        angularName: toAngularIconName(figmaIconKey),
        url: `https://www.figma.com/design/tKntdNwiF1x3jSpJ9Q0O0q/01.3-Iconography?node-id=${nodeId.replace(":", "-")}`,
      };
    });
}

function generateIconGlyphFigmaBatchTemplate() {
  let string = `// This file is auto-generated. Do not edit manually.\n`;
  string += `/// <reference types="@figma/code-connect/figma-types" />\n`;
  string += `import figma from "figma";\n\n`;
  string += `export default figma.value(figma.batch["angularName"]);\n`;
  return string;
}

function generateIconGlyphFigmaBatch() {
  return `${JSON.stringify(
    {
      templateFile: "./icon-glyph.figma.batch.ts",
      components: getFigmaIconEntries(),
    },
    null,
    2,
  )}\n`;
}

function generateImportsIconsMap() {
  return `import { isValidIconName as isValidIconNameShared } from "@design-system-rte/core/components/icon/icon-utils";\n\n`;
}

function generateRegularIconsMap() {
  let string = `export const RegularIcons = {\n`;
  regularIcons.forEach((iconName) => {
    const snakeCaseName = iconName.replace(/_/g, "-");
    string += `  ${formatIconMapKey(snakeCaseName)}: "${iconName}",\n`;
  });
  string += `};\n\n`;
  return string;
}

function generateTogglableIconsMap() {
  let string = `export const TogglableIcons = {\n`;
  togglableIcons.forEach((iconName) => {
    const snakeCaseName = iconName.replace(/_/g, "-");
    string += `  ${formatIconMapKey(snakeCaseName)}: ["${iconName}_outlined", "${iconName}_filled"],\n`;
  });
  string += `};\n`;
  return string;
}

function generateIsValidIconNameFunction() {
  return `\nexport function isValidIconName(iconName: string): boolean {\n  return isValidIconNameShared(iconName, RegularIcons, TogglableIcons);\n}\n`;
}
