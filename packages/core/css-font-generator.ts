import fs from "fs";
import path from "path";

import sass from "sass";

const outputDir = path.resolve(__dirname, "css");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const fontFile = `
    @font-face {
  font-display: swap;
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 300;
  src: url('@design-system-rte/core/assets/fonts/nunito-light-300.woff2') format('woff2');
}

@font-face {
  font-display: swap;
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  src: url('@design-system-rte/core/assets/fonts/nunito-regular-400.woff2') format('woff2');
}

@font-face {
  font-display: swap;
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 600;
  src: url('@design-system-rte/core/assets/fonts/nunito-semi-bold-600.woff2') format('woff2');
}

@font-face {
  font-display: swap;
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  src: url('@design-system-rte/core/assets/fonts/nunito-bold-700.woff2') format('woff2');
}
`;

const fontResult = sass.compileString(fontFile, {
  loadPaths: [path.resolve(__dirname)],
  style: "compressed",
});

fs.writeFileSync(path.join(outputDir, "rte-fonts.css"), fontResult.css);
