import fs from "fs";
import path from "path";

import {
  buildScssFileName,
  buildScssVariable,
  generateScssFile,
  PrivacyLevel,
  tokensOutputDir,
  TokenValue,
  UNIT,
} from "./common";
import {
  ColorMode,
  ColorToken,
  extractColors,
  generateThemeIndexScssFile,
  generateThemesFile,
} from "./tokens-generators/colors";
import { extractLayout, LayoutToken } from "./tokens-generators/layout";
import { extractOpacity, OpacityToken } from "./tokens-generators/opacity";
import { extractShadows, ShadowToken } from "./tokens-generators/shadows";
import { extractTypography, TypographyToken } from "./tokens-generators/typography";
import { generateZIndexTokensFile } from "./tokens-generators/zIndex";

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

export const TokenPrivacyLevel: Record<Collection, PrivacyLevel> = {
  [Collection.COLORS]: PrivacyLevel.PUBLIC,
  [Collection.TYPOGRAPHY]: PrivacyLevel.PUBLIC,
  [Collection.SPACING]: PrivacyLevel.PUBLIC,
  [Collection.BORDER]: PrivacyLevel.PUBLIC,
  [Collection.SHADOWS]: PrivacyLevel.PRIVATE,
  [Collection.LAYOUT]: PrivacyLevel.PUBLIC,
  [Collection.OPACITY]: PrivacyLevel.PUBLIC,
  [Collection.SIZE]: PrivacyLevel.PRIVATE,
};

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

export function generateTokensScssFiles(json: TokenItem[]): void {
  for (const tokenItem of json) {
    let scss = `// This file is auto-generated. Do not edit directly.\n\n`;
    let filename = "";
    switch (tokenItem.collection) {
      case Collection.COLORS:
        {
          const mode = tokenItem.mode as ColorMode;
          filename = buildScssFileName(mode);
          const filePath = path.join(tokensOutputDir, TokenPrivacyLevel[Collection.COLORS], "themes", "base", filename);
          scss += extractColors(tokenItem.variables as ColorToken, mode);
          generateScssFile(scss, filePath);
        }
        break;

      case Collection.TYPOGRAPHY:
        if (tokenItem.mode === "desktop") {
          console.log(" ☑️ Typography");
          filename = `_typography.scss`;
          const filePath = path.join(tokensOutputDir, TokenPrivacyLevel[Collection.TYPOGRAPHY], filename);

          scss += extractTypography(tokenItem.variables as TypographyToken);
          generateScssFile(scss, filePath);
        } else {
          console.log(" 🚫 Skipping typography for mode " + tokenItem.mode);
        }
        break;

      case Collection.OPACITY:
        {
          console.log(" ☑️ Opacity");
          filename = buildScssFileName(tokenItem.collection);
          const filePath = path.join(tokensOutputDir, TokenPrivacyLevel[Collection.OPACITY], filename);

          scss += extractOpacity(tokenItem.variables as OpacityToken, tokenItem.collection);
          generateScssFile(scss, filePath);
        }
        break;

      case Collection.SHADOWS:
        {
          console.log(" ☑️ Shadows");
          filename = buildScssFileName(tokenItem.collection);
          const filePath = path.join(tokensOutputDir, TokenPrivacyLevel[Collection.SHADOWS], filename);

          scss += extractShadows(tokenItem.variables as ShadowToken);
          generateScssFile(scss, filePath);
        }
        break;

      case Collection.LAYOUT:
        {
          console.log(" ☑️ Layout");
          filename = buildScssFileName(tokenItem.collection);
          const filePath = path.join(tokensOutputDir, TokenPrivacyLevel[Collection.LAYOUT], filename);

          scss += extractLayout(tokenItem.variables as LayoutToken);
          generateScssFile(scss, filePath);
        }
        break;

      default:
        {
          console.log(` ☑️ ${tokenItem.collection}`);
          filename = buildScssFileName(tokenItem.collection);
          const filePath = path.join(tokensOutputDir, TokenPrivacyLevel[tokenItem.collection], filename);

          scss += extractDefault(tokenItem.variables as DefaultToken);
          generateScssFile(scss, filePath);
        }
        break;
    }
  }

  generateZIndexTokensFile();
  generateThemesFile();
  generateThemeIndexScssFile();
  console.log(" ☑️ Themes");
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
