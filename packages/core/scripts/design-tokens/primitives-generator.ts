import fs from "fs";
import path from "path";

import { generateScssFile, primitivesOutputDir, UNIT } from "./common";

export enum Collection {
  COLORS = "Primitive : Colors",
  TYPOGRAPHY = "Primitive : Type",
}

interface CollectionItem {
  collection: Collection;
  variables: Record<string, Record<string, { $value: string }>>;
}

if (!fs.existsSync(primitivesOutputDir)) {
  fs.mkdirSync(primitivesOutputDir);
}

export function generatePrimitivesScssFiles(json: CollectionItem[]) {
  for (const tokenItem of json) {
    let scss = "// This file is auto-generated. Do not edit directly.\n\n";
    let filename = "";
    switch (tokenItem.collection) {
      case Collection.COLORS:
        filename = "_colors.scss";
        scss += extractColors(tokenItem);
        generateScssFile(scss, path.join(primitivesOutputDir, filename));
        break;

      case Collection.TYPOGRAPHY:
        filename = "_typography.scss";
        scss += extractTypography(tokenItem);
        generateScssFile(scss, path.join(primitivesOutputDir, filename));
        break;
    }
  }
}

function extractColors(colorCollection: CollectionItem): string {
  let scss = "";
  for (const color in colorCollection.variables) {
    for (const colorValue in colorCollection.variables[color]) {
      const colorVariable = colorCollection.variables[color][colorValue];
      scss += `$${color}-${colorValue}: ${colorVariable.$value};\n`.toLowerCase();
    }
  }
  return scss;
}

function extractTypography(typographyCollection: CollectionItem): string {
  let scss = "";
  for (const category in typographyCollection.variables) {
    for (const subCategory in typographyCollection.variables[category]) {
      const typographyVariable = typographyCollection.variables[category][subCategory];
      if (category === "font-weight") {
        scss += `$${category}-${subCategory}: ${typographyVariable.$value};\n`.toLowerCase();
      } else if (category === "font-family") {
        scss += `$${category}-${subCategory}: "${typographyVariable.$value}";\n`;
      } else {
        scss += `$${category}-${subCategory}: ${typographyVariable.$value}${UNIT};\n`.toLowerCase();
      }
    }
  }
  return scss;
}
