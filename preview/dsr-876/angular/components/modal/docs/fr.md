# Modal

## Overview

```html
<div
  rteModal
  #modalHost="rteModal"
  [rteModalId]="'modal-1'"
  [rteModalTitle]="'Connect to Wi-Fi'"
  [rteModalDescription]="'Please connect to wifi to synchronise your projects or go to Settings to change your preferences.'"
  [rteModalSize]="'xs'"
  [rteModalIcon]="'wifi'"
  [rteModalIconAppearance]="'filled'"
>
  <button rteButton rteButtonVariant="primary" rteModalTrigger>Open Modal</button>
  <ng-template #primaryButton>
    <button rteButton rteButtonVariant="primary" (click)="modalHost.close()">Continue</button>
  </ng-template>
  <ng-template #secondaryButton>
    <button rteButton rteButtonVariant="neutral" (click)="modalHost.close()">Cancel</button>
  </ng-template>
</div>
```

## API

L'API publique est la directive `[rteModal]` (avec `exportAs="rteModal"`), la directive `[rteModalTrigger]`, et les templates projetés pour le pied de page et le contenu. N'utilisez pas le sélecteur interne `rte-modal` dans les templates applicatifs.

### Entrées ModalDirective

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| rteModalId | `string \| undefined` | `undefined` | Identifiant unique utilisé pour les attributs ARIA (`{id}-modal-title`, `{id}-modal-desc`). |
| rteModalIcon | `string \| undefined` | `undefined` | Nom de l'icône affichée dans l'en-tête. |
| rteModalIconAppearance | `"outlined" \| "filled"` | `"outlined"` | Style visuel de l'icône d'en-tête. |
| rteModalTitle | `string` | — | Titre de la modale affiché dans l'en-tête. |
| rteModalDescription | `string` | — | Paragraphe de description rendu au-dessus du contenu personnalisé. |
| rteModalIsOpen | `boolean` | `false` | Définie sur la directive mais non connectée à l'ouverture programmatique. Utilisez `showModal()` ou un déclencheur à la place. |
| rteModalSize | `"xs" \| "s" \| "m" \| "l" \| "xl"` | `"m"` | Preset de largeur de la modale. |
| rteModalAriaDescribedby | `string \| undefined` | `undefined` | Valeur `aria-describedby` personnalisée lorsqu'aucune description n'est fournie. |
| rteModalCloseOnClickOutside | `boolean` | `true` | Lorsque `true`, un clic sur le fond ou la touche Échap ferme la modale. |

### Méthodes ModalDirective

| Method | Description |
|--------|-------------|
| `showModal()` | Crée et ouvre l'overlay de la modale. Requiert un template `#primaryButton`. |
| `close()` | Ferme la modale avec l'animation de sortie, puis détruit l'overlay. |

### Projection de contenu ModalDirective

| Template ref | Required | Description |
|--------------|----------|-------------|
| `#primaryButton` | Oui | Bouton d'action principal rendu dans le pied de page. |
| `#secondaryButton` | Non | Bouton d'action secondaire rendu avant le bouton principal. |
| `#customContent` | Non | Contenu additionnel rendu sous la description dans le corps de la modale. |

### Sorties ModalTriggerDirective

| Property | Type | Description |
|----------|------|-------------|
| modalTriggerClicked | `EventEmitter<Event>` | Émise lors du clic sur l'élément déclencheur. |
| modalTriggerKeyDown | `EventEmitter<KeyboardEvent>` | Émise sur les événements keydown de l'élément déclencheur. |

## Usage

Importez `ModalModule` et composez un élément hôte avec la directive `[rteModal]`. Fournissez les actions du pied de page via les templates `#primaryButton` et `#secondaryButton`.

N'utilisez pas le sélecteur interne `rte-modal` dans les templates applicatifs. La directive crée et gère l'instance d'overlay.

### Ouverture depuis un bouton

