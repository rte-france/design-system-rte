import fs from "fs";
import { resolve } from "path";

import { generatePrimitivesScssFiles } from "./primitives-generator";
import { generateTokensScssFiles, TokenItem } from "./tokens-generator";

console.log("🔧 Generating design tokens...\n");

const currentDir = resolve(__dirname);

const inputPrimitivesSource = resolve(currentDir, "sourceFiles/primitives.json");
const inputTokensSource = resolve(currentDir, "sourceFiles/tokens.json");

const rawPrimitives = JSON.parse(fs.readFileSync(inputPrimitivesSource, "utf8"));
console.log("📦 Generating primitives... ");
generatePrimitivesScssFiles(rawPrimitives);
console.log("✅ Primitives generated successfully.\n");

const rawTokens: TokenItem[] = JSON.parse(fs.readFileSync(inputTokensSource, "utf8"));
console.log("📦 Generating tokens... ");
generateTokensScssFiles(rawTokens);
console.log("✅ Tokens generated successfully.\n");

console.log("✅ All design tokens generated successfully. ");
