import fs from "fs";

import { generatePrimitivesScssFiles } from "./scripts/primitives-generator";
import { generateTokensScssFiles, TokenItem } from "./scripts/tokens-generator";
import { generateThemeMainScssFile, generateThemesFile } from "./scripts/tokens-generators/colors";

const inputPrimitivesSource = "./design-tokens/scripts/sourceFiles/primitives.json";
const inputTokensSource = "./design-tokens/scripts/sourceFiles/tokens.json";
const rawPrimitives = JSON.parse(fs.readFileSync(inputPrimitivesSource, "utf8"));
generatePrimitivesScssFiles(rawPrimitives);

const rawTokens: TokenItem[] = JSON.parse(fs.readFileSync(inputTokensSource, "utf8"));
generateTokensScssFiles(rawTokens);
generateThemesFile();
generateThemeMainScssFile();
