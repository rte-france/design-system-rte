import path from "path";

import { buildScssFileName, generateScssFile, PrivacyLevel, tokensOutputDir } from "../common";

export function generateZIndexTokensFile() {
  let scss = `// This file is auto-generated. Do not edit directly.\n\n`;

  scss += `$level-1: 1;\n`;
  scss += `$level-2: 10;\n`;
  scss += `$backdrop: 999;\n`;

  const filename = buildScssFileName("zIndex");

  const filePath = path.join(tokensOutputDir, PrivacyLevel.PRIVATE, filename);

  generateScssFile(scss, filePath);
  console.log(" ☑️ Z-Index");
}
