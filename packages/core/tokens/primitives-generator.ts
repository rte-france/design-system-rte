import fs from "fs";

enum Collection {
  COLORS = "Primitive : Colors",
  TYPOGRAPHY = "Primitive : Type",
}

const inputPath = "./tokens/sourceFiles/primitives.json";
const outputDir = "./tokens/primitives/";
const UNIT = "px";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

function extractScssVariables(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  json: { collection: Collection; variables: Record<string, any> }[],
) {
  let scss = "";
  let filename = "";

  for (const tokenItem of json) {
    switch (tokenItem.collection) {
      case Collection.COLORS:
        filename = "_colors.scss";
        for (const color in tokenItem.variables) {
          for (const colorValue in tokenItem.variables[color]) {
            const colorVariable = tokenItem.variables[color][colorValue];
            scss += `$${color}-${colorValue}: ${colorVariable.$value};\n`.toLowerCase();
          }
        }
        break;

      case Collection.TYPOGRAPHY:
        filename = "_typography.scss";
        for (const category in tokenItem.variables) {
          for (const subCategory in tokenItem.variables[category]) {
            const typographyVariable = tokenItem.variables[category][subCategory];

            if (category === "font-weight") {
              scss += `$${category}-${subCategory}: ${typographyVariable.$value};\n`.toLowerCase();
            } else if (category === "font-family") {
              scss += `$${category}-${subCategory}: "${typographyVariable.$value}";\n`;
            } else {
              scss += `$${category}-${subCategory}: ${typographyVariable.$value}${UNIT};\n`.toLowerCase();
            }
          }
        }
        break;
    }
    fs.writeFileSync(outputDir + filename, scss);
    scss = "";
    filename = "";
  }
}

const raw = JSON.parse(fs.readFileSync(inputPath, "utf8"));
extractScssVariables(raw);
