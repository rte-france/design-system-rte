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
  [rteModalPrimaryActionLabel]="'Continue'"
  [rteModalSecondaryActionLabel]="'Cancel'"
  (rteModalPrimaryActionClick)="modalHost.close()"
  (rteModalSecondaryActionClick)="modalHost.close()"
>
  <button rteButton rteButtonVariant="primary" rteModalTrigger>Open Modal</button>
</div>
```

## API

L'API publique est la directive `[rteModal]` (avec `exportAs="rteModal"`), la directive `[rteModalTrigger]`, les entrées et sorties d'actions de pied de page, et la projection de contenu optionnelle. N'utilisez pas le sélecteur interne `rte-modal` dans les templates applicatifs.

### Entrées ModalDirective

| Nom | Type | Valeur par défaut | Description |
|-----|------|-------------------|-------------|
| rteModalId | `string \| undefined` | `undefined` | Identifiant unique utilisé pour les attributs ARIA (`{id}-modal-title`, `{id}-modal-desc`). |
| rteModalIcon | `string \| undefined` | `undefined` | Nom de l'icône affichée dans l'en-tête. |
| rteModalIconAppearance | `"outlined" \| "filled"` | `"outlined"` | Style visuel de l'icône d'en-tête. |
| rteModalTitle | `string` | — | Titre de la modale affiché dans l'en-tête. |
| rteModalDescription | `string` | — | Paragraphe de description rendu au-dessus du contenu personnalisé. |
| rteModalIsOpen | `boolean` | `false` | Définie sur la directive mais non connectée à l'ouverture programmatique. Utilisez `showModal()` ou un déclencheur à la place. |
| rteModalSize | `"xs" \| "s" \| "m" \| "l" \| "xl"` | `"m"` | Preset de largeur de la modale. |
| rteModalAriaDescribedby | `string \| undefined` | `undefined` | Valeur `aria-describedby` personnalisée lorsqu'aucune description n'est fournie. |
| rteModalCloseOnClickOutside | `boolean` | `true` | Lorsque `true`, un clic sur le fond ou la touche Échap ferme la modale. |
| rteModalPrimaryActionLabel | `string \| undefined` | `undefined` | Libellé de l'action principale du pied de page. Requis sur le chemin du pied de page configuré (avec les sorties ci-dessous). |
| rteModalSecondaryActionLabel | `string \| undefined` | `undefined` | Libellé optionnel de l'action secondaire (bouton neutral). |
| rteModalPrimaryActionType | `"button" \| "split-button"` | `"button"` | Contrôle principal du pied de page : Button ou Split Button du design system. |
| rteModalPrimarySplitButtonOptions | `SplitButtonItemProps[]` | `[]` | Entrées de menu lorsque `rteModalPrimaryActionType` est `split-button`. Au moins un élément est requis sur ce chemin. |
| rteModalPrimarySplitButtonAriaLabelRight | `string \| undefined` | `undefined` | Nom accessible du déclencheur de menu du split button. Requis lorsque `rteModalPrimaryActionType` est `split-button`. |
| rteModalPrimaryActionIsCritical | `boolean` | `false` | Lorsque `true` et que le type principal est `button`, applique le style critical au bouton principal (`brand` / `primary` + critical). |

### Sorties ModalDirective

| Nom | Type | Description |
|-----|------|-------------|
| rteModalPrimaryActionClick | `void` | Émise lors de l'activation du bouton principal configuré ou du segment gauche du split button. |
| rteModalPrimaryActionOptionClick | `string` | Émise lors de l'activation d'une option du menu split button. La valeur est l'`id` de l'option dans `rteModalPrimarySplitButtonOptions`. |
| rteModalSecondaryActionClick | `void` | Émise lors de l'activation du bouton secondaire configuré. |

### Méthodes ModalDirective

| Méthode | Description |
|---------|-------------|
| `showModal()` | Crée et ouvre l'overlay de la modale. Requiert `rteModalPrimaryActionLabel` ou un template legacy `#primaryButton`. |
| `close()` | Ferme la modale avec l'animation de sortie, puis détruit l'overlay. |

### Projection de contenu ModalDirective

| Template ref | Requis | Description |
|--------------|--------|-------------|
| `#primaryButton` | Non (legacy) | Déprécié. Markup personnalisé pour l'action principale. Préférez les entrées d'action lorsque c'est possible. Requis sur le chemin legacy si `rteModalPrimaryActionLabel` n'est pas défini. |
| `#secondaryButton` | Non (legacy) | Déprécié. Markup personnalisé pour l'action secondaire. Préférez `rteModalSecondaryActionLabel` lorsque c'est possible. |
| `#customContent` | Non | Contenu additionnel rendu sous la description dans le corps de la modale. |

