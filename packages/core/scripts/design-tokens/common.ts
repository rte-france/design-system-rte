import fs from "fs";
import path, { resolve } from "path";

export interface TokenValue {
  $type: string;
  $scopes: string[];
  $value: string | number;
}

export const UNIT = "px";
export const INDENT = " ".repeat(2);

export enum PrivacyLevel {
  PUBLIC = "public",
  PRIVATE = "private",
}

const rootDir = path.join(resolve(__dirname), "../../design-tokens");
const tokensDir = "tokens";
const primitivesDir = "primitives";

export const tokensOutputDir = path.join(rootDir, tokensDir);
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
