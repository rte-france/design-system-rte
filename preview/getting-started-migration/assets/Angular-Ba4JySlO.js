import{j as e,M as r}from"./index-BllKhgw0.js";import{useMDXComponents as t}from"./index-DL7Mpk60.js";/* empty css                   *//* empty css               */import"./iframe-CHJ7bY7O.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Dif16jpf.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function i(s){const n={code:"code",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Démarrage/Angular"}),`
`,e.jsx("h1",{id:"angular-getting-started",style:{fontFamily:"Nunito"},children:" Démarrage avec Angular "}),`
`,e.jsx("h2",{id:"introduction",style:{border:"none",fontFamily:"Nunito"},children:" Introduction "}),`
`,e.jsx("p",{children:" Le Design System RTE est une bibliothèque de composants Angular et React qui permet d'unifier le comportement et l'apparence des interfaces utilisateur à travers les équipes de RTE France. "}),`
`,e.jsx("p",{children:" Cette bibliothèque est organisée en trois packages principaux : "}),`
`,e.jsxs("ul",{children:[e.jsxs("li",{children:[" ",e.jsx("code",{children:"@design-system-rte/core"})," : Package partagé contenant les design tokens, interfaces TypeScript et utilitaires communs "]}),e.jsxs("li",{children:[" ",e.jsx("code",{children:"@design-system-rte/angular"})," : Implémentation Angular des composants du design system "]}),e.jsxs("li",{children:[" ",e.jsx("code",{children:"@design-system-rte/react"})," : Implémentation React des composants du design system "]})]}),`
`,e.jsxs("p",{children:[" Ce guide cible la version ",e.jsx("code",{children:"0.16.0"})," du package Angular et vous accompagne dans l'intégration du design system dans votre application Angular existante ou nouvelle. "]}),`
`,e.jsx("h2",{id:"prerequisites",style:{border:"none",fontFamily:"Nunito"},children:" Prérequis "}),`
`,e.jsx("p",{children:" Avant de commencer, assurez-vous d'avoir les outils suivants installés : "}),`
`,e.jsxs("ul",{children:[e.jsxs("li",{children:[" ",e.jsx("strong",{children:"Node.js"})," : version 14 ou supérieure (recommandé : version 18 ou supérieure) "]}),e.jsxs("li",{children:[" ",e.jsx("strong",{children:"npm"})," ou ",e.jsx("strong",{children:"yarn"})," : gestionnaire de packages "]}),e.jsxs("li",{children:[" ",e.jsx("strong",{children:"Angular"})," : version 18.2.14 ou supérieure "]}),e.jsxs("li",{children:[" ",e.jsx("strong",{children:"TypeScript"})," : version 5.4 ou supérieure "]}),e.jsxs("li",{children:[" ",e.jsx("strong",{children:"Sass"})," : version 1.85.1 ou supérieure (pour la compilation des styles SCSS) "]})]}),`
`,e.jsx("p",{children:" Ce guide suppose que vous avez déjà une application Angular existante. Si ce n'est pas le cas, vous pouvez créer une nouvelle application avec Angular CLI : "}),`
`,e.jsx("pre",{children:e.jsx("code",{children:"ng new mon-application"})}),`
`,e.jsxs("p",{children:[" Pour plus d'informations sur la création d'une application Angular, consultez la ",e.jsx("a",{href:"https://angular.io/cli/new",children:"documentation officielle d'Angular CLI"}),". "]}),`
`,e.jsx("h2",{id:"installation",style:{border:"none",fontFamily:"Nunito"},children:" Installation "}),`
`,e.jsx("p",{children:" Pour installer le design system dans votre projet Angular, exécutez la commande suivante : "}),`
`,e.jsx("pre",{children:e.jsx("code",{children:"npm install @design-system-rte/angular @design-system-rte/core"})}),`
`,e.jsx("p",{children:" Ou avec yarn : "}),`
`,e.jsx("pre",{children:e.jsx("code",{children:"yarn add @design-system-rte/angular @design-system-rte/core"})}),`
`,e.jsxs("p",{children:[" Le package ",e.jsx("code",{children:"@design-system-rte/core"})," sera automatiquement installé comme dépendance, mais il est recommandé de l'installer explicitement pour accéder directement aux design tokens et interfaces TypeScript. "]}),`
`,e.jsx("h3",{id:"peer-dependencies",style:{fontFamily:"Nunito"},children:" Dépendances peer "}),`
`,e.jsx("p",{children:" Le package Angular nécessite les dépendances suivantes (qui devraient déjà être présentes dans votre projet Angular) : "}),`
`,e.jsxs("ul",{children:[e.jsxs("li",{children:[" ",e.jsx("code",{children:"@angular/common"})," : ^18.2.14 "]}),e.jsxs("li",{children:[" ",e.jsx("code",{children:"@angular/core"})," : ^18.2.14 "]}),e.jsxs("li",{children:[" ",e.jsx("code",{children:"sass"})," : ^1.85.1 "]})]}),`
`,e.jsx("h3",{id:"monorepo-note",style:{fontFamily:"Nunito"},children:" Note sur le monorepo "}),`
`,e.jsxs("p",{children:[" Le design system RTE est organisé en monorepo avec trois packages principaux. Le package ",e.jsx("code",{children:"@design-system-rte/core"})," contient les design tokens et interfaces partagées, tandis que ",e.jsx("code",{children:"@design-system-rte/angular"})," fournit les composants Angular spécifiques. Cette architecture permet une maintenance centralisée tout en offrant des implémentations optimisées pour chaque framework. "]}),`
`,e.jsx("h2",{id:"setup-configuration",style:{border:"none",fontFamily:"Nunito"},children:" Configuration "}),`
`,e.jsx("h3",{id:"angular-import-components",style:{fontFamily:"Nunito"},children:" Importer les composants "}),`
`,e.jsx("p",{children:" Le design system RTE utilise des composants standalone d'Angular. Vous pouvez importer uniquement les composants dont vous avez besoin dans vos composants ou modules. "}),`
`,e.jsx("p",{children:" Exemple d'import dans un composant standalone : "}),`
`,e.jsx("pre",{children:e.jsx("code",{children:`import { Component } from '@angular/core';
import { ButtonComponent } from '@design-system-rte/angular';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [ButtonComponent],
  template: \`
    <button rteButton rteButtonVariant="primary">Cliquez-moi</button>
  \`
})
export class ExampleComponent {
}`})}),`
`,e.jsx("p",{children:" Ou dans un module Angular traditionnel : "}),`
`,e.jsx("pre",{children:e.jsx("code",{children:`import { NgModule } from '@angular/core';
import { ButtonComponent } from '@design-system-rte/angular';

@NgModule({
  imports: [ButtonComponent],
  // ...
})
export class AppModule { }`})}),`
`,e.jsx("h3",{id:"angular-add-theme-mixin",style:{fontFamily:"Nunito"},children:" Ajouter le mixin Branding/Theme "}),`
`,e.jsxs("p",{children:[" Incluez le mixin branding/theme dans votre fichier ",e.jsx(n.code,{children:".scss"})," principal (généralement ",e.jsx(n.code,{children:"styles.scss"})," à la racine de votre projet). Cela créera une portée de style pour les composants. "]}),`
`,e.jsx("pre",{children:e.jsx("code",{children:`@use "@design-system-rte/core/design-tokens/tokens/mixins" as *;

@include theme-selector('bleu_iceberg', 'light');`})}),`
`,e.jsx("p",{children:" Les thèmes disponibles sont : "}),`
`,e.jsxs("ul",{children:[e.jsxs("li",{children:[" ",e.jsx("code",{children:"bleu_iceberg"})," (thème par défaut) "]}),e.jsxs("li",{children:[" ",e.jsx("code",{children:"vert_foret"})," "]}),e.jsxs("li",{children:[" ",e.jsx("code",{children:"violet"})," "]})]}),`
`,e.jsxs("p",{children:[" Chaque thème supporte les modes ",e.jsx("code",{children:"light"})," et ",e.jsx("code",{children:"dark"}),". "]}),`
`,e.jsx("h3",{id:"angular-add-html-selector",style:{fontFamily:"Nunito"},children:" Ajouter les sélecteurs HTML "}),`
`,e.jsxs("p",{children:[" Ajoutez les attributs ",e.jsx("code",{children:"data-theme"})," et ",e.jsx("code",{children:"data-mode"})," sur l'élément ",e.jsx("code",{children:"<body>"})," de votre application pour définir le contexte d'application des styles des composants. "]}),`
`,e.jsx("pre",{children:e.jsx("code",{children:`<body data-theme="bleu_iceberg" data-mode="light">
  <app-root></app-root>
</body>`})}),`
`,e.jsx("p",{children:" Ces attributs peuvent être modifiés dynamiquement pour changer de thème ou de mode (clair/sombre) à l'exécution. "}),`
`,e.jsx("h3",{id:"angular-verify-setup",style:{fontFamily:"Nunito"},children:" Vérifier l'installation "}),`
`,e.jsx("p",{children:" Pour vérifier que l'installation est correcte, démarrez votre application : "}),`
`,e.jsx("pre",{children:e.jsx("code",{children:"ng serve"})}),`
`,e.jsx("p",{children:" Créez un composant de test avec un bouton du design system pour confirmer que tout fonctionne correctement. "}),`
`,e.jsx("h3",{id:"angular-icons-setup",style:{fontFamily:"Nunito"},children:" Configuration des icônes "}),`
`,e.jsxs("p",{children:[" Pour utiliser le composant Icon (",e.jsx("code",{children:"rte-icon"}),"), vous devez copier les fichiers ",e.jsx(n.code,{children:".svg"})," depuis le package core vers votre application. "]}),`
`,e.jsxs("p",{children:[" Copiez les fichiers depuis ",e.jsx("code",{children:"node_modules/@design-system-rte/core/assets/icons"})," vers le répertoire ",e.jsx("code",{children:"/assets/icons"})," de votre application. "]}),`
`,e.jsxs("p",{children:[" Vous pouvez automatiser cette étape avec un script dans votre ",e.jsx("code",{children:"package.json"})," : "]}),`
`,e.jsx("pre",{children:e.jsx("code",{children:`"scripts": {
  "copy-icons": "cp -R node_modules/@design-system-rte/core/assets/icons src/assets/icons"
}`})}),`
`,e.jsx("h2",{id:"quick-example",style:{border:"none",fontFamily:"Nunito"},children:" Exemple rapide "}),`
`,e.jsx("p",{children:" Voici un exemple minimal d'utilisation d'un composant du design system dans votre application Angular : "}),`
`,e.jsx("pre",{children:e.jsx("code",{children:`import { Component } from '@angular/core';
import { ButtonComponent } from '@design-system-rte/angular';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [ButtonComponent],
  template: \`
    <button 
      rteButton 
      [rteButtonVariant]="'primary'"
      [rteButtonSize]="'m'"
      (click)="handleClick()"
    >
      Cliquez-moi
    </button>
  \`
})
export class ExampleComponent {
  handleClick() {
    console.log('Bouton cliqué !');
  }
}`})}),`
`,e.jsxs("p",{children:[" Les variantes disponibles pour les boutons sont : ",e.jsx("code",{children:"primary"}),", ",e.jsx("code",{children:"secondary"}),", ",e.jsx("code",{children:"text"}),", ",e.jsx("code",{children:"transparent"}),", ",e.jsx("code",{children:"danger"}),", ",e.jsx("code",{children:"neutral"}),", et ",e.jsx("code",{children:"reverse"}),". "]}),`
`,e.jsxs("p",{children:[" Les tailles disponibles sont : ",e.jsx("code",{children:"s"})," (petit), ",e.jsx("code",{children:"m"})," (moyen), et ",e.jsx("code",{children:"l"})," (grand). "]}),`
`,e.jsx("h2",{id:"theming-customization",style:{border:"none",fontFamily:"Nunito"},children:" Thématisation et personnalisation "}),`
`,e.jsx("h3",{id:"themes-available",style:{fontFamily:"Nunito"},children:" Thèmes disponibles "}),`
`,e.jsx("p",{children:" Le design system RTE propose trois thèmes de marque : "}),`
`,e.jsxs("ul",{children:[e.jsxs("li",{children:[" ",e.jsx("code",{children:"bleu_iceberg"})," : Thème par défaut avec une palette de bleus "]}),e.jsxs("li",{children:[" ",e.jsx("code",{children:"vert_foret"})," : Thème avec une palette de verts "]}),e.jsxs("li",{children:[" ",e.jsx("code",{children:"violet"})," : Thème avec une palette de violets "]})]}),`
`,e.jsxs("p",{children:[" Chaque thème supporte les modes clair (",e.jsx("code",{children:"light"}),") et sombre (",e.jsx("code",{children:"dark"}),"). "]}),`
`,e.jsx("h3",{id:"switch-theme",style:{fontFamily:"Nunito"},children:" Changer de thème "}),`
`,e.jsxs("p",{children:[" Pour changer de thème, modifiez les attributs ",e.jsx("code",{children:"data-theme"})," et ",e.jsx("code",{children:"data-mode"})," sur l'élément ",e.jsx("code",{children:"<body>"})," : "]}),`
`,e.jsx("pre",{children:e.jsx("code",{children:`<!-- Thème bleu_iceberg en mode clair -->
<body data-theme="bleu_iceberg" data-mode="light">

<!-- Thème vert_foret en mode sombre -->
<body data-theme="vert_foret" data-mode="dark">`})}),`
`,e.jsx("p",{children:" Vous pouvez également changer ces attributs dynamiquement via JavaScript ou TypeScript : "}),`
`,e.jsx("pre",{children:e.jsx("code",{children:`// Changer de thème
document.body.setAttribute('data-theme', 'violet');
document.body.setAttribute('data-mode', 'dark');`})}),`
`,e.jsx("h3",{id:"custom-theme-override",style:{fontFamily:"Nunito"},children:" Personnaliser les couleurs et variables "}),`
`,e.jsx("p",{children:" Pour personnaliser les couleurs de marque, la typographie ou les espacements, vous pouvez créer votre propre fichier SCSS qui étend ou surcharge les design tokens. "}),`
`,e.jsxs("p",{children:[" Exemple de personnalisation dans un fichier ",e.jsx("code",{children:"custom-theme.scss"})," : "]}),`
`,e.jsx("pre",{children:e.jsx("code",{children:`@use "@design-system-rte/core/design-tokens/tokens/mixins" as *;

// Utiliser un thème existant comme base
@include theme-selector('bleu_iceberg', 'light');

// Surcharger des variables spécifiques si nécessaire
// (consultez la documentation des design tokens pour les variables disponibles)`})}),`
`,e.jsxs("p",{children:[" Pour une personnalisation avancée, consultez la documentation des ",e.jsx("a",{href:"https://opensource.rte-france.com/design-system-rte/?path=/docs/design-system-couleurs--docs",children:"design tokens"})," et des ",e.jsx("a",{href:"https://opensource.rte-france.com/design-system-rte/?path=/docs/design-system-typographies--docs",children:"tokens de typographie"}),". "]}),`
`,e.jsx("h3",{id:"component-variants",style:{fontFamily:"Nunito"},children:" Variantes de composants "}),`
`,e.jsxs("p",{children:[" La plupart des composants du design system proposent plusieurs variantes et options de personnalisation. Consultez la documentation de chaque composant dans le ",e.jsx("a",{href:"https://opensource.rte-france.com/design-system-rte/?path=/docs/angular_button--docs",children:"Storybook"})," pour découvrir toutes les options disponibles. "]}),`
`,e.jsx("h2",{id:"best-practices",style:{border:"none",fontFamily:"Nunito"},children:" Bonnes pratiques et configuration globale "}),`
`,e.jsx("h3",{id:"tree-shaking",style:{fontFamily:"Nunito"},children:" Tree-shaking et import sélectif "}),`
`,e.jsx("p",{children:" Le design system RTE est optimisé pour le tree-shaking. Importez uniquement les composants dont vous avez besoin pour réduire la taille de votre bundle final. "}),`
`,e.jsx("pre",{children:e.jsx("code",{children:`// ✅ Bon : import sélectif
import { ButtonComponent } from '@design-system-rte/angular';

// ❌ Éviter : import de tout le package (si disponible)
// import * from '@design-system-rte/angular';`})}),`
`,e.jsx("h3",{id:"accessibility",style:{fontFamily:"Nunito"},children:" Accessibilité "}),`
`,e.jsx("p",{children:" Tous les composants du design system RTE sont conçus pour respecter les standards d'accessibilité (RGAA niveau AA). Les composants incluent : "}),`
`,e.jsxs("ul",{children:[e.jsx("li",{children:" Navigation au clavier (Tab, Entrée, Espace) "}),e.jsx("li",{children:" Indicateurs de focus visibles "}),e.jsx("li",{children:" Support des lecteurs d'écran avec les attributs ARIA appropriés "}),e.jsx("li",{children:" Contraste de couleurs conforme aux standards WCAG "})]}),`
`,e.jsxs("p",{children:[" Consultez la ",e.jsx("a",{href:"https://opensource.rte-france.com/design-system-rte/?path=/docs/design-system-accessibilité--docs",children:"documentation sur l'accessibilité"})," pour plus d'informations. "]}),`
`,e.jsx("h3",{id:"responsive-meta",style:{fontFamily:"Nunito"},children:" Meta viewport "}),`
`,e.jsx("p",{children:" Assurez-vous que votre application inclut la balise meta viewport pour un rendu correct sur les appareils mobiles : "}),`
`,e.jsx("pre",{children:e.jsx("code",{children:'<meta name="viewport" content="width=device-width, initial-scale=1">'})}),`
`,e.jsx("h3",{id:"fonts",style:{fontFamily:"Nunito"},children:" Polices de caractères "}),`
`,e.jsxs("p",{children:[" Le design system RTE utilise la police ",e.jsx("strong",{children:"Nunito"})," comme police par défaut. Les fichiers de police sont inclus dans le package ",e.jsx("code",{children:"@design-system-rte/core"}),". "]}),`
`,e.jsx("p",{children:" Pour utiliser les polices, vous pouvez les importer dans votre fichier SCSS principal : "}),`
`,e.jsx("pre",{children:e.jsx("code",{children:`@font-face {
  font-family: 'Nunito';
  src: url('~@design-system-rte/core/assets/fonts/Nunito-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Nunito';
  src: url('~@design-system-rte/core/assets/fonts/Nunito-SemiBold.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Nunito';
  src: url('~@design-system-rte/core/assets/fonts/Nunito-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
}`})}),`
`,e.jsx("p",{children:" Ou utilisez les polices via un CDN ou votre propre système de gestion de polices. "}),`
`,e.jsx("h3",{id:"project-structure",style:{fontFamily:"Nunito"},children:" Structure de projet recommandée "}),`
`,e.jsx("p",{children:" Pour une meilleure organisation, nous recommandons la structure suivante : "}),`
`,e.jsxs("ul",{children:[e.jsxs("li",{children:[" Conservez les fichiers de thème personnalisés dans un dossier ",e.jsx("code",{children:"styles/themes/"})," "]}),e.jsx("li",{children:" Organisez vos composants qui utilisent le design system dans des modules fonctionnels "}),e.jsxs("li",{children:[" Utilisez le package ",e.jsx("code",{children:"@design-system-rte/core"})," pour accéder aux interfaces TypeScript et utilitaires partagés "]})]}),`
`,e.jsx("h2",{id:"whats-next",style:{border:"none",fontFamily:"Nunito"},children:" Prochaines étapes "}),`
`,e.jsx("p",{children:" Maintenant que vous avez configuré le design system dans votre projet, voici quelques ressources pour aller plus loin : "}),`
`,e.jsxs("ul",{children:[e.jsxs("li",{children:[" ",e.jsx("a",{href:"https://opensource.rte-france.com/design-system-rte/?path=/docs/angular_button--docs",children:"Documentation des composants Angular"})," : Explorez tous les composants disponibles dans le Storybook "]}),e.jsxs("li",{children:[" ",e.jsx("a",{href:"https://opensource.rte-france.com/design-system-rte/?path=/docs/design-system-couleurs--docs",children:"Design tokens"})," : Découvrez les tokens de couleur, typographie et espacement "]}),e.jsxs("li",{children:[" ",e.jsx("a",{href:"https://opensource.rte-france.com/design-system-rte/?path=/docs/bascule-angular--docs",children:"Guide de migration"})," : Si vous migrez depuis une version antérieure "]}),e.jsxs("li",{children:[" ",e.jsx("a",{href:"https://opensource.rte-france.com/design-system-rte/?path=/docs/design-system-accessibilité--docs",children:"Accessibilité"})," : En savoir plus sur les pratiques d'accessibilité "]}),e.jsxs("li",{children:[" ",e.jsx("a",{href:"https://opensource.rte-france.com/design-system-rte/?path=/docs/design-system-grids--docs",children:"Grilles et mise en page"})," : Utilisez le système de grille du design system "]})]}),`
`,e.jsx("h2",{id:"versioning-compatibility",style:{border:"none",fontFamily:"Nunito"},children:" Versions et compatibilité "}),`
`,e.jsx("h3",{id:"angular-versions",style:{fontFamily:"Nunito"},children:" Versions Angular supportées "}),`
`,e.jsxs("p",{children:[" Le package ",e.jsx("code",{children:"@design-system-rte/angular"})," version ",e.jsx("code",{children:"0.16.0"})," nécessite : "]}),`
`,e.jsxs("ul",{children:[e.jsxs("li",{children:[" ",e.jsx("strong",{children:"Angular"})," : version 18.2.14 ou supérieure "]}),e.jsxs("li",{children:[" ",e.jsx("strong",{children:"TypeScript"})," : version 5.4 ou supérieure "]})]}),`
`,e.jsx("p",{children:" Les composants utilisent les fonctionnalités modernes d'Angular, notamment les composants standalone introduits dans Angular 14+. "}),`
`,e.jsx("h3",{id:"upgrading",style:{fontFamily:"Nunito"},children:" Mise à jour "}),`
`,e.jsxs("p",{children:[" Pour mettre à jour le design system vers une nouvelle version, consultez le ",e.jsx("a",{href:"https://opensource.rte-france.com/design-system-rte/?path=/docs/bascule-angular--docs",children:"guide de migration"})," qui documente les changements entre les versions. "]}),`
`,e.jsxs("p",{children:[" Le design system utilise ",e.jsx("a",{href:"https://github.com/changesets/changesets",children:"Changesets"})," pour la gestion des versions dans le monorepo. Les mises à jour majeures seront documentées dans le CHANGELOG de chaque package. "]}),`
`,e.jsx("p",{children:" Pour vérifier les mises à jour disponibles : "}),`
`,e.jsx("pre",{children:e.jsx("code",{children:"npm outdated @design-system-rte/angular @design-system-rte/core"})})]})}function j(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{j as default};
