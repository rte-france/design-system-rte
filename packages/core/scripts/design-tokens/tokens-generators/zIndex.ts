import path from "path";

import { buildScssFileName, generateScssFile, tokensOutputDir } from "../common";

export function generateZIndexTokensFile() {
  let scss = `// This file is auto-generated. Do not edit directly.\n\n`;

  scss += `$level-0: 0;\n`;
  scss += `$level-1: 10;\n`;
  scss += `$level-2: 100;\n`;

  const filename = buildScssFileName("zIndex");

  const filePath = path.join(tokensOutputDir, filename);

  generateScssFile(scss, filePath);
}
