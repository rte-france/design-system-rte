import { buildScssVariable, TokenValue } from "../common";

export interface OpacityToken {
  [percentage: string]: TokenValue;
}

export function extractOpacity(variables: OpacityToken, collection: string): string {
  let scss = "";
  for (const percentage in variables) {
    const value = percentage.replace(/%$/, "");
    scss += buildScssVariable([collection, value], percentage);
  }
  return scss;
}
