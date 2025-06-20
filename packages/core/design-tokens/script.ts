import fs from "fs";

import { generatePrimitivesScssFiles } from "./scripts/primitives-generator";
import { generateTokensScssFiles, generateThemeMainScssFile, TokenItem } from "./scripts/tokens-generator";

const inputPrimitivesSource = "./design-tokens/scripts/sourceFiles/primitives.json";
const inputTokensSource = "./design-tokens/scripts/sourceFiles/tokens.json";
const rawPrimitives = JSON.parse(fs.readFileSync(inputPrimitivesSource, "utf8"));
generatePrimitivesScssFiles(rawPrimitives);

const rawTokens: TokenItem[] = JSON.parse(fs.readFileSync(inputTokensSource, "utf8"));
generateTokensScssFiles(rawTokens);
generateThemeMainScssFile();
