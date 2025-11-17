import{j as e,M as r}from"./index-BllKhgw0.js";import{useMDXComponents as i}from"./index-DL7Mpk60.js";/* empty css                   *//* empty css               */import"./iframe-CHJ7bY7O.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Dif16jpf.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function n(t){const s={code:"code",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Démarrage/React"}),`
`,e.jsx("h1",{id:"react-setup",style:{fontFamily:"Nunito"},children:" Configuration React "}),`
`,e.jsx("h2",{id:"react-installation-instructions",style:{border:"none",fontFamily:"Nunito"},children:" Instructions d'installation "}),`
`,e.jsx("h3",{id:"react-install-package",style:{fontFamily:"Nunito"},children:" Installer le package depuis npm "}),`
`,e.jsx("pre",{children:e.jsx("code",{children:"npm install @design-system-rte/react"})}),`
`,e.jsx("h3",{id:"react-add-base-styles",style:{fontFamily:"Nunito"},children:" Ajouter les styles de base du Design System "}),`
`,e.jsx("pre",{children:e.jsx("code",{children:`import "@design-system-rte/react/dist/style.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);`})}),`
`,e.jsx("h3",{id:"react-add-branding-theme-mixin",style:{fontFamily:"Nunito"},children:" Ajouter le mixin Branding/Theme "}),`
`,e.jsxs("p",{children:[" Incluez le mixin branding/theme dans votre fichier ",e.jsx(s.code,{children:".scss"})," principal. Cela créera une portée de style pour les composants. "]}),`
`,e.jsxs("p",{className:"light-gray",children:[" (Si vous n'avez pas de support scss, vous pouvez utiliser les fichiers .css dans ",e.jsx(s.code,{children:"@design-system/core/css/rte-themes.css"})," et les ajouter à votre fichier de styles principal). "]}),`
`,e.jsx("pre",{children:e.jsx("code",{children:`@use "@design-system-rte/core/design-tokens/tokens/mixins" as *;

@include theme-selector('bleu_iceberg', 'light');`})}),`
`,e.jsx("h3",{id:"react-add-html-selector",style:{fontFamily:"Nunito"},children:" Ajouter le sélecteur HTML "}),`
`,e.jsx("p",{children:" Ajoutez un sélecteur HTML pour définir le contexte d'application des styles des composants. "}),`
`,e.jsx("pre",{children:e.jsx("code",{children:`<body data-theme="bleu_iceberg" data-mode="light">
    ...
</body>`})}),`
`,e.jsx("h3",{id:"react-use-components",style:{fontFamily:"Nunito"},children:" Utiliser les composants "}),`
`,e.jsxs("p",{children:[" Implémentez les différents composants comme documenté dans le ",e.jsx("a",{href:"https://opensource.rte-france.com/design-system-rte/?path=/docs/react_button--docs",children:"Storybook"})," fourni avec la bibliothèque. "]})]})}function j(t={}){const{wrapper:s}={...i(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(n,{...t})}):n(t)}export{j as default};
