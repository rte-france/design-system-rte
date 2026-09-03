# DateRangePicker

## Overview

```tsx
import { DateRangePicker } from "@design-system-rte/react";
import { useState } from "react";

const [range, setRange] = useState<[Date | null, Date | null] | null>([
  new Date(2026, 4, 1),
  new Date(2026, 4, 10),
]);

<DateRangePicker
  id="date-range-picker"
  label="Période"
  value={range}
  onChange={setRange}
  hasAction
  assistiveTextLabel="Assistive text"
  showAssistiveIcon
/>
```

## API

Le composant `DateRangePicker` constitue l'API publique. Ses props configurent les champs segmentés de début et de fin, le calendrier déroulant et les actions optionnelles Confirmer / Annuler.

| Nom | Type | Valeur par défaut | Description |
| --- | --- | --- | --- |
| `id` | `string` | — (requis) | Identifiant unique du groupe de champs et de ses sous-éléments. |
| `label` | `string` | — (requis) | Libellé visible affiché au-dessus des champs. |
| `labelId` | `string` | — | Identifiant personnalisé du libellé de groupe. Par défaut `{id}-label`. |
| `required` | `boolean` | `false` | Marque le champ comme requis dans le libellé. |
| `showLabelRequirement` | `boolean` | `false` | Affiche l'indicateur de champ requis à côté du libellé lorsque `required` est `true`. |
| `value` | `[Date \| null, Date \| null] \| null` | — | Valeur contrôlée de la plage sous forme de tuple `[début, fin]`. |
| `defaultValue` | `[Date \| null, Date \| null] \| null` | — | Plage initiale en mode non contrôlé. |
| `onChange` | `(value: [Date \| null, Date \| null] \| null) => void` | — | Appelé lorsque la plage change (saisie ou sélection dans le calendrier). |
| `hasAction` | `boolean` | `false` | Si `true`, le calendrier affiche les boutons Confirmer et Annuler ; la plage n'est validée qu'à la confirmation. |
| `onValidate` | `() => void` | — | Appelé lorsque l'utilisateur confirme la sélection (`hasAction` doit être `true`). |
| `onCancel` | `() => void` | — | Appelé lorsque l'utilisateur annule une sélection en attente (`hasAction` doit être `true`). |
| `minDate` | `Date` | — | Date sélectionnable la plus ancienne (inclusive). |
| `maxDate` | `Date` | — | Date sélectionnable la plus récente (inclusive). |
| `disabledDates` | `Date[]` | — | Dates individuelles non sélectionnables. |
| `disabled` | `boolean` | `false` | Désactive les deux champs et les boutons d'ouverture du calendrier. |
| `readonly` | `boolean` | `false` | Empêche la modification des champs segmentés et l'ouverture du calendrier. |
| `isError` | `boolean` | `false` | Applique le style d'erreur aux champs. |
| `assistiveTextLabel` | `string` | — | Texte d'aide affiché sous le champ. |
| `assistiveAppearance` | `"description" \| "error"` | `"description"` | Apparence du texte d'aide. Remplacée par `"error"` lorsque `isError` est `true`. |
| `showAssistiveIcon` | `boolean` | `false` | Affiche une icône à côté du texte d'aide. |
| `assistiveTextLink` | `string` | — | URL optionnelle rendue dans le texte d'aide. |
| `width` | `string` | `"490px"` | Largeur CSS du conteneur du sélecteur. |

## Usage

Utilisez `DateRangePicker` en mode contrôlé avec `value` et `onChange`. La valeur est un tuple `[dateDébut, dateFin]` où l'une ou l'autre borne peut être `null` tant que la plage est incomplète.

```tsx
import { DateRangePicker } from "@design-system-rte/react";
import { useState } from "react";

function PeriodField() {
  const [range, setRange] = useState<[Date | null, Date | null] | null>([
    new Date(2026, 4, 1),
    new Date(2026, 4, 10),
  ]);

  return (
    <DateRangePicker
      id="date-range-picker"
      label="Période"
      value={range}
      onChange={setRange}
      hasAction
      assistiveTextLabel="Assistive text"
      showAssistiveIcon
    />
  );
}
```

Lorsque `hasAction` est `true`, les modifications du calendrier restent en attente jusqu'au clic sur Confirmer. Annuler, un clic à l'extérieur ou la perte de focus sur les champs restaure la dernière plage validée et appelle `onCancel` le cas échéant.

#### Uncontrolled default value

```tsx
<DateRangePicker
  id="date-range-picker"
  label="Période"
  defaultValue={[new Date(2026, 4, 1), new Date(2026, 4, 10)]}
  onChange={() => {}}
  hasAction
/>
```

Initialisez le champ sans prop `value` en passant `defaultValue`.

#### Controlled prop update

```tsx
const [range, setRange] = useState<[Date | null, Date | null] | null>([
  new Date(2026, 4, 1),
  new Date(2026, 4, 10),
]);

<button onClick={() => setRange([new Date(2026, 5, 1), new Date(2026, 5, 10)])}>
  Set range
</button>
<button onClick={() => setRange(null)}>Clear</button>

<DateRangePicker id="date-range-picker" label="Période" value={range} onChange={setRange} hasAction />
```

Mettez à jour ou effacez la plage depuis le composant parent en modifiant la prop `value`.

#### Disabled

```tsx
<DateRangePicker
  id="date-range-picker"
  label="Période"
  value={range}
  onChange={setRange}
  disabled
  hasAction
/>
```

Désactivez la saisie et l'interaction avec le calendrier avec `disabled`.

#### Error

```tsx
<DateRangePicker
  id="date-range-picker"
  label="Période"
  value={range}
  onChange={setRange}
  isError
  assistiveTextLabel="Champ en erreur"
  assistiveAppearance="error"
  hasAction
/>
```

Affichez le style d'erreur sur les champs et le texte d'aide avec `isError` et `assistiveAppearance="error"`.

#### Readonly

```tsx
<DateRangePicker
  id="date-range-picker"
  label="Période"
  value={range}
  onChange={setRange}
  readonly
  hasAction
/>
```

Empêchez la modification tout en conservant la plage affichée avec `readonly`.

## Limitations

### Largeur minimale

Le sélecteur impose une largeur minimale de `320px` (`DATERANGEPICKER_MIN_WIDTH`). Les valeurs inférieures sont limitées par les styles du composant.

### Format de saisie

Les champs segmentés utilisent un masque fixe `JJ/MM/AAAA`. Les dates en dehors de `minDate`, `maxDate` ou listées dans `disabledDates` ne peuvent pas être validées depuis les champs texte ni le calendrier.

### Sélection de plage dans le calendrier

Dans le calendrier, le premier clic définit la date de début et le second la date de fin. Si la seconde date est antérieure à la date de début, la plage est réinitialisée à `[dateSélectionnée, null]` et la sélection reprend depuis la nouvelle date de début.

Lorsque `hasAction` est `false`, la plage complète ferme le calendrier et est validée immédiatement. Lorsque `hasAction` est `true`, la plage reste en attente jusqu'à Confirmer.

### Modifications en attente avec actions

Avec `hasAction={true}`, les modifications du calendrier ne sont définitives qu'après Confirmer. Fermer le menu (clic extérieur, Échap ou perte de focus avec des modifications en attente) restaure la dernière plage validée et déclenche `onCancel`.