Attachez `[rteModalTrigger]` à l'élément qui ouvre la modale au clic. Appelez `modalHost.close()` depuis les boutons d'action du pied de page.

```typescript
import { ModalModule } from "@design-system-rte/angular";
```

```html
<div
  rteModal
  #modalHost="rteModal"
  [rteModalId]="'modal-1'"
  [rteModalTitle]="'Connect to Wi-Fi'"
  [rteModalDescription]="'Please connect to wifi to synchronise your projects or go to Settings to change your preferences.'"
  [rteModalSize]="'xs'"
  [rteModalIcon]="'wifi'"
  [rteModalIconAppearance]="'filled'"
  [rteModalCloseOnClickOutside]="true"
>
  <button rteButton rteButtonVariant="primary" rteModalTrigger>Open Modal</button>
  <ng-template #primaryButton>
    <button rteButton rteButtonVariant="primary" (click)="onContinue(); modalHost.close()">Continue</button>
  </ng-template>
  <ng-template #secondaryButton>
    <button rteButton rteButtonVariant="neutral" (click)="modalHost.close()">Cancel</button>
  </ng-template>
</div>
```

### Ouverture programmatique

Dans la plupart des applications, les modales s'ouvrent depuis la logique TypeScript (par exemple après une réponse API, un échec de validation ou une étape de workflow). Omettez `[rteModalTrigger]` et appelez `showModal()` sur l'export `rteModal`.

```typescript
import { Component, ViewChild } from "@angular/core";
import { ModalDirective, ModalModule } from "@design-system-rte/angular";

@Component({
  imports: [ModalModule],
  template: `
    <div
      rteModal
      #confirmModal="rteModal"
      [rteModalId]="'delete-confirm'"
      [rteModalTitle]="'Delete 3 documents'"
      [rteModalDescription]="'The selected documents will be deleted.'"
      [rteModalSize]="'xs'"
      [rteModalIcon]="'delete'"
    >
      <ng-template #primaryButton>
        <button rteButton rteButtonVariant="danger" (click)="onConfirmDelete(); confirmModal.close()">Delete</button>
      </ng-template>
      <ng-template #secondaryButton>
        <button rteButton rteButtonVariant="neutral" (click)="confirmModal.close()">Cancel</button>
      </ng-template>
    </div>
  `,
})
export class DocumentsComponent {
  @ViewChild("confirmModal") confirmModal!: ModalDirective;

  onBulkDeleteRequested(): void {
    this.confirmModal.showModal();
  }

  onConfirmDelete(): void {
    // perform delete
  }
}
```

Utilisez `@ViewChild` avec le même nom de référence de template que `#confirmModal="rteModal"`. Appelez `close()` depuis les boutons du pied de page et depuis tout autre chemin de fermeture dans votre composant.

### Examples

#### Sizes

```html
<div rteModal #modalHostXs="rteModal" [rteModalId]="'modal-xs'" [rteModalTitle]="title" [rteModalDescription]="description" [rteModalSize]="'xs'" [rteModalIcon]="'settings'">
  <button rteButton rteButtonVariant="primary" rteModalTrigger>Open modal xs</button>
  <ng-template #primaryButton>
    <button rteButton rteButtonVariant="primary" (click)="modalHostXs.close()">Continue</button>
  </ng-template>
  <ng-template #secondaryButton>
    <button rteButton rteButtonVariant="neutral" (click)="modalHostXs.close()">Cancel</button>
  </ng-template>
</div>

<div rteModal #modalHostS="rteModal" [rteModalId]="'modal-s'" [rteModalTitle]="title" [rteModalDescription]="description" [rteModalSize]="'s'" [rteModalIcon]="'settings'">
  <button rteButton rteButtonVariant="primary" rteModalTrigger>Open modal s</button>
  <ng-template #primaryButton>
    <button rteButton rteButtonVariant="primary" (click)="modalHostS.close()">Continue</button>
  </ng-template>
  <ng-template #secondaryButton>
    <button rteButton rteButtonVariant="neutral" (click)="modalHostS.close()">Cancel</button>
  </ng-template>
</div>

<!-- Répéter pour les tailles 'm', 'l' et 'xl' -->
```

