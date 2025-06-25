import { buildScssVariable, TokenValue, UNIT } from "../common";

export interface LayoutToken {
  [category: string]: {
    [size: string]: TokenValue;
  };
}

export function extractLayout(variables: LayoutToken): string {
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
