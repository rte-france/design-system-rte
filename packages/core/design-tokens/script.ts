import fs from "fs";

import { extractScssVariables } from "./scripts/primitives-generator";
import { extractScssVariablesFromTokens, generateThemeMainScssFile, TokenItem } from "./scripts/tokens-generator";

const inputPrimitivesSource = "./design-tokens/scripts/sourceFiles/primitives.json";
const inputTokensSource = "./design-tokens/scripts/sourceFiles/tokens.json";

const raw = JSON.parse(fs.readFileSync(inputPrimitivesSource, "utf8"));
extractScssVariables(raw);

const json: TokenItem[] = JSON.parse(fs.readFileSync(inputTokensSource, "utf8"));
extractScssVariablesFromTokens(json);
generateThemeMainScssFile();
