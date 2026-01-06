import fs from "fs";
import { resolve } from "path";

import { generatePrimitivesScssFiles } from "./primitives-generator";
import { generateTokensScssFiles, TokenItem } from "./tokens-generator";
import { generateThemeMainScssFile, generateThemesFile } from "./tokens-generators/colors";

console.log("Generating design tokens...");
console.log(resolve(__dirname));

const currentDir = resolve(__dirname);

const inputPrimitivesSource = resolve(currentDir, "sourceFiles/primitives.json");
const inputTokensSource = resolve(currentDir, "sourceFiles/tokens.json");
const rawPrimitives = JSON.parse(fs.readFileSync(inputPrimitivesSource, "utf8"));
generatePrimitivesScssFiles(rawPrimitives);

const rawTokens: TokenItem[] = JSON.parse(fs.readFileSync(inputTokensSource, "utf8"));
generateTokensScssFiles(rawTokens);
generateThemesFile();
generateThemeMainScssFile();
