import { buildScssVariable, TokenValue } from "../common";

export interface TypographyToken {
  [category: string]: {
    [size: string]: {
      [weight: string]: {
        [typographyTokenName: string]: TokenValue;
      };
    };
  };
}

export function extractTypography(variables: TypographyToken): string {
  let scss = "";
  scss += `@use '../../primitives/typography' as *;\n\n`;
  for (const category in variables) {
    scss += extractFromTypographyCategory(category, variables[category]);
  }
  return scss;
}

function extractFromTypographyCategory(category: string, categoryObj: TypographyToken[string]): string {
  let scss = "";
  for (const size in categoryObj) {
    scss += extractFromTypographySize(category, size, categoryObj[size]);
  }
  return scss;
}

function extractFromTypographySize(category: string, size: string, sizeObj: TypographyToken[string][string]): string {
  let scss = "";
  for (const weight in sizeObj) {
    scss += extractFromTypographyWeight(category, size, weight, sizeObj[weight]);
  }
  return scss;
}

function extractFromTypographyWeight(
  category: string,
  size: string,
  weight: string,
  weightObj: TypographyToken[string][string][string],
): string {
  let scss = "";
  for (const typographyTokenName in weightObj) {
    const typographyToken = weightObj[typographyTokenName];
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
  return scss;
}
