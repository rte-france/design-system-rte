import fs from "fs";

const inputPath = "./tokens/sourceFiles/raw-primitives.json";
const outputDir = "./tokens/primitives";
const outputPath = `${outputDir}/primitives.json`;
const colorsScssPath = `${outputDir}/_colors.scss`;
const typographyScssPath = `${outputDir}/_typography.scss`;
const UNIT = "px";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

function toScssVariables(obj = {}, type: "colors" | "typography" = "colors") {
  let result = "";
  for (const [key, value] of Object.entries(obj)) {
    result += "$" + key + ": ";
    switch (type) {
      case "colors":
        result += value;
        break;
      case "typography": {
        const keyParts = key.split("-");
        if (keyParts[0] === "font" && keyParts[1] === "family") {
          result += `"${value}"`;
        } else if (keyParts[0] === "font" && keyParts[1] === "weight") {
          result += value;
        } else {
          result += `${value}${UNIT}`;
        }
        break;
      }
      default:
        break;
    }
    result += ";\n";
  }
  return result;
}

const raw = JSON.parse(fs.readFileSync(inputPath, "utf8"));

const obj = JSON.parse(raw);

fs.writeFileSync(outputPath, JSON.stringify(obj, null, 2));

if (obj["primitive-colors"] && obj["primitive-colors"]["h-e-x-value"]) {
  const colorsScss = `${toScssVariables(obj["primitive-colors"]["h-e-x-value"], "colors")}`;
  fs.writeFileSync(colorsScssPath, colorsScss);
}

if (obj["primitive-type"] && obj["primitive-type"]["value"]) {
  const typographyScss = `${toScssVariables(obj["primitive-type"]["value"], "typography")}`;
  fs.writeFileSync(typographyScssPath, typographyScss);
}
