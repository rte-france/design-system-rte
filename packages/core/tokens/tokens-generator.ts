import fs from "fs";

enum Collection {
  COLORS = "Semantic : Colors",
  TYPOGRAPHY = "Semantic : Type",
  SPACING = "Spacing",
  BORDER = "Border",
  SHADOWS = "Shadows",
  LAYOUT = "Layout",
  OPACITY = "Opacity",
  SIZE = "Size",
}

const inputPath = "./tokens/sourceFiles/tokens.json";
const outputDir = "./tokens/";
const UNIT = "px";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

function generateScssFromJson(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  json: { collection: Collection; variables: Record<string, any>; mode: string }[],
): void {
  let scss = "";
  let filename = "";

  for (const tokenItem of json) {
    switch (tokenItem.collection) {
      case Collection.COLORS:
        console.log("Skipping colors : " + tokenItem.mode);
        break;

      case Collection.TYPOGRAPHY:
        if (tokenItem.mode === "desktop") {
          filename = `_typography.scss`;
          scss += `@use 'primitives/typography' as *;\n\n`;
          for (const category in tokenItem.variables) {
            for (const size in tokenItem.variables[category]) {
              for (const weight in tokenItem.variables[category][size]) {
                for (const typographyTokenName in tokenItem.variables[category][size][weight]) {
                  const typographyToken = tokenItem.variables[category][size][weight][typographyTokenName];
                  const rawTypographyTokenValue = typographyToken.$value.split("Type.desktop.")[1];
                  const typographyTokenValue = rawTypographyTokenValue.replace(/\./g, "-");
                  scss += buildScssVariable([category, size, weight, typographyTokenName], `$${typographyTokenValue}`);
                }
              }
            }
          }
          fs.writeFileSync(outputDir + filename, scss);
          scss = "";
          filename = "";
        } else {
          console.log("Skipping typography : " + tokenItem.mode);
        }
        break;

      case Collection.OPACITY:
        filename = buildScssFileName(tokenItem.collection);
        for (const percentage in tokenItem.variables) {
          const value = percentage.replace(/%$/, "");
          scss += buildScssVariable([tokenItem.collection, value], percentage);
        }

        fs.writeFileSync(outputDir + filename, scss);
        scss = "";
        filename = "";

        break;

      case Collection.SHADOWS:
        filename = buildScssFileName(tokenItem.collection);
        for (const category in tokenItem.variables) {
          for (const shadowTokenName in tokenItem.variables[category]) {
            const shadowToken = tokenItem.variables[category][shadowTokenName];
            scss += buildScssVariable([category, shadowTokenName], shadowToken.$value);
          }
        }
        fs.writeFileSync(outputDir + filename, scss);
        scss = "";
        filename = "";

        break;

      case Collection.LAYOUT:
        filename = buildScssFileName(tokenItem.collection);
        for (const category in tokenItem.variables) {
          for (const size in tokenItem.variables[category]) {
            const layoutToken = tokenItem.variables[category][size];
            if (category === "column-number") {
              scss += buildScssVariable([category, size], layoutToken.$value);
            } else {
              scss += buildScssVariable([category, size], `${layoutToken.$value}${UNIT}`);
            }
          }
        }
        fs.writeFileSync(outputDir + filename, scss);
        scss = "";
        filename = "";

        break;

      default:
        filename = buildScssFileName(tokenItem.collection);
        for (const category in tokenItem.variables) {
          for (const subCategory in tokenItem.variables[category]) {
            const token = tokenItem.variables[category][subCategory];
            scss += buildScssVariable([category, subCategory], `${token.$value}${UNIT}`);
          }
        }
        fs.writeFileSync(outputDir + filename, scss);
        scss = "";
        filename = "";

        break;
    }
  }
}

function buildScssVariable(variableName: string[], value: string): string {
  return `$${variableName.join("-")}: ${value};\n`.toLowerCase();
}

function buildScssFileName(collection: string): string {
  return `_${collection.toLowerCase()}.scss`;
}

const json = JSON.parse(fs.readFileSync(inputPath, "utf8"));
generateScssFromJson(json);
