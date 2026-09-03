# DatePicker

## Overview

```tsx
import { DatePicker } from "@design-system-rte/react";

<DatePicker
  id="default-datepicker"
  label="Date"
  value={null}
  onChange={() => {}}
/>
```

## API

Le composant `DatePicker` constitue l'API publique. Contrôlez la date sélectionnée via `value` / `defaultValue` et `onChange`, et configurez le champ, les contraintes et les actions du calendrier via les props.

| Nom | Type | Valeur par défaut | Description |
| --- | --- | --- | --- |
| `id` | `string` | — (requis) | Identifiant unique de l'élément input. |
| `label` | `string` | — (requis) | Texte du libellé visible. |
| `labelId` | `string` | — | ID appliqué à l'élément label. Utilisé comme `aria-labelledby` sur l'input lorsqu'il est fourni. |
| `required` | `boolean` | `false` | Marque le champ comme requis sur le libellé. |
| `showLabelRequirement` | `boolean` | `false` | Affiche l'indicateur de champ requis lorsque `required` est `true`. |
| `width` | `string` \| `number` | `"248px"` | Largeur du conteneur du picker. |
| `value` | `Date` \| `null` | — | Date sélectionnée en mode contrôlé. Omettez pour un mode non contrôlé avec `defaultValue`. |
| `defaultValue` | `Date` \| `null` | — | Date initiale en mode non contrôlé. |
| `onChange` | `(newDate: Date \| null) => void` | — | Appelé lorsque la date validée change. |
| `disabled` | `boolean` | `false` | Désactive le champ et empêche l'ouverture du calendrier. |
| `readonly` | `boolean` | `false` | Empêche la modification de la valeur et l'ouverture du calendrier. |
| `isError` | `boolean` | — | Applique l'état visuel d'erreur au champ. |
| `assistiveTextLabel` | `string` | — | Texte d'aide sous le champ. Masqué pendant que le calendrier est ouvert. |
| `assistiveAppearance` | `"description"` \| `"error"` \| `"success"` \| `"link"` | `"description"` | Style du texte d'aide. Remplacé par `"error"` lorsque `isError` est `true`. |
| `showAssistiveIcon` | `boolean` | `false` | Affiche une icône à côté du texte d'aide. |
| `assistiveTextLink` | `string` | — | URL optionnelle pour le texte d'aide avec l'apparence `"link"`. |
| `minDate` | `Date` | — | Date sélectionnable la plus ancienne. |
| `maxDate` | `Date` | — | Date sélectionnable la plus récente. |
| `disabledDates` | `Date[]` | — | Dates individuelles non sélectionnables. |
| `hasAction` | `boolean` | `false` | Lorsque `true`, le calendrier affiche Annuler et Confirmer. La sélection reste en attente jusqu'à Confirmer. Lorsque `false`, la sélection d'un jour valide immédiatement et ferme le menu. |
| `onCancel` | `() => void` | — | Appelé lorsque l'utilisateur clique sur Annuler dans le calendrier. |
| `onValidate` | `() => void` | — | Appelé lorsque l'utilisateur clique sur Confirmer dans le calendrier. |

## Usage

Importez `DatePicker` depuis `@design-system-rte/react` et gérez la date sélectionnée dans l'état du composant. Passez `value` et `onChange` pour un usage contrôlé.

```tsx
import { useState } from "react";
import { DatePicker } from "@design-system-rte/react";

function Example() {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <DatePicker
      id="default-datepicker"
      label="Date"
      value={date}
      onChange={setDate}
      hasAction
    />
  );
}
```

Le calendrier est projeté dans `#overlay-root`. Vérifiez que la racine overlay est présente dans le shell applicatif.

#### Disabled

```tsx
<DatePicker
  id="disabled-datepicker"
  label="Date"
  value={date}
  onChange={setDate}
  disabled
/>
```

Désactive le champ segmenté et le déclencheur du calendrier.

#### Error

```tsx
<DatePicker
  id="error-datepicker"
  label="Date"
  value={date}
  onChange={setDate}
  isError
/>
```

Applique l'état visuel d'erreur au champ.

#### Uncontrolled default value

```tsx
<DatePicker
  id="uncontrolled-datepicker"
  label="Date"
  defaultValue={new Date(2026, 5, 15)}
/>
```

Initialise le picker avec une date sans contrôler `value` depuis l'état parent.

#### Controlled prop update

```tsx
const [date, setDate] = useState<Date | null>(new Date(2026, 5, 10));

return (
  <>
    <button type="button" onClick={() => setDate(new Date(2026, 5, 22))}>
      Set to 22/06/2026
    </button>
    <button type="button" onClick={() => setDate(null)}>
      Clear
    </button>
    <DatePicker
      id="controlled-datepicker"
      label="Date"
      value={date}
      onChange={setDate}
    />
  </>
);
```

La date affichée suit les mises à jour externes de `value` depuis l'état parent.

## Limitations

### Format de date

L'input affiche les dates au format **JJ/MM/AAAA**. L'ordre des segments et les séparateurs sont fixes ; les noms de mois du calendrier suivent la locale du runtime mais le format saisi ne change pas.

### Sélection en attente vs validée

Lorsque `hasAction` est `true`, la sélection d'un jour met à jour une valeur en attente jusqu'au clic sur **Confirmer**. Avec `hasAction` à `false`, la sélection valide immédiatement et ferme le menu. Annuler et la fermeture de l'overlay restaurent la dernière valeur validée lorsque les actions sont activées.

### Visibilité du texte d'aide

Le texte d'aide est masqué pendant que le calendrier est ouvert (`assistiveTextLabel && !isDropdownOpen`). Ne comptez pas sur la visibilité du texte d'aide pendant l'interaction avec le calendrier.

### Portail overlay

Le menu calendrier est rendu dans `#overlay-root`. Sans la racine overlay dans le shell applicatif, le dropdown ne s'affichera pas correctement.
