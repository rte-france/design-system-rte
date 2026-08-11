### Installation

Install the Angular package and its core peer dependency:

```bash
npm install @design-system-rte/angular @design-system-rte/core
```

See the [root README](https://github.com/rte-france/design-system-rte#quick-install) and [compatibility matrix](https://github.com/rte-france/design-system-rte/blob/main/docs/COMPATIBILITY.md) for version requirements.

### Setup

1. **Add Branding/Theme Mixin:**
   
   Include the branding/theme mixin in your main `.scss` file. This will create a style scope for the components.
   (If you don't have scss support, you can use the .css files in `@design-system-rte/core/css/rte-themes.css` and add them to your main styles file).
   ```scss
    @use "@design-system-rte/core/design-tokens/tokens/mixins" as *;

    @include theme-selector('bleu_iceberg', 'light');
   ```

2. **Add HTML Selector:**
   
   Add an HTML selector to define the context for applying component styles.
   ```html
    <body data-theme="bleu_iceberg" data-mode="light">
        <app-root/>
    </body>
    ```

    `data-theme` is required on each themed scope. When `data-mode` is omitted, the mode is inherited from an ancestor carrying `data-mode`. If no ancestor defines a mode, `light` is used as the default.

3. **Use Components:**
   
   Implement the different components as documented in the [Storybook](https://opensource.rte-france.com/design-system-rte/?path=/docs/angular_composants-button--docs) provided with the library.
