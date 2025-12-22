import{j as e,M as c}from"./index-DeKclr4K.js";import{useMDXComponents as a}from"./index-DL7Mpk60.js";import{H as o,P as l,B as h,A as r,a as n}from"./Body-BF16JPdc.js";import{D as s}from"./GeneralDocs-Cm-oRkrV.js";import{L as x}from"./List-yaq7P2fi.js";/* empty css               */import"./iframe-dN6lJxN9.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Dif16jpf.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./react-package-D-48QPc6.js";function d(i){const t={code:"code",pre:"pre",strong:"strong",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Design system/Get Started - Kit de migration/Angular"}),`
`,e.jsxs("div",{className:"docs",children:[e.jsxs("div",{children:[e.jsx(o,{title:"Migration depuis Angular Material"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:e.jsxs(l,{children:["Ce guide compare l'architecture et les conventions de nommage d'",e.jsx(t.strong,{children:"Angular Material"})," avec celles du ",e.jsx(t.strong,{children:"Design System RTE"}),". Si vous migrez depuis Angular Material, cette documentation vous aidera à comprendre les différences fondamentales entre les deux systèmes."]})})]}),e.jsxs(h,{children:[e.jsx(r,{title:"Différences architecturales",id:"architectural-differences",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"4px 8px"},children:e.jsxs(s,{title:"Modèle de composants",headingLevel:3,children:[e.jsxs(l,{children:[e.jsx(t.strong,{children:"Angular Material"})," utilise principalement des ",e.jsx(t.strong,{children:"directives"})," appliquées sur des éléments HTML natifs, tandis que le ",e.jsx(t.strong,{children:"Design System RTE"})," utilise des ",e.jsx(t.strong,{children:"composants standalone"})," et des ",e.jsx(t.strong,{children:"directives"})," avec leurs propres sélecteurs."]}),e.jsx(n,{level:4,id:"angular-material-approach",children:"Approche Angular Material"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<button mat-button>Click me</button>
<input matInput placeholder="Nom">
<mat-checkbox>Accepter</mat-checkbox>
`})}),e.jsx(n,{level:4,id:"rte-design-system-approach",children:"Approche Design System RTE"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<button rteButton rteButtonVariant="primary">Click me</button>
<rte-text-input label="Nom" />
<rte-checkbox id="accept" label="Accepter" />
`})})]})})}),e.jsx(r,{title:"Tableau comparatif",id:"comparison-table",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"4px 8px"},children:[e.jsx(l,{children:"Le tableau suivant compare les composants principaux d'Angular Material avec leurs équivalents dans le Design System RTE :"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Composant"}),e.jsx("th",{children:"Angular Material"}),e.jsx("th",{children:"Design System RTE"}),e.jsx("th",{children:"Différences principales"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Button"})}),e.jsxs("td",{children:[e.jsx("code",{children:"<button mat-button>"}),e.jsx("br",{}),e.jsx("code",{children:"<button mat-raised-button>"}),e.jsx("br",{}),e.jsx("code",{children:"<button mat-icon-button>"})]}),e.jsxs("td",{children:[e.jsx("code",{children:"<button rteButton>"}),e.jsx("br",{}),e.jsx("code",{children:"<rte-icon-button>"})]}),e.jsxs("td",{children:["Angular Material utilise des directives avec des variantes via des classes (",e.jsx("code",{children:"mat-raised-button"}),", ",e.jsx("code",{children:"mat-icon-button"}),"). Le Design System RTE utilise une directive pour le bouton standard et un composant dédié pour les boutons icônes. Les variantes sont passées via des inputs (",e.jsx("code",{children:"rteButtonVariant"}),")."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Text Input"})}),e.jsxs("td",{children:[e.jsx("code",{children:"<mat-form-field>"}),e.jsx("br",{}),e.jsx("code",{children:"<input matInput>"})]}),e.jsx("td",{children:e.jsx("code",{children:"<rte-text-input>"})}),e.jsxs("td",{children:["Angular Material sépare le conteneur (",e.jsx("code",{children:"mat-form-field"}),") et l'input (",e.jsx("code",{children:"matInput"}),"). Le Design System RTE encapsule tout dans un seul composant avec des props pour le label, les erreurs, et les icônes."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Dialog"})}),e.jsxs("td",{children:[e.jsx("code",{children:"MatDialog"})," service",e.jsx("br",{}),e.jsx("code",{children:"<mat-dialog-content>"}),e.jsx("br",{}),e.jsx("code",{children:"<mat-dialog-actions>"})]}),e.jsxs("td",{children:[e.jsx("code",{children:"rteModal"})," directive",e.jsx("br",{}),e.jsx("code",{children:"rteModalTrigger"})," directive"]}),e.jsx("td",{children:"Angular Material utilise un service pour ouvrir les dialogues avec des composants séparés pour le contenu et les actions. Le Design System RTE utilise une directive déclarative appliquée sur un conteneur avec des templates pour les boutons et le contenu."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Badge"})}),e.jsx("td",{children:e.jsx("code",{children:"<mat-badge>"})}),e.jsx("td",{children:e.jsx("code",{children:"<rteBadge>"})}),e.jsx("td",{children:"Angular Material utilise un composant, le Design System RTE utilise une directive appliquée sur d'autres composants."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Tag"})}),e.jsxs("td",{children:[e.jsx("code",{children:"<mat-chip>"}),e.jsx("br",{}),e.jsx("code",{children:"<mat-chip-list>"})]}),e.jsx("td",{children:e.jsx("code",{children:"<rte-tag>"})}),e.jsx("td",{children:"Angular Material distingue les chips et les chips-list. Le Design System RTE utilise un composant tag unique avec des variantes."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Tooltip"})}),e.jsx("td",{children:e.jsx("code",{children:"<mat-tooltip>"})}),e.jsx("td",{children:e.jsx("code",{children:"<rteTooltip>"})}),e.jsx("td",{children:"Angular Material utilise une directive, le Design System RTE également mais avec une API différente."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Loader"})}),e.jsxs("td",{children:[e.jsx("code",{children:"<mat-spinner>"}),e.jsx("br",{}),e.jsx("code",{children:"<mat-progress-spinner>"})]}),e.jsx("td",{children:e.jsx("code",{children:"<rte-loader>"})}),e.jsx("td",{children:"Angular Material sépare spinner et progress-spinner. Le Design System RTE unifie dans un composant loader."})]})]})]})]})}),e.jsx(r,{title:"Conventions de nommage",id:"naming-conventions",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"4px 8px"},children:[e.jsx(s,{title:"Sélecteurs",headingLevel:3,children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Aspect"}),e.jsx("th",{children:"Angular Material"}),e.jsx("th",{children:"Design System RTE"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Préfixe"})}),e.jsx("td",{children:e.jsx("code",{children:"mat-"})}),e.jsx("td",{children:e.jsx("code",{children:"rte-"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Type"})}),e.jsx("td",{children:"Directives sur éléments natifs + Composants"}),e.jsx("td",{children:"Composants standalone + Directives"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Exemples"})}),e.jsxs("td",{children:[e.jsx("code",{children:"mat-button"}),", ",e.jsx("code",{children:"matInput"}),", ",e.jsx("code",{children:"mat-checkbox"})]}),e.jsxs("td",{children:[e.jsx("code",{children:"rteButton"}),", ",e.jsx("code",{children:"rte-text-input"}),", ",e.jsx("code",{children:"rte-checkbox"})]})]})]})]})}),e.jsx(s,{title:"Classes de composants",headingLevel:3,children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Aspect"}),e.jsx("th",{children:"Angular Material"}),e.jsx("th",{children:"Design System RTE"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Convention"})}),e.jsxs("td",{children:["PascalCase avec préfixe ",e.jsx("code",{children:"Mat"})]}),e.jsxs("td",{children:["PascalCase avec suffixe ",e.jsx("code",{children:"Component"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Exemples"})}),e.jsxs("td",{children:[e.jsx("code",{children:"MatButton"}),", ",e.jsx("code",{children:"MatCheckbox"}),", ",e.jsx("code",{children:"MatDialog"})]}),e.jsxs("td",{children:[e.jsx("code",{children:"ButtonComponent"}),", ",e.jsx("code",{children:"CheckboxComponent"}),", ",e.jsx("code",{children:"ModalComponent"})]})]})]})]})})]})}),e.jsx(r,{title:"Exemples de migration",id:"migration-examples",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"4px 8px"},children:[e.jsxs(s,{title:"Migration d'un bouton",headingLevel:3,children:[e.jsx(n,{level:4,id:"angular-material-button",children:"Angular Material"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<button mat-raised-button color="primary" [disabled]="isDisabled" (click)="handleClick()">
  Click me
</button>
`})}),e.jsx(n,{level:4,id:"rte-design-system-button",children:"Design System RTE"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<button 
  rteButton 
  rteButtonVariant="primary" 
  [disabled]="isDisabled()" 
  (click)="handleClick()"
>
  Click me
</button>
`})})]}),e.jsxs(s,{title:"Migration d'un champ de texte",headingLevel:3,children:[e.jsx(n,{level:4,id:"angular-material-input",children:"Angular Material"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<mat-form-field appearance="outline">
  <mat-label>Nom</mat-label>
  <input matInput [(ngModel)]="name" required>
  <mat-error *ngIf="hasError">Erreur</mat-error>
</mat-form-field>
`})}),e.jsx(n,{level:4,id:"rte-design-system-input",children:"Design System RTE"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<rte-text-input
  label="Nom"
  [value]="name()"
  [error]="hasError()"
  [required]="true"
  (valueChange)="name.set($event)"
/>
`})})]}),e.jsxs(s,{title:"Migration d'une case à cocher",headingLevel:3,children:[e.jsx(n,{level:4,id:"angular-material-checkbox",children:"Angular Material"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<mat-checkbox [(ngModel)]="isChecked" [disabled]="isDisabled">
  Accept the terms and conditions
</mat-checkbox>
`})}),e.jsx(n,{level:4,id:"rte-design-system-checkbox",children:"Design System RTE"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<rte-checkbox
  id="accept"
  label="Accept the terms and conditions"
  [checked]="isChecked()"
  [disabled]="isDisabled()"
/>
`})})]}),e.jsxs(s,{title:"Migration d'un dialogue",headingLevel:3,children:[e.jsx(n,{level:4,id:"angular-material-dialog",children:"Angular Material"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`// Dans le composant
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
`})}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<!-- MyDialogComponent template -->
<h2 mat-dialog-title>Title</h2>
<mat-dialog-content>Content</mat-dialog-content>
<mat-dialog-actions>
  <button mat-button mat-dialog-close>Cancel</button>
  <button mat-button [mat-dialog-close]="true">Validate</button>
</mat-dialog-actions>
`})}),e.jsx(n,{level:4,id:"rte-design-system-modal",children:"Design System RTE"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<!-- Approche déclarative avec directive -->
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
`})})]})]})}),e.jsx(r,{title:"Checklist de migration",id:"migration-checklist",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"4px 8px"},children:e.jsxs(x,{children:[e.jsx("li",{children:"Remplacer les imports de modules Angular Material par des imports de composants standalone"}),e.jsxs("li",{children:["Remplacer les composants et directives ",e.jsx(t.code,{children:"mat-*"})," par les composants et directives ",e.jsx(t.code,{children:"rte-*"})," équivalents"]}),e.jsx("li",{children:"Mettre à jour la configuration de thème"}),e.jsx("li",{children:"Tester l'accessibilité et les comportements interactifs"})]})})})]})]})]})}function T(i={}){const{wrapper:t}={...a(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(d,{...i})}):d(i)}export{T as default};
