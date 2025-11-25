import{j as e,M as r}from"./index-BKCtmks0.js";import{useMDXComponents as s}from"./index-DL7Mpk60.js";/* empty css                   *//* empty css               */import"./iframe-Bo4Yv7z5.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Dif16jpf.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function i(t){const n={code:"code",pre:"pre",strong:"strong",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Bascule/Angular"}),`
`,e.jsx("h1",{id:"migration-angular",style:{fontFamily:"Nunito"},children:" Migration depuis Angular Material "}),`
`,e.jsx("h2",{id:"introduction",style:{border:"none",fontFamily:"Nunito"},children:" Introduction "}),`
`,e.jsxs("p",{children:[" Ce guide compare l'architecture et les conventions de nommage d'",e.jsx(n.strong,{children:"Angular Material"})," avec celles du ",e.jsx(n.strong,{children:"Design System RTE"}),". Si vous migrez depuis Angular Material, cette documentation vous aidera à comprendre les différences fondamentales entre les deux systèmes. "]}),`
`,e.jsx("h2",{id:"architectural-differences",style:{border:"none",fontFamily:"Nunito"},children:" Différences architecturales "}),`
`,e.jsx("h3",{id:"component-model",style:{fontFamily:"Nunito"},children:" Modèle de composants "}),`
`,e.jsxs("p",{children:[" ",e.jsx(n.strong,{children:"Angular Material"})," utilise principalement des ",e.jsx(n.strong,{children:"directives"})," appliquées sur des éléments HTML natifs, tandis que le ",e.jsx(n.strong,{children:"Design System RTE"})," utilise des ",e.jsx(n.strong,{children:"composants standalone"})," et des ",e.jsx(n.strong,{children:"directives"})," avec leurs propres sélecteurs. "]}),`
`,e.jsx("h4",{id:"angular-material-approach",style:{fontFamily:"Nunito"},children:" Approche Angular Material "}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<button mat-button>Click me</button>
<input matInput placeholder="Nom">
<mat-checkbox>Accepter</mat-checkbox>
`})}),`
`,e.jsx("h4",{id:"rte-design-system-approach",style:{fontFamily:"Nunito"},children:" Approche Design System RTE "}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<button rteButton rteButtonVariant="primary">Click me</button>
<rte-text-input label="Nom" />
<rte-checkbox id="accept" label="Accepter" />
`})}),`
`,e.jsx("h2",{id:"comparison-table",style:{border:"none",fontFamily:"Nunito"},children:" Tableau comparatif "}),`
`,e.jsx("p",{children:" Le tableau suivant compare les composants principaux d'Angular Material avec leurs équivalents dans le Design System RTE : "}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Composant"}),e.jsx("th",{children:"Angular Material"}),e.jsx("th",{children:"Design System RTE"}),e.jsx("th",{children:"Différences principales"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Button"})}),e.jsxs("td",{children:[e.jsx("code",{children:"<button mat-button>"}),e.jsx("br",{}),e.jsx("code",{children:"<button mat-raised-button>"}),e.jsx("br",{}),e.jsx("code",{children:"<button mat-icon-button>"})]}),e.jsxs("td",{children:[e.jsx("code",{children:"<button rteButton>"}),e.jsx("br",{}),e.jsx("code",{children:"<rte-icon-button>"})]}),e.jsxs("td",{children:["Angular Material utilise des directives avec des variantes via des classes (",e.jsx("code",{children:"mat-raised-button"}),", ",e.jsx("code",{children:"mat-icon-button"}),"). Le Design System RTE utilise une directive pour le bouton standard et un composant dédié pour les boutons icônes. Les variantes sont passées via des inputs (",e.jsx("code",{children:"rteButtonVariant"}),")."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Text Input"})}),e.jsxs("td",{children:[e.jsx("code",{children:"<mat-form-field>"}),e.jsx("br",{}),e.jsx("code",{children:"<input matInput>"})]}),e.jsx("td",{children:e.jsx("code",{children:"<rte-text-input>"})}),e.jsxs("td",{children:["Angular Material sépare le conteneur (",e.jsx("code",{children:"mat-form-field"}),") et l'input (",e.jsx("code",{children:"matInput"}),"). Le Design System RTE encapsule tout dans un seul composant avec des props pour le label, les erreurs, et les icônes."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Dialog"})}),e.jsxs("td",{children:[e.jsx("code",{children:"MatDialog"})," service",e.jsx("br",{}),e.jsx("code",{children:"<mat-dialog-content>"}),e.jsx("br",{}),e.jsx("code",{children:"<mat-dialog-actions>"})]}),e.jsxs("td",{children:[e.jsx("code",{children:"rteModal"})," directive",e.jsx("br",{}),e.jsx("code",{children:"rteModalTrigger"})," directive"]}),e.jsx("td",{children:"Angular Material utilise un service pour ouvrir les dialogues avec des composants séparés pour le contenu et les actions. Le Design System RTE utilise une directive déclarative appliquée sur un conteneur avec des templates pour les boutons et le contenu."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Badge"})}),e.jsx("td",{children:e.jsx("code",{children:"<mat-badge>"})}),e.jsx("td",{children:e.jsx("code",{children:"<rteBadge>"})}),e.jsx("td",{children:"Angular Material utilise un composant, le Design System RTE utilise une directive appliquée sur d'autres composants."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Tag"})}),e.jsxs("td",{children:[e.jsx("code",{children:"<mat-chip>"}),e.jsx("br",{}),e.jsx("code",{children:"<mat-chip-list>"})]}),e.jsx("td",{children:e.jsx("code",{children:"<rte-tag>"})}),e.jsx("td",{children:"Angular Material distingue les chips et les chips-list. Le Design System RTE utilise un composant tag unique avec des variantes."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Tooltip"})}),e.jsx("td",{children:e.jsx("code",{children:"<mat-tooltip>"})}),e.jsx("td",{children:e.jsx("code",{children:"<rteTooltip>"})}),e.jsx("td",{children:"Angular Material utilise une directive, le Design System RTE également mais avec une API différente."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Loader"})}),e.jsxs("td",{children:[e.jsx("code",{children:"<mat-spinner>"}),e.jsx("br",{}),e.jsx("code",{children:"<mat-progress-spinner>"})]}),e.jsx("td",{children:e.jsx("code",{children:"<rte-loader>"})}),e.jsx("td",{children:"Angular Material sépare spinner et progress-spinner. Le Design System RTE unifie dans un composant loader."})]})]})]}),`
`,e.jsx("h2",{id:"naming-conventions",style:{border:"none",fontFamily:"Nunito"},children:" Conventions de nommage "}),`
`,e.jsx("h3",{id:"selectors",style:{fontFamily:"Nunito"},children:" Sélecteurs "}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Aspect"}),e.jsx("th",{children:"Angular Material"}),e.jsx("th",{children:"Design System RTE"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Préfixe"})}),e.jsx("td",{children:e.jsx("code",{children:"mat-"})}),e.jsx("td",{children:e.jsx("code",{children:"rte-"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Type"})}),e.jsx("td",{children:"Directives sur éléments natifs + Composants"}),e.jsx("td",{children:"Composants standalone + Directives"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Exemples"})}),e.jsxs("td",{children:[e.jsx("code",{children:"mat-button"}),", ",e.jsx("code",{children:"matInput"}),", ",e.jsx("code",{children:"mat-checkbox"})]}),e.jsxs("td",{children:[e.jsx("code",{children:"rteButton"}),", ",e.jsx("code",{children:"rte-text-input"}),", ",e.jsx("code",{children:"rte-checkbox"})]})]})]})]}),`
`,e.jsx("h3",{id:"component-classes",style:{fontFamily:"Nunito"},children:" Classes de composants "}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Aspect"}),e.jsx("th",{children:"Angular Material"}),e.jsx("th",{children:"Design System RTE"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Convention"})}),e.jsxs("td",{children:["PascalCase avec préfixe ",e.jsx("code",{children:"Mat"})]}),e.jsxs("td",{children:["PascalCase avec suffixe ",e.jsx("code",{children:"Component"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Exemples"})}),e.jsxs("td",{children:[e.jsx("code",{children:"MatButton"}),", ",e.jsx("code",{children:"MatCheckbox"}),", ",e.jsx("code",{children:"MatDialog"})]}),e.jsxs("td",{children:[e.jsx("code",{children:"ButtonComponent"}),", ",e.jsx("code",{children:"CheckboxComponent"}),", ",e.jsx("code",{children:"ModalComponent"})]})]})]})]}),`
`,e.jsx("h2",{id:"migration-examples",style:{border:"none",fontFamily:"Nunito"},children:" Exemples de migration "}),`
`,e.jsx("h3",{id:"button-migration",style:{fontFamily:"Nunito"},children:" Migration d'un bouton "}),`
`,e.jsx("h4",{id:"angular-material-button",style:{fontFamily:"Nunito"},children:" Angular Material "}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<button mat-raised-button color="primary" [disabled]="isDisabled" (click)="handleClick()">
  Click me
</button>
`})}),`
`,e.jsx("h4",{id:"rte-design-system-button",style:{fontFamily:"Nunito"},children:" Design System RTE "}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<button 
  rteButton 
  rteButtonVariant="primary" 
  [disabled]="isDisabled()" 
  (click)="handleClick()"
>
  Click me
</button>
`})}),`
`,e.jsx("h3",{id:"input-migration",style:{fontFamily:"Nunito"},children:" Migration d'un champ de texte "}),`
`,e.jsx("h4",{id:"angular-material-input",style:{fontFamily:"Nunito"},children:" Angular Material "}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<mat-form-field appearance="outline">
  <mat-label>Nom</mat-label>
  <input matInput [(ngModel)]="name" required>
  <mat-error *ngIf="hasError">Erreur</mat-error>
</mat-form-field>
`})}),`
`,e.jsx("h4",{id:"rte-design-system-input",style:{fontFamily:"Nunito"},children:" Design System RTE "}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<rte-text-input
  label="Nom"
  [value]="name()"
  [error]="hasError()"
  [required]="true"
  (valueChange)="name.set($event)"
/>
`})}),`
`,e.jsx("h3",{id:"checkbox-migration",style:{fontFamily:"Nunito"},children:" Migration d'une case à cocher "}),`
`,e.jsx("h4",{id:"angular-material-checkbox",style:{fontFamily:"Nunito"},children:" Angular Material "}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<mat-checkbox [(ngModel)]="isChecked" [disabled]="isDisabled">
  Accept the terms and conditions
</mat-checkbox>
`})}),`
`,e.jsx("h4",{id:"rte-design-system-checkbox",style:{fontFamily:"Nunito"},children:" Design System RTE "}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<rte-checkbox
  id="accept"
  label="Accept the terms and conditions"
  [checked]="isChecked()"
  [disabled]="isDisabled()"
/>
`})}),`
`,e.jsx("h3",{id:"dialog-migration",style:{fontFamily:"Nunito"},children:" Migration d'un dialogue "}),`
`,e.jsx("h4",{id:"angular-material-dialog",style:{fontFamily:"Nunito"},children:" Angular Material "}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// Dans le composant
constructor(private dialog: MatDialog) {}

openDialog() {
  const dialogRef = this.dialog.open(MyDialogComponent, {
    width: '400px',
    data: { title: 'Titre' }
  });
  
  dialogRef.afterClosed().subscribe(result => {
    console.log(result);
  });
}
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- MyDialogComponent template -->
<h2 mat-dialog-title>Title</h2>
<mat-dialog-content>Content</mat-dialog-content>
<mat-dialog-actions>
  <button mat-button mat-dialog-close>Cancel</button>
  <button mat-button [mat-dialog-close]="true">Validate</button>
</mat-dialog-actions>
`})}),`
`,e.jsx("h4",{id:"rte-design-system-modal",style:{fontFamily:"Nunito"},children:" Design System RTE "}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Approche déclarative avec directive -->
<div
  rteModal
  [rteModalId]="'my-modal'"
  [rteModalTitle]="'Title'"
  [rteModalDescription]="'Content'"
  [rteModalSize]="'m'"
>
  <button rteButton rteButtonVariant="primary" rteModalTrigger>Open Modal</button>
  <ng-template #primaryButton>
    <button rteButton rteButtonVariant="primary" (click)="handleValidate()">Validate</button>
  </ng-template>
  <ng-template #secondaryButton>
    <button rteButton rteButtonVariant="neutral" (click)="handleCancel()">Cancel</button>
  </ng-template>
</div>
`})}),`
`,e.jsx("h2",{id:"migration-checklist",style:{border:"none",fontFamily:"Nunito"},children:" Checklist de migration "}),`
`,e.jsxs("ul",{children:[e.jsx("li",{children:"  Remplacer les imports de modules Angular Material par des imports de composants standalone "}),e.jsxs("li",{children:["  Remplacer les composants et directives ",e.jsx(n.code,{children:"mat-*"})," par les composants et directives ",e.jsx(n.code,{children:"rte-*"})," équivalents "]}),e.jsx("li",{children:"  Mettre à jour la configuration de thème "}),e.jsx("li",{children:"  Tester l'accessibilité et les comportements interactifs "})]})]})}function p(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{p as default};
