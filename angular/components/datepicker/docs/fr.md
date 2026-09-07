# DatePicker

## Overview

```html
<rte-datepicker
  id="datepicker"
  labelText="Label"
  [hasLabel]="true"
/>
```

## API

Le composant `<rte-datepicker>` constitue l'API publique. Il implémente `ControlValueAccessor` et expose des entrées et sorties pour la configuration du champ, les contraintes de date et le comportement du calendrier.

| Nom | Type | Valeur par défaut | Description |
| --- | --- | --- | --- |
| `id` | `string` | — | Identifiant unique du champ et du libellé associé. |
| `labelText` | `string` | `"Label"` | Texte du libellé visible. |
| `hasLabel` | `boolean` | `true` | Affiche ou masque le libellé. |
| `labelPosition` | `"top"` \| `"side"` | `"top"` | Position du libellé par rapport au champ. |
| `required` | `boolean` | `false` | Marque le champ comme requis pour le libellé et le contrôle segmenté. |
| `showLabelRequirement` | `boolean` | `false` | Affiche l'indicateur de champ requis lorsque `required` est `true`. |
| `width` | `string` | `"248px"` | Largeur du champ. Les valeurs sans unité sont interprétées en pixels. |
| `hasAssistiveText` | `boolean` | `false` | Affiche le texte d'aide sous le champ. |
| `assistiveTextLabel` | `string` | `""` | Contenu du texte d'aide. Affiché uniquement lorsque `hasAssistiveText` est `true`. |
| `assistiveTextAppearance` | `"description"` \| `"error"` | `"description"` | Style du texte d'aide. Remplacé par `"error"` lorsque `error` est `true`. |
| `showAssistiveIcon` | `boolean` | `false` | Affiche une icône à côté du texte d'aide. |
| `fieldAriaLabel` | `string` | `""` | Nom accessible du champ segmenté lorsqu'aucun libellé visible n'est utilisé. |
| `fieldAriaLabelledby` | `string` | `""` | ID d'un élément externe qui libelle le champ. Lorsque vide et `hasLabel` est `true`, l'ID du libellé interne est utilisé. |
| `disabled` | `boolean` | `false` | Désactive le champ et empêche l'ouverture du calendrier. |
| `readOnly` | `boolean` | `false` | Empêche la modification de la valeur et l'ouverture du calendrier. |
| `error` | `boolean` | `false` | Applique l'état visuel d'erreur au champ. |
| `minDate` | `Date` \| `undefined` | `undefined` | Date sélectionnable la plus ancienne. Les dates antérieures sont désactivées dans le calendrier et rejetées à la validation. |
| `maxDate` | `Date` \| `undefined` | `undefined` | Date sélectionnable la plus récente. Les dates postérieures sont désactivées dans le calendrier et rejetées à la validation. |
| `disabledDates` | `readonly Date[]` | `[]` | Dates individuelles non sélectionnables. |
| `locale` | `string` | `"fr-FR"` | Locale utilisée pour les libellés du calendrier et le formatage du champ. |
| `hasActions` | `boolean` | `true` | Lorsque `true`, le calendrier affiche Annuler et Confirmer et conserve la sélection en attente jusqu'à Confirmer. Lorsque `false`, la sélection d'un jour valide immédiatement et ferme le menu. |

| Sortie | Type | Description |
| --- | --- | --- |
| `valueChange` | `Date \| null` | Émis lorsque la valeur validée change (saisie, Confirmer, ou sélection immédiate lorsque `hasActions` est `false`). |
| `openedChange` | `boolean` | Émis lorsque le calendrier s'ouvre ou se ferme. |

Le composant prend aussi en charge les formulaires Angular via `formControlName`, `formControl` ou `[(ngModel)]`. Le type de valeur du contrôle de formulaire est `Date | null`.

## Usage

Importez `DatepickerComponent` et utilisez `<rte-datepicker>` dans vos templates. Le composant fonctionne avec les formulaires réactifs, les formulaires template-driven, ou la liaison bidirectionnelle via `(valueChange)`.

```typescript
import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { DatepickerComponent } from "@design-system-rte/angular";

@Component({
  selector: "app-example",
  imports: [ReactiveFormsModule, DatepickerComponent],
  template: `
    <form [formGroup]="form">
      <rte-datepicker
        formControlName="appointmentDate"
        id="appointment-date"
        labelText="Appointment date"
        [hasLabel]="true"
        locale="fr-FR"
        (valueChange)="onDateChange($event)"
        (openedChange)="onOpenedChange($event)"
      />
    </form>
  `,
})
export class ExampleComponent {
  readonly form = new FormGroup({
    appointmentDate: new FormControl<Date | null>(null, Validators.required),
  });

  onDateChange(date: Date | null): void {
    console.log(date);
  }

  onOpenedChange(open: boolean): void {
    console.log(open);
  }
}
```

N'utilisez pas `<rte-datepicker-menu>` ni `<rte-datepicker-segmented-field>` dans les templates applicatifs. Ces sélecteurs sont des briques internes gérées par `rte-datepicker`.

#### Error

```html
<rte-datepicker
  id="datepicker"
  labelText="Label"
  [hasLabel]="true"
  [error]="true"
  [hasAssistiveText]="true"
  assistiveTextLabel="Error message"
  assistiveTextAppearance="error"
  [showAssistiveIcon]="true"
/>
```

Affiche le champ en état d'erreur avec un texte d'aide et une icône d'erreur.

## Limitations

### Format de date

Le champ segmenté et la valeur validée utilisent un format d'affichage fixe **JJ/MM/AAAA** (`formatDate` dans core). L'entrée `locale` affecte les noms de mois du calendrier et les libellés d'accessibilité, pas l'ordre des segments ni le séparateur.

### Sélection en attente vs validée

Lorsque `hasActions` est `true` (valeur par défaut), la sélection d'un jour dans le calendrier ne met à jour qu'une valeur en attente. La valeur validée change lorsque l'utilisateur clique sur **Confirmer**, saisit une date valide complète, ou sélectionne un jour avec `hasActions` à `false`. Les fermetures — clic extérieur, Échap, Annuler, ou clic sur le champ segmenté pendant l'ouverture — restaurent la dernière valeur validée.

### Portail overlay

Le menu calendrier est rendu dans la couche overlay de l'application (`#overlay-root`). Vérifiez que la racine overlay est présente dans le shell applicatif ; sinon le menu n'apparaîtra pas ou le piégeage du focus ne s'activera pas.