### Sorties ModalTriggerDirective

| Nom | Type | Description |
|-----|------|-------------|
| modalTriggerClicked | `EventEmitter<Event>` | Émise lors du clic sur l'élément déclencheur. |
| modalTriggerKeyDown | `EventEmitter<KeyboardEvent>` | Émise sur les événements keydown de l'élément déclencheur. |

## Usage

Importez `ModalModule` et composez un élément hôte avec la directive `[rteModal]`. Fournissez les actions du pied de page via `rteModalPrimaryActionLabel`, `rteModalSecondaryActionLabel` optionnel, et `(rteModalPrimaryActionClick)` / `(rteModalSecondaryActionClick)`.

N'utilisez pas le sélecteur interne `rte-modal` dans les templates applicatifs. La directive crée et gère l'instance d'overlay.

### Ouverture depuis un bouton

Attachez `[rteModalTrigger]` à l'élément qui ouvre la modale au clic. Appelez `modalHost.close()` depuis les sorties d'action lorsque la modale doit se fermer.

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
  [rteModalPrimaryActionLabel]="'Continue'"
  [rteModalSecondaryActionLabel]="'Cancel'"
  (rteModalPrimaryActionClick)="onContinue(); modalHost.close()"
  (rteModalSecondaryActionClick)="modalHost.close()"
>
  <button rteButton rteButtonVariant="primary" rteModalTrigger>Open Modal</button>
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
      [rteModalPrimaryActionLabel]="'Delete'"
      [rteModalSecondaryActionLabel]="'Cancel'"
      [rteModalPrimaryActionIsCritical]="true"
      (rteModalPrimaryActionClick)="onConfirmDelete(); confirmModal.close()"
      (rteModalSecondaryActionClick)="confirmModal.close()"
    ></div>
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

Utilisez `@ViewChild` avec le même nom de référence de template que `#confirmModal="rteModal"`. Appelez `close()` depuis les gestionnaires des sorties d'action et depuis tout autre chemin de fermeture dans votre composant.

#### Tailles

```html
<div
  rteModal
  #modalHostXs="rteModal"
  [rteModalId]="'modal-xs'"
  [rteModalTitle]="title"
  [rteModalDescription]="description"
  [rteModalSize]="'xs'"
  [rteModalIcon]="'settings'"
  [rteModalPrimaryActionLabel]="'Continue'"
  [rteModalSecondaryActionLabel]="'Cancel'"
  (rteModalPrimaryActionClick)="modalHostXs.close()"
  (rteModalSecondaryActionClick)="modalHostXs.close()"
>
  <button rteButton rteButtonVariant="primary" rteModalTrigger>Open modal xs</button>
</div>
```

Utilisez `[rteModalSize]` pour choisir un preset de largeur : `xs` (496 px), `s` (656 px), `m` (936 px), `l` (1168 px), `xl` (1328 px).

(`"xs" | "s" | "m" | "l" | "xl"`)

#### Contenu personnalisé

```html
<div
  rteModal
  #modalHost="rteModal"
  [rteModalId]="'modal-2'"
  [rteModalTitle]="'Préciser le motif du refus'"
  [rteModalDescription]="'En motivant votre refus, vous aidez votre collaborateur à mieux identifier comment corriger sa demande.'"
  [rteModalSize]="'m'"
  [rteModalPrimaryActionLabel]="'Continue'"
  [rteModalSecondaryActionLabel]="'Cancel'"
  (rteModalPrimaryActionClick)="modalHost.close()"
  (rteModalSecondaryActionClick)="modalHost.close()"
>
  <button rteButton rteButtonVariant="primary" rteModalTrigger>Open Modal</button>
  <ng-template #customContent>
    <rte-textarea resizeable="true" />
    <rte-select [options]="selectOptions" />
  </ng-template>
</div>
```

Cet exemple ajoute `#customContent` et définit `[rteModalSize]="'m'"`. Projetez des champs de formulaire via `#customContent` lorsque le paragraphe de description ne suffit pas.

#### Action principale destructive

Utilisez `[rteModalPrimaryActionIsCritical]="true"` pour les actions destructives sur le bouton principal (n'utilisez pas l'emplacement secondaire pour une suppression).

```html
<div
  rteModal
  #modalHost="rteModal"
  [rteModalId]="'modal-danger'"
  [rteModalTitle]="'Delete 3 documents'"
  [rteModalDescription]="'The selected documents will be deleted.'"
  [rteModalSize]="'s'"
  [rteModalIcon]="'delete'"
  [rteModalPrimaryActionLabel]="'Delete'"
  [rteModalSecondaryActionLabel]="'Cancel'"
  [rteModalPrimaryActionIsCritical]="true"
  (rteModalPrimaryActionClick)="onDelete(); modalHost.close()"
  (rteModalSecondaryActionClick)="modalHost.close()"
>
  <button rteButton rteButtonVariant="primary" rteModalTrigger>Open Modal</button>
</div>
```

