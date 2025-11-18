import{j as e,M as o}from"./index-C19CG4es.js";import{useMDXComponents as i}from"./index-DL7Mpk60.js";/* empty css                   *//* empty css               */import"./iframe-MgchEdug.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Dif16jpf.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function s(t){const n={code:"code",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Bascule/Angular (safe copy)"}),`
`,e.jsx("h1",{id:"angular-setup",style:{fontFamily:"Nunito"},children:" Configuration Angular "}),`
`,e.jsx("h2",{id:"angular-installation-instructions",style:{border:"none",fontFamily:"Nunito"},children:" Instructions d'installation "}),`
`,e.jsx("h3",{id:"angular-install-package",style:{fontFamily:"Nunito"},children:" Installer le package depuis npm "}),`
`,e.jsx("pre",{children:e.jsx("code",{children:"npm install @design-system-rte/angular"})}),`
`,e.jsx("h3",{id:"angular-add-branding-theme-mixin",style:{fontFamily:"Nunito"},children:" Ajouter le mixin Branding/Theme "}),`
`,e.jsxs("p",{children:[" Incluez le mixin branding/theme dans votre fichier ",e.jsx(n.code,{children:".scss"})," principal. Cela créera une portée de style pour les composants. "]}),`
`,e.jsx("pre",{children:e.jsx("code",{children:`@use "@design-system-rte/core/design-tokens/tokens/mixins" as *;

@include theme-selector('bleu_iceberg', 'light');`})}),`
`,e.jsx("h3",{id:"angular-add-html-selector",style:{fontFamily:"Nunito"},children:" Ajouter le sélecteur HTML "}),`
`,e.jsx("p",{children:" Ajoutez un sélecteur HTML pour définir le contexte d'application des styles des composants. "}),`
`,e.jsx("pre",{children:e.jsx("code",{children:`<body data-theme="bleu_iceberg" data-mode="light">
    <app-root/>
</body>`})}),`
`,e.jsx("h3",{id:"angular-use-components",style:{fontFamily:"Nunito"},children:" Utiliser les composants "}),`
`,e.jsxs("p",{children:[" Implémentez les différents composants comme documenté dans le ",e.jsx("a",{href:"https://opensource.rte-france.com/design-system-rte/?path=/docs/angular_button--docs",children:"Storybook"})," fourni avec la bibliothèque. "]}),`
`,e.jsx("h3",{id:"angular-icon-component-usage",style:{fontFamily:"Nunito"},children:" Utilisation du composant Icon "}),`
`,e.jsxs("p",{children:[" Pour utiliser le composant Icon (rte-icon), copiez les fichiers ",e.jsx(n.code,{children:".svg"})," depuis ",e.jsx(n.code,{children:"node_modules/@design-system-rte/core/assets/icons"})," vers le répertoire ",e.jsx(n.code,{children:"/assets/icons"})," de votre application. "]}),`
`,e.jsx("h3",{id:"angular-display",style:{fontFamily:"Nunito"},children:" Affichage "})]})}function j(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{j as default};
