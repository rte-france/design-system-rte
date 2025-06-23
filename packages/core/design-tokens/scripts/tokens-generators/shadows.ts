import { buildScssVariable, TokenValue, UNIT } from "../common";

export interface ShadowToken {
  [category: string]: {
    [shadowTokenName: string]: TokenValue;
  };
}

export function extractShadows(variables: ShadowToken): string {
  let scss = "";
  for (const category in variables) {
    for (const shadowTokenName in variables[category]) {
      const shadowToken = variables[category][shadowTokenName];
      scss += buildScssVariable([category, shadowTokenName], `${String(shadowToken.$value)}${UNIT}`);
    }
  }
  return scss;
}
