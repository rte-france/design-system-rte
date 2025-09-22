import fs from "fs";
import path from "path";

export interface TokenValue {
  $type: string;
  $scopes: string[];
  $value: string | number;
}

export const UNIT = "px";
export const INDENT = " ".repeat(2);

const rootDir = "design-tokens";
const tokensDir = "tokens";
const primitivesDir = "primitives";
const themesDir = "themes";

export const tokensOutputDir = path.join(rootDir, tokensDir);
export const themesOutputDir = path.join(rootDir, tokensDir, themesDir);
export const primitivesOutputDir = path.join(rootDir, primitivesDir);

export function buildScssVariable(variableName: string[], value: string): string {
  return `$${variableName.join("-")}: ${value};\n`.toLowerCase();
}

export function generateScssFile(scss: string, filePath: string) {
  fs.writeFileSync(filePath, scss);
}

export function buildScssFileName(collection: string): string {
  return `_${collection.toLowerCase()}.scss`;
}