#### Split button en action principale

Définissez `rteModalPrimaryActionType` sur `split-button` et passez les options de menu ainsi que `rteModalPrimarySplitButtonAriaLabelRight`.

```html
<div
  rteModal
  #modalHost="rteModal"
  [rteModalId]="'modal-split'"
  [rteModalTitle]="'Save document'"
  [rteModalDescription]="'Choose how to save your changes.'"
  [rteModalPrimaryActionLabel]="'Save'"
  [rteModalSecondaryActionLabel]="'Cancel'"
  [rteModalPrimaryActionType]="'split-button'"
  [rteModalPrimarySplitButtonOptions]="splitMenuOptions"
  [rteModalPrimarySplitButtonAriaLabelRight]="'More save options'"
  (rteModalPrimaryActionClick)="onSave(); modalHost.close()"
  (rteModalPrimaryActionOptionClick)="onSaveOption($event); modalHost.close()"
  (rteModalSecondaryActionClick)="modalHost.close()"
>
  <button rteButton rteButtonVariant="primary" rteModalTrigger>Open Modal</button>
</div>
```

Gérez `(rteModalPrimaryActionOptionClick)` lorsque l'utilisateur choisit une entrée du menu split button. La valeur émise est l'`id` correspondant dans `rteModalPrimarySplitButtonOptions`.

#### Comparaison pied de page par entrées et templates legacy

Les entrées configurées (à gauche) et les templates dépréciés `#primaryButton` / `#secondaryButton` (à droite) produisent la même disposition du pied de page lorsque les libellés correspondent.

```html
<div style="display: flex; gap: 16px;">
  <div
    rteModal
    #inputModalHost="rteModal"
    [rteModalId]="'modal-input-footer'"
    [rteModalTitle]="'Save changes'"
    [rteModalPrimaryActionLabel]="'Save'"
    [rteModalSecondaryActionLabel]="'Cancel'"
    (rteModalPrimaryActionClick)="inputModalHost.close()"
    (rteModalSecondaryActionClick)="inputModalHost.close()"
  >
    <button rteButton rteModalTrigger>Open (input footer)</button>
  </div>
  <div rteModal #legacyModalHost="rteModal" [rteModalId]="'modal-legacy-footer'" [rteModalTitle]="'Save changes'">
    <button rteButton rteModalTrigger>Open (legacy templates)</button>
    <ng-template #primaryButton>
      <button rteButton (click)="legacyModalHost.close()">Save</button>
    </ng-template>
    <ng-template #secondaryButton>
      <button rteButton (click)="legacyModalHost.close()">Cancel</button>
    </ng-template>
  </div>
</div>
```

Les nouvelles intégrations doivent utiliser le pied de page par entrées. Les templates legacy restent réservés à la rétrocompatibilité.

## Limitations

### Deux boutons d'action maximum dans le pied de page

Le pied de page prend en charge une action principale et une action secondaire optionnelle, plus le bouton de fermeture dans l'en-tête. Un troisième bouton dans le pied de page n'est pas supporté. Lorsque davantage d'actions sont nécessaires, privilégiez l'ouverture du contenu en dehors de la modale, le regroupement d'actions dans un Split Button en action principale (voir DSR-838), ou le placement d'actions supplémentaires dans `#customContent`.

### Pied de page configuré vs templates legacy

Préférez les entrées d'action de pied de page (`rteModalPrimaryActionLabel`, les sorties et les entrées associées). Les templates legacy `#primaryButton` et `#secondaryButton` restent supportés pour les applications existantes mais sont dépréciés dans la documentation publiée.

Lorsque des entrées configurées et des templates legacy coexistent, le pied de page configuré est rendu et un avertissement est journalisé en console de développement.

Sur le chemin configuré, l'action principale doit être un Button du design system (`rteModalPrimaryActionType` `"button"`) ou un Split Button (`"split-button"`). L'action secondaire est toujours un Button neutral lorsque `rteModalSecondaryActionLabel` est défini.

### Taille et couleur de l'icône d'en-tête

La taille de l'icône d'en-tête est fixe (`xl`) et sa couleur suit les design tokens. Seuls le nom de l'icône (`rteModalIcon`) et l'apparence (`rteModalIconAppearance` : `outlined` ou `filled`) sont configurables. Les surcharges de taille ou de couleur ne sont pas supportées.

### Action principale requise

