### Installation

```bash
npm install @design-system-rte/react
```

`@design-system-rte/core` is installed automatically as a dependency. See the [root README](https://github.com/rte-france/design-system-rte#quick-install) for other packages.

### Setup

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

   @include theme-selector("bleu_iceberg", "light");
   ```

3. **Add HTML Selector:**

   Add an HTML selector to define the context for applying component styles.

   ```html
   <body data-theme="bleu_iceberg" data-mode="light">
     ...
   </body>
   ```

   `data-theme` is required on each themed scope. When `data-mode` is omitted, the mode is inherited from an ancestor carrying `data-mode`. If no ancestor defines a mode, `light` is used as the default.

4. **Use Components:**

   Implement the different components as documented in the [Storybook](https://opensource.rte-france.com/design-system-rte/?path=/docs/react_composants-button--docs) provided with the library.

### Routing / SPA navigation

By default, navigable components (`Link`, `NavItem`, `NavMenu`, `SideNav`, `Header`, `Breadcrumbs`) render a native `<a>` tag, which triggers a full page reload. To enable client-side (SPA) navigation with the router of your choice you can inject its `Link` component instead of the native `<a>` tag. This mechanism has no dependency on any routing library: you provide the component, the design system just renders it.

You can do it using **via `NavigationProvider`** configured once at the root of your app.

```tsx
import { NavigationProvider } from "@design-system-rte/react";
import { Link as RouterLink } from "react-router-dom"; // or any other router library

<NavigationProvider linkComponent={RouterLink}>
  <App />
</NavigationProvider>;
```

You can also use the `customLinkComponent` prop on the `Link` component to override the default behavior for a specific link.

```tsx
import { Link as RouterLink } from "react-router-dom"; // or any other router library
<Link to="/home" label="Home" customLinkComponent={RouterLink} />;
```

Without any configuration, all components keep rendering our native `<Link>` component — this is fully backward compatible.
