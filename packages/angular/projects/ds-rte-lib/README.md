### Installation Instructions

1. **Add Branding/Theme Mixin:**
   
   Include the branding/theme mixin in your main `.scss` file. This will create a style scope for the components.
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

3. **Use Components:**
   
   Implement the different components as documented in the [Storybook](https://opensource.rte-france.com/design-system-rte/?path=/docs/angular_composants-button--docs) provided with the library.

4. **Icon Component Usage:**
   
   To use the Icon Component (rte-icon), copy the `.svg` files from `node_modules/@design-system-rte/core/assets/icons` to the `/assets/icons` directory of your application.
