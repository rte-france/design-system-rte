import path from "path";

import { generateScssFile, INDENT, PrivacyLevel, tokensOutputDir } from "../common";

export enum ColorTheme {
  BLEU_ICEBERG = "bleu-iceberg",
  VIOLET = "violet",
  VERT_FORET = "vert-foret",
}

export enum ColorMode {
  BLEU_ICEBERG_LIGHT = "bleu-iceberg-light",
  BLEU_ICEBERG_DARK = "bleu-iceberg-dark",
  VIOLET_LIGHT = "violet-light",
  VIOLET_DARK = "violet-dark",
  VERT_FORET_LIGHT = "vert-foret-light",
  VERT_FORET_DARK = "vert-foret-dark",
}

export interface ColorTokenValue {
  $type: string;
  $scopes: string[];
  $value: string;
}

export interface ColorToken {
  [category: string]:
    | {
        [colorTokenName: string]: ColorTokenValue;
      }
    | ColorTokenValue;
}

const rawColorCategories = ["gradient", "elevation"];

export function extractColors(variables: ColorToken, mode: ColorMode): string {
  let scss = `@use '../../../../primitives/colors' as *;\n`;
  scss += `@use '../../../../primitives/devColors' as *;\n\n`;
  scss += `$${mode}: (\n`;
  for (const category in variables) {
    const categoryTokens = variables[category];
    if ((categoryTokens as ColorTokenValue).$value) {
      const sanitizedCategory = category.replace(/ /g, "-");
      scss += extractTokenValue(categoryTokens as ColorTokenValue, mode, [sanitizedCategory]);
    } else {
      scss += processSubTokens(categoryTokens as Record<string, ColorTokenValue>, mode, category, [category]);
    }
  }
  scss += addDevColors(mode);
  scss += ");\n";
  return scss;
}

export function generateThemeIndexScssFile() {
  let scss = "";
  Object.values(ColorMode).forEach((mode) => {
    scss += `@forward "${mode}";\n`;
  });
  const pathFile = path.join(tokensOutputDir, PrivacyLevel.PUBLIC, "themes", "base", "_index.scss");
  generateScssFile(scss, pathFile);
}

export function generateThemesFile() {
  let scss = `// This file is auto-generated. Do not edit directly.\n\n`;
  scss += `@use 'base' as *;\n\n`;
  Object.values(ColorTheme).forEach((theme) => {
    scss += `$${theme}: (\n`;
    scss += `${INDENT.repeat(1)}"light": $${theme}-light,\n`;
    scss += `${INDENT.repeat(1)}"dark": $${theme}-dark,\n`;
    scss += `);\n`;
  });

  scss += `\n$themes: (\n`;
  Object.values(ColorTheme).forEach((theme) => {
    scss += `${INDENT.repeat(1)}"${theme.replace(/-/g, "_")}": $${theme},\n`;
  });
  scss += `);`;

  const filePath = path.join(tokensOutputDir, PrivacyLevel.PUBLIC, "themes", "_index.scss");
  generateScssFile(scss, filePath);
}

function extractTokenValue(token: ColorTokenValue, mode: ColorMode, path: string[]): string {
  const tokenValue = buildColorsScssVariableValue(token.$value, mode);
  if (rawColorCategories.includes(path[0])) {
    return buildColorScssVariable(path, `${tokenValue}`);
  } else {
    return buildColorScssVariable(path, `$${tokenValue}`);
  }
}

function processSubTokens(
  tokens: Record<string, ColorTokenValue>,
  mode: ColorMode,
  category: string,
  path: string[] = [],
): string {
  let scss = "";
  for (const subCategory in tokens) {
    const token = tokens[subCategory];
    if (token.$value) {
      scss += extractTokenValue(token, mode, [...path, subCategory]);
    } else {
      scss += processSubTokens(token as unknown as Record<string, ColorTokenValue>, mode, category, [
        ...path,
        subCategory,
      ]);
    }
  }
  return scss;
}

function buildColorScssVariable(variableName: string[], value: string): string {
  return `${INDENT.repeat(1)}"${variableName.join("-")}": ${value},\n`.toLowerCase();
}

function buildColorsScssVariableValue(rawValue: string, mode: ColorMode): string {
  const value = rawValue.split(`.${mode}.`)[1];
  return value ? value.replace(/\./g, "-") : rawValue;
}

function addDevColors(mode: ColorMode): string {
  const isLightMode = mode.includes("light");
  let scss = "";
  if (isLightMode) {
    scss += `${INDENT.repeat(1)}// TODO remove this color (not a real token)\n`;
    scss += `${INDENT.repeat(1)}"background-brand-hover-opacity-20": $${mode.replace("-light", "")}-700-opacity-20,\n`;
    scss += `${INDENT.repeat(1)}// TODO remove this color (not a real token)\n`;
    scss += `${INDENT.repeat(1)}"background-danger-hover-opacity-20": $rouge-indications-700-opacity-20,\n`;
    scss += `${INDENT.repeat(1)}// TODO remove this color (not a real token)\n`;
    scss += `${INDENT.repeat(1)}"background-hover-opacity-50": $greyscale-50-opacity-50,\n`;
  } else {
    scss += `${INDENT.repeat(1)}// TODO remove this color (not a real token)\n`;
    scss += `${INDENT.repeat(1)}"background-brand-hover-opacity-20": $${mode.replace("-dark", "")}-200-opacity-20,\n`;
    scss += `${INDENT.repeat(1)}// TODO remove this color (not a real token)\n`;
    scss += `${INDENT.repeat(1)}"background-danger-hover-opacity-20": $rouge-indications-500-opacity-20,\n`;
    scss += `${INDENT.repeat(1)}// TODO remove this color (not a real token)\n`;
    scss += `${INDENT.repeat(1)}"background-hover-opacity-50": $greyscale-800-opacity-50,\n`;
  }

  return scss;
}
