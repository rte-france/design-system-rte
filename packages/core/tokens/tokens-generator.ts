import fs from "fs";

const inputPath = "./tokens/sourceFiles/raw-tokens.json";
const outputDir = "./tokens";
const outputPath = `${outputDir}/tokens.json`;

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const raw = JSON.parse(fs.readFileSync(inputPath, "utf8"));

const obj = JSON.parse(raw);

fs.writeFileSync(outputPath, JSON.stringify(obj, null, 2));
