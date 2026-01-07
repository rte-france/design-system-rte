import path from "path";

import { buildScssFileName, generateScssFile, PrivacyLevel, tokensOutputDir } from "../common";

export function generateZIndexTokensFile() {
  let scss = `// This file is auto-generated. Do not edit directly.\n\n`;

  scss += `$level-0: 0;\n`;
  scss += `$level-1: 10;\n`;
  scss += `$level-2: 100;\n`;

  const filename = buildScssFileName("zIndex");

  const filePath = path.join(tokensOutputDir, PrivacyLevel.PRIVATE, filename);

  generateScssFile(scss, filePath);
  console.log(" ☑️ Z-Index");
}
