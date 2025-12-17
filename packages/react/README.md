### Installation Instructions

1. **Add Design System base styles:**
    ```tsx
    import "@design-system-rte/react/style.css";

    createRoot(document.getElementById("root")!).render(
        <StrictMode>
            <App />
        </StrictMode>,
    );
    ```

2. **Add Branding/Theme Mixin:**
   
   Include the branding/theme mixin in your main `.scss` file. This will create a style scope for the components.
   (If you don't have scss support, you can use the .css files in `@design-system/core/css/rte-themes.css` and add them to your main styles file).
   ```scss
    @use "@design-system-rte/core/design-tokens/tokens/mixins" as *;

    @include theme-selector('bleu_iceberg', 'light');
   ```

3. **Add HTML Selector:**
   
   Add an HTML selector to define the context for applying component styles.
   ```html
    <body data-theme="bleu_iceberg" data-mode="light">
        ...
    </body>
   ```

4. **Use Components:**
   
   Implement the different components as documented in the [Storybook](https://opensource.rte-france.com/design-system-rte/?path=/docs/react_composants-button--docs) provided with the library.
