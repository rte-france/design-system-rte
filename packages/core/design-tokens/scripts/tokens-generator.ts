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

export enum ColorMode {
  BLEU_ICEBERG_LIGHT = "bleu-iceberg-light",
  BLEU_ICEBERG_DARK = "bleu-iceberg-dark",
  VIOLET_LIGHT = "violet-light",
  VIOLET_DARK = "violet-dark",
  VERT_FORET_LIGHT = "vert-foret-light",
  VERT_FORET_DARK = "vert-foret-dark",
}

export interface TokenValue {
  $type: string;
  $scopes: string[];
  $value: string | number;
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

export type TokenVariables = TypographyToken | ShadowToken | LayoutToken | DefaultToken | OpacityToken | ColorToken;

export interface TokenItem {
  collection: Collection;
  mode: string | ColorMode;
  variables: TokenVariables;
}
const INDENT = " ".repeat(2);

const outputDir = "./tokens/";
const themeOutputDir = "themes/";
const UNIT = "px";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

if (!fs.existsSync(`${outputDir}${themeOutputDir}`)) {
  fs.mkdirSync(`${outputDir}${themeOutputDir}`);
}

export function extractScssVariablesFromTokens(json: TokenItem[]): void {
  for (const tokenItem of json) {
    let scss = "";
    let filename = "";
    switch (tokenItem.collection) {
      case Collection.COLORS:
        {
          const mode = tokenItem.mode as ColorMode;
          filename = buildScssFileName(mode);
          const filePath = `${themeOutputDir}/${filename}`;
          scss = extractColors(tokenItem.variables as ColorToken, mode);
          generateScssFile(scss, filePath);
        }
        break;

      case Collection.TYPOGRAPHY:
        if (tokenItem.mode === "desktop") {
          filename = `_typography.scss`;

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

export function generateThemeMainScssFile() {
  let scss = "";
  Object.values(ColorMode).forEach((mode) => {
    scss += `@forward "${mode}";\n`;
  });
  fs.writeFileSync(outputDir + `themes/_main.scss`, scss);
}

function extractColors(variables: ColorToken, mode: ColorMode): string {
  let scss = `@use '../primitives/colors' as *;\n`;
  scss += `@use '../primitives/devColors' as *;\n\n`;
  scss += `$${mode}: (\n`;
  for (const category in variables) {
    const categoryTokens = variables[category];
    if ((categoryTokens as ColorTokenValue).$value) {
      const tokenValue = buildColorsScssVariableValue((categoryTokens as ColorTokenValue).$value, mode);
      scss += buildColorScssVariable([category], `$${tokenValue}`);
    } else {
      for (const subCategory in categoryTokens as Record<string, ColorTokenValue>) {
        const token = (categoryTokens as Record<string, ColorTokenValue>)[subCategory];
        if (token.$value) {
          const tokenValue = buildColorsScssVariableValue(token.$value, mode);
          if (category === "gradient") {
            scss += buildColorScssVariable([category, subCategory], `${tokenValue}`);
          } else {
            scss += buildColorScssVariable([category, subCategory], `$${tokenValue}`);
          }
        } else {
          const subTokenObj = token as unknown as Record<string, ColorTokenValue>;
          for (const subSubCategory in subTokenObj) {
            const tokenValue = buildColorsScssVariableValue(subTokenObj[subSubCategory]?.$value, mode);
            scss += buildColorScssVariable([category, subCategory, subSubCategory], `${tokenValue}`);
          }
        }
      }
    }
  }
  scss += ");\n";
  return scss;
}

function extractTypography(variables: TypographyToken): string {
  let scss = "";
  scss += `@use 'primitives/typography' as *;\n\n`;
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

function buildColorScssVariable(variableName: string[], value: string): string {
  return `${INDENT.repeat(1)}"${variableName.join("-")}": ${value},\n`.toLowerCase();
}

function buildColorsScssVariableValue(rawValue: string, mode: ColorMode): string {
  const value = rawValue.split(`.${mode}.`)[1];
  return value ? value.replace(/\./g, "-") : rawValue;
}

function buildScssFileName(collection: string): string {
  return `_${collection.toLowerCase()}.scss`;
}

function generateScssFile(scss: string, filePath: string) {
  fs.writeFileSync(outputDir + filePath, scss);
}
