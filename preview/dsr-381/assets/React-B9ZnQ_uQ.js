import{j as e,M as r}from"./index-BPqs2MQS.js";import{useMDXComponents as i}from"./index-DL7Mpk60.js";/* empty css                   *//* empty css               */import"./iframe-C50lM_3Z.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Dif16jpf.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function t(n){const s={code:"code",pre:"pre",strong:"strong",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Design system/Get Started - Kit de démarrage/React"}),`
`,e.jsx("h1",{id:"getting-started",style:{fontFamily:"Nunito"},children:" Démarrage avec React "}),`
`,e.jsx("h2",{id:"introduction",style:{border:"none",fontFamily:"Nunito"},children:" Introduction "}),`
`,e.jsxs("p",{children:[" Le ",e.jsx(s.strong,{children:"Design System RTE"})," est une bibliothèque de composants ",e.jsx(s.strong,{children:"React"})," qui permet d'unifier le comportement et l'apparence des interfaces utilisateur à travers les équipes de ",e.jsx(s.strong,{children:"RTE France"}),". "]}),`
`,e.jsxs("p",{children:[" Il est organisé en monorepo avec trois packages principaux. Le package ",e.jsx("code",{children:"@design-system-rte/core"})," contient les design tokens et interfaces partagées, tandis que ",e.jsx("code",{children:"@design-system-rte/react"})," fournit les composants ",e.jsx(s.strong,{children:"React"})," spécifiques. Cette architecture permet une maintenance centralisée tout en offrant des implémentations optimisées pour chaque framework. "]}),`
`,e.jsx("h2",{id:"installation",style:{border:"none",fontFamily:"Nunito"},children:" Installation "}),`
`,e.jsxs("p",{children:[" Pour installer le design system dans votre projet ",e.jsx(s.strong,{children:"React"}),", exécutez la commande suivante : "]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-bash",children:`npm install @design-system-rte/react
`})}),`
`,e.jsxs("p",{children:[" Le package ",e.jsx("code",{children:"@design-system-rte/core"})," sera automatiquement installé comme dépendance pour accéder directement aux design tokens et interfaces ",e.jsx(s.strong,{children:"TypeScript"}),". "]}),`
`,e.jsx("h3",{id:"prerequisites",style:{border:"none",fontFamily:"Nunito"},children:" Prérequis et Peer Dependencies "}),`
`,e.jsxs("p",{children:[" Ce guide suppose que vous avez déjà une application ",e.jsx(s.strong,{children:"React"})," existante. La version de ",e.jsx(s.strong,{children:"React"})," doit être ",e.jsx(s.strong,{children:"18"})," ou supérieure.",e.jsx("br",{}),"Le package utilise aussi les peer dependencies suivantes (qui devraient déjà être présentes dans votre projet) :"]}),`
`,e.jsx("ul",{children:e.jsxs("li",{children:[" ",e.jsx("code",{children:"react : >=18.0.0 "})]})}),`
`,e.jsx("h2",{id:"setup-configuration",style:{border:"none",fontFamily:"Nunito"},children:" Configuration initiale "}),`
`,e.jsx("h3",{id:"add-base-styles",style:{fontFamily:"Nunito"},children:" Ajouter les styles de base du Design System "}),`
`,e.jsxs("p",{children:[" Importez les styles de base du design system dans votre point d'entrée principal (généralement ",e.jsx("code",{children:"main.tsx"})," ou ",e.jsx("code",{children:"index.tsx"}),"). "]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import "@design-system-rte/react/dist/style.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
`})}),`
`,e.jsx("h3",{id:"add-theme-mixin",style:{fontFamily:"Nunito"},children:" Ajouter le mixin Branding/Theme "}),`
`,e.jsxs("p",{children:[" Incluez le mixin ",e.jsx(s.strong,{children:"branding/theme"})," dans votre fichier ",e.jsx(s.code,{children:".scss"})," principal (généralement ",e.jsx(s.code,{children:"styles.scss"})," ou ",e.jsx(s.code,{children:"index.scss"})," à la racine de votre projet). Cela créera une portée de style pour les composants. "]}),`
`,e.jsxs("p",{className:"light-gray",children:[" (Si vous n'avez pas de support scss, vous pouvez utiliser les fichiers .css dans ",e.jsx("code",{children:"@design-system-rte/core/css/rte-themes.css"})," et les ajouter à votre fichier de styles principal). "]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-scss",children:`@use "@design-system-rte/core/design-tokens/tokens/mixins" as *;

@include theme-selector('bleu_iceberg', 'light');
`})}),`
`,e.jsx("p",{children:" Les thèmes disponibles sont : "}),`
`,e.jsxs("ul",{children:[e.jsxs("li",{children:[" ",e.jsx("code",{children:"bleu_iceberg"})," (thème par défaut) "]}),e.jsxs("li",{children:[" ",e.jsx("code",{children:"vert_foret"})," "]}),e.jsxs("li",{children:[" ",e.jsx("code",{children:"violet"})," "]})]}),`
`,e.jsxs("p",{children:[" Chaque thème supporte les modes ",e.jsx("code",{children:"light"})," et ",e.jsx("code",{children:"dark"}),". "]}),`
`,e.jsx("h3",{id:"add-html-selector",style:{fontFamily:"Nunito"},children:" Ajouter les sélecteurs HTML "}),`
`,e.jsxs("p",{children:[" Ajoutez les attributs ",e.jsx("code",{children:"data-theme"})," et ",e.jsx("code",{children:"data-mode"})," sur l'élément ",e.jsx("code",{children:"<body>"})," de votre application pour définir le contexte d'application des styles des composants. "]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<body data-theme="bleu_iceberg" data-mode="light">
  <div id="root"></div>
</body>
`})}),`
`,e.jsx("p",{children:" Ces attributs peuvent être modifiés dynamiquement pour changer de thème ou de mode (clair/sombre) à l'exécution. "}),`
`,e.jsx("h2",{id:"quick-example",style:{border:"none",fontFamily:"Nunito"},children:" Exemple d'utilisation "}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { Button } from "@design-system-rte/react";

function Example() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <Button 
      label="Click me"
      variant="primary"
      size="m"
      onClick={handleClick}
    />
  );
}
`})}),`
`,e.jsxs("p",{children:[" Vous pouvez lire le reste de la documentation du composant ",e.jsx(s.strong,{children:"Button"})," sur le ",e.jsx("a",{href:"https://opensource.rte-france.com/design-system-rte/?path=/docs/react_button--docs",children:"Storybook du composant"}),"."]}),`
`,e.jsx("h2",{id:"theming-customization",style:{border:"none",fontFamily:"Nunito"},children:" Thématisation et personnalisation "}),`
`,e.jsx("h3",{id:"themes-available",style:{fontFamily:"Nunito"},children:" Thèmes disponibles "}),`
`,e.jsx("p",{children:" Le design system RTE propose trois thèmes de marque : "}),`
`,e.jsxs("ul",{children:[e.jsxs("li",{children:[" ",e.jsx("code",{children:"bleu_iceberg"})," : Thème par défaut avec une palette de bleus "]}),e.jsxs("li",{children:[" ",e.jsx("code",{children:"vert_foret"})," : Thème avec une palette de verts "]}),e.jsxs("li",{children:[" ",e.jsx("code",{children:"violet"})," : Thème avec une palette de violets "]})]}),`
`,e.jsxs("p",{children:[" Chaque thème supporte les modes clair (",e.jsx("code",{children:"light"}),") et sombre (",e.jsx("code",{children:"dark"}),"). "]}),`
`,e.jsx("h3",{id:"switch-theme",style:{fontFamily:"Nunito"},children:" Changer de thème "}),`
`,e.jsxs("p",{children:[" Pour changer de thème, modifiez les attributs ",e.jsx("code",{children:"data-theme"})," et ",e.jsx("code",{children:"data-mode"})," sur l'élément qui héberge le thème."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<!-- Thème bleu_iceberg en mode clair -->
<body data-theme="bleu_iceberg" data-mode="light">

<!-- Thème vert_foret en mode sombre -->
<body data-theme="vert_foret" data-mode="dark">
`})}),`
`,e.jsx("p",{children:" Vous pouvez également changer ces attributs dynamiquement pour changer le thème ou mode pendant l'exécution de l'application. "}),`
`,e.jsx("h3",{id:"component-variants",style:{fontFamily:"Nunito"},children:" Variantes de composants "}),`
`,e.jsxs("p",{children:[" La plupart des composants du design system proposent plusieurs variantes et options de personnalisation. Consultez la documentation de chaque composant dans le ",e.jsx("a",{href:"https://opensource.rte-france.com/design-system-rte/?path=/docs/react_button--docs",children:"Storybook"})," pour découvrir toutes les options disponibles. "]}),`
`,e.jsx("h2",{id:"whats-next",style:{border:"none",fontFamily:"Nunito"},children:" Prochaines étapes "}),`
`,e.jsx("p",{children:" Maintenant que vous avez configuré le design system dans votre projet, voici quelques ressources pour aller plus loin : "}),`
`,e.jsxs("ul",{children:[e.jsxs("li",{children:[" ",e.jsx("a",{href:"https://opensource.rte-france.com/design-system-rte/?path=/docs/react_button--docs",children:"Documentation des composants React"})," : Explorez tous les composants disponibles dans le Storybook "]}),e.jsxs("li",{children:[" ",e.jsx("a",{href:"https://opensource.rte-france.com/design-system-rte/?path=/docs/design-system-get-started-kit-de-migration-react--docs",children:"Guide de migration"})," : Si vous utilisez Tailwind déjà dans votre projet "]})]}),`
`,e.jsx("h2",{id:"changelogs",style:{border:"none",fontFamily:"Nunito"},children:" Changelogs "}),`
`,e.jsxs("p",{children:[" Le design system utilise ",e.jsx("a",{href:"https://github.com/changesets/changesets",children:"Changesets"})," pour la gestion des versions dans le monorepo. Les mises à jour majeures seront documentées dans le ",e.jsx("a",{href:"https://github.com/rte-france/design-system-rte/blob/main/packages/react/CHANGELOG.md",children:"CHANGELOG de ce package."})," "]}),`
`,e.jsxs("p",{children:[" Pour lire les changelogs de tous les packages, consultez le ",e.jsx("a",{href:"https://github.com/rte-france/design-system-rte/blob/main/CHANGELOG.md",children:"CHANGELOG principal"}),". "]})]})}function j(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{j as default};
