# DateRangePicker

## Overview

```html
<rte-daterangepicker
  id="date-range-picker"
  labelText="Période"
  [(ngModel)]="range"
  [hasActions]="true"
  [hasAssistiveText]="true"
  assistiveTextLabel="Assistive text"
  [showAssistiveIcon]="true"
/>
```

```typescript
import { DaterangepickerComponent } from "@design-system-rte/angular";
import { FormsModule } from "@angular/forms";

range: [Date | null, Date | null] = [
  new Date(2026, 4, 1),
  new Date(2026, 4, 10),
];
```

## API

Le composant `rte-daterangepicker` (`DaterangepickerComponent`) constitue l'API publique. Liez la plage avec `ngModel` ou un contrôle de formulaire réactif ; écoutez `valueChange` pour une gestion explicite de la sortie.

| Nom | Type | Valeur par défaut | Description |
| --- | --- | --- | --- |
| `id` | `string` | — (requis) | Identifiant unique du groupe de champs et de ses sous-éléments. |
| `labelText` | `string` | `"Label"` | Libellé visible affiché au-dessus des champs. |
| `hasLabel` | `boolean` | `true` | Affiche ou masque le bloc de libellé. |
| `labelPosition` | `"top" \| "side"` | `"top"` | Position du libellé par rapport aux champs. |
| `required` | `boolean` | `false` | Marque le champ comme requis dans le libellé. |
| `showLabelRequirement` | `boolean` | `false` | Affiche l'indicateur de champ requis à côté du libellé lorsque `required` est `true`. |
| `width` | `string` | `"490px"` | Largeur CSS du conteneur du sélecteur. |
| `hasAssistiveText` | `boolean` | `false` | Active le texte d'aide sous le champ. |
| `assistiveTextLabel` | `string` | `""` | Contenu du texte d'aide. |
| `assistiveTextAppearance` | `"description" \| "error"` | `"description"` | Apparence du texte d'aide. Remplacée par `"error"` lorsque `error` est `true`. |
| `showAssistiveIcon` | `boolean` | `false` | Affiche une icône à côté du texte d'aide. |
| `fieldAriaLabelledby` | `string` | `""` | `aria-labelledby` personnalisé pour le groupe de champs. Si vide, utilise l'id du libellé lorsque `hasLabel` est `true`. |
| `disabled` | `boolean` | `false` | Désactive les deux champs et les boutons d'ouverture du calendrier. |
| `readOnly` | `boolean` | `false` | Empêche la modification des champs segmentés et l'ouverture du calendrier. |
| `error` | `boolean` | `false` | Applique le style d'erreur aux champs. |
| `minDate` | `Date` | — | Date sélectionnable la plus ancienne (inclusive). |
| `maxDate` | `Date` | — | Date sélectionnable la plus récente (inclusive). |
| `disabledDates` | `readonly Date[]` | `[]` | Dates individuelles non sélectionnables. |
| `locale` | `string` | `"fr-FR"` | Locale utilisée pour le formatage des dates dans les champs segmentés. |
| `hasActions` | `boolean` | `true` | Si `true`, le calendrier affiche les boutons Confirmer et Annuler ; la plage n'est validée qu'à la confirmation. |
| `valueChange` | `EventEmitter<[Date \| null, Date \| null]>` | — | Émis lorsque la plage validée change. Également invoqué via `ControlValueAccessor` avec les formulaires. |
| `openedChange` | `EventEmitter<boolean>` | — | Émis lorsque le calendrier s'ouvre ou se ferme. |

## Usage

Importez `DaterangepickerComponent` et liez la plage avec `ngModel` ou `formControlName`. La valeur est un tuple `[dateDébut, dateFin]` où l'une ou l'autre borne peut être `null` tant que la plage est incomplète.

```typescript
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DaterangepickerComponent } from "@design-system-rte/angular";

@Component({
  selector: "app-period-field",
  imports: [FormsModule, DaterangepickerComponent],
  template: `
    <rte-daterangepicker
      id="date-range-picker"
      labelText="Période"
      [(ngModel)]="range"
      [hasActions]="true"
      [hasAssistiveText]="true"
      assistiveTextLabel="Assistive text"
      [showAssistiveIcon]="true"
    />
  `,
})
export class PeriodFieldComponent {
  range: [Date | null, Date | null] = [
    new Date(2026, 4, 1),
    new Date(2026, 4, 10),
  ];
}
```

N'utilisez pas les sélecteurs internes tels que `rte-daterangepicker-menu` ou `rte-datepicker-segmented-field` dans les templates applicatifs. Ce sont des détails d'implémentation de `rte-daterangepicker`.

Lorsque `hasActions` est `true`, les modifications du calendrier restent en attente jusqu'au clic sur Confirmer. Annuler, un clic à l'extérieur ou la perte de focus sur les champs restaure la dernière plage validée.

#### Disabled

```html
<rte-daterangepicker
  id="date-range-picker"
  labelText="Période"
  [(ngModel)]="range"
  [disabled]="true"
/>
```

Désactivez la saisie et l'interaction avec le calendrier avec `disabled`.

#### Error

```html
<rte-daterangepicker
  id="date-range-picker"
  labelText="Période"
  [(ngModel)]="range"
  [error]="true"
  [hasAssistiveText]="true"
  assistiveTextLabel="Champ en erreur"
  assistiveTextAppearance="error"
/>
```

Affichez le style d'erreur sur les champs et le texte d'aide avec `error` et `assistiveTextAppearance="error"`.

#### Readonly

```html
<rte-daterangepicker
  id="date-range-picker"
  labelText="Période"
  [(ngModel)]="range"
  [readOnly]="true"
/>
```

Empêchez la modification tout en conservant la plage affichée avec `readOnly`.

## Limitations

### Largeur minimale

Le conteneur accepte une `width` personnalisée mais est conçu autour d'une valeur par défaut de `490px` et d'un minimum de `320px` (`DATERANGEPICKER_MIN_WIDTH`).

### Format de saisie

Les champs segmentés utilisent un masque de date dépendant de la locale (locale par défaut `fr-FR`, généralement `JJ/MM/AAAA`). Les dates en dehors de `minDate`, `maxDate` ou listées dans `disabledDates` ne peuvent pas être validées depuis les champs texte ni le calendrier.

### Sélection de plage dans le calendrier

Dans le calendrier, le premier clic définit la date de début et le second la date de fin. Si la seconde date est antérieure à la date de début, la plage est réinitialisée à `[dateSélectionnée, null]` et la sélection reprend depuis la nouvelle date de début.

Lorsque `hasActions` est `false`, la plage complète ferme le calendrier et est validée immédiatement. Lorsque `hasActions` est `true` (valeur par défaut), la plage reste en attente jusqu'à Confirmer.

### Modifications en attente avec actions

Avec `[hasActions]="true"`, les modifications du calendrier ne sont définitives qu'après Confirmer. Fermer le menu (clic extérieur, clic sur le champ segmenté alors que le menu est ouvert, ou perte de focus avec des modifications en attente) restaure la dernière plage validée.
