import path from 'path';
import sass from 'sass';
import fs from 'fs';

const themes = [
    'bleu_iceberg',
    'violet',
    'vert_foret'
]

const outputDir = path.resolve(__dirname, 'css');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

themes.forEach(theme => {

    const sassContent = `
        @use 'tokens/_mixins.scss' as *;

        :root {
            [data-theme=${theme}][data-mode=light] {
                @include apply-theme(${theme}, light);
            }

            [data-theme=${theme}][data-mode=dark] {
                @include apply-theme(${theme}, dark);
            }
        }
    `;

    const result = sass.compileString(sassContent, {
        loadPaths: [path.resolve(__dirname)],
        style: 'compressed'
    })
    
    const fileName = `${theme}.css`;
    fs.writeFileSync(path.join(outputDir, fileName), result.css);
});

const allThemesSassContent = `
    @use 'tokens/_mixins.scss' as *;

    ${themes.map(theme => `
        [data-theme="${theme}"][data-mode="light"] {
            @include apply-theme('${theme}', 'light');
        }

        [data-theme="${theme}"][data-mode="dark"] {
            @include apply-theme('${theme}', 'dark');
        }
    `).join('\n')}
`

const allThemesResult = sass.compileString(allThemesSassContent, {
    loadPaths: [path.resolve(__dirname)],
    style: 'compressed'
})

fs.writeFileSync(path.join(outputDir, 'rte-themes.css'), allThemesResult.css);