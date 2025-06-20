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

const outputDir = "./design-tokens/";
const tokensOutputDir = "tokens/";
const themeOutputDir = "themes/";
const UNIT = "px";

if (!fs.existsSync(`${outputDir}${tokensOutputDir}`)) {
  fs.mkdirSync(`${outputDir}${tokensOutputDir}`);
}

if (!fs.existsSync(`${outputDir}${themeOutputDir}`)) {
  fs.mkdirSync(`${outputDir}${themeOutputDir}`);
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
          const filePath = `${themeOutputDir}/${filename}`;

          scss = extractColors(tokenItem.variables as ColorToken, mode);
          generateScssFile(scss, filePath);
        }
        break;

      case Collection.TYPOGRAPHY:
        {
          if (tokenItem.mode === "desktop") {
            filename = `_typography.scss`;
            const filePath = `${tokensOutputDir}/${filename}`;

            scss += extractTypography(tokenItem.variables as TypographyToken);
            generateScssFile(scss, filePath);
          } else {
            console.log("Skipping typography : " + tokenItem.mode);
          }
        }
        break;

      case Collection.OPACITY:
        {
          filename = buildScssFileName(tokenItem.collection);
          const filePath = `${tokensOutputDir}/${filename}`;
          scss += extractOpacity(tokenItem.variables as OpacityToken, tokenItem.collection);
          generateScssFile(scss, filePath);
        }
        break;

      case Collection.SHADOWS:
        {
          filename = buildScssFileName(tokenItem.collection);
          const filePath = `${tokensOutputDir}/${filename}`;

          scss += extractShadows(tokenItem.variables as ShadowToken);
          generateScssFile(scss, filePath);
        }
        break;

      case Collection.LAYOUT:
        {
          filename = buildScssFileName(tokenItem.collection);
          const filePath = `${tokensOutputDir}/${filename}`;

          scss += extractLayout(tokenItem.variables as LayoutToken);
          generateScssFile(scss, filePath);
        }
        break;

      default:
        {
          filename = buildScssFileName(tokenItem.collection);
          const filePath = `${tokensOutputDir}/${filename}`;

          scss += extractDefault(tokenItem.variables as DefaultToken);
          generateScssFile(scss, filePath);
        }
        break;
    }
  }

  generateThemesFile();
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
  scss += addDevColors(mode);
  scss += ");\n";
  return scss;
}

function extractTypography(variables: TypographyToken): string {
  let scss = "";
  scss += `@use '../primitives/typography' as *;\n\n`;
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

function buildScssFileName(collection: string): string {
  return `_${collection.toLowerCase()}.scss`;
}

function generateScssFile(scss: string, filePath: string) {
  fs.writeFileSync(outputDir + filePath, scss);
}

function generateThemesFile() {
  let scss = `@use "../themes/main" as *;\n\n`;
  Object.values(ColorTheme).forEach((theme) => {
    scss += `$${theme}: (\n`;
    scss += `${INDENT.repeat(1)}"light": $${theme}-light,\n`;
    scss += `${INDENT.repeat(1)}"dark": $${theme}-dark,\n`;
    scss += `);\n`;
  });
  const filePath = `${tokensOutputDir}/_themes.scss`;
  generateScssFile(scss, filePath);
}
