import fs from "fs";
import path from "path";

import sass from "sass";

const themes = ["bleu_iceberg", "violet", "vert_foret"];

const outputDir = path.resolve(__dirname, "css");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

function themeRules(theme: string): string {
  return `
            [data-theme=${theme}][data-mode=light] {
                @include apply-theme('${theme}', light);
            }

            [data-mode=light] [data-theme=${theme}]:not([data-mode]) {
                @include apply-theme('${theme}', light);
            }

            [data-theme=${theme}][data-mode=dark] {
                @include apply-theme('${theme}', dark);
            }

            [data-mode=dark] [data-theme=${theme}]:not([data-mode]) {
                @include apply-theme('${theme}', dark);
            }

            [data-theme=${theme}]:not([data-mode]) {
                @include apply-theme('${theme}', light);
            }
  `;
}

themes.forEach((theme) => {
  const sassContent = `
        @use 'design-tokens/abstract/mixins/theme' as *;

        :root {
            ${themeRules(theme)}
        }
    `;

  const result = sass.compileString(sassContent, {
    loadPaths: [path.resolve(__dirname)],
    style: "compressed",
  });

  const fileName = `${theme}.css`;
  fs.writeFileSync(path.join(outputDir, fileName), result.css);
});

const allThemesSassContent = `
    @use 'design-tokens/abstract/mixins/theme' as *;

    ${themes.map((theme) => themeRules(theme)).join("\n")}
`;

const allThemesResult = sass.compileString(allThemesSassContent, {
  loadPaths: [path.resolve(__dirname)],
  style: "compressed",
});

fs.writeFileSync(path.join(outputDir, "rte-themes.css"), allThemesResult.css);