La modale ne s'ouvre pas sans action principale au pied de page. Fournissez `rteModalPrimaryActionLabel` sur le chemin configuré, ou un template legacy `#primaryButton`. Si aucun des deux n'est présent, la directive journalise une erreur et ne crée pas l'overlay.

### Sélecteur de composant interne

`rte-modal` est un composant d'overlay interne. Les templates applicatifs doivent utiliser la directive `[rteModal]`.

### Largeur fixe par taille

La largeur de la modale est contrôlée par des presets de taille, pas par du CSS consommateur. Largeurs par défaut : `xs` 496 px, `s` 656 px, `m` 936 px, `l` 1168 px, `xl` 1328 px.

### Verrouillage du défilement du body

Tant qu'elle est ouverte, la directive définit `document.body.style.overflow` à `"hidden"`. Elle le restaure à `"unset"` lorsque la modale est détruite.

### La touche Échap dépend de la fermeture au clic extérieur

Appuyer sur Échap ferme la modale uniquement lorsque `[rteModalCloseOnClickOutside]` est à `true`. Lorsqu'il est à `false`, les clics sur le fond et Échap sont tous deux désactivés.

### rteModalIsOpen n'est pas connecté

L'entrée `rteModalIsOpen` existe sur la directive mais n'est pas utilisée pour contrôler la visibilité. Ouvrez la modale avec `[rteModalTrigger]`, `showModal()`, ou des appels impératifs sur l'export `rteModal`.

### Piège de focus

Le focus est piégé à l'intérieur de la boîte de dialogue tant qu'elle est ouverte. La tabulation parcourt les éléments focusables de la modale, y compris les boutons du pied de page et le bouton de fermeture de l'en-tête.

### Troncature du titre

Les titres longs sont tronqués avec une ellipse dans l'en-tête. Gardez les titres concis.

### Délai d'animation de fermeture

Après l'appel à `close()`, l'overlay est détruit après un délai de 200 ms pour laisser l'animation de sortie se terminer.

## FAQ

Q : Comment ouvrir une modale depuis TypeScript sans bouton déclencheur ?

R : Consultez la section Usage / Ouverture programmatique. Omettez `[rteModalTrigger]` et appelez `showModal()` sur l'export `rteModal` via `@ViewChild`. Appelez `close()` depuis les sorties d'action lorsque l'utilisateur confirme ou annule.

Q : J'ai besoin de trois actions dans le pied de page (par exemple supprimer, télécharger et fermer) — puis-je ajouter un bouton tertiaire ?

R : Consultez la section Limitations / Deux boutons d'action maximum dans le pied de page. Le pied de page de la modale ne supporte qu'un bouton principal, un bouton secondaire optionnel et le bouton de fermeture de l'en-tête. L'évolution d'un bouton tertiaire a été examinée et n'a pas été validée. Pour regrouper des actions, envisagez un Split Button en tant qu'action principale (DSR-838). Pour la visualisation d'une pièce jointe, l'ouverture en dehors de la modale est préférable avant d'effectuer des actions.

Q : Peut-on obtenir une variante avec bouton tertiaire sur Modal ?

R : Cette évolution n'a pas été validée par le comité Design System. Suivez DSR-838 pour l'alternative Split Button sur l'emplacement de l'action principale. La fermeture reste disponible via le bouton de fermeture de l'en-tête ou `rteModalSecondaryActionLabel` / `#secondaryButton`.

Q : Dois-je utiliser le bouton secondaire pour une action destructive comme la suppression ?

R : Utilisez `[rteModalPrimaryActionIsCritical]="true"` sur l'action principale pour les actions destructives, pas le bouton secondaire. Le bouton secondaire est destiné aux actions neutres comme l'annulation. Consultez l'exemple « Action principale destructive » dans Usage.

Q : Comment personnaliser la taille ou la couleur de l'icône d'en-tête ?

R : Consultez la section Limitations / Taille et couleur de l'icône d'en-tête. Seuls `rteModalIcon` et `rteModalIconAppearance` sont supportés. La taille et la couleur de l'icône sont fixées par le design et correspondent aux règles du composant Figma.

Q : La modale ne s'ouvre pas — que manque-t-il ?

R : Consultez la section Limitations / Action principale requise. Fournissez `rteModalPrimaryActionLabel` ou un template legacy `#primaryButton`. Sans l'un ou l'autre, la directive journalise une erreur et ne crée pas l'overlay.

Q : `rteModalIsOpen` ouvre-t-il la modale à l'initialisation ?

R : Non. L'entrée `rteModalIsOpen` est définie mais non connectée à la visibilité. Utilisez `[rteModalTrigger]`, `showModal()`, ou appelez `close()` / `showModal()` sur l'export `rteModal`. Consultez la section Limitations / rteModalIsOpen n'est pas connecté.
