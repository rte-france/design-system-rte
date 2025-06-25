import fs from "fs";
import path from "path";

import { buildScssVariable, generateScssFile, themesOutputDir, tokensOutputDir, TokenValue, UNIT } from "./common";
import { ColorMode, ColorToken, extractColors } from "./tokens-generators/colors";
import { extractLayout, LayoutToken } from "./tokens-generators/layout";
import { extractOpacity, OpacityToken } from "./tokens-generators/opacity";
import { extractShadows, ShadowToken } from "./tokens-generators/shadows";
import { extractTypography, TypographyToken } from "./tokens-generators/typography";

export enum Collection {
  COLORS = "Semantic : Colors",
  TYPOGRAPHY = "Semantic : Type",
  SPACING = "Spacing",
  BORDER = "Border",
  SHADOWS = "Shadows",
  LAYOUT = "Layout",
  OPACITY = "Opacity",
  SIZE = "Size",
}

export interface DefaultToken {
  [category: string]: {
    [subCategory: string]: TokenValue;
  };
}

export type TokenVariables = TypographyToken | ShadowToken | LayoutToken | DefaultToken | OpacityToken | ColorToken;

export interface TokenItem {
  collection: Collection;
  mode: string | ColorMode;
  variables: TokenVariables;
}

if (!fs.existsSync(tokensOutputDir)) {
  fs.mkdirSync(tokensOutputDir);
}

if (!fs.existsSync(themesOutputDir)) {
  fs.mkdirSync(themesOutputDir);
}

export function generateTokensScssFiles(json: TokenItem[]): void {
  for (const tokenItem of json) {
    let scss = "";
    let filename = "";
    switch (tokenItem.collection) {
      case Collection.COLORS:
        {
          const mode = tokenItem.mode as ColorMode;
          filename = buildScssFileName(mode);
          const filePath = path.join(themesOutputDir, filename);

          scss = extractColors(tokenItem.variables as ColorToken, mode);
          generateScssFile(scss, filePath);
        }
        break;

      case Collection.TYPOGRAPHY:
        if (tokenItem.mode === "desktop") {
          filename = `_typography.scss`;
          const filePath = path.join(tokensOutputDir, filename);

          scss += extractTypography(tokenItem.variables as TypographyToken);
          generateScssFile(scss, filePath);
        } else {
          console.log("Skipping typography : " + tokenItem.mode);
        }
        break;

      case Collection.OPACITY:
        {
          filename = buildScssFileName(tokenItem.collection);
          const filePath = path.join(tokensOutputDir, filename);

          scss += extractOpacity(tokenItem.variables as OpacityToken, tokenItem.collection);
          generateScssFile(scss, filePath);
        }
        break;

      case Collection.SHADOWS:
        {
          filename = buildScssFileName(tokenItem.collection);
          const filePath = path.join(tokensOutputDir, filename);

          scss += extractShadows(tokenItem.variables as ShadowToken);
          generateScssFile(scss, filePath);
        }
        break;

      case Collection.LAYOUT:
        {
          filename = buildScssFileName(tokenItem.collection);
          const filePath = path.join(tokensOutputDir, filename);

          scss += extractLayout(tokenItem.variables as LayoutToken);
          generateScssFile(scss, filePath);
        }
        break;

      default:
        {
          filename = buildScssFileName(tokenItem.collection);
          const filePath = path.join(tokensOutputDir, filename);

          scss += extractDefault(tokenItem.variables as DefaultToken);
          generateScssFile(scss, filePath);
        }
        break;
    }
  }
}

function extractDefault(variables: DefaultToken): string {
  let scss = "";
  for (const category in variables) {
    for (const subCategory in variables[category]) {
      const token = variables[category][subCategory];
      scss += buildScssVariable([category, subCategory], `${token.$value}${UNIT}`);
    }
  }
  return scss;
}

function buildScssFileName(collection: string): string {
  return `_${collection.toLowerCase()}.scss`;
}
