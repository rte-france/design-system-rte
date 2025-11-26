import{j as e,M as i}from"./index-CjD90c3p.js";import{useMDXComponents as r}from"./index-DL7Mpk60.js";/* empty css                   *//* empty css               */import"./iframe-F6kcYaMv.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Dif16jpf.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function t(s){const n={code:"code",pre:"pre",strong:"strong",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Démarrage/Angular"}),`
`,e.jsx("h1",{id:"getting-started",style:{fontFamily:"Nunito"},children:" Démarrage avec Angular "}),`
`,e.jsx("h2",{id:"introduction",style:{border:"none",fontFamily:"Nunito"},children:" Introduction "}),`
`,e.jsxs("p",{children:[" Le ",e.jsx(n.strong,{children:"Design System RTE"})," est une bibliothèque de composants ",e.jsx(n.strong,{children:"Angular"})," qui permet d'unifier le comportement et l'apparence des interfaces utilisateur à travers les équipes de ",e.jsx(n.strong,{children:"RTE France"}),". "]}),`
`,e.jsxs("p",{children:[" Il est organisé en monorepo avec trois packages principaux. Le package ",e.jsx("code",{children:"@design-system-rte/core"})," contient les design tokens et interfaces partagées, tandis que ",e.jsx("code",{children:"@design-system-rte/angular"})," fournit les composants ",e.jsx(n.strong,{children:"Angular"})," spécifiques. Cette architecture permet une maintenance centralisée tout en offrant des implémentations optimisées pour chaque framework. "]}),`
`,e.jsx("h2",{id:"installation",style:{border:"none",fontFamily:"Nunito"},children:" Installation "}),`
`,e.jsxs("p",{children:[" Pour installer le design system dans votre projet ",e.jsx(n.strong,{children:"Angular"}),", exécutez la commande suivante : "]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @design-system-rte/angular
`})}),`
`,e.jsxs("p",{children:[" Le package ",e.jsx("code",{children:"@design-system-rte/core"})," sera automatiquement installé comme dépendance pour accéder directement aux design tokens et interfaces ",e.jsx(n.strong,{children:"TypeScript"}),". "]}),`
`,e.jsx("h3",{id:"prerequisites",style:{border:"none",fontFamily:"Nunito"},children:" Prérequis et Peer Dependencies "}),`
`,e.jsxs("p",{children:[" Ce guide suppose que vous avez déjà une application ",e.jsx(n.strong,{children:"Angular"})," existante. La version d'",e.jsx(n.strong,{children:"Angular"})," doit être ",e.jsx(n.strong,{children:"18"})," ou supérieure.",e.jsx("br",{}),"Le package utilise aussi les peer dependencies suivantes (qui devraient déjà être présentes dans votre projet) :"]}),`
`,e.jsxs("ul",{children:[e.jsxs("li",{children:[" ",e.jsx("code",{children:"@angular/common : ^18.0.0 "})]}),e.jsxs("li",{children:[" ",e.jsx("code",{children:"@angular/core : ^18.0.0 "})]}),e.jsxs("li",{children:[" ",e.jsx("code",{children:"sass : ^1.85.0 "})]})]}),`
`,e.jsx("h2",{id:"setup-configuration",style:{border:"none",fontFamily:"Nunito"},children:" Configuration initiale "}),`
`,e.jsx("h3",{id:"add-theme-mixin",style:{fontFamily:"Nunito"},children:" Ajouter le mixin Branding/Theme "}),`
`,e.jsxs("p",{children:[" Incluez le mixin ",e.jsx(n.strong,{children:"branding/theme"})," dans votre fichier ",e.jsx(n.code,{children:".scss"})," principal (généralement ",e.jsx(n.code,{children:"styles.scss"})," à la racine de votre projet). Cela créera une portée de style pour les composants. "]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`@use "@design-system-rte/core/design-tokens/tokens/mixins" as *;

@include theme-selector('bleu_iceberg', 'light');
`})}),`
`,e.jsx("p",{children:" Les thèmes disponibles sont : "}),`
`,e.jsxs("ul",{children:[e.jsxs("li",{children:[" ",e.jsx("code",{children:"bleu_iceberg"})," (thème par défaut) "]}),e.jsxs("li",{children:[" ",e.jsx("code",{children:"vert_foret"})," "]}),e.jsxs("li",{children:[" ",e.jsx("code",{children:"violet"})," "]})]}),`
`,e.jsxs("p",{children:[" Chaque thème supporte les modes ",e.jsx("code",{children:"light"})," et ",e.jsx("code",{children:"dark"}),". "]}),`
`,e.jsx("h3",{id:"add-html-selector",style:{fontFamily:"Nunito"},children:" Ajouter les sélecteurs HTML "}),`
`,e.jsxs("p",{children:[" Ajoutez les attributs ",e.jsx("code",{children:"data-theme"})," et ",e.jsx("code",{children:"data-mode"})," sur l'élément ",e.jsx("code",{children:"<body>"})," de votre application pour définir le contexte d'application des styles des composants. "]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<body data-theme="bleu_iceberg" data-mode="light">
  <app-root></app-root>
</body>
`})}),`
`,e.jsx("p",{children:" Ces attributs peuvent être modifiés dynamiquement pour changer de thème ou de mode (clair/sombre) à l'exécution. "}),`
`,e.jsx("h3",{id:"icons-setup",style:{fontFamily:"Nunito"},children:" Configuration des icônes "}),`
`,e.jsxs("p",{children:[" Pour utiliser le composant Icon (",e.jsx("code",{children:"rte-icon"}),"), vous devez copier les fichiers ",e.jsx(n.code,{children:".svg"})," depuis le package core vers votre application. "]}),`
`,e.jsxs("p",{children:[" Copiez les fichiers depuis ",e.jsx("code",{children:"node_modules/@design-system-rte/core/assets/icons"})," vers le répertoire ",e.jsx("code",{children:"/assets/icons"})," de votre application. "]}),`
`,e.jsx("h2",{id:"quick-example",style:{border:"none",fontFamily:"Nunito"},children:" Exemple d'utilisation "}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { Component } from '@angular/core';
import { ButtonComponent } from '@design-system-rte/angular';

@Component({
  selector: 'app-example',
  imports: [ButtonComponent],
  template: \`
    <button 
      rteButton 
      rteButtonVariant="primary"
      rteButtonSize="m"
      (click)="handleClick()"
    >
      Click me
    </button>
  \`
})
export class ExampleComponent {
  handleClick() {
    console.log('Button clicked!');
  }
}
`})}),`
`,e.jsxs("p",{children:[" Vous pouvez lire le reste de la documentation du composant ",e.jsx(n.strong,{children:"Button"})," (",e.jsx("code",{children:"rteButton"}),") sur le ",e.jsx("a",{href:"https://opensource.rte-france.com/design-system-rte/?path=/docs/angular_button--docs",children:"Storybook du composant"}),"."]}),`
`,e.jsx("h2",{id:"theming-customization",style:{border:"none",fontFamily:"Nunito"},children:" Thématisation et personnalisation "}),`
`,e.jsx("h3",{id:"themes-available",style:{fontFamily:"Nunito"},children:" Thèmes disponibles "}),`
`,e.jsx("p",{children:" Le design system RTE propose trois thèmes de marque : "}),`
`,e.jsxs("ul",{children:[e.jsxs("li",{children:[" ",e.jsx("code",{children:"bleu_iceberg"})," : Thème par défaut avec une palette de bleus "]}),e.jsxs("li",{children:[" ",e.jsx("code",{children:"vert_foret"})," : Thème avec une palette de verts "]}),e.jsxs("li",{children:[" ",e.jsx("code",{children:"violet"})," : Thème avec une palette de violets "]})]}),`
`,e.jsxs("p",{children:[" Chaque thème supporte les modes clair (",e.jsx("code",{children:"light"}),") et sombre (",e.jsx("code",{children:"dark"}),"). "]}),`
`,e.jsx("h3",{id:"switch-theme",style:{fontFamily:"Nunito"},children:" Changer de thème "}),`
`,e.jsxs("p",{children:[" Pour changer de thème, modifiez les attributs ",e.jsx("code",{children:"data-theme"})," et ",e.jsx("code",{children:"data-mode"})," sur l'élément qui heberge le thème."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Thème bleu_iceberg en mode clair -->
<body data-theme="bleu_iceberg" data-mode="light">

<!-- Thème vert_foret en mode sombre -->
<body data-theme="vert_foret" data-mode="dark">
`})}),`
`,e.jsx("p",{children:" Vous pouvez également changer ces attributs dynamiquement pour changer le thème ou mode pendant l'exécution de l'application. "}),`
`,e.jsx("h3",{id:"component-variants",style:{fontFamily:"Nunito"},children:" Variantes de composants "}),`
`,e.jsxs("p",{children:[" La plupart des composants du design system proposent plusieurs variantes et options de personnalisation. Consultez la documentation de chaque composant dans le ",e.jsx("a",{href:"https://opensource.rte-france.com/design-system-rte/?path=/docs/angular_button--docs",children:"Storybook"})," pour découvrir toutes les options disponibles. "]}),`
`,e.jsx("h2",{id:"whats-next",style:{border:"none",fontFamily:"Nunito"},children:" Prochaines étapes "}),`
`,e.jsx("p",{children:" Maintenant que vous avez configuré le design system dans votre projet, voici quelques ressources pour aller plus loin : "}),`
`,e.jsxs("ul",{children:[e.jsxs("li",{children:[" ",e.jsx("a",{href:"https://opensource.rte-france.com/design-system-rte/?path=/docs/angular_button--docs",children:"Documentation des composants Angular"})," : Explorez tous les composants disponibles dans le Storybook "]}),e.jsxs("li",{children:[" ",e.jsx("a",{href:"https://opensource.rte-france.com/design-system-rte/?path=/docs/bascule--docs",children:"Guide de migration"})," : Si vous migrez depuis RGO-lib ou si vous utilises Angular Material déjà dans votre projet "]})]}),`
`,e.jsx("h2",{id:"changelogs",style:{border:"none",fontFamily:"Nunito"},children:" Changelogs "}),`
`,e.jsxs("p",{children:[" Le design system utilise ",e.jsx("a",{href:"https://github.com/changesets/changesets",children:"Changesets"})," pour la gestion des versions dans le monorepo. Les mises à jour majeures seront documentées dans le ",e.jsx("a",{href:"https://github.com/rte-france/design-system-rte/blob/main/packages/angular/projects/ds-rte-lib/CHANGELOG.md",children:"CHANGELOG de ce package."})," "]}),`
`,e.jsxs("p",{children:[" Pour lire les changelogs de tous les packages, consultez le ",e.jsx("a",{href:"https://github.com/rte-france/design-system-rte/blob/main/CHANGELOG.md",children:"CHANGELOG principal"}),". "]})]})}function j(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{j as default};
