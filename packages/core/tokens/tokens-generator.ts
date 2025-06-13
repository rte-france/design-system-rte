import fs from "fs";

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

export interface TokenValue {
  $type: string;
  $scopes: string[];
  $value: string | number;
}

export interface TypographyToken {
  [category: string]: {
    [size: string]: {
      [weight: string]: {
        [typographyTokenName: string]: TokenValue;
      };
    };
  };
}

export interface ShadowToken {
  [category: string]: {
    [shadowTokenName: string]: TokenValue;
  };
}

export interface LayoutToken {
  [category: string]: {
    [size: string]: TokenValue;
  };
}

export interface DefaultToken {
  [category: string]: {
    [subCategory: string]: TokenValue;
  };
}

export interface OpacityToken {
  [percentage: string]: TokenValue;
}

export type TokenVariables = TypographyToken | ShadowToken | LayoutToken | DefaultToken | OpacityToken;

export interface TokenItem {
  collection: Collection;
  mode: string;
  variables: TokenVariables;
}

const inputPath = "./tokens/sourceFiles/tokens.json";
const outputDir = "./tokens/";
const UNIT = "px";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

function extractScssVariablesFromTokens(json: TokenItem[]): void {
  for (const tokenItem of json) {
    let scss = "";
    let filename = "";
    switch (tokenItem.collection) {
      case Collection.COLORS:
        console.log("Skipping colors : " + tokenItem.mode);
        break;

      case Collection.TYPOGRAPHY:
        if (tokenItem.mode === "desktop") {
          filename = `_typography.scss`;
          scss += `@use 'primitives/typography' as *;\n\n`;
          scss += extractTypography(tokenItem.variables as TypographyToken);
          generateScssFile(scss, filename);
        } else {
          console.log("Skipping typography : " + tokenItem.mode);
        }
        break;

      case Collection.OPACITY:
        filename = buildScssFileName(tokenItem.collection);
        scss += extractOpacity(tokenItem.variables as OpacityToken, tokenItem.collection);
        generateScssFile(scss, filename);
        break;

      case Collection.SHADOWS:
        filename = buildScssFileName(tokenItem.collection);
        scss += extractShadows(tokenItem.variables as ShadowToken);
        generateScssFile(scss, filename);
        break;

      case Collection.LAYOUT:
        filename = buildScssFileName(tokenItem.collection);
        scss += extractLayout(tokenItem.variables as LayoutToken);
        generateScssFile(scss, filename);
        break;

      default:
        filename = buildScssFileName(tokenItem.collection);
        scss += extractDefault(tokenItem.variables as DefaultToken);
        generateScssFile(scss, filename);
        break;
    }
  }
}

function extractTypography(variables: TypographyToken): string {
  let scss = "";
  for (const category in variables) {
    for (const size in variables[category]) {
      for (const weight in variables[category][size]) {
        for (const typographyTokenName in variables[category][size][weight]) {
          const typographyToken = variables[category][size][weight][typographyTokenName];
          const rawTypographyTokenValue =
            typeof typographyToken.$value === "string"
              ? typographyToken.$value.split("Type.desktop.")[1]
              : typographyToken.$value;
          const typographyTokenValue =
            typeof rawTypographyTokenValue === "string"
              ? rawTypographyTokenValue.replace(/\./g, "-")
              : rawTypographyTokenValue;
          scss += buildScssVariable([category, size, weight, typographyTokenName], `$${typographyTokenValue}`);
        }
      }
    }
  }
  return scss;
}

function extractOpacity(variables: OpacityToken, collection: string): string {
  let scss = "";
  for (const percentage in variables) {
    const value = percentage.replace(/%$/, "");
    scss += buildScssVariable([collection, value], percentage);
  }
  return scss;
}

function extractShadows(variables: ShadowToken): string {
  let scss = "";
  for (const category in variables) {
    for (const shadowTokenName in variables[category]) {
      const shadowToken = variables[category][shadowTokenName];
      scss += buildScssVariable([category, shadowTokenName], String(shadowToken.$value));
    }
  }
  return scss;
}

function extractLayout(variables: LayoutToken): string {
  let scss = "";
  for (const category in variables) {
    for (const size in variables[category]) {
      const layoutToken = variables[category][size];
      if (category === "column-number") {
        scss += buildScssVariable([category, size], String(layoutToken.$value));
      } else {
        scss += buildScssVariable([category, size], `${layoutToken.$value}${UNIT}`);
      }
    }
  }
  return scss;
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

function buildScssVariable(variableName: string[], value: string): string {
  return `$${variableName.join("-")}: ${value};\n`.toLowerCase();
}

function buildScssFileName(collection: string): string {
  return `_${collection.toLowerCase()}.scss`;
}

function generateScssFile(scss: string, filename: string) {
  fs.writeFileSync(outputDir + filename, scss);
}

const json: TokenItem[] = JSON.parse(fs.readFileSync(inputPath, "utf8"));
extractScssVariablesFromTokens(json);