Seule la liaison `[rteModalSize]` change entre les instances. Les autres entrées (`[rteModalTitle]`, `[rteModalDescription]`, `[rteModalIcon]`, etc.) restent identiques.

Utilisez `[rteModalSize]` pour choisir un preset de largeur : `xs` (496 px), `s` (656 px), `m` (936 px), `l` (1168 px), `xl` (1328 px).

(`"xs" | "s" | "m" | "l" | "xl"`)

#### With custom content

```html
<div
  rteModal
  #modalHost="rteModal"
  [rteModalId]="'modal-2'"
  [rteModalTitle]="'Préciser le motif du refus'"
  [rteModalDescription]="'En motivant votre refus, vous aidez votre collaborateur à mieux identifier comment corriger sa demande.'"
  [rteModalSize]="'m'"
  [rteModalIcon]="'wifi'"
>
  <button rteButton rteButtonVariant="primary" rteModalTrigger>Open Modal</button>
  <ng-template #primaryButton>
    <button rteButton rteButtonVariant="primary" (click)="modalHost.close()">Continue</button>
  </ng-template>
  <ng-template #secondaryButton>
    <button rteButton rteButtonVariant="neutral" (click)="modalHost.close()">Cancel</button>
  </ng-template>
  <ng-template #customContent>
    <rte-textarea resizeable="true" />
    <rte-select [options]="selectOptions" />
  </ng-template>
</div>
```

Par rapport à la configuration par défaut, cet exemple ajoute un template `#customContent` et définit `[rteModalSize]="'m'"`. Storybook peut omettre `[rteModalDescription]` dans le snippet affiché même lorsque les args le définissent — conservez la liaison dans votre template lorsque vous avez besoin d'un paragraphe de description.

Projetez des champs de formulaire ou d'autres composants via `#customContent` lorsque le paragraphe de description par défaut ne suffit pas.

## Limitations

### Deux boutons d'action maximum dans le pied de page

Le pied de page prend en charge un bouton principal et un bouton secondaire optionnel, plus le bouton de fermeture dans l'en-tête. Un bouton tertiaire dans le pied de page n'est pas supporté. Lorsque davantage d'actions sont nécessaires, privilégiez l'ouverture du contenu en dehors de la modale, le regroupement d'actions dans un Split Button en tant qu'action principale (voir DSR-838), ou le placement d'actions supplémentaires dans `#customContent`.

### Taille et couleur de l'icône d'en-tête

La taille de l'icône d'en-tête est fixe (`xl`) et sa couleur suit les design tokens. Seuls le nom de l'icône (`rteModalIcon`) et l'apparence (`rteModalIconAppearance` : `outlined` ou `filled`) sont configurables. Les surcharges de taille ou de couleur ne sont pas supportées.

### Bouton principal requis

La modale ne s'ouvre pas sans template `#primaryButton`. S'il est absent, la directive journalise un avertissement dans la console et ne crée pas l'overlay.

### Sélecteur de composant interne

`rte-modal` est un composant d'overlay interne. Les templates applicatifs doivent utiliser la directive `[rteModal]`.

### Largeur fixe par taille

La largeur de la modale est contrôlée par des presets de taille, pas par du CSS consommateur. Largeurs par défaut : `xs` 496 px, `s` 656 px, `m` 936 px, `l` 1168 px, `xl` 1328 px.

### Hauteur maximale et corps défilant

La boîte de dialogue est plafonnée à `90vh`. La zone de contenu défile lorsque la description et le contenu personnalisé dépassent la hauteur disponible.

### Verrouillage du défilement du body

Tant qu'elle est ouverte, la directive définit `document.body.style.overflow` à `"hidden"`. Elle le restaure à `"unset"` lorsque la modale est détruite.

### La touche Échap dépend de la fermeture au clic extérieur

Appuyer sur Échap ferme la modale uniquement lorsque `[rteModalCloseOnClickOutside]` est à `true`. Lorsqu'il est à `false`, les clics sur le fond et Échap sont tous deux désactivés.

### rteModalIsOpen n'est pas connecté

L'entrée `rteModalIsOpen` existe sur la directive mais n'est pas utilisée pour contrôler la visibilité. Ouvrez la modale avec `[rteModalTrigger]`, `showModal()`, ou des appels impératifs sur l'export `rteModal`.

### Piège de focus

Le focus est piégé à l'intérieur de la boîte de dialogue tant qu'elle est ouverte. Tabulation cycle entre les éléments focusables de la modale, y compris les boutons du pied de page et le bouton de fermeture de l'en-tête.

### Troncature du titre

Les titres longs sont tronqués avec une ellipse dans l'en-tête. Gardez les titres concis.

### Délai d'animation de fermeture

Après l'appel à `close()`, l'overlay est détruit après un délai de 200 ms pour laisser l'animation de sortie se terminer.

## FAQ

Q : Comment ouvrir une modale depuis TypeScript sans bouton déclencheur ?

R : Consultez la section Usage / Ouverture programmatique. Omettez `[rteModalTrigger]` et appelez `showModal()` sur l'export `rteModal` via `@ViewChild`. Appelez `close()` depuis les boutons du pied de page lorsque l'utilisateur confirme ou annule.

Q : J'ai besoin de trois actions dans le pied de page (par exemple supprimer, télécharger et fermer) — puis-je ajouter un bouton tertiaire ?

R : Consultez la section Limitations / Deux boutons d'action maximum dans le pied de page. Le pied de page de la modale ne supporte qu'un bouton principal, un bouton secondaire optionnel et le bouton de fermeture de l'en-tête. L'évolution d'un bouton tertiaire a été examinée et n'a pas été validée. Pour regrouper des actions, envisagez un Split Button en tant qu'action principale (DSR-838). Pour la visualisation d'une pièce jointe, l'ouverture en dehors de la modale est préférable avant d'effectuer des actions.

Q : Peut-on obtenir une variante avec bouton tertiaire sur Modal ?

R : Cette évolution n'a pas été validée par le comité Design System. Suivez DSR-838 pour l'alternative Split Button sur l'emplacement du bouton principal. La fermeture reste disponible via le bouton de fermeture de l'en-tête ou `#secondaryButton`.

Q : Dois-je utiliser le bouton secondaire pour une action destructive comme la suppression ?

R : Utilisez la variante `danger` sur le bouton principal pour les actions destructives, pas le bouton secondaire. Le bouton secondaire est destiné aux actions neutres comme l'annulation. Consultez la story Storybook `KeyboardInteraction` pour un exemple de confirmation de suppression avec un bouton principal `danger`.

Q : Comment personnaliser la taille ou la couleur de l'icône d'en-tête ?

R : Consultez la section Limitations / Taille et couleur de l'icône d'en-tête. Seuls `rteModalIcon` et `rteModalIconAppearance` sont supportés. La taille et la couleur de l'icône sont fixées par le design et correspondent aux règles du composant Figma.

Q : La modale ne s'ouvre pas — que manque-t-il ?

R : Consultez la section Limitations / Bouton principal requis. Un template `#primaryButton` est obligatoire. Sans lui, la directive journalise un avertissement et ne crée pas l'overlay.

Q : `rteModalIsOpen` ouvre-t-il la modale à l'initialisation ?

R : Non. L'entrée `rteModalIsOpen` est définie mais non connectée à la visibilité. Utilisez `[rteModalTrigger]`, `showModal()`, ou appelez `close()` / `showModal()` sur l'export `rteModal`. Consultez la section Limitations / rteModalIsOpen n'est pas connecté.
